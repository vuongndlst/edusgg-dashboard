// EduSGG Interactive Gallery & Diagram Modal Controller
let allDiagrams = [];
let filteredDiagrams = [];
let selectedCategory = "all";
let searchQuery = "";
let currentModalIndex = -1;
let currentModalDiagram = null;
let currentGraphMode = "graphviz"; // "graphviz" | "spatial" | "force"
let network = null;

const COLOR_CLASSES = {
  sky: "bg-sky-100 text-sky-800 border-sky-200",
  blue: "bg-blue-100 text-blue-800 border-blue-200",
  emerald: "bg-emerald-100 text-emerald-800 border-emerald-200",
  indigo: "bg-indigo-100 text-indigo-800 border-indigo-200",
  purple: "bg-purple-100 text-purple-800 border-purple-200",
  amber: "bg-amber-100 text-amber-800 border-amber-200",
  teal: "bg-teal-100 text-teal-800 border-teal-200",
  orange: "bg-orange-100 text-orange-800 border-orange-200",
  stone: "bg-stone-100 text-stone-800 border-stone-200",
  violet: "bg-violet-100 text-violet-800 border-violet-200",
  green: "bg-green-100 text-green-800 border-green-200",
  rose: "bg-rose-100 text-rose-800 border-rose-200",
  red: "bg-red-100 text-red-800 border-red-200",
  cyan: "bg-cyan-100 text-cyan-800 border-cyan-200",
  slate: "bg-slate-100 text-slate-800 border-slate-200",
};

function initGallery() {
  if (typeof GALLERY_DATA === "undefined") {
    console.error("GALLERY_DATA not found. Ensure gallery_data.js is loaded.");
    return;
  }

  allDiagrams = GALLERY_DATA.diagrams || [];
  filteredDiagrams = [...allDiagrams];

  renderCategoryPills();
  setupSearchAndFilters();
  setupModalEvents();
  renderGalleryGrid();
}

function renderCategoryPills() {
  const container = document.getElementById("category-pills-container");
  if (!container) return;

  // Compute counts
  const counts = { all: allDiagrams.length };
  allDiagrams.forEach((d) => {
    const c = d.category || "other";
    counts[c] = (counts[c] || 0) + 1;
  });

  const categories = GALLERY_DATA.categories || {};
  let html = `
    <button data-cat="all" class="category-pill px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
      selectedCategory === "all"
        ? "bg-indigo-600 text-white border-indigo-600 shadow-2xs"
        : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
    }">
      <i class="fa-solid fa-border-all mr-1.5"></i>Tất cả (${counts.all})
    </button>
  `;

  // Sort categories by frequency
  const sortedKeys = Object.keys(categories).sort((a, b) => (counts[b] || 0) - (counts[a] || 0));

  sortedKeys.forEach((key) => {
    const catCount = counts[key] || 0;
    if (catCount === 0) return;
    const meta = categories[key];
    const isSel = selectedCategory === key;
    html += `
      <button data-cat="${key}" class="category-pill px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
        isSel
          ? "bg-indigo-600 text-white border-indigo-600 shadow-2xs"
          : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
      }">
        <i class="fa-solid ${meta.icon || "fa-tag"} mr-1.5"></i>${meta.vi} (${catCount})
      </button>
    `;
  });

  container.innerHTML = html;

  container.querySelectorAll(".category-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedCategory = btn.getAttribute("data-cat");
      renderCategoryPills();
      applyFilters();
    });
  });
}

function setupSearchAndFilters() {
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }
}

function applyFilters() {
  filteredDiagrams = allDiagrams.filter((d) => {
    // Category match
    if (selectedCategory !== "all" && d.category !== selectedCategory) {
      return false;
    }
    // Search query match
    if (searchQuery) {
      const matchId = d.image_id.toLowerCase().includes(searchQuery) || d.raw_id.includes(searchQuery);
      const matchTitle = (d.title || "").toLowerCase().includes(searchQuery);
      const matchCat = (d.category_vi || "").toLowerCase().includes(searchQuery);
      if (!matchId && !matchTitle && !matchCat) return false;
    }
    return true;
  });

  // Update counter
  const counter = document.getElementById("diagrams-counter");
  if (counter) {
    counter.innerText = `${filteredDiagrams.length} / ${allDiagrams.length} sơ đồ`;
  }

  renderGalleryGrid();
}

function renderGalleryGrid() {
  const grid = document.getElementById("gallery-grid");
  const empty = document.getElementById("gallery-empty");
  if (!grid) return;

  if (filteredDiagrams.length === 0) {
    grid.innerHTML = "";
    if (empty) empty.classList.remove("hidden");
    return;
  }

  if (empty) empty.classList.add("hidden");

  // Render cards
  grid.innerHTML = filteredDiagrams
    .map((d, index) => {
      const colorCls = COLOR_CLASSES[d.category_color] || COLOR_CLASSES.slate;
      const nodeCount = d.scene_graph_topology ? d.scene_graph_topology.nodes.length : 0;
      const edgeCount = d.scene_graph_topology ? d.scene_graph_topology.edges.length : 0;
      const factCount = d.atomic_facts ? d.atomic_facts.length : 0;

      return `
        <div data-index="${index}" class="diagram-card bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs card-zoom cursor-pointer group flex flex-col">
          <!-- Card Image Thumbnail -->
          <div class="relative w-full h-44 bg-slate-900/5 flex items-center justify-center overflow-hidden border-b border-slate-100 p-2">
            <img src="${d.image_url}" alt="${d.image_id}" loading="lazy"
                 class="max-w-full max-h-full object-contain group-hover:scale-105 transition duration-300 select-none" />
            <span class="absolute top-2 right-2 badge ${colorCls} border text-[10px] shadow-2xs">
              <i class="fa-solid ${d.category_icon || "fa-tag"} mr-1"></i>${d.category_vi}
            </span>
          </div>

          <!-- Card Body -->
          <div class="p-3.5 flex-1 flex flex-col justify-between space-y-2.5">
            <div>
              <div class="flex items-center justify-between">
                <span class="font-extrabold text-xs text-slate-800">${d.image_id}</span>
                <span class="text-[10px] text-slate-400 font-medium">${d.image_width}x${d.image_height}</span>
              </div>
              <h4 class="text-xs font-semibold text-slate-600 line-clamp-2 mt-1" title="${d.title}">
                ${d.title}
              </h4>
            </div>

            <div class="flex items-center justify-between text-[10px] text-slate-500 pt-2 border-t border-slate-100">
              <span class="flex items-center gap-1" title="Số nút thực thể">
                <i class="fa-solid fa-circle-nodes text-indigo-500"></i> ${nodeCount}
              </span>
              <span class="flex items-center gap-1" title="Số liên kết có hướng">
                <i class="fa-solid fa-arrow-right text-rose-500"></i> ${edgeCount}
              </span>
              <span class="flex items-center gap-1 font-semibold text-emerald-700" title="Số sự thật trích xuất">
                <i class="fa-solid fa-list-check"></i> ${factCount} facts
              </span>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  // Attach card click handlers
  grid.querySelectorAll(".diagram-card").forEach((card) => {
    card.addEventListener("click", () => {
      const idx = parseInt(card.getAttribute("data-index"), 10);
      openModal(idx);
    });
  });
}

function setupModalEvents() {
  const modal = document.getElementById("diagram-modal");
  const btnClose = document.getElementById("modal-btn-close");
  const btnPrev = document.getElementById("modal-btn-prev");
  const btnNext = document.getElementById("modal-btn-next");
  const toggleOverlay = document.getElementById("toggle-overlay");

  if (btnClose) btnClose.addEventListener("click", closeModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      if (currentModalIndex > 0) openModal(currentModalIndex - 1);
    });
  }

  if (btnNext) {
    btnNext.addEventListener("click", () => {
      if (currentModalIndex < filteredDiagrams.length - 1) openModal(currentModalIndex + 1);
    });
  }

  if (toggleOverlay) {
    toggleOverlay.addEventListener("change", renderOverlay);
  }

  window.addEventListener("resize", () => {
    if (currentModalDiagram) renderOverlay();
  });

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    const modalVisible = modal && !modal.classList.contains("hidden");
    if (!modalVisible) return;

    if (e.key === "Escape") closeModal();
    else if (e.key === "ArrowLeft" && currentModalIndex > 0) openModal(currentModalIndex - 1);
    else if (e.key === "ArrowRight" && currentModalIndex < filteredDiagrams.length - 1) openModal(currentModalIndex + 1);
  });

  // Graph mode tabs
  setupGraphModeTabs();
}

function setupGraphModeTabs() {
  const tabG = document.getElementById("tab-graphviz");
  const tabS = document.getElementById("tab-spatial");
  const tabF = document.getElementById("tab-force");

  const activate = (tab) => {
    [tabG, tabS, tabF].forEach((t) => {
      if (t) t.className = "px-2.5 py-1 rounded-md text-slate-600 hover:text-slate-900";
    });
    if (tab) tab.className = "px-2.5 py-1 rounded-md bg-white text-indigo-700 shadow-2xs font-semibold";
  };

  if (tabG) {
    tabG.addEventListener("click", () => {
      currentGraphMode = "graphviz";
      activate(tabG);
      updateModalGraph();
    });
  }

  if (tabS) {
    tabS.addEventListener("click", () => {
      currentGraphMode = "spatial";
      activate(tabS);
      updateModalGraph();
    });
  }

  if (tabF) {
    tabF.addEventListener("click", () => {
      currentGraphMode = "force";
      activate(tabF);
      updateModalGraph();
    });
  }
}

function openModal(index) {
  if (index < 0 || index >= filteredDiagrams.length) return;
  currentModalIndex = index;
  currentModalDiagram = filteredDiagrams[index];
  const d = currentModalDiagram;

  const modal = document.getElementById("diagram-modal");
  if (!modal) return;

  // 1. Header Info
  const idElem = document.getElementById("modal-diagram-id");
  const titleElem = document.getElementById("modal-diagram-title");
  const catBadge = document.getElementById("modal-category-badge");
  const dimInfo = document.getElementById("img-dim-info");

  if (idElem) idElem.innerText = d.image_id;
  if (titleElem) titleElem.innerText = d.title || d.image_id;
  if (dimInfo) dimInfo.innerText = `Kích thước gốc: ${d.image_width} x ${d.image_height} px`;

  if (catBadge) {
    const colorCls = COLOR_CLASSES[d.category_color] || COLOR_CLASSES.slate;
    catBadge.className = `badge ${colorCls} border text-xs`;
    catBadge.innerHTML = `<i class="fa-solid ${d.category_icon || "fa-tag"} mr-1.5"></i>${d.category_vi}`;
  }

  // Prev/Next state
  const btnPrev = document.getElementById("modal-btn-prev");
  const btnNext = document.getElementById("modal-btn-next");
  if (btnPrev) btnPrev.disabled = index === 0;
  if (btnNext) btnNext.disabled = index === filteredDiagrams.length - 1;

  // 2. Load Diagram Image
  const img = document.getElementById("diagram-img");
  if (img) {
    img.onload = () => {
      renderOverlay();
    };
    img.src = d.image_url;
  }

  // 3. Ground Truth Questions (Caption Gốc)
  renderGroundTruthQuestions(d.original_questions || []);

  // 4. Ground Truth Labels
  renderGroundTruthLabels(d.original_labels || []);

  // 5. Scene Graph Stats & Topology
  const nodeBadge = document.getElementById("modal-node-count");
  const edgeBadge = document.getElementById("modal-edge-count");
  const topo = d.scene_graph_topology || { nodes: [], edges: [] };
  if (nodeBadge) nodeBadge.innerText = `${topo.nodes.length} nodes`;
  if (edgeBadge) edgeBadge.innerText = `${topo.edges.length} edges`;

  updateModalGraph();

  // 6. Atomic Facts
  renderAtomicFacts(d.atomic_facts || []);

  // 7. Comparative Captions
  renderComparativeCaptions(d.captions || {}, d.evaluations || {}, d.original_labels || []);

  // Show Modal
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("diagram-modal");
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "auto";
  if (network) {
    network.destroy();
    network = null;
  }
}

function updateModalGraph() {
  const d = currentModalDiagram;
  if (!d) return;

  const gContainer = document.getElementById("graphviz-container");
  const nContainer = document.getElementById("network-container");

  if (currentGraphMode === "graphviz") {
    if (gContainer) gContainer.classList.remove("hidden");
    if (nContainer) nContainer.classList.add("hidden");

    if (d.graphviz_svg && d.graphviz_svg.trim().length > 0) {
      gContainer.innerHTML = d.graphviz_svg;
      const svg = gContainer.querySelector("svg");
      if (svg) {
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
      }
    } else {
      gContainer.innerHTML = `
        <div class="text-center text-slate-400 p-6">
          <i class="fa-solid fa-sitemap text-2xl mb-2 text-slate-300"></i>
          <p class="text-xs">Đang chuyển sang chế độ Tọa độ không gian (Spatial View)...</p>
        </div>
      `;
      // Automatically fallback to spatial view if SVG is missing
      setTimeout(() => {
        const tabS = document.getElementById("tab-spatial");
        if (tabS) tabS.click();
      }, 500);
    }
  } else {
    if (gContainer) gContainer.classList.add("hidden");
    if (nContainer) nContainer.classList.remove("hidden");
    renderVisNetwork(d, currentGraphMode === "spatial");
  }
}

function renderVisNetwork(data, isSpatial = false) {
  const container = document.getElementById("network-container");
  if (!container) return;

  const topology = data.scene_graph_topology || { nodes: [], edges: [] };
  const imgW = data.image_width || 800;
  const imgH = data.image_height || 600;

  const nodes = topology.nodes.map((n) => {
    const nodeObj = { ...n };
    if (isSpatial && n.cx !== undefined && n.cy !== undefined) {
      nodeObj.x = (n.cx - imgW / 2) * 0.9;
      nodeObj.y = (n.cy - imgH / 2) * 0.9;
      nodeObj.fixed = true;
    } else {
      delete nodeObj.x;
      delete nodeObj.y;
      nodeObj.fixed = false;
    }
    return nodeObj;
  });

  const edges = topology.edges || [];
  const visData = { nodes: new vis.DataSet(nodes), edges: new vis.DataSet(edges) };

  const options = {
    physics: !isSpatial
      ? {
          solver: "forceAtlas2Based",
          forceAtlas2Based: {
            gravitationalConstant: -35,
            centralGravity: 0.015,
            springLength: 90,
            springConstant: 0.08,
          },
          maxVelocity: 40,
          stabilization: { iterations: 80 },
        }
      : false,
    interaction: {
      hover: true,
      zoomView: true,
      dragView: true,
    },
    nodes: {
      borderWidth: 2,
      shadow: true,
    },
    edges: {
      smooth: { type: "continuous" },
    },
  };

  if (network) network.destroy();
  network = new vis.Network(container, visData, options);
}

function renderOverlay() {
  const svg = document.getElementById("overlay-svg");
  const toggle = document.getElementById("toggle-overlay");
  const img = document.getElementById("diagram-img");

  if (!svg || !img) return;

  if (!toggle || !toggle.checked) {
    svg.innerHTML = "";
    return;
  }

  const d = currentModalDiagram;
  if (!d) return;

  const rect = img.getBoundingClientRect();
  const wrapper = document.getElementById("img-wrapper").getBoundingClientRect();

  const offsetX = rect.left - wrapper.left;
  const offsetY = rect.top - wrapper.top;
  const displayW = rect.width;
  const displayH = rect.height;

  const origW = d.image_width || 800;
  const origH = d.image_height || 600;

  const scaleX = displayW / origW;
  const scaleY = displayH / origH;

  const topo = d.scene_graph_topology || { nodes: [], edges: [] };

  let svgHtml = `
    <defs>
      <marker id="arrow-red" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M0,0 L0,6 L6,3 z" fill="#dc2626" />
      </marker>
      <marker id="arrow-blue" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
        <path d="M0,0 L0,5 L5,2.5 z" fill="#2563eb" />
      </marker>
    </defs>
  `;

  // 1. Connecting Directed Edges
  const nodeCoords = {};
  topo.nodes.forEach((n) => {
    if (n.bbox) {
      const cx = offsetX + n.cx * scaleX;
      const cy = offsetY + n.cy * scaleY;
      nodeCoords[n.id] = { cx, cy };
    }
  });

  topo.edges.forEach((e) => {
    const p1 = nodeCoords[e.from];
    const p2 = nodeCoords[e.to];
    if (p1 && p2) {
      if (e.type === "directed_link") {
        svgHtml += `
          <line x1="${p1.cx}" y1="${p1.cy}" x2="${p2.cx}" y2="${p2.cy}" 
                stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrow-red)" stroke-opacity="0.85" />
        `;
      } else if (e.type === "label") {
        svgHtml += `
          <line x1="${p1.cx}" y1="${p1.cy}" x2="${p2.cx}" y2="${p2.cy}" 
                stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3" marker-end="url(#arrow-blue)" stroke-opacity="0.75" />
        `;
      }
    }
  });

  // 2. Bounding Boxes
  topo.nodes.forEach((n) => {
    if (n.bbox && n.bbox.length === 4) {
      const [x1, y1, x2, y2] = n.bbox;
      const bx = offsetX + x1 * scaleX;
      const by = offsetY + y1 * scaleY;
      const bw = (x2 - x1) * scaleX;
      const bh = (y2 - y1) * scaleY;

      const isText = n.kind === "text";
      const strokeColor = isText ? "#2563eb" : "#d97706";
      const fillColor = isText ? "rgba(37, 99, 235, 0.12)" : "rgba(217, 119, 6, 0.12)";

      svgHtml += `
        <rect x="${bx}" y="${by}" width="${bw}" height="${bh}"
              fill="${fillColor}" stroke="${strokeColor}" stroke-width="1.8" rx="3" />
      `;

      if (isText && n.raw_text) {
        svgHtml += `
          <rect x="${bx}" y="${Math.max(offsetY, by - 14)}" width="${Math.min(110, bw + 10)}" height="13" fill="${strokeColor}" rx="2" />
          <text x="${bx + 2}" y="${Math.max(offsetY + 9, by - 4)}" fill="#ffffff" font-size="9" font-family="sans-serif" font-weight="bold">
            ${escapeXml(n.raw_text.substring(0, 16))}
          </text>
        `;
      }
    }
  });

  svg.innerHTML = svgHtml;
}

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case "<": return "&lt;";
      case ">": return "&gt;";
      case "&": return "&amp;";
      case "'": return "&apos;";
      case '"': return "&quot;";
    }
  });
}

function renderGroundTruthQuestions(questions) {
  const container = document.getElementById("modal-gt-questions-list");
  const countBadge = document.getElementById("modal-gt-q-count");
  if (!container) return;

  if (countBadge) countBadge.innerText = `${questions.length} câu hỏi`;

  if (!questions || questions.length === 0) {
    container.innerHTML = `<div class="p-2 text-slate-400 italic text-xs">Không có câu hỏi kiểm thử nào cho sơ đồ này.</div>`;
    return;
  }

  container.innerHTML = questions
    .map(
      (q, idx) => `
      <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1.5">
        <div class="font-bold text-slate-800 flex items-start gap-1.5">
          <span class="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">${idx + 1}</span>
          <span>${escapeXml(q.question)}</span>
        </div>
        <div class="grid grid-cols-2 gap-1 pl-5 text-[11px]">
          ${q.options
            .map(
              (opt) => `
            <div class="px-2 py-0.5 rounded-sm ${
              opt === q.correct_answer
                ? "bg-emerald-100 text-emerald-800 font-bold border border-emerald-300"
                : "text-slate-600 bg-white border border-slate-100"
            }">
              ${opt === q.correct_answer ? "✓ " : "• "}${escapeXml(opt)}
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `
    )
    .join("");
}

function renderGroundTruthLabels(labels) {
  const container = document.getElementById("modal-gt-labels-list");
  const countBadge = document.getElementById("modal-gt-labels-count");
  if (!container) return;

  if (countBadge) countBadge.innerText = `${labels.length} nhãn`;

  if (!labels || labels.length === 0) {
    container.innerHTML = `<div class="p-2 text-slate-400 italic text-xs">Không có nhãn văn bản.</div>`;
    return;
  }

  container.innerHTML = labels
    .map(
      (l) => `
      <span class="inline-flex items-center px-2 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200 text-[11px] font-medium">
        <span class="font-bold text-sky-600 mr-1">[${l.id}]</span> ${escapeXml(l.text || l.replacement || "Label")}
      </span>
    `
    )
    .join("");
}

function renderAtomicFacts(facts) {
  const container = document.getElementById("modal-atomic-facts-list");
  const countBadge = document.getElementById("modal-facts-count");
  if (!container) return;

  if (countBadge) countBadge.innerText = `${facts.length} facts`;

  if (!facts || facts.length === 0) {
    container.innerHTML = `<div class="p-2 text-slate-400 italic text-xs">Không có sự thật nguyên tử nào.</div>`;
    return;
  }

  container.innerHTML = facts
    .map((f) => {
      let catColor = "bg-slate-100 text-slate-700";
      let icon = "fa-tag";
      if (f.category === "core_subject") {
        catColor = "bg-amber-100 text-amber-800";
        icon = "fa-cube";
      } else if (f.category === "component_label") {
        catColor = "bg-blue-100 text-blue-800";
        icon = "fa-font";
      } else if (f.category === "directed_link") {
        catColor = "bg-rose-100 text-rose-800";
        icon = "fa-arrow-right";
      } else if (f.category === "process_sequence") {
        catColor = "bg-purple-100 text-purple-800";
        icon = "fa-repeat";
      }

      return `
        <div class="p-2 bg-slate-50 border border-slate-200 rounded-lg text-[11px] space-y-0.5">
          <div class="flex items-center justify-between">
            <span class="font-bold text-slate-800">${f.fact_id}</span>
            <span class="badge ${catColor} text-[10px] py-0 px-1.5">
              <i class="fa-solid ${icon} mr-1"></i>${f.category}
            </span>
          </div>
          <div class="text-slate-800 font-medium">🇻🇳 ${escapeXml(f.statement)}</div>
          <div class="text-slate-500 italic text-[10px]">🇬🇧 ${escapeXml(f.statement_en || "")}</div>
        </div>
      `;
    })
    .join("");
}

function highlightEntitiesInText(text, labels = []) {
  if (!text) return "";
  let html = escapeXml(text);

  // 1. Highlight technical ID leakage in red
  html = html.replace(/\b(blobs?_[A-Za-z0-9]+|text_[A-Za-z0-9]+|arrows?_[A-Za-z0-9]+|[TB][0-9]+)\b/g, (match) => {
    return `<span class="bg-rose-100 text-rose-800 font-mono px-1 py-0.5 rounded border border-rose-300 font-bold" title="Lỗi: Rò rỉ mã nội bộ">${match}</span>`;
  });

  // 2. Highlight known entity labels in soft blue/indigo
  if (labels && labels.length > 0) {
    const sortedLabels = [...labels]
      .map(l => (typeof l === "string" ? l : (l.text || l.replacement || "")))
      .filter(l => l && l.length >= 3 && !l.match(/^(?:blobs?_|text_|arrows_|[TB][0-9])/))
      .sort((a, b) => b.length - a.length);

    sortedLabels.forEach(lbl => {
      const escapedLbl = escapeXml(lbl);
      const re = new RegExp(`\\b(${escapedLbl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, "gi");
      html = html.replace(re, `<span class="bg-indigo-50 text-indigo-800 font-semibold px-1 py-0.2 rounded border border-indigo-200" title="Thực thể Scene Graph: ${escapedLbl}">$1</span>`);
    });
  }

  return html;
}

function renderMethodBadge(containerId, evalObj) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (!evalObj) {
    container.innerHTML = `<span class="badge bg-slate-100 text-slate-500 text-[10px]">Chưa đánh giá</span>`;
    return;
  }

  const f1 = evalObj.mean_f1 !== undefined ? evalObj.mean_f1 : (evalObj.factual_f1 || 0);
  const rec = evalObj.mean_recall !== undefined ? evalObj.mean_recall : (evalObj.fact_coverage_recall || 0);
  const prec = evalObj.mean_precision !== undefined ? evalObj.mean_precision : (evalObj.factual_precision || 0);
  const leaks = (evalObj.vietnamese_evaluation?.id_leakage_count || 0) + (evalObj.english_evaluation?.id_leakage_count || 0);

  let badgeColor = "bg-indigo-600";
  if (f1 >= 80) badgeColor = "bg-emerald-600";
  else if (f1 >= 50) badgeColor = "bg-blue-600";
  else if (f1 >= 25) badgeColor = "bg-amber-600";
  else badgeColor = "bg-rose-500";

  let html = `
    <span class="badge ${badgeColor} text-white text-[10px]">F1: ${f1.toFixed(1)}%</span>
    <span class="badge bg-slate-100 text-slate-700 text-[10px]" title="Độ bao phủ thực tế">R: ${rec.toFixed(0)}%</span>
    <span class="badge bg-slate-100 text-slate-700 text-[10px]" title="Độ chính xác xác thực">P: ${prec.toFixed(0)}%</span>
  `;

  if (leaks > 0) {
    html += `<span class="badge bg-rose-100 text-rose-800 border border-rose-300 text-[10px] font-bold"><i class="fa-solid fa-triangle-exclamation mr-1"></i>${leaks} Leaks</span>`;
  }

  container.innerHTML = html;
}

function renderComparativeCaptions(captions, evaluations = {}, labels = []) {
  // 1. Proposed Qwen2.5-14B (Oracle GT Plan)
  const qwenGt = captions.qwen_proposed_gt || captions.qwen_proposed || {};
  const evGt = evaluations.qwen_proposed_gt || evaluations.qwen_proposed;
  renderMethodBadge("badge-qwen-gt", evGt);
  document.getElementById("modal-qwen-gt-vi").innerHTML = highlightEntitiesInText(qwenGt.caption_vi, labels) || "<span class='italic text-slate-400'>Chưa có mô tả tiếng Việt.</span>";
  document.getElementById("modal-qwen-gt-en").innerHTML = highlightEntitiesInText(qwenGt.caption_en, labels) || "<span class='italic text-slate-400'>No English caption available.</span>";

  // 2. Proposed Qwen2.5-14B (Detector Predicted Plan)
  const qwenPred = captions.qwen_proposed_pred || {};
  const evPred = evaluations.qwen_proposed_pred;
  renderMethodBadge("badge-qwen-pred", evPred);
  document.getElementById("modal-qwen-pred-vi").innerHTML = highlightEntitiesInText(qwenPred.caption_vi, labels) || "<span class='italic text-slate-400'>Chưa có mô tả tiếng Việt.</span>";
  document.getElementById("modal-qwen-pred-en").innerHTML = highlightEntitiesInText(qwenPred.caption_en, labels) || "<span class='italic text-slate-400'>No English caption available.</span>";

  // 3. Deterministic Template
  const tmpl = captions.template || {};
  const evTmpl = evaluations.template;
  renderMethodBadge("badge-template", evTmpl);
  document.getElementById("modal-tmpl-vi").innerHTML = highlightEntitiesInText(tmpl.caption_vi, labels) || "<span class='italic text-slate-400'>Chưa có mô tả tiếng Việt.</span>";
  document.getElementById("modal-tmpl-en").innerHTML = highlightEntitiesInText(tmpl.caption_en, labels) || "<span class='italic text-slate-400'>No English caption available.</span>";

  // 4. Only VLM Ablation
  const vlm = captions.qwen_vlm_only || {};
  const evVlm = evaluations.qwen_vlm_only;
  renderMethodBadge("badge-vlm", evVlm);
  document.getElementById("modal-vlm-vi").innerHTML = highlightEntitiesInText(vlm.caption_vi, labels) || "<span class='italic text-slate-400'>Chưa có mô tả tiếng Việt từ VLM.</span>";
  document.getElementById("modal-vlm-en").innerHTML = highlightEntitiesInText(vlm.caption_en, labels) || "<span class='italic text-slate-400'>No VLM English caption available.</span>";

  // 5. Naive OCR Baseline
  const naive = captions.qwen_naive || {};
  const evNaive = evaluations.qwen_naive;
  renderMethodBadge("badge-naive", evNaive);
  document.getElementById("modal-naive-vi").innerHTML = highlightEntitiesInText(naive.caption_vi, labels) || "<span class='italic text-slate-400'>Chưa có mô tả tiếng Việt.</span>";
  document.getElementById("modal-naive-en").innerHTML = highlightEntitiesInText(naive.caption_en, labels) || "<span class='italic text-slate-400'>No English caption available.</span>";
}

function setupAuditModalEvents() {
  const modal = document.getElementById("audit-modal");
  const btnOpen = document.getElementById("btn-open-audit-modal");
  const btnClose = document.getElementById("btn-close-audit-modal");
  const btnFooter = document.getElementById("btn-close-audit-modal-footer");

  const openAudit = () => {
    if (modal) modal.classList.remove("hidden");
  };
  const closeAudit = () => {
    if (modal) modal.classList.add("hidden");
  };

  if (btnOpen) btnOpen.addEventListener("click", openAudit);
  if (btnClose) btnClose.addEventListener("click", closeAudit);
  if (btnFooter) btnFooter.addEventListener("click", closeAudit);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeAudit();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initGallery();
  setupAuditModalEvents();
});
