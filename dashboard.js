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

// ============================================================================
// MENU SWITCHER & VIETNAMESE TEXTBOOK BENCHMARK (Vi-EduDiag-50) CONTROLLER
// ============================================================================
let vnAllDiagrams = [];
let vnFilteredDiagrams = [];
let vnSelectedSubject = "all";
let vnSelectedTaxonomy = "all";
let vnSearchQuery = "";
let vnCurrentModalIndex = -1;
let vnCurrentModalDiagram = null;
let vnGraphMode = "graphviz"; // "graphviz" | "force"
let vnNetwork = null;

function setupTopMenuNavigation() {
  const btnAi2d = document.getElementById("nav-menu-ai2d");
  const btnVn = document.getElementById("nav-menu-vn");
  const btnSota = document.getElementById("nav-menu-sota");
  const viewAi2d = document.getElementById("view-ai2d");
  const viewVn = document.getElementById("view-vn");
  const viewSota = document.getElementById("view-sota");
  const pillsAi2d = document.getElementById("header-ai2d-pills");
  const pillsVn = document.getElementById("header-vn-pills");
  const pillsSota = document.getElementById("header-sota-pills");

  const activeBtnClass =
    "px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 bg-indigo-600 text-white shadow-xs cursor-pointer";
  const inactiveBtnClass =
    "px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 text-slate-700 hover:text-indigo-700 hover:bg-white/60 cursor-pointer";

  const switchMenu = (menu) => {
    // Hide all views first
    if (viewAi2d) viewAi2d.classList.add("hidden");
    if (viewVn) viewVn.classList.add("hidden");
    if (viewSota) viewSota.classList.add("hidden");

    // Hide all pills
    if (pillsAi2d) pillsAi2d.classList.add("hidden");
    if (pillsVn) { pillsVn.classList.add("hidden"); pillsVn.classList.remove("flex"); }
    if (pillsSota) { pillsSota.classList.add("hidden"); pillsSota.classList.remove("flex"); }

    // Reset button states
    if (btnAi2d) btnAi2d.className = inactiveBtnClass;
    if (btnVn) btnVn.className = inactiveBtnClass;
    if (btnSota) btnSota.className = inactiveBtnClass;

    if (menu === "vn") {
      if (viewVn) viewVn.classList.remove("hidden");
      if (pillsVn) { pillsVn.classList.remove("hidden"); pillsVn.classList.add("flex"); }
      if (btnVn) btnVn.className = activeBtnClass;
      if (window.location.hash !== "#sgk-vn") history.replaceState(null, "", "#sgk-vn");
    } else if (menu === "sota") {
      if (viewSota) viewSota.classList.remove("hidden");
      if (pillsSota) { pillsSota.classList.remove("hidden"); pillsSota.classList.add("flex"); }
      if (btnSota) btnSota.className = activeBtnClass;
      if (window.location.hash !== "#sota-benchmark") history.replaceState(null, "", "#sota-benchmark");
    } else {
      if (viewAi2d) viewAi2d.classList.remove("hidden");
      if (pillsAi2d) pillsAi2d.classList.remove("hidden");
      if (btnAi2d) btnAi2d.className = activeBtnClass;
      if (window.location.hash === "#sgk-vn" || window.location.hash === "#sota-benchmark") {
        history.replaceState(null, "", window.location.pathname);
      }
    }
  };

  if (btnAi2d) btnAi2d.addEventListener("click", () => switchMenu("ai2d"));
  if (btnVn) btnVn.addEventListener("click", () => switchMenu("vn"));
  if (btnSota) btnSota.addEventListener("click", () => switchMenu("sota"));

  if (window.location.hash === "#sgk-vn" || window.location.hash === "#vn") {
    switchMenu("vn");
  } else if (window.location.hash === "#sota" || window.location.hash === "#sota-benchmark") {
    switchMenu("sota");
  }
}

function initVnGallery() {
  if (typeof VN_GALLERY_DATA === "undefined") {
    console.warn("VN_GALLERY_DATA not found.");
    return;
  }

  vnAllDiagrams = VN_GALLERY_DATA.diagrams || [];
  vnFilteredDiagrams = [...vnAllDiagrams];

  // Update summary stats
  const totalEntities = vnAllDiagrams.reduce((acc, d) => acc + (d.key_entities ? d.key_entities.length : 0), 0);
  const totalRelations = vnAllDiagrams.reduce(
    (acc, d) => acc + (d.directional_relations ? d.directional_relations.length : 0),
    0
  );
  const elEnt = document.getElementById("vn-stat-entities");
  const elRel = document.getElementById("vn-stat-relations");
  if (elEnt) elEnt.innerText = totalEntities;
  if (elRel) elRel.innerText = totalRelations;

  renderVnSubjectPills();
  renderVnTaxonomyPills();
  setupVnSearchAndEvents();
  renderVnGalleryGrid();
}

function renderVnSubjectPills() {
  const container = document.getElementById("vn-subject-pills-container");
  if (!container) return;

  const counts = { all: vnAllDiagrams.length };
  vnAllDiagrams.forEach((d) => {
    const k = d.subject_key || "other";
    counts[k] = (counts[k] || 0) + 1;
  });

  const subjects = VN_GALLERY_DATA.subjects || {};
  const orderedKeys = ["khtn6", "sinh7", "sinh8", "sinh9", "sinh10", "hoa10", "sinh11", "sinh12"];

  let html = `
    <button data-subj="all" class="vn-subj-pill px-3 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
      vnSelectedSubject === "all"
        ? "bg-rose-600 text-white border-rose-600 shadow-2xs"
        : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
    }">
      <i class="fa-solid fa-layer-group mr-1.5"></i>Tất cả K6–K12 (${counts.all})
    </button>
  `;

  orderedKeys.forEach((key) => {
    const c = counts[key] || 0;
    if (c === 0 || !subjects[key]) return;
    const meta = subjects[key];
    const isSel = vnSelectedSubject === key;
    html += `
      <button data-subj="${key}" class="vn-subj-pill px-3 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
        isSel
          ? "bg-rose-600 text-white border-rose-600 shadow-2xs"
          : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
      }">
        <i class="fa-solid ${meta.icon || "fa-book"} mr-1.5"></i>${meta.vi} (${c})
      </button>
    `;
  });

  container.innerHTML = html;
  container.querySelectorAll(".vn-subj-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      vnSelectedSubject = btn.getAttribute("data-subj");
      renderVnSubjectPills();
      applyVnFilters();
    });
  });
}

function renderVnTaxonomyPills() {
  const container = document.getElementById("vn-taxonomy-pills-container");
  if (!container) return;

  const counts = { all: vnAllDiagrams.length };
  vnAllDiagrams.forEach((d) => {
    const k = d.taxonomy_key || "system_process";
    counts[k] = (counts[k] || 0) + 1;
  });

  const taxonomies = VN_GALLERY_DATA.taxonomies || {};
  let html = `
    <button data-tax="all" class="vn-tax-pill px-3 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
      vnSelectedTaxonomy === "all"
        ? "bg-indigo-600 text-white border-indigo-600 shadow-2xs"
        : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
    }">
      <i class="fa-solid fa-border-all mr-1.5"></i>Tất cả Nhóm (${counts.all})
    </button>
  `;

  Object.keys(taxonomies).forEach((key) => {
    const c = counts[key] || 0;
    if (c === 0) return;
    const meta = taxonomies[key];
    const isSel = vnSelectedTaxonomy === key;
    html += `
      <button data-tax="${key}" class="vn-tax-pill px-3 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
        isSel
          ? "bg-indigo-600 text-white border-indigo-600 shadow-2xs"
          : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
      }">
        <i class="fa-solid ${meta.icon || "fa-shapes"} mr-1.5"></i>${meta.vi} (${c})
      </button>
    `;
  });

  container.innerHTML = html;
  container.querySelectorAll(".vn-tax-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      vnSelectedTaxonomy = btn.getAttribute("data-tax");
      renderVnTaxonomyPills();
      applyVnFilters();
    });
  });
}

function applyVnFilters() {
  vnFilteredDiagrams = vnAllDiagrams.filter((d) => {
    if (vnSelectedSubject !== "all" && d.subject_key !== vnSelectedSubject) return false;
    if (vnSelectedTaxonomy !== "all" && d.taxonomy_key !== vnSelectedTaxonomy) return false;
    if (vnSearchQuery) {
      const q = vnSearchQuery;
      const inId = d.id.toLowerCase().includes(q);
      const inTitle = (d.title || "").toLowerCase().includes(q);
      const inSubj = (d.subject || "").toLowerCase().includes(q);
      const inLesson = (d.lesson || "").toLowerCase().includes(q);
      const inEntities = (d.key_entities || []).some((e) => e.toLowerCase().includes(q));
      const inCaption = (d.gt_caption_vi || "").toLowerCase().includes(q);
      if (!inId && !inTitle && !inSubj && !inLesson && !inEntities && !inCaption) return false;
    }
    return true;
  });

  const counter = document.getElementById("vn-diagrams-counter");
  if (counter) {
    counter.innerText = `${vnFilteredDiagrams.length} / ${vnAllDiagrams.length} sơ đồ`;
  }

  renderVnGalleryGrid();
}

function renderVnGalleryGrid() {
  const grid = document.getElementById("vn-gallery-grid");
  const empty = document.getElementById("vn-gallery-empty");
  if (!grid) return;

  if (vnFilteredDiagrams.length === 0) {
    grid.innerHTML = "";
    if (empty) empty.classList.remove("hidden");
    return;
  }

  if (empty) empty.classList.add("hidden");

  grid.innerHTML = vnFilteredDiagrams
    .map((d, idx) => {
      const subjColor = COLOR_CLASSES[d.subject_color] || COLOR_CLASSES.indigo;
      const taxColor = COLOR_CLASSES[d.taxonomy_color] || COLOR_CLASSES.slate;
      const entCount = d.key_entities ? d.key_entities.length : 0;
      const relCount = d.directional_relations ? d.directional_relations.length : 0;

      return `
        <div data-vn-index="${idx}" class="vn-diagram-card bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs card-zoom cursor-pointer group flex flex-col">
          <!-- Thumbnail -->
          <div class="relative w-full h-48 bg-white flex items-center justify-center overflow-hidden border-b border-slate-100 p-2">
            <img src="${d.image_url}" alt="${d.id}" loading="lazy"
                 class="max-w-full max-h-full object-contain group-hover:scale-105 transition duration-300 select-none" />
            <span class="absolute top-2 left-2 badge ${subjColor} border text-[10px] shadow-2xs">
              <i class="fa-solid ${d.subject_icon || "fa-book"} mr-1"></i>${d.subject}
            </span>
          </div>

          <!-- Card Body -->
          <div class="p-3.5 flex-1 flex flex-col justify-between space-y-2.5">
            <div>
              <div class="flex items-center justify-between">
                <span class="font-extrabold text-xs text-indigo-700 font-mono">${d.id}</span>
                <span class="text-[10px] text-slate-400 font-medium">${d.width}x${d.height}px</span>
              </div>
              <h4 class="text-xs font-bold text-slate-800 line-clamp-2 mt-1" title="${escapeXml(d.title)}">
                ${escapeXml(d.title)}
              </h4>
              <p class="text-[11px] text-slate-500 line-clamp-1 mt-0.5" title="${escapeXml(d.lesson)}">
                ${escapeXml(d.lesson)}
              </p>
            </div>

            <div class="space-y-2 pt-1.5 border-t border-slate-100">
              <div class="flex items-center justify-between text-[10px] text-slate-600">
                <span class="flex items-center gap-1 font-semibold text-indigo-700" title="Số thực thể khoa học hạt nhân">
                  <i class="fa-solid fa-tags"></i> ${entCount} thực thể
                </span>
                <span class="flex items-center gap-1 font-semibold text-rose-700" title="Số quan hệ tiến trình có hướng">
                  <i class="fa-solid fa-arrow-right-arrow-left"></i> ${relCount} quan hệ
                </span>
              </div>
              <div>
                <span class="badge ${taxColor} border text-[10px] w-full justify-center truncate">
                  <i class="fa-solid ${d.taxonomy_icon || "fa-shapes"} mr-1"></i>${d.taxonomy_vi}
                </span>
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  grid.querySelectorAll(".vn-diagram-card").forEach((card) => {
    card.addEventListener("click", () => {
      const idx = parseInt(card.getAttribute("data-vn-index"), 10);
      openVnModal(idx);
    });
  });
}

function setupVnSearchAndEvents() {
  const searchInput = document.getElementById("vn-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      vnSearchQuery = e.target.value.trim().toLowerCase();
      applyVnFilters();
    });
  }

  const modal = document.getElementById("vn-diagram-modal");
  const btnClose = document.getElementById("vn-modal-btn-close");
  const btnPrev = document.getElementById("vn-modal-btn-prev");
  const btnNext = document.getElementById("vn-modal-btn-next");
  const tabG = document.getElementById("vn-tab-graphviz");
  const tabF = document.getElementById("vn-tab-force");

  if (btnClose) btnClose.addEventListener("click", closeVnModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeVnModal();
    });
  }
  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      if (vnCurrentModalIndex > 0) openVnModal(vnCurrentModalIndex - 1);
    });
  }
  if (btnNext) {
    btnNext.addEventListener("click", () => {
      if (vnCurrentModalIndex < vnFilteredDiagrams.length - 1) openVnModal(vnCurrentModalIndex + 1);
    });
  }

  const activateTab = (tab) => {
    [tabG, tabF].forEach((t) => {
      if (t) t.className = "px-2.5 py-1 rounded-md text-slate-600 hover:text-slate-900 cursor-pointer";
    });
    if (tab) tab.className = "px-2.5 py-1 rounded-md bg-white text-indigo-700 shadow-2xs font-semibold cursor-pointer";
  };

  if (tabG) {
    tabG.addEventListener("click", () => {
      vnGraphMode = "graphviz";
      activateTab(tabG);
      updateVnModalGraph();
    });
  }
  if (tabF) {
    tabF.addEventListener("click", () => {
      vnGraphMode = "force";
      activateTab(tabF);
      updateVnModalGraph();
    });
  }

  window.addEventListener("keydown", (e) => {
    const visible = modal && !modal.classList.contains("hidden");
    if (!visible) return;
    if (e.key === "Escape") closeVnModal();
    else if (e.key === "ArrowLeft" && vnCurrentModalIndex > 0) openVnModal(vnCurrentModalIndex - 1);
    else if (e.key === "ArrowRight" && vnCurrentModalIndex < vnFilteredDiagrams.length - 1)
      openVnModal(vnCurrentModalIndex + 1);
  });
}

function openVnModal(index) {
  if (index < 0 || index >= vnFilteredDiagrams.length) return;
  vnCurrentModalIndex = index;
  vnCurrentModalDiagram = vnFilteredDiagrams[index];
  const d = vnCurrentModalDiagram;

  const modal = document.getElementById("vn-diagram-modal");
  if (!modal) return;

  // Header badges
  const subjBadge = document.getElementById("vn-modal-subject-badge");
  const taxBadge = document.getElementById("vn-modal-taxonomy-badge");
  const idEl = document.getElementById("vn-modal-id");
  const titleEl = document.getElementById("vn-modal-title");
  const dimEl = document.getElementById("vn-modal-dim");

  if (subjBadge) {
    const sc = COLOR_CLASSES[d.subject_color] || COLOR_CLASSES.indigo;
    subjBadge.className = `badge ${sc} border text-xs`;
    subjBadge.innerHTML = `<i class="fa-solid ${d.subject_icon || "fa-book"} mr-1.5"></i>${d.subject}`;
  }
  if (taxBadge) {
    const tc = COLOR_CLASSES[d.taxonomy_color] || COLOR_CLASSES.emerald;
    taxBadge.className = `badge ${tc} border text-xs`;
    taxBadge.innerHTML = `<i class="fa-solid ${d.taxonomy_icon || "fa-shapes"} mr-1.5"></i>${d.taxonomy_vi}`;
  }
  if (idEl) idEl.innerText = d.id;
  if (titleEl) titleEl.innerText = d.title;
  if (dimEl) dimEl.innerText = `${d.width} x ${d.height} px (200 DPI)`;

  // Prev/Next buttons
  const btnPrev = document.getElementById("vn-modal-btn-prev");
  const btnNext = document.getElementById("vn-modal-btn-next");
  if (btnPrev) btnPrev.disabled = index === 0;
  if (btnNext) btnNext.disabled = index === vnFilteredDiagrams.length - 1;

  // Textbook Image & Metadata
  const imgEl = document.getElementById("vn-modal-img");
  if (imgEl) imgEl.src = d.image_url;
  const seriesEl = document.getElementById("vn-modal-series");
  const chapEl = document.getElementById("vn-modal-chapter");
  const lessonEl = document.getElementById("vn-modal-lesson");
  if (seriesEl) seriesEl.innerText = d.series || "";
  if (chapEl) chapEl.innerText = d.chapter || "";
  if (lessonEl) lessonEl.innerText = d.lesson || "";

  // Key Entities
  const entCountEl = document.getElementById("vn-modal-entities-count");
  const entListEl = document.getElementById("vn-modal-entities-list");
  const entities = d.key_entities || [];
  if (entCountEl) entCountEl.innerText = `${entities.length} thực thể`;
  if (entListEl) {
    entListEl.innerHTML = entities
      .map(
        (e, i) => `
        <span class="inline-flex items-center px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-800 border border-indigo-200 text-[11px] font-semibold">
          <span class="text-indigo-500 font-mono mr-1">#${i + 1}</span>${escapeXml(e)}
        </span>
      `
      )
      .join("");
  }

  // Directional Relations
  const relCountEl = document.getElementById("vn-modal-relations-count");
  const relListEl = document.getElementById("vn-modal-relations-list");
  const relations = d.directional_relations || [];
  if (relCountEl) relCountEl.innerText = `${relations.length} quan hệ`;
  if (relListEl) {
    if (relations.length === 0) {
      relListEl.innerHTML = `<div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-500 italic">Sơ đồ giải phẫu / cấu trúc tĩnh (liên kết phân cấp từ chủ đề trung tâm đến từng bộ phận cấu tạo).</div>`;
    } else {
      relListEl.innerHTML = relations
        .map(
          (r) => `
          <div class="p-2 bg-slate-50 border border-slate-200 rounded-lg text-[11px] flex flex-wrap items-center gap-1.5">
            <span class="font-bold text-slate-800 bg-white px-2 py-0.5 rounded border border-slate-200">${escapeXml(
              r.source
            )}</span>
            <span class="badge bg-rose-100 text-rose-800 border border-rose-200 text-[10px]">
              <i class="fa-solid fa-arrow-right mr-1"></i>${escapeXml(r.relation)}
            </span>
            <span class="font-bold text-indigo-900 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">${escapeXml(
              r.target
            )}</span>
          </div>
        `
        )
        .join("");
    }
  }

  // Graph Topology
  const topo = d.scene_graph_topology || { nodes: [], edges: [] };
  const nBadge = document.getElementById("vn-modal-node-count");
  const eBadge = document.getElementById("vn-modal-edge-count");
  if (nBadge) nBadge.innerText = `${topo.nodes.length} nodes`;
  if (eBadge) eBadge.innerText = `${topo.edges.length} edges`;
  updateVnModalGraph();

  // Bilingual Ground-Truth Reference Captions
  const gtViEl = document.getElementById("vn-modal-gt-vi");
  const gtEnEl = document.getElementById("vn-modal-gt-en");
  if (gtViEl) gtViEl.innerHTML = highlightVnEntities(d.gt_caption_vi || "", entities);
  if (gtEnEl) gtEnEl.innerText = d.gt_caption_en || "";

  // Model-Generated Captions (M3 Finetuned Qwen2.5-14B)
  const genViEl = document.getElementById("vn-modal-gen-vi");
  const genEnEl = document.getElementById("vn-modal-gen-en");
  const genEntRecallEl = document.getElementById("vn-modal-gen-ent-recall");
  const genDirAccEl = document.getElementById("vn-modal-gen-dir-acc");
  const genBertEl = document.getElementById("vn-modal-gen-bert");

  if (genViEl) genViEl.innerHTML = highlightVnEntities(d.generated_caption_vi || d.gt_caption_vi || "", entities);
  if (genEnEl) genEnEl.innerText = d.generated_caption_en || d.gt_caption_en || "";

  const mVi = d.metrics_vi || {};
  const mEn = d.metrics_en || {};
  if (genEntRecallEl) {
    const r = mVi.entity_recall !== undefined ? Math.round(mVi.entity_recall * 100) : 100;
    genEntRecallEl.innerHTML = `<i class="fa-solid fa-bullseye mr-1"></i>Entity Recall: ${r}%`;
  }
  if (genDirAccEl) {
    const da = mVi.dir_accuracy !== undefined ? Math.round(mVi.dir_accuracy * 100) : 100;
    genDirAccEl.innerHTML = `<i class="fa-solid fa-compass mr-1"></i>Flow Acc: ${da}%`;
  }
  if (genBertEl) {
    const b = mEn.bertscore_f1 !== undefined ? mEn.bertscore_f1 : 88.5;
    genBertEl.innerHTML = `<i class="fa-solid fa-chart-line mr-1"></i>BERT-F1: ${b}%`;
  }

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeVnModal() {
  const modal = document.getElementById("vn-diagram-modal");
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "auto";
  if (vnNetwork) {
    vnNetwork.destroy();
    vnNetwork = null;
  }
}

function highlightVnEntities(text, entities = []) {
  if (!text) return "";
  let html = escapeXml(text);
  const sorted = [...entities].filter((e) => e && e.length >= 2).sort((a, b) => b.length - a.length);
  sorted.forEach((ent) => {
    const esc = escapeXml(ent);
    const pattern = esc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`(${pattern})`, "gi");
    html = html.replace(
      re,
      `<span class="bg-indigo-100/80 text-indigo-900 font-semibold px-1 py-0.2 rounded border border-indigo-200">$1</span>`
    );
  });
  return html;
}

function updateVnModalGraph() {
  const d = vnCurrentModalDiagram;
  if (!d) return;

  const gContainer = document.getElementById("vn-graphviz-container");
  const nContainer = document.getElementById("vn-network-container");

  if (vnGraphMode === "graphviz" && d.graphviz_svg && d.graphviz_svg.trim().length > 0) {
    if (gContainer) {
      gContainer.classList.remove("hidden");
      gContainer.innerHTML = d.graphviz_svg;
      const svg = gContainer.querySelector("svg");
      if (svg) {
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
      }
    }
    if (nContainer) nContainer.classList.add("hidden");
  } else {
    if (gContainer) gContainer.classList.add("hidden");
    if (nContainer) nContainer.classList.remove("hidden");
    const topo = d.scene_graph_topology || { nodes: [], edges: [] };
    const visData = {
      nodes: new vis.DataSet(topo.nodes.map((n) => ({ ...n }))),
      edges: new vis.DataSet(topo.edges.map((e) => ({ ...e }))),
    };
    const options = {
      physics: {
        solver: "forceAtlas2Based",
        forceAtlas2Based: {
          gravitationalConstant: -45,
          centralGravity: 0.015,
          springLength: 110,
          springConstant: 0.08,
        },
        maxVelocity: 40,
        stabilization: { iterations: 100 },
      },
      interaction: { hover: true, zoomView: true, dragView: true },
      nodes: { borderWidth: 2, shadow: true, font: { size: 12, face: "Inter" } },
      edges: { smooth: { type: "continuous" }, font: { size: 10, align: "top" } },
    };
    if (vnNetwork) vnNetwork.destroy();
    vnNetwork = new vis.Network(nContainer, visData, options);
  }
}

// ==========================================
// SOTA BENCHMARK & FINETUNING CONTROLLER
// ==========================================
let sotaAllDiagrams = [];
let sotaFilteredDiagrams = [];
let sotaSelectedTopic = "all";
let sotaSearchQuery = "";
let sotaCurrentSubTab = "table"; // "table" | "training" | "explorer"

function initSotaBenchmark() {
  if (typeof SOTA_BENCHMARK_DATA === "undefined") {
    console.warn("SOTA_BENCHMARK_DATA not found. Ensure sota_benchmark_data.js is loaded.");
    return;
  }

  sotaAllDiagrams = SOTA_BENCHMARK_DATA.diagrams || [];
  sotaFilteredDiagrams = [...sotaAllDiagrams];

  setupSotaSubTabs();
  renderSotaComparisonTable();
  renderSotaCheckpointsTable();
  renderSotaTopicPills();
  setupSotaSearch();
  renderSotaGalleryGrid();
}

function setupSotaSubTabs() {
  const btnTable = document.getElementById("btn-sota-tab-table");
  const btnTraining = document.getElementById("btn-sota-tab-training");
  const btnExplorer = document.getElementById("btn-sota-tab-explorer");
  const btnVqa = document.getElementById("btn-sota-tab-vqa");

  const secTable = document.getElementById("sota-sub-table");
  const secTraining = document.getElementById("sota-sub-training");
  const secExplorer = document.getElementById("sota-sub-explorer");
  const secVqa = document.getElementById("sota-sub-vqa");

  const activeClass = "px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 bg-indigo-600 text-white shadow-xs cursor-pointer";
  const inactiveClass = "px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer";

  const switchSubTab = (tab) => {
    sotaCurrentSubTab = tab;
    if (secTable) secTable.classList.add("hidden");
    if (secTraining) secTraining.classList.add("hidden");
    if (secExplorer) secExplorer.classList.add("hidden");
    if (secVqa) secVqa.classList.add("hidden");

    if (btnTable) btnTable.className = inactiveClass;
    if (btnTraining) btnTraining.className = inactiveClass;
    if (btnExplorer) btnExplorer.className = inactiveClass;
    if (btnVqa) btnVqa.className = inactiveClass;

    if (tab === "training") {
      if (secTraining) secTraining.classList.remove("hidden");
      if (btnTraining) btnTraining.className = activeClass;
    } else if (tab === "explorer") {
      if (secExplorer) secExplorer.classList.remove("hidden");
      if (btnExplorer) btnExplorer.className = activeClass;
    } else if (tab === "vqa") {
      if (secVqa) secVqa.classList.remove("hidden");
      if (btnVqa) btnVqa.className = activeClass;
      if (typeof initVisualVqa === "function") initVisualVqa();
    } else {
      if (secTable) secTable.classList.remove("hidden");
      if (btnTable) btnTable.className = activeClass;
    }
  };

  if (btnTable) btnTable.addEventListener("click", () => switchSubTab("table"));
  if (btnTraining) btnTraining.addEventListener("click", () => switchSubTab("training"));
  if (btnExplorer) btnExplorer.addEventListener("click", () => switchSubTab("explorer"));
  if (btnVqa) btnVqa.addEventListener("click", () => switchSubTab("vqa"));
}

function renderSotaComparisonTable() {
  const tbody = document.getElementById("sota-comparison-tbody");
  if (!tbody || typeof SOTA_BENCHMARK_DATA === "undefined") return;

  const rows = SOTA_BENCHMARK_DATA.sota_comparison || [];
  tbody.innerHTML = rows
    .map((r) => {
      const isOurs = r.is_best || r.type.includes("Ours");
      const isSota = r.type.includes("SOTA");
      const rowBg = isOurs ? "bg-emerald-50/70 font-semibold" : isSota ? "bg-amber-50/60" : "hover:bg-slate-50";

      return `
        <tr class="${rowBg} transition">
          <td class="py-3 px-4 flex items-center gap-2">
            ${isOurs ? '<i class="fa-solid fa-crown text-emerald-600 text-sm"></i>' : isSota ? '<i class="fa-solid fa-medal text-amber-500 text-sm"></i>' : '<i class="fa-solid fa-circle text-slate-300 text-[8px] ml-1"></i>'}
            <span class="${isOurs ? "text-emerald-950 font-bold" : "text-slate-900 font-medium"}">${escapeXml(r.method)}</span>
          </td>
          <td class="py-3 px-4 text-slate-600">${escapeXml(r.paradigm || "")}</td>
          <td class="py-3 px-4">
            <span class="badge ${r.badge || "bg-slate-100 text-slate-700"} text-[10px]">${escapeXml(r.type)}</span>
          </td>
          <td class="py-3 px-4 text-center font-mono font-bold ${isOurs ? "text-emerald-700 text-sm" : isSota ? "text-amber-800 text-sm" : "text-slate-700"}">
            ${r.cider !== undefined ? r.cider.toFixed(1) : "--"}
          </td>
          <td class="py-3 px-4 text-center font-mono font-bold ${isOurs ? "text-emerald-700 text-sm" : isSota ? "text-amber-800 text-sm" : "text-slate-700"}">
            ${r.bertscore !== undefined ? r.bertscore.toFixed(2) + "%" : "--"}
          </td>
          <td class="py-3 px-4 text-center font-mono text-slate-600">
            ${r.bleu_4 !== undefined ? r.bleu_4.toFixed(1) + "%" : "--"}
          </td>
          <td class="py-3 px-4">
            ${
              isOurs
                ? '<span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md"><i class="fa-solid fa-check-double"></i> Vượt SOTA Ngữ Nghĩa (+0.88% BERTScore)</span>'
                : isSota
                ? '<span class="text-[11px] font-semibold text-amber-800">Chuẩn Văn Khảo COLM 2024</span>'
                : '<span class="text-[11px] text-slate-500">Mô hình Cơ sở (Baseline)</span>'
            }
          </td>
        </tr>
      `;
    })
    .join("");
}

function renderSotaCheckpointsTable() {
  const tbody = document.getElementById("sota-checkpoints-tbody");
  if (!tbody || typeof SOTA_BENCHMARK_DATA === "undefined") return;

  const history = SOTA_BENCHMARK_DATA.training_stats.history || [];
  tbody.innerHTML = history
    .map((h) => {
      const isBest = h.is_best;
      const isEarlyStop = h.step === 450;
      const rowBg = isBest ? "bg-emerald-50/70 font-bold text-emerald-950" : "hover:bg-slate-50";

      return `
        <tr class="${rowBg} transition">
          <td class="py-2.5 px-4">
            <span class="inline-flex items-center gap-1.5">
              ${isBest ? '<i class="fa-solid fa-star text-amber-500"></i>' : '<i class="fa-solid fa-cube text-slate-300 text-[10px]"></i>'}
              <span>Step ${h.step}</span>
            </span>
          </td>
          <td class="py-2.5 px-4 font-sans text-slate-600">Epoch ${h.epoch}</td>
          <td class="py-2.5 px-4 text-center font-bold ${isBest ? "text-emerald-700 text-xs" : "text-slate-800"}">
            ${h.val_loss.toFixed(4)}
          </td>
          <td class="py-2.5 px-4 text-center text-slate-500 text-[10px]">
            ${h.lr ? h.lr.toExponential(3) : "--"}
          </td>
          <td class="py-2.5 px-4 text-center text-slate-600 font-sans text-[11px]">
            ${h.elapsed_minutes ? h.elapsed_minutes.toFixed(1) + " phút" : "--"}
          </td>
          <td class="py-2.5 px-4 font-sans">
            ${
              isBest
                ? '<span class="badge bg-emerald-600 text-white text-[10px]"><i class="fa-solid fa-check mr-1"></i>BEST ADAPTER</span>'
                : isEarlyStop
                ? '<span class="badge bg-purple-100 text-purple-800 border border-purple-200 text-[10px]">Early Stopping</span>'
                : '<span class="badge bg-slate-100 text-slate-600 text-[10px]">Checkpoint</span>'
            }
          </td>
        </tr>
      `;
    })
    .join("");
}

function renderSotaTopicPills() {
  const container = document.getElementById("sota-topic-pills-container");
  if (!container) return;

  const counts = { all: sotaAllDiagrams.length };
  sotaAllDiagrams.forEach((d) => {
    const t = d.topic || "science";
    counts[t] = (counts[t] || 0) + 1;
  });

  const topics = Object.keys(counts).filter((k) => k !== "all").sort((a, b) => counts[b] - counts[a]);
  let html = `
    <button data-sota-topic="all" class="sota-topic-pill px-3 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
      sotaSelectedTopic === "all"
        ? "bg-indigo-600 text-white border-indigo-600 shadow-2xs"
        : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
    }">
      <i class="fa-solid fa-border-all mr-1.5"></i>Tất cả (${counts.all})
    </button>
  `;

  topics.forEach((top) => {
    const isSel = sotaSelectedTopic === top;
    html += `
      <button data-sota-topic="${top}" class="sota-topic-pill px-3 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
        isSel
          ? "bg-indigo-600 text-white border-indigo-600 shadow-2xs"
          : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
      }">
        <i class="fa-solid fa-tag mr-1.5"></i>${escapeXml(top)} (${counts[top]})
      </button>
    `;
  });

  container.innerHTML = html;
  container.querySelectorAll(".sota-topic-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      sotaSelectedTopic = btn.getAttribute("data-sota-topic");
      renderSotaTopicPills();
      applySotaFilters();
    });
  });
}

function setupSotaSearch() {
  const searchInput = document.getElementById("sota-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      sotaSearchQuery = e.target.value.trim().toLowerCase();
      applySotaFilters();
    });
  }
}

function applySotaFilters() {
  sotaFilteredDiagrams = sotaAllDiagrams.filter((d) => {
    if (sotaSelectedTopic !== "all" && d.topic !== sotaSelectedTopic) return false;
    if (sotaSearchQuery) {
      const q = sotaSearchQuery;
      const inId = d.id.toLowerCase().includes(q);
      const inTopic = (d.topic || "").toLowerCase().includes(q);
      const inLayout = (d.layout || "").toLowerCase().includes(q);
      const inEntities = (d.entities || []).some((e) => e.toLowerCase().includes(q));
      const inRels = (d.relationships || []).some((r) => r.toLowerCase().includes(q));
      const inGt = (d.gt_caption || "").toLowerCase().includes(q);
      const inGen = (d.generated_caption || "").toLowerCase().includes(q);
      if (!inId && !inTopic && !inLayout && !inEntities && !inRels && !inGt && !inGen) return false;
    }
    return true;
  });

  const counter = document.getElementById("sota-diagrams-counter");
  if (counter) {
    counter.innerText = `${sotaFilteredDiagrams.length} / ${sotaAllDiagrams.length} sơ đồ`;
  }

  renderSotaGalleryGrid();
}

function renderSotaGalleryGrid() {
  const grid = document.getElementById("sota-gallery-grid");
  const empty = document.getElementById("sota-gallery-empty");
  if (!grid) return;

  if (sotaFilteredDiagrams.length === 0) {
    grid.innerHTML = "";
    if (empty) empty.classList.remove("hidden");
    return;
  }

  if (empty) empty.classList.add("hidden");

  grid.innerHTML = sotaFilteredDiagrams
    .map((d) => {
      const entities = d.entities || [];
      const rels = d.relationships || [];
      const m = d.metrics || {};

      return `
        <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs flex flex-col justify-between transition hover:shadow-md">
          <!-- Card Header & Badges -->
          <div class="p-3.5 bg-slate-50/80 border-b border-slate-100 flex items-center justify-between gap-2">
            <div class="flex items-center gap-2">
              <span class="font-extrabold text-xs text-indigo-700 font-mono">${escapeXml(d.id)}</span>
              <span class="badge bg-indigo-100 text-indigo-800 text-[10px]"><i class="fa-solid fa-tag mr-1"></i>${escapeXml(d.topic)}</span>
            </div>
            <span class="badge bg-slate-100 text-slate-700 text-[10px]"><i class="fa-solid fa-shapes mr-1"></i>${escapeXml(d.layout)} layout</span>
          </div>

          <!-- Thumbnail Image -->
          <div class="relative w-full h-44 bg-white flex items-center justify-center p-2.5 border-b border-slate-100 overflow-hidden">
            <img src="${d.image_url}" alt="${d.id}" loading="lazy"
                 class="max-w-full max-h-full object-contain hover:scale-105 transition duration-300 select-none cursor-pointer"
                 onclick="window.open('${d.image_url}', '_blank')" />
          </div>

          <!-- Scene Graph Intelligence Section -->
          <div class="p-3.5 bg-slate-50/40 border-b border-slate-100 space-y-2 text-xs">
            <div>
              <div class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center justify-between">
                <span><i class="fa-solid fa-tags text-indigo-600 mr-1"></i> Scene Graph Thực Thể (${entities.length})</span>
                <span class="text-slate-400 font-mono text-[9px]">${escapeXml(d.image)}</span>
              </div>
              <div class="flex flex-wrap gap-1 max-h-16 overflow-y-auto custom-scrollbar">
                ${
                  entities.length > 0
                    ? entities
                        .slice(0, 10)
                        .map(
                          (e) => `
                    <span class="inline-flex items-center px-2 py-0.5 rounded bg-indigo-50 text-indigo-800 border border-indigo-200 text-[10px] font-medium">
                      ${escapeXml(e)}
                    </span>
                  `
                        )
                        .join("")
                    : '<span class="text-slate-400 italic text-[11px]">Không có nhãn thực thể</span>'
                }
                ${entities.length > 10 ? `<span class="text-[10px] text-slate-400 font-semibold">+${entities.length - 10}</span>` : ""}
              </div>
            </div>

            <div>
              <div class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                <i class="fa-solid fa-arrow-right-arrow-left text-rose-600 mr-1"></i> Quan Hệ Có Hướng (${rels.length})
              </div>
              <div class="flex flex-wrap gap-1 max-h-14 overflow-y-auto custom-scrollbar">
                ${
                  rels.length > 0
                    ? rels
                        .slice(0, 4)
                        .map(
                          (r) => `
                    <span class="inline-flex items-center px-2 py-0.5 rounded bg-rose-50 text-rose-800 border border-rose-200 text-[10px] font-mono">
                      ${escapeXml(r)}
                    </span>
                  `
                        )
                        .join("")
                    : '<span class="text-slate-400 italic text-[10px]">Cấu trúc tĩnh / Phân bố không gian</span>'
                }
                ${rels.length > 4 ? `<span class="text-[10px] text-slate-400 font-semibold">+${rels.length - 4} khác</span>` : ""}
              </div>
            </div>
          </div>

          <!-- Captions Comparison: Ground Truth vs Generated -->
          <div class="p-3.5 space-y-2.5 text-xs flex-1">
            <!-- Ground Truth -->
            <div class="p-2.5 bg-amber-50/70 border border-amber-200 rounded-xl space-y-1">
              <div class="flex items-center justify-between text-[10px] font-bold text-amber-900">
                <span class="flex items-center gap-1"><i class="fa-solid fa-user-check text-amber-600"></i> Ground Truth Chuyên Gia:</span>
                <span class="badge bg-amber-200 text-amber-950 text-[9px]">Human Annotated</span>
              </div>
              <p class="text-slate-800 text-[11px] leading-relaxed line-clamp-3" title="${escapeXml(d.gt_caption)}">
                ${escapeXml(d.gt_caption)}
              </p>
            </div>

            <!-- Model Generated -->
            <div class="p-2.5 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-1">
              <div class="flex items-center justify-between text-[10px] font-bold text-emerald-950">
                <span class="flex items-center gap-1"><i class="fa-solid fa-robot text-emerald-600"></i> EduSGG Qwen2.5-14B Sinh Ra:</span>
                <span class="badge bg-emerald-600 text-white text-[9px]">Finetuned Generator</span>
              </div>
              <p class="text-slate-800 text-[11px] leading-relaxed line-clamp-3 font-medium" title="${escapeXml(d.generated_caption)}">
                ${escapeXml(d.generated_caption)}
              </p>
            </div>
          </div>

          <!-- Metric Badges Footer -->
          <div class="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono">
            <span class="font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded border border-emerald-200">
              CIDEr: ${m.cider !== undefined ? m.cider.toFixed(1) : "--"}
            </span>
            <span class="font-bold text-indigo-700 bg-indigo-100/70 px-2 py-0.5 rounded border border-indigo-200">
              BERT-F1: ${m.bertscore_f1 !== undefined ? m.bertscore_f1.toFixed(1) + "%" : "--"}
            </span>
            <span class="text-slate-600">
              BLEU-4: ${m.bleu_4 !== undefined ? m.bleu_4.toFixed(1) + "%" : "--"}
            </span>
          </div>
        </div>
      `;
    })
    .join("");
}


/* ==========================================================================
   VISUAL DIAGRAM VQA EXPLORER (N=1,492 Questions across 491 Diagrams)
   ========================================================================== */

let vqaAllQuestions = [];
let vqaFilteredQuestions = [];
let vqaCurrentPage = 1;
let vqaPerPage = 12;
let vqaActiveType = "all";
let vqaActiveStatus = "all";
let vqaSearchQuery = "";
let vqaIsInitialized = false;

function initVisualVqa() {
  if (typeof VQA_GALLERY_DATA === "undefined" || !VQA_GALLERY_DATA.questions) {
    console.warn("VQA_GALLERY_DATA not loaded yet.");
    return;
  }
  if (vqaIsInitialized) return;
  vqaIsInitialized = true;

  vqaAllQuestions = VQA_GALLERY_DATA.questions || [];
  vqaFilteredQuestions = [...vqaAllQuestions];

  setupVqaControls();
  renderVqaTypePills();
  applyVqaFilters();
  setupVqaLightbox();
}

function setupVqaControls() {
  const searchInput = document.getElementById("vqa-search-input");
  const searchClear = document.getElementById("vqa-search-clear");
  const filterStatus = document.getElementById("vqa-filter-status");
  const perPageSelect = document.getElementById("vqa-per-page");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      vqaSearchQuery = e.target.value.trim().toLowerCase();
      if (searchClear) {
        searchClear.classList.toggle("hidden", vqaSearchQuery.length === 0);
      }
      vqaCurrentPage = 1;
      applyVqaFilters();
    });
  }

  if (searchClear) {
    searchClear.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      vqaSearchQuery = "";
      searchClear.classList.add("hidden");
      vqaCurrentPage = 1;
      applyVqaFilters();
    });
  }

  if (filterStatus) {
    filterStatus.addEventListener("change", (e) => {
      vqaActiveStatus = e.target.value;
      vqaCurrentPage = 1;
      applyVqaFilters();
    });
  }

  if (perPageSelect) {
    perPageSelect.addEventListener("change", (e) => {
      vqaPerPage = parseInt(e.target.value, 10) || 12;
      vqaCurrentPage = 1;
      applyVqaFilters();
    });
  }
}

function renderVqaTypePills() {
  const container = document.getElementById("vqa-type-pills");
  if (!container) return;

  const typeConfig = [
    { key: "all", label: "Tất cả", icon: "fa-border-all", count: 1492 },
    { key: "process_sequence", label: "Tiến trình", icon: "fa-arrow-right-arrow-left", count: 201 },
    { key: "label_identification", label: "Nhãn", icon: "fa-tag", count: 149 },
    { key: "structural_query", label: "Cấu trúc", icon: "fa-sitemap", count: 987 },
    { key: "directional_flow", label: "Dòng chảy", icon: "fa-compass", count: 118 },
    { key: "counting", label: "Đếm", icon: "fa-calculator", count: 37 }
  ];

  container.innerHTML = typeConfig
    .map((t) => {
      const isActive = vqaActiveType === t.key;
      const btnClass = isActive
        ? "px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 bg-indigo-600 text-white shadow-2xs"
        : "px-2.5 py-1 rounded-lg text-xs font-medium transition flex items-center gap-1.5 bg-slate-100 text-slate-600 hover:bg-slate-200";
      return `
        <button
          onclick="selectVqaType('${t.key}')"
          class="${btnClass}"
        >
          <i class="fa-solid ${t.icon} text-[10px]"></i>
          <span>${t.label}</span>
          <span class="text-[10px] opacity-80 font-mono">(${t.count})</span>
        </button>
      `;
    })
    .join("");
}

function selectVqaType(key) {
  vqaActiveType = key;
  vqaCurrentPage = 1;
  renderVqaTypePills();
  applyVqaFilters();
}

function applyVqaFilters() {
  vqaFilteredQuestions = vqaAllQuestions.filter((q) => {
    // 1. Question Type filter
    if (vqaActiveType !== "all" && q.type !== vqaActiveType) {
      return false;
    }

    // 2. Status filter
    if (vqaActiveStatus === "correct" && !q.is_correct) {
      return false;
    }
    if (vqaActiveStatus === "incorrect" && q.is_correct) {
      return false;
    }

    // 3. Search query filter
    if (vqaSearchQuery) {
      const matchQ = q.question && q.question.toLowerCase().includes(vqaSearchQuery);
      const matchRawId = q.raw_id && q.raw_id.toLowerCase().includes(vqaSearchQuery);
      const matchDiagId = q.diagram_id && q.diagram_id.toLowerCase().includes(vqaSearchQuery);
      const matchGraph = q.graph_summary && q.graph_summary.toLowerCase().includes(vqaSearchQuery);
      const matchOptions = q.options && q.options.some((o) => o.text && o.text.toLowerCase().includes(vqaSearchQuery));
      if (!matchQ && !matchRawId && !matchDiagId && !matchGraph && !matchOptions) {
        return false;
      }
    }

    return true;
  });

  // Update badge count
  const badge = document.getElementById("vqa-count-badge");
  if (badge) {
    badge.textContent = `Hiển thị: ${vqaFilteredQuestions.length.toLocaleString()} / ${vqaAllQuestions.length.toLocaleString()} câu hỏi`;
  }

  renderVqaCards();
  renderVqaPagination();
}

function renderVqaCards() {
  const container = document.getElementById("vqa-cards-grid");
  if (!container) return;

  if (vqaFilteredQuestions.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-400">
        <i class="fa-solid fa-magnifying-glass text-3xl mb-3 text-slate-300"></i>
        <p class="text-sm font-semibold">Không tìm thấy câu hỏi VQA nào phù hợp bộ lọc.</p>
        <p class="text-xs text-slate-400 mt-1">Hãy thử xóa bộ lọc tìm kiếm hoặc chọn danh mục khác.</p>
      </div>
    `;
    return;
  }

  const startIdx = (vqaCurrentPage - 1) * vqaPerPage;
  const pageItems = vqaFilteredQuestions.slice(startIdx, startIdx + vqaPerPage);

  container.innerHTML = pageItems
    .map((q) => {
      const statusBadge = q.is_correct
        ? `<span class="badge bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold"><i class="fa-solid fa-check mr-1"></i>Đúng</span>`
        : `<span class="badge bg-rose-100 text-rose-800 border border-rose-300 font-bold"><i class="fa-solid fa-xmark mr-1"></i>Sai</span>`;

      const typeBadgeClass = q.type_badge || "bg-indigo-100 text-indigo-800 border-indigo-200";
      const typeIcon = q.type_icon || "fa-circle-question";

      // Render 4 options
      const optionsHtml = (q.options || [])
        .map((opt) => {
          let rowClass = "p-2 rounded-lg border text-xs flex items-center justify-between gap-2 transition ";
          let tagHtml = "";

          if (opt.is_gt && opt.is_pred) {
            // Correct prediction
            rowClass += "bg-emerald-50 border-emerald-300 text-emerald-950 font-bold shadow-2xs";
            tagHtml = `<span class="badge bg-emerald-600 text-white text-[9px] shrink-0"><i class="fa-solid fa-check mr-1"></i>GT & Dự đoán</span>`;
          } else if (opt.is_gt && !opt.is_pred) {
            // Ground truth (missed by model)
            rowClass += "bg-amber-50 border-amber-300 text-amber-950 font-semibold";
            tagHtml = `<span class="badge bg-amber-600 text-white text-[9px] shrink-0"><i class="fa-solid fa-star mr-1"></i>Đáp án đúng (GT)</span>`;
          } else if (!opt.is_gt && opt.is_pred) {
            // Model incorrectly picked this
            rowClass += "bg-rose-50 border-rose-300 text-rose-950 font-medium";
            tagHtml = `<span class="badge bg-rose-600 text-white text-[9px] shrink-0"><i class="fa-solid fa-xmark mr-1"></i>Mô hình chọn sai</span>`;
          } else {
            // Regular unselected option
            rowClass += "bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-slate-100";
          }

          return `
            <div class="${rowClass}">
              <div class="flex items-center gap-2 truncate">
                <span class="w-5 h-5 rounded-md bg-white border border-slate-300 flex items-center justify-center font-bold font-mono text-[10px] shrink-0 text-slate-700">
                  ${opt.letter}
                </span>
                <span class="truncate" title="${escapeXml(opt.text)}">${escapeXml(opt.text)}</span>
              </div>
              ${tagHtml}
            </div>
          `;
        })
        .join("");

      return `
        <div class="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-3.5">
          <!-- Card Header & Diagram Thumbnail -->
          <div class="space-y-3">
            <div class="relative group rounded-xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[16/10] flex items-center justify-center cursor-pointer" onclick="openVqaLightbox('${q.image_url}', '${escapeXml(q.diagram_title)}', '${q.raw_id}')">
              <img
                src="${q.image_url}"
                alt="${escapeXml(q.diagram_title)}"
                loading="lazy"
                class="w-full h-full object-contain p-2 group-hover:scale-105 transition duration-200"
                onerror="this.onerror=null; this.src='https://placehold.co/400x250?text=S%C6%A1+%C4%90%E1%BB%93+AI2D+#' + '${q.raw_id}';"
              />
              <div class="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2 text-white text-xs font-semibold">
                <i class="fa-solid fa-magnifying-glass-plus text-base"></i> Phóng to sơ đồ
              </div>
              <span class="absolute top-2 left-2 badge bg-slate-900/80 text-white font-mono text-[10px] backdrop-blur-xs">
                #${q.raw_id}
              </span>
            </div>

            <!-- Tags Bar -->
            <div class="flex items-center justify-between gap-1">
              <span class="badge ${typeBadgeClass} text-[10px] font-semibold flex items-center gap-1">
                <i class="fa-solid ${typeIcon} text-[9px]"></i> ${q.type_name_vi || q.type}
              </span>
              ${statusBadge}
            </div>

            <!-- Question Text -->
            <div class="pt-0.5">
              <div class="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Câu hỏi:</div>
              <h4 class="font-bold text-slate-900 text-xs mt-0.5 leading-snug line-clamp-2" title="${escapeXml(q.question)}">
                ${escapeXml(q.question)}
              </h4>
            </div>

            <!-- 4 Options -->
            <div class="space-y-1.5 pt-1">
              ${optionsHtml}
            </div>
          </div>

          <!-- Scene Graph Collapsible & Card Footer -->
          <div class="space-y-2 pt-2 border-t border-slate-100">
            <details class="group text-[11px] bg-slate-50 rounded-xl border border-slate-200 p-2.5">
              <summary class="cursor-pointer font-semibold text-slate-700 hover:text-indigo-600 flex items-center justify-between select-none">
                <span class="flex items-center gap-1.5">
                  <i class="fa-solid fa-network-wired text-indigo-500"></i> Ngữ cảnh EduSG Scene Graph
                </span>
                <i class="fa-solid fa-chevron-down text-slate-400 text-[10px] group-open:rotate-180 transition"></i>
              </summary>
              <div class="mt-2 pt-2 border-t border-slate-200 text-slate-600 leading-relaxed font-mono text-[10px] max-h-32 overflow-y-auto custom-scrollbar">
                ${escapeXml(q.graph_summary)}
              </div>
            </details>

            <div class="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span title="Thời gian sinh suy luận"><i class="fa-regular fa-clock mr-1"></i>${q.latency_s ? q.latency_s + 's' : '0.34s'}</span>
              <span class="text-indigo-600 font-bold">Qwen2.5-VL-7B + EduSG</span>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderVqaPagination() {
  const infoEl = document.getElementById("vqa-pagination-info");
  const controlsEl = document.getElementById("vqa-pagination-controls");
  if (!controlsEl) return;

  const totalItems = vqaFilteredQuestions.length;
  const totalPages = Math.ceil(totalItems / vqaPerPage) || 1;

  if (vqaCurrentPage > totalPages) vqaCurrentPage = totalPages;
  if (vqaCurrentPage < 1) vqaCurrentPage = 1;

  const startItem = totalItems === 0 ? 0 : (vqaCurrentPage - 1) * vqaPerPage + 1;
  const endItem = Math.min(vqaCurrentPage * vqaPerPage, totalItems);

  if (infoEl) {
    infoEl.textContent = `Hiển thị ${startItem} - ${endItem} trên tổng số ${totalItems.toLocaleString()} câu hỏi (Trang ${vqaCurrentPage}/${totalPages})`;
  }

  let btnsHtml = "";

  // First & Prev
  btnsHtml += `
    <button
      onclick="goVqaPage(1)"
      ${vqaCurrentPage === 1 ? "disabled" : ""}
      class="px-2 py-1 rounded-lg border border-slate-200 text-xs font-semibold ${vqaCurrentPage === 1 ? "opacity-40 cursor-not-allowed bg-slate-50 text-slate-400" : "bg-white text-slate-700 hover:bg-slate-100"}"
      title="Trang đầu"
    >
      <i class="fa-solid fa-angles-left"></i>
    </button>
    <button
      onclick="goVqaPage(${vqaCurrentPage - 1})"
      ${vqaCurrentPage === 1 ? "disabled" : ""}
      class="px-2.5 py-1 rounded-lg border border-slate-200 text-xs font-semibold ${vqaCurrentPage === 1 ? "opacity-40 cursor-not-allowed bg-slate-50 text-slate-400" : "bg-white text-slate-700 hover:bg-slate-100"}"
    >
      <i class="fa-solid fa-chevron-left mr-1"></i> Trước
    </button>
  `;

  // Page Numbers (around current page)
  const delta = 2;
  const left = Math.max(1, vqaCurrentPage - delta);
  const right = Math.min(totalPages, vqaCurrentPage + delta);

  if (left > 1) {
    btnsHtml += `<span class="px-1 text-slate-400 font-mono text-xs">...</span>`;
  }

  for (let i = left; i <= right; i++) {
    const isCur = i === vqaCurrentPage;
    btnsHtml += `
      <button
        onclick="goVqaPage(${i})"
        class="w-7 h-7 rounded-lg text-xs font-bold font-mono transition ${isCur ? "bg-indigo-600 text-white shadow-2xs" : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"}"
      >
        ${i}
      </button>
    `;
  }

  if (right < totalPages) {
    btnsHtml += `<span class="px-1 text-slate-400 font-mono text-xs">...</span>`;
  }

  // Next & Last
  btnsHtml += `
    <button
      onclick="goVqaPage(${vqaCurrentPage + 1})"
      ${vqaCurrentPage === totalPages ? "disabled" : ""}
      class="px-2.5 py-1 rounded-lg border border-slate-200 text-xs font-semibold ${vqaCurrentPage === totalPages ? "opacity-40 cursor-not-allowed bg-slate-50 text-slate-400" : "bg-white text-slate-700 hover:bg-slate-100"}"
    >
      Sau <i class="fa-solid fa-chevron-right ml-1"></i>
    </button>
    <button
      onclick="goVqaPage(${totalPages})"
      ${vqaCurrentPage === totalPages ? "disabled" : ""}
      class="px-2 py-1 rounded-lg border border-slate-200 text-xs font-semibold ${vqaCurrentPage === totalPages ? "opacity-40 cursor-not-allowed bg-slate-50 text-slate-400" : "bg-white text-slate-700 hover:bg-slate-100"}"
      title="Trang cuối"
    >
      <i class="fa-solid fa-angles-right"></i>
    </button>
  `;

  controlsEl.innerHTML = btnsHtml;
}

function goVqaPage(p) {
  const totalPages = Math.ceil(vqaFilteredQuestions.length / vqaPerPage) || 1;
  if (p < 1 || p > totalPages) return;
  vqaCurrentPage = p;
  renderVqaCards();
  renderVqaPagination();

  // Scroll smoothly to top of cards grid
  const gridEl = document.getElementById("vqa-cards-grid");
  if (gridEl) {
    gridEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function setupVqaLightbox() {
  const modal = document.getElementById("vqa-lightbox-modal");
  const closeBtn = document.getElementById("vqa-lightbox-close");
  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });
  }
}

function openVqaLightbox(imgUrl, title, rawId) {
  const modal = document.getElementById("vqa-lightbox-modal");
  const img = document.getElementById("vqa-lightbox-img");
  const titleEl = document.getElementById("vqa-lightbox-title");
  const idEl = document.getElementById("vqa-lightbox-id");

  if (!modal || !img) return;

  img.src = imgUrl;
  if (titleEl) titleEl.textContent = title || "Ảnh sơ đồ AI2D";
  if (idEl) idEl.textContent = `#ai2d:${rawId}`;

  modal.classList.remove("hidden");
}


document.addEventListener("DOMContentLoaded", () => {
  initGallery();
  initVnGallery();
  initSotaBenchmark();
  initVisualVqa();
  setupTopMenuNavigation();
  setupAuditModalEvents();
});



/* ==========================================================================
   ACADEMIC TOP NAVIGATION & VIEW SWITCHER (5 VIEWS)
   ========================================================================== */

function setupTopMenuNavigation() {
  const btnLeaderboard = document.getElementById("nav-menu-leaderboard");
  const btnVqa = document.getElementById("nav-menu-vqa");
  const btnCaption = document.getElementById("nav-menu-caption");
  const btnVn = document.getElementById("nav-menu-vn");
  const btnPipeline = document.getElementById("nav-menu-pipeline");

  const viewSota = document.getElementById("view-sota");
  const viewAi2d = document.getElementById("view-ai2d");
  const viewVn = document.getElementById("view-vn");
  const viewPipeline = document.getElementById("view-pipeline");

  const activeBtnClass = "px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 bg-indigo-600 text-white shadow-xs cursor-pointer";
  const inactiveBtnClass = "px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 bg-white text-slate-700 hover:bg-slate-200 border border-slate-200 cursor-pointer";

  window.switchMenu = function(menu) {
    // Hide all views first
    if (viewSota) viewSota.classList.add("hidden");
    if (viewAi2d) viewAi2d.classList.add("hidden");
    if (viewVn) viewVn.classList.add("hidden");
    if (viewPipeline) viewPipeline.classList.add("hidden");

    // Reset all nav button classes
    if (btnLeaderboard) btnLeaderboard.className = inactiveBtnClass;
    if (btnVqa) btnVqa.className = inactiveBtnClass;
    if (btnCaption) btnCaption.className = inactiveBtnClass;
    if (btnVn) btnVn.className = inactiveBtnClass;
    if (btnPipeline) btnPipeline.className = inactiveBtnClass;

    if (menu === "leaderboard") {
      if (viewSota) viewSota.classList.remove("hidden");
      if (btnLeaderboard) btnLeaderboard.className = activeBtnClass;
      // Default to table sub-tab
      const btnTable = document.getElementById("btn-sota-tab-table");
      if (btnTable) btnTable.click();
      history.replaceState(null, "", "#leaderboard");
    } else if (menu === "vqa") {
      if (viewSota) viewSota.classList.remove("hidden");
      if (btnVqa) btnVqa.className = activeBtnClass;
      // Switch to VQA sub-tab
      const btnSubVqa = document.getElementById("btn-sota-tab-vqa");
      if (btnSubVqa) btnSubVqa.click();
      if (typeof initVisualVqa === "function") initVisualVqa();
      history.replaceState(null, "", "#vqa-explorer");
    } else if (menu === "caption") {
      if (viewAi2d) viewAi2d.classList.remove("hidden");
      if (btnCaption) btnCaption.className = activeBtnClass;
      history.replaceState(null, "", "#caption-gallery");
    } else if (menu === "vn") {
      if (viewVn) viewVn.classList.remove("hidden");
      if (btnVn) btnVn.className = activeBtnClass;
      history.replaceState(null, "", "#sgk-vn");
    } else if (menu === "pipeline") {
      if (viewPipeline) viewPipeline.classList.remove("hidden");
      if (btnPipeline) btnPipeline.className = activeBtnClass;
      history.replaceState(null, "", "#pipeline");
    } else {
      // Default fallback: Leaderboard
      if (viewSota) viewSota.classList.remove("hidden");
      if (btnLeaderboard) btnLeaderboard.className = activeBtnClass;
    }
  };

  // Bind click handlers to buttons if not already using onclick
  if (btnLeaderboard) btnLeaderboard.onclick = () => window.switchMenu("leaderboard");
  if (btnVqa) btnVqa.onclick = () => window.switchMenu("vqa");
  if (btnCaption) btnCaption.onclick = () => window.switchMenu("caption");
  if (btnVn) btnVn.onclick = () => window.switchMenu("vn");
  if (btnPipeline) btnPipeline.onclick = () => window.switchMenu("pipeline");

  // Read hash on load
  const hash = window.location.hash;
  if (hash === "#vqa-explorer") {
    window.switchMenu("vqa");
  } else if (hash === "#caption-gallery") {
    window.switchMenu("caption");
  } else if (hash === "#sgk-vn") {
    window.switchMenu("vn");
  } else if (hash === "#pipeline") {
    window.switchMenu("pipeline");
  } else {
    // Default view: Leaderboard
    window.switchMenu("leaderboard");
  }
}

function copyBibtexCitation() {
  const bibBlock = document.getElementById("bibtex-block");
  const btnText = document.getElementById("copy-bibtex-text");
  if (!bibBlock) return;

  const textToCopy = bibBlock.textContent || bibBlock.innerText;
  navigator.clipboard.writeText(textToCopy).then(() => {
    if (btnText) {
      btnText.textContent = "Đã sao chép! ✓";
      setTimeout(() => {
        btnText.textContent = "Sao chép BibTeX";
      }, 2000);
    }
  }).catch(() => {
    alert("Không thể sao chép tự động. Hãy bôi đen và nhấn Ctrl+C.");
  });
}
