const VN_GALLERY_DATA = {
  "total": 50,
  "subjects": {
    "khtn6": {
      "name": "Khoa học tự nhiên 6",
      "key": "khtn6",
      "vi": "KHTN 6 (THCS)",
      "grade": "Khối 6",
      "color": "emerald",
      "icon": "fa-seedling"
    },
    "sinh7": {
      "name": "Sinh học 7",
      "key": "sinh7",
      "vi": "Sinh học 7 (THCS)",
      "grade": "Khối 7",
      "color": "teal",
      "icon": "fa-frog"
    },
    "sinh8": {
      "name": "Sinh học 8",
      "key": "sinh8",
      "vi": "Sinh học 8 (THCS)",
      "grade": "Khối 8",
      "color": "rose",
      "icon": "fa-heart-pulse"
    },
    "sinh9": {
      "name": "Sinh học 9",
      "key": "sinh9",
      "vi": "Sinh học 9 (THCS)",
      "grade": "Khối 9",
      "color": "amber",
      "icon": "fa-dna"
    },
    "sinh10": {
      "name": "Sinh học 10",
      "key": "sinh10",
      "vi": "Sinh học 10 (THPT)",
      "grade": "Khối 10",
      "color": "indigo",
      "icon": "fa-microscope"
    },
    "hoa10": {
      "name": "Hóa học 10",
      "key": "hoa10",
      "vi": "Hóa học 10 (THPT)",
      "grade": "Khối 10",
      "color": "purple",
      "icon": "fa-atom"
    },
    "sinh11": {
      "name": "Sinh học 11",
      "key": "sinh11",
      "vi": "Sinh học 11 (THPT)",
      "grade": "Khối 11",
      "color": "sky",
      "icon": "fa-leaf"
    },
    "sinh12": {
      "name": "Sinh học 12",
      "key": "sinh12",
      "vi": "Sinh học 12 (THPT)",
      "grade": "Khối 12",
      "color": "blue",
      "icon": "fa-helix"
    }
  },
  "taxonomies": {
    "anatomy": {
      "vi": "Giải phẫu & Cấu trúc Sinh học",
      "en": "Anatomy & Biological Structure",
      "color": "sky",
      "icon": "fa-puzzle-piece"
    },
    "life_cycle": {
      "vi": "Vòng đời & Phân bào",
      "en": "Life Cycles & Cell Division",
      "color": "indigo",
      "icon": "fa-arrows-spin"
    },
    "food_web": {
      "vi": "Chuỗi, Lưới thức ăn & Sinh thái",
      "en": "Food Webs & Ecological Pyramids",
      "color": "emerald",
      "icon": "fa-leaf"
    },
    "biogeochemical_cycle": {
      "vi": "Chu trình Sinh-Địa-Hóa & Chuyển hóa",
      "en": "Biogeochemical & Metabolic Cycles",
      "color": "cyan",
      "icon": "fa-droplet"
    },
    "system_process": {
      "vi": "Cơ chế Sinh lý & Di truyền Phân tử",
      "en": "Physiological & Molecular Processes",
      "color": "rose",
      "icon": "fa-gears"
    },
    "astronomy_physics": {
      "vi": "Thiên văn & Vật lý - Hóa học",
      "en": "Astronomy & Physical Science",
      "color": "purple",
      "icon": "fa-moon"
    }
  },
  "diagrams": [
    {
      "id": "vn_diag_01",
      "filename": "vn_diag_01_chuyen_the_chat.png",
      "image_url": "vn_images/vn_diag_01_chuyen_the_chat.png",
      "width": 918,
      "height": 418,
      "title": "Mô hình hạt và sự chuyển thể của chất",
      "subject": "Khoa học tự nhiên 6",
      "subject_key": "khtn6",
      "subject_vi": "KHTN 6 (THCS)",
      "grade": "Khối 6",
      "subject_color": "emerald",
      "subject_icon": "fa-seedling",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương II: Chất quanh ta",
      "lesson": "Bài 10: Các thể của chất và sự chuyển thể (Hình trang 34)",
      "diagram_type": "cycle_phase_change",
      "taxonomy_key": "biogeochemical_cycle",
      "taxonomy_vi": "Chu trình Sinh-Địa-Hóa & Chuyển hóa",
      "taxonomy_en": "Biogeochemical & Metabolic Cycles",
      "taxonomy_color": "cyan",
      "taxonomy_icon": "fa-droplet",
      "key_entities": [
        "chất rắn",
        "chất lỏng",
        "chất khí",
        "nóng chảy",
        "hoá hơi",
        "đông đặc",
        "ngưng tụ",
        "mô hình hạt"
      ],
      "directional_relations": [
        {
          "source": "chất rắn",
          "target": "chất lỏng",
          "relation": "nóng chảy"
        },
        {
          "source": "chất lỏng",
          "target": "chất khí",
          "relation": "hoá hơi"
        },
        {
          "source": "chất khí",
          "target": "chất lỏng",
          "relation": "ngưng tụ"
        },
        {
          "source": "chất lỏng",
          "target": "chất rắn",
          "relation": "đông đặc"
        }
      ],
      "gt_caption_vi": "Sơ đồ mô tả mô hình hạt của ba thể của chất (rắn, lỏng, khí) và các quá trình chuyển thể qua lại: Khi nhận nhiệt, chất rắn nóng chảy chuyển thành chất lỏng, và chất lỏng tiếp tục hoá hơi chuyển thành chất khí; ngược lại, khi giảm nhiệt, chất khí ngưng tụ chuyển thành chất lỏng, và chất lỏng đông đặc chuyển trở lại thành chất rắn.",
      "gt_caption_en": "The diagram illustrates the particle model of the three states of matter (solid, liquid, gas) and their reversible phase transitions: absorbing heat causes solid to melt into liquid, and liquid to vaporize into gas; conversely, cooling down causes gas to condense into liquid, and liquid to freeze back into solid.",
      "generated_caption_vi": "Sơ đồ minh họa mô hình hạt và các quá trình chuyển thể của chất (mô hình hạt và sự chuyển thể của chất). Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: chất rắn, chất lỏng, chất khí, nóng chảy, hoá hơi, đông đặc, ngưng tụ cùng các cấu trúc liên quan (mô hình hạt). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: chất rắn nóng chảy chất lỏng; chất lỏng hoá hơi chất khí; chất khí ngưng tụ chất lỏng; chất lỏng đông đặc chất rắn.",
      "generated_caption_en": "The diagram illustrates the phase changes of matter through a model of particles, showing transitions between solid, liquid, and gas states. It depicts the processes of melting (solid to liquid), vaporization (liquid to gas), condensation (gas to liquid), and freezing (liquid to solid).",
      "metrics_vi": {
        "bleu_1": 0.48,
        "bleu_4": 0.061855670103092786,
        "rouge_l": 0.44970414201183434,
        "entity_recall": 1.0,
        "dir_accuracy": 0.5
      },
      "metrics_en": {
        "cider": 36.0,
        "bertscore_f1": 91.17
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "chất rắn",
            "title": "<b>chất rắn</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "chất lỏng",
            "title": "<b>chất lỏng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "chất khí",
            "title": "<b>chất khí</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "nóng chảy",
            "title": "<b>nóng chảy</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "hoá hơi",
            "title": "<b>hoá hơi</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "đông đặc",
            "title": "<b>đông đặc</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "ngưng tụ",
            "title": "<b>ngưng tụ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "mô hình hạt",
            "title": "<b>mô hình hạt</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "nóng chảy",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "hoá hơi",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N2",
            "label": "ngưng tụ",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N1",
            "label": "đông đặc",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"352pt\" height=\"340pt\"\r\n viewBox=\"0.00 0.00 352.00 340.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 335.57)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M56.16,-36.57C56.16,-36.57 21,-36.57 21,-36.57 15,-36.57 9,-30.57 9,-24.57 9,-24.57 9,-12.57 9,-12.57 9,-6.57 15,-0.57 21,-0.57 21,-0.57 56.16,-0.57 56.16,-0.57 62.16,-0.57 68.16,-6.57 68.16,-12.57 68.16,-12.57 68.16,-24.57 68.16,-24.57 68.16,-30.57 62.16,-36.57 56.16,-36.57\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"38.58\" y=\"-14.87\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">chất rắn</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M204.32,-36.57C204.32,-36.57 164.66,-36.57 164.66,-36.57 158.66,-36.57 152.66,-30.57 152.66,-24.57 152.66,-24.57 152.66,-12.57 152.66,-12.57 152.66,-6.57 158.66,-0.57 164.66,-0.57 164.66,-0.57 204.32,-0.57 204.32,-0.57 210.32,-0.57 216.32,-6.57 216.32,-12.57 216.32,-12.57 216.32,-24.57 216.32,-24.57 216.32,-30.57 210.32,-36.57 204.32,-36.57\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"184.49\" y=\"-14.87\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">chất lỏng</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M68.36,-18.57C89.51,-18.57 118.55,-18.57 142.18,-18.57\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"142.04,-21.19 149.54,-18.57 142.04,-15.94 142.04,-21.19\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"114.91\" y=\"-20.79\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">nóng chảy</text>\r\n</g>\r\n<!-- N2&#45;&gt;N1 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N2&#45;&gt;N1</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M152.38,-6.16C147.2,-4.57 141.84,-3.19 136.66,-2.32 117.6,0.9 112.28,0.52 93.16,-2.32 88.18,-3.05 83.02,-4.16 77.96,-5.45\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"77.56,-2.84 71.05,-7.39 78.98,-7.89 77.56,-2.84\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"114.91\" y=\"-4.54\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">đông đặc</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M332.23,-36.57C332.23,-36.57 298.57,-36.57 298.57,-36.57 292.57,-36.57 286.57,-30.57 286.57,-24.57 286.57,-24.57 286.57,-12.57 286.57,-12.57 286.57,-6.57 292.57,-0.57 298.57,-0.57 298.57,-0.57 332.23,-0.57 332.23,-0.57 338.23,-0.57 344.23,-6.57 344.23,-12.57 344.23,-12.57 344.23,-24.57 344.23,-24.57 344.23,-30.57 338.23,-36.57 332.23,-36.57\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"315.4\" y=\"-14.87\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">chất khí</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M216.7,-18.57C234.55,-18.57 257.09,-18.57 276.03,-18.57\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"275.9,-21.19 283.4,-18.57 275.9,-15.94 275.9,-21.19\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"251.45\" y=\"-20.79\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">hoá hơi</text>\r\n</g>\r\n<!-- N3&#45;&gt;N2 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M286.52,-6.56C281.31,-4.8 275.84,-3.26 270.57,-2.32 253.84,0.69 249.08,0.51 232.32,-2.32 230.38,-2.64 228.41,-3.04 226.44,-3.5\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"225.78,-0.95 219.23,-5.45 227.15,-6.02 225.78,-0.95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"251.45\" y=\"-4.54\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">ngưng tụ</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M61.41,-95.57C61.41,-95.57 15.75,-95.57 15.75,-95.57 9.75,-95.57 3.75,-89.57 3.75,-83.57 3.75,-83.57 3.75,-71.57 3.75,-71.57 3.75,-65.57 9.75,-59.57 15.75,-59.57 15.75,-59.57 61.41,-59.57 61.41,-59.57 67.41,-59.57 73.41,-65.57 73.41,-71.57 73.41,-71.57 73.41,-83.57 73.41,-83.57 73.41,-89.57 67.41,-95.57 61.41,-95.57\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"38.58\" y=\"-73.87\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">nóng chảy</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M55.03,-154.57C55.03,-154.57 22.12,-154.57 22.12,-154.57 16.12,-154.57 10.12,-148.57 10.12,-142.57 10.12,-142.57 10.12,-130.57 10.12,-130.57 10.12,-124.57 16.12,-118.57 22.12,-118.57 22.12,-118.57 55.03,-118.57 55.03,-118.57 61.03,-118.57 67.03,-124.57 67.03,-130.57 67.03,-130.57 67.03,-142.57 67.03,-142.57 67.03,-148.57 61.03,-154.57 55.03,-154.57\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"38.58\" y=\"-132.87\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">hoá hơi</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M58.78,-213.57C58.78,-213.57 18.37,-213.57 18.37,-213.57 12.37,-213.57 6.37,-207.57 6.37,-201.57 6.37,-201.57 6.37,-189.57 6.37,-189.57 6.37,-183.57 12.37,-177.57 18.37,-177.57 18.37,-177.57 58.78,-177.57 58.78,-177.57 64.78,-177.57 70.78,-183.57 70.78,-189.57 70.78,-189.57 70.78,-201.57 70.78,-201.57 70.78,-207.57 64.78,-213.57 58.78,-213.57\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"38.58\" y=\"-191.87\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">đông đặc</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M58.41,-272.57C58.41,-272.57 18.75,-272.57 18.75,-272.57 12.75,-272.57 6.75,-266.57 6.75,-260.57 6.75,-260.57 6.75,-248.57 6.75,-248.57 6.75,-242.57 12.75,-236.57 18.75,-236.57 18.75,-236.57 58.41,-236.57 58.41,-236.57 64.41,-236.57 70.41,-242.57 70.41,-248.57 70.41,-248.57 70.41,-260.57 70.41,-260.57 70.41,-266.57 64.41,-272.57 58.41,-272.57\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"38.58\" y=\"-250.87\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ngưng tụ</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M65.16,-331.57C65.16,-331.57 12,-331.57 12,-331.57 6,-331.57 0,-325.57 0,-319.57 0,-319.57 0,-307.57 0,-307.57 0,-301.57 6,-295.57 12,-295.57 12,-295.57 65.16,-295.57 65.16,-295.57 71.16,-295.57 77.16,-301.57 77.16,-307.57 77.16,-307.57 77.16,-319.57 77.16,-319.57 77.16,-325.57 71.16,-331.57 65.16,-331.57\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"38.58\" y=\"-309.87\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">mô hình hạt</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_02",
      "filename": "vn_diag_02_te_bao_nhan_so_nhan_thuc.png",
      "image_url": "vn_images/vn_diag_02_te_bao_nhan_so_nhan_thuc.png",
      "width": 1278,
      "height": 432,
      "title": "So sánh cấu tạo tế bào nhân sơ và tế bào nhân thực",
      "subject": "Khoa học tự nhiên 6",
      "subject_key": "khtn6",
      "subject_vi": "KHTN 6 (THCS)",
      "grade": "Khối 6",
      "subject_color": "emerald",
      "subject_icon": "fa-seedling",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương V: Tế bào",
      "lesson": "Bài 19: Cấu tạo và chức năng các thành phần của tế bào (Hình 19.2)",
      "diagram_type": "comparative_anatomy",
      "taxonomy_key": "anatomy",
      "taxonomy_vi": "Giải phẫu & Cấu trúc Sinh học",
      "taxonomy_en": "Anatomy & Biological Structure",
      "taxonomy_color": "sky",
      "taxonomy_icon": "fa-puzzle-piece",
      "key_entities": [
        "tế bào nhân sơ",
        "tế bào nhân thực",
        "vùng nhân",
        "nhân",
        "tế bào chất",
        "màng tế bào"
      ],
      "directional_relations": [],
      "gt_caption_vi": "Hình ảnh so sánh cấu tạo giữa tế bào nhân sơ và tế bào nhân thực: Cả hai loại tế bào đều có màng tế bào bao bọc bên ngoài và tế bào chất chứa các thành phần tế bào bên trong; tuy nhiên, tế bào nhân sơ chỉ có vùng nhân chứa vật chất di truyền mà chưa có màng nhân ngăn cách, trong khi tế bào nhân thực sở hữu nhân hoàn chỉnh được bao bọc bởi màng nhân.",
      "gt_caption_en": "The diagram compares the structures of a prokaryotic cell and a eukaryotic cell: Both cell types share an outer cell membrane and cytoplasm; however, the prokaryotic cell only has a nucleoid region without a nuclear membrane, whereas the eukaryotic cell contains a true nucleus enclosed by a nuclear envelope.",
      "generated_caption_vi": "Sơ đồ mô tả chi tiết đặc điểm cấu tạo của so sánh cấu tạo tế bào nhân sơ và tế bào nhân thực trong chương trình Khoa học tự nhiên 6. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: tế bào nhân sơ, tế bào nhân thực, vùng nhân, nhân, tế bào chất, màng tế bào. Các chi tiết cấu tạo được liên kết chặt chẽ theo trật tự không gian và phân cấp chức năng sinh học.",
      "generated_caption_en": "The diagram compares the structure of prokaryotic cells and eukaryotic cells, highlighting key components such as the nucleus region, cell membrane, cytoplasm, and actual nucleus. The layout organizes these elements to illustrate their presence or absence in each type of cell.",
      "metrics_vi": {
        "bleu_1": 0.4367816091954023,
        "bleu_4": 0.10714285714285714,
        "rouge_l": 0.3333333333333333,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 36.04,
        "bertscore_f1": 91.2
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "So sánh cấu tạo tế bào nhân sơ và tế bào nhân thực",
            "title": "<b>So sánh cấu tạo tế bào nhân sơ và tế bào nhân thực</b><br>Vai trò: Chủ đề trung tâm",
            "kind": "hub",
            "color": {
              "background": "#fef3c7",
              "border": "#d97706",
              "highlight": "#fde68a"
            },
            "shape": "ellipse"
          },
          {
            "id": "N2",
            "label": "tế bào nhân sơ",
            "title": "<b>tế bào nhân sơ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "tế bào nhân thực",
            "title": "<b>tế bào nhân thực</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "vùng nhân",
            "title": "<b>vùng nhân</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "nhân",
            "title": "<b>nhân</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "tế bào chất",
            "title": "<b>tế bào chất</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "màng tế bào",
            "title": "<b>màng tế bào</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N3",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N4",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N5",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N6",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N7",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          }
        ]
      },
      "graphviz_svg": "<svg width=\"596pt\" height=\"123pt\"\r\n viewBox=\"0.00 0.00 596.00 123.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 119.25)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<ellipse fill=\"#fef3c7\" stroke=\"#d97706\" cx=\"317.45\" cy=\"-97.25\" rx=\"189.78\" ry=\"18\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"317.45\" y=\"-93.55\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#78350f\">So sánh cấu tạo tế bào nhân sơ và tế bào nhân thực</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M80.91,-36C80.91,-36 12,-36 12,-36 6,-36 0,-30 0,-24 0,-24 0,-12 0,-12 0,-6 6,0 12,0 12,0 80.91,0 80.91,0 86.91,0 92.91,-6 92.91,-12 92.91,-12 92.91,-24 92.91,-24 92.91,-30 86.91,-36 80.91,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.45\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tế bào nhân sơ</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M217.36,-81.58C192.82,-76.82 166.82,-70.77 143.2,-63.25 124.47,-57.29 104.59,-48.63 87.75,-40.56\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"88.91,-38.2 81.02,-37.27 86.6,-42.92 88.91,-38.2\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"169.83\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M205.41,-36C205.41,-36 127.5,-36 127.5,-36 121.5,-36 115.5,-30 115.5,-24 115.5,-24 115.5,-12 115.5,-12 115.5,-6 121.5,0 127.5,0 127.5,0 205.41,0 205.41,0 211.41,0 217.41,-6 217.41,-12 217.41,-12 217.41,-24 217.41,-24 217.41,-30 211.41,-36 205.41,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"166.45\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tế bào nhân thực</text>\r\n</g>\r\n<!-- N1&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N1&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M254.57,-79.82C241.8,-75.32 228.75,-69.82 217.2,-63.25 207.36,-57.65 197.7,-49.95 189.5,-42.54\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"191.68,-40.99 184.41,-37.79 188.09,-44.83 191.68,-40.99\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"243.83\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M298.66,-36C298.66,-36 252.25,-36 252.25,-36 246.25,-36 240.25,-30 240.25,-24 240.25,-24 240.25,-12 240.25,-12 240.25,-6 246.25,0 252.25,0 252.25,0 298.66,0 298.66,0 304.66,0 310.66,-6 310.66,-12 310.66,-12 310.66,-24 310.66,-24 310.66,-30 304.66,-36 298.66,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"275.45\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">vùng nhân</text>\r\n</g>\r\n<!-- N1&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N1&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M291.81,-79.05C286.84,-74.51 282.23,-69.19 279.2,-63.25 276.45,-57.84 275.03,-51.57 274.39,-45.49\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"277.02,-45.55 274.04,-38.18 271.78,-45.8 277.02,-45.55\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"305.83\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M375.45,-36C375.45,-36 345.45,-36 345.45,-36 339.45,-36 333.45,-30 333.45,-24 333.45,-24 333.45,-12 333.45,-12 333.45,-6 339.45,0 345.45,0 345.45,0 375.45,0 375.45,0 381.45,0 387.45,-6 387.45,-12 387.45,-12 387.45,-24 387.45,-24 387.45,-30 381.45,-36 375.45,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"360.45\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">nhân</text>\r\n</g>\r\n<!-- N1&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N1&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M327,-79.11C332.64,-68.98 339.89,-55.95 346.19,-44.62\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"348.48,-45.91 349.83,-38.08 343.89,-43.36 348.48,-45.91\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"368.15\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M472.16,-36C472.16,-36 422.75,-36 422.75,-36 416.75,-36 410.75,-30 410.75,-24 410.75,-24 410.75,-12 410.75,-12 410.75,-6 416.75,0 422.75,0 422.75,0 472.16,0 472.16,0 478.16,0 484.16,-6 484.16,-12 484.16,-12 484.16,-24 484.16,-24 484.16,-30 478.16,-36 472.16,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"447.45\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tế bào chất</text>\r\n</g>\r\n<!-- N1&#45;&gt;N6 -->\r\n<g id=\"edge5\" class=\"edge\">\r\n<title>N1&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M367.44,-79.49C378.36,-74.92 389.6,-69.48 399.45,-63.25 408.55,-57.5 417.5,-49.93 425.16,-42.68\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"426.88,-44.67 430.4,-37.55 423.21,-40.92 426.88,-44.67\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"440.49\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M575.53,-36C575.53,-36 519.38,-36 519.38,-36 513.38,-36 507.37,-30 507.37,-24 507.37,-24 507.37,-12 507.37,-12 507.37,-6 513.38,0 519.38,0 519.38,0 575.53,0 575.53,0 581.53,0 587.53,-6 587.53,-12 587.53,-12 587.53,-24 587.53,-24 587.53,-30 581.53,-36 575.53,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"547.45\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">màng tế bào</text>\r\n</g>\r\n<!-- N1&#45;&gt;N7 -->\r\n<g id=\"edge6\" class=\"edge\">\r\n<title>N1&#45;&gt;N7</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M411.91,-81.23C432.25,-76.59 453.36,-70.69 472.45,-63.25 487.15,-57.52 502.33,-49.12 515.15,-41.16\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"516.23,-43.59 521.15,-37.35 513.41,-39.16 516.23,-43.59\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"522.85\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_03",
      "filename": "vn_diag_03_te_bao_dong_vat_thuc_vat.png",
      "image_url": "vn_images/vn_diag_03_te_bao_dong_vat_thuc_vat.png",
      "width": 1334,
      "height": 668,
      "title": "Cấu tạo tế bào động vật và tế bào thực vật",
      "subject": "Khoa học tự nhiên 6",
      "subject_key": "khtn6",
      "subject_vi": "KHTN 6 (THCS)",
      "grade": "Khối 6",
      "subject_color": "emerald",
      "subject_icon": "fa-seedling",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương V: Tế bào",
      "lesson": "Bài 19: Cấu tạo và chức năng các thành phần của tế bào (Hình 19.3)",
      "diagram_type": "comparative_anatomy",
      "taxonomy_key": "anatomy",
      "taxonomy_vi": "Giải phẫu & Cấu trúc Sinh học",
      "taxonomy_en": "Anatomy & Biological Structure",
      "taxonomy_color": "sky",
      "taxonomy_icon": "fa-puzzle-piece",
      "key_entities": [
        "tế bào động vật",
        "tế bào thực vật",
        "nhân",
        "tế bào chất",
        "ti thể",
        "màng tế bào",
        "lục lạp",
        "không bào",
        "thành tế bào"
      ],
      "directional_relations": [],
      "gt_caption_vi": "Sơ đồ đối chiếu cấu tạo giải phẫu giữa tế bào động vật và tế bào thực vật: Hai loại tế bào đều chứa các thành phần chung gồm nhân, tế bào chất, ti thể và màng tế bào; điểm khác biệt then chốt là tế bào thực vật có thêm thành tế bào bao bọc bên ngoài tạo độ cứng cáp, lục lạp chứa diệp lục để thực hiện quang hợp, và không bào trung tâm kích thước lớn để dự trữ dinh dưỡng.",
      "gt_caption_en": "The diagram provides an anatomical comparison between animal and plant cells: Both share fundamental components including the nucleus, cytoplasm, mitochondria, and cell membrane; however, plant cells uniquely possess a rigid cell wall for structural protection, chloroplasts containing chlorophyll for photosynthesis, and a large central vacuole for storage.",
      "generated_caption_vi": "Sơ đồ mô tả chi tiết đặc điểm cấu tạo của cấu tạo tế bào động vật và tế bào thực vật trong chương trình Khoa học tự nhiên 6. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: tế bào động vật, tế bào thực vật, nhân, tế bào chất, ti thể, màng tế bào, lục lạp cùng các cấu trúc liên quan (không bào, thành tế bào). Các chi tiết cấu tạo được liên kết chặt chẽ theo trật tự không gian và phân cấp chức năng sinh học.",
      "generated_caption_en": "The diagram compares the structures of animal and plant cells, highlighting key components such as the nucleus, cytoplasm, mitochondria, cell membrane, chloroplasts, vacuoles, and cell wall. The layout organizes these elements to illustrate their presence and differences between the two types of cells.",
      "metrics_vi": {
        "bleu_1": 0.46938775510204084,
        "bleu_4": 0.10526315789473684,
        "rouge_l": 0.34972677595628415,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 98.0,
        "bertscore_f1": 91.77
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "Cấu tạo tế bào động vật và tế bào thực vật",
            "title": "<b>Cấu tạo tế bào động vật và tế bào thực vật</b><br>Vai trò: Chủ đề trung tâm",
            "kind": "hub",
            "color": {
              "background": "#fef3c7",
              "border": "#d97706",
              "highlight": "#fde68a"
            },
            "shape": "ellipse"
          },
          {
            "id": "N2",
            "label": "tế bào động vật",
            "title": "<b>tế bào động vật</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "tế bào thực vật",
            "title": "<b>tế bào thực vật</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "nhân",
            "title": "<b>nhân</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "tế bào chất",
            "title": "<b>tế bào chất</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "ti thể",
            "title": "<b>ti thể</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "màng tế bào",
            "title": "<b>màng tế bào</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "lục lạp",
            "title": "<b>lục lạp</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "không bào",
            "title": "<b>không bào</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "thành tế bào",
            "title": "<b>thành tế bào</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N3",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N4",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N5",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N6",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N7",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N8",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N9",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N10",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          }
        ]
      },
      "graphviz_svg": "<svg width=\"844pt\" height=\"123pt\"\r\n viewBox=\"0.00 0.00 844.00 123.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 119.25)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<ellipse fill=\"#fef3c7\" stroke=\"#d97706\" cx=\"433.2\" cy=\"-97.25\" rx=\"156.4\" ry=\"18\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"433.2\" y=\"-93.55\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#78350f\">Cấu tạo tế bào động vật và tế bào thực vật</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M82.41,-36C82.41,-36 12,-36 12,-36 6,-36 0,-30 0,-24 0,-24 0,-12 0,-12 0,-6 6,0 12,0 12,0 82.41,0 82.41,0 88.41,0 94.41,-6 94.41,-12 94.41,-12 94.41,-24 94.41,-24 94.41,-30 88.41,-36 82.41,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"47.2\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tế bào động vật</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M297.28,-88.12C250.67,-83.27 198.54,-75.55 151.95,-63.25 130.86,-57.68 108.46,-48.67 89.81,-40.24\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"90.95,-37.87 83.04,-37.11 88.75,-42.64 90.95,-37.87\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"178.58\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M197.28,-36C197.28,-36 129.12,-36 129.12,-36 123.12,-36 117.12,-30 117.12,-24 117.12,-24 117.12,-12 117.12,-12 117.12,-6 123.12,0 129.12,0 129.12,0 197.28,0 197.28,0 203.28,0 209.28,-6 209.28,-12 209.28,-12 209.28,-24 209.28,-24 209.28,-30 203.28,-36 197.28,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"163.2\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tế bào thực vật</text>\r\n</g>\r\n<!-- N1&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N1&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M315.96,-85.01C288.17,-80.15 259.05,-73.2 232.95,-63.25 219,-57.93 204.85,-49.61 192.97,-41.61\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"194.8,-39.68 187.14,-37.56 191.8,-44 194.8,-39.68\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"259.58\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M274.2,-36C274.2,-36 244.2,-36 244.2,-36 238.2,-36 232.2,-30 232.2,-24 232.2,-24 232.2,-12 232.2,-12 232.2,-6 238.2,0 244.2,0 244.2,0 274.2,0 274.2,0 280.2,0 286.2,-6 286.2,-12 286.2,-12 286.2,-24 286.2,-24 286.2,-30 280.2,-36 274.2,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"259.2\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">nhân</text>\r\n</g>\r\n<!-- N1&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N1&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M352.47,-81.47C336.83,-76.88 320.96,-70.93 306.95,-63.25 297.39,-58.01 288.26,-50.43 280.59,-43.03\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"282.5,-41.23 275.36,-37.75 278.77,-44.92 282.5,-41.23\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"333.58\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M370.91,-36C370.91,-36 321.5,-36 321.5,-36 315.5,-36 309.5,-30 309.5,-24 309.5,-24 309.5,-12 309.5,-12 309.5,-6 315.5,0 321.5,0 321.5,0 370.91,0 370.91,0 376.91,0 382.91,-6 382.91,-12 382.91,-12 382.91,-24 382.91,-24 382.91,-30 376.91,-36 370.91,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"346.2\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tế bào chất</text>\r\n</g>\r\n<!-- N1&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N1&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M397.15,-79.41C389.34,-74.81 381.47,-69.38 374.95,-63.25 369.1,-57.74 363.89,-50.82 359.56,-44.09\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"362.04,-43.13 355.92,-38.07 357.55,-45.84 362.04,-43.13\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"401.58\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M448.2,-36C448.2,-36 418.2,-36 418.2,-36 412.2,-36 406.2,-30 406.2,-24 406.2,-24 406.2,-12 406.2,-12 406.2,-6 412.2,0 418.2,0 418.2,0 448.2,0 448.2,0 454.2,0 460.2,-6 460.2,-12 460.2,-12 460.2,-24 460.2,-24 460.2,-30 454.2,-36 448.2,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"433.2\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ti thể</text>\r\n</g>\r\n<!-- N1&#45;&gt;N6 -->\r\n<g id=\"edge5\" class=\"edge\">\r\n<title>N1&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M433.2,-79.11C433.2,-69.27 433.2,-56.72 433.2,-45.63\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"435.83,-45.83 433.21,-38.33 430.58,-45.83 435.83,-45.83\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"459.83\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M551.28,-36C551.28,-36 495.12,-36 495.12,-36 489.12,-36 483.12,-30 483.12,-24 483.12,-24 483.12,-12 483.12,-12 483.12,-6 489.12,0 495.12,0 495.12,0 551.28,0 551.28,0 557.28,0 563.28,-6 563.28,-12 563.28,-12 563.28,-24 563.28,-24 563.28,-30 557.28,-36 551.28,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"523.2\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">màng tế bào</text>\r\n</g>\r\n<!-- N1&#45;&gt;N7 -->\r\n<g id=\"edge6\" class=\"edge\">\r\n<title>N1&#45;&gt;N7</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M468.58,-79.32C476.46,-74.7 484.48,-69.28 491.2,-63.25 497.39,-57.7 503.1,-50.76 507.92,-44.03\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"510.01,-45.64 512.05,-37.96 505.67,-42.69 510.01,-45.64\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"528.1\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M628.2,-36C628.2,-36 598.2,-36 598.2,-36 592.2,-36 586.2,-30 586.2,-24 586.2,-24 586.2,-12 586.2,-12 586.2,-6 592.2,0 598.2,0 598.2,0 628.2,0 628.2,0 634.2,0 640.2,-6 640.2,-12 640.2,-12 640.2,-24 640.2,-24 640.2,-30 634.2,-36 628.2,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"613.2\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">lục lạp</text>\r\n</g>\r\n<!-- N1&#45;&gt;N8 -->\r\n<g id=\"edge7\" class=\"edge\">\r\n<title>N1&#45;&gt;N8</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M512.78,-81.33C528.96,-76.72 545.52,-70.8 560.2,-63.25 570.7,-57.85 580.96,-50.07 589.61,-42.52\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"591.22,-44.6 595.02,-37.62 587.7,-40.71 591.22,-44.6\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"604.35\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M721.41,-36C721.41,-36 675,-36 675,-36 669,-36 663,-30 663,-24 663,-24 663,-12 663,-12 663,-6 669,0 675,0 675,0 721.41,0 721.41,0 727.41,0 733.41,-6 733.41,-12 733.41,-12 733.41,-24 733.41,-24 733.41,-30 727.41,-36 721.41,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"698.2\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">không bào</text>\r\n</g>\r\n<!-- N1&#45;&gt;N9 -->\r\n<g id=\"edge8\" class=\"edge\">\r\n<title>N1&#45;&gt;N9</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M555.4,-85.67C582.66,-80.78 610.95,-73.65 636.2,-63.25 648.8,-58.07 661.3,-49.89 671.74,-41.97\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"673.13,-44.21 677.4,-37.51 669.88,-40.09 673.13,-44.21\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"683.08\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M824.28,-36C824.28,-36 768.12,-36 768.12,-36 762.12,-36 756.12,-30 756.12,-24 756.12,-24 756.12,-12 756.12,-12 756.12,-6 762.12,0 768.12,0 768.12,0 824.28,0 824.28,0 830.28,0 836.28,-6 836.28,-12 836.28,-12 836.28,-24 836.28,-24 836.28,-30 830.28,-36 824.28,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"796.2\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thành tế bào</text>\r\n</g>\r\n<!-- N1&#45;&gt;N10 -->\r\n<g id=\"edge9\" class=\"edge\">\r\n<title>N1&#45;&gt;N10</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M577.47,-90.07C622.36,-85.32 671.52,-77.16 715.2,-63.25 731.54,-58.05 748.37,-49.46 762.43,-41.23\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"763.61,-43.59 768.68,-37.47 760.9,-39.09 763.61,-43.59\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"767.56\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_04",
      "filename": "vn_diag_04_lon_len_phan_chia_te_bao.png",
      "image_url": "vn_images/vn_diag_04_lon_len_phan_chia_te_bao.png",
      "width": 1223,
      "height": 301,
      "title": "Sơ đồ quá trình lớn lên và sinh sản của tế bào",
      "subject": "Khoa học tự nhiên 6",
      "subject_key": "khtn6",
      "subject_vi": "KHTN 6 (THCS)",
      "grade": "Khối 6",
      "subject_color": "emerald",
      "subject_icon": "fa-seedling",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương V: Tế bào",
      "lesson": "Bài 20: Sự lớn lên và sinh sản của tế bào (Hình 20.2)",
      "diagram_type": "sequential_process",
      "taxonomy_key": "life_cycle",
      "taxonomy_vi": "Vòng đời & Phân bào",
      "taxonomy_en": "Life Cycles & Cell Division",
      "taxonomy_color": "indigo",
      "taxonomy_icon": "fa-arrows-spin",
      "key_entities": [
        "1 tế bào",
        "phân chia",
        "2 tế bào",
        "tế bào lớn lên",
        "4 tế bào"
      ],
      "directional_relations": [
        {
          "source": "1 tế bào",
          "target": "2 tế bào",
          "relation": "phân chia thành"
        },
        {
          "source": "2 tế bào",
          "target": "tế bào lớn lên",
          "relation": "sinh trưởng"
        },
        {
          "source": "tế bào lớn lên",
          "target": "4 tế bào",
          "relation": "phân chia thành"
        }
      ],
      "gt_caption_vi": "Sơ đồ tiến trình mô tả quy luật lớn lên và phân chia liên tiếp của tế bào: Ban đầu từ 1 tế bào mẹ thực hiện phân chia tạo thành 2 tế bào con; các tế bào con qua quá trình trao đổi chất sẽ lớn lên đạt kích thước trưởng thành, sau đó tiếp tục phân chia thành 4 tế bào con, giúp cơ thể sinh vật tăng trưởng về số lượng tế bào và khối lượng.",
      "gt_caption_en": "The flow diagram illustrates the sequential growth and division cycle of cells: An initial mother cell divides into 2 daughter cells; through metabolism these daughter cells grow to full maturity and subsequently divide into 4 cells, facilitating the overall physical growth and tissue development of the organism.",
      "generated_caption_vi": "Sơ đồ trình bày tiến trình khoa học diễn tiến theo từng giai đoạn của sơ đồ quá trình lớn lên và sinh sản của tế bào. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: 1 tế bào, phân chia, 2 tế bào, tế bào lớn lên, 4 tế bào. Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: 1 tế bào phân chia thành 2 tế bào; 2 tế bào sinh trưởng tế bào lớn lên; tế bào lớn lên phân chia thành 4 tế bào.",
      "generated_caption_en": "The diagram illustrates the growth and reproduction process of cells, showing a single cell dividing into two cells, these two cells then growing larger, and finally each of those larger cells dividing again to produce four cells in total. The process highlights the steps of cell division and growth sequentially.",
      "metrics_vi": {
        "bleu_1": 0.42424242424242425,
        "bleu_4": 0.041666666666666664,
        "rouge_l": 0.34831460674157305,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 48.73,
        "bertscore_f1": 91.21
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "1 tế bào",
            "title": "<b>1 tế bào</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "2 tế bào",
            "title": "<b>2 tế bào</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "tế bào lớn lên",
            "title": "<b>tế bào lớn lên</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "4 tế bào",
            "title": "<b>4 tế bào</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "phân chia",
            "title": "<b>phân chia</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "phân chia thành",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "sinh trưởng",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "phân chia thành",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"560pt\" height=\"103pt\"\r\n viewBox=\"0.00 0.00 560.00 103.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 99)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M50.91,-36C50.91,-36 15.75,-36 15.75,-36 9.75,-36 3.75,-30 3.75,-24 3.75,-24 3.75,-12 3.75,-12 3.75,-6 9.75,0 15.75,0 15.75,0 50.91,0 50.91,0 56.91,0 62.91,-6 62.91,-12 62.91,-12 62.91,-24 62.91,-24 62.91,-30 56.91,-36 50.91,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"33.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">1 tế bào</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M214.07,-36C214.07,-36 178.91,-36 178.91,-36 172.91,-36 166.91,-30 166.91,-24 166.91,-24 166.91,-12 166.91,-12 166.91,-6 172.91,0 178.91,0 178.91,0 214.07,0 214.07,0 220.07,0 226.07,-6 226.07,-12 226.07,-12 226.07,-24 226.07,-24 226.07,-30 220.07,-36 214.07,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"196.49\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">2 tế bào</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M63.14,-18C89.19,-18 127.75,-18 156.53,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"156.43,-20.63 163.93,-18 156.43,-15.38 156.43,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"116.79\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">phân chia thành</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M380.98,-36C380.98,-36 318.82,-36 318.82,-36 312.82,-36 306.82,-30 306.82,-24 306.82,-24 306.82,-12 306.82,-12 306.82,-6 312.82,0 318.82,0 318.82,0 380.98,0 380.98,0 386.98,0 392.98,-6 392.98,-12 392.98,-12 392.98,-24 392.98,-24 392.98,-30 386.98,-36 380.98,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"349.9\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tế bào lớn lên</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M226.33,-18C246.06,-18 272.79,-18 296.26,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"296.2,-20.63 303.7,-18 296.2,-15.38 296.2,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"266.45\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">sinh trưởng</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M540.39,-36C540.39,-36 505.23,-36 505.23,-36 499.23,-36 493.23,-30 493.23,-24 493.23,-24 493.23,-12 493.23,-12 493.23,-6 499.23,0 505.23,0 505.23,0 540.39,0 540.39,0 546.39,0 552.39,-6 552.39,-12 552.39,-12 552.39,-24 552.39,-24 552.39,-30 546.39,-36 540.39,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"522.81\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">4 tế bào</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M393.15,-18C420.55,-18 455.99,-18 482.74,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"482.67,-20.63 490.17,-18 482.67,-15.38 482.67,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"443.11\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">phân chia thành</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M54.66,-95C54.66,-95 12,-95 12,-95 6,-95 0,-89 0,-83 0,-83 0,-71 0,-71 0,-65 6,-59 12,-59 12,-59 54.66,-59 54.66,-59 60.66,-59 66.66,-65 66.66,-71 66.66,-71 66.66,-83 66.66,-83 66.66,-89 60.66,-95 54.66,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"33.33\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">phân chia</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_05",
      "filename": "vn_diag_05_cap_to_chuc_co_the_nguoi.png",
      "image_url": "vn_images/vn_diag_05_cap_to_chuc_co_the_nguoi.png",
      "width": 1320,
      "height": 968,
      "title": "Sơ đồ các cấp tổ chức cấu tạo cơ thể người",
      "subject": "Khoa học tự nhiên 6",
      "subject_key": "khtn6",
      "subject_vi": "KHTN 6 (THCS)",
      "grade": "Khối 6",
      "subject_color": "emerald",
      "subject_icon": "fa-seedling",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương VI: Từ tế bào đến cơ thể",
      "lesson": "Bài 23: Tổ chức cơ thể đa bào (Hình 23.1)",
      "diagram_type": "hierarchy_organization",
      "taxonomy_key": "system_process",
      "taxonomy_vi": "Cơ chế Sinh lý & Di truyền Phân tử",
      "taxonomy_en": "Physiological & Molecular Processes",
      "taxonomy_color": "rose",
      "taxonomy_icon": "fa-gears",
      "key_entities": [
        "tế bào",
        "tế bào cơ",
        "mô",
        "cơ quan",
        "dạ dày",
        "hệ cơ quan",
        "hệ tiêu hoá",
        "cơ thể"
      ],
      "directional_relations": [
        {
          "source": "tế bào",
          "target": "mô",
          "relation": "tập hợp thành"
        },
        {
          "source": "mô",
          "target": "cơ quan",
          "relation": "cấu tạo nên"
        },
        {
          "source": "cơ quan",
          "target": "hệ cơ quan",
          "relation": "phối hợp thành"
        },
        {
          "source": "hệ cơ quan",
          "target": "cơ thể",
          "relation": "tổng hòa tạo nên"
        }
      ],
      "gt_caption_vi": "Sơ đồ cấu trúc phân cấp các cấp tổ chức trong cơ thể người từ mức độ vi mô đến vĩ mô theo chiều mũi tên: Các tế bào đơn lẻ (như tế bào cơ) tập hợp tạo thành mô; nhiều mô phối hợp tạo nên cơ quan (như dạ dày); các cơ quan cùng thực hiện chức năng liên kết thành hệ cơ quan (như hệ tiêu hoá); và các hệ cơ quan phối hợp nhịp nhàng tạo thành cơ thể người hoàn chỉnh.",
      "gt_caption_en": "The structural diagram illustrates the biological levels of organization in the human body from microscopic to macroscopic levels along directional arrows: Individual cells (such as muscle cells) form tissues; tissues assemble into organs (such as the stomach); related organs work together within organ systems (such as the digestive system); and organ systems integrate to constitute the complete human organism.",
      "generated_caption_vi": "Sơ đồ khoa học minh họa trực quan nội dung 'Sơ đồ các cấp tổ chức cấu tạo cơ thể người'. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: tế bào, tế bào cơ, mô, cơ quan, dạ dày, hệ cơ quan, hệ tiêu hoá cùng các cấu trúc liên quan (cơ thể). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: tế bào tập hợp thành mô; mô cấu tạo nên cơ quan; cơ quan phối hợp thành hệ cơ quan; hệ cơ quan tổng hòa tạo nên cơ thể.",
      "generated_caption_en": "The diagram illustrates the hierarchical organization of human body structures, showing how cells form tissues, such as muscle tissue, which then combine to create organs like the stomach. These organs work together to form organ systems, such as the digestive system, which ultimately make up the entire body.",
      "metrics_vi": {
        "bleu_1": 0.5436893203883495,
        "bleu_4": 0.04,
        "rouge_l": 0.3829787234042553,
        "entity_recall": 1.0,
        "dir_accuracy": 0.75
      },
      "metrics_en": {
        "cider": 22.28,
        "bertscore_f1": 91.18
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "tế bào",
            "title": "<b>tế bào</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "mô",
            "title": "<b>mô</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "cơ quan",
            "title": "<b>cơ quan</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "hệ cơ quan",
            "title": "<b>hệ cơ quan</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "cơ thể",
            "title": "<b>cơ thể</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "tế bào cơ",
            "title": "<b>tế bào cơ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "dạ dày",
            "title": "<b>dạ dày</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "hệ tiêu hoá",
            "title": "<b>hệ tiêu hoá</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "tập hợp thành",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "cấu tạo nên",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "phối hợp thành",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N5",
            "label": "tổng hòa tạo nên",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"700pt\" height=\"221pt\"\r\n viewBox=\"0.00 0.00 700.00 221.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 217)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M51.71,-36C51.71,-36 21.71,-36 21.71,-36 15.71,-36 9.71,-30 9.71,-24 9.71,-24 9.71,-12 9.71,-12 9.71,-6 15.71,0 21.71,0 21.71,0 51.71,0 51.71,0 57.71,0 63.71,-6 63.71,-12 63.71,-12 63.71,-24 63.71,-24 63.71,-30 57.71,-36 51.71,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"36.71\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tế bào</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M207.41,-36C207.41,-36 177.41,-36 177.41,-36 171.41,-36 165.41,-30 165.41,-24 165.41,-24 165.41,-12 165.41,-12 165.41,-6 171.41,0 177.41,0 177.41,0 207.41,0 207.41,0 213.41,0 219.41,-6 219.41,-12 219.41,-12 219.41,-24 219.41,-24 219.41,-30 213.41,-36 207.41,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"192.41\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">mô</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M64.13,-18C89.17,-18 127,-18 154.91,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"154.85,-20.63 162.35,-18 154.85,-15.38 154.85,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"119.41\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">tập hợp thành</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M349.57,-36C349.57,-36 313.66,-36 313.66,-36 307.66,-36 301.66,-30 301.66,-24 301.66,-24 301.66,-12 301.66,-12 301.66,-6 307.66,0 313.66,0 313.66,0 349.57,0 349.57,0 355.57,0 361.57,-6 361.57,-12 361.57,-12 361.57,-24 361.57,-24 361.57,-30 355.57,-36 349.57,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"331.62\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">cơ quan</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M219.86,-18C240.12,-18 268.39,-18 291.29,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"291.17,-20.63 298.67,-18 291.17,-15.38 291.17,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"260.54\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">cấu tạo nên</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M520.98,-36C520.98,-36 470.07,-36 470.07,-36 464.07,-36 458.07,-30 458.07,-24 458.07,-24 458.07,-12 458.07,-12 458.07,-6 464.07,0 470.07,0 470.07,0 520.98,0 520.98,0 526.98,0 532.98,-6 532.98,-12 532.98,-12 532.98,-24 532.98,-24 532.98,-30 526.98,-36 520.98,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"495.53\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">hệ cơ quan</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M361.94,-18C385.88,-18 420.16,-18 447.87,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"447.53,-20.63 455.03,-18 447.53,-15.38 447.53,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"409.82\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">phối hợp thành</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M679.73,-36C679.73,-36 649.73,-36 649.73,-36 643.73,-36 637.73,-30 637.73,-24 637.73,-24 637.73,-12 637.73,-12 637.73,-6 643.73,0 649.73,0 649.73,0 679.73,0 679.73,0 685.73,0 691.73,-6 691.73,-12 691.73,-12 691.73,-24 691.73,-24 691.73,-30 685.73,-36 679.73,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"664.73\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">cơ thể</text>\r\n</g>\r\n<!-- N4&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N4&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M533.22,-18C561.09,-18 599.25,-18 627.11,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"627.01,-20.63 634.51,-18 627.01,-15.38 627.01,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"585.36\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">tổng hòa tạo nên</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M57.66,-95C57.66,-95 15.75,-95 15.75,-95 9.75,-95 3.75,-89 3.75,-83 3.75,-83 3.75,-71 3.75,-71 3.75,-65 9.75,-59 15.75,-59 15.75,-59 57.66,-59 57.66,-59 63.66,-59 69.66,-65 69.66,-71 69.66,-71 69.66,-83 69.66,-83 69.66,-89 63.66,-95 57.66,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"36.71\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tế bào cơ</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M51.71,-154C51.71,-154 21.71,-154 21.71,-154 15.71,-154 9.71,-148 9.71,-142 9.71,-142 9.71,-130 9.71,-130 9.71,-124 15.71,-118 21.71,-118 21.71,-118 51.71,-118 51.71,-118 57.71,-118 63.71,-124 63.71,-130 63.71,-130 63.71,-142 63.71,-142 63.71,-148 57.71,-154 51.71,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"36.71\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">dạ dày</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M61.41,-213C61.41,-213 12,-213 12,-213 6,-213 0,-207 0,-201 0,-201 0,-189 0,-189 0,-183 6,-177 12,-177 12,-177 61.41,-177 61.41,-177 67.41,-177 73.41,-183 73.41,-189 73.41,-189 73.41,-201 73.41,-201 73.41,-207 67.41,-213 61.41,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"36.71\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">hệ tiêu hoá</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_06",
      "filename": "vn_diag_06_tuan_trang_8_pha.png",
      "image_url": "vn_images/vn_diag_06_tuan_trang_8_pha.png",
      "width": 1278,
      "height": 723,
      "title": "Các hình dạng nhìn thấy của Mặt Trăng trong Tuần Trăng",
      "subject": "Khoa học tự nhiên 6",
      "subject_key": "khtn6",
      "subject_vi": "KHTN 6 (THCS)",
      "grade": "Khối 6",
      "subject_color": "emerald",
      "subject_icon": "fa-seedling",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương X: Trái Đất và bầu trời",
      "lesson": "Bài 53: Mặt Trăng (Hình 53.2)",
      "diagram_type": "orbit_cycle",
      "taxonomy_key": "astronomy_physics",
      "taxonomy_vi": "Thiên văn & Vật lý - Hóa học",
      "taxonomy_en": "Astronomy & Physical Science",
      "taxonomy_color": "purple",
      "taxonomy_icon": "fa-moon",
      "key_entities": [
        "Mặt Trăng",
        "Trái Đất",
        "ánh sáng mặt trời",
        "quỹ đạo",
        "Không Trăng",
        "Trăng khuyết",
        "bán nguyệt",
        "Trăng tròn"
      ],
      "directional_relations": [
        {
          "source": "Không Trăng",
          "target": "Trăng khuyết đầu tháng",
          "relation": "chuyển tiếp quỹ đạo"
        },
        {
          "source": "Trăng khuyết đầu tháng",
          "target": "Bán nguyệt",
          "relation": "chuyển tiếp quỹ đạo"
        },
        {
          "source": "Bán nguyệt",
          "target": "Trăng tròn",
          "relation": "đạt đỉnh sáng"
        },
        {
          "source": "Trăng tròn",
          "target": "Không Trăng",
          "relation": "khuyết dần kết thúc chu kì"
        }
      ],
      "gt_caption_vi": "Sơ đồ tuần hoàn mô tả quỹ đạo chuyển động của Mặt Trăng quanh Trái Đất và 8 pha hình dạng nhìn thấy được chiếu sáng bởi ánh sáng Mặt Trời: Khởi đầu từ vị trí 1 là Không Trăng (trăng non), tiến dần qua Trăng khuyết đầu tháng, Bán nguyệt (vị trí 3), đạt đỉnh điểm ở vị trí 5 là Trăng tròn (ngày rằm), sau đó khuyết dần qua Bán nguyệt cuối tháng (vị trí 7) rồi quay trở lại Không Trăng, hoàn thành một chu kì tuần trăng kéo dài khoảng một tháng.",
      "gt_caption_en": "The orbital cycle diagram illustrates the Moon revolving around Earth and the 8 visible lunar phases illuminated by sunlight: Beginning at position 1 as New Moon, it waxes through Crescent and First Quarter (position 3) to reach peak illumination at position 5 as Full Moon, before waning through Third Quarter (position 7) back to New Moon, completing an approximately one-month lunar cycle.",
      "generated_caption_vi": "Sơ đồ biểu diễn chu trình sinh học khép kín và tiến trình phát triển của các hình dạng nhìn thấy của mặt trăng trong tuần trăng. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: Mặt Trăng, Trái Đất, ánh sáng mặt trời, quỹ đạo, Không Trăng, Trăng khuyết, bán nguyệt cùng các cấu trúc liên quan (Trăng tròn). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: Không Trăng chuyển tiếp quỹ đạo Trăng khuyết đầu tháng; Trăng khuyết đầu tháng chuyển tiếp quỹ đạo Bán nguyệt; Bán nguyệt đạt đỉnh sáng Trăng tròn; Trăng tròn khuyết dần kết thúc chu kì Không Trăng.",
      "generated_caption_en": "The diagram illustrates the various shapes of the Moon throughout a lunar month, showing how the Moon's appearance changes due to its position relative to the Sun and Earth as it orbits. Starting with the new moon, where the illuminated side faces away from Earth, the cycle progresses through the waxing crescent, first quarter (half moon), full moon, and back to the waning crescent until reaching another new moon.",
      "metrics_vi": {
        "bleu_1": 0.452991452991453,
        "bleu_4": 0.02631578947368421,
        "rouge_l": 0.2910798122065728,
        "entity_recall": 1.0,
        "dir_accuracy": 0.5
      },
      "metrics_en": {
        "cider": 28.22,
        "bertscore_f1": 88.07
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "Không Trăng",
            "title": "<b>Không Trăng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "Trăng khuyết đầu tháng",
            "title": "<b>Trăng khuyết đầu tháng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "Bán nguyệt",
            "title": "<b>Bán nguyệt</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "Trăng tròn",
            "title": "<b>Trăng tròn</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "Mặt Trăng",
            "title": "<b>Mặt Trăng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "Trái Đất",
            "title": "<b>Trái Đất</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "ánh sáng mặt trời",
            "title": "<b>ánh sáng mặt trời</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "quỹ đạo",
            "title": "<b>quỹ đạo</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "Trăng khuyết",
            "title": "<b>Trăng khuyết</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "chuyển tiếp quỹ đạo",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "chuyển tiếp quỹ đạo",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "đạt đỉnh sáng",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N1",
            "label": "khuyết dần kết thúc chu kì",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"742pt\" height=\"339pt\"\r\n viewBox=\"0.00 0.00 742.00 339.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 335)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M81.66,-36C81.66,-36 23.25,-36 23.25,-36 17.25,-36 11.25,-30 11.25,-24 11.25,-24 11.25,-12 11.25,-12 11.25,-6 17.25,0 23.25,0 23.25,0 81.66,0 81.66,0 87.66,0 93.66,-6 93.66,-12 93.66,-12 93.66,-24 93.66,-24 93.66,-30 87.66,-36 81.66,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"52.46\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Không Trăng</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M343.82,-69C343.82,-69 234.41,-69 234.41,-69 228.41,-69 222.41,-63 222.41,-57 222.41,-57 222.41,-45 222.41,-45 222.41,-39 228.41,-33 234.41,-33 234.41,-33 343.82,-33 343.82,-33 349.82,-33 355.82,-39 355.82,-45 355.82,-45 355.82,-57 355.82,-57 355.82,-63 349.82,-69 343.82,-69\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"289.12\" y=\"-47.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Trăng khuyết đầu tháng</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M94.06,-23.71C126.52,-28.28 172.94,-34.8 212.23,-40.33\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"211.83,-42.92 219.62,-41.37 212.56,-37.72 211.83,-42.92\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"163.66\" y=\"-41.61\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">chuyển tiếp quỹ đạo</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M562.48,-69C562.48,-69 511.57,-69 511.57,-69 505.57,-69 499.57,-63 499.57,-57 499.57,-57 499.57,-45 499.57,-45 499.57,-39 505.57,-33 511.57,-33 511.57,-33 562.48,-33 562.48,-33 568.48,-33 574.48,-39 574.48,-45 574.48,-45 574.48,-57 574.48,-57 574.48,-63 568.48,-69 562.48,-69\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"537.03\" y=\"-47.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Bán nguyệt</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M356.01,-51C398.02,-51 451.44,-51 489.14,-51\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"489.11,-53.63 496.61,-51 489.11,-48.38 489.11,-53.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"427.7\" y=\"-53.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">chuyển tiếp quỹ đạo</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M721.89,-36C721.89,-36 676.23,-36 676.23,-36 670.23,-36 664.23,-30 664.23,-24 664.23,-24 664.23,-12 664.23,-12 664.23,-6 670.23,0 676.23,0 676.23,0 721.89,0 721.89,0 727.89,0 733.89,-6 733.89,-12 733.89,-12 733.89,-24 733.89,-24 733.89,-30 727.89,-36 721.89,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"699.06\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Trăng tròn</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M574.74,-43.43C598.34,-38.56 629.14,-32.21 654.05,-27.08\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"654.49,-29.66 661.31,-25.58 653.43,-24.52 654.49,-29.66\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"619.36\" y=\"-41.61\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">đạt đỉnh sáng</text>\r\n</g>\r\n<!-- N4&#45;&gt;N1 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N4&#45;&gt;N1</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M663.74,-18C556.95,-18 230.16,-18 103.94,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"104,-15.38 96.5,-18 104,-20.63 104,-15.38\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"427.7\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">khuyết dần kết thúc chu kì</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M74.91,-95C74.91,-95 30,-95 30,-95 24,-95 18,-89 18,-83 18,-83 18,-71 18,-71 18,-65 24,-59 30,-59 30,-59 74.91,-59 74.91,-59 80.91,-59 86.91,-65 86.91,-71 86.91,-71 86.91,-83 86.91,-83 86.91,-89 80.91,-95 74.91,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"52.46\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Mặt Trăng</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M69.66,-154C69.66,-154 35.25,-154 35.25,-154 29.25,-154 23.25,-148 23.25,-142 23.25,-142 23.25,-130 23.25,-130 23.25,-124 29.25,-118 35.25,-118 35.25,-118 69.66,-118 69.66,-118 75.66,-118 81.66,-124 81.66,-130 81.66,-130 81.66,-142 81.66,-142 81.66,-148 75.66,-154 69.66,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"52.46\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Trái Đất</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M92.91,-213C92.91,-213 12,-213 12,-213 6,-213 0,-207 0,-201 0,-201 0,-189 0,-189 0,-183 6,-177 12,-177 12,-177 92.91,-177 92.91,-177 98.91,-177 104.91,-183 104.91,-189 104.91,-189 104.91,-201 104.91,-201 104.91,-207 98.91,-213 92.91,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"52.46\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ánh sáng mặt trời</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M69.66,-272C69.66,-272 35.25,-272 35.25,-272 29.25,-272 23.25,-266 23.25,-260 23.25,-260 23.25,-248 23.25,-248 23.25,-242 29.25,-236 35.25,-236 35.25,-236 69.66,-236 69.66,-236 75.66,-236 81.66,-242 81.66,-248 81.66,-248 81.66,-260 81.66,-260 81.66,-266 75.66,-272 69.66,-272\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"52.46\" y=\"-250.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">quỹ đạo</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M81.66,-331C81.66,-331 23.25,-331 23.25,-331 17.25,-331 11.25,-325 11.25,-319 11.25,-319 11.25,-307 11.25,-307 11.25,-301 17.25,-295 23.25,-295 23.25,-295 81.66,-295 81.66,-295 87.66,-295 93.66,-301 93.66,-307 93.66,-307 93.66,-319 93.66,-319 93.66,-325 87.66,-331 81.66,-331\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"52.46\" y=\"-309.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Trăng khuyết</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_07",
      "filename": "vn_diag_07_he_mat_troi_hanh_tinh.png",
      "image_url": "vn_images/vn_diag_07_he_mat_troi_hanh_tinh.png",
      "width": 1251,
      "height": 684,
      "title": "Các hành tinh của Hệ Mặt Trời từ trong ra ngoài",
      "subject": "Khoa học tự nhiên 6",
      "subject_key": "khtn6",
      "subject_vi": "KHTN 6 (THCS)",
      "grade": "Khối 6",
      "subject_color": "emerald",
      "subject_icon": "fa-seedling",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương X: Trái Đất và bầu trời",
      "lesson": "Bài 54: Hệ Mặt Trời (Hình 54.1)",
      "diagram_type": "spatial_order",
      "taxonomy_key": "astronomy_physics",
      "taxonomy_vi": "Thiên văn & Vật lý - Hóa học",
      "taxonomy_en": "Astronomy & Physical Science",
      "taxonomy_color": "purple",
      "taxonomy_icon": "fa-moon",
      "key_entities": [
        "Mặt Trời",
        "Thuỷ tinh",
        "Kim tinh",
        "Trái Đất",
        "Hoả tinh",
        "vành đai tiểu hành tinh",
        "Mộc tinh",
        "Thổ tinh",
        "Thiên Vương tinh",
        "Hải Vương tinh"
      ],
      "directional_relations": [],
      "gt_caption_vi": "Sơ đồ thiên văn thể hiện cấu trúc Hệ Mặt Trời với Mặt Trời ở vị trí trung tâm và 8 hành tinh cùng quay trên các quỹ đạo elip theo thứ tự khoảng cách từ trong ra ngoài: Thuỷ tinh, Kim tinh, Trái Đất, Hoả tinh, ngăn cách bởi vành đai tiểu hành tinh, tiếp đến là 4 hành tinh khí khổng lồ ngoài cùng gồm Mộc tinh, Thổ tinh, Thiên Vương tinh và Hải Vương tinh.",
      "gt_caption_en": "The astronomical diagram displays the structure of the Solar System with the central Sun and 8 planets revolving along elliptical orbits ordered outward by distance: Mercury, Venus, Earth, and Mars, separated by an asteroid belt, followed by the four outer gas giant planets: Jupiter, Saturn, Uranus, and Neptune.",
      "generated_caption_vi": "Sơ đồ khoa học minh họa trực quan nội dung 'Các hành tinh của Hệ Mặt Trời từ trong ra ngoài'. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: Mặt Trời, Thuỷ tinh, Kim tinh, Trái Đất, Hoả tinh, vành đai tiểu hành tinh, Mộc tinh cùng các cấu trúc liên quan (Thổ tinh, Thiên Vương tinh, Hải Vương tinh). Các chi tiết cấu tạo được liên kết chặt chẽ theo trật tự không gian và phân cấp chức năng sinh học.",
      "generated_caption_en": "The diagram illustrates the order of planets in our solar system from the innermost to the outermost regions, starting with the Sun at the center. Listed sequentially are Mercury, Venus, Earth, Mars, followed by the asteroid belt, then Jupiter, Saturn, Uranus, and Neptune.",
      "metrics_vi": {
        "bleu_1": 0.5333333333333333,
        "bleu_4": 0.11494252873563218,
        "rouge_l": 0.38095238095238093,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 157.32,
        "bertscore_f1": 90.93
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "Các hành tinh của Hệ Mặt Trời từ trong ra ngoài",
            "title": "<b>Các hành tinh của Hệ Mặt Trời từ trong ra ngoài</b><br>Vai trò: Chủ đề trung tâm",
            "kind": "hub",
            "color": {
              "background": "#fef3c7",
              "border": "#d97706",
              "highlight": "#fde68a"
            },
            "shape": "ellipse"
          },
          {
            "id": "N2",
            "label": "Mặt Trời",
            "title": "<b>Mặt Trời</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "Thuỷ tinh",
            "title": "<b>Thuỷ tinh</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "Kim tinh",
            "title": "<b>Kim tinh</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "Trái Đất",
            "title": "<b>Trái Đất</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "Hoả tinh",
            "title": "<b>Hoả tinh</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "vành đai tiểu hành tinh",
            "title": "<b>vành đai tiểu hành tinh</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "Mộc tinh",
            "title": "<b>Mộc tinh</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "Thổ tinh",
            "title": "<b>Thổ tinh</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "Thiên Vương tinh",
            "title": "<b>Thiên Vương tinh</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N11",
            "label": "Hải Vương tinh",
            "title": "<b>Hải Vương tinh</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N3",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N4",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N5",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N6",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N7",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N8",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N9",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N10",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N11",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          }
        ]
      },
      "graphviz_svg": "<svg width=\"967pt\" height=\"123pt\"\r\n viewBox=\"0.00 0.00 967.00 123.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 119.25)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<ellipse fill=\"#fef3c7\" stroke=\"#d97706\" cx=\"424.33\" cy=\"-97.25\" rx=\"174.66\" ry=\"18\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"424.33\" y=\"-93.55\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#78350f\">Các hành tinh của Hệ Mặt Trời từ trong ra ngoài</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M48.66,-36C48.66,-36 12,-36 12,-36 6,-36 0,-30 0,-24 0,-24 0,-12 0,-12 0,-6 6,0 12,0 12,0 48.66,0 48.66,0 54.66,0 60.66,-6 60.66,-12 60.66,-12 60.66,-24 60.66,-24 60.66,-30 54.66,-36 48.66,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"30.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Mặt Trời</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M276.51,-87.35C208.15,-81.96 135.1,-74.02 103.08,-63.25 88.25,-58.26 73.25,-49.84 60.76,-41.67\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"62.25,-39.51 54.56,-37.48 59.3,-43.86 62.25,-39.51\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"129.71\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M136.54,-36C136.54,-36 96.13,-36 96.13,-36 90.13,-36 84.13,-30 84.13,-24 84.13,-24 84.13,-12 84.13,-12 84.13,-6 90.13,0 96.13,0 96.13,0 136.54,0 136.54,0 142.54,0 148.54,-6 148.54,-12 148.54,-12 148.54,-24 148.54,-24 148.54,-30 142.54,-36 136.54,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"116.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Thuỷ tinh</text>\r\n</g>\r\n<!-- N1&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N1&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M278.51,-87.02C246.4,-82.05 213.04,-74.55 183.08,-63.25 169.55,-58.15 156,-49.89 144.67,-41.88\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"146.4,-39.89 138.8,-37.58 143.3,-44.13 146.4,-39.89\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"209.71\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M218.91,-36C218.91,-36 183.75,-36 183.75,-36 177.75,-36 171.75,-30 171.75,-24 171.75,-24 171.75,-12 171.75,-12 171.75,-6 177.75,0 183.75,0 183.75,0 218.91,0 218.91,0 224.91,0 230.91,-6 230.91,-12 230.91,-12 230.91,-24 230.91,-24 230.91,-30 224.91,-36 218.91,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"201.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Kim tinh</text>\r\n</g>\r\n<!-- N1&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N1&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M320.74,-82.43C300.45,-77.76 279.71,-71.53 261.08,-63.25 249.14,-57.94 237.31,-49.91 227.36,-42.15\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"229.15,-40.23 221.67,-37.55 225.85,-44.31 229.15,-40.23\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"287.71\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M300.54,-36C300.54,-36 266.13,-36 266.13,-36 260.13,-36 254.13,-30 254.13,-24 254.13,-24 254.13,-12 254.13,-12 254.13,-6 260.13,0 266.13,0 266.13,0 300.54,0 300.54,0 306.54,0 312.54,-6 312.54,-12 312.54,-12 312.54,-24 312.54,-24 312.54,-30 306.54,-36 300.54,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"283.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Trái Đất</text>\r\n</g>\r\n<!-- N1&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N1&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M369.41,-79.82C357.38,-75.23 345,-69.7 334.08,-63.25 324.33,-57.49 314.69,-49.75 306.48,-42.36\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"308.66,-40.8 301.38,-37.62 305.09,-44.65 308.66,-40.8\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"360.71\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M384.66,-36C384.66,-36 348,-36 348,-36 342,-36 336,-30 336,-24 336,-24 336,-12 336,-12 336,-6 342,0 348,0 348,0 384.66,0 384.66,0 390.66,0 396.66,-6 396.66,-12 396.66,-12 396.66,-24 396.66,-24 396.66,-30 390.66,-36 384.66,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"366.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Hoả tinh</text>\r\n</g>\r\n<!-- N1&#45;&gt;N6 -->\r\n<g id=\"edge5\" class=\"edge\">\r\n<title>N1&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M411.46,-79.11C403.63,-68.68 393.5,-55.19 384.82,-43.63\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"387.15,-42.36 380.55,-37.94 382.95,-45.51 387.15,-42.36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"425.43\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M535.41,-36C535.41,-36 431.25,-36 431.25,-36 425.25,-36 419.25,-30 419.25,-24 419.25,-24 419.25,-12 419.25,-12 419.25,-6 425.25,0 431.25,0 431.25,0 535.41,0 535.41,0 541.41,0 547.41,-6 547.41,-12 547.41,-12 547.41,-24 547.41,-24 547.41,-30 541.41,-36 535.41,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"483.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">vành đai tiểu hành tinh</text>\r\n</g>\r\n<!-- N1&#45;&gt;N7 -->\r\n<g id=\"edge6\" class=\"edge\">\r\n<title>N1&#45;&gt;N7</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M442.36,-79.1C447.14,-74.18 452.13,-68.68 456.33,-63.25 460.9,-57.35 465.35,-50.62 469.27,-44.23\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"471.34,-45.87 472.91,-38.08 466.83,-43.19 471.34,-45.87\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"490.39\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M618.66,-36C618.66,-36 582,-36 582,-36 576,-36 570,-30 570,-24 570,-24 570,-12 570,-12 570,-6 576,0 582,0 582,0 618.66,0 618.66,0 624.66,0 630.66,-6 630.66,-12 630.66,-12 630.66,-24 630.66,-24 630.66,-30 624.66,-36 618.66,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"600.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Mộc tinh</text>\r\n</g>\r\n<!-- N1&#45;&gt;N8 -->\r\n<g id=\"edge7\" class=\"edge\">\r\n<title>N1&#45;&gt;N8</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M479.47,-79.74C493.64,-74.94 508.73,-69.33 522.33,-63.25 536.69,-56.83 551.86,-48.59 564.97,-40.96\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"566.03,-43.38 571.15,-37.31 563.36,-38.86 566.03,-43.38\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"571.04\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M700.91,-36C700.91,-36 665.75,-36 665.75,-36 659.75,-36 653.75,-30 653.75,-24 653.75,-24 653.75,-12 653.75,-12 653.75,-6 659.75,0 665.75,0 665.75,0 700.91,0 700.91,0 706.91,0 712.91,-6 712.91,-12 712.91,-12 712.91,-24 712.91,-24 712.91,-30 706.91,-36 700.91,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"683.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Thổ tinh</text>\r\n</g>\r\n<!-- N1&#45;&gt;N9 -->\r\n<g id=\"edge8\" class=\"edge\">\r\n<title>N1&#45;&gt;N9</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M529.33,-82.49C553.68,-77.74 579.23,-71.46 602.33,-63.25 618.23,-57.6 634.76,-49.1 648.71,-41.07\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"649.78,-43.48 654.9,-37.41 647.11,-38.96 649.78,-43.48\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"654.51\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M828.79,-36C828.79,-36 747.88,-36 747.88,-36 741.88,-36 735.88,-30 735.88,-24 735.88,-24 735.88,-12 735.88,-12 735.88,-6 741.88,0 747.88,0 747.88,0 828.79,0 828.79,0 834.79,0 840.79,-6 840.79,-12 840.79,-12 840.79,-24 840.79,-24 840.79,-30 834.79,-36 828.79,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"788.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Thiên Vương tinh</text>\r\n</g>\r\n<!-- N1&#45;&gt;N10 -->\r\n<g id=\"edge9\" class=\"edge\">\r\n<title>N1&#45;&gt;N10</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M563.79,-86.12C603.81,-81.22 647.2,-73.97 686.33,-63.25 706.65,-57.69 728.18,-48.82 746.2,-40.49\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"747.3,-42.87 752.96,-37.29 745.06,-38.12 747.3,-42.87\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"744.73\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N11 -->\r\n<g id=\"node11\" class=\"node\">\r\n<title>N11</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M946.54,-36C946.54,-36 876.12,-36 876.12,-36 870.12,-36 864.12,-30 864.12,-24 864.12,-24 864.12,-12 864.12,-12 864.12,-6 870.12,0 876.12,0 876.12,0 946.54,0 946.54,0 952.54,0 958.54,-6 958.54,-12 958.54,-12 958.54,-24 958.54,-24 958.54,-30 952.54,-36 946.54,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"911.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Hải Vương tinh</text>\r\n</g>\r\n<!-- N1&#45;&gt;N11 -->\r\n<g id=\"edge10\" class=\"edge\">\r\n<title>N1&#45;&gt;N11</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M580.96,-89.09C642.34,-84.32 713.08,-76.41 776.33,-63.25 803.75,-57.55 833.41,-48.2 857.92,-39.56\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"858.68,-42.07 864.85,-37.08 856.91,-37.13 858.68,-42.07\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"844.5\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_08",
      "filename": "vn_diag_08_ngan_ha_he_mat_troi.png",
      "image_url": "vn_images/vn_diag_08_ngan_ha_he_mat_troi.png",
      "width": 1265,
      "height": 529,
      "title": "Cấu trúc dải Ngân Hà và vị trí Hệ Mặt Trời",
      "subject": "Khoa học tự nhiên 6",
      "subject_key": "khtn6",
      "subject_vi": "KHTN 6 (THCS)",
      "grade": "Khối 6",
      "subject_color": "emerald",
      "subject_icon": "fa-seedling",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương X: Trái Đất và bầu trời",
      "lesson": "Bài 55: Ngân Hà (Hình 55.3)",
      "diagram_type": "spatial_scale",
      "taxonomy_key": "astronomy_physics",
      "taxonomy_vi": "Thiên văn & Vật lý - Hóa học",
      "taxonomy_en": "Astronomy & Physical Science",
      "taxonomy_color": "purple",
      "taxonomy_icon": "fa-moon",
      "key_entities": [
        "Ngân Hà",
        "vòng xoắn",
        "tâm Ngân Hà",
        "Hệ Mặt Trời",
        "26 000 năm ánh sáng",
        "Mặt Trời",
        "các hành tinh"
      ],
      "directional_relations": [],
      "gt_caption_vi": "Hình ảnh thiên văn minh họa hình dạng xoắn ốc khổng lồ của dải Ngân Hà (Milky Way) và chỉ rõ vị trí của Hệ Mặt Trời: Hệ Mặt Trời của chúng ta nằm ở rìa ngoài của một nhánh xoắn ốc, cách tâm Ngân Hà khoảng 26 000 năm ánh sáng và đang quay quanh tâm Ngân Hà với tốc độ khoảng 220 000 m/s.",
      "gt_caption_en": "The astronomical illustration depicts the massive spiral structure of the Milky Way galaxy and pinpoints the location of our Solar System: Our Solar System resides on the edge of an outer spiral arm, approximately 26,000 light-years away from the galactic center, orbiting the galactic core at roughly 220,000 m/s.",
      "generated_caption_vi": "Sơ đồ khoa học minh họa trực quan nội dung 'Cấu trúc dải Ngân Hà và vị trí Hệ Mặt Trời'. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: Ngân Hà, vòng xoắn, tâm Ngân Hà, Hệ Mặt Trời, 26 000 năm ánh sáng, Mặt Trời, các hành tinh cùng các cấu trúc liên quan (). Các chi tiết cấu tạo được liên kết chặt chẽ theo trật tự không gian và phân cấp chức năng sinh học.",
      "generated_caption_en": "The diagram illustrates the structure of the Milky Way galaxy, showing its spiral arms and central bulge. It also indicates the position of our solar system, located approximately 26,000 light-years from the galactic center, along with the Sun and the planets orbiting it.",
      "metrics_vi": {
        "bleu_1": 0.3058823529411765,
        "bleu_4": 0.024390243902439025,
        "rouge_l": 0.27631578947368424,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 128.12,
        "bertscore_f1": 92.24
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "Cấu trúc dải Ngân Hà và vị trí Hệ Mặt Trời",
            "title": "<b>Cấu trúc dải Ngân Hà và vị trí Hệ Mặt Trời</b><br>Vai trò: Chủ đề trung tâm",
            "kind": "hub",
            "color": {
              "background": "#fef3c7",
              "border": "#d97706",
              "highlight": "#fde68a"
            },
            "shape": "ellipse"
          },
          {
            "id": "N2",
            "label": "Ngân Hà",
            "title": "<b>Ngân Hà</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "vòng xoắn",
            "title": "<b>vòng xoắn</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "tâm Ngân Hà",
            "title": "<b>tâm Ngân Hà</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "Hệ Mặt Trời",
            "title": "<b>Hệ Mặt Trời</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "26 000 năm ánh sáng",
            "title": "<b>26 000 năm ánh sáng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "Mặt Trời",
            "title": "<b>Mặt Trời</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "các hành tinh",
            "title": "<b>các hành tinh</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N3",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N4",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N5",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N6",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N7",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N8",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          }
        ]
      },
      "graphviz_svg": "<svg width=\"711pt\" height=\"123pt\"\r\n viewBox=\"0.00 0.00 711.00 123.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 119.25)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<ellipse fill=\"#fef3c7\" stroke=\"#d97706\" cx=\"325.83\" cy=\"-97.25\" rx=\"155.36\" ry=\"18\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"325.83\" y=\"-93.55\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#78350f\">Cấu trúc dải Ngân Hà và vị trí Hệ Mặt Trời</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M51.66,-36C51.66,-36 12,-36 12,-36 6,-36 0,-30 0,-24 0,-24 0,-12 0,-12 0,-6 6,0 12,0 12,0 51.66,0 51.66,0 57.66,0 63.66,-6 63.66,-12 63.66,-12 63.66,-24 63.66,-24 63.66,-30 57.66,-36 51.66,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"31.83\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Ngân Hà</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M210.2,-84.86C179.31,-79.98 146.27,-73.05 116.58,-63.25 99.69,-57.68 82.09,-49.01 67.34,-40.83\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"68.98,-38.74 61.16,-37.32 66.39,-43.31 68.98,-38.74\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"143.21\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M144.66,-36C144.66,-36 99,-36 99,-36 93,-36 87,-30 87,-24 87,-24 87,-12 87,-12 87,-6 93,0 99,0 99,0 144.66,0 144.66,0 150.66,0 156.66,-6 156.66,-12 156.66,-12 156.66,-24 156.66,-24 156.66,-30 150.66,-36 144.66,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"121.83\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">vòng xoắn</text>\r\n</g>\r\n<!-- N1&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N1&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M250.56,-81.16C232.23,-76.4 212.92,-70.46 195.58,-63.25 181.56,-57.42 167.03,-49.23 154.62,-41.49\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"156.19,-39.37 148.46,-37.55 153.36,-43.8 156.19,-39.37\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"222.21\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M252.16,-36C252.16,-36 191.5,-36 191.5,-36 185.5,-36 179.5,-30 179.5,-24 179.5,-24 179.5,-12 179.5,-12 179.5,-6 185.5,0 191.5,0 191.5,0 252.16,0 252.16,0 258.16,0 264.16,-6 264.16,-12 264.16,-12 264.16,-24 264.16,-24 264.16,-30 258.16,-36 252.16,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"221.83\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tâm Ngân Hà</text>\r\n</g>\r\n<!-- N1&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N1&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M292.56,-79.32C284.15,-74.53 275.31,-69.03 267.58,-63.25 259.45,-57.17 251.26,-49.75 244.11,-42.75\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"246.4,-41.33 239.24,-37.87 242.68,-45.03 246.4,-41.33\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"294.21\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M352.79,-36C352.79,-36 298.88,-36 298.88,-36 292.88,-36 286.88,-30 286.88,-24 286.88,-24 286.88,-12 286.88,-12 286.88,-6 292.88,0 298.88,0 298.88,0 352.79,0 352.79,0 358.79,0 364.79,-6 364.79,-12 364.79,-12 364.79,-24 364.79,-24 364.79,-30 358.79,-36 352.79,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"325.83\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Hệ Mặt Trời</text>\r\n</g>\r\n<!-- N1&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N1&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M325.83,-79.11C325.83,-69.27 325.83,-56.72 325.83,-45.63\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"328.46,-45.83 325.83,-38.33 323.21,-45.83 328.46,-45.83\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"352.46\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M500.04,-36C500.04,-36 399.63,-36 399.63,-36 393.63,-36 387.63,-30 387.63,-24 387.63,-24 387.63,-12 387.63,-12 387.63,-6 393.63,0 399.63,0 399.63,0 500.04,0 500.04,0 506.04,0 512.04,-6 512.04,-12 512.04,-12 512.04,-24 512.04,-24 512.04,-30 506.04,-36 500.04,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"449.83\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">26 000 năm ánh sáng</text>\r\n</g>\r\n<!-- N1&#45;&gt;N6 -->\r\n<g id=\"edge5\" class=\"edge\">\r\n<title>N1&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M356.78,-79.2C365.6,-74.19 375.16,-68.61 383.83,-63.25 394.77,-56.48 406.49,-48.78 416.98,-41.71\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"418.36,-43.95 423.1,-37.56 415.42,-39.6 418.36,-43.95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"427.01\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M584.16,-36C584.16,-36 547.5,-36 547.5,-36 541.5,-36 535.5,-30 535.5,-24 535.5,-24 535.5,-12 535.5,-12 535.5,-6 541.5,0 547.5,0 547.5,0 584.16,0 584.16,0 590.16,0 596.16,-6 596.16,-12 596.16,-12 596.16,-24 596.16,-24 596.16,-30 590.16,-36 584.16,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"565.83\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Mặt Trời</text>\r\n</g>\r\n<!-- N1&#45;&gt;N7 -->\r\n<g id=\"edge6\" class=\"edge\">\r\n<title>N1&#45;&gt;N7</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M396.45,-80.8C416.76,-75.8 438.83,-69.83 458.83,-63.25 481.79,-55.7 506.78,-45.49 526.83,-36.77\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"527.77,-39.22 533.58,-33.81 525.66,-34.42 527.77,-39.22\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"515.36\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M690.79,-36C690.79,-36 630.88,-36 630.88,-36 624.88,-36 618.88,-30 618.88,-24 618.88,-24 618.88,-12 618.88,-12 618.88,-6 624.88,0 630.88,0 630.88,0 690.79,0 690.79,0 696.79,0 702.79,-6 702.79,-12 702.79,-12 702.79,-24 702.79,-24 702.79,-30 696.79,-36 690.79,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"660.83\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">các hành tinh</text>\r\n</g>\r\n<!-- N1&#45;&gt;N8 -->\r\n<g id=\"edge7\" class=\"edge\">\r\n<title>N1&#45;&gt;N8</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M437.83,-84.44C473.05,-79.42 511.86,-72.52 546.83,-63.25 569.26,-57.3 593.33,-48.36 613.54,-40.07\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"614.51,-42.51 620.42,-37.21 612.49,-37.67 614.51,-42.51\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"608.67\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_09",
      "filename": "vn_diag_09_vi_khuan_nhan_so.png",
      "image_url": "vn_images/vn_diag_09_vi_khuan_nhan_so.png",
      "width": 823,
      "height": 757,
      "title": "Cấu tạo tế bào nhân sơ điển hình (Vi khuẩn)",
      "subject": "Sinh học 10",
      "subject_key": "sinh10",
      "subject_vi": "Sinh học 10 (THPT)",
      "grade": "Khối 10",
      "subject_color": "indigo",
      "subject_icon": "fa-microscope",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương 2: Cấu trúc tế bào",
      "lesson": "Bài 7: Tế bào nhân sơ (Hình 7.2)",
      "diagram_type": "anatomy_structure",
      "taxonomy_key": "anatomy",
      "taxonomy_vi": "Giải phẫu & Cấu trúc Sinh học",
      "taxonomy_en": "Anatomy & Biological Structure",
      "taxonomy_color": "sky",
      "taxonomy_icon": "fa-puzzle-piece",
      "key_entities": [
        "lông",
        "màng ngoài",
        "thành tế bào",
        "màng tế bào",
        "tế bào chất",
        "vùng nhân",
        "DNA",
        "ribosome",
        "plasmid",
        "roi"
      ],
      "directional_relations": [],
      "gt_caption_vi": "Sơ đồ giải phẫu chi tiết cấu tạo tế bào vi khuẩn (sinh vật nhân sơ): Bên ngoài tế bào gồm có lông bám, màng ngoài, thành tế bào peptidoglycan, màng tế bào và roi dài dùng để di chuyển; bên trong tế bào chất chứa vùng nhân mang phân tử DNA mạch vòng chưa có màng bọc, các bào quan hạt ribosome tổng hợp protein và các vòng DNA nhỏ plasmid.",
      "gt_caption_en": "The detailed anatomical diagram of a typical prokaryotic bacterium illustrates its structural components: The external layers include pilus/fimbriae, outer membrane, peptidoglycan cell wall, plasma membrane, and a locomotion flagellum; the internal cytoplasm accommodates the nucleoid containing circular chromosomal DNA without a nuclear membrane, ribosomes for protein synthesis, and circular plasmids.",
      "generated_caption_vi": "Sơ đồ mô tả chi tiết đặc điểm cấu tạo của cấu tạo tế bào nhân sơ điển hình (vi khuẩn) trong chương trình Sinh học 10. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: lông, màng ngoài, thành tế bào, màng tế bào, tế bào chất, vùng nhân, ribosome cùng các cấu trúc liên quan (plasmid, roi). Các chi tiết cấu tạo được liên kết chặt chẽ theo trật tự không gian và phân cấp chức năng sinh học.",
      "generated_caption_en": "This diagram illustrates the structure of a typical prokaryotic cell, specifically a bacterium, showing key components such as flagella, outer membrane, cell wall, plasma membrane, cytoplasm, nucleoid region containing DNA, ribosomes, and plasmids. The various parts are arranged within the schematic to depict their relative positions and functions within the cell.",
      "metrics_vi": {
        "bleu_1": 0.4318181818181818,
        "bleu_4": 0.047058823529411764,
        "rouge_l": 0.37499999999999994,
        "entity_recall": 0.9,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 142.14,
        "bertscore_f1": 90.19
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "Cấu tạo tế bào nhân sơ điển hình (Vi khuẩn)",
            "title": "<b>Cấu tạo tế bào nhân sơ điển hình (Vi khuẩn)</b><br>Vai trò: Chủ đề trung tâm",
            "kind": "hub",
            "color": {
              "background": "#fef3c7",
              "border": "#d97706",
              "highlight": "#fde68a"
            },
            "shape": "ellipse"
          },
          {
            "id": "N2",
            "label": "lông",
            "title": "<b>lông</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "màng ngoài",
            "title": "<b>màng ngoài</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "thành tế bào",
            "title": "<b>thành tế bào</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "màng tế bào",
            "title": "<b>màng tế bào</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "tế bào chất",
            "title": "<b>tế bào chất</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "vùng nhân",
            "title": "<b>vùng nhân</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "DNA",
            "title": "<b>DNA</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "ribosome",
            "title": "<b>ribosome</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "plasmid",
            "title": "<b>plasmid</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N11",
            "label": "roi",
            "title": "<b>roi</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N3",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N4",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N5",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N6",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N7",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N8",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N9",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N10",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N11",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          }
        ]
      },
      "graphviz_svg": "<svg width=\"879pt\" height=\"123pt\"\r\n viewBox=\"0.00 0.00 879.00 123.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 119.25)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<ellipse fill=\"#fef3c7\" stroke=\"#d97706\" cx=\"466\" cy=\"-97.25\" rx=\"162.66\" ry=\"18\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"466\" y=\"-93.55\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#78350f\">Cấu tạo tế bào nhân sơ điển hình (Vi khuẩn)</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M42,-36C42,-36 12,-36 12,-36 6,-36 0,-30 0,-24 0,-24 0,-12 0,-12 0,-6 6,0 12,0 12,0 42,0 42,0 48,0 54,-6 54,-12 54,-12 54,-24 54,-24 54,-30 48,-36 42,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"27\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">lông</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M309.43,-92.11C250.45,-87.71 183.27,-79.25 123.75,-63.25 102.75,-57.61 80.6,-47.79 62.8,-38.84\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"64.06,-36.54 56.19,-35.44 61.66,-41.2 64.06,-36.54\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"150.38\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M141.2,-36C141.2,-36 88.8,-36 88.8,-36 82.8,-36 76.8,-30 76.8,-24 76.8,-24 76.8,-12 76.8,-12 76.8,-6 82.8,0 88.8,0 88.8,0 141.2,0 141.2,0 147.2,0 153.2,-6 153.2,-12 153.2,-12 153.2,-24 153.2,-24 153.2,-30 147.2,-36 141.2,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"115\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">màng ngoài</text>\r\n</g>\r\n<!-- N1&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N1&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M333.71,-86.48C294.3,-81.58 251.34,-74.24 212.75,-63.25 193.2,-57.68 172.55,-48.82 155.29,-40.48\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"156.77,-38.28 148.88,-37.32 154.44,-42.99 156.77,-38.28\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"239.38\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M244.08,-36C244.08,-36 187.92,-36 187.92,-36 181.92,-36 175.92,-30 175.92,-24 175.92,-24 175.92,-12 175.92,-12 175.92,-6 181.92,0 187.92,0 187.92,0 244.08,0 244.08,0 250.08,0 256.08,-6 256.08,-12 256.08,-12 256.08,-24 256.08,-24 256.08,-30 250.08,-36 244.08,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"216\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thành tế bào</text>\r\n</g>\r\n<!-- N1&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N1&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M368.39,-82.54C344.56,-77.75 319.41,-71.44 296.75,-63.25 280.92,-57.52 264.44,-49.02 250.53,-40.99\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"252.15,-38.9 244.36,-37.35 249.48,-43.42 252.15,-38.9\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"323.38\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M347.08,-36C347.08,-36 290.92,-36 290.92,-36 284.92,-36 278.92,-30 278.92,-24 278.92,-24 278.92,-12 278.92,-12 278.92,-6 284.92,0 290.92,0 290.92,0 347.08,0 347.08,0 353.08,0 359.08,-6 359.08,-12 359.08,-12 359.08,-24 359.08,-24 359.08,-30 353.08,-36 347.08,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"319\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">màng tế bào</text>\r\n</g>\r\n<!-- N1&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N1&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M406.9,-80.02C394.23,-75.45 381.22,-69.88 369.75,-63.25 359.94,-57.59 350.29,-49.87 342.08,-42.47\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"344.27,-40.92 336.99,-37.72 340.68,-44.76 344.27,-40.92\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"396.38\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M443.7,-36C443.7,-36 394.3,-36 394.3,-36 388.3,-36 382.3,-30 382.3,-24 382.3,-24 382.3,-12 382.3,-12 382.3,-6 388.3,0 394.3,0 394.3,0 443.7,0 443.7,0 449.7,0 455.7,-6 455.7,-12 455.7,-12 455.7,-24 455.7,-24 455.7,-30 449.7,-36 443.7,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"419\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tế bào chất</text>\r\n</g>\r\n<!-- N1&#45;&gt;N6 -->\r\n<g id=\"edge5\" class=\"edge\">\r\n<title>N1&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M445.59,-79.14C440.86,-74.39 436.21,-68.95 432.75,-63.25 429.39,-57.7 426.78,-51.26 424.78,-45.04\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"427.39,-44.6 422.82,-38.1 422.33,-46.03 427.39,-44.6\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"459.38\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M537.21,-36C537.21,-36 490.8,-36 490.8,-36 484.8,-36 478.8,-30 478.8,-24 478.8,-24 478.8,-12 478.8,-12 478.8,-6 484.8,0 490.8,0 490.8,0 537.21,0 537.21,0 543.21,0 549.21,-6 549.21,-12 549.21,-12 549.21,-24 549.21,-24 549.21,-30 543.21,-36 537.21,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"514\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">vùng nhân</text>\r\n</g>\r\n<!-- N1&#45;&gt;N7 -->\r\n<g id=\"edge6\" class=\"edge\">\r\n<title>N1&#45;&gt;N7</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M477.18,-78.82C480.37,-73.81 483.84,-68.32 487,-63.25 490.88,-57.02 495.03,-50.27 498.88,-43.96\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"500.88,-45.73 502.54,-37.96 496.39,-43 500.88,-45.73\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"520.36\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M614,-36C614,-36 584,-36 584,-36 578,-36 572,-30 572,-24 572,-24 572,-12 572,-12 572,-6 578,0 584,0 584,0 614,0 614,0 620,0 626,-6 626,-12 626,-12 626,-24 626,-24 626,-30 620,-36 614,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"599\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">DNA</text>\r\n</g>\r\n<!-- N1&#45;&gt;N8 -->\r\n<g id=\"edge7\" class=\"edge\">\r\n<title>N1&#45;&gt;N8</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M518.5,-79.84C529.95,-75.25 541.71,-69.71 552,-63.25 561.01,-57.59 569.8,-50.04 577.3,-42.79\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"578.97,-44.83 582.4,-37.66 575.25,-41.13 578.97,-44.83\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"592.84\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M701.21,-36C701.21,-36 660.79,-36 660.79,-36 654.79,-36 648.79,-30 648.79,-24 648.79,-24 648.79,-12 648.79,-12 648.79,-6 654.79,0 660.79,0 660.79,0 701.21,0 701.21,0 707.21,0 713.21,-6 713.21,-12 713.21,-12 713.21,-24 713.21,-24 713.21,-30 707.21,-36 701.21,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"681\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ribosome</text>\r\n</g>\r\n<!-- N1&#45;&gt;N9 -->\r\n<g id=\"edge8\" class=\"edge\">\r\n<title>N1&#45;&gt;N9</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M565.57,-82.64C585.46,-77.94 605.81,-71.66 624,-63.25 635.4,-57.98 646.6,-50.06 656.03,-42.36\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"657.65,-44.43 661.67,-37.57 654.25,-40.43 657.65,-44.43\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"669.38\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M781.46,-36C781.46,-36 748.54,-36 748.54,-36 742.54,-36 736.54,-30 736.54,-24 736.54,-24 736.54,-12 736.54,-12 736.54,-6 742.54,0 748.54,0 748.54,0 781.46,0 781.46,0 787.46,0 793.46,-6 793.46,-12 793.46,-12 793.46,-24 793.46,-24 793.46,-30 787.46,-36 781.46,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"765\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">plasmid</text>\r\n</g>\r\n<!-- N1&#45;&gt;N10 -->\r\n<g id=\"edge9\" class=\"edge\">\r\n<title>N1&#45;&gt;N10</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M604.81,-87.62C637.13,-82.66 670.87,-75.01 701,-63.25 713.96,-58.19 726.85,-50.04 737.63,-42.1\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"739.15,-44.24 743.52,-37.6 735.96,-40.07 739.15,-44.24\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"748.49\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N11 -->\r\n<g id=\"node11\" class=\"node\">\r\n<title>N11</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M859,-36C859,-36 829,-36 829,-36 823,-36 817,-30 817,-24 817,-24 817,-12 817,-12 817,-6 823,0 829,0 829,0 859,0 859,0 865,0 871,-6 871,-12 871,-12 871,-24 871,-24 871,-30 865,-36 859,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"844\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">roi</text>\r\n</g>\r\n<!-- N1&#45;&gt;N11 -->\r\n<g id=\"edge10\" class=\"edge\">\r\n<title>N1&#45;&gt;N11</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M607.84,-88.17C675.56,-82.94 748.58,-74.89 780,-63.25 793.15,-58.38 806.16,-50.18 816.98,-42.16\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"818.55,-44.26 822.88,-37.6 815.34,-40.1 818.55,-44.26\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"827.58\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_10",
      "filename": "vn_diag_10_thang_kich_thuoc_te_bao.png",
      "image_url": "vn_images/vn_diag_10_thang_kich_thuoc_te_bao.png",
      "width": 1251,
      "height": 562,
      "title": "Kích thước các cấp độ từ nguyên tử đến tế bào",
      "subject": "Sinh học 10",
      "subject_key": "sinh10",
      "subject_vi": "Sinh học 10 (THPT)",
      "grade": "Khối 10",
      "subject_color": "indigo",
      "subject_icon": "fa-microscope",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương 2: Cấu trúc tế bào",
      "lesson": "Bài 7: Tế bào nhân sơ (Hình 7.1)",
      "diagram_type": "scale_hierarchy",
      "taxonomy_key": "anatomy",
      "taxonomy_vi": "Giải phẫu & Cấu trúc Sinh học",
      "taxonomy_en": "Anatomy & Biological Structure",
      "taxonomy_color": "sky",
      "taxonomy_icon": "fa-puzzle-piece",
      "key_entities": [
        "nguyên tử",
        "amino acid",
        "protein",
        "virus",
        "lục lạp",
        "vi khuẩn",
        "tế bào động vật và thực vật",
        "tế bào trứng",
        "kính hiển vi điện tử",
        "kính hiển vi quang học"
      ],
      "directional_relations": [],
      "gt_caption_vi": "Biểu đồ thước đo thể hiện dải kích thước các đối tượng sinh học tăng dần từ 0.1 nanômét đến 1 milimét: Các phân tử siêu vi mô gồm nguyên tử, amino acid, protein và virus (quan sát được dưới kính hiển vi điện tử); tiếp theo là lục lạp, tế bào vi khuẩn, tế bào động vật và thực vật (nằm trong giới hạn phân giải của kính hiển vi quang học); và lớn nhất là các tế bào trứng có thể đạt tới kích thước 1 milimét.",
      "gt_caption_en": "The dimensional logarithmic scale illustrates biological objects spanning from 0.1 nanometers to 1 millimeter: Submicroscopic structures including atoms, amino acids, proteins, and viruses require an electron microscope; cellular entities such as chloroplasts, bacteria, plant and animal cells can be resolved by optical light microscopes; while the largest human/frog egg cells approach 1 millimeter.",
      "generated_caption_vi": "Sơ đồ khoa học minh họa trực quan nội dung 'Kích thước các cấp độ từ nguyên tử đến tế bào'. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: nguyên tử, amino acid, protein, virus, lục lạp, vi khuẩn, tế bào động vật và thực vật cùng các cấu trúc liên quan (tế bào trứng, kính hiển vi điện tử, kính hiển vi quang học). Các chi tiết cấu tạo được liên kết chặt chẽ theo trật tự không gian và phân cấp chức năng sinh học.",
      "generated_caption_en": "The diagram illustrates the scale hierarchy of various biological structures from atoms to cells, showing the relative sizes of atoms, amino acids, proteins, viruses, chloroplasts, bacteria, animal and plant cells, and egg cells. These components are arranged in order of increasing size, transitioning from microscopic atomic scales observable with electron microscopes to larger cellular structures viewable under optical microscopes.",
      "metrics_vi": {
        "bleu_1": 0.5263157894736842,
        "bleu_4": 0.14130434782608695,
        "rouge_l": 0.33513513513513515,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 67.82,
        "bertscore_f1": 88.63
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "Kích thước các cấp độ từ nguyên tử đến tế bào",
            "title": "<b>Kích thước các cấp độ từ nguyên tử đến tế bào</b><br>Vai trò: Chủ đề trung tâm",
            "kind": "hub",
            "color": {
              "background": "#fef3c7",
              "border": "#d97706",
              "highlight": "#fde68a"
            },
            "shape": "ellipse"
          },
          {
            "id": "N2",
            "label": "nguyên tử",
            "title": "<b>nguyên tử</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "amino acid",
            "title": "<b>amino acid</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "protein",
            "title": "<b>protein</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "virus",
            "title": "<b>virus</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "lục lạp",
            "title": "<b>lục lạp</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "vi khuẩn",
            "title": "<b>vi khuẩn</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "tế bào động vật và thực vật",
            "title": "<b>tế bào động vật và thực vật</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "tế bào trứng",
            "title": "<b>tế bào trứng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "kính hiển vi điện tử",
            "title": "<b>kính hiển vi điện tử</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N11",
            "label": "kính hiển vi quang học",
            "title": "<b>kính hiển vi quang học</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N3",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N4",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N5",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N6",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N7",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N8",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N9",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N10",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N11",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          }
        ]
      },
      "graphviz_svg": "<svg width=\"1049pt\" height=\"123pt\"\r\n viewBox=\"0.00 0.00 1049.00 123.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 119.25)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<ellipse fill=\"#fef3c7\" stroke=\"#d97706\" cx=\"413.45\" cy=\"-97.25\" rx=\"172.57\" ry=\"18\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"413.45\" y=\"-93.55\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#78350f\">Kích thước các cấp độ từ nguyên tử đến tế bào</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M56.91,-36C56.91,-36 12,-36 12,-36 6,-36 0,-30 0,-24 0,-24 0,-12 0,-12 0,-6 6,0 12,0 12,0 56.91,0 56.91,0 62.91,0 68.91,-6 68.91,-12 68.91,-12 68.91,-24 68.91,-24 68.91,-30 62.91,-36 56.91,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"34.45\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">nguyên tử</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M266.61,-87.56C200.62,-82.28 130.78,-74.37 100.2,-63.25 86.65,-58.32 73.17,-50.01 61.98,-41.92\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"63.77,-39.98 56.2,-37.57 60.62,-44.17 63.77,-39.98\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"126.83\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M151.41,-36C151.41,-36 103.5,-36 103.5,-36 97.5,-36 91.5,-30 91.5,-24 91.5,-24 91.5,-12 91.5,-12 91.5,-6 97.5,0 103.5,0 103.5,0 151.41,0 151.41,0 157.41,0 163.41,-6 163.41,-12 163.41,-12 163.41,-24 163.41,-24 163.41,-30 157.41,-36 151.41,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"127.45\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">amino acid</text>\r\n</g>\r\n<!-- N1&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N1&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M282.93,-85.11C238.45,-79.84 194.97,-72.62 175.2,-63.25 164.99,-58.41 155.47,-50.6 147.66,-42.88\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"149.97,-41.5 142.89,-37.9 146.18,-45.13 149.97,-41.5\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"201.83\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M228.45,-36C228.45,-36 198.45,-36 198.45,-36 192.45,-36 186.45,-30 186.45,-24 186.45,-24 186.45,-12 186.45,-12 186.45,-6 192.45,0 198.45,0 198.45,0 228.45,0 228.45,0 234.45,0 240.45,-6 240.45,-12 240.45,-12 240.45,-24 240.45,-24 240.45,-30 234.45,-36 228.45,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"213.45\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">protein</text>\r\n</g>\r\n<!-- N1&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N1&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M292.39,-84.05C275.74,-79.14 259.48,-72.42 245.2,-63.25 237.73,-58.45 231.46,-51.2 226.52,-43.96\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"228.93,-42.86 222.73,-37.89 224.48,-45.64 228.93,-42.86\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"271.83\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M307.45,-36C307.45,-36 277.45,-36 277.45,-36 271.45,-36 265.45,-30 265.45,-24 265.45,-24 265.45,-12 265.45,-12 265.45,-6 271.45,0 277.45,0 277.45,0 307.45,0 307.45,0 313.45,0 319.45,-6 319.45,-12 319.45,-12 319.45,-24 319.45,-24 319.45,-30 313.45,-36 307.45,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"292.45\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">virus</text>\r\n</g>\r\n<!-- N1&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N1&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M338.9,-80.67C328.8,-76.24 319.19,-70.55 311.2,-63.25 305.87,-58.37 302,-51.73 299.22,-45.07\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"301.69,-44.2 296.71,-38.01 296.74,-45.95 301.69,-44.2\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"337.83\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M386.45,-36C386.45,-36 356.45,-36 356.45,-36 350.45,-36 344.45,-30 344.45,-24 344.45,-24 344.45,-12 344.45,-12 344.45,-6 350.45,0 356.45,0 356.45,0 386.45,0 386.45,0 392.45,0 398.45,-6 398.45,-12 398.45,-12 398.45,-24 398.45,-24 398.45,-30 392.45,-36 386.45,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"371.45\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">lục lạp</text>\r\n</g>\r\n<!-- N1&#45;&gt;N6 -->\r\n<g id=\"edge5\" class=\"edge\">\r\n<title>N1&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M385.09,-79.16C379.91,-74.67 375.2,-69.34 372.2,-63.25 369.54,-57.82 368.44,-51.54 368.2,-45.45\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"370.82,-45.72 368.38,-38.16 365.57,-45.59 370.82,-45.72\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"398.83\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M469.41,-36C469.41,-36 433.5,-36 433.5,-36 427.5,-36 421.5,-30 421.5,-24 421.5,-24 421.5,-12 421.5,-12 421.5,-6 427.5,0 433.5,0 433.5,0 469.41,0 469.41,0 475.41,0 481.41,-6 481.41,-12 481.41,-12 481.41,-24 481.41,-24 481.41,-30 475.41,-36 469.41,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"451.45\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">vi khuẩn</text>\r\n</g>\r\n<!-- N1&#45;&gt;N7 -->\r\n<g id=\"edge6\" class=\"edge\">\r\n<title>N1&#45;&gt;N7</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M421.89,-79.11C426.87,-68.98 433.28,-55.95 438.85,-44.62\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"441.09,-46.02 442.05,-38.13 436.38,-43.7 441.09,-46.02\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"461.36\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M642.78,-36C642.78,-36 516.12,-36 516.12,-36 510.12,-36 504.12,-30 504.12,-24 504.12,-24 504.12,-12 504.12,-12 504.12,-6 510.12,0 516.12,0 516.12,0 642.78,0 642.78,0 648.78,0 654.78,-6 654.78,-12 654.78,-12 654.78,-24 654.78,-24 654.78,-30 648.78,-36 642.78,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"579.45\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tế bào động vật và thực vật</text>\r\n</g>\r\n<!-- N1&#45;&gt;N8 -->\r\n<g id=\"edge7\" class=\"edge\">\r\n<title>N1&#45;&gt;N8</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M456.09,-79.44C468.25,-74.43 481.46,-68.8 493.45,-63.25 508.49,-56.3 524.7,-48.13 538.96,-40.72\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"539.93,-43.18 545.36,-37.37 537.5,-38.52 539.93,-43.18\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"541.6\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M745.16,-36C745.16,-36 689.75,-36 689.75,-36 683.75,-36 677.75,-30 677.75,-24 677.75,-24 677.75,-12 677.75,-12 677.75,-6 683.75,0 689.75,0 689.75,0 745.16,0 745.16,0 751.16,0 757.16,-6 757.16,-12 757.16,-12 757.16,-24 757.16,-24 757.16,-30 751.16,-36 745.16,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"717.45\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tế bào trứng</text>\r\n</g>\r\n<!-- N1&#45;&gt;N9 -->\r\n<g id=\"edge8\" class=\"edge\">\r\n<title>N1&#45;&gt;N9</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M494.32,-80.91C519.75,-75.73 547.86,-69.63 573.45,-63.25 615.25,-52.84 625.35,-48.87 666.45,-36 667.12,-35.79 667.8,-35.58 668.47,-35.37\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"669.19,-37.89 675.54,-33.1 667.59,-32.89 669.19,-37.89\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"640.61\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M878.91,-36C878.91,-36 792,-36 792,-36 786,-36 780,-30 780,-24 780,-24 780,-12 780,-12 780,-6 786,0 792,0 792,0 878.91,0 878.91,0 884.91,0 890.91,-6 890.91,-12 890.91,-12 890.91,-24 890.91,-24 890.91,-30 884.91,-36 878.91,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"835.45\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">kính hiển vi điện tử</text>\r\n</g>\r\n<!-- N1&#45;&gt;N10 -->\r\n<g id=\"edge9\" class=\"edge\">\r\n<title>N1&#45;&gt;N10</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M535.56,-84.21C578.99,-79 628.1,-72.05 672.45,-63.25 705.17,-56.76 740.99,-47.3 770.69,-38.79\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"771.34,-41.34 777.82,-36.74 769.88,-36.3 771.34,-41.34\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"744.31\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N11 -->\r\n<g id=\"node11\" class=\"node\">\r\n<title>N11</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1029.16,-36C1029.16,-36 925.75,-36 925.75,-36 919.75,-36 913.75,-30 913.75,-24 913.75,-24 913.75,-12 913.75,-12 913.75,-6 919.75,0 925.75,0 925.75,0 1029.16,0 1029.16,0 1035.16,0 1041.16,-6 1041.16,-12 1041.16,-12 1041.16,-24 1041.16,-24 1041.16,-30 1035.16,-36 1029.16,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"977.45\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">kính hiển vi quang học</text>\r\n</g>\r\n<!-- N1&#45;&gt;N11 -->\r\n<g id=\"edge10\" class=\"edge\">\r\n<title>N1&#45;&gt;N11</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M557.95,-87.09C624.42,-81.84 704.18,-74.11 775.45,-63.25 832.53,-54.56 846.08,-48.44 902.45,-36 903.14,-35.85 903.83,-35.7 904.52,-35.54\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"904.96,-38.13 911.72,-33.94 903.83,-33.01 904.96,-38.13\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"861.62\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_11",
      "filename": "vn_diag_11_khuech_tan_qua_mang.png",
      "image_url": "vn_images/vn_diag_11_khuech_tan_qua_mang.png",
      "width": 814,
      "height": 601,
      "title": "Khuếch tán qua lớp kép phospholipid và protein màng",
      "subject": "Sinh học 10",
      "subject_key": "sinh10",
      "subject_vi": "Sinh học 10 (THPT)",
      "grade": "Khối 10",
      "subject_color": "indigo",
      "subject_icon": "fa-microscope",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương 3: Trao đổi chất qua màng và truyền tin tế bào",
      "lesson": "Bài 10: Trao đổi chất qua màng tế bào (Hình 10.1)",
      "diagram_type": "membrane_transport",
      "taxonomy_key": "system_process",
      "taxonomy_vi": "Cơ chế Sinh lý & Di truyền Phân tử",
      "taxonomy_en": "Physiological & Molecular Processes",
      "taxonomy_color": "rose",
      "taxonomy_icon": "fa-gears",
      "key_entities": [
        "khuếch tán đơn giản",
        "khuếch tán tăng cường",
        "lớp kép phospholipid",
        "protein kênh",
        "protein mang",
        "dịch ngoại bào",
        "tế bào chất",
        "gradient nồng độ"
      ],
      "directional_relations": [
        {
          "source": "dịch ngoại bào",
          "target": "tế bào chất",
          "relation": "khuếch tán xuôi chiều gradient"
        }
      ],
      "gt_caption_vi": "Sơ đồ cơ chế vận chuyển thụ động các chất qua màng sinh chất từ dịch ngoại bào vào tế bào chất theo chiều gradient nồng độ: Hình thức (a) là khuếch tán đơn giản trực tiếp xuyên qua lớp kép phospholipid dành cho các phân tử nhỏ không phân cực; hình thức (b) là khuếch tán tăng cường qua protein kênh; và hình thức (c) là khuếch tán tăng cường qua protein mang biến đổi cấu hình.",
      "gt_caption_en": "The diagram illustrates passive transport mechanisms across the cell plasma membrane from extracellular fluid into cytoplasm following concentration gradients: Mode (a) represents simple diffusion passing directly across the phospholipid bilayer for small nonpolar molecules; mode (b) shows facilitated diffusion through channel proteins; and mode (c) depicts facilitated diffusion mediated by conformational carrier proteins.",
      "generated_caption_vi": "Sơ đồ khoa học minh họa trực quan nội dung 'Khuếch tán qua lớp kép phospholipid và protein màng'. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: khuếch tán đơn giản, khuếch tán tăng cường, lớp kép phospholipid, protein kênh, protein mang, dịch ngoại bào, tế bào chất cùng các cấu trúc liên quan (gradient nồng độ). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: dịch ngoại bào khuếch tán xuôi chiều gradient tế bào chất.",
      "generated_caption_en": "The diagram illustrates simple diffusion and facilitated diffusion through a double-layered phospholipid membrane containing channel and carrier proteins. It shows the movement of substances from the extracellular fluid into the cytoplasm along a concentration gradient.",
      "metrics_vi": {
        "bleu_1": 0.4157303370786517,
        "bleu_4": 0.03488372093023256,
        "rouge_l": 0.2155688622754491,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 2.3,
        "bertscore_f1": 90.22
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "dịch ngoại bào",
            "title": "<b>dịch ngoại bào</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "tế bào chất",
            "title": "<b>tế bào chất</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "khuếch tán đơn giản",
            "title": "<b>khuếch tán đơn giản</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "khuếch tán tăng cường",
            "title": "<b>khuếch tán tăng cường</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "lớp kép phospholipid",
            "title": "<b>lớp kép phospholipid</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "protein kênh",
            "title": "<b>protein kênh</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "protein mang",
            "title": "<b>protein mang</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "gradient nồng độ",
            "title": "<b>gradient nồng độ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "khuếch tán xuôi chiều gradient",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"375pt\" height=\"398pt\"\r\n viewBox=\"0.00 0.00 375.00 398.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 394)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M98.91,-36C98.91,-36 33,-36 33,-36 27,-36 21,-30 21,-24 21,-24 21,-12 21,-12 21,-6 27,0 33,0 33,0 98.91,0 98.91,0 104.91,0 110.91,-6 110.91,-12 110.91,-12 110.91,-24 110.91,-24 110.91,-30 104.91,-36 98.91,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"65.95\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">dịch ngoại bào</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M355.07,-36C355.07,-36 305.66,-36 305.66,-36 299.66,-36 293.66,-30 293.66,-24 293.66,-24 293.66,-12 293.66,-12 293.66,-6 299.66,0 305.66,0 305.66,0 355.07,0 355.07,0 361.07,0 367.07,-6 367.07,-12 367.07,-12 367.07,-24 367.07,-24 367.07,-30 361.07,-36 355.07,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"330.37\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tế bào chất</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M111.17,-18C158.94,-18 234.69,-18 283.2,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"283.19,-20.63 290.69,-18 283.19,-15.38 283.19,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"212.78\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">khuếch tán xuôi chiều gradient</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M113.16,-95C113.16,-95 18.75,-95 18.75,-95 12.75,-95 6.75,-89 6.75,-83 6.75,-83 6.75,-71 6.75,-71 6.75,-65 12.75,-59 18.75,-59 18.75,-59 113.16,-59 113.16,-59 119.16,-59 125.16,-65 125.16,-71 125.16,-71 125.16,-83 125.16,-83 125.16,-89 119.16,-95 113.16,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"65.95\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">khuếch tán đơn giản</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M119.91,-154C119.91,-154 12,-154 12,-154 6,-154 0,-148 0,-142 0,-142 0,-130 0,-130 0,-124 6,-118 12,-118 12,-118 119.91,-118 119.91,-118 125.91,-118 131.91,-124 131.91,-130 131.91,-130 131.91,-142 131.91,-142 131.91,-148 125.91,-154 119.91,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"65.95\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">khuếch tán tăng cường</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M113.53,-213C113.53,-213 18.37,-213 18.37,-213 12.37,-213 6.37,-207 6.37,-201 6.37,-201 6.37,-189 6.37,-189 6.37,-183 12.37,-177 18.37,-177 18.37,-177 113.53,-177 113.53,-177 119.53,-177 125.53,-183 125.53,-189 125.53,-189 125.53,-201 125.53,-201 125.53,-207 119.53,-213 113.53,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"65.95\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">lớp kép phospholipid</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M93.66,-272C93.66,-272 38.25,-272 38.25,-272 32.25,-272 26.25,-266 26.25,-260 26.25,-260 26.25,-248 26.25,-248 26.25,-242 32.25,-236 38.25,-236 38.25,-236 93.66,-236 93.66,-236 99.66,-236 105.66,-242 105.66,-248 105.66,-248 105.66,-260 105.66,-260 105.66,-266 99.66,-272 93.66,-272\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"65.95\" y=\"-250.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">protein kênh</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M95.53,-331C95.53,-331 36.37,-331 36.37,-331 30.37,-331 24.37,-325 24.37,-319 24.37,-319 24.37,-307 24.37,-307 24.37,-301 30.37,-295 36.37,-295 36.37,-295 95.53,-295 95.53,-295 101.53,-295 107.53,-301 107.53,-307 107.53,-307 107.53,-319 107.53,-319 107.53,-325 101.53,-331 95.53,-331\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"65.95\" y=\"-309.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">protein mang</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M104.53,-390C104.53,-390 27.37,-390 27.37,-390 21.37,-390 15.37,-384 15.37,-378 15.37,-378 15.37,-366 15.37,-366 15.37,-360 21.37,-354 27.37,-354 27.37,-354 104.53,-354 104.53,-354 110.53,-354 116.53,-360 116.53,-366 116.53,-366 116.53,-378 116.53,-378 116.53,-384 110.53,-390 104.53,-390\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"65.95\" y=\"-368.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">gradient nồng độ</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_12",
      "filename": "vn_diag_12_tham_thau_moi_truong.png",
      "image_url": "vn_images/vn_diag_12_tham_thau_moi_truong.png",
      "width": 940,
      "height": 759,
      "title": "Sự thay đổi hình dạng tế bào trong các môi trường thẩm thấu",
      "subject": "Sinh học 10",
      "subject_key": "sinh10",
      "subject_vi": "Sinh học 10 (THPT)",
      "grade": "Khối 10",
      "subject_color": "indigo",
      "subject_icon": "fa-microscope",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương 3: Trao đổi chất qua màng và truyền tin tế bào",
      "lesson": "Bài 10: Trao đổi chất qua màng tế bào (Hình 10.2)",
      "diagram_type": "comparative_osmosis",
      "taxonomy_key": "system_process",
      "taxonomy_vi": "Cơ chế Sinh lý & Di truyền Phân tử",
      "taxonomy_en": "Physiological & Molecular Processes",
      "taxonomy_color": "rose",
      "taxonomy_icon": "fa-gears",
      "key_entities": [
        "môi trường ưu trương",
        "môi trường đẳng trương",
        "môi trường nhược trương",
        "tế bào động vật",
        "tế bào thực vật",
        "nước H2O",
        "co nguyên sinh",
        "teo bào"
      ],
      "directional_relations": [],
      "gt_caption_vi": "Sơ đồ đối chứng sự biến đổi hình thái của tế bào động vật và tế bào thực vật khi đặt trong ba loại dung dịch: Trong môi trường ưu trương, nước thẩm thấu ra ngoài làm tế bào động vật bị teo lại và tế bào thực vật bị co nguyên sinh; trong môi trường đẳng trương, lượng nước ra vào cân bằng nên tế bào giữ nguyên hình dạng; còn trong môi trường nhược trương, nước thẩm thấu ồ ạt vào trong khiến tế bào động vật căng phồng và vỡ ra, trong khi tế bào thực vật trương căng nhưng không vỡ nhờ có thành tế bào vững chắc.",
      "gt_caption_en": "The comparative diagram demonstrates the morphological changes of animal and plant cells across three osmotic environments: In a hypertonic solution, water exits causing animal cells to shrivel and plant cells to undergo plasmolysis; in an isotonic solution, water exchange is balanced maintaining normal cell shape; in a hypotonic solution, water rushes inward causing animal cells to swell and lyse, whereas plant cells remain intact and turgid due to the rigid cell wall.",
      "generated_caption_vi": "Sơ đồ mô tả chi tiết đặc điểm cấu tạo của sự thay đổi hình dạng tế bào trong các môi trường thẩm thấu trong chương trình Sinh học 10. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: môi trường ưu trương, môi trường đẳng trương, môi trường nhược trương, tế bào động vật, tế bào thực vật, nước H2O, co nguyên sinh cùng các cấu trúc liên quan (teo bào). Các chi tiết cấu tạo được liên kết chặt chẽ theo trật tự không gian và phân cấp chức năng sinh học.",
      "generated_caption_en": "The diagram illustrates how cell shapes change in different osmotic environments, specifically showing animal cells and plant cells in hypertonic, isotonic, and hypotonic solutions. It highlights key concepts such as plasmolysis in animal cells and cytorrhysis (cell shrinking) in plant cells due to water movement across the cell membrane.",
      "metrics_vi": {
        "bleu_1": 0.42574257425742573,
        "bleu_4": 0.05102040816326531,
        "rouge_l": 0.28169014084507044,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 0.09,
        "bertscore_f1": 89.43
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "Sự thay đổi hình dạng tế bào trong các môi trường thẩm thấu",
            "title": "<b>Sự thay đổi hình dạng tế bào trong các môi trường thẩm thấu</b><br>Vai trò: Chủ đề trung tâm",
            "kind": "hub",
            "color": {
              "background": "#fef3c7",
              "border": "#d97706",
              "highlight": "#fde68a"
            },
            "shape": "ellipse"
          },
          {
            "id": "N2",
            "label": "môi trường ưu trương",
            "title": "<b>môi trường ưu trương</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "môi trường đẳng trương",
            "title": "<b>môi trường đẳng trương</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "môi trường nhược trương",
            "title": "<b>môi trường nhược trương</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "tế bào động vật",
            "title": "<b>tế bào động vật</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "tế bào thực vật",
            "title": "<b>tế bào thực vật</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "nước H2O",
            "title": "<b>nước H2O</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "co nguyên sinh",
            "title": "<b>co nguyên sinh</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "teo bào",
            "title": "<b>teo bào</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N3",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N4",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N5",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N6",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N7",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N8",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N9",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          }
        ]
      },
      "graphviz_svg": "<svg width=\"987pt\" height=\"123pt\"\r\n viewBox=\"0.00 0.00 987.00 123.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 119.25)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<ellipse fill=\"#fef3c7\" stroke=\"#d97706\" cx=\"585.7\" cy=\"-97.25\" rx=\"218.99\" ry=\"18\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"585.7\" y=\"-93.55\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#78350f\">Sự thay đổi hình dạng tế bào trong các môi trường thẩm thấu</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M115.41,-36C115.41,-36 12,-36 12,-36 6,-36 0,-30 0,-24 0,-24 0,-12 0,-12 0,-6 6,0 12,0 12,0 115.41,0 115.41,0 121.41,0 127.41,-6 127.41,-12 127.41,-12 127.41,-24 127.41,-24 127.41,-30 121.41,-36 115.41,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"63.7\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">môi trường ưu trương</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M453.81,-82.48C364.69,-72.19 244.59,-56.39 139.7,-36 138.71,-35.81 137.71,-35.61 136.7,-35.41\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"137.31,-32.86 129.44,-33.94 136.27,-38 137.31,-32.86\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"324.97\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M276.66,-36C276.66,-36 162.75,-36 162.75,-36 156.75,-36 150.75,-30 150.75,-24 150.75,-24 150.75,-12 150.75,-12 150.75,-6 156.75,0 162.75,0 162.75,0 276.66,0 276.66,0 282.66,0 288.66,-6 288.66,-12 288.66,-12 288.66,-24 288.66,-24 288.66,-30 282.66,-36 276.66,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"219.7\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">môi trường đẳng trương</text>\r\n</g>\r\n<!-- N1&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N1&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M496.8,-80.39C468.8,-75.19 437.79,-69.2 409.45,-63.25 372.69,-55.52 332.1,-46.17 297.94,-38.06\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"298.76,-35.56 290.85,-36.37 297.54,-40.66 298.76,-35.56\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"436.08\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M445.78,-36C445.78,-36 323.62,-36 323.62,-36 317.62,-36 311.62,-30 311.62,-24 311.62,-24 311.62,-12 311.62,-12 311.62,-6 317.62,0 323.62,0 323.62,0 445.78,0 445.78,0 451.78,0 457.78,-6 457.78,-12 457.78,-12 457.78,-24 457.78,-24 457.78,-30 451.78,-36 445.78,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"384.7\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">môi trường nhược trương</text>\r\n</g>\r\n<!-- N1&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N1&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M538.3,-79.21C524.46,-74.16 509.32,-68.55 495.45,-63.25 476.01,-55.81 454.74,-47.39 436.1,-39.9\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"437.22,-37.52 429.28,-37.16 435.26,-42.39 437.22,-37.52\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"522.08\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M562.91,-36C562.91,-36 492.5,-36 492.5,-36 486.5,-36 480.5,-30 480.5,-24 480.5,-24 480.5,-12 480.5,-12 480.5,-6 486.5,0 492.5,0 492.5,0 562.91,0 562.91,0 568.91,0 574.91,-6 574.91,-12 574.91,-12 574.91,-24 574.91,-24 574.91,-30 568.91,-36 562.91,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"527.7\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tế bào động vật</text>\r\n</g>\r\n<!-- N1&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N1&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M572.83,-79.11C565,-68.68 554.87,-55.19 546.2,-43.63\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"548.53,-42.36 541.92,-37.94 544.33,-45.51 548.53,-42.36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"586.8\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M677.78,-36C677.78,-36 609.62,-36 609.62,-36 603.62,-36 597.62,-30 597.62,-24 597.62,-24 597.62,-12 597.62,-12 597.62,-6 603.62,0 609.62,0 609.62,0 677.78,0 677.78,0 683.78,0 689.78,-6 689.78,-12 689.78,-12 689.78,-24 689.78,-24 689.78,-30 683.78,-36 677.78,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"643.7\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tế bào thực vật</text>\r\n</g>\r\n<!-- N1&#45;&gt;N6 -->\r\n<g id=\"edge5\" class=\"edge\">\r\n<title>N1&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M603.14,-79.03C607.77,-74.12 612.61,-68.63 616.7,-63.25 621.23,-57.31 625.66,-50.57 629.58,-44.18\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"631.65,-45.83 633.23,-38.04 627.14,-43.14 631.65,-45.83\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"650.71\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M772.66,-36C772.66,-36 724.75,-36 724.75,-36 718.75,-36 712.75,-30 712.75,-24 712.75,-24 712.75,-12 712.75,-12 712.75,-6 718.75,0 724.75,0 724.75,0 772.66,0 772.66,0 778.66,0 784.66,-6 784.66,-12 784.66,-12 784.66,-24 784.66,-24 784.66,-30 778.66,-36 772.66,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"748.7\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">nước H2O</text>\r\n</g>\r\n<!-- N1&#45;&gt;N7 -->\r\n<g id=\"edge6\" class=\"edge\">\r\n<title>N1&#45;&gt;N7</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M643.39,-79.41C656.58,-74.8 670.35,-69.36 682.7,-63.25 694.94,-57.2 707.59,-49.21 718.49,-41.69\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"719.86,-43.93 724.48,-37.46 716.84,-39.64 719.86,-43.93\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"728.35\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M887.78,-36C887.78,-36 819.62,-36 819.62,-36 813.62,-36 807.62,-30 807.62,-24 807.62,-24 807.62,-12 807.62,-12 807.62,-6 813.62,0 819.62,0 819.62,0 887.78,0 887.78,0 893.78,0 899.78,-6 899.78,-12 899.78,-12 899.78,-24 899.78,-24 899.78,-30 893.78,-36 887.78,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"853.7\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">co nguyên sinh</text>\r\n</g>\r\n<!-- N1&#45;&gt;N8 -->\r\n<g id=\"edge7\" class=\"edge\">\r\n<title>N1&#45;&gt;N8</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M689.38,-81.03C712.79,-76.38 737.33,-70.51 759.7,-63.25 777.97,-57.33 797.29,-48.68 813.64,-40.59\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"814.63,-43.04 820.14,-37.32 812.26,-38.35 814.63,-43.04\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"815.61\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M966.78,-36C966.78,-36 934.62,-36 934.62,-36 928.62,-36 922.62,-30 922.62,-24 922.62,-24 922.62,-12 922.62,-12 922.62,-6 928.62,0 934.62,0 934.62,0 966.78,0 966.78,0 972.78,0 978.78,-6 978.78,-12 978.78,-12 978.78,-24 978.78,-24 978.78,-30 972.78,-36 966.78,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"950.7\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">teo bào</text>\r\n</g>\r\n<!-- N1&#45;&gt;N9 -->\r\n<g id=\"edge8\" class=\"edge\">\r\n<title>N1&#45;&gt;N9</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M739.49,-84.1C775.38,-79.29 813.18,-72.58 847.7,-63.25 870.35,-57.13 894.51,-46.96 913.73,-37.92\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"914.79,-40.32 920.42,-34.71 912.52,-35.59 914.79,-40.32\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"906.41\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_13",
      "filename": "vn_diag_13_ho_hap_hieu_khi.png",
      "image_url": "vn_images/vn_diag_13_ho_hap_hieu_khi.png",
      "width": 1201,
      "height": 723,
      "title": "Sơ đồ quá trình phân giải hiếu khí glucose trong tế bào nhân thực",
      "subject": "Sinh học 10",
      "subject_key": "sinh10",
      "subject_vi": "Sinh học 10 (THPT)",
      "grade": "Khối 10",
      "subject_color": "indigo",
      "subject_icon": "fa-microscope",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương 4: Chuyển hoá năng lượng trong tế bào",
      "lesson": "Bài 14: Phân giải và tổng hợp các chất trong tế bào (Hình 14.1)",
      "diagram_type": "biochemical_pathway",
      "taxonomy_key": "biogeochemical_cycle",
      "taxonomy_vi": "Chu trình Sinh-Địa-Hóa & Chuyển hóa",
      "taxonomy_en": "Biogeochemical & Metabolic Cycles",
      "taxonomy_color": "cyan",
      "taxonomy_icon": "fa-droplet",
      "key_entities": [
        "glucose",
        "đường phân",
        "pyruvate",
        "tế bào chất",
        "ti thể",
        "acetyl-CoA",
        "chu trình Krebs",
        "chuỗi truyền electron",
        "ATP",
        "NADH",
        "FADH2",
        "CO2"
      ],
      "directional_relations": [
        {
          "source": "glucose",
          "target": "2 Pyruvate",
          "relation": "đường phân tạo 2 ATP và 2 NADH"
        },
        {
          "source": "2 Pyruvate",
          "target": "2 Acetyl-CoA",
          "relation": "khử carboxyl tạo 2 CO2 và 2 NADH"
        },
        {
          "source": "2 Acetyl-CoA",
          "target": "chu trình Krebs",
          "relation": "oxi hoá tạo 2 ATP, 4 CO2, 6 NADH, 2 FADH2"
        },
        {
          "source": "chu trình Krebs",
          "target": "chuỗi truyền electron",
          "relation": "vận chuyển electron tạo 26-28 ATP"
        }
      ],
      "gt_caption_vi": "Sơ đồ chuyển hoá năng lượng tóm tắt ba giai đoạn của quá trình phân giải hiếu khí glucose: Giai đoạn 1 là đường phân diễn ra trong tế bào chất biến đổi glucose thành 2 phân tử pyruvate, tạo 2 ATP và 2 NADH; giai đoạn 2 là chu trình Krebs diễn ra trong chất nền ti thể phân giải acetyl-CoA tạo 2 ATP, 4 CO2, 6 NADH và 2 FADH2; giai đoạn 3 là chuỗi truyền electron ở màng trong ti thể tận dụng các coenzyme mang điện tử để tổng hợp lượng lớn 26 đến 28 ATP.",
      "gt_caption_en": "The metabolic pathway diagram summarizes the three stages of aerobic cellular respiration of glucose: Glycolysis in the cytoplasm breaks glucose down into 2 pyruvate molecules yielding 2 ATP and 2 NADH; the Krebs cycle in the mitochondrial matrix oxidizes acetyl-CoA producing 2 ATP, 4 CO2, 6 NADH, and 2 FADH2; and the electron transport chain on the inner mitochondrial membrane utilizes electron carriers to generate 26 to 28 ATP.",
      "generated_caption_vi": "Sơ đồ khoa học minh họa trực quan nội dung 'Sơ đồ quá trình phân giải hiếu khí glucose trong tế bào nhân thực'. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: glucose, đường phân, pyruvate, tế bào chất, ti thể, acetyl-CoA, chu trình Krebs cùng các cấu trúc liên quan (chuỗi truyền electron). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: glucose đường phân tạo 2 ATP và 2 NADH 2 Pyruvate; 2 Pyruvate khử carboxyl tạo 2 CO2 và 2 NADH 2 Acetyl-CoA; 2 Acetyl-CoA oxi hoá tạo 2 ATP, 4 CO2, 6 NADH, 2 FADH2 chu trình Krebs; chu trình Krebs vận chuyển electron tạo 26-28 ATP chuỗi truyền electron.",
      "generated_caption_en": "The diagram illustrates the aerobic glucose breakdown process within a eukaryotic cell, showing the transformation of glucose into pyruvate in the cytoplasm, which yields 2 ATP and 2 NADH per molecule of glucose. Further, it depicts the conversion of two molecules of pyruvate into acetyl-CoA in the mitochondria, releasing two carbon dioxide molecules and generating another pair of NADH, followed by the oxidation of acetyl-CoA through the citric acid cycle to produce additional ATP, NADH, FADH2, and carbon dioxide, ultimately leading these reduced coenzymes to the electron transport chain where they generate between 26 to 28 ATP.",
      "metrics_vi": {
        "bleu_1": 0.4076923076923077,
        "bleu_4": 0.08661417322834646,
        "rouge_l": 0.329004329004329,
        "entity_recall": 1.0,
        "dir_accuracy": 0.75
      },
      "metrics_en": {
        "cider": 0.0,
        "bertscore_f1": 90.14
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "glucose",
            "title": "<b>glucose</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "2 Pyruvate",
            "title": "<b>2 Pyruvate</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "2 Acetyl-CoA",
            "title": "<b>2 Acetyl-CoA</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "chu trình Krebs",
            "title": "<b>chu trình Krebs</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "chuỗi truyền electron",
            "title": "<b>chuỗi truyền electron</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "đường phân",
            "title": "<b>đường phân</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "pyruvate",
            "title": "<b>pyruvate</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "tế bào chất",
            "title": "<b>tế bào chất</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "ti thể",
            "title": "<b>ti thể</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "acetyl-CoA",
            "title": "<b>acetyl-CoA</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N11",
            "label": "ATP",
            "title": "<b>ATP</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N12",
            "label": "NADH",
            "title": "<b>NADH</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N13",
            "label": "FADH2",
            "title": "<b>FADH2</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N14",
            "label": "CO2",
            "title": "<b>CO2</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "đường phân tạo 2 ATP và 2 NADH",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "khử carboxyl tạo 2 CO2 và 2 NADH",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "oxi hoá tạo 2 ATP, 4 CO2, 6 NADH, 2 FADH2",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N5",
            "label": "vận chuyển electron tạo 26-28 ATP",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"1225pt\" height=\"575pt\"\r\n viewBox=\"0.00 0.00 1225.00 575.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 571)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M56.53,-36C56.53,-36 23.62,-36 23.62,-36 17.62,-36 11.62,-30 11.62,-24 11.62,-24 11.62,-12 11.62,-12 11.62,-6 17.62,0 23.62,0 23.62,0 56.53,0 56.53,0 62.53,0 68.53,-6 68.53,-12 68.53,-12 68.53,-24 68.53,-24 68.53,-30 62.53,-36 56.53,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"40.08\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">glucose</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M319.07,-36C319.07,-36 271.16,-36 271.16,-36 265.16,-36 259.16,-30 259.16,-24 259.16,-24 259.16,-12 259.16,-12 259.16,-6 265.16,0 271.16,0 271.16,0 319.07,0 319.07,0 325.07,0 331.07,-6 331.07,-12 331.07,-12 331.07,-24 331.07,-24 331.07,-30 325.07,-36 319.07,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"295.11\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">2 Pyruvate</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M68.64,-18C111.99,-18 196.55,-18 248.9,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"248.69,-20.63 256.19,-18 248.69,-15.38 248.69,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"169.66\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">đường phân tạo 2 ATP và 2 NADH</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M584.98,-36C584.98,-36 525.82,-36 525.82,-36 519.82,-36 513.82,-30 513.82,-24 513.82,-24 513.82,-12 513.82,-12 513.82,-6 519.82,0 525.82,0 525.82,0 584.98,0 584.98,0 590.98,0 596.98,-6 596.98,-12 596.98,-12 596.98,-24 596.98,-24 596.98,-30 590.98,-36 584.98,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"555.4\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">2 Acetyl&#45;CoA</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M331.49,-18C375.95,-18 452.59,-18 503.39,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"503.28,-20.63 510.78,-18 503.28,-15.38 503.28,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"422.44\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">khử carboxyl tạo 2 CO2 và 2 NADH</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M904.14,-36C904.14,-36 834.48,-36 834.48,-36 828.48,-36 822.48,-30 822.48,-24 822.48,-24 822.48,-12 822.48,-12 822.48,-6 828.48,0 834.48,0 834.48,0 904.14,0 904.14,0 910.14,0 916.14,-6 916.14,-12 916.14,-12 916.14,-24 916.14,-24 916.14,-30 910.14,-36 904.14,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"869.31\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">chu trình Krebs</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M597.18,-18C652.16,-18 750.3,-18 812.21,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"811.97,-20.63 819.47,-18 811.97,-15.38 811.97,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"709.73\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">oxi hoá tạo 2 ATP, 4 CO2, 6 NADH, 2 FADH2</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1204.55,-36C1204.55,-36 1108.64,-36 1108.64,-36 1102.64,-36 1096.64,-30 1096.64,-24 1096.64,-24 1096.64,-12 1096.64,-12 1096.64,-6 1102.64,0 1108.64,0 1108.64,0 1204.55,0 1204.55,0 1210.55,0 1216.55,-6 1216.55,-12 1216.55,-12 1216.55,-24 1216.55,-24 1216.55,-30 1210.55,-36 1204.55,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1156.59\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">chuỗi truyền electron</text>\r\n</g>\r\n<!-- N4&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N4&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M916.46,-18C962.46,-18 1033.67,-18 1086.43,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1086.16,-20.63 1093.66,-18 1086.16,-15.38 1086.16,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1006.39\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">vận chuyển electron tạo 26&#45;28 ATP</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M68.16,-95C68.16,-95 12,-95 12,-95 6,-95 0,-89 0,-83 0,-83 0,-71 0,-71 0,-65 6,-59 12,-59 12,-59 68.16,-59 68.16,-59 74.16,-59 80.16,-65 80.16,-71 80.16,-71 80.16,-83 80.16,-83 80.16,-89 74.16,-95 68.16,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"40.08\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">đường phân</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M58.78,-154C58.78,-154 21.37,-154 21.37,-154 15.37,-154 9.37,-148 9.37,-142 9.37,-142 9.37,-130 9.37,-130 9.37,-124 15.37,-118 21.37,-118 21.37,-118 58.78,-118 58.78,-118 64.78,-118 70.78,-124 70.78,-130 70.78,-130 70.78,-142 70.78,-142 70.78,-148 64.78,-154 58.78,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"40.08\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">pyruvate</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M64.78,-213C64.78,-213 15.37,-213 15.37,-213 9.37,-213 3.37,-207 3.37,-201 3.37,-201 3.37,-189 3.37,-189 3.37,-183 9.37,-177 15.37,-177 15.37,-177 64.78,-177 64.78,-177 70.78,-177 76.78,-183 76.78,-189 76.78,-189 76.78,-201 76.78,-201 76.78,-207 70.78,-213 64.78,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"40.08\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tế bào chất</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M55.08,-272C55.08,-272 25.08,-272 25.08,-272 19.08,-272 13.08,-266 13.08,-260 13.08,-260 13.08,-248 13.08,-248 13.08,-242 19.08,-236 25.08,-236 25.08,-236 55.08,-236 55.08,-236 61.08,-236 67.08,-242 67.08,-248 67.08,-248 67.08,-260 67.08,-260 67.08,-266 61.08,-272 55.08,-272\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"40.08\" y=\"-250.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ti thể</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M64.78,-331C64.78,-331 15.37,-331 15.37,-331 9.37,-331 3.37,-325 3.37,-319 3.37,-319 3.37,-307 3.37,-307 3.37,-301 9.37,-295 15.37,-295 15.37,-295 64.78,-295 64.78,-295 70.78,-295 76.78,-301 76.78,-307 76.78,-307 76.78,-319 76.78,-319 76.78,-325 70.78,-331 64.78,-331\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"40.08\" y=\"-309.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">acetyl&#45;CoA</text>\r\n</g>\r\n<!-- N11 -->\r\n<g id=\"node11\" class=\"node\">\r\n<title>N11</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M55.08,-390C55.08,-390 25.08,-390 25.08,-390 19.08,-390 13.08,-384 13.08,-378 13.08,-378 13.08,-366 13.08,-366 13.08,-360 19.08,-354 25.08,-354 25.08,-354 55.08,-354 55.08,-354 61.08,-354 67.08,-360 67.08,-366 67.08,-366 67.08,-378 67.08,-378 67.08,-384 61.08,-390 55.08,-390\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"40.08\" y=\"-368.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ATP</text>\r\n</g>\r\n<!-- N12 -->\r\n<g id=\"node12\" class=\"node\">\r\n<title>N12</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M55.08,-449C55.08,-449 25.08,-449 25.08,-449 19.08,-449 13.08,-443 13.08,-437 13.08,-437 13.08,-425 13.08,-425 13.08,-419 19.08,-413 25.08,-413 25.08,-413 55.08,-413 55.08,-413 61.08,-413 67.08,-419 67.08,-425 67.08,-425 67.08,-437 67.08,-437 67.08,-443 61.08,-449 55.08,-449\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"40.08\" y=\"-427.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">NADH</text>\r\n</g>\r\n<!-- N13 -->\r\n<g id=\"node13\" class=\"node\">\r\n<title>N13</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M56.16,-508C56.16,-508 24,-508 24,-508 18,-508 12,-502 12,-496 12,-496 12,-484 12,-484 12,-478 18,-472 24,-472 24,-472 56.16,-472 56.16,-472 62.16,-472 68.16,-478 68.16,-484 68.16,-484 68.16,-496 68.16,-496 68.16,-502 62.16,-508 56.16,-508\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"40.08\" y=\"-486.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">FADH2</text>\r\n</g>\r\n<!-- N14 -->\r\n<g id=\"node14\" class=\"node\">\r\n<title>N14</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M55.08,-567C55.08,-567 25.08,-567 25.08,-567 19.08,-567 13.08,-561 13.08,-555 13.08,-555 13.08,-543 13.08,-543 13.08,-537 19.08,-531 25.08,-531 25.08,-531 55.08,-531 55.08,-531 61.08,-531 67.08,-537 67.08,-543 67.08,-543 67.08,-555 67.08,-555 67.08,-561 61.08,-567 55.08,-567\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"40.08\" y=\"-545.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">CO2</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_14",
      "filename": "vn_diag_14_quang_hop_pha_sang_toi.png",
      "image_url": "vn_images/vn_diag_14_quang_hop_pha_sang_toi.png",
      "width": 1001,
      "height": 693,
      "title": "Mối quan hệ giữa pha sáng và pha tối của quang hợp",
      "subject": "Sinh học 10",
      "subject_key": "sinh10",
      "subject_vi": "Sinh học 10 (THPT)",
      "grade": "Khối 10",
      "subject_color": "indigo",
      "subject_icon": "fa-microscope",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương 4: Chuyển hoá năng lượng trong tế bào",
      "lesson": "Bài 14: Phân giải và tổng hợp các chất trong tế bào (Hình 14.5)",
      "diagram_type": "biochemical_cycle",
      "taxonomy_key": "biogeochemical_cycle",
      "taxonomy_vi": "Chu trình Sinh-Địa-Hóa & Chuyển hóa",
      "taxonomy_en": "Biogeochemical & Metabolic Cycles",
      "taxonomy_color": "cyan",
      "taxonomy_icon": "fa-droplet",
      "key_entities": [
        "pha sáng",
        "pha tối",
        "chu trình Calvin",
        "thylakoid",
        "chất nền lục lạp",
        "ánh sáng",
        "H2O",
        "O2",
        "CO2",
        "đường",
        "ATP",
        "NADPH",
        "ADP",
        "NADP+"
      ],
      "directional_relations": [
        {
          "source": "pha sáng",
          "target": "pha tối",
          "relation": "cung cấp ATP và NADPH"
        },
        {
          "source": "pha tối",
          "target": "pha sáng",
          "relation": "tái sinh ADP và NADP+"
        }
      ],
      "gt_caption_vi": "Sơ đồ biểu diễn mối liên hệ tuần hoàn chặt chẽ giữa hai pha của quang hợp trong lục lạp: Tại thylakoid, pha sáng hấp thụ năng lượng ánh sáng và phân li nước H2O để giải phóng O2, đồng thời tích luỹ năng lượng tạo ATP và NADPH; các sản phẩm này được chuyển sang chất nền lục lạp để cung cấp cho pha tối (chu trình Calvin) khử CO2 thành đường, sau đó giải phóng ADP và NADP+ quay trở lại tái tạo cho pha sáng.",
      "gt_caption_en": "The cycle diagram illustrates the interdependent coupling between the two phases of photosynthesis inside the chloroplast: In the thylakoid membranes, light-dependent reactions capture light and split H2O to release O2 while producing ATP and NADPH; these energy carriers are transferred to the stroma to power the Calvin cycle (dark reactions) in reducing CO2 into sugars, returning ADP and NADP+ back to recharge in the light reactions.",
      "generated_caption_vi": "Sơ đồ biểu diễn chu trình sinh học khép kín và tiến trình phát triển của mối quan hệ giữa pha sáng và pha tối của quang hợp. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: pha sáng, pha tối, chu trình Calvin, thylakoid, chất nền lục lạp, ánh sáng, đường cùng các cấu trúc liên quan (NADP+). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: pha sáng cung cấp ATP và NADPH pha tối; pha tối tái sinh ADP và NADP+ pha sáng.",
      "generated_caption_en": "The diagram illustrates the relationship between the light-dependent reactions (pha sáng) and the Calvin cycle (pha tối) of photosynthesis. The light phase occurs in the thylakoids where water (H₂O) is split to produce oxygen (O₂), ATP, and NADPH, which are then used in the dark phase occurring in the chloroplast stroma to fix carbon dioxide (CO₂) into sugars through the Calvin cycle, while also regenerating ADP and NADP+ that are recycled back to the light phase.",
      "metrics_vi": {
        "bleu_1": 0.44329896907216493,
        "bleu_4": 0.0425531914893617,
        "rouge_l": 0.2810810810810811,
        "entity_recall": 0.7857142857142857,
        "dir_accuracy": 0.5
      },
      "metrics_en": {
        "cider": 25.26,
        "bertscore_f1": 88.68
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "pha sáng",
            "title": "<b>pha sáng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "pha tối",
            "title": "<b>pha tối</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "chu trình Calvin",
            "title": "<b>chu trình Calvin</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "thylakoid",
            "title": "<b>thylakoid</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "chất nền lục lạp",
            "title": "<b>chất nền lục lạp</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "ánh sáng",
            "title": "<b>ánh sáng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "H2O",
            "title": "<b>H2O</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "O2",
            "title": "<b>O2</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "CO2",
            "title": "<b>CO2</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "đường",
            "title": "<b>đường</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N11",
            "label": "ATP",
            "title": "<b>ATP</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N12",
            "label": "NADPH",
            "title": "<b>NADPH</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N13",
            "label": "ADP",
            "title": "<b>ADP</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N14",
            "label": "NADP+",
            "title": "<b>NADP+</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "cung cấp ATP và NADPH",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N1",
            "label": "tái sinh ADP và NADP+",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"296pt\" height=\"756pt\"\r\n viewBox=\"0.00 0.00 296.00 756.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 752.09)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M67.78,-40.09C67.78,-40.09 27.37,-40.09 27.37,-40.09 21.37,-40.09 15.37,-34.09 15.37,-28.09 15.37,-28.09 15.37,-16.09 15.37,-16.09 15.37,-10.09 21.37,-4.09 27.37,-4.09 27.37,-4.09 67.78,-4.09 67.78,-4.09 73.78,-4.09 79.78,-10.09 79.78,-16.09 79.78,-16.09 79.78,-28.09 79.78,-28.09 79.78,-34.09 73.78,-40.09 67.78,-40.09\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"47.58\" y=\"-18.39\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">pha sáng</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M275.66,-40.09C275.66,-40.09 245.66,-40.09 245.66,-40.09 239.66,-40.09 233.66,-34.09 233.66,-28.09 233.66,-28.09 233.66,-16.09 233.66,-16.09 233.66,-10.09 239.66,-4.09 245.66,-4.09 245.66,-4.09 275.66,-4.09 275.66,-4.09 281.66,-4.09 287.66,-10.09 287.66,-16.09 287.66,-16.09 287.66,-28.09 287.66,-28.09 287.66,-34.09 281.66,-40.09 275.66,-40.09\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"260.66\" y=\"-18.39\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">pha tối</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M80.18,-22.09C118.4,-22.09 182.61,-22.09 222.98,-22.09\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"222.97,-24.72 230.47,-22.09 222.97,-19.47 222.97,-24.72\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"164.41\" y=\"-24.32\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">cung cấp ATP và NADPH</text>\r\n</g>\r\n<!-- N2&#45;&gt;N1 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N1</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M233.43,-10.25C228.3,-8.42 222.89,-6.82 217.66,-5.84 171.13,2.84 158.11,0.15 111.16,-5.84 104.12,-6.74 96.73,-8.19 89.61,-9.86\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"89.39,-7.21 82.75,-11.58 90.67,-12.3 89.39,-7.21\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"164.41\" y=\"-8.07\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">tái sinh ADP và NADP+</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M83.16,-99.09C83.16,-99.09 12,-99.09 12,-99.09 6,-99.09 0,-93.09 0,-87.09 0,-87.09 0,-75.09 0,-75.09 0,-69.09 6,-63.09 12,-63.09 12,-63.09 83.16,-63.09 83.16,-63.09 89.16,-63.09 95.16,-69.09 95.16,-75.09 95.16,-75.09 95.16,-87.09 95.16,-87.09 95.16,-93.09 89.16,-99.09 83.16,-99.09\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"47.58\" y=\"-77.39\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">chu trình Calvin</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M66.66,-158.09C66.66,-158.09 28.5,-158.09 28.5,-158.09 22.5,-158.09 16.5,-152.09 16.5,-146.09 16.5,-146.09 16.5,-134.09 16.5,-134.09 16.5,-128.09 22.5,-122.09 28.5,-122.09 28.5,-122.09 66.66,-122.09 66.66,-122.09 72.66,-122.09 78.66,-128.09 78.66,-134.09 78.66,-134.09 78.66,-146.09 78.66,-146.09 78.66,-152.09 72.66,-158.09 66.66,-158.09\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"47.58\" y=\"-136.39\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thylakoid</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M83.16,-217.09C83.16,-217.09 12,-217.09 12,-217.09 6,-217.09 0,-211.09 0,-205.09 0,-205.09 0,-193.09 0,-193.09 0,-187.09 6,-181.09 12,-181.09 12,-181.09 83.16,-181.09 83.16,-181.09 89.16,-181.09 95.16,-187.09 95.16,-193.09 95.16,-193.09 95.16,-205.09 95.16,-205.09 95.16,-211.09 89.16,-217.09 83.16,-217.09\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"47.58\" y=\"-195.39\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">chất nền lục lạp</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M67.78,-276.09C67.78,-276.09 27.37,-276.09 27.37,-276.09 21.37,-276.09 15.37,-270.09 15.37,-264.09 15.37,-264.09 15.37,-252.09 15.37,-252.09 15.37,-246.09 21.37,-240.09 27.37,-240.09 27.37,-240.09 67.78,-240.09 67.78,-240.09 73.78,-240.09 79.78,-246.09 79.78,-252.09 79.78,-252.09 79.78,-264.09 79.78,-264.09 79.78,-270.09 73.78,-276.09 67.78,-276.09\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"47.58\" y=\"-254.39\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ánh sáng</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M62.58,-335.09C62.58,-335.09 32.58,-335.09 32.58,-335.09 26.58,-335.09 20.58,-329.09 20.58,-323.09 20.58,-323.09 20.58,-311.09 20.58,-311.09 20.58,-305.09 26.58,-299.09 32.58,-299.09 32.58,-299.09 62.58,-299.09 62.58,-299.09 68.58,-299.09 74.58,-305.09 74.58,-311.09 74.58,-311.09 74.58,-323.09 74.58,-323.09 74.58,-329.09 68.58,-335.09 62.58,-335.09\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"47.58\" y=\"-313.39\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">H2O</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M62.58,-394.09C62.58,-394.09 32.58,-394.09 32.58,-394.09 26.58,-394.09 20.58,-388.09 20.58,-382.09 20.58,-382.09 20.58,-370.09 20.58,-370.09 20.58,-364.09 26.58,-358.09 32.58,-358.09 32.58,-358.09 62.58,-358.09 62.58,-358.09 68.58,-358.09 74.58,-364.09 74.58,-370.09 74.58,-370.09 74.58,-382.09 74.58,-382.09 74.58,-388.09 68.58,-394.09 62.58,-394.09\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"47.58\" y=\"-372.39\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">O2</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M62.58,-453.09C62.58,-453.09 32.58,-453.09 32.58,-453.09 26.58,-453.09 20.58,-447.09 20.58,-441.09 20.58,-441.09 20.58,-429.09 20.58,-429.09 20.58,-423.09 26.58,-417.09 32.58,-417.09 32.58,-417.09 62.58,-417.09 62.58,-417.09 68.58,-417.09 74.58,-423.09 74.58,-429.09 74.58,-429.09 74.58,-441.09 74.58,-441.09 74.58,-447.09 68.58,-453.09 62.58,-453.09\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"47.58\" y=\"-431.39\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">CO2</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M62.58,-512.09C62.58,-512.09 32.58,-512.09 32.58,-512.09 26.58,-512.09 20.58,-506.09 20.58,-500.09 20.58,-500.09 20.58,-488.09 20.58,-488.09 20.58,-482.09 26.58,-476.09 32.58,-476.09 32.58,-476.09 62.58,-476.09 62.58,-476.09 68.58,-476.09 74.58,-482.09 74.58,-488.09 74.58,-488.09 74.58,-500.09 74.58,-500.09 74.58,-506.09 68.58,-512.09 62.58,-512.09\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"47.58\" y=\"-490.39\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">đường</text>\r\n</g>\r\n<!-- N11 -->\r\n<g id=\"node11\" class=\"node\">\r\n<title>N11</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M62.58,-571.09C62.58,-571.09 32.58,-571.09 32.58,-571.09 26.58,-571.09 20.58,-565.09 20.58,-559.09 20.58,-559.09 20.58,-547.09 20.58,-547.09 20.58,-541.09 26.58,-535.09 32.58,-535.09 32.58,-535.09 62.58,-535.09 62.58,-535.09 68.58,-535.09 74.58,-541.09 74.58,-547.09 74.58,-547.09 74.58,-559.09 74.58,-559.09 74.58,-565.09 68.58,-571.09 62.58,-571.09\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"47.58\" y=\"-549.39\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ATP</text>\r\n</g>\r\n<!-- N12 -->\r\n<g id=\"node12\" class=\"node\">\r\n<title>N12</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M65.53,-630.09C65.53,-630.09 29.62,-630.09 29.62,-630.09 23.62,-630.09 17.62,-624.09 17.62,-618.09 17.62,-618.09 17.62,-606.09 17.62,-606.09 17.62,-600.09 23.62,-594.09 29.62,-594.09 29.62,-594.09 65.53,-594.09 65.53,-594.09 71.53,-594.09 77.53,-600.09 77.53,-606.09 77.53,-606.09 77.53,-618.09 77.53,-618.09 77.53,-624.09 71.53,-630.09 65.53,-630.09\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"47.58\" y=\"-608.39\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">NADPH</text>\r\n</g>\r\n<!-- N13 -->\r\n<g id=\"node13\" class=\"node\">\r\n<title>N13</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M62.58,-689.09C62.58,-689.09 32.58,-689.09 32.58,-689.09 26.58,-689.09 20.58,-683.09 20.58,-677.09 20.58,-677.09 20.58,-665.09 20.58,-665.09 20.58,-659.09 26.58,-653.09 32.58,-653.09 32.58,-653.09 62.58,-653.09 62.58,-653.09 68.58,-653.09 74.58,-659.09 74.58,-665.09 74.58,-665.09 74.58,-677.09 74.58,-677.09 74.58,-683.09 68.58,-689.09 62.58,-689.09\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"47.58\" y=\"-667.39\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ADP</text>\r\n</g>\r\n<!-- N14 -->\r\n<g id=\"node14\" class=\"node\">\r\n<title>N14</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M64.78,-748.09C64.78,-748.09 30.37,-748.09 30.37,-748.09 24.37,-748.09 18.37,-742.09 18.37,-736.09 18.37,-736.09 18.37,-724.09 18.37,-724.09 18.37,-718.09 24.37,-712.09 30.37,-712.09 30.37,-712.09 64.78,-712.09 64.78,-712.09 70.78,-712.09 76.78,-718.09 76.78,-724.09 76.78,-724.09 76.78,-736.09 76.78,-736.09 76.78,-742.09 70.78,-748.09 64.78,-748.09\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"47.58\" y=\"-726.39\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">NADP+</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_15",
      "filename": "vn_diag_15_chu_trinh_nhan_len_virus.png",
      "image_url": "vn_images/vn_diag_15_chu_trinh_nhan_len_virus.png",
      "width": 1262,
      "height": 954,
      "title": "Chu kì sinh tan và tiềm tan của thể thực khuẩn",
      "subject": "Sinh học 10",
      "subject_key": "sinh10",
      "subject_vi": "Sinh học 10 (THPT)",
      "grade": "Khối 10",
      "subject_color": "indigo",
      "subject_icon": "fa-microscope",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương 7: Virus",
      "lesson": "Bài 24: Khái quát về virus (Hình 24.2)",
      "diagram_type": "dual_cycle_process",
      "taxonomy_key": "life_cycle",
      "taxonomy_vi": "Vòng đời & Phân bào",
      "taxonomy_en": "Life Cycles & Cell Division",
      "taxonomy_color": "indigo",
      "taxonomy_icon": "fa-arrows-spin",
      "key_entities": [
        "thể thực khuẩn",
        "chu kì sinh tan",
        "chu kì tiềm tan",
        "hấp phụ",
        "xâm nhập",
        "tổng hợp",
        "lắp ráp",
        "giải phóng",
        "DNA virus",
        "tế bào vi khuẩn",
        "phân chia tế bào"
      ],
      "directional_relations": [
        {
          "source": "1. Hấp phụ",
          "target": "2. Xâm nhập",
          "relation": "tiêm DNA"
        },
        {
          "source": "2. Xâm nhập",
          "target": "3. Tổng hợp",
          "relation": "sinh tổng hợp protein & DNA"
        },
        {
          "source": "3. Tổng hợp",
          "target": "4. Lắp ráp",
          "relation": "tạo virus hoàn chỉnh"
        },
        {
          "source": "4. Lắp ráp",
          "target": "5. Giải phóng",
          "relation": "phá vỡ tế bào giải phóng virus"
        },
        {
          "source": "2. Xâm nhập",
          "target": "Chu kì tiềm tan",
          "relation": "tích hợp DNA vào hệ gene chủ"
        }
      ],
      "gt_caption_vi": "Sơ đồ hai chu kì nhân lên của thể thực khuẩn (bacteriophage) trong tế bào vi khuẩn: Chu kì sinh tan gồm 5 bước tuần tự: 1. Hấp phụ bám lên bề mặt tế bào; 2. Xâm nhập tiêm DNA vào bên trong; 3. Tổng hợp sao chép DNA và vỏ protein của virus; 4. Lắp ráp các bộ phận tạo hạt virus hoàn chỉnh; 5. Giải phóng làm tan vỡ tế bào chủ; trong khi đó ở chu kì tiềm tan, DNA virus cài xen vào hệ gene vi khuẩn và nhân lên âm thầm cùng quá trình phân chia của tế bào chủ.",
      "gt_caption_en": "The dual-cycle diagram illustrates bacteriophage multiplication within a bacterial host: The lytic cycle comprises 5 sequential steps: 1. Attachment/adsorption onto the cell surface; 2. Penetration/injection of viral DNA; 3. Biosynthesis of viral DNA and capsid proteins; 4. Assembly into mature virions; 5. Lysis/release destroying the host cell; alternatively, in the lysogenic cycle, the viral genome integrates as a prophage into the bacterial chromosome, replicating silently alongside bacterial binary fission.",
      "generated_caption_vi": "Sơ đồ biểu diễn chu trình sinh học khép kín và tiến trình phát triển của chu kì sinh tan và tiềm tan của thể thực khuẩn. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: thể thực khuẩn, chu kì sinh tan, chu kì tiềm tan, hấp phụ, xâm nhập, tổng hợp, lắp ráp cùng các cấu trúc liên quan (giải phóng, DNA virus, tế bào vi khuẩn, phân chia tế bào). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: 1. Hấp phụ tiêm DNA 2. Xâm nhập; 2. Xâm nhập sinh tổng hợp protein & DNA 3. Tổng hợp; 3. Tổng hợp tạo virus hoàn chỉnh 4. Lắp ráp; 4. Lắp ráp phá vỡ tế bào giải phóng virus 5. Giải phóng; 2. Xâm nhập tích hợp DNA vào hệ gene chủ Chu kì tiềm tan.",
      "generated_caption_en": "The diagram illustrates the lytic and lysogenic cycles of bacteriophages, showing key steps including adsorption, injection, synthesis, assembly, and release. It also depicts how during the injection phase, the phage can either enter the lytic cycle for viral replication and cell lysis, or integrate into the bacterial genome to initiate the lysogenic cycle where the viral DNA remains dormant within the host's genetic material.",
      "metrics_vi": {
        "bleu_1": 0.4563758389261745,
        "bleu_4": 0.04794520547945205,
        "rouge_l": 0.2992125984251969,
        "entity_recall": 1.0,
        "dir_accuracy": 0.8
      },
      "metrics_en": {
        "cider": 61.69,
        "bertscore_f1": 88.81
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "1. Hấp phụ",
            "title": "<b>1. Hấp phụ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "2. Xâm nhập",
            "title": "<b>2. Xâm nhập</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "3. Tổng hợp",
            "title": "<b>3. Tổng hợp</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "4. Lắp ráp",
            "title": "<b>4. Lắp ráp</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "5. Giải phóng",
            "title": "<b>5. Giải phóng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "Chu kì tiềm tan",
            "title": "<b>Chu kì tiềm tan</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "thể thực khuẩn",
            "title": "<b>thể thực khuẩn</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "chu kì sinh tan",
            "title": "<b>chu kì sinh tan</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "hấp phụ",
            "title": "<b>hấp phụ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "xâm nhập",
            "title": "<b>xâm nhập</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N11",
            "label": "tổng hợp",
            "title": "<b>tổng hợp</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N12",
            "label": "lắp ráp",
            "title": "<b>lắp ráp</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N13",
            "label": "giải phóng",
            "title": "<b>giải phóng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N14",
            "label": "DNA virus",
            "title": "<b>DNA virus</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N15",
            "label": "tế bào vi khuẩn",
            "title": "<b>tế bào vi khuẩn</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N16",
            "label": "phân chia tế bào",
            "title": "<b>phân chia tế bào</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "tiêm DNA",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "sinh tổng hợp protein & DNA",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "tạo virus hoàn chỉnh",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N5",
            "label": "phá vỡ tế bào giải phóng virus",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N6",
            "label": "tích hợp DNA vào hệ gene chủ",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"950pt\" height=\"653pt\"\r\n viewBox=\"0.00 0.00 950.00 653.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 649)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M74.54,-55C74.54,-55 25.13,-55 25.13,-55 19.13,-55 13.13,-49 13.13,-43 13.13,-43 13.13,-31 13.13,-31 13.13,-25 19.13,-19 25.13,-19 25.13,-19 74.54,-19 74.54,-19 80.54,-19 86.54,-25 86.54,-31 86.54,-31 86.54,-43 86.54,-43 86.54,-49 80.54,-55 74.54,-55\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"49.83\" y=\"-33.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">1. Hấp phụ</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M242.57,-55C242.57,-55 184.91,-55 184.91,-55 178.91,-55 172.91,-49 172.91,-43 172.91,-43 172.91,-31 172.91,-31 172.91,-25 178.91,-19 184.91,-19 184.91,-19 242.57,-19 242.57,-19 248.57,-19 254.57,-25 254.57,-31 254.57,-31 254.57,-43 254.57,-43 254.57,-49 248.57,-55 242.57,-55\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"213.74\" y=\"-33.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">2. Xâm nhập</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M86.76,-37C109.02,-37 137.93,-37 162.44,-37\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"162.42,-39.63 169.92,-37 162.42,-34.38 162.42,-39.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"136.29\" y=\"-39.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">tiêm DNA</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M491.98,-95C491.98,-95 436.57,-95 436.57,-95 430.57,-95 424.57,-89 424.57,-83 424.57,-83 424.57,-71 424.57,-71 424.57,-65 430.57,-59 436.57,-59 436.57,-59 491.98,-59 491.98,-59 497.98,-59 503.98,-65 503.98,-71 503.98,-71 503.98,-83 503.98,-83 503.98,-89 497.98,-95 491.98,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"464.28\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">3. Tổng hợp</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M254.95,-43.47C298.47,-50.48 367.87,-61.65 414.48,-69.15\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"413.84,-71.7 421.66,-70.3 414.68,-66.52 413.84,-71.7\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"336.2\" y=\"-68.5\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">sinh tổng hợp protein &amp; DNA</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M498.73,-36C498.73,-36 429.82,-36 429.82,-36 423.82,-36 417.82,-30 417.82,-24 417.82,-24 417.82,-12 417.82,-12 417.82,-6 423.82,0 429.82,0 429.82,0 498.73,0 498.73,0 504.73,0 510.73,-6 510.73,-12 510.73,-12 510.73,-24 510.73,-24 510.73,-30 504.73,-36 498.73,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"464.28\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Chu kì tiềm tan</text>\r\n</g>\r\n<!-- N2&#45;&gt;N6 -->\r\n<g id=\"edge5\" class=\"edge\">\r\n<title>N2&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M254.92,-29.78C260.17,-29 265.49,-28.3 270.57,-27.75 316.58,-22.79 369.06,-20.34 407.62,-19.14\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"407.46,-21.77 414.88,-18.93 407.31,-16.53 407.46,-21.77\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"336.2\" y=\"-29.98\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">tích hợp DNA vào hệ gene chủ</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M685.14,-95C685.14,-95 640.23,-95 640.23,-95 634.23,-95 628.23,-89 628.23,-83 628.23,-83 628.23,-71 628.23,-71 628.23,-65 634.23,-59 640.23,-59 640.23,-59 685.14,-59 685.14,-59 691.14,-59 697.14,-65 697.14,-71 697.14,-71 697.14,-83 697.14,-83 697.14,-89 691.14,-95 685.14,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"662.69\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">4. Lắp ráp</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M504.08,-77C536.8,-77 583.63,-77 617.73,-77\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"617.65,-79.63 625.15,-77 617.65,-74.38 617.65,-79.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"569.48\" y=\"-79.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">tạo virus hoàn chỉnh</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M930.05,-95C930.05,-95 870.14,-95 870.14,-95 864.14,-95 858.14,-89 858.14,-83 858.14,-83 858.14,-71 858.14,-71 858.14,-65 864.14,-59 870.14,-59 870.14,-59 930.05,-59 930.05,-59 936.05,-59 942.05,-65 942.05,-71 942.05,-71 942.05,-83 942.05,-83 942.05,-89 936.05,-95 930.05,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"900.1\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">5. Giải phóng</text>\r\n</g>\r\n<!-- N4&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N4&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M697.41,-77C736.77,-77 802.27,-77 847.91,-77\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"847.68,-79.63 855.18,-77 847.68,-74.38 847.68,-79.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"777.64\" y=\"-79.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">phá vỡ tế bào giải phóng virus</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M83.91,-114C83.91,-114 15.75,-114 15.75,-114 9.75,-114 3.75,-108 3.75,-102 3.75,-102 3.75,-90 3.75,-90 3.75,-84 9.75,-78 15.75,-78 15.75,-78 83.91,-78 83.91,-78 89.91,-78 95.91,-84 95.91,-90 95.91,-90 95.91,-102 95.91,-102 95.91,-108 89.91,-114 83.91,-114\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"49.83\" y=\"-92.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thể thực khuẩn</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M82.41,-173C82.41,-173 17.25,-173 17.25,-173 11.25,-173 5.25,-167 5.25,-161 5.25,-161 5.25,-149 5.25,-149 5.25,-143 11.25,-137 17.25,-137 17.25,-137 82.41,-137 82.41,-137 88.41,-137 94.41,-143 94.41,-149 94.41,-149 94.41,-161 94.41,-161 94.41,-167 88.41,-173 82.41,-173\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"49.83\" y=\"-151.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">chu kì sinh tan</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M67.41,-232C67.41,-232 32.25,-232 32.25,-232 26.25,-232 20.25,-226 20.25,-220 20.25,-220 20.25,-208 20.25,-208 20.25,-202 26.25,-196 32.25,-196 32.25,-196 67.41,-196 67.41,-196 73.41,-196 79.41,-202 79.41,-208 79.41,-208 79.41,-220 79.41,-220 79.41,-226 73.41,-232 67.41,-232\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"49.83\" y=\"-210.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">hấp phụ</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M71.54,-291C71.54,-291 28.13,-291 28.13,-291 22.13,-291 16.13,-285 16.13,-279 16.13,-279 16.13,-267 16.13,-267 16.13,-261 22.13,-255 28.13,-255 28.13,-255 71.54,-255 71.54,-255 77.54,-255 83.54,-261 83.54,-267 83.54,-267 83.54,-279 83.54,-279 83.54,-285 77.54,-291 71.54,-291\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"49.83\" y=\"-269.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">xâm nhập</text>\r\n</g>\r\n<!-- N11 -->\r\n<g id=\"node11\" class=\"node\">\r\n<title>N11</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M69.66,-350C69.66,-350 30,-350 30,-350 24,-350 18,-344 18,-338 18,-338 18,-326 18,-326 18,-320 24,-314 30,-314 30,-314 69.66,-314 69.66,-314 75.66,-314 81.66,-320 81.66,-326 81.66,-326 81.66,-338 81.66,-338 81.66,-344 75.66,-350 69.66,-350\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"49.83\" y=\"-328.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tổng hợp</text>\r\n</g>\r\n<!-- N12 -->\r\n<g id=\"node12\" class=\"node\">\r\n<title>N12</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M64.83,-409C64.83,-409 34.83,-409 34.83,-409 28.83,-409 22.83,-403 22.83,-397 22.83,-397 22.83,-385 22.83,-385 22.83,-379 28.83,-373 34.83,-373 34.83,-373 64.83,-373 64.83,-373 70.83,-373 76.83,-379 76.83,-385 76.83,-385 76.83,-397 76.83,-397 76.83,-403 70.83,-409 64.83,-409\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"49.83\" y=\"-387.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">lắp ráp</text>\r\n</g>\r\n<!-- N13 -->\r\n<g id=\"node13\" class=\"node\">\r\n<title>N13</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M72.66,-468C72.66,-468 27,-468 27,-468 21,-468 15,-462 15,-456 15,-456 15,-444 15,-444 15,-438 21,-432 27,-432 27,-432 72.66,-432 72.66,-432 78.66,-432 84.66,-438 84.66,-444 84.66,-444 84.66,-456 84.66,-456 84.66,-462 78.66,-468 72.66,-468\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"49.83\" y=\"-446.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">giải phóng</text>\r\n</g>\r\n<!-- N14 -->\r\n<g id=\"node14\" class=\"node\">\r\n<title>N14</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M72.29,-527C72.29,-527 27.38,-527 27.38,-527 21.38,-527 15.38,-521 15.38,-515 15.38,-515 15.38,-503 15.38,-503 15.38,-497 21.38,-491 27.38,-491 27.38,-491 72.29,-491 72.29,-491 78.29,-491 84.29,-497 84.29,-503 84.29,-503 84.29,-515 84.29,-515 84.29,-521 78.29,-527 72.29,-527\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"49.83\" y=\"-505.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">DNA virus</text>\r\n</g>\r\n<!-- N15 -->\r\n<g id=\"node15\" class=\"node\">\r\n<title>N15</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M84.29,-586C84.29,-586 15.38,-586 15.38,-586 9.38,-586 3.38,-580 3.38,-574 3.38,-574 3.38,-562 3.38,-562 3.38,-556 9.38,-550 15.38,-550 15.38,-550 84.29,-550 84.29,-550 90.29,-550 96.29,-556 96.29,-562 96.29,-562 96.29,-574 96.29,-574 96.29,-580 90.29,-586 84.29,-586\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"49.83\" y=\"-564.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tế bào vi khuẩn</text>\r\n</g>\r\n<!-- N16 -->\r\n<g id=\"node16\" class=\"node\">\r\n<title>N16</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M87.66,-645C87.66,-645 12,-645 12,-645 6,-645 0,-639 0,-633 0,-633 0,-621 0,-621 0,-615 6,-609 12,-609 12,-609 87.66,-609 87.66,-609 93.66,-609 99.66,-615 99.66,-621 99.66,-621 99.66,-633 99.66,-633 99.66,-639 93.66,-645 87.66,-645\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"49.83\" y=\"-623.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">phân chia tế bào</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_16",
      "filename": "vn_diag_16_chu_ki_te_bao.png",
      "image_url": "vn_images/vn_diag_16_chu_ki_te_bao.png",
      "width": 690,
      "height": 709,
      "title": "Các giai đoạn trong chu kì tế bào",
      "subject": "Sinh học 10",
      "subject_key": "sinh10",
      "subject_vi": "Sinh học 10 (THPT)",
      "grade": "Khối 10",
      "subject_color": "indigo",
      "subject_icon": "fa-microscope",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương 5: Chu kì tế bào và phân bào",
      "lesson": "Bài 16: Chu kì tế bào và nguyên phân (Hình 16.1)",
      "diagram_type": "circular_cycle",
      "taxonomy_key": "life_cycle",
      "taxonomy_vi": "Vòng đời & Phân bào",
      "taxonomy_en": "Life Cycles & Cell Division",
      "taxonomy_color": "indigo",
      "taxonomy_icon": "fa-arrows-spin",
      "key_entities": [
        "chu kì tế bào",
        "kì trung gian",
        "pha G1",
        "pha S",
        "pha G2",
        "phân bào",
        "pha M",
        "kì đầu",
        "kì giữa",
        "kì sau",
        "kì cuối",
        "phân chia tế bào chất",
        "G0"
      ],
      "directional_relations": [
        {
          "source": "pha G1",
          "target": "pha S",
          "relation": "chuẩn bị nhân đôi DNA"
        },
        {
          "source": "pha S",
          "target": "pha G2",
          "relation": "nhân đôi NST tạo NST kép"
        },
        {
          "source": "pha G2",
          "target": "pha M",
          "relation": "chuẩn bị bước vào phân bào"
        },
        {
          "source": "pha M",
          "target": "pha G1",
          "relation": "tạo 2 tế bào con khép kín chu kì"
        }
      ],
      "gt_caption_vi": "Sơ đồ vòng tròn chu kì tế bào ở sinh vật nhân thực gồm hai giai đoạn chính: Kì trung gian chiếm phần lớn thời gian bao gồm pha G1 (tăng trưởng kích thước và tổng hợp bào quan), pha S (nhân đôi DNA và tạo nhiễm sắc thể kép), pha G2 (chuẩn bị phân bào); tiếp theo là pha M (phân bào nguyên phân) diễn ra qua bốn kì: kì đầu, kì giữa, kì sau, kì cuối và kết thúc bằng phân chia tế bào chất để tạo hai tế bào con mới.",
      "gt_caption_en": "The eukaryotic cell cycle circular diagram shows two major stages: Interphase occupies the majority of the cycle, divided into G1 phase (cell growth and organelle synthesis), S phase (DNA replication yielding sister chromatids), and G2 phase (mitotic preparation); followed by the M phase (mitosis) progressing through prophase, metaphase, anaphase, telophase, and concluding with cytokinesis to produce two daughter cells.",
      "generated_caption_vi": "Sơ đồ biểu diễn chu trình sinh học khép kín và tiến trình phát triển của các giai đoạn trong chu kì tế bào. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: chu kì tế bào, kì trung gian, pha G1, pha S, pha G2, phân bào, pha M cùng các cấu trúc liên quan (kì đầu, kì giữa, kì sau, kì cuối, phân chia tế bào chất). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: pha G1 chuẩn bị nhân đôi DNA pha S; pha S nhân đôi NST tạo NST kép pha G2; pha G2 chuẩn bị bước vào phân bào pha M; pha M tạo 2 tế bào con khép kín chu kì pha G1.",
      "generated_caption_en": "The diagram illustrates the stages of the cell cycle, including interphase with its sub-phases G1, S, and G2, where DNA replication occurs during the S phase, followed by mitosis (M phase) for nuclear division and cytokinesis for cytoplasmic division, ultimately leading back to G1 in daughter cells, completing the cycle.",
      "metrics_vi": {
        "bleu_1": 0.44274809160305345,
        "bleu_4": 0.078125,
        "rouge_l": 0.3288888888888889,
        "entity_recall": 0.9230769230769231,
        "dir_accuracy": 0.75
      },
      "metrics_en": {
        "cider": 14.76,
        "bertscore_f1": 87.71
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "pha G1",
            "title": "<b>pha G1</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "pha S",
            "title": "<b>pha S</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "pha G2",
            "title": "<b>pha G2</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "pha M",
            "title": "<b>pha M</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "chu kì tế bào",
            "title": "<b>chu kì tế bào</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "kì trung gian",
            "title": "<b>kì trung gian</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "phân bào",
            "title": "<b>phân bào</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "kì đầu",
            "title": "<b>kì đầu</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "kì giữa",
            "title": "<b>kì giữa</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "kì sau",
            "title": "<b>kì sau</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N11",
            "label": "kì cuối",
            "title": "<b>kì cuối</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N12",
            "label": "phân chia tế bào chất",
            "title": "<b>phân chia tế bào chất</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N13",
            "label": "G0",
            "title": "<b>G0</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "chuẩn bị nhân đôi DNA",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "nhân đôi NST tạo NST kép",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "chuẩn bị bước vào phân bào",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N1",
            "label": "tạo 2 tế bào con khép kín chu kì",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"747pt\" height=\"575pt\"\r\n viewBox=\"0.00 0.00 747.00 575.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 571)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M77.16,-36C77.16,-36 45.75,-36 45.75,-36 39.75,-36 33.75,-30 33.75,-24 33.75,-24 33.75,-12 33.75,-12 33.75,-6 39.75,0 45.75,0 45.75,0 77.16,0 77.16,0 83.16,0 89.16,-6 89.16,-12 89.16,-12 89.16,-24 89.16,-24 89.16,-30 83.16,-36 77.16,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"61.46\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">pha G1</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M295.16,-69C295.16,-69 265.16,-69 265.16,-69 259.16,-69 253.16,-63 253.16,-57 253.16,-57 253.16,-45 253.16,-45 253.16,-39 259.16,-33 265.16,-33 265.16,-33 295.16,-33 295.16,-33 301.16,-33 307.16,-39 307.16,-45 307.16,-45 307.16,-57 307.16,-57 307.16,-63 301.16,-69 295.16,-69\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"280.16\" y=\"-47.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">pha S</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M89.46,-22.11C128.22,-28.02 199.71,-38.9 242.99,-45.49\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"242.33,-48.05 250.14,-46.58 243.12,-42.86 242.33,-48.05\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"188.04\" y=\"-46.1\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">chuẩn bị nhân đôi DNA</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M519.82,-69C519.82,-69 488.41,-69 488.41,-69 482.41,-69 476.41,-63 476.41,-57 476.41,-57 476.41,-45 476.41,-45 476.41,-39 482.41,-33 488.41,-33 488.41,-33 519.82,-33 519.82,-33 525.82,-33 531.82,-39 531.82,-45 531.82,-45 531.82,-57 531.82,-57 531.82,-63 525.82,-69 519.82,-69\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"504.12\" y=\"-47.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">pha G2</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M307.49,-51C346.83,-51 421.09,-51 465.94,-51\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"465.9,-53.63 473.4,-51 465.9,-48.38 465.9,-53.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"391.79\" y=\"-53.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">nhân đôi NST tạo NST kép</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M727.32,-36C727.32,-36 697.32,-36 697.32,-36 691.32,-36 685.32,-30 685.32,-24 685.32,-24 685.32,-12 685.32,-12 685.32,-6 691.32,0 697.32,0 697.32,0 727.32,0 727.32,0 733.32,0 739.32,-6 739.32,-12 739.32,-12 739.32,-24 739.32,-24 739.32,-30 733.32,-36 727.32,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"712.32\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">pha M</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M532.07,-46.69C568.63,-40.84 634.04,-30.37 674.92,-23.82\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"675.33,-26.42 682.32,-22.64 674.5,-21.23 675.33,-26.42\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"608.57\" y=\"-46.1\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">chuẩn bị bước vào phân bào</text>\r\n</g>\r\n<!-- N4&#45;&gt;N1 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N4&#45;&gt;N1</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M684.87,-18C583.23,-18 217.59,-18 99.51,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"99.73,-15.38 92.23,-18 99.73,-20.63 99.73,-15.38\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"391.79\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">tạo 2 tế bào con khép kín chu kì</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M90.29,-95C90.29,-95 32.63,-95 32.63,-95 26.63,-95 20.63,-89 20.63,-83 20.63,-83 20.63,-71 20.63,-71 20.63,-65 26.63,-59 32.63,-59 32.63,-59 90.29,-59 90.29,-59 96.29,-59 102.29,-65 102.29,-71 102.29,-71 102.29,-83 102.29,-83 102.29,-89 96.29,-95 90.29,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"61.46\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">chu kì tế bào</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M89.16,-154C89.16,-154 33.75,-154 33.75,-154 27.75,-154 21.75,-148 21.75,-142 21.75,-142 21.75,-130 21.75,-130 21.75,-124 27.75,-118 33.75,-118 33.75,-118 89.16,-118 89.16,-118 95.16,-118 101.16,-124 101.16,-130 101.16,-130 101.16,-142 101.16,-142 101.16,-148 95.16,-154 89.16,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"61.46\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">kì trung gian</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M82.04,-213C82.04,-213 40.88,-213 40.88,-213 34.88,-213 28.88,-207 28.88,-201 28.88,-201 28.88,-189 28.88,-189 28.88,-183 34.88,-177 40.88,-177 40.88,-177 82.04,-177 82.04,-177 88.04,-177 94.04,-183 94.04,-189 94.04,-189 94.04,-201 94.04,-201 94.04,-207 88.04,-213 82.04,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"61.46\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">phân bào</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M76.46,-272C76.46,-272 46.46,-272 46.46,-272 40.46,-272 34.46,-266 34.46,-260 34.46,-260 34.46,-248 34.46,-248 34.46,-242 40.46,-236 46.46,-236 46.46,-236 76.46,-236 76.46,-236 82.46,-236 88.46,-242 88.46,-248 88.46,-248 88.46,-260 88.46,-260 88.46,-266 82.46,-272 76.46,-272\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"61.46\" y=\"-250.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">kì đầu</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M76.46,-331C76.46,-331 46.46,-331 46.46,-331 40.46,-331 34.46,-325 34.46,-319 34.46,-319 34.46,-307 34.46,-307 34.46,-301 40.46,-295 46.46,-295 46.46,-295 76.46,-295 76.46,-295 82.46,-295 88.46,-301 88.46,-307 88.46,-307 88.46,-319 88.46,-319 88.46,-325 82.46,-331 76.46,-331\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"61.46\" y=\"-309.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">kì giữa</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M76.46,-390C76.46,-390 46.46,-390 46.46,-390 40.46,-390 34.46,-384 34.46,-378 34.46,-378 34.46,-366 34.46,-366 34.46,-360 40.46,-354 46.46,-354 46.46,-354 76.46,-354 76.46,-354 82.46,-354 88.46,-360 88.46,-366 88.46,-366 88.46,-378 88.46,-378 88.46,-384 82.46,-390 76.46,-390\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"61.46\" y=\"-368.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">kì sau</text>\r\n</g>\r\n<!-- N11 -->\r\n<g id=\"node11\" class=\"node\">\r\n<title>N11</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M76.46,-449C76.46,-449 46.46,-449 46.46,-449 40.46,-449 34.46,-443 34.46,-437 34.46,-437 34.46,-425 34.46,-425 34.46,-419 40.46,-413 46.46,-413 46.46,-413 76.46,-413 76.46,-413 82.46,-413 88.46,-419 88.46,-425 88.46,-425 88.46,-437 88.46,-437 88.46,-443 82.46,-449 76.46,-449\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"61.46\" y=\"-427.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">kì cuối</text>\r\n</g>\r\n<!-- N12 -->\r\n<g id=\"node12\" class=\"node\">\r\n<title>N12</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M110.91,-508C110.91,-508 12,-508 12,-508 6,-508 0,-502 0,-496 0,-496 0,-484 0,-484 0,-478 6,-472 12,-472 12,-472 110.91,-472 110.91,-472 116.91,-472 122.91,-478 122.91,-484 122.91,-484 122.91,-496 122.91,-496 122.91,-502 116.91,-508 110.91,-508\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"61.46\" y=\"-486.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">phân chia tế bào chất</text>\r\n</g>\r\n<!-- N13 -->\r\n<g id=\"node13\" class=\"node\">\r\n<title>N13</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M76.46,-567C76.46,-567 46.46,-567 46.46,-567 40.46,-567 34.46,-561 34.46,-555 34.46,-555 34.46,-543 34.46,-543 34.46,-537 40.46,-531 46.46,-531 46.46,-531 76.46,-531 76.46,-531 82.46,-531 88.46,-537 88.46,-543 88.46,-543 88.46,-555 88.46,-555 88.46,-561 82.46,-567 76.46,-567\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"61.46\" y=\"-545.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">G0</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_17",
      "filename": "vn_diag_17_dien_bien_nguyen_phan.png",
      "image_url": "vn_images/vn_diag_17_dien_bien_nguyen_phan.png",
      "width": 1440,
      "height": 932,
      "title": "Diễn biến các kì của quá trình nguyên phân",
      "subject": "Sinh học 10",
      "subject_key": "sinh10",
      "subject_vi": "Sinh học 10 (THPT)",
      "grade": "Khối 10",
      "subject_color": "indigo",
      "subject_icon": "fa-microscope",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương 5: Chu kì tế bào và phân bào",
      "lesson": "Bài 16: Chu kì tế bào và nguyên phân (Hình 16.4)",
      "diagram_type": "sequential_phases",
      "taxonomy_key": "life_cycle",
      "taxonomy_vi": "Vòng đời & Phân bào",
      "taxonomy_en": "Life Cycles & Cell Division",
      "taxonomy_color": "indigo",
      "taxonomy_icon": "fa-arrows-spin",
      "key_entities": [
        "kì đầu",
        "kì giữa",
        "kì sau",
        "kì cuối",
        "thoi phân bào",
        "nhiễm sắc thể",
        "mặt phẳng xích đạo",
        "chromatid",
        "màng nhân",
        "hai nhân mới"
      ],
      "directional_relations": [
        {
          "source": "kì đầu",
          "target": "kì giữa",
          "relation": "NST xếp hàng tại mặt phẳng xích đạo"
        },
        {
          "source": "kì giữa",
          "target": "kì sau",
          "relation": "tách chromatid phân li về hai cực"
        },
        {
          "source": "kì sau",
          "target": "kì cuối",
          "relation": "tái tạo màng nhân và hạch nhân"
        }
      ],
      "gt_caption_vi": "Sơ đồ tiến trình mô tả bốn giai đoạn tuần tự của quá trình phân chia nhân trong nguyên phân: (a) Kì đầu: thoi phân bào bắt đầu hình thành, các nhiễm sắc thể co xoắn và màng nhân tiêu biến; (b) Kì giữa: các nhiễm sắc thể co xoắn cực đại và tập trung thành một hàng trên mặt phẳng xích đạo; (c) Kì sau: hai chromatid chị em tách nhau ở tâm động và phân li đồng đều về hai cực của tế bào; (d) Kì cuối: nhiễm sắc thể dãn xoắn, màng nhân và hạch nhân tái xuất hiện tạo thành hai nhân con mới.",
      "gt_caption_en": "The sequential process diagram illustrates the four successive phases of nuclear division in mitosis: (a) Prophase: spindle fibers assemble, chromosomes condense, and the nuclear envelope disintegrates; (b) Metaphase: maximum chromosome condensation as chromosomes align singly along the equatorial metaphase plate; (c) Anaphase: sister chromatids separate at the centromere and migrate toward opposite cell poles; (d) Telophase: chromosomes decondense, and nuclear envelopes reform around two distinct daughter nuclei.",
      "generated_caption_vi": "Sơ đồ khoa học minh họa trực quan nội dung 'Diễn biến các kì của quá trình nguyên phân'. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: kì đầu, kì giữa, kì sau, kì cuối, thoi phân bào, nhiễm sắc thể, mặt phẳng xích đạo cùng các cấu trúc liên quan (chromatid, màng nhân, hai nhân mới). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: kì đầu NST xếp hàng tại mặt phẳng xích đạo kì giữa; kì giữa tách chromatid phân li về hai cực kì sau; kì sau tái tạo màng nhân và hạch nhân kì cuối.",
      "generated_caption_en": "The diagram illustrates the phases of mitosis, labeling key stages including prophase, metaphase, anaphase, telophase, and cytokinesis. It shows the alignment of chromosomes at the equatorial plane during metaphase, their separation and movement to opposite poles during anaphase, and the reformation of nuclear membranes in telophase.",
      "metrics_vi": {
        "bleu_1": 0.5178571428571429,
        "bleu_4": 0.027522935779816515,
        "rouge_l": 0.32727272727272727,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 0.12,
        "bertscore_f1": 86.65
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "kì đầu",
            "title": "<b>kì đầu</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "kì giữa",
            "title": "<b>kì giữa</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "kì sau",
            "title": "<b>kì sau</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "kì cuối",
            "title": "<b>kì cuối</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "thoi phân bào",
            "title": "<b>thoi phân bào</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "nhiễm sắc thể",
            "title": "<b>nhiễm sắc thể</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "mặt phẳng xích đạo",
            "title": "<b>mặt phẳng xích đạo</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "chromatid",
            "title": "<b>chromatid</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "màng nhân",
            "title": "<b>màng nhân</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "hai nhân mới",
            "title": "<b>hai nhân mới</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "NST xếp hàng tại mặt phẳng xích đạo",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "tách chromatid phân li về hai cực",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "tái tạo màng nhân và hạch nhân",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"822pt\" height=\"398pt\"\r\n viewBox=\"0.00 0.00 822.00 398.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 394)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M72.33,-36C72.33,-36 42.33,-36 42.33,-36 36.33,-36 30.33,-30 30.33,-24 30.33,-24 30.33,-12 30.33,-12 30.33,-6 36.33,0 42.33,0 42.33,0 72.33,0 72.33,0 78.33,0 84.33,-6 84.33,-12 84.33,-12 84.33,-24 84.33,-24 84.33,-30 78.33,-36 72.33,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"57.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">kì đầu</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M350.66,-36C350.66,-36 320.66,-36 320.66,-36 314.66,-36 308.66,-30 308.66,-24 308.66,-24 308.66,-12 308.66,-12 308.66,-6 314.66,0 320.66,0 320.66,0 350.66,0 350.66,0 356.66,0 362.66,-6 362.66,-12 362.66,-12 362.66,-24 362.66,-24 362.66,-30 356.66,-36 350.66,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"335.66\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">kì giữa</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M84.83,-18C134.55,-18 241.91,-18 298.33,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"298.02,-20.63 305.52,-18 298.02,-15.38 298.02,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"211.66\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">NST xếp hàng tại mặt phẳng xích đạo</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M577.66,-36C577.66,-36 547.66,-36 547.66,-36 541.66,-36 535.66,-30 535.66,-24 535.66,-24 535.66,-12 535.66,-12 535.66,-6 541.66,0 547.66,0 547.66,0 577.66,0 577.66,0 583.66,0 589.66,-6 589.66,-12 589.66,-12 589.66,-24 589.66,-24 589.66,-30 583.66,-36 577.66,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"562.66\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">kì sau</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M362.91,-18C403.03,-18 479.7,-18 525.2,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"525,-20.63 532.5,-18 525,-15.38 525,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"449.16\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">tách chromatid phân li về hai cực</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M801.66,-36C801.66,-36 771.66,-36 771.66,-36 765.66,-36 759.66,-30 759.66,-24 759.66,-24 759.66,-12 759.66,-12 759.66,-6 765.66,0 771.66,0 771.66,0 801.66,0 801.66,0 807.66,0 813.66,-6 813.66,-12 813.66,-12 813.66,-24 813.66,-24 813.66,-30 807.66,-36 801.66,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"786.66\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">kì cuối</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M590,-18C629.55,-18 704.42,-18 749.2,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"749.13,-20.63 756.63,-18 749.13,-15.38 749.13,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"674.66\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">tái tạo màng nhân và hạch nhân</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M88.04,-95C88.04,-95 26.63,-95 26.63,-95 20.63,-95 14.63,-89 14.63,-83 14.63,-83 14.63,-71 14.63,-71 14.63,-65 20.63,-59 26.63,-59 26.63,-59 88.04,-59 88.04,-59 94.04,-59 100.04,-65 100.04,-71 100.04,-71 100.04,-83 100.04,-83 100.04,-89 94.04,-95 88.04,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"57.33\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thoi phân bào</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M88.79,-154C88.79,-154 25.88,-154 25.88,-154 19.88,-154 13.88,-148 13.88,-142 13.88,-142 13.88,-130 13.88,-130 13.88,-124 19.88,-118 25.88,-118 25.88,-118 88.79,-118 88.79,-118 94.79,-118 100.79,-124 100.79,-130 100.79,-130 100.79,-142 100.79,-142 100.79,-148 94.79,-154 88.79,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"57.33\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">nhiễm sắc thể</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M102.66,-213C102.66,-213 12,-213 12,-213 6,-213 0,-207 0,-201 0,-201 0,-189 0,-189 0,-183 6,-177 12,-177 12,-177 102.66,-177 102.66,-177 108.66,-177 114.66,-183 114.66,-189 114.66,-189 114.66,-201 114.66,-201 114.66,-207 108.66,-213 102.66,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"57.33\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">mặt phẳng xích đạo</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M79.04,-272C79.04,-272 35.63,-272 35.63,-272 29.63,-272 23.63,-266 23.63,-260 23.63,-260 23.63,-248 23.63,-248 23.63,-242 29.63,-236 35.63,-236 35.63,-236 79.04,-236 79.04,-236 85.04,-236 91.04,-242 91.04,-248 91.04,-248 91.04,-260 91.04,-260 91.04,-266 85.04,-272 79.04,-272\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"57.33\" y=\"-250.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">chromatid</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M82.41,-331C82.41,-331 32.25,-331 32.25,-331 26.25,-331 20.25,-325 20.25,-319 20.25,-319 20.25,-307 20.25,-307 20.25,-301 26.25,-295 32.25,-295 32.25,-295 82.41,-295 82.41,-295 88.41,-295 94.41,-301 94.41,-307 94.41,-307 94.41,-319 94.41,-319 94.41,-325 88.41,-331 82.41,-331\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"57.33\" y=\"-309.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">màng nhân</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M86.91,-390C86.91,-390 27.75,-390 27.75,-390 21.75,-390 15.75,-384 15.75,-378 15.75,-378 15.75,-366 15.75,-366 15.75,-360 21.75,-354 27.75,-354 27.75,-354 86.91,-354 86.91,-354 92.91,-354 98.91,-360 98.91,-366 98.91,-366 98.91,-378 98.91,-378 98.91,-384 92.91,-390 86.91,-390\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"57.33\" y=\"-368.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">hai nhân mới</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_18",
      "filename": "vn_diag_18_he_tuan_hoan_kep.png",
      "image_url": "vn_images/vn_diag_18_he_tuan_hoan_kep.png",
      "width": 1362,
      "height": 729,
      "title": "Hệ tuần hoàn đơn ở Cá xương và hệ tuần hoàn kép ở Thú",
      "subject": "Sinh học 11",
      "subject_key": "sinh11",
      "subject_vi": "Sinh học 11 (THPT)",
      "grade": "Khối 11",
      "subject_color": "sky",
      "subject_icon": "fa-leaf",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương 1: Trao đổi chất và chuyển hoá năng lượng",
      "lesson": "Bài 10: Tuần hoàn ở động vật (Hình 10.2)",
      "diagram_type": "comparative_flow",
      "taxonomy_key": "system_process",
      "taxonomy_vi": "Cơ chế Sinh lý & Di truyền Phân tử",
      "taxonomy_en": "Physiological & Molecular Processes",
      "taxonomy_color": "rose",
      "taxonomy_icon": "fa-gears",
      "key_entities": [
        "hệ tuần hoàn đơn",
        "hệ tuần hoàn kép",
        "cá xương",
        "thú",
        "tim",
        "tâm thất",
        "tâm nhĩ",
        "mao mạch mang",
        "mao mạch phổi",
        "vòng tuần hoàn phổi",
        "vòng tuần hoàn hệ thống",
        "áp lực máu"
      ],
      "directional_relations": [
        {
          "source": "tâm thất",
          "target": "mao mạch mang",
          "relation": "bơm máu đến mang trao đổi khí"
        },
        {
          "source": "tâm thất phải",
          "target": "mao mạch phổi",
          "relation": "vòng tuần hoàn nhỏ"
        },
        {
          "source": "tâm thất trái",
          "target": "vòng tuần hoàn hệ thống",
          "relation": "bơm máu giàu oxi đi nuôi cơ thể"
        }
      ],
      "gt_caption_vi": "Sơ đồ so sánh hai kiểu tuần hoàn kín ở động vật có xương sống: (a) Hệ tuần hoàn đơn ở cá xương chỉ có một vòng tuần hoàn duy nhất, máu từ tâm thất được bơm lên mao mạch mang để trao đổi khí rồi theo động mạch lưng đi nuôi cơ quan và trở về tâm nhĩ với áp lực trung bình; (b) Hệ tuần hoàn kép ở thú gồm hai vòng tuần hoàn riêng biệt: vòng tuần hoàn phổi bơm máu lên phổi nhận O2 và thải CO2, và vòng tuần hoàn hệ thống bơm máu từ tim đi khắp cơ thể dưới áp lực rất cao để đáp ứng nhu cầu năng lượng lớn.",
      "gt_caption_en": "The comparative diagram illustrates two closed circulatory systems in vertebrates: (a) The single circulation in bony fish features a single circuit where blood from the ventricle is pumped to gill capillaries for gas exchange and flows under moderate pressure through the dorsal aorta to bodily organs; (b) The double circulation in mammals comprises two discrete circuits: the pulmonary circuit pumping deoxygenated blood to the lungs, and the systemic circuit delivering oxygenated blood to the entire body under high pressure to support intensive metabolism.",
      "generated_caption_vi": "Sơ đồ mô tả chi tiết đặc điểm cấu tạo của hệ tuần hoàn đơn ở cá xương và hệ tuần hoàn kép ở thú trong chương trình Sinh học 11. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: hệ tuần hoàn đơn, hệ tuần hoàn kép, cá xương, thú, tim, tâm thất, tâm nhĩ cùng các cấu trúc liên quan (mao mạch mang, mao mạch phổi, vòng tuần hoàn phổi, vòng tuần hoàn hệ thống, áp lực máu). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: tâm thất bơm máu đến mang trao đổi khí mao mạch mang; tâm thất phải vòng tuần hoàn nhỏ mao mạch phổi; tâm thất trái bơm máu giàu oxi đi nuôi cơ thể vòng tuần hoàn hệ thống.",
      "generated_caption_en": "The diagram compares the single circulatory system of bony fish with the double circulatory system of mammals. In bony fish, blood is pumped from the ventricle to the gill capillaries for gas exchange, while in mammals, blood moves from the right ventricle to pulmonary capillaries via the smaller pulmonary circuit and from the left ventricle to systemic circulation, supplying oxygenated blood to the body tissues.",
      "metrics_vi": {
        "bleu_1": 0.45652173913043476,
        "bleu_4": 0.07407407407407407,
        "rouge_l": 0.28125,
        "entity_recall": 1.0,
        "dir_accuracy": 0.3333333333333333
      },
      "metrics_en": {
        "cider": 1.55,
        "bertscore_f1": 90.95
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "tâm thất",
            "title": "<b>tâm thất</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "mao mạch mang",
            "title": "<b>mao mạch mang</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "tâm thất phải",
            "title": "<b>tâm thất phải</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "mao mạch phổi",
            "title": "<b>mao mạch phổi</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "tâm thất trái",
            "title": "<b>tâm thất trái</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "vòng tuần hoàn hệ thống",
            "title": "<b>vòng tuần hoàn hệ thống</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "hệ tuần hoàn đơn",
            "title": "<b>hệ tuần hoàn đơn</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "hệ tuần hoàn kép",
            "title": "<b>hệ tuần hoàn kép</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "cá xương",
            "title": "<b>cá xương</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "thú",
            "title": "<b>thú</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N11",
            "label": "tim",
            "title": "<b>tim</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N12",
            "label": "tâm nhĩ",
            "title": "<b>tâm nhĩ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N13",
            "label": "vòng tuần hoàn phổi",
            "title": "<b>vòng tuần hoàn phổi</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N14",
            "label": "áp lực máu",
            "title": "<b>áp lực máu</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "bơm máu đến mang trao đổi khí",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "vòng tuần hoàn nhỏ",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N5",
            "to": "N6",
            "label": "bơm máu giàu oxi đi nuôi cơ thể",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"436pt\" height=\"634pt\"\r\n viewBox=\"0.00 0.00 436.00 634.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 630)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M76.41,-36C76.41,-36 41.25,-36 41.25,-36 35.25,-36 29.25,-30 29.25,-24 29.25,-24 29.25,-12 29.25,-12 29.25,-6 35.25,0 41.25,0 41.25,0 76.41,0 76.41,0 82.41,0 88.41,-6 88.41,-12 88.41,-12 88.41,-24 88.41,-24 88.41,-30 82.41,-36 76.41,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"58.83\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tâm thất</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M396.32,-36C396.32,-36 319.91,-36 319.91,-36 313.91,-36 307.91,-30 307.91,-24 307.91,-24 307.91,-12 307.91,-12 307.91,-6 313.91,0 319.91,0 319.91,0 396.32,0 396.32,0 402.32,0 408.32,-6 408.32,-12 408.32,-12 408.32,-24 408.32,-24 408.32,-30 402.32,-36 396.32,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"358.11\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">mao mạch mang</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M88.88,-18C137.07,-18 234.5,-18 297.72,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"297.34,-20.63 304.84,-18 297.34,-15.38 297.34,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"203.03\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">bơm máu đến mang trao đổi khí</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M88.03,-95C88.03,-95 29.62,-95 29.62,-95 23.62,-95 17.62,-89 17.62,-83 17.62,-83 17.62,-71 17.62,-71 17.62,-65 23.62,-59 29.62,-59 29.62,-59 88.03,-59 88.03,-59 94.03,-59 100.03,-65 100.03,-71 100.03,-71 100.03,-83 100.03,-83 100.03,-89 94.03,-95 88.03,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"58.83\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tâm thất phải</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M392.94,-95C392.94,-95 323.28,-95 323.28,-95 317.28,-95 311.28,-89 311.28,-83 311.28,-83 311.28,-71 311.28,-71 311.28,-65 317.28,-59 323.28,-59 323.28,-59 392.94,-59 392.94,-59 398.94,-59 404.94,-65 404.94,-71 404.94,-71 404.94,-83 404.94,-83 404.94,-89 398.94,-95 392.94,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"358.11\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">mao mạch phổi</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M100.23,-77C152.05,-77 242.2,-77 300.75,-77\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"300.71,-79.63 308.21,-77 300.71,-74.38 300.71,-79.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"203.03\" y=\"-79.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">vòng tuần hoàn nhỏ</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M85.41,-154C85.41,-154 32.25,-154 32.25,-154 26.25,-154 20.25,-148 20.25,-142 20.25,-142 20.25,-130 20.25,-130 20.25,-124 26.25,-118 32.25,-118 32.25,-118 85.41,-118 85.41,-118 91.41,-118 97.41,-124 97.41,-130 97.41,-130 97.41,-142 97.41,-142 97.41,-148 91.41,-154 85.41,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"58.83\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tâm thất trái</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M415.82,-154C415.82,-154 300.41,-154 300.41,-154 294.41,-154 288.41,-148 288.41,-142 288.41,-142 288.41,-130 288.41,-130 288.41,-124 294.41,-118 300.41,-118 300.41,-118 415.82,-118 415.82,-118 421.82,-118 427.82,-124 427.82,-130 427.82,-130 427.82,-142 427.82,-142 427.82,-148 421.82,-154 415.82,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"358.11\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">vòng tuần hoàn hệ thống</text>\r\n</g>\r\n<!-- N5&#45;&gt;N6 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N5&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M97.78,-136C142.99,-136 219.7,-136 278,-136\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"277.7,-138.63 285.2,-136 277.7,-133.38 277.7,-138.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"203.03\" y=\"-138.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">bơm máu giàu oxi đi nuôi cơ thể</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M99.66,-213C99.66,-213 18,-213 18,-213 12,-213 6,-207 6,-201 6,-201 6,-189 6,-189 6,-183 12,-177 18,-177 18,-177 99.66,-177 99.66,-177 105.66,-177 111.66,-183 111.66,-189 111.66,-189 111.66,-201 111.66,-201 111.66,-207 105.66,-213 99.66,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"58.83\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">hệ tuần hoàn đơn</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M98.53,-272C98.53,-272 19.12,-272 19.12,-272 13.12,-272 7.12,-266 7.12,-260 7.12,-260 7.12,-248 7.12,-248 7.12,-242 13.12,-236 19.12,-236 19.12,-236 98.53,-236 98.53,-236 104.53,-236 110.53,-242 110.53,-248 110.53,-248 110.53,-260 110.53,-260 110.53,-266 104.53,-272 98.53,-272\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"58.83\" y=\"-250.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">hệ tuần hoàn kép</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M80.16,-331C80.16,-331 37.5,-331 37.5,-331 31.5,-331 25.5,-325 25.5,-319 25.5,-319 25.5,-307 25.5,-307 25.5,-301 31.5,-295 37.5,-295 37.5,-295 80.16,-295 80.16,-295 86.16,-295 92.16,-301 92.16,-307 92.16,-307 92.16,-319 92.16,-319 92.16,-325 86.16,-331 80.16,-331\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"58.83\" y=\"-309.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">cá xương</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M73.83,-390C73.83,-390 43.83,-390 43.83,-390 37.83,-390 31.83,-384 31.83,-378 31.83,-378 31.83,-366 31.83,-366 31.83,-360 37.83,-354 43.83,-354 43.83,-354 73.83,-354 73.83,-354 79.83,-354 85.83,-360 85.83,-366 85.83,-366 85.83,-378 85.83,-378 85.83,-384 79.83,-390 73.83,-390\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"58.83\" y=\"-368.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thú</text>\r\n</g>\r\n<!-- N11 -->\r\n<g id=\"node11\" class=\"node\">\r\n<title>N11</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M73.83,-449C73.83,-449 43.83,-449 43.83,-449 37.83,-449 31.83,-443 31.83,-437 31.83,-437 31.83,-425 31.83,-425 31.83,-419 37.83,-413 43.83,-413 43.83,-413 73.83,-413 73.83,-413 79.83,-413 85.83,-419 85.83,-425 85.83,-425 85.83,-437 85.83,-437 85.83,-443 79.83,-449 73.83,-449\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"58.83\" y=\"-427.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tim</text>\r\n</g>\r\n<!-- N12 -->\r\n<g id=\"node12\" class=\"node\">\r\n<title>N12</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M74.91,-508C74.91,-508 42.75,-508 42.75,-508 36.75,-508 30.75,-502 30.75,-496 30.75,-496 30.75,-484 30.75,-484 30.75,-478 36.75,-472 42.75,-472 42.75,-472 74.91,-472 74.91,-472 80.91,-472 86.91,-478 86.91,-484 86.91,-484 86.91,-496 86.91,-496 86.91,-502 80.91,-508 74.91,-508\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"58.83\" y=\"-486.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tâm nhĩ</text>\r\n</g>\r\n<!-- N13 -->\r\n<g id=\"node13\" class=\"node\">\r\n<title>N13</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M105.66,-567C105.66,-567 12,-567 12,-567 6,-567 0,-561 0,-555 0,-555 0,-543 0,-543 0,-537 6,-531 12,-531 12,-531 105.66,-531 105.66,-531 111.66,-531 117.66,-537 117.66,-543 117.66,-543 117.66,-555 117.66,-555 117.66,-561 111.66,-567 105.66,-567\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"58.83\" y=\"-545.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">vòng tuần hoàn phổi</text>\r\n</g>\r\n<!-- N14 -->\r\n<g id=\"node14\" class=\"node\">\r\n<title>N14</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M83.91,-626C83.91,-626 33.75,-626 33.75,-626 27.75,-626 21.75,-620 21.75,-614 21.75,-614 21.75,-602 21.75,-602 21.75,-596 27.75,-590 33.75,-590 33.75,-590 83.91,-590 83.91,-590 89.91,-590 95.91,-596 95.91,-602 95.91,-602 95.91,-614 95.91,-614 95.91,-620 89.91,-626 83.91,-626\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"58.83\" y=\"-604.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">áp lực máu</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_19",
      "filename": "vn_diag_19_cau_tao_tim.png",
      "image_url": "vn_images/vn_diag_19_cau_tao_tim.png",
      "width": 687,
      "height": 654,
      "title": "Cấu tạo 4 ngăn tim và các mạch máu ở người và Thú",
      "subject": "Sinh học 11",
      "subject_key": "sinh11",
      "subject_vi": "Sinh học 11 (THPT)",
      "grade": "Khối 11",
      "subject_color": "sky",
      "subject_icon": "fa-leaf",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương 1: Trao đổi chất và chuyển hoá năng lượng",
      "lesson": "Bài 10: Tuần hoàn ở động vật (Hình 10.3)",
      "diagram_type": "anatomy_directional_flow",
      "taxonomy_key": "anatomy",
      "taxonomy_vi": "Giải phẫu & Cấu trúc Sinh học",
      "taxonomy_en": "Anatomy & Biological Structure",
      "taxonomy_color": "sky",
      "taxonomy_icon": "fa-puzzle-piece",
      "key_entities": [
        "tâm nhĩ phải",
        "tâm thất phải",
        "tâm nhĩ trái",
        "tâm thất trái",
        "động mạch chủ",
        "động mạch phổi",
        "tĩnh mạch phổi",
        "tĩnh mạch chủ",
        "van 3 lá",
        "van 2 lá",
        "van động mạch"
      ],
      "directional_relations": [
        {
          "source": "tĩnh mạch chủ",
          "target": "tâm nhĩ phải",
          "relation": "đưa máu giàu CO2 về tim"
        },
        {
          "source": "tâm nhĩ phải",
          "target": "tâm thất phải",
          "relation": "qua van 3 lá"
        },
        {
          "source": "tâm thất phải",
          "target": "động mạch phổi",
          "relation": "bơm máu lên phổi"
        },
        {
          "source": "tĩnh mạch phổi",
          "target": "tâm nhĩ trái",
          "relation": "đưa máu giàu O2 về tim"
        },
        {
          "source": "tâm nhĩ trái",
          "target": "tâm thất trái",
          "relation": "qua van 2 lá"
        },
        {
          "source": "tâm thất trái",
          "target": "động mạch chủ",
          "relation": "bơm máu đi nuôi cơ thể"
        }
      ],
      "gt_caption_vi": "Sơ đồ giải phẫu cắt dọc tim người và thú thể hiện cấu trúc bốn ngăn hoàn chỉnh và hướng luân chuyển của dòng máu: Máu nghèo oxy từ tĩnh mạch chủ đổ vào tâm nhĩ phải, đi qua van 3 lá xuống tâm thất phải rồi được tống lên động mạch phổi; ngược lại, máu giàu oxy từ phổi theo tĩnh mạch phổi về tâm nhĩ trái, qua van 2 lá xuống tâm thất trái có thành cơ dày nhất để bơm vào động mạch chủ đi khắp cơ thể, các hệ thống van tim đảm bảo máu luôn lưu thông một chiều.",
      "gt_caption_en": "The cross-sectional anatomical diagram of the mammalian heart shows its four distinct chambers and directional blood flow: Deoxygenated blood from the vena cava enters the right atrium, passes through the tricuspid valve into the right ventricle, and is pumped into the pulmonary artery; meanwhile, oxygenated blood from the pulmonary veins enters the left atrium, passes through the bicuspid (mitral) valve into the thick-walled left ventricle, and is forcefully ejected into the aorta, with heart valves ensuring unidirectional flow.",
      "generated_caption_vi": "Sơ đồ mô tả chi tiết đặc điểm cấu tạo của cấu tạo 4 ngăn tim và các mạch máu ở người và thú trong chương trình Sinh học 11. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: tâm nhĩ phải, tâm thất phải, tâm nhĩ trái, tâm thất trái, động mạch chủ, động mạch phổi, tĩnh mạch phổi cùng các cấu trúc liên quan (tĩnh mạch chủ, van 3 lá, van 2 lá, van động mạch). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: tĩnh mạch chủ đưa máu giàu CO2 về tim tâm nhĩ phải; tâm nhĩ phải qua van 3 lá tâm thất phải; tâm thất phải bơm máu lên phổi động mạch phổi; tĩnh mạch phổi đưa máu giàu O2 về tim tâm nhĩ trái; tâm nhĩ trái qua van 2 lá tâm thất trái; tâm thất trái bơm máu đi nuôi cơ thể động mạch chủ.",
      "generated_caption_en": "The diagram illustrates the four-chambered heart structure and associated blood vessels in humans and animals, showing key components such as the right atrium, right ventricle, left atrium, and left ventricle, along with major arteries and veins including the pulmonary artery, pulmonary vein, vena cava, and aorta. It also depicts the flow of blood through these structures, starting from deoxygenated blood entering the right atrium via the vena cava, passing to the right ventricle, then to the lungs for oxygenation via the pulmonary artery, returning to the left atrium via the pulmonary vein, moving to the left ventricle, and finally being pumped out to the body via the aorta.",
      "metrics_vi": {
        "bleu_1": 0.3719512195121951,
        "bleu_4": 0.031055900621118012,
        "rouge_l": 0.3283582089552239,
        "entity_recall": 1.0,
        "dir_accuracy": 0.6666666666666666
      },
      "metrics_en": {
        "cider": 0.0,
        "bertscore_f1": 88.29
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "tĩnh mạch chủ",
            "title": "<b>tĩnh mạch chủ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "tâm nhĩ phải",
            "title": "<b>tâm nhĩ phải</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "tâm thất phải",
            "title": "<b>tâm thất phải</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "động mạch phổi",
            "title": "<b>động mạch phổi</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "tĩnh mạch phổi",
            "title": "<b>tĩnh mạch phổi</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "tâm nhĩ trái",
            "title": "<b>tâm nhĩ trái</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "tâm thất trái",
            "title": "<b>tâm thất trái</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "động mạch chủ",
            "title": "<b>động mạch chủ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "van 3 lá",
            "title": "<b>van 3 lá</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "van 2 lá",
            "title": "<b>van 2 lá</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N11",
            "label": "van động mạch",
            "title": "<b>van động mạch</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "đưa máu giàu CO2 về tim",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "qua van 3 lá",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "bơm máu lên phổi",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N5",
            "to": "N6",
            "label": "đưa máu giàu O2 về tim",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N6",
            "to": "N7",
            "label": "qua van 2 lá",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N7",
            "to": "N8",
            "label": "bơm máu đi nuôi cơ thể",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"722pt\" height=\"280pt\"\r\n viewBox=\"0.00 0.00 722.00 280.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 276)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M78.66,-36C78.66,-36 15,-36 15,-36 9,-36 3,-30 3,-24 3,-24 3,-12 3,-12 3,-6 9,0 15,0 15,0 78.66,0 78.66,0 84.66,0 90.66,-6 90.66,-12 90.66,-12 90.66,-24 90.66,-24 90.66,-30 84.66,-36 78.66,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.83\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tĩnh mạch chủ</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M304.07,-36C304.07,-36 248.66,-36 248.66,-36 242.66,-36 236.66,-30 236.66,-24 236.66,-24 236.66,-12 236.66,-12 236.66,-6 242.66,0 248.66,0 248.66,0 304.07,0 304.07,0 310.07,0 316.07,-6 316.07,-12 316.07,-12 316.07,-24 316.07,-24 316.07,-30 310.07,-36 304.07,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"276.37\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tâm nhĩ phải</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M90.9,-18C129.41,-18 185.85,-18 226.14,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"226.05,-20.63 233.55,-18 226.05,-15.38 226.05,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"165.16\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">đưa máu giàu CO2 về tim</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M470.98,-36C470.98,-36 412.57,-36 412.57,-36 406.57,-36 400.57,-30 400.57,-24 400.57,-24 400.57,-12 400.57,-12 400.57,-6 406.57,0 412.57,0 412.57,0 470.98,0 470.98,0 476.98,0 482.98,-6 482.98,-12 482.98,-12 482.98,-24 482.98,-24 482.98,-30 476.98,-36 470.98,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"441.78\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tâm thất phải</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M316.51,-18C338.55,-18 366.33,-18 390.03,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"390.02,-20.63 397.52,-18 390.02,-15.38 390.02,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"358.32\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">qua van 3 lá</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M702.39,-36C702.39,-36 629.73,-36 629.73,-36 623.73,-36 617.73,-30 617.73,-24 617.73,-24 617.73,-12 617.73,-12 617.73,-6 623.73,0 629.73,0 629.73,0 702.39,0 702.39,0 708.39,0 714.39,-6 714.39,-12 714.39,-12 714.39,-24 714.39,-24 714.39,-30 708.39,-36 702.39,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"666.06\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">động mạch phổi</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M483.29,-18C518,-18 568.42,-18 607.35,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"607.27,-20.63 614.77,-18 607.27,-15.38 607.27,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"550.36\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">bơm máu lên phổi</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M80.16,-95C80.16,-95 13.5,-95 13.5,-95 7.5,-95 1.5,-89 1.5,-83 1.5,-83 1.5,-71 1.5,-71 1.5,-65 7.5,-59 13.5,-59 13.5,-59 80.16,-59 80.16,-59 86.16,-59 92.16,-65 92.16,-71 92.16,-71 92.16,-83 92.16,-83 92.16,-89 86.16,-95 80.16,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.83\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tĩnh mạch phổi</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M301.45,-95C301.45,-95 251.29,-95 251.29,-95 245.29,-95 239.29,-89 239.29,-83 239.29,-83 239.29,-71 239.29,-71 239.29,-65 245.29,-59 251.29,-59 251.29,-59 301.45,-59 301.45,-59 307.45,-59 313.45,-65 313.45,-71 313.45,-71 313.45,-83 313.45,-83 313.45,-89 307.45,-95 301.45,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"276.37\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tâm nhĩ trái</text>\r\n</g>\r\n<!-- N5&#45;&gt;N6 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N5&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M92.51,-77C131.92,-77 189.13,-77 229.03,-77\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"228.8,-79.63 236.3,-77 228.8,-74.38 228.8,-79.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"165.16\" y=\"-79.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">đưa máu giàu O2 về tim</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M468.36,-95C468.36,-95 415.2,-95 415.2,-95 409.2,-95 403.2,-89 403.2,-83 403.2,-83 403.2,-71 403.2,-71 403.2,-65 409.2,-59 415.2,-59 415.2,-59 468.36,-59 468.36,-59 474.36,-59 480.36,-65 480.36,-71 480.36,-71 480.36,-83 480.36,-83 480.36,-89 474.36,-95 468.36,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"441.78\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tâm thất trái</text>\r\n</g>\r\n<!-- N6&#45;&gt;N7 -->\r\n<g id=\"edge5\" class=\"edge\">\r\n<title>N6&#45;&gt;N7</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M313.63,-77C336.94,-77 367.47,-77 392.78,-77\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"392.68,-79.63 400.18,-77 392.68,-74.38 392.68,-79.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"358.32\" y=\"-79.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">qua van 2 lá</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M700.89,-95C700.89,-95 631.23,-95 631.23,-95 625.23,-95 619.23,-89 619.23,-83 619.23,-83 619.23,-71 619.23,-71 619.23,-65 625.23,-59 631.23,-59 631.23,-59 700.89,-59 700.89,-59 706.89,-59 712.89,-65 712.89,-71 712.89,-71 712.89,-83 712.89,-83 712.89,-89 706.89,-95 700.89,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"666.06\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">động mạch chủ</text>\r\n</g>\r\n<!-- N7&#45;&gt;N8 -->\r\n<g id=\"edge6\" class=\"edge\">\r\n<title>N7&#45;&gt;N8</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M480.73,-77C515.87,-77 568.56,-77 608.63,-77\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"608.56,-79.63 616.06,-77 608.56,-74.38 608.56,-79.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"550.36\" y=\"-79.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">bơm máu đi nuôi cơ thể</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M63.66,-154C63.66,-154 30,-154 30,-154 24,-154 18,-148 18,-142 18,-142 18,-130 18,-130 18,-124 24,-118 30,-118 30,-118 63.66,-118 63.66,-118 69.66,-118 75.66,-124 75.66,-130 75.66,-130 75.66,-142 75.66,-142 75.66,-148 69.66,-154 63.66,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.83\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">van 3 lá</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M63.66,-213C63.66,-213 30,-213 30,-213 24,-213 18,-207 18,-201 18,-201 18,-189 18,-189 18,-183 24,-177 30,-177 30,-177 63.66,-177 63.66,-177 69.66,-177 75.66,-183 75.66,-189 75.66,-189 75.66,-201 75.66,-201 75.66,-207 69.66,-213 63.66,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.83\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">van 2 lá</text>\r\n</g>\r\n<!-- N11 -->\r\n<g id=\"node11\" class=\"node\">\r\n<title>N11</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M81.66,-272C81.66,-272 12,-272 12,-272 6,-272 0,-266 0,-260 0,-260 0,-248 0,-248 0,-242 6,-236 12,-236 12,-236 81.66,-236 81.66,-236 87.66,-236 93.66,-242 93.66,-248 93.66,-248 93.66,-260 93.66,-260 93.66,-266 87.66,-272 81.66,-272\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.83\" y=\"-250.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">van động mạch</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_20",
      "filename": "vn_diag_20_synapse_hoa_hoc.png",
      "image_url": "vn_images/vn_diag_20_synapse_hoa_hoc.png",
      "width": 1306,
      "height": 681,
      "title": "Sơ đồ cấu tạo của synapse hoá học",
      "subject": "Sinh học 11",
      "subject_key": "sinh11",
      "subject_vi": "Sinh học 11 (THPT)",
      "grade": "Khối 11",
      "subject_color": "sky",
      "subject_icon": "fa-leaf",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương 2: Cảm ứng ở sinh vật",
      "lesson": "Bài 17: Cảm ứng ở động vật (Hình 17.9)",
      "diagram_type": "microscopic_structure",
      "taxonomy_key": "anatomy",
      "taxonomy_vi": "Giải phẫu & Cấu trúc Sinh học",
      "taxonomy_en": "Anatomy & Biological Structure",
      "taxonomy_color": "sky",
      "taxonomy_icon": "fa-puzzle-piece",
      "key_entities": [
        "synapse hoá học",
        "chuỳ synapse",
        "túi chứa chất trung gian",
        "acetylcholine",
        "màng trước synapse",
        "khe synapse",
        "màng sau synapse",
        "thụ thể tiếp nhận"
      ],
      "directional_relations": [
        {
          "source": "chuỳ synapse",
          "target": "khe synapse",
          "relation": "giải phóng chất trung gian qua màng trước"
        },
        {
          "source": "khe synapse",
          "target": "màng sau synapse",
          "relation": "gắn vào thụ thể đặc hiệu"
        }
      ],
      "gt_caption_vi": "Sơ đồ cấu tạo vi mô của một synapse hoá học điển hình: Phần tận cùng của sợi trục phình to thành chuỳ synapse chứa các túi nhỏ đựng chất dẫn truyền thần kinh (như acetylcholine) và ti thể; ngăn cách giữa chuỳ synapse và tế bào tiếp nhận là khe synapse chứa dịch lỏng; trên bề mặt màng sau synapse phân bố các phân tử protein thụ thể đặc hiệu để tiếp nhận chất dẫn truyền hoá học, biến đổi thành tín hiệu điện ở tế bào sau synapse.",
      "gt_caption_en": "The microscopic structural diagram depicts a typical chemical synapse: The axon terminal expands into a synaptic bulb containing synaptic vesicles loaded with neurotransmitters (such as acetylcholine) alongside mitochondria; separated by a fluid-filled synaptic cleft, the postsynaptic membrane displays specialized receptor proteins that bind released neurotransmitters to propagate electrical impulses.",
      "generated_caption_vi": "Sơ đồ khoa học minh họa trực quan nội dung 'Sơ đồ cấu tạo của synapse hoá học'. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: synapse hoá học, chuỳ synapse, túi chứa chất trung gian, acetylcholine, màng trước synapse, khe synapse, màng sau synapse cùng các cấu trúc liên quan (thụ thể tiếp nhận). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: chuỳ synapse giải phóng chất trung gian qua màng trước khe synapse; khe synapse gắn vào thụ thể đặc hiệu màng sau synapse.",
      "generated_caption_en": "The diagram illustrates the structure of a chemical synapse, showing key components such as the synaptic knob releasing vesicles containing neurotransmitters like acetylcholine across the synaptic cleft towards the postsynaptic membrane where specific receptors bind these molecules. The process demonstrates how neurotransmitter-containing vesicles at the presynaptic membrane release their contents into the synaptic gap, which then interact with receptors on the postsynaptic side.",
      "metrics_vi": {
        "bleu_1": 0.41414141414141414,
        "bleu_4": 0.020833333333333332,
        "rouge_l": 0.30687830687830686,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 5.95,
        "bertscore_f1": 89.47
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "chuỳ synapse",
            "title": "<b>chuỳ synapse</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "khe synapse",
            "title": "<b>khe synapse</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "màng sau synapse",
            "title": "<b>màng sau synapse</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "synapse hoá học",
            "title": "<b>synapse hoá học</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "túi chứa chất trung gian",
            "title": "<b>túi chứa chất trung gian</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "acetylcholine",
            "title": "<b>acetylcholine</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "màng trước synapse",
            "title": "<b>màng trước synapse</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "thụ thể tiếp nhận",
            "title": "<b>thụ thể tiếp nhận</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "giải phóng chất trung gian qua màng trước",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "gắn vào thụ thể đặc hiệu",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"684pt\" height=\"339pt\"\r\n viewBox=\"0.00 0.00 684.00 339.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 335)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M97.41,-36C97.41,-36 36,-36 36,-36 30,-36 24,-30 24,-24 24,-24 24,-12 24,-12 24,-6 30,0 36,0 36,0 97.41,0 97.41,0 103.41,0 109.41,-6 109.41,-12 109.41,-12 109.41,-24 109.41,-24 109.41,-30 103.41,-36 97.41,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"66.71\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">chuỳ synapse</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M415.82,-36C415.82,-36 359.66,-36 359.66,-36 353.66,-36 347.66,-30 347.66,-24 347.66,-24 347.66,-12 347.66,-12 347.66,-6 353.66,0 359.66,0 359.66,0 415.82,0 415.82,0 421.82,0 427.82,-6 427.82,-12 427.82,-12 427.82,-24 427.82,-24 427.82,-30 421.82,-36 415.82,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"387.74\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">khe synapse</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M109.74,-18C168.56,-18 275.21,-18 337.62,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"337.39,-20.63 344.89,-18 337.39,-15.38 337.39,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"240.54\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">giải phóng chất trung gian qua màng trước</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M663.73,-36C663.73,-36 577.57,-36 577.57,-36 571.57,-36 565.57,-30 565.57,-24 565.57,-24 565.57,-12 565.57,-12 565.57,-6 571.57,0 577.57,0 577.57,0 663.73,0 663.73,0 669.73,0 675.73,-6 675.73,-12 675.73,-12 675.73,-24 675.73,-24 675.73,-30 669.73,-36 663.73,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"620.65\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">màng sau synapse</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M428.17,-18C462.97,-18 514.34,-18 555.12,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"555.01,-20.63 562.51,-18 555.01,-15.38 555.01,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"496.7\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">gắn vào thụ thể đặc hiệu</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M105.29,-95C105.29,-95 28.13,-95 28.13,-95 22.13,-95 16.13,-89 16.13,-83 16.13,-83 16.13,-71 16.13,-71 16.13,-65 22.13,-59 28.13,-59 28.13,-59 105.29,-59 105.29,-59 111.29,-59 117.29,-65 117.29,-71 117.29,-71 117.29,-83 117.29,-83 117.29,-89 111.29,-95 105.29,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"66.71\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">synapse hoá học</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M121.41,-154C121.41,-154 12,-154 12,-154 6,-154 0,-148 0,-142 0,-142 0,-130 0,-130 0,-124 6,-118 12,-118 12,-118 121.41,-118 121.41,-118 127.41,-118 133.41,-124 133.41,-130 133.41,-130 133.41,-142 133.41,-142 133.41,-148 127.41,-154 121.41,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"66.71\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">túi chứa chất trung gian</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M95.54,-213C95.54,-213 37.88,-213 37.88,-213 31.88,-213 25.88,-207 25.88,-201 25.88,-201 25.88,-189 25.88,-189 25.88,-183 31.88,-177 37.88,-177 37.88,-177 95.54,-177 95.54,-177 101.54,-177 107.54,-183 107.54,-189 107.54,-189 107.54,-201 107.54,-201 107.54,-207 101.54,-213 95.54,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"66.71\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">acetylcholine</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M114.66,-272C114.66,-272 18.75,-272 18.75,-272 12.75,-272 6.75,-266 6.75,-260 6.75,-260 6.75,-248 6.75,-248 6.75,-242 12.75,-236 18.75,-236 18.75,-236 114.66,-236 114.66,-236 120.66,-236 126.66,-242 126.66,-248 126.66,-248 126.66,-260 126.66,-260 126.66,-266 120.66,-272 114.66,-272\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"66.71\" y=\"-250.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">màng trước synapse</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M104.91,-331C104.91,-331 28.5,-331 28.5,-331 22.5,-331 16.5,-325 16.5,-319 16.5,-319 16.5,-307 16.5,-307 16.5,-301 22.5,-295 28.5,-295 28.5,-295 104.91,-295 104.91,-295 110.91,-295 116.91,-301 116.91,-307 116.91,-307 116.91,-319 116.91,-319 116.91,-325 110.91,-331 104.91,-331\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"66.71\" y=\"-309.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thụ thể tiếp nhận</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_21",
      "filename": "vn_diag_21_ruot_non_long_ruot.png",
      "image_url": "vn_images/vn_diag_21_ruot_non_long_ruot.png",
      "width": 1423,
      "height": 876,
      "title": "Cấu tạo nếp gấp ruột non, lông ruột và tế bào niêm mạc",
      "subject": "Sinh học 11",
      "subject_key": "sinh11",
      "subject_vi": "Sinh học 11 (THPT)",
      "grade": "Khối 11",
      "subject_color": "sky",
      "subject_icon": "fa-leaf",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương 1: Trao đổi chất và chuyển hoá năng lượng",
      "lesson": "Bài 8: Dinh dưỡng và tiêu hoá ở động vật (Hình 8.5)",
      "diagram_type": "anatomical_magnification",
      "taxonomy_key": "anatomy",
      "taxonomy_vi": "Giải phẫu & Cấu trúc Sinh học",
      "taxonomy_en": "Anatomy & Biological Structure",
      "taxonomy_color": "sky",
      "taxonomy_icon": "fa-puzzle-piece",
      "key_entities": [
        "ruột non",
        "nếp gấp ruột",
        "lông ruột",
        "mạch máu",
        "mao mạch bạch huyết",
        "tế bào niêm mạc ruột",
        "vi nhung mao"
      ],
      "directional_relations": [
        {
          "source": "nếp gấp ruột",
          "target": "lông ruột",
          "relation": "phóng to cấu trúc vi mô"
        },
        {
          "source": "lông ruột",
          "target": "tế bào niêm mạc ruột",
          "relation": "phóng to bề mặt biểu mô"
        },
        {
          "source": "tế bào niêm mạc ruột",
          "target": "vi nhung mao",
          "relation": "cấu trúc hấp thụ cực nhỏ"
        }
      ],
      "gt_caption_vi": "Sơ đồ các mức độ phóng đại cấu trúc niêm mạc ruột non giúp tối ưu hoá bề mặt hấp thụ dinh dưỡng: Thành ruột non có các nếp gấp ruột cuộn lại; trên các nếp gấp mọc dày đặc hàng triệu lông ruột chứa mạng lưới mao mạch máu và mao mạch bạch huyết; trên bề mặt mỗi tế bào niêm mạc ruột lại có vô số vi nhung mao siêu nhỏ, làm gia tăng diện tích tiếp xúc hấp thụ của ruột non lên tới hàng trăm mét vuông.",
      "gt_caption_en": "The hierarchical magnification diagram illustrates the structural adaptation of the small intestine for nutrient absorption: The intestinal wall features folded circular plicae; densely covering these folds are millions of villi supplied with blood capillaries and central lacteals; each intestinal epithelial cell further develops microscopic microvilli on its apical surface, expanding the total absorptive surface area to hundreds of square meters.",
      "generated_caption_vi": "Sơ đồ khoa học minh họa trực quan nội dung 'Cấu tạo nếp gấp ruột non, lông ruột và tế bào niêm mạc'. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: ruột non, nếp gấp ruột, lông ruột, mạch máu, mao mạch bạch huyết, tế bào niêm mạc ruột, vi nhung mao cùng các cấu trúc liên quan (). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: nếp gấp ruột phóng to cấu trúc vi mô lông ruột; lông ruột phóng to bề mặt biểu mô tế bào niêm mạc ruột; tế bào niêm mạc ruột cấu trúc hấp thụ cực nhỏ vi nhung mao.",
      "generated_caption_en": "The diagram illustrates the microscopic structure of the small intestine, showing the folds of the intestinal wall, villi, and microvilli. It demonstrates how the folds increase the surface area for absorption, leading to the villi which contain blood vessels and lymphatic capillaries, and further magnifies to reveal the intestinal mucosa cells and the even finer microvilli that enhance nutrient uptake.",
      "metrics_vi": {
        "bleu_1": 0.38461538461538464,
        "bleu_4": 0.02631578947368421,
        "rouge_l": 0.27884615384615385,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 85.68,
        "bertscore_f1": 89.57
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "nếp gấp ruột",
            "title": "<b>nếp gấp ruột</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "lông ruột",
            "title": "<b>lông ruột</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "tế bào niêm mạc ruột",
            "title": "<b>tế bào niêm mạc ruột</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "vi nhung mao",
            "title": "<b>vi nhung mao</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "ruột non",
            "title": "<b>ruột non</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "mạch máu",
            "title": "<b>mạch máu</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "mao mạch bạch huyết",
            "title": "<b>mao mạch bạch huyết</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "phóng to cấu trúc vi mô",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "phóng to bề mặt biểu mô",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "cấu trúc hấp thụ cực nhỏ",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"812pt\" height=\"221pt\"\r\n viewBox=\"0.00 0.00 812.00 221.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 217)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M91.41,-36C91.41,-36 34.5,-36 34.5,-36 28.5,-36 22.5,-30 22.5,-24 22.5,-24 22.5,-12 22.5,-12 22.5,-6 28.5,0 34.5,0 34.5,0 91.41,0 91.41,0 97.41,0 103.41,-6 103.41,-12 103.41,-12 103.41,-24 103.41,-24 103.41,-30 97.41,-36 91.41,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"62.96\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">nếp gấp ruột</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M308.57,-36C308.57,-36 270.41,-36 270.41,-36 264.41,-36 258.41,-30 258.41,-24 258.41,-24 258.41,-12 258.41,-12 258.41,-6 264.41,0 270.41,0 270.41,0 308.57,0 308.57,0 314.57,0 320.57,-6 320.57,-12 320.57,-12 320.57,-24 320.57,-24 320.57,-30 314.57,-36 308.57,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"289.49\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">lông ruột</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M103.84,-18C144.41,-18 206.98,-18 247.83,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"247.75,-20.63 255.25,-18 247.75,-15.38 247.75,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"192.16\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">phóng to cấu trúc vi mô</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M569.98,-36C569.98,-36 472.57,-36 472.57,-36 466.57,-36 460.57,-30 460.57,-24 460.57,-24 460.57,-12 460.57,-12 460.57,-6 466.57,0 472.57,0 472.57,0 569.98,0 569.98,0 575.98,0 581.98,-6 581.98,-12 581.98,-12 581.98,-24 581.98,-24 581.98,-30 575.98,-36 569.98,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"521.27\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tế bào niêm mạc ruột</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M321,-18C353.78,-18 406.97,-18 450.16,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"450.12,-20.63 457.62,-18 450.12,-15.38 450.12,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"390.57\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">phóng to bề mặt biểu mô</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M792.39,-36C792.39,-36 731.73,-36 731.73,-36 725.73,-36 719.73,-30 719.73,-24 719.73,-24 719.73,-12 719.73,-12 719.73,-6 725.73,0 731.73,0 731.73,0 792.39,0 792.39,0 798.39,0 804.39,-6 804.39,-12 804.39,-12 804.39,-24 804.39,-24 804.39,-30 798.39,-36 792.39,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"762.06\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">vi nhung mao</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M582.22,-18C621.37,-18 671.96,-18 709.34,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"709.29,-20.63 716.79,-18 709.29,-15.38 709.29,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"650.86\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">cấu trúc hấp thụ cực nhỏ</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M80.91,-95C80.91,-95 45,-95 45,-95 39,-95 33,-89 33,-83 33,-83 33,-71 33,-71 33,-65 39,-59 45,-59 45,-59 80.91,-59 80.91,-59 86.91,-59 92.91,-65 92.91,-71 92.91,-71 92.91,-83 92.91,-83 92.91,-89 86.91,-95 80.91,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"62.96\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ruột non</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M86.16,-154C86.16,-154 39.75,-154 39.75,-154 33.75,-154 27.75,-148 27.75,-142 27.75,-142 27.75,-130 27.75,-130 27.75,-124 33.75,-118 39.75,-118 39.75,-118 86.16,-118 86.16,-118 92.16,-118 98.16,-124 98.16,-130 98.16,-130 98.16,-142 98.16,-142 98.16,-148 92.16,-154 86.16,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"62.96\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">mạch máu</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M113.91,-213C113.91,-213 12,-213 12,-213 6,-213 0,-207 0,-201 0,-201 0,-189 0,-189 0,-183 6,-177 12,-177 12,-177 113.91,-177 113.91,-177 119.91,-177 125.91,-183 125.91,-189 125.91,-189 125.91,-201 125.91,-201 125.91,-207 119.91,-213 113.91,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"62.96\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">mao mạch bạch huyết</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_22",
      "filename": "vn_diag_22_cau_truc_dna_watson_crick.png",
      "image_url": "vn_images/vn_diag_22_cau_truc_dna_watson_crick.png",
      "width": 1139,
      "height": 951,
      "title": "Mô hình cấu trúc không gian phân tử DNA theo Watson và Crick",
      "subject": "Sinh học 12",
      "subject_key": "sinh12",
      "subject_vi": "Sinh học 12 (THPT)",
      "grade": "Khối 12",
      "subject_color": "blue",
      "subject_icon": "fa-helix",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương I: Di truyền phân tử",
      "lesson": "Bài 1: DNA và cơ chế tái bản DNA (Hình 1.1)",
      "diagram_type": "molecular_structure",
      "taxonomy_key": "anatomy",
      "taxonomy_vi": "Giải phẫu & Cấu trúc Sinh học",
      "taxonomy_en": "Anatomy & Biological Structure",
      "taxonomy_color": "sky",
      "taxonomy_icon": "fa-puzzle-piece",
      "key_entities": [
        "phân tử DNA",
        "chuỗi xoắn kép",
        "nhóm phosphate",
        "đường deoxyribose",
        "adenine",
        "thymine",
        "guanine",
        "cytosine",
        "nguyên tắc bổ sung",
        "5' đến 3'",
        "3' đến 5'"
      ],
      "directional_relations": [],
      "gt_caption_vi": "Sơ đồ mô hình cấu trúc phân tử DNA theo Watson và Crick: DNA gồm hai mạch polynucleotide xoắn đều quanh một trục tưởng tượng theo chiều từ trái sang phải tạo chuỗi xoắn kép có đường kính 2 nm và chu kì xoắn 3.4 nm (gồm 10 cặp nucleotide); khung xương bên ngoài cấu tạo từ các phân tử đường deoxyribose liên kết với nhóm phosphate; các base nitơ quay vào trong liên kết theo nguyên tắc bổ sung A liên kết với T bằng 2 liên kết hydro, G liên kết với C bằng 3 liên kết hydro, và hai mạch chạy song song ngược chiều nhau (5'-3' và 3'-5').",
      "gt_caption_en": "The molecular model diagram of DNA proposed by Watson and Crick depicts a right-handed double helix with a 2 nm diameter and a 3.4 nm helical pitch containing 10 base pairs per turn: The alternating sugar-phosphate backbone lines the exterior, while inward-projecting nitrogenous bases pair complementary via hydrogen bonds (A pairs with T through 2 bonds; G pairs with C through 3 bonds), with the two polynucleotide strands running antiparallel in 5'-to-3' and 3'-to-5' orientations.",
      "generated_caption_vi": "Sơ đồ khoa học minh họa trực quan nội dung 'Mô hình cấu trúc không gian phân tử DNA theo Watson và Crick'. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: phân tử DNA, chuỗi xoắn kép, nhóm phosphate, đường deoxyribose, adenine, thymine, guanine cùng các cấu trúc liên quan (cytosine, nguyên tắc bổ sung, 5' đến 3', 3' đến 5'). Các chi tiết cấu tạo được liên kết chặt chẽ theo trật tự không gian và phân cấp chức năng sinh học.",
      "generated_caption_en": "The diagram illustrates the spatial structure of the DNA molecule as proposed by Watson and Crick, showing it as a double helix composed of two complementary strands. Key components include the phosphate groups, deoxyribose sugars, and the nitrogenous bases adenine, thymine, guanine, and cytosine, arranged according to the base-pairing rule where adenine pairs with thymine and guanine with cytosine, with the directionality indicated from 5' to 3' and 3' to 5'.",
      "metrics_vi": {
        "bleu_1": 0.46153846153846156,
        "bleu_4": 0.06818181818181818,
        "rouge_l": 0.2815533980582524,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 64.74,
        "bertscore_f1": 86.61
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "Mô hình cấu trúc không gian phân tử DNA theo Watson và Crick",
            "title": "<b>Mô hình cấu trúc không gian phân tử DNA theo Watson và Crick</b><br>Vai trò: Chủ đề trung tâm",
            "kind": "hub",
            "color": {
              "background": "#fef3c7",
              "border": "#d97706",
              "highlight": "#fde68a"
            },
            "shape": "ellipse"
          },
          {
            "id": "N2",
            "label": "phân tử DNA",
            "title": "<b>phân tử DNA</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "chuỗi xoắn kép",
            "title": "<b>chuỗi xoắn kép</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "nhóm phosphate",
            "title": "<b>nhóm phosphate</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "đường deoxyribose",
            "title": "<b>đường deoxyribose</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "adenine",
            "title": "<b>adenine</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "thymine",
            "title": "<b>thymine</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "guanine",
            "title": "<b>guanine</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "cytosine",
            "title": "<b>cytosine</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "nguyên tắc bổ sung",
            "title": "<b>nguyên tắc bổ sung</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N11",
            "label": "5' đến 3'",
            "title": "<b>5' đến 3'</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N12",
            "label": "3' đến 5'",
            "title": "<b>3' đến 5'</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N3",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N4",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N5",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N6",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N7",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N8",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N9",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N10",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N11",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          },
          {
            "from": "N1",
            "to": "N12",
            "label": "cấu tạo gồm",
            "type": "label",
            "color": {
              "color": "#2563eb",
              "highlight": "#1d4ed8"
            },
            "dashes": true,
            "arrows": "to",
            "width": 1.6
          }
        ]
      },
      "graphviz_svg": "<svg width=\"1098pt\" height=\"123pt\"\r\n viewBox=\"0.00 0.00 1098.00 123.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 119.25)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<ellipse fill=\"#fef3c7\" stroke=\"#d97706\" cx=\"592.33\" cy=\"-97.25\" rx=\"227.86\" ry=\"18\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"592.33\" y=\"-93.55\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#78350f\">Mô hình cấu trúc không gian phân tử DNA theo Watson và Crick</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M72.66,-36C72.66,-36 12,-36 12,-36 6,-36 0,-30 0,-24 0,-24 0,-12 0,-12 0,-6 6,0 12,0 12,0 72.66,0 72.66,0 78.66,0 84.66,-6 84.66,-12 84.66,-12 84.66,-24 84.66,-24 84.66,-30 78.66,-36 72.66,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"42.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">phân tử DNA</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M400.22,-87.28C335.08,-82.38 262.12,-74.83 196.08,-63.25 161.37,-57.16 123.3,-46.24 93.73,-36.77\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"94.65,-34.31 86.7,-34.49 93.03,-39.3 94.65,-34.31\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"222.7\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M187.41,-36C187.41,-36 119.25,-36 119.25,-36 113.25,-36 107.25,-30 107.25,-24 107.25,-24 107.25,-12 107.25,-12 107.25,-6 113.25,0 119.25,0 119.25,0 187.41,0 187.41,0 193.41,0 199.41,-6 199.41,-12 199.41,-12 199.41,-24 199.41,-24 199.41,-30 193.41,-36 187.41,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"153.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">chuỗi xoắn kép</text>\r\n</g>\r\n<!-- N1&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N1&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M434.74,-83.87C390.58,-78.95 342.73,-72.25 299.08,-63.25 268.71,-56.99 235.59,-47.18 208.61,-38.39\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"209.52,-35.92 201.57,-36.07 207.87,-40.91 209.52,-35.92\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"325.7\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M310.53,-36C310.53,-36 234.12,-36 234.12,-36 228.12,-36 222.12,-30 222.12,-24 222.12,-24 222.12,-12 222.12,-12 222.12,-6 228.12,0 234.12,0 234.12,0 310.53,0 310.53,0 316.53,0 322.53,-6 322.53,-12 322.53,-12 322.53,-24 322.53,-24 322.53,-30 316.53,-36 310.53,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"272.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">nhóm phosphate</text>\r\n</g>\r\n<!-- N1&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N1&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M477.1,-81.3C448.75,-76.54 418.63,-70.57 391.08,-63.25 367.92,-57.1 342.96,-48.17 321.94,-39.94\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"322.95,-37.52 315.01,-37.19 321.02,-42.4 322.95,-37.52\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"417.7\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M447.28,-36C447.28,-36 357.38,-36 357.38,-36 351.38,-36 345.38,-30 345.38,-24 345.38,-24 345.38,-12 345.38,-12 345.38,-6 351.38,0 357.38,0 357.38,0 447.28,0 447.28,0 453.28,0 459.28,-6 459.28,-12 459.28,-12 459.28,-24 459.28,-24 459.28,-30 453.28,-36 447.28,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"402.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">đường deoxyribose</text>\r\n</g>\r\n<!-- N1&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N1&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M514.72,-79.9C498.94,-75.41 482.71,-69.89 468.08,-63.25 455.48,-57.53 442.63,-49.47 431.67,-41.8\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"433.27,-39.72 425.65,-37.47 430.21,-43.98 433.27,-39.72\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"494.7\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M528.53,-36C528.53,-36 494.12,-36 494.12,-36 488.12,-36 482.12,-30 482.12,-24 482.12,-24 482.12,-12 482.12,-12 482.12,-6 488.12,0 494.12,0 494.12,0 528.53,0 528.53,0 534.53,0 540.53,-6 540.53,-12 540.53,-12 540.53,-24 540.53,-24 540.53,-30 534.53,-36 528.53,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"511.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">adenine</text>\r\n</g>\r\n<!-- N1&#45;&gt;N6 -->\r\n<g id=\"edge5\" class=\"edge\">\r\n<title>N1&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M554.6,-79.15C547.22,-74.68 539.96,-69.37 534.08,-63.25 528.95,-57.91 524.7,-51.17 521.32,-44.59\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"523.9,-43.89 518.34,-38.21 519.14,-46.12 523.9,-43.89\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"560.7\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M609.16,-36C609.16,-36 575.5,-36 575.5,-36 569.5,-36 563.5,-30 563.5,-24 563.5,-24 563.5,-12 563.5,-12 563.5,-6 569.5,0 575.5,0 575.5,0 609.16,0 609.16,0 615.16,0 621.16,-6 621.16,-12 621.16,-12 621.16,-24 621.16,-24 621.16,-30 615.16,-36 609.16,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"592.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thymine</text>\r\n</g>\r\n<!-- N1&#45;&gt;N7 -->\r\n<g id=\"edge6\" class=\"edge\">\r\n<title>N1&#45;&gt;N7</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M592.16,-79.02C592.09,-70.83 592.05,-60.91 592.08,-52 592.09,-49.95 592.1,-47.83 592.11,-45.7\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"594.73,-45.95 592.16,-38.44 589.48,-45.92 594.73,-45.95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"618.7\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M690.53,-36C690.53,-36 656.12,-36 656.12,-36 650.12,-36 644.12,-30 644.12,-24 644.12,-24 644.12,-12 644.12,-12 644.12,-6 650.12,0 656.12,0 656.12,0 690.53,0 690.53,0 696.53,0 702.53,-6 702.53,-12 702.53,-12 702.53,-24 702.53,-24 702.53,-30 696.53,-36 690.53,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"673.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">guanine</text>\r\n</g>\r\n<!-- N1&#45;&gt;N8 -->\r\n<g id=\"edge7\" class=\"edge\">\r\n<title>N1&#45;&gt;N8</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M626.12,-79.01C633.27,-74.46 640.43,-69.16 646.33,-63.25 651.79,-57.79 656.62,-51.02 660.63,-44.43\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"662.86,-45.82 664.29,-38.01 658.3,-43.23 662.86,-45.82\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"682.02\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M772.91,-36C772.91,-36 737.75,-36 737.75,-36 731.75,-36 725.75,-30 725.75,-24 725.75,-24 725.75,-12 725.75,-12 725.75,-6 731.75,0 737.75,0 737.75,0 772.91,0 772.91,0 778.91,0 784.91,-6 784.91,-12 784.91,-12 784.91,-24 784.91,-24 784.91,-30 778.91,-36 772.91,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"755.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">cytosine</text>\r\n</g>\r\n<!-- N1&#45;&gt;N9 -->\r\n<g id=\"edge8\" class=\"edge\">\r\n<title>N1&#45;&gt;N9</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M675.51,-80.05C688.67,-75.69 701.74,-70.18 713.33,-63.25 721.92,-58.11 729.89,-50.74 736.53,-43.48\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"738.49,-45.22 741.41,-37.83 734.52,-41.79 738.49,-45.22\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"754.5\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M910.28,-36C910.28,-36 820.37,-36 820.37,-36 814.37,-36 808.37,-30 808.37,-24 808.37,-24 808.37,-12 808.37,-12 808.37,-6 814.37,0 820.37,0 820.37,0 910.28,0 910.28,0 916.28,0 922.28,-6 922.28,-12 922.28,-12 922.28,-24 922.28,-24 922.28,-30 916.28,-36 910.28,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"865.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">nguyên tắc bổ sung</text>\r\n</g>\r\n<!-- N1&#45;&gt;N10 -->\r\n<g id=\"edge9\" class=\"edge\">\r\n<title>N1&#45;&gt;N10</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M716.07,-81.72C739.76,-77.12 764.1,-71.1 786.33,-63.25 802.07,-57.69 818.34,-49.13 831.99,-41.02\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"832.99,-43.49 838.03,-37.34 830.26,-39 832.99,-43.49\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"837.98\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N11 -->\r\n<g id=\"node11\" class=\"node\">\r\n<title>N11</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M993.66,-36C993.66,-36 957,-36 957,-36 951,-36 945,-30 945,-24 945,-24 945,-12 945,-12 945,-6 951,0 957,0 957,0 993.66,0 993.66,0 999.66,0 1005.66,-6 1005.66,-12 1005.66,-12 1005.66,-24 1005.66,-24 1005.66,-30 999.66,-36 993.66,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"975.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">5&#39; đến 3&#39;</text>\r\n</g>\r\n<!-- N1&#45;&gt;N11 -->\r\n<g id=\"edge10\" class=\"edge\">\r\n<title>N1&#45;&gt;N11</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M755.96,-84.36C793.58,-79.54 833.15,-72.76 869.33,-63.25 892.18,-57.24 916.58,-47.32 936.2,-38.39\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"937.1,-40.87 942.8,-35.34 934.89,-36.11 937.1,-40.87\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"928.91\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n<!-- N12 -->\r\n<g id=\"node12\" class=\"node\">\r\n<title>N12</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1077.66,-36C1077.66,-36 1041,-36 1041,-36 1035,-36 1029,-30 1029,-24 1029,-24 1029,-12 1029,-12 1029,-6 1035,0 1041,0 1041,0 1077.66,0 1077.66,0 1083.66,0 1089.66,-6 1089.66,-12 1089.66,-12 1089.66,-24 1089.66,-24 1089.66,-30 1083.66,-36 1077.66,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1059.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">3&#39; đến 5&#39;</text>\r\n</g>\r\n<!-- N1&#45;&gt;N12 -->\r\n<g id=\"edge11\" class=\"edge\">\r\n<title>N1&#45;&gt;N12</title>\r\n<path fill=\"none\" stroke=\"#2563eb\" stroke-width=\"1.3\" stroke-dasharray=\"5,2\" d=\"M800.22,-89.66C853.04,-84.71 909.28,-76.55 960.33,-63.25 980.84,-57.91 1002.46,-48.71 1020.24,-40.07\"/>\r\n<polygon fill=\"#2563eb\" stroke=\"#2563eb\" stroke-width=\"1.3\" points=\"1021.33,-42.46 1026.88,-36.78 1018.99,-37.76 1021.33,-42.46\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1017.95\" y=\"-54.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#1d4ed8\">cấu tạo gồm</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_23",
      "filename": "vn_diag_23_chuoi_thuc_an_khoi_dau.png",
      "image_url": "vn_images/vn_diag_23_chuoi_thuc_an_khoi_dau.png",
      "width": 1334,
      "height": 601,
      "title": "Các loại chuỗi thức ăn trong hệ sinh thái",
      "subject": "Sinh học 12",
      "subject_key": "sinh12",
      "subject_vi": "Sinh học 12 (THPT)",
      "grade": "Khối 12",
      "subject_color": "blue",
      "subject_icon": "fa-helix",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương VII: Sinh thái học quần xã",
      "lesson": "Bài 29: Trao đổi vật chất và năng lượng trong hệ sinh thái (Hình 29.2)",
      "diagram_type": "trophic_chain_linear",
      "taxonomy_key": "food_web",
      "taxonomy_vi": "Chuỗi, Lưới thức ăn & Sinh thái",
      "taxonomy_en": "Food Webs & Ecological Pyramids",
      "taxonomy_color": "emerald",
      "taxonomy_icon": "fa-leaf",
      "key_entities": [
        "chuỗi thức ăn",
        "sinh vật sản xuất",
        "cỏ",
        "thỏ",
        "rắn",
        "đại bàng",
        "sinh vật ăn mùn bã",
        "giun đất",
        "gà",
        "cáo",
        "hổ"
      ],
      "directional_relations": [
        {
          "source": "Cỏ",
          "target": "Thỏ",
          "relation": "thức ăn cho"
        },
        {
          "source": "Thỏ",
          "target": "Rắn",
          "relation": "thức ăn cho"
        },
        {
          "source": "Rắn",
          "target": "Đại bàng",
          "relation": "thức ăn cho"
        },
        {
          "source": "Giun đất",
          "target": "Gà",
          "relation": "thức ăn cho"
        },
        {
          "source": "Gà",
          "target": "Cáo",
          "relation": "thức ăn cho"
        },
        {
          "source": "Cáo",
          "target": "Hổ",
          "relation": "thức ăn cho"
        }
      ],
      "gt_caption_vi": "Sơ đồ biểu diễn hai loại chuỗi thức ăn cơ bản trong quần xã sinh vật theo chiều mũi tên truyền năng lượng dinh dưỡng: (a) Chuỗi thức ăn khởi đầu bằng sinh vật tự dưỡng sản xuất: Cỏ $\\to$ Thỏ (động vật ăn thực vật) $\\to$ Rắn (động vật ăn thịt bậc 1) $\\to$ Đại bàng (động vật ăn thịt đỉnh chuỗi); (b) Chuỗi thức ăn khởi đầu bằng sinh vật ăn mùn bã hữu cơ: Giun đất phân giải xác hữu cơ $\\to$ Gà $\\to$ Cáo $\\to$ Hổ.",
      "gt_caption_en": "The ecological diagram illustrates two fundamental types of food chains along directional energy transfer arrows: (a) A grazing food chain initiating with primary producers: Grass $\\to$ Rabbit (primary consumer) $\\to$ Snake (secondary consumer) $\\to$ Eagle (tertiary top predator); (b) A detritus-based food chain initiating with decomposing detritivores: Earthworm consuming decaying matter $\\to$ Chicken $\\to$ Fox $\\to$ Tiger.",
      "generated_caption_vi": "Sơ đồ khoa học minh họa trực quan nội dung 'Các loại chuỗi thức ăn trong hệ sinh thái'. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: chuỗi thức ăn, sinh vật sản xuất, cỏ, thỏ, rắn, đại bàng, sinh vật ăn mùn bã cùng các cấu trúc liên quan (giun đất, gà, cáo, hổ). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: Cỏ thức ăn cho Thỏ; Thỏ thức ăn cho Rắn; Rắn thức ăn cho Đại bàng; Giun đất thức ăn cho Gà; Gà thức ăn cho Cáo; Cáo thức ăn cho Hổ.",
      "generated_caption_en": "The diagram illustrates various food chains within an ecosystem, showing how energy is transferred through different organisms. It includes primary producers like grass feeding herbivores such as rabbits, which are then consumed by predators like snakes and hawks, while detritus feeders like earthworms provide sustenance to chickens, which in turn become prey for foxes that ultimately fall prey to tigers.",
      "metrics_vi": {
        "bleu_1": 0.35185185185185186,
        "bleu_4": 0.02857142857142857,
        "rouge_l": 0.303030303030303,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 13.83,
        "bertscore_f1": 84.52
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "Cỏ",
            "title": "<b>Cỏ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "Thỏ",
            "title": "<b>Thỏ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "Rắn",
            "title": "<b>Rắn</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "Đại bàng",
            "title": "<b>Đại bàng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "Giun đất",
            "title": "<b>Giun đất</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "Gà",
            "title": "<b>Gà</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "Cáo",
            "title": "<b>Cáo</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "Hổ",
            "title": "<b>Hổ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "chuỗi thức ăn",
            "title": "<b>chuỗi thức ăn</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "sinh vật sản xuất",
            "title": "<b>sinh vật sản xuất</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N11",
            "label": "sinh vật ăn mùn bã",
            "title": "<b>sinh vật ăn mùn bã</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "thức ăn cho",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "thức ăn cho",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "thức ăn cho",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N5",
            "to": "N6",
            "label": "thức ăn cho",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N6",
            "to": "N7",
            "label": "thức ăn cho",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N7",
            "to": "N8",
            "label": "thức ăn cho",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"537pt\" height=\"280pt\"\r\n viewBox=\"0.00 0.00 537.00 280.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 276)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M70.46,-36C70.46,-36 40.46,-36 40.46,-36 34.46,-36 28.46,-30 28.46,-24 28.46,-24 28.46,-12 28.46,-12 28.46,-6 34.46,0 40.46,0 40.46,0 70.46,0 70.46,0 76.46,0 82.46,-6 82.46,-12 82.46,-12 82.46,-24 82.46,-24 82.46,-30 76.46,-36 70.46,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"55.46\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Cỏ</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M235.16,-36C235.16,-36 205.16,-36 205.16,-36 199.16,-36 193.16,-30 193.16,-24 193.16,-24 193.16,-12 193.16,-12 193.16,-6 199.16,0 205.16,0 205.16,0 235.16,0 235.16,0 241.16,0 247.16,-6 247.16,-12 247.16,-12 247.16,-24 247.16,-24 247.16,-30 241.16,-36 235.16,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"220.16\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Thỏ</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M82.6,-18C109.68,-18 152.21,-18 182.61,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"182.59,-20.63 190.09,-18 182.59,-15.38 182.59,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"152.04\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">thức ăn cho</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M371.41,-36C371.41,-36 341.41,-36 341.41,-36 335.41,-36 329.41,-30 329.41,-24 329.41,-24 329.41,-12 329.41,-12 329.41,-6 335.41,0 341.41,0 341.41,0 371.41,0 371.41,0 377.41,0 383.41,-6 383.41,-12 383.41,-12 383.41,-24 383.41,-24 383.41,-30 377.41,-36 371.41,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"356.41\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Rắn</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M247.36,-18C267.88,-18 296.64,-18 319.33,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"319.05,-20.63 326.55,-18 319.05,-15.38 319.05,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"288.29\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">thức ăn cho</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M517.32,-36C517.32,-36 477.66,-36 477.66,-36 471.66,-36 465.66,-30 465.66,-24 465.66,-24 465.66,-12 465.66,-12 465.66,-6 471.66,0 477.66,0 477.66,0 517.32,0 517.32,0 523.32,0 529.32,-6 529.32,-12 529.32,-12 529.32,-24 529.32,-24 529.32,-30 523.32,-36 517.32,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"497.49\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Đại bàng</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M383.9,-18C403.99,-18 431.99,-18 455.04,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"455.01,-20.63 462.51,-18 455.01,-15.38 455.01,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"424.54\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">thức ăn cho</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M73.79,-95C73.79,-95 37.13,-95 37.13,-95 31.13,-95 25.13,-89 25.13,-83 25.13,-83 25.13,-71 25.13,-71 25.13,-65 31.13,-59 37.13,-59 37.13,-59 73.79,-59 73.79,-59 79.79,-59 85.79,-65 85.79,-71 85.79,-71 85.79,-83 85.79,-83 85.79,-89 79.79,-95 73.79,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"55.46\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Giun đất</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M235.16,-95C235.16,-95 205.16,-95 205.16,-95 199.16,-95 193.16,-89 193.16,-83 193.16,-83 193.16,-71 193.16,-71 193.16,-65 199.16,-59 205.16,-59 205.16,-59 235.16,-59 235.16,-59 241.16,-59 247.16,-65 247.16,-71 247.16,-71 247.16,-83 247.16,-83 247.16,-89 241.16,-95 235.16,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"220.16\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Gà</text>\r\n</g>\r\n<!-- N5&#45;&gt;N6 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N5&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M85.92,-77C113.08,-77 153.48,-77 182.67,-77\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"182.65,-79.63 190.15,-77 182.65,-74.38 182.65,-79.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"152.04\" y=\"-79.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">thức ăn cho</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M371.41,-95C371.41,-95 341.41,-95 341.41,-95 335.41,-95 329.41,-89 329.41,-83 329.41,-83 329.41,-71 329.41,-71 329.41,-65 335.41,-59 341.41,-59 341.41,-59 371.41,-59 371.41,-59 377.41,-59 383.41,-65 383.41,-71 383.41,-71 383.41,-83 383.41,-83 383.41,-89 377.41,-95 371.41,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"356.41\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Cáo</text>\r\n</g>\r\n<!-- N6&#45;&gt;N7 -->\r\n<g id=\"edge5\" class=\"edge\">\r\n<title>N6&#45;&gt;N7</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M247.36,-77C267.88,-77 296.64,-77 319.33,-77\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"319.05,-79.63 326.55,-77 319.05,-74.38 319.05,-79.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"288.29\" y=\"-79.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">thức ăn cho</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M512.49,-95C512.49,-95 482.49,-95 482.49,-95 476.49,-95 470.49,-89 470.49,-83 470.49,-83 470.49,-71 470.49,-71 470.49,-65 476.49,-59 482.49,-59 482.49,-59 512.49,-59 512.49,-59 518.49,-59 524.49,-65 524.49,-71 524.49,-71 524.49,-83 524.49,-83 524.49,-89 518.49,-95 512.49,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"497.49\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Hổ</text>\r\n</g>\r\n<!-- N7&#45;&gt;N8 -->\r\n<g id=\"edge6\" class=\"edge\">\r\n<title>N7&#45;&gt;N8</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M383.9,-77C405.45,-77 436.11,-77 460,-77\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"459.88,-79.63 467.38,-77 459.88,-74.38 459.88,-79.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"424.54\" y=\"-79.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">thức ăn cho</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M86.16,-154C86.16,-154 24.75,-154 24.75,-154 18.75,-154 12.75,-148 12.75,-142 12.75,-142 12.75,-130 12.75,-130 12.75,-124 18.75,-118 24.75,-118 24.75,-118 86.16,-118 86.16,-118 92.16,-118 98.16,-124 98.16,-130 98.16,-130 98.16,-142 98.16,-142 98.16,-148 92.16,-154 86.16,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"55.46\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">chuỗi thức ăn</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M93.66,-213C93.66,-213 17.25,-213 17.25,-213 11.25,-213 5.25,-207 5.25,-201 5.25,-201 5.25,-189 5.25,-189 5.25,-183 11.25,-177 17.25,-177 17.25,-177 93.66,-177 93.66,-177 99.66,-177 105.66,-183 105.66,-189 105.66,-189 105.66,-201 105.66,-201 105.66,-207 99.66,-213 93.66,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"55.46\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">sinh vật sản xuất</text>\r\n</g>\r\n<!-- N11 -->\r\n<g id=\"node11\" class=\"node\">\r\n<title>N11</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M98.91,-272C98.91,-272 12,-272 12,-272 6,-272 0,-266 0,-260 0,-260 0,-248 0,-248 0,-242 6,-236 12,-236 12,-236 98.91,-236 98.91,-236 104.91,-236 110.91,-242 110.91,-248 110.91,-248 110.91,-260 110.91,-260 110.91,-266 104.91,-272 98.91,-272\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"55.46\" y=\"-250.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">sinh vật ăn mùn bã</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_24",
      "filename": "vn_diag_24_luoi_thuc_an_dong_co.png",
      "image_url": "vn_images/vn_diag_24_luoi_thuc_an_dong_co.png",
      "width": 945,
      "height": 834,
      "title": "Lưới thức ăn ở một hệ sinh thái đồng cỏ",
      "subject": "Sinh học 12",
      "subject_key": "sinh12",
      "subject_vi": "Sinh học 12 (THPT)",
      "grade": "Khối 12",
      "subject_color": "blue",
      "subject_icon": "fa-helix",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương VII: Sinh thái học quần xã",
      "lesson": "Bài 29: Trao đổi vật chất và năng lượng trong hệ sinh thái (Hình 29.3)",
      "diagram_type": "food_web_network",
      "taxonomy_key": "food_web",
      "taxonomy_vi": "Chuỗi, Lưới thức ăn & Sinh thái",
      "taxonomy_en": "Food Webs & Ecological Pyramids",
      "taxonomy_color": "emerald",
      "taxonomy_icon": "fa-leaf",
      "key_entities": [
        "lưới thức ăn",
        "đồng cỏ",
        "cỏ",
        "thỏ",
        "chuột",
        "cào cào",
        "chim sẻ",
        "cáo",
        "cú"
      ],
      "directional_relations": [
        {
          "source": "Cỏ",
          "target": "Thỏ",
          "relation": "cung cấp dinh dưỡng"
        },
        {
          "source": "Cỏ",
          "target": "Chuột",
          "relation": "cung cấp dinh dưỡng"
        },
        {
          "source": "Cỏ",
          "target": "Cào cào",
          "relation": "cung cấp dinh dưỡng"
        },
        {
          "source": "Cào cào",
          "target": "Chim sẻ",
          "relation": "thức ăn cho"
        },
        {
          "source": "Thỏ",
          "target": "Cáo",
          "relation": "bị săn bởi"
        },
        {
          "source": "Chuột",
          "target": "Cáo",
          "relation": "bị săn bởi"
        },
        {
          "source": "Chuột",
          "target": "Cú",
          "relation": "bị săn bởi"
        },
        {
          "source": "Cào cào",
          "target": "Cú",
          "relation": "bị săn bởi"
        },
        {
          "source": "Chim sẻ",
          "target": "Cú",
          "relation": "bị săn bởi"
        }
      ],
      "gt_caption_vi": "Sơ đồ mạng lưới thức ăn đa chiều trong hệ sinh thái đồng cỏ với nhiều mắt xích chung phức tạp: Cỏ là sinh vật sản xuất cung cấp thức ăn cho các loài động vật tiêu thụ bậc 1 gồm thỏ, chuột và cào cào; cào cào là nguồn thức ăn cho chim sẻ; ở bậc dinh dưỡng cao hơn, cáo săn bắt thỏ và chuột, trong khi chim cú đóng vai trò săn mồi bậc cao tiêu thụ cả chuột, cào cào và chim sẻ, tạo thành các chuỗi thức ăn đan cài bền vững.",
      "gt_caption_en": "The complex grassland ecosystem food web network demonstrates interconnected trophic interactions: Grass functions as the basal primary producer sustaining primary herbivores including rabbits, mice, and grasshoppers; grasshoppers are consumed by sparrows; at higher trophic levels, foxes prey on rabbits and mice, while owls act as apex avian predators feeding broadly on mice, grasshoppers, and sparrows.",
      "generated_caption_vi": "Sơ đồ lưới thức ăn và các mối quan hệ dinh dưỡng sinh thái trong lưới thức ăn ở một hệ sinh thái đồng cỏ. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: lưới thức ăn, đồng cỏ, cỏ, thỏ, chuột, cào cào, chim sẻ cùng các cấu trúc liên quan (cáo, cú). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: Cỏ cung cấp dinh dưỡng Thỏ; Cỏ cung cấp dinh dưỡng Chuột; Cỏ cung cấp dinh dưỡng Cào cào; Cào cào thức ăn cho Chim sẻ; Thỏ bị săn bởi Cáo; Chuột bị săn bởi Cáo.",
      "generated_caption_en": "This diagram illustrates the food web of a grassland ecosystem, showing how energy is transferred through various organisms such as rabbits, mice, grasshoppers, sparrows, foxes, and owls. The directional arrows indicate that grass provides nutrition to rabbits, mice, and grasshoppers, while predators like foxes and owls feed on these herbivores and insects, forming complex feeding relationships within the ecosystem.",
      "metrics_vi": {
        "bleu_1": 0.45454545454545453,
        "bleu_4": 0.04672897196261682,
        "rouge_l": 0.27053140096618356,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 90.7,
        "bertscore_f1": 89.91
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "Cỏ",
            "title": "<b>Cỏ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "Thỏ",
            "title": "<b>Thỏ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "Chuột",
            "title": "<b>Chuột</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "Cào cào",
            "title": "<b>Cào cào</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "Chim sẻ",
            "title": "<b>Chim sẻ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "Cáo",
            "title": "<b>Cáo</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "Cú",
            "title": "<b>Cú</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "lưới thức ăn",
            "title": "<b>lưới thức ăn</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "đồng cỏ",
            "title": "<b>đồng cỏ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "cung cấp dinh dưỡng",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N1",
            "to": "N3",
            "label": "cung cấp dinh dưỡng",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N1",
            "to": "N4",
            "label": "cung cấp dinh dưỡng",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N5",
            "label": "thức ăn cho",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N6",
            "label": "bị săn bởi",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N6",
            "label": "bị săn bởi",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N7",
            "label": "bị săn bởi",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N7",
            "label": "bị săn bởi",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N5",
            "to": "N7",
            "label": "bị săn bởi",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"540pt\" height=\"263pt\"\r\n viewBox=\"0.00 0.00 540.00 263.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 259.01)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M54.7,-137.01C54.7,-137.01 24.7,-137.01 24.7,-137.01 18.7,-137.01 12.7,-131.01 12.7,-125.01 12.7,-125.01 12.7,-113.01 12.7,-113.01 12.7,-107.01 18.7,-101.01 24.7,-101.01 24.7,-101.01 54.7,-101.01 54.7,-101.01 60.7,-101.01 66.7,-107.01 66.7,-113.01 66.7,-113.01 66.7,-125.01 66.7,-125.01 66.7,-131.01 60.7,-137.01 54.7,-137.01\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"39.7\" y=\"-115.31\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Cỏ</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M246.74,-201.01C246.74,-201.01 216.74,-201.01 216.74,-201.01 210.74,-201.01 204.74,-195.01 204.74,-189.01 204.74,-189.01 204.74,-177.01 204.74,-177.01 204.74,-171.01 210.74,-165.01 216.74,-165.01 216.74,-165.01 246.74,-165.01 246.74,-165.01 252.74,-165.01 258.74,-171.01 258.74,-177.01 258.74,-177.01 258.74,-189.01 258.74,-189.01 258.74,-195.01 252.74,-201.01 246.74,-201.01\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"231.74\" y=\"-179.31\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Thỏ</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M67.13,-127.91C100.46,-139.13 157.89,-158.48 195.09,-171\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"194.01,-173.41 201.96,-173.32 195.69,-168.44 194.01,-173.41\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"140.41\" y=\"-169.77\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">cung cấp dinh dưỡng</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M246.74,-137.01C246.74,-137.01 216.74,-137.01 216.74,-137.01 210.74,-137.01 204.74,-131.01 204.74,-125.01 204.74,-125.01 204.74,-113.01 204.74,-113.01 204.74,-107.01 210.74,-101.01 216.74,-101.01 216.74,-101.01 246.74,-101.01 246.74,-101.01 252.74,-101.01 258.74,-107.01 258.74,-113.01 258.74,-113.01 258.74,-125.01 258.74,-125.01 258.74,-131.01 252.74,-137.01 246.74,-137.01\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"231.74\" y=\"-115.31\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Chuột</text>\r\n</g>\r\n<!-- N1&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N1&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M67.13,-119.01C100.32,-119.01 157.41,-119.01 194.61,-119.01\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"194.32,-121.64 201.82,-119.01 194.32,-116.39 194.32,-121.64\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"140.41\" y=\"-121.24\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">cung cấp dinh dưỡng</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M250.07,-63.01C250.07,-63.01 213.41,-63.01 213.41,-63.01 207.41,-63.01 201.41,-57.01 201.41,-51.01 201.41,-51.01 201.41,-39.01 201.41,-39.01 201.41,-33.01 207.41,-27.01 213.41,-27.01 213.41,-27.01 250.07,-27.01 250.07,-27.01 256.07,-27.01 262.07,-33.01 262.07,-39.01 262.07,-39.01 262.07,-51.01 262.07,-51.01 262.07,-57.01 256.07,-63.01 250.07,-63.01\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"231.74\" y=\"-41.31\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Cào cào</text>\r\n</g>\r\n<!-- N1&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N1&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M67.13,-108.72C99.43,-96.14 154.37,-74.75 191.58,-60.26\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"192.53,-62.71 198.57,-57.54 190.63,-57.81 192.53,-62.71\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"140.41\" y=\"-99.37\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">cung cấp dinh dưỡng</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M389.27,-193.01C389.27,-193.01 359.27,-193.01 359.27,-193.01 353.27,-193.01 347.27,-187.01 347.27,-181.01 347.27,-181.01 347.27,-169.01 347.27,-169.01 347.27,-163.01 353.27,-157.01 359.27,-157.01 359.27,-157.01 389.27,-157.01 389.27,-157.01 395.27,-157.01 401.27,-163.01 401.27,-169.01 401.27,-169.01 401.27,-181.01 401.27,-181.01 401.27,-187.01 395.27,-193.01 389.27,-193.01\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"374.27\" y=\"-171.31\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Cáo</text>\r\n</g>\r\n<!-- N2&#45;&gt;N6 -->\r\n<g id=\"edge5\" class=\"edge\">\r\n<title>N2&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M259.17,-181.51C281.16,-180.25 312.67,-178.46 337.02,-177.07\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"336.9,-179.71 344.24,-176.66 336.6,-174.47 336.9,-179.71\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"303.19\" y=\"-182.65\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">bị săn bởi</text>\r\n</g>\r\n<!-- N3&#45;&gt;N6 -->\r\n<g id=\"edge6\" class=\"edge\">\r\n<title>N3&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M259.17,-129.54C281.35,-138.38 313.24,-151.09 337.67,-160.82\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"336.49,-163.18 344.43,-163.52 338.43,-158.3 336.49,-163.18\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"303.19\" y=\"-159.12\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">bị săn bởi</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M520.23,-63.01C520.23,-63.01 490.23,-63.01 490.23,-63.01 484.23,-63.01 478.23,-57.01 478.23,-51.01 478.23,-51.01 478.23,-39.01 478.23,-39.01 478.23,-33.01 484.23,-27.01 490.23,-27.01 490.23,-27.01 520.23,-27.01 520.23,-27.01 526.23,-27.01 532.23,-33.01 532.23,-39.01 532.23,-39.01 532.23,-51.01 532.23,-51.01 532.23,-57.01 526.23,-63.01 520.23,-63.01\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"505.23\" y=\"-41.31\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Cú</text>\r\n</g>\r\n<!-- N3&#45;&gt;N7 -->\r\n<g id=\"edge7\" class=\"edge\">\r\n<title>N3&#45;&gt;N7</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M259.18,-113.38C302.17,-103.99 389.73,-83.9 462.23,-61.01 464.29,-60.36 466.39,-59.67 468.5,-58.94\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"468.99,-61.55 475.17,-56.56 467.22,-56.61 468.99,-61.55\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"374.27\" y=\"-95.71\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">bị săn bởi</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M392.23,-63.01C392.23,-63.01 356.32,-63.01 356.32,-63.01 350.32,-63.01 344.32,-57.01 344.32,-51.01 344.32,-51.01 344.32,-39.01 344.32,-39.01 344.32,-33.01 350.32,-27.01 356.32,-27.01 356.32,-27.01 392.23,-27.01 392.23,-27.01 398.23,-27.01 404.23,-33.01 404.23,-39.01 404.23,-39.01 404.23,-51.01 404.23,-51.01 404.23,-57.01 398.23,-63.01 392.23,-63.01\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"374.27\" y=\"-41.31\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Chim sẻ</text>\r\n</g>\r\n<!-- N4&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N4&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M262.54,-45.01C283.37,-45.01 311.38,-45.01 334.02,-45.01\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"333.77,-47.64 341.27,-45.01 333.77,-42.39 333.77,-47.64\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"303.19\" y=\"-47.24\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">thức ăn cho</text>\r\n</g>\r\n<!-- N4&#45;&gt;N7 -->\r\n<g id=\"edge8\" class=\"edge\">\r\n<title>N4&#45;&gt;N7</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M262.24,-30.83C284.28,-21.05 315.45,-8.93 344.32,-3.76 370.53,0.93 378.11,1.42 404.23,-3.76 426.61,-8.19 450.27,-17.71 468.95,-26.48\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"467.61,-28.75 475.51,-29.65 469.9,-24.03 467.61,-28.75\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"374.27\" y=\"-5.99\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">bị săn bởi</text>\r\n</g>\r\n<!-- N5&#45;&gt;N7 -->\r\n<g id=\"edge9\" class=\"edge\">\r\n<title>N5&#45;&gt;N7</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M404.54,-45.01C423.39,-45.01 448.05,-45.01 468.12,-45.01\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"467.92,-47.64 475.42,-45.01 467.92,-42.39 467.92,-47.64\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"441.23\" y=\"-47.24\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">bị săn bởi</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M67.41,-196.01C67.41,-196.01 12,-196.01 12,-196.01 6,-196.01 0,-190.01 0,-184.01 0,-184.01 0,-172.01 0,-172.01 0,-166.01 6,-160.01 12,-160.01 12,-160.01 67.41,-160.01 67.41,-160.01 73.41,-160.01 79.41,-166.01 79.41,-172.01 79.41,-172.01 79.41,-184.01 79.41,-184.01 79.41,-190.01 73.41,-196.01 67.41,-196.01\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"39.7\" y=\"-174.31\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">lưới thức ăn</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M56.91,-255.01C56.91,-255.01 22.5,-255.01 22.5,-255.01 16.5,-255.01 10.5,-249.01 10.5,-243.01 10.5,-243.01 10.5,-231.01 10.5,-231.01 10.5,-225.01 16.5,-219.01 22.5,-219.01 22.5,-219.01 56.91,-219.01 56.91,-219.01 62.91,-219.01 68.91,-225.01 68.91,-231.01 68.91,-231.01 68.91,-243.01 68.91,-243.01 68.91,-249.01 62.91,-255.01 56.91,-255.01\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"39.7\" y=\"-233.31\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">đồng cỏ</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_25",
      "filename": "vn_diag_25_chuyen_hoa_nang_luong_he_sinh_thai.png",
      "image_url": "vn_images/vn_diag_25_chuyen_hoa_nang_luong_he_sinh_thai.png",
      "width": 1342,
      "height": 625,
      "title": "Sơ đồ chuyển hoá năng lượng qua các bậc dinh dưỡng trong hệ sinh thái",
      "subject": "Sinh học 12",
      "subject_key": "sinh12",
      "subject_vi": "Sinh học 12 (THPT)",
      "grade": "Khối 12",
      "subject_color": "blue",
      "subject_icon": "fa-helix",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương VII: Sinh thái học quần xã",
      "lesson": "Bài 29: Trao đổi vật chất và năng lượng trong hệ sinh thái (Hình 29.5)",
      "diagram_type": "energy_flow_balance",
      "taxonomy_key": "food_web",
      "taxonomy_vi": "Chuỗi, Lưới thức ăn & Sinh thái",
      "taxonomy_en": "Food Webs & Ecological Pyramids",
      "taxonomy_color": "emerald",
      "taxonomy_icon": "fa-leaf",
      "key_entities": [
        "năng lượng ánh sáng",
        "Mặt Trời",
        "sinh vật sản xuất",
        "sinh vật tiêu thụ bậc 1",
        "sinh vật tiêu thụ bậc 2",
        "sinh vật tiêu thụ bậc cao nhất",
        "thất thoát qua hô hấp",
        "chất thải xác sinh vật"
      ],
      "directional_relations": [
        {
          "source": "Năng lượng ánh sáng",
          "target": "Sinh vật sản xuất",
          "relation": "hấp thụ quang hợp"
        },
        {
          "source": "Sinh vật sản xuất",
          "target": "Sinh vật tiêu thụ bậc 1",
          "relation": "truyền năng lượng dinh dưỡng"
        },
        {
          "source": "Sinh vật tiêu thụ bậc 1",
          "target": "Sinh vật tiêu thụ bậc 2",
          "relation": "truyền năng lượng dinh dưỡng"
        },
        {
          "source": "Sinh vật tiêu thụ bậc 2",
          "target": "Sinh vật tiêu thụ bậc cao nhất",
          "relation": "truyền năng lượng dinh dưỡng"
        }
      ],
      "gt_caption_vi": "Sơ đồ dòng năng lượng một chiều qua các bậc dinh dưỡng trong hệ sinh thái: Năng lượng quang năng từ Mặt Trời đi vào hệ sinh thái nhờ sinh vật sản xuất (cỏ), sau đó truyền qua chuỗi dinh dưỡng từ sinh vật tiêu thụ bậc 1 (cào cào), bậc 2 (thằn lằn) đến bậc cao nhất (đại bàng); tại mỗi bậc dinh dưỡng, phần lớn năng lượng bị tiêu hao và thất thoát ra môi trường dưới dạng nhiệt qua quá trình hô hấp, một phần đi vào xác sinh vật rơi rụng, và chỉ có khoảng 10% năng lượng được tích lũy lên bậc kế tiếp.",
      "gt_caption_en": "The unidirectional energy flow model across trophic levels in an ecosystem shows: Solar radiant energy enters the biosphere via primary producers (plants) and flows sequentially through primary consumers (grasshoppers), secondary consumers (lizards), and apex predators (eagles); at each trophic step, approximately 90% of energy is dissipated into the environment as respiratory metabolic heat or transferred to organic detritus, with only about 10% assimilated into subsequent biomass.",
      "generated_caption_vi": "Sơ đồ khoa học minh họa trực quan nội dung 'Sơ đồ chuyển hoá năng lượng qua các bậc dinh dưỡng trong hệ sinh thái'. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: năng lượng ánh sáng, Mặt Trời, sinh vật sản xuất, sinh vật tiêu thụ bậc 1, sinh vật tiêu thụ bậc 2, sinh vật tiêu thụ bậc cao nhất, thất thoát qua hô hấp cùng các cấu trúc liên quan (chất thải xác sinh vật). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: Năng lượng ánh sáng hấp thụ quang hợp Sinh vật sản xuất; Sinh vật sản xuất truyền năng lượng dinh dưỡng Sinh vật tiêu thụ bậc 1; Sinh vật tiêu thụ bậc 1 truyền năng lượng dinh dưỡng Sinh vật tiêu thụ bậc 2; Sinh vật tiêu thụ bậc 2 truyền năng lượng dinh dưỡng Sinh vật tiêu thụ bậc cao nhất.",
      "generated_caption_en": "The diagram illustrates the flow of energy through different trophic levels in an ecosystem, starting with sunlight from the Sun being absorbed by producers through photosynthesis. Energy then moves up the food chain as primary consumers feed on producers, secondary consumers feed on primary consumers, and tertiary consumers feed on secondary consumers, with each transfer accompanied by energy losses due to respiration and waste.",
      "metrics_vi": {
        "bleu_1": 0.37267080745341613,
        "bleu_4": 0.06329113924050633,
        "rouge_l": 0.3259259259259259,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 87.94,
        "bertscore_f1": 87.24
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "Năng lượng ánh sáng",
            "title": "<b>Năng lượng ánh sáng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "Sinh vật sản xuất",
            "title": "<b>Sinh vật sản xuất</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "Sinh vật tiêu thụ bậc 1",
            "title": "<b>Sinh vật tiêu thụ bậc 1</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "Sinh vật tiêu thụ bậc 2",
            "title": "<b>Sinh vật tiêu thụ bậc 2</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "Sinh vật tiêu thụ bậc cao nhất",
            "title": "<b>Sinh vật tiêu thụ bậc cao nhất</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "Mặt Trời",
            "title": "<b>Mặt Trời</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "thất thoát qua hô hấp",
            "title": "<b>thất thoát qua hô hấp</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "chất thải xác sinh vật",
            "title": "<b>chất thải xác sinh vật</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "hấp thụ quang hợp",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "truyền năng lượng dinh dưỡng",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "truyền năng lượng dinh dưỡng",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N5",
            "label": "truyền năng lượng dinh dưỡng",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"1250pt\" height=\"221pt\"\r\n viewBox=\"0.00 0.00 1250.00 221.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 217)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M113.91,-36C113.91,-36 12,-36 12,-36 6,-36 0,-30 0,-24 0,-24 0,-12 0,-12 0,-6 6,0 12,0 12,0 113.91,0 113.91,0 119.91,0 125.91,-6 125.91,-12 125.91,-12 125.91,-24 125.91,-24 125.91,-30 119.91,-36 113.91,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"62.95\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Năng lượng ánh sáng</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M329.57,-36C329.57,-36 250.91,-36 250.91,-36 244.91,-36 238.91,-30 238.91,-24 238.91,-24 238.91,-12 238.91,-12 238.91,-6 244.91,0 250.91,0 250.91,0 329.57,0 329.57,0 335.57,0 341.57,-6 341.57,-12 341.57,-12 341.57,-24 341.57,-24 341.57,-30 335.57,-36 329.57,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"290.24\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Sinh vật sản xuất</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M126.11,-18C158.08,-18 196.88,-18 228.62,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"228.44,-20.63 235.94,-18 228.44,-15.38 228.44,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"182.41\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">hấp thụ quang hợp</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M617.98,-36C617.98,-36 515.32,-36 515.32,-36 509.32,-36 503.32,-30 503.32,-24 503.32,-24 503.32,-12 503.32,-12 503.32,-6 509.32,0 515.32,0 515.32,0 617.98,0 617.98,0 623.98,0 629.98,-6 629.98,-12 629.98,-12 629.98,-24 629.98,-24 629.98,-30 623.98,-36 617.98,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"566.65\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Sinh vật tiêu thụ bậc 1</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M341.89,-18C384.4,-18 445.63,-18 493.31,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"493.04,-20.63 500.54,-18 493.04,-15.38 493.04,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"422.44\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">truyền năng lượng dinh dưỡng</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M906.39,-36C906.39,-36 803.73,-36 803.73,-36 797.73,-36 791.73,-30 791.73,-24 791.73,-24 791.73,-12 791.73,-12 791.73,-6 797.73,0 803.73,0 803.73,0 906.39,0 906.39,0 912.39,0 918.39,-6 918.39,-12 918.39,-12 918.39,-24 918.39,-24 918.39,-30 912.39,-36 906.39,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"855.06\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Sinh vật tiêu thụ bậc 2</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M630.15,-18C674.77,-18 734.92,-18 781.64,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"781.47,-20.63 788.97,-18 781.47,-15.38 781.47,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"710.85\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">truyền năng lượng dinh dưỡng</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1230.05,-36C1230.05,-36 1092.14,-36 1092.14,-36 1086.14,-36 1080.14,-30 1080.14,-24 1080.14,-24 1080.14,-12 1080.14,-12 1080.14,-6 1086.14,0 1092.14,0 1092.14,0 1230.05,0 1230.05,0 1236.05,0 1242.05,-6 1242.05,-12 1242.05,-12 1242.05,-24 1242.05,-24 1242.05,-30 1236.05,-36 1230.05,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1161.09\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Sinh vật tiêu thụ bậc cao nhất</text>\r\n</g>\r\n<!-- N4&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N4&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M918.69,-18C962.26,-18 1021.03,-18 1069.68,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1069.67,-20.63 1077.17,-18 1069.67,-15.38 1069.67,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"999.26\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">truyền năng lượng dinh dưỡng</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M81.28,-95C81.28,-95 44.62,-95 44.62,-95 38.62,-95 32.62,-89 32.62,-83 32.62,-83 32.62,-71 32.62,-71 32.62,-65 38.62,-59 44.62,-59 44.62,-59 81.28,-59 81.28,-59 87.28,-59 93.28,-65 93.28,-71 93.28,-71 93.28,-83 93.28,-83 93.28,-89 87.28,-95 81.28,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"62.95\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Mặt Trời</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M112.03,-154C112.03,-154 13.87,-154 13.87,-154 7.87,-154 1.87,-148 1.87,-142 1.87,-142 1.87,-130 1.87,-130 1.87,-124 7.87,-118 13.87,-118 13.87,-118 112.03,-118 112.03,-118 118.03,-118 124.03,-124 124.03,-130 124.03,-130 124.03,-142 124.03,-142 124.03,-148 118.03,-154 112.03,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"62.95\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thất thoát qua hô hấp</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M110.91,-213C110.91,-213 15,-213 15,-213 9,-213 3,-207 3,-201 3,-201 3,-189 3,-189 3,-183 9,-177 15,-177 15,-177 110.91,-177 110.91,-177 116.91,-177 122.91,-183 122.91,-189 122.91,-189 122.91,-201 122.91,-201 122.91,-207 116.91,-213 110.91,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"62.95\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">chất thải xác sinh vật</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_26",
      "filename": "vn_diag_26_hai_pha_quang_hop.png",
      "image_url": "vn_images/vn_diag_26_hai_pha_quang_hop.png",
      "width": 932,
      "height": 737,
      "title": "Sơ đồ hai pha của quá trình quang hợp trong lục lạp",
      "subject": "Sinh học 11",
      "subject_key": "sinh11",
      "subject_vi": "Sinh học 11 (THPT)",
      "grade": "Khối 11",
      "subject_color": "sky",
      "subject_icon": "fa-leaf",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương 1: Trao đổi chất và chuyển hoá năng lượng",
      "lesson": "Bài 4: Quang hợp ở thực vật (Hình 4.2)",
      "diagram_type": "biochemical_cycle_process",
      "taxonomy_key": "biogeochemical_cycle",
      "taxonomy_vi": "Chu trình Sinh-Địa-Hóa & Chuyển hóa",
      "taxonomy_en": "Biogeochemical & Metabolic Cycles",
      "taxonomy_color": "cyan",
      "taxonomy_icon": "fa-droplet",
      "key_entities": [
        "quang hợp",
        "lục lạp",
        "pha sáng",
        "pha tối",
        "chu trình Calvin",
        "thylakoid",
        "chất nền stroma",
        "ánh sáng",
        "H2O",
        "O2",
        "CO2",
        "ATP",
        "NADPH",
        "ADP",
        "NADP+",
        "Đường"
      ],
      "directional_relations": [
        {
          "source": "Ánh sáng",
          "target": "Pha sáng",
          "relation": "cung cấp năng lượng"
        },
        {
          "source": "H2O",
          "target": "Pha sáng",
          "relation": "nguyên liệu quang phân ly"
        },
        {
          "source": "Pha sáng",
          "target": "O2",
          "relation": "giải phóng"
        },
        {
          "source": "Pha sáng",
          "target": "Pha tối",
          "relation": "cung cấp ATP và NADPH"
        },
        {
          "source": "CO2",
          "target": "Chu trình Calvin",
          "relation": "cố định carbon"
        },
        {
          "source": "Chu trình Calvin",
          "target": "Đường",
          "relation": "tổng hợp glucose"
        },
        {
          "source": "Pha tối",
          "target": "Pha sáng",
          "relation": "tái tạo ADP, Pi và NADP+"
        }
      ],
      "gt_caption_vi": "Sơ đồ hai pha của quá trình quang hợp diễn ra bên trong lục lạp: Pha sáng diễn ra trên màng thylakoid, sử dụng năng lượng ánh sáng mặt trời để quang phân li nước (H2O), giải phóng khí O2 ra môi trường, đồng thời tổng hợp nên các phân tử giàu năng lượng ATP và chất khử NADPH; Pha tối diễn ra trong chất nền (stroma) của lục lạp, sử dụng ATP và NADPH từ pha sáng để cố định khí CO2 thông qua chu trình Calvin, tổng hợp nên các hợp chất hữu cơ (đường) và giải phóng ADP, Pi, NADP+ quay trở lại cung cấp cho pha sáng.",
      "gt_caption_en": "The diagram depicts the two integrated phases of photosynthesis occurring within a chloroplast: The light-dependent reactions take place on thylakoid membranes, harnessing solar radiant energy to photolyze water (H2O), releasing oxygen (O2) and generating high-energy chemical carriers ATP and NADPH; The light-independent reactions (Calvin cycle) operate in the stroma, utilizing ATP and NADPH to reduce and fix atmospheric carbon dioxide (CO2) into triose phosphates and carbohydrates (sugars), subsequently recycling ADP, Pi, and NADP+ back to the light reactions.",
      "generated_caption_vi": "Sơ đồ biểu diễn chu trình sinh học khép kín và tiến trình phát triển của sơ đồ hai pha của quá trình quang hợp trong lục lạp. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: quang hợp, lục lạp, pha sáng, pha tối, chu trình Calvin, thylakoid, chất nền stroma cùng các cấu trúc liên quan (ánh sáng, NADP+, Đường). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: Ánh sáng cung cấp năng lượng Pha sáng; H2O nguyên liệu quang phân ly Pha sáng; Pha sáng giải phóng O2; Pha sáng cung cấp ATP và NADPH Pha tối; CO2 cố định carbon Chu trình Calvin; Chu trình Calvin tổng hợp glucose Đường.",
      "generated_caption_en": "The diagram illustrates the two-phase process of photosynthesis within chloroplasts, detailing the light-dependent reactions (light phase) and the Calvin cycle (dark phase). It shows how light energy is converted into chemical energy through the absorption of light, water splitting to produce oxygen, and the generation of ATP and NADPH which then fuel the Calvin cycle for carbon fixation and glucose synthesis, while also demonstrating the recycling of ADP, Pi, and NADP+ back to the light phase.",
      "metrics_vi": {
        "bleu_1": 0.46825396825396826,
        "bleu_4": 0.07317073170731707,
        "rouge_l": 0.3037974683544304,
        "entity_recall": 1.0,
        "dir_accuracy": 0.42857142857142855
      },
      "metrics_en": {
        "cider": 122.76,
        "bertscore_f1": 88.64
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "Ánh sáng",
            "title": "<b>Ánh sáng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "Pha sáng",
            "title": "<b>Pha sáng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "H2O",
            "title": "<b>H2O</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "O2",
            "title": "<b>O2</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "Pha tối",
            "title": "<b>Pha tối</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "CO2",
            "title": "<b>CO2</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "Chu trình Calvin",
            "title": "<b>Chu trình Calvin</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "Đường",
            "title": "<b>Đường</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "quang hợp",
            "title": "<b>quang hợp</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "lục lạp",
            "title": "<b>lục lạp</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N11",
            "label": "thylakoid",
            "title": "<b>thylakoid</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N12",
            "label": "chất nền stroma",
            "title": "<b>chất nền stroma</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N13",
            "label": "ATP",
            "title": "<b>ATP</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N14",
            "label": "NADPH",
            "title": "<b>NADPH</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N15",
            "label": "ADP",
            "title": "<b>ADP</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N16",
            "label": "NADP+",
            "title": "<b>NADP+</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "cung cấp năng lượng",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N2",
            "label": "nguyên liệu quang phân ly",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N4",
            "label": "giải phóng",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N5",
            "label": "cung cấp ATP và NADPH",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N6",
            "to": "N7",
            "label": "cố định carbon",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N7",
            "to": "N8",
            "label": "tổng hợp glucose",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N5",
            "to": "N2",
            "label": "tái tạo ADP, Pi và NADP+",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"543pt\" height=\"662pt\"\r\n viewBox=\"0.00 0.00 543.00 662.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 658)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M69.66,-104C69.66,-104 27.75,-104 27.75,-104 21.75,-104 15.75,-98 15.75,-92 15.75,-92 15.75,-80 15.75,-80 15.75,-74 21.75,-68 27.75,-68 27.75,-68 69.66,-68 69.66,-68 75.66,-68 81.66,-74 81.66,-80 81.66,-80 81.66,-92 81.66,-92 81.66,-98 75.66,-104 69.66,-104\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"48.71\" y=\"-82.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Ánh sáng</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M311.19,-65C311.19,-65 269.29,-65 269.29,-65 263.29,-65 257.29,-59 257.29,-53 257.29,-53 257.29,-41 257.29,-41 257.29,-35 263.29,-29 269.29,-29 269.29,-29 311.19,-29 311.19,-29 317.19,-29 323.19,-35 323.19,-41 323.19,-41 323.19,-53 323.19,-53 323.19,-59 317.19,-65 311.19,-65\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"290.24\" y=\"-43.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Pha sáng</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M82.06,-80.95C117.28,-75.43 175.25,-66.27 225.16,-58 232.2,-56.83 239.67,-55.57 246.93,-54.34\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"247.35,-56.93 254.3,-53.07 246.46,-51.75 247.35,-56.93\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"169.29\" y=\"-77.74\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">cung cấp năng lượng</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M522.03,-104C522.03,-104 492.03,-104 492.03,-104 486.03,-104 480.03,-98 480.03,-92 480.03,-92 480.03,-80 480.03,-80 480.03,-74 486.03,-68 492.03,-68 492.03,-68 522.03,-68 522.03,-68 528.03,-68 534.03,-74 534.03,-80 534.03,-80 534.03,-92 534.03,-92 534.03,-98 528.03,-104 522.03,-104\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"507.03\" y=\"-82.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">O2</text>\r\n</g>\r\n<!-- N2&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N2&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M323.4,-52.84C362.67,-59.97 428.91,-72 469.9,-79.44\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"469.22,-81.98 477.06,-80.74 470.15,-76.82 469.22,-81.98\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"409.32\" y=\"-79.8\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">giải phóng</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M522.03,-36C522.03,-36 492.03,-36 492.03,-36 486.03,-36 480.03,-30 480.03,-24 480.03,-24 480.03,-12 480.03,-12 480.03,-6 486.03,0 492.03,0 492.03,0 522.03,0 522.03,0 528.03,0 534.03,-6 534.03,-12 534.03,-12 534.03,-24 534.03,-24 534.03,-30 528.03,-36 522.03,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"507.03\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Pha tối</text>\r\n</g>\r\n<!-- N2&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N2&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M323.4,-42.66C362.58,-37.37 428.63,-28.45 469.64,-22.91\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"469.96,-25.52 477.05,-21.91 469.26,-20.32 469.96,-25.52\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"409.32\" y=\"-39.84\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">cung cấp ATP và NADPH</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M63.71,-45C63.71,-45 33.71,-45 33.71,-45 27.71,-45 21.71,-39 21.71,-33 21.71,-33 21.71,-21 21.71,-21 21.71,-15 27.71,-9 33.71,-9 33.71,-9 63.71,-9 63.71,-9 69.71,-9 75.71,-15 75.71,-21 75.71,-21 75.71,-33 75.71,-33 75.71,-39 69.71,-45 63.71,-45\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"48.71\" y=\"-23.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">H2O</text>\r\n</g>\r\n<!-- N3&#45;&gt;N2 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N3&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M75.8,-29.18C117,-32.62 197.54,-39.34 247.04,-43.48\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"246.7,-46.08 254.4,-44.09 247.14,-40.85 246.7,-46.08\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"169.29\" y=\"-43.86\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">nguyên liệu quang phân ly</text>\r\n</g>\r\n<!-- N5&#45;&gt;N2 -->\r\n<g id=\"edge7\" class=\"edge\">\r\n<title>N5&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M479.6,-10.9C449.07,-3.9 397.6,4.17 355.32,-7.75 343.96,-10.95 332.62,-16.8 322.71,-23.01\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"321.48,-20.68 316.68,-27.01 324.38,-25.06 321.48,-20.68\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"409.32\" y=\"-9.97\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">tái tạo ADP, Pi và NADP+</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M63.71,-182C63.71,-182 33.71,-182 33.71,-182 27.71,-182 21.71,-176 21.71,-170 21.71,-170 21.71,-158 21.71,-158 21.71,-152 27.71,-146 33.71,-146 33.71,-146 63.71,-146 63.71,-146 69.71,-146 75.71,-152 75.71,-158 75.71,-158 75.71,-170 75.71,-170 75.71,-176 69.71,-182 63.71,-182\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"48.71\" y=\"-160.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">CO2</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M327.32,-182C327.32,-182 253.16,-182 253.16,-182 247.16,-182 241.16,-176 241.16,-170 241.16,-170 241.16,-158 241.16,-158 241.16,-152 247.16,-146 253.16,-146 253.16,-146 327.32,-146 327.32,-146 333.32,-146 339.32,-152 339.32,-158 339.32,-158 339.32,-170 339.32,-170 339.32,-176 333.32,-182 327.32,-182\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"290.24\" y=\"-160.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Chu trình Calvin</text>\r\n</g>\r\n<!-- N6&#45;&gt;N7 -->\r\n<g id=\"edge5\" class=\"edge\">\r\n<title>N6&#45;&gt;N7</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M75.8,-164C112.78,-164 181.44,-164 230.91,-164\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"230.63,-166.63 238.13,-164 230.63,-161.38 230.63,-166.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"169.29\" y=\"-166.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">cố định carbon</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M522.73,-182C522.73,-182 491.32,-182 491.32,-182 485.32,-182 479.32,-176 479.32,-170 479.32,-170 479.32,-158 479.32,-158 479.32,-152 485.32,-146 491.32,-146 491.32,-146 522.73,-146 522.73,-146 528.73,-146 534.73,-152 534.73,-158 534.73,-158 534.73,-170 534.73,-170 534.73,-176 528.73,-182 522.73,-182\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"507.03\" y=\"-160.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Đường</text>\r\n</g>\r\n<!-- N7&#45;&gt;N8 -->\r\n<g id=\"edge6\" class=\"edge\">\r\n<title>N7&#45;&gt;N8</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M339.71,-164C378.9,-164 433.25,-164 469.01,-164\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"468.79,-166.63 476.29,-164 468.79,-161.38 468.79,-166.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"409.32\" y=\"-166.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">tổng hợp glucose</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M73.04,-241C73.04,-241 24.38,-241 24.38,-241 18.38,-241 12.38,-235 12.38,-229 12.38,-229 12.38,-217 12.38,-217 12.38,-211 18.38,-205 24.38,-205 24.38,-205 73.04,-205 73.04,-205 79.04,-205 85.04,-211 85.04,-217 85.04,-217 85.04,-229 85.04,-229 85.04,-235 79.04,-241 73.04,-241\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"48.71\" y=\"-219.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">quang hợp</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M63.71,-300C63.71,-300 33.71,-300 33.71,-300 27.71,-300 21.71,-294 21.71,-288 21.71,-288 21.71,-276 21.71,-276 21.71,-270 27.71,-264 33.71,-264 33.71,-264 63.71,-264 63.71,-264 69.71,-264 75.71,-270 75.71,-276 75.71,-276 75.71,-288 75.71,-288 75.71,-294 69.71,-300 63.71,-300\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"48.71\" y=\"-278.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">lục lạp</text>\r\n</g>\r\n<!-- N11 -->\r\n<g id=\"node11\" class=\"node\">\r\n<title>N11</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M67.79,-359C67.79,-359 29.63,-359 29.63,-359 23.63,-359 17.63,-353 17.63,-347 17.63,-347 17.63,-335 17.63,-335 17.63,-329 23.63,-323 29.63,-323 29.63,-323 67.79,-323 67.79,-323 73.79,-323 79.79,-329 79.79,-335 79.79,-335 79.79,-347 79.79,-347 79.79,-353 73.79,-359 67.79,-359\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"48.71\" y=\"-337.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thylakoid</text>\r\n</g>\r\n<!-- N12 -->\r\n<g id=\"node12\" class=\"node\">\r\n<title>N12</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M85.41,-418C85.41,-418 12,-418 12,-418 6,-418 0,-412 0,-406 0,-406 0,-394 0,-394 0,-388 6,-382 12,-382 12,-382 85.41,-382 85.41,-382 91.41,-382 97.41,-388 97.41,-394 97.41,-394 97.41,-406 97.41,-406 97.41,-412 91.41,-418 85.41,-418\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"48.71\" y=\"-396.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">chất nền stroma</text>\r\n</g>\r\n<!-- N13 -->\r\n<g id=\"node13\" class=\"node\">\r\n<title>N13</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M63.71,-477C63.71,-477 33.71,-477 33.71,-477 27.71,-477 21.71,-471 21.71,-465 21.71,-465 21.71,-453 21.71,-453 21.71,-447 27.71,-441 33.71,-441 33.71,-441 63.71,-441 63.71,-441 69.71,-441 75.71,-447 75.71,-453 75.71,-453 75.71,-465 75.71,-465 75.71,-471 69.71,-477 63.71,-477\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"48.71\" y=\"-455.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ATP</text>\r\n</g>\r\n<!-- N14 -->\r\n<g id=\"node14\" class=\"node\">\r\n<title>N14</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M66.66,-536C66.66,-536 30.75,-536 30.75,-536 24.75,-536 18.75,-530 18.75,-524 18.75,-524 18.75,-512 18.75,-512 18.75,-506 24.75,-500 30.75,-500 30.75,-500 66.66,-500 66.66,-500 72.66,-500 78.66,-506 78.66,-512 78.66,-512 78.66,-524 78.66,-524 78.66,-530 72.66,-536 66.66,-536\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"48.71\" y=\"-514.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">NADPH</text>\r\n</g>\r\n<!-- N15 -->\r\n<g id=\"node15\" class=\"node\">\r\n<title>N15</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M63.71,-595C63.71,-595 33.71,-595 33.71,-595 27.71,-595 21.71,-589 21.71,-583 21.71,-583 21.71,-571 21.71,-571 21.71,-565 27.71,-559 33.71,-559 33.71,-559 63.71,-559 63.71,-559 69.71,-559 75.71,-565 75.71,-571 75.71,-571 75.71,-583 75.71,-583 75.71,-589 69.71,-595 63.71,-595\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"48.71\" y=\"-573.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ADP</text>\r\n</g>\r\n<!-- N16 -->\r\n<g id=\"node16\" class=\"node\">\r\n<title>N16</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M65.91,-654C65.91,-654 31.5,-654 31.5,-654 25.5,-654 19.5,-648 19.5,-642 19.5,-642 19.5,-630 19.5,-630 19.5,-624 25.5,-618 31.5,-618 31.5,-618 65.91,-618 65.91,-618 71.91,-618 77.91,-624 77.91,-630 77.91,-630 77.91,-642 77.91,-642 77.91,-648 71.91,-654 65.91,-654\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"48.71\" y=\"-632.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">NADP+</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_27",
      "filename": "vn_diag_27_khoi_dau_dich_ma.png",
      "image_url": "vn_images/vn_diag_27_khoi_dau_dich_ma.png",
      "width": 1417,
      "height": 514,
      "title": "Sơ đồ giai đoạn khởi đầu quá trình dịch mã tổng hợp chuỗi polypeptide",
      "subject": "Sinh học 12",
      "subject_key": "sinh12",
      "subject_vi": "Sinh học 12 (THPT)",
      "grade": "Khối 12",
      "subject_color": "blue",
      "subject_icon": "fa-helix",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương I: Di truyền phân tử",
      "lesson": "Bài 2: Phiên mã và dịch mã (Hình 2.6)",
      "diagram_type": "molecular_translation_step",
      "taxonomy_key": "system_process",
      "taxonomy_vi": "Cơ chế Sinh lý & Di truyền Phân tử",
      "taxonomy_en": "Physiological & Molecular Processes",
      "taxonomy_color": "rose",
      "taxonomy_icon": "fa-gears",
      "key_entities": [
        "dịch mã",
        "mRNA",
        "codon mở đầu (AUG)",
        "Met-tRNA",
        "anticodon (UAC)",
        "tiểu phần nhỏ ribosome",
        "tiểu phần lớn ribosome",
        "vị trí E",
        "vị trí P",
        "vị trí A",
        "ribosome hoàn chỉnh"
      ],
      "directional_relations": [
        {
          "source": "tiểu phần nhỏ ribosome",
          "target": "mRNA",
          "relation": "gắn kết và trượt tìm codon mở đầu"
        },
        {
          "source": "Met-tRNA",
          "target": "codon AUG",
          "relation": "đối mã UAC khớp bổ sung với AUG"
        },
        {
          "source": "tiểu phần lớn ribosome",
          "target": "tiểu phần nhỏ",
          "relation": "lắp ráp tạo phức hệ ribosome hoàn chỉnh"
        }
      ],
      "gt_caption_vi": "Sơ đồ mô tả giai đoạn khởi đầu của quá trình dịch mã ở sinh vật: Tiểu phần nhỏ của ribosome liên kết với phân tử mRNA và di chuyển đến vị trí codon mở đầu (5'-AUG-3'); phức hệ Met-tRNA mang acid amin mở đầu (methionine) gắn khớp bổ sung theo nguyên tắc đối mã (3'-UAC-5') vào codon mở đầu; sau đó, tiểu phần lớn của ribosome gắn vào tiểu phần nhỏ tạo nên ribosome hoàn chỉnh với ba vị trí chức năng E (thoát), P (peptidyl) và A (aminoacyl), đưa Met-tRNA vào đúng vị trí P để sẵn sàng tiếp nhận amino acid tiếp theo.",
      "gt_caption_en": "The diagram illustrates the initiation phase of translation in protein synthesis: The small ribosomal subunit binds to mRNA and locates the start codon (5'-AUG-3'); an initiator Met-tRNA bearing methionine pairs complementarily with its anticodon (3'-UAC-5') to the AUG start codon; then, the large ribosomal subunit joins the small subunit to assemble the fully active 70S/80S ribosome complex, positioning the initiator tRNA in the P (peptidyl) site while keeping the A (aminoacyl) site open for the subsequent aminoacyl-tRNA.",
      "generated_caption_vi": "Sơ đồ khoa học minh họa trực quan nội dung 'Sơ đồ giai đoạn khởi đầu quá trình dịch mã tổng hợp chuỗi polypeptide'. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: dịch mã, mRNA, codon mở đầu (AUG), Met-tRNA, anticodon (UAC), tiểu phần nhỏ ribosome, tiểu phần lớn ribosome cùng các cấu trúc liên quan (vị trí E, vị trí P, vị trí A, ribosome hoàn chỉnh). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: tiểu phần nhỏ ribosome gắn kết và trượt tìm codon mở đầu mRNA; Met-tRNA đối mã UAC khớp bổ sung với AUG codon AUG; tiểu phần lớn ribosome lắp ráp tạo phức hệ ribosome hoàn chỉnh tiểu phần nhỏ.",
      "generated_caption_en": "The diagram illustrates the initial stage of the translation process for synthesizing a polypeptide chain, showing key components such as mRNA, the start codon (AUG), Met-tRNA, and ribosomal subunits. It depicts the small ribosomal subunit binding to the mRNA to locate the start codon, followed by the complementary base pairing between the tRNA's anticodon (UAC) and the AUG codon, and finally, the assembly of the large ribosomal subunit with the small one to form a complete ribosome.",
      "metrics_vi": {
        "bleu_1": 0.47692307692307695,
        "bleu_4": 0.015748031496062992,
        "rouge_l": 0.2809917355371901,
        "entity_recall": 1.0,
        "dir_accuracy": 0.3333333333333333
      },
      "metrics_en": {
        "cider": 147.14,
        "bertscore_f1": 88.31
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "tiểu phần nhỏ ribosome",
            "title": "<b>tiểu phần nhỏ ribosome</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "mRNA",
            "title": "<b>mRNA</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "Met-tRNA",
            "title": "<b>Met-tRNA</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "codon AUG",
            "title": "<b>codon AUG</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "tiểu phần lớn ribosome",
            "title": "<b>tiểu phần lớn ribosome</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "tiểu phần nhỏ",
            "title": "<b>tiểu phần nhỏ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "dịch mã",
            "title": "<b>dịch mã</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "codon mở đầu (AUG)",
            "title": "<b>codon mở đầu (AUG)</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "anticodon (UAC)",
            "title": "<b>anticodon (UAC)</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "vị trí E",
            "title": "<b>vị trí E</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N11",
            "label": "vị trí P",
            "title": "<b>vị trí P</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N12",
            "label": "vị trí A",
            "title": "<b>vị trí A</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N13",
            "label": "ribosome hoàn chỉnh",
            "title": "<b>ribosome hoàn chỉnh</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "gắn kết và trượt tìm codon mở đầu",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "đối mã UAC khớp bổ sung với AUG",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N5",
            "to": "N6",
            "label": "lắp ráp tạo phức hệ ribosome hoàn chỉnh",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"433pt\" height=\"575pt\"\r\n viewBox=\"0.00 0.00 433.00 575.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 571)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M120.66,-36C120.66,-36 12,-36 12,-36 6,-36 0,-30 0,-24 0,-24 0,-12 0,-12 0,-6 6,0 12,0 12,0 120.66,0 120.66,0 126.66,0 132.66,-6 132.66,-12 132.66,-12 132.66,-24 132.66,-24 132.66,-30 126.66,-36 120.66,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"66.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tiểu phần nhỏ ribosome</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M397.11,-36C397.11,-36 367.11,-36 367.11,-36 361.11,-36 355.11,-30 355.11,-24 355.11,-24 355.11,-12 355.11,-12 355.11,-6 361.11,0 367.11,0 367.11,0 397.11,0 397.11,0 403.11,0 409.11,-6 409.11,-12 409.11,-12 409.11,-24 409.11,-24 409.11,-30 403.11,-36 397.11,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"382.11\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">mRNA</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M133.11,-18C197.5,-18 293.23,-18 344.9,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"344.7,-20.63 352.2,-18 344.7,-15.38 344.7,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"236.03\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">gắn kết và trượt tìm codon mở đầu</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M88.78,-95C88.78,-95 43.87,-95 43.87,-95 37.87,-95 31.87,-89 31.87,-83 31.87,-83 31.87,-71 31.87,-71 31.87,-65 37.87,-59 43.87,-59 43.87,-59 88.78,-59 88.78,-59 94.78,-59 100.78,-65 100.78,-71 100.78,-71 100.78,-83 100.78,-83 100.78,-89 94.78,-95 88.78,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"66.33\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Met&#45;tRNA</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M407.94,-95C407.94,-95 356.28,-95 356.28,-95 350.28,-95 344.28,-89 344.28,-83 344.28,-83 344.28,-71 344.28,-71 344.28,-65 350.28,-59 356.28,-59 356.28,-59 407.94,-59 407.94,-59 413.94,-59 419.94,-65 419.94,-71 419.94,-71 419.94,-83 419.94,-83 419.94,-89 413.94,-95 407.94,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"382.11\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">codon AUG</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M101.21,-77C157.35,-77 269.82,-77 333.78,-77\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"333.77,-79.63 341.27,-77 333.77,-74.38 333.77,-79.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"236.03\" y=\"-79.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">đối mã UAC khớp bổ sung với AUG</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M119.53,-154C119.53,-154 13.12,-154 13.12,-154 7.12,-154 1.12,-148 1.12,-142 1.12,-142 1.12,-130 1.12,-130 1.12,-124 7.12,-118 13.12,-118 13.12,-118 119.53,-118 119.53,-118 125.53,-118 131.53,-124 131.53,-130 131.53,-130 131.53,-142 131.53,-142 131.53,-148 125.53,-154 119.53,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"66.33\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tiểu phần lớn ribosome</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M412.82,-154C412.82,-154 351.41,-154 351.41,-154 345.41,-154 339.41,-148 339.41,-142 339.41,-142 339.41,-130 339.41,-130 339.41,-124 345.41,-118 351.41,-118 351.41,-118 412.82,-118 412.82,-118 418.82,-118 424.82,-124 424.82,-130 424.82,-130 424.82,-142 424.82,-142 424.82,-148 418.82,-154 412.82,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"382.11\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tiểu phần nhỏ</text>\r\n</g>\r\n<!-- N5&#45;&gt;N6 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N5&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M131.97,-136C190.28,-136 274.97,-136 329.05,-136\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"328.88,-138.63 336.38,-136 328.88,-133.38 328.88,-138.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"236.03\" y=\"-138.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">lắp ráp tạo phức hệ ribosome hoàn chỉnh</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M83.16,-213C83.16,-213 49.5,-213 49.5,-213 43.5,-213 37.5,-207 37.5,-201 37.5,-201 37.5,-189 37.5,-189 37.5,-183 43.5,-177 49.5,-177 49.5,-177 83.16,-177 83.16,-177 89.16,-177 95.16,-183 95.16,-189 95.16,-189 95.16,-201 95.16,-201 95.16,-207 89.16,-213 83.16,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"66.33\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">dịch mã</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M116.53,-272C116.53,-272 16.12,-272 16.12,-272 10.12,-272 4.12,-266 4.12,-260 4.12,-260 4.12,-248 4.12,-248 4.12,-242 10.12,-236 16.12,-236 16.12,-236 116.53,-236 116.53,-236 122.53,-236 128.53,-242 128.53,-248 128.53,-248 128.53,-260 128.53,-260 128.53,-266 122.53,-272 116.53,-272\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"66.33\" y=\"-250.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">codon mở đầu (AUG)</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M104.91,-331C104.91,-331 27.75,-331 27.75,-331 21.75,-331 15.75,-325 15.75,-319 15.75,-319 15.75,-307 15.75,-307 15.75,-301 21.75,-295 27.75,-295 27.75,-295 104.91,-295 104.91,-295 110.91,-295 116.91,-301 116.91,-307 116.91,-307 116.91,-319 116.91,-319 116.91,-325 110.91,-331 104.91,-331\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"66.33\" y=\"-309.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">anticodon (UAC)</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M81.33,-390C81.33,-390 51.33,-390 51.33,-390 45.33,-390 39.33,-384 39.33,-378 39.33,-378 39.33,-366 39.33,-366 39.33,-360 45.33,-354 51.33,-354 51.33,-354 81.33,-354 81.33,-354 87.33,-354 93.33,-360 93.33,-366 93.33,-366 93.33,-378 93.33,-378 93.33,-384 87.33,-390 81.33,-390\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"66.33\" y=\"-368.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">vị trí E</text>\r\n</g>\r\n<!-- N11 -->\r\n<g id=\"node11\" class=\"node\">\r\n<title>N11</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M81.33,-449C81.33,-449 51.33,-449 51.33,-449 45.33,-449 39.33,-443 39.33,-437 39.33,-437 39.33,-425 39.33,-425 39.33,-419 45.33,-413 51.33,-413 51.33,-413 81.33,-413 81.33,-413 87.33,-413 93.33,-419 93.33,-425 93.33,-425 93.33,-437 93.33,-437 93.33,-443 87.33,-449 81.33,-449\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"66.33\" y=\"-427.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">vị trí P</text>\r\n</g>\r\n<!-- N12 -->\r\n<g id=\"node12\" class=\"node\">\r\n<title>N12</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M81.33,-508C81.33,-508 51.33,-508 51.33,-508 45.33,-508 39.33,-502 39.33,-496 39.33,-496 39.33,-484 39.33,-484 39.33,-478 45.33,-472 51.33,-472 51.33,-472 81.33,-472 81.33,-472 87.33,-472 93.33,-478 93.33,-484 93.33,-484 93.33,-496 93.33,-496 93.33,-502 87.33,-508 81.33,-508\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"66.33\" y=\"-486.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">vị trí A</text>\r\n</g>\r\n<!-- N13 -->\r\n<g id=\"node13\" class=\"node\">\r\n<title>N13</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M114.28,-567C114.28,-567 18.38,-567 18.38,-567 12.38,-567 6.37,-561 6.37,-555 6.37,-555 6.37,-543 6.37,-543 6.37,-537 12.37,-531 18.37,-531 18.37,-531 114.28,-531 114.28,-531 120.28,-531 126.28,-537 126.28,-543 126.28,-543 126.28,-555 126.28,-555 126.28,-561 120.28,-567 114.28,-567\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"66.33\" y=\"-545.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ribosome hoàn chỉnh</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_28",
      "filename": "vn_diag_28_operon_lac_khong_lactose.png",
      "image_url": "vn_images/vn_diag_28_operon_lac_khong_lactose.png",
      "width": 1306,
      "height": 606,
      "title": "Cơ chế điều hòa hoạt động của operon Lac khi môi trường không có lactose",
      "subject": "Sinh học 12",
      "subject_key": "sinh12",
      "subject_vi": "Sinh học 12 (THPT)",
      "grade": "Khối 12",
      "subject_color": "blue",
      "subject_icon": "fa-helix",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương I: Di truyền phân tử",
      "lesson": "Bài 3: Điều hoà biểu hiện gene (Hình 3.1)",
      "diagram_type": "regulation_network",
      "taxonomy_key": "system_process",
      "taxonomy_vi": "Cơ chế Sinh lý & Di truyền Phân tử",
      "taxonomy_en": "Physiological & Molecular Processes",
      "taxonomy_color": "rose",
      "taxonomy_icon": "fa-gears",
      "key_entities": [
        "operon Lac",
        "gene điều hoà lacI",
        "protein ức chế",
        "vùng khởi động (P)",
        "vùng vận hành (O)",
        "các gene cấu trúc"
      ],
      "directional_relations": [
        {
          "source": "gene điều hoà lacI",
          "target": "protein ức chế",
          "relation": "phiên mã và dịch mã liên tục"
        },
        {
          "source": "protein ức chế",
          "target": "vùng vận hành (O)",
          "relation": "gắn đặc hiệu vào operator"
        },
        {
          "source": "protein ức chế gắn tại O",
          "target": "RNA polymerase",
          "relation": "ngăn cản enzyme phiên mã nhóm gene cấu trúc"
        }
      ],
      "gt_caption_vi": "Sơ đồ cơ chế điều hoà hoạt động của operon Lac ở vi khuẩn E. coli khi môi trường không có lactose: Gene điều hoà lacI tổng hợp protein ức chế ở trạng thái hoạt tính; protein ức chế liên kết chặt vào vùng vận hành (operator O), ngăn cản enzyme RNA polymerase bám vào promoter và trượt qua, làm cho các gene cấu trúc lacZ, lacY, lacA không được phiên mã.",
      "gt_caption_en": "The diagram details the genetic regulation of the lactose operon (lac operon) in E. coli in the absence of lactose: The regulatory gene lacI is constitutively transcribed and translated to produce active repressor protein monomers that form a tetramer; the active repressor specifically binds to the operator region (O); this physical steric hindrance prevents RNA polymerase from binding to the promoter (P) or initiating transcription of the structural genes lacZ, lacY, and lacA, thereby repressing enzymatic synthesis when lactose is absent.",
      "generated_caption_vi": "Sơ đồ khoa học minh họa trực quan nội dung 'Cơ chế điều hòa hoạt động của operon Lac khi môi trường không có lactose'. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: operon Lac, gene điều hoà lacI, protein ức chế, vùng khởi động (P), vùng vận hành (O), các gene cấu trúc. Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: gene điều hoà lacI phiên mã và dịch mã liên tục protein ức chế; protein ức chế gắn đặc hiệu vào operator vùng vận hành (O); protein ức chế gắn tại O ngăn cản enzyme phiên mã nhóm gene cấu trúc RNA polymerase.",
      "generated_caption_en": "The diagram illustrates the regulatory mechanism of the Lac operon in the absence of lactose, showing key components such as the lacI regulatory gene, which continuously transcribes and translates into a repressor protein. This repressor protein specifically binds to the operator region (O), preventing RNA polymerase from transcribing the structural genes.",
      "metrics_vi": {
        "bleu_1": 0.3983050847457627,
        "bleu_4": 0.06956521739130435,
        "rouge_l": 0.38947368421052625,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 0.0,
        "bertscore_f1": 91.04
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "gene điều hoà lacI",
            "title": "<b>gene điều hoà lacI</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "protein ức chế",
            "title": "<b>protein ức chế</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "vùng vận hành (O)",
            "title": "<b>vùng vận hành (O)</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "protein ức chế gắn tại O",
            "title": "<b>protein ức chế gắn tại O</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "RNA polymerase",
            "title": "<b>RNA polymerase</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "operon Lac",
            "title": "<b>operon Lac</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "vùng khởi động (P)",
            "title": "<b>vùng khởi động (P)</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "các gene cấu trúc",
            "title": "<b>các gene cấu trúc</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "phiên mã và dịch mã liên tục",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "gắn đặc hiệu vào operator",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N5",
            "label": "ngăn cản enzyme phiên mã nhóm gene cấu trúc",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"735pt\" height=\"280pt\"\r\n viewBox=\"0.00 0.00 735.00 280.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 276)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M109.79,-36C109.79,-36 25.88,-36 25.88,-36 19.88,-36 13.88,-30 13.88,-24 13.88,-24 13.88,-12 13.88,-12 13.88,-6 19.88,0 25.88,0 25.88,0 109.79,0 109.79,0 115.79,0 121.79,-6 121.79,-12 121.79,-12 121.79,-24 121.79,-24 121.79,-30 115.79,-36 109.79,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"67.83\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">gene điều hoà lacI</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M456.7,-36C456.7,-36 391.54,-36 391.54,-36 385.54,-36 379.54,-30 379.54,-24 379.54,-24 379.54,-12 379.54,-12 379.54,-6 385.54,0 391.54,0 391.54,0 456.7,0 456.7,0 462.7,0 468.7,-6 468.7,-12 468.7,-12 468.7,-24 468.7,-24 468.7,-30 462.7,-36 456.7,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"424.12\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">protein ức chế</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M122.25,-18C188.91,-18 302.23,-18 369.14,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"368.84,-20.63 376.34,-18 368.84,-15.38 368.84,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"254.41\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">phiên mã và dịch mã liên tục</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M715.48,-36C715.48,-36 630.07,-36 630.07,-36 624.07,-36 618.07,-30 618.07,-24 618.07,-24 618.07,-12 618.07,-12 618.07,-6 624.07,0 630.07,0 630.07,0 715.48,0 715.48,0 721.48,0 727.48,-6 727.48,-12 727.48,-12 727.48,-24 727.48,-24 727.48,-30 721.48,-36 715.48,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"672.78\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">vùng vận hành (O)</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M468.93,-18C507.38,-18 563.8,-18 607.39,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"607.38,-20.63 614.88,-18 607.38,-15.38 607.38,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"546.57\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">gắn đặc hiệu vào operator</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M123.66,-95C123.66,-95 12,-95 12,-95 6,-95 0,-89 0,-83 0,-83 0,-71 0,-71 0,-65 6,-59 12,-59 12,-59 123.66,-59 123.66,-59 129.66,-59 135.66,-65 135.66,-71 135.66,-71 135.66,-83 135.66,-83 135.66,-89 129.66,-95 123.66,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"67.83\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">protein ức chế gắn tại O</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M463.07,-95C463.07,-95 385.16,-95 385.16,-95 379.16,-95 373.16,-89 373.16,-83 373.16,-83 373.16,-71 373.16,-71 373.16,-65 379.16,-59 385.16,-59 385.16,-59 463.07,-59 463.07,-59 469.07,-59 475.07,-65 475.07,-71 475.07,-71 475.07,-83 475.07,-83 475.07,-89 469.07,-95 463.07,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"424.12\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">RNA polymerase</text>\r\n</g>\r\n<!-- N4&#45;&gt;N5 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N4&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M135.88,-77C201.25,-77 299.76,-77 362.75,-77\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"362.7,-79.63 370.2,-77 362.7,-74.38 362.7,-79.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"254.41\" y=\"-79.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">ngăn cản enzyme phiên mã nhóm gene cấu trúc</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M92.91,-154C92.91,-154 42.75,-154 42.75,-154 36.75,-154 30.75,-148 30.75,-142 30.75,-142 30.75,-130 30.75,-130 30.75,-124 36.75,-118 42.75,-118 42.75,-118 92.91,-118 92.91,-118 98.91,-118 104.91,-124 104.91,-130 104.91,-130 104.91,-142 104.91,-142 104.91,-148 98.91,-154 92.91,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"67.83\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">operon Lac</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M112.04,-213C112.04,-213 23.63,-213 23.63,-213 17.63,-213 11.63,-207 11.63,-201 11.63,-201 11.63,-189 11.63,-189 11.63,-183 17.63,-177 23.63,-177 23.63,-177 112.04,-177 112.04,-177 118.04,-177 124.04,-183 124.04,-189 124.04,-189 124.04,-201 124.04,-201 124.04,-207 118.04,-213 112.04,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"67.83\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">vùng khởi động (P)</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M108.29,-272C108.29,-272 27.38,-272 27.38,-272 21.38,-272 15.38,-266 15.38,-260 15.38,-260 15.38,-248 15.38,-248 15.38,-242 21.38,-236 27.38,-236 27.38,-236 108.29,-236 108.29,-236 114.29,-236 120.29,-242 120.29,-248 120.29,-248 120.29,-260 120.29,-260 120.29,-266 114.29,-272 108.29,-272\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"67.83\" y=\"-250.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">các gene cấu trúc</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_29",
      "filename": "vn_diag_29_mo_hinh_nguyen_tu_bohr_sommerfeld.png",
      "image_url": "vn_images/vn_diag_29_mo_hinh_nguyen_tu_bohr_sommerfeld.png",
      "width": 529,
      "height": 918,
      "title": "So sánh mô hình hành tinh nguyên tử (Bohr) và mô hình đám mây electron hiện đại",
      "subject": "Hóa học 10",
      "subject_key": "hoa10",
      "subject_vi": "Hóa học 10 (THPT)",
      "grade": "Khối 10",
      "subject_color": "purple",
      "subject_icon": "fa-atom",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương 1: Cấu tạo nguyên tử",
      "lesson": "Bài 3: Cấu trúc lớp vỏ electron nguyên tử (Hình 3.1 & 3.2)",
      "diagram_type": "comparative_physical_model",
      "taxonomy_key": "astronomy_physics",
      "taxonomy_vi": "Thiên văn & Vật lý - Hóa học",
      "taxonomy_en": "Astronomy & Physical Science",
      "taxonomy_color": "purple",
      "taxonomy_icon": "fa-moon",
      "key_entities": [
        "nguyên tử",
        "hạt nhân",
        "electron",
        "quỹ đạo electron",
        "mô hình hành tinh nguyên tử",
        "Rutherford - Bohr",
        "mô hình hiện đại",
        "đám mây electron",
        "nguyên tử hydrogen",
        "xác suất tìm thấy electron"
      ],
      "directional_relations": [
        {
          "source": "hạt nhân",
          "target": "tâm nguyên tử",
          "relation": "mang điện tích dương ở trung tâm"
        },
        {
          "source": "electron",
          "target": "quỹ đạo tròn/bầu dục",
          "relation": "chuyển động theo quỹ đạo xác định (Bohr)"
        },
        {
          "source": "electron",
          "target": "đám mây electron",
          "relation": "phân bố theo xác suất mật độ điểm (hiện đại)"
        }
      ],
      "gt_caption_vi": "Sơ đồ so sánh hai mô hình vật lý kinh điển mô tả cấu trúc vỏ nguyên tử: (a) Hình 3.1 là mô hình hành tinh nguyên tử của Rutherford - Bohr và Sommerfeld, trong đó các electron mang điện tích âm chuyển động xung quanh hạt nhân mang điện tích dương theo những quỹ đạo tròn hoặc elip xác định tương tự như các hành tinh quay quanh Mặt Trời; (b) Hình 3.2 là mô hình hiện đại mô tả chuyển động của electron trong nguyên tử hydrogen dưới dạng đám mây electron, theo đó electron chuyển động rất nhanh không theo quỹ đạo cố định mà phân bố trong không gian quanh hạt nhân, nơi có mật độ điểm chấm đen càng dày thì xác suất tìm thấy electron càng cao (khoảng 90%).",
      "gt_caption_en": "The comparative diagram contrasts two historical atomic models: (a) Figure 3.1 depicts the Rutherford-Bohr-Sommerfeld planetary model, where negatively charged electrons orbit a central positive nucleus along discrete circular or elliptical planetary tracks; (b) Figure 3.2 depicts the modern quantum-mechanical electron cloud model for hydrogen, wherein electrons do not follow deterministic trajectories but exist as an orbital probability density cloud, with higher dot density representing greater probability (~90%) of locating the electron.",
      "generated_caption_vi": "Sơ đồ mô tả chi tiết đặc điểm cấu tạo của so sánh mô hình hành tinh nguyên tử (bohr) và mô hình đám mây electron hiện đại trong chương trình Hóa học 10. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: nguyên tử, hạt nhân, electron, quỹ đạo electron, mô hình hành tinh nguyên tử, Rutherford - Bohr, mô hình hiện đại cùng các cấu trúc liên quan (đám mây electron, nguyên tử hydrogen, xác suất tìm thấy electron). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: hạt nhân mang điện tích dương ở trung tâm tâm nguyên tử; electron chuyển động theo quỹ đạo xác định (Bohr) quỹ đạo tròn/bầu dục; electron phân bố theo xác suất mật độ điểm (hiện đại) đám mây electron.",
      "generated_caption_en": "The diagram compares the planetary atomic model proposed by Rutherford and Bohr, where electrons orbit the nucleus in defined circular or elliptical paths, with the modern electron cloud model, which depicts electrons distributed around the nucleus according to their probability density. In the classical model, the positively charged nucleus is at the center of the atom, while in the modern model, electrons are shown as a diffuse cloud surrounding the nucleus, indicating regions of high probability for finding an electron.",
      "metrics_vi": {
        "bleu_1": 0.5357142857142857,
        "bleu_4": 0.06569343065693431,
        "rouge_l": 0.3115942028985507,
        "entity_recall": 1.0,
        "dir_accuracy": 0.6666666666666666
      },
      "metrics_en": {
        "cider": 32.64,
        "bertscore_f1": 88.82
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "hạt nhân",
            "title": "<b>hạt nhân</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "tâm nguyên tử",
            "title": "<b>tâm nguyên tử</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "electron",
            "title": "<b>electron</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "quỹ đạo tròn/bầu dục",
            "title": "<b>quỹ đạo tròn/bầu dục</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "đám mây electron",
            "title": "<b>đám mây electron</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "nguyên tử",
            "title": "<b>nguyên tử</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "quỹ đạo electron",
            "title": "<b>quỹ đạo electron</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "mô hình hành tinh nguyên tử",
            "title": "<b>mô hình hành tinh nguyên tử</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "Rutherford - Bohr",
            "title": "<b>Rutherford - Bohr</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "mô hình hiện đại",
            "title": "<b>mô hình hiện đại</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N11",
            "label": "nguyên tử hydrogen",
            "title": "<b>nguyên tử hydrogen</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N12",
            "label": "xác suất tìm thấy electron",
            "title": "<b>xác suất tìm thấy electron</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "mang điện tích dương ở trung tâm",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "chuyển động theo quỹ đạo xác định (Bohr)",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N5",
            "label": "phân bố theo xác suất mật độ điểm (hiện đại)",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"514pt\" height=\"545pt\"\r\n viewBox=\"0.00 0.00 514.00 545.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 541)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M98.16,-36C98.16,-36 60,-36 60,-36 54,-36 48,-30 48,-24 48,-24 48,-12 48,-12 48,-6 54,0 60,0 60,0 98.16,0 98.16,0 104.16,0 110.16,-6 110.16,-12 110.16,-12 110.16,-24 110.16,-24 110.16,-30 104.16,-36 98.16,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"79.08\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">hạt nhân</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M478.07,-36C478.07,-36 412.16,-36 412.16,-36 406.16,-36 400.16,-30 400.16,-24 400.16,-24 400.16,-12 400.16,-12 400.16,-6 406.16,0 412.16,0 412.16,0 478.07,0 478.07,0 484.07,0 490.07,-6 490.07,-12 490.07,-12 490.07,-24 490.07,-24 490.07,-30 484.07,-36 478.07,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"445.11\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tâm nguyên tử</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M110.49,-18C172.06,-18 312.21,-18 389.84,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"389.68,-20.63 397.18,-18 389.68,-15.38 389.68,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"271.28\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">mang điện tích dương ở trung tâm</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M96.28,-124C96.28,-124 61.87,-124 61.87,-124 55.87,-124 49.87,-118 49.87,-112 49.87,-112 49.87,-100 49.87,-100 49.87,-94 55.87,-88 61.87,-88 61.87,-88 96.28,-88 96.28,-88 102.28,-88 108.28,-94 108.28,-100 108.28,-100 108.28,-112 108.28,-112 108.28,-118 102.28,-124 96.28,-124\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"79.08\" y=\"-102.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">electron</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M493.82,-168C493.82,-168 396.41,-168 396.41,-168 390.41,-168 384.41,-162 384.41,-156 384.41,-156 384.41,-144 384.41,-144 384.41,-138 390.41,-132 396.41,-132 396.41,-132 493.82,-132 493.82,-132 499.82,-132 505.82,-138 505.82,-144 505.82,-144 505.82,-156 505.82,-156 505.82,-162 499.82,-168 493.82,-168\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"445.11\" y=\"-146.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">quỹ đạo tròn/bầu dục</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M108.48,-109.69C127.14,-112.1 152.1,-115.29 174.16,-118 242.07,-126.36 319.64,-135.51 374.15,-141.88\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"373.59,-144.46 381.35,-142.72 374.2,-139.24 373.59,-144.46\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"271.28\" y=\"-143.2\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">chuyển động theo quỹ đạo xác định (Bohr)</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M485.94,-109C485.94,-109 404.28,-109 404.28,-109 398.28,-109 392.28,-103 392.28,-97 392.28,-97 392.28,-85 392.28,-85 392.28,-79 398.28,-73 404.28,-73 404.28,-73 485.94,-73 485.94,-73 491.94,-73 497.94,-79 497.94,-85 497.94,-85 497.94,-97 497.94,-97 497.94,-103 491.94,-109 485.94,-109\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"445.11\" y=\"-87.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">đám mây electron</text>\r\n</g>\r\n<!-- N3&#45;&gt;N5 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M108.65,-104.82C167.23,-102.41 302.19,-96.85 381.92,-93.56\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"381.74,-96.2 389.12,-93.27 381.52,-90.95 381.74,-96.2\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"271.28\" y=\"-104.2\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">phân bố theo xác suất mật độ điểm (hiện đại)</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M101.53,-183C101.53,-183 56.62,-183 56.62,-183 50.62,-183 44.62,-177 44.62,-171 44.62,-171 44.62,-159 44.62,-159 44.62,-153 50.62,-147 56.62,-147 56.62,-147 101.53,-147 101.53,-147 107.53,-147 113.53,-153 113.53,-159 113.53,-159 113.53,-171 113.53,-171 113.53,-177 107.53,-183 101.53,-183\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"79.08\" y=\"-161.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">nguyên tử</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M116.91,-242C116.91,-242 41.25,-242 41.25,-242 35.25,-242 29.25,-236 29.25,-230 29.25,-230 29.25,-218 29.25,-218 29.25,-212 35.25,-206 41.25,-206 41.25,-206 116.91,-206 116.91,-206 122.91,-206 128.91,-212 128.91,-218 128.91,-218 128.91,-230 128.91,-230 128.91,-236 122.91,-242 116.91,-242\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"79.08\" y=\"-220.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">quỹ đạo electron</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M146.16,-301C146.16,-301 12,-301 12,-301 6,-301 0,-295 0,-289 0,-289 0,-277 0,-277 0,-271 6,-265 12,-265 12,-265 146.16,-265 146.16,-265 152.16,-265 158.16,-271 158.16,-277 158.16,-277 158.16,-289 158.16,-289 158.16,-295 152.16,-301 146.16,-301\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"79.08\" y=\"-279.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">mô hình hành tinh nguyên tử</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M119.53,-360C119.53,-360 38.62,-360 38.62,-360 32.62,-360 26.62,-354 26.62,-348 26.62,-348 26.62,-336 26.62,-336 26.62,-330 32.62,-324 38.62,-324 38.62,-324 119.53,-324 119.53,-324 125.53,-324 131.53,-330 131.53,-336 131.53,-336 131.53,-348 131.53,-348 131.53,-354 125.53,-360 119.53,-360\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"79.08\" y=\"-338.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Rutherford &#45; Bohr</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M116.91,-419C116.91,-419 41.25,-419 41.25,-419 35.25,-419 29.25,-413 29.25,-407 29.25,-407 29.25,-395 29.25,-395 29.25,-389 35.25,-383 41.25,-383 41.25,-383 116.91,-383 116.91,-383 122.91,-383 128.91,-389 128.91,-395 128.91,-395 128.91,-407 128.91,-407 128.91,-413 122.91,-419 116.91,-419\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"79.08\" y=\"-397.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">mô hình hiện đại</text>\r\n</g>\r\n<!-- N11 -->\r\n<g id=\"node11\" class=\"node\">\r\n<title>N11</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M125.53,-478C125.53,-478 32.62,-478 32.62,-478 26.62,-478 20.62,-472 20.62,-466 20.62,-466 20.62,-454 20.62,-454 20.62,-448 26.62,-442 32.62,-442 32.62,-442 125.53,-442 125.53,-442 131.53,-442 137.53,-448 137.53,-454 137.53,-454 137.53,-466 137.53,-466 137.53,-472 131.53,-478 125.53,-478\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"79.08\" y=\"-456.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">nguyên tử hydrogen</text>\r\n</g>\r\n<!-- N12 -->\r\n<g id=\"node12\" class=\"node\">\r\n<title>N12</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M138.28,-537C138.28,-537 19.88,-537 19.88,-537 13.88,-537 7.87,-531 7.87,-525 7.87,-525 7.87,-513 7.87,-513 7.87,-507 13.87,-501 19.87,-501 19.87,-501 138.28,-501 138.28,-501 144.28,-501 150.28,-507 150.28,-513 150.28,-513 150.28,-525 150.28,-525 150.28,-531 144.28,-537 138.28,-537\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"79.08\" y=\"-515.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">xác suất tìm thấy electron</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_30",
      "filename": "vn_diag_30_hinh_dang_orbital_s_p.png",
      "image_url": "vn_images/vn_diag_30_hinh_dang_orbital_s_p.png",
      "width": 1153,
      "height": 351,
      "title": "Hình dạng và sự định hướng không gian của các orbital nguyên tử s và p",
      "subject": "Hóa học 10",
      "subject_key": "hoa10",
      "subject_vi": "Hóa học 10 (THPT)",
      "grade": "Khối 10",
      "subject_color": "purple",
      "subject_icon": "fa-atom",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương 1: Cấu tạo nguyên tử",
      "lesson": "Bài 3: Cấu trúc lớp vỏ electron nguyên tử (Hình 3.3)",
      "diagram_type": "spatial_orbital_geometry",
      "taxonomy_key": "astronomy_physics",
      "taxonomy_vi": "Thiên văn & Vật lý - Hóa học",
      "taxonomy_en": "Astronomy & Physical Science",
      "taxonomy_color": "purple",
      "taxonomy_icon": "fa-moon",
      "key_entities": [
        "orbital nguyên tử",
        "AO s",
        "AO px",
        "AO py",
        "AO pz",
        "hệ toạ độ Oxyz",
        "hình cầu",
        "hình số 8 nổi",
        "định hướng không gian"
      ],
      "directional_relations": [
        {
          "source": "AO s",
          "target": "hình cầu",
          "relation": "đối xứng tâm không gian"
        },
        {
          "source": "AO px",
          "target": "trục Ox",
          "relation": "hai thuỳ định hướng dọc trục x"
        },
        {
          "source": "AO py",
          "target": "trục Oy",
          "relation": "hai thuỳ định hướng dọc trục y"
        },
        {
          "source": "AO pz",
          "target": "trục Oz",
          "relation": "hai thuỳ định hướng dọc trục z"
        }
      ],
      "gt_caption_vi": "Sơ đồ biểu diễn hình dạng không gian 3 chiều và sự định hướng của các orbital nguyên tử (AO) trong hệ toạ độ Descartes Oxyz: Orbital s (AO s) có dạng hình cầu đối xứng hoàn toàn trong không gian quanh hạt nhân; ba orbital p gồm AO px, AO py và AO pz có dạng hình số 8 nổi (hai cánh đối xứng qua gốc toạ độ) và định hướng vuông góc với nhau dọc theo ba trục toạ độ tương ứng là trục Ox, trục Oy và trục Oz, phản ánh tính dị hướng không gian của các electron phân lớp p.",
      "gt_caption_en": "The spatial geometric diagram illustrates the 3D shapes and spatial orientations of atomic orbitals (AO) in a Cartesian coordinate system (Oxyz): The s orbital (AO s) exhibits spherical symmetry centered around the nucleus; the three degenerate p orbitals (AO px, AO py, AO pz) exhibit dumbbell or figure-eight shapes with two symmetrical lobes oriented orthogonally along the respective x, y, and z Cartesian axes, demonstrating directional electron density distributions.",
      "generated_caption_vi": "Sơ đồ khoa học minh họa trực quan nội dung 'Hình dạng và sự định hướng không gian của các orbital nguyên tử s và p'. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: orbital nguyên tử, AO s, AO px, AO py, AO pz, hệ toạ độ Oxyz, hình cầu cùng các cấu trúc liên quan (hình số 8 nổi, định hướng không gian). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: AO s đối xứng tâm không gian hình cầu; AO px hai thuỳ định hướng dọc trục x trục Ox; AO py hai thuỳ định hướng dọc trục y trục Oy; AO pz hai thuỳ định hướng dọc trục z trục Oz.",
      "generated_caption_en": "The diagram illustrates the spatial shapes and orientations of atomic orbitals for s and p types, showing how they align with the Oxyz coordinate system. The s orbital is depicted as a sphere symmetrically centered around a point, while the p orbitals (px, py, pz) are illustrated as two-lobed figures aligned along their respective axes (Ox, Oy, Oz).",
      "metrics_vi": {
        "bleu_1": 0.46875,
        "bleu_4": 0.064,
        "rouge_l": 0.32618025751072954,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 26.09,
        "bertscore_f1": 89.28
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "AO s",
            "title": "<b>AO s</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "hình cầu",
            "title": "<b>hình cầu</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "AO px",
            "title": "<b>AO px</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "trục Ox",
            "title": "<b>trục Ox</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "AO py",
            "title": "<b>AO py</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "trục Oy",
            "title": "<b>trục Oy</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "AO pz",
            "title": "<b>AO pz</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "trục Oz",
            "title": "<b>trục Oz</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "orbital nguyên tử",
            "title": "<b>orbital nguyên tử</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "hệ toạ độ Oxyz",
            "title": "<b>hệ toạ độ Oxyz</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N11",
            "label": "hình số 8 nổi",
            "title": "<b>hình số 8 nổi</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N12",
            "label": "định hướng không gian",
            "title": "<b>định hướng không gian</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "đối xứng tâm không gian",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "hai thuỳ định hướng dọc trục x",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N5",
            "to": "N6",
            "label": "hai thuỳ định hướng dọc trục y",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N7",
            "to": "N8",
            "label": "hai thuỳ định hướng dọc trục z",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"363pt\" height=\"457pt\"\r\n viewBox=\"0.00 0.00 363.00 457.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 453)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M80.95,-36C80.95,-36 50.95,-36 50.95,-36 44.95,-36 38.95,-30 38.95,-24 38.95,-24 38.95,-12 38.95,-12 38.95,-6 44.95,0 50.95,0 50.95,0 80.95,0 80.95,0 86.95,0 92.95,-6 92.95,-12 92.95,-12 92.95,-24 92.95,-24 92.95,-30 86.95,-36 80.95,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"65.95\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">AO s</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M343.07,-36C343.07,-36 305.66,-36 305.66,-36 299.66,-36 293.66,-30 293.66,-24 293.66,-24 293.66,-12 293.66,-12 293.66,-6 299.66,0 305.66,0 305.66,0 343.07,0 343.07,0 349.07,0 355.07,-6 355.07,-12 355.07,-12 355.07,-24 355.07,-24 355.07,-30 349.07,-36 343.07,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"324.37\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">hình cầu</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M93.43,-18C138.53,-18 230.52,-18 283.46,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"283.27,-20.63 290.77,-18 283.27,-15.38 283.27,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"212.78\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">đối xứng tâm không gian</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M80.95,-95C80.95,-95 50.95,-95 50.95,-95 44.95,-95 38.95,-89 38.95,-83 38.95,-83 38.95,-71 38.95,-71 38.95,-65 44.95,-59 50.95,-59 50.95,-59 80.95,-59 80.95,-59 86.95,-59 92.95,-65 92.95,-71 92.95,-71 92.95,-83 92.95,-83 92.95,-89 86.95,-95 80.95,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"65.95\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">AO px</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M339.69,-95C339.69,-95 309.04,-95 309.04,-95 303.04,-95 297.04,-89 297.04,-83 297.04,-83 297.04,-71 297.04,-71 297.04,-65 303.04,-59 309.04,-59 309.04,-59 339.69,-59 339.69,-59 345.69,-59 351.69,-65 351.69,-71 351.69,-71 351.69,-83 351.69,-83 351.69,-89 345.69,-95 339.69,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"324.37\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">trục Ox</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M93.43,-77C139.4,-77 234.06,-77 286.45,-77\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"286.43,-79.63 293.93,-77 286.43,-74.38 286.43,-79.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"212.78\" y=\"-79.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">hai thuỳ định hướng dọc trục x</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M80.95,-154C80.95,-154 50.95,-154 50.95,-154 44.95,-154 38.95,-148 38.95,-142 38.95,-142 38.95,-130 38.95,-130 38.95,-124 44.95,-118 50.95,-118 50.95,-118 80.95,-118 80.95,-118 86.95,-118 92.95,-124 92.95,-130 92.95,-130 92.95,-142 92.95,-142 92.95,-148 86.95,-154 80.95,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"65.95\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">AO py</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M339.69,-154C339.69,-154 309.04,-154 309.04,-154 303.04,-154 297.04,-148 297.04,-142 297.04,-142 297.04,-130 297.04,-130 297.04,-124 303.04,-118 309.04,-118 309.04,-118 339.69,-118 339.69,-118 345.69,-118 351.69,-124 351.69,-130 351.69,-130 351.69,-142 351.69,-142 351.69,-148 345.69,-154 339.69,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"324.37\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">trục Oy</text>\r\n</g>\r\n<!-- N5&#45;&gt;N6 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N5&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M93.43,-136C139.4,-136 234.06,-136 286.45,-136\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"286.43,-138.63 293.93,-136 286.43,-133.38 286.43,-138.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"212.78\" y=\"-138.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">hai thuỳ định hướng dọc trục y</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M80.95,-213C80.95,-213 50.95,-213 50.95,-213 44.95,-213 38.95,-207 38.95,-201 38.95,-201 38.95,-189 38.95,-189 38.95,-183 44.95,-177 50.95,-177 50.95,-177 80.95,-177 80.95,-177 86.95,-177 92.95,-183 92.95,-189 92.95,-189 92.95,-201 92.95,-201 92.95,-207 86.95,-213 80.95,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"65.95\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">AO pz</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M339.69,-213C339.69,-213 309.04,-213 309.04,-213 303.04,-213 297.04,-207 297.04,-201 297.04,-201 297.04,-189 297.04,-189 297.04,-183 303.04,-177 309.04,-177 309.04,-177 339.69,-177 339.69,-177 345.69,-177 351.69,-183 351.69,-189 351.69,-189 351.69,-201 351.69,-201 351.69,-207 345.69,-213 339.69,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"324.37\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">trục Oz</text>\r\n</g>\r\n<!-- N7&#45;&gt;N8 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N7&#45;&gt;N8</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M93.43,-195C139.4,-195 234.06,-195 286.45,-195\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"286.43,-197.63 293.93,-195 286.43,-192.38 286.43,-197.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"212.78\" y=\"-197.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">hai thuỳ định hướng dọc trục z</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M104.53,-272C104.53,-272 27.37,-272 27.37,-272 21.37,-272 15.37,-266 15.37,-260 15.37,-260 15.37,-248 15.37,-248 15.37,-242 21.37,-236 27.37,-236 27.37,-236 104.53,-236 104.53,-236 110.53,-236 116.53,-242 116.53,-248 116.53,-248 116.53,-260 116.53,-260 116.53,-266 110.53,-272 104.53,-272\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"65.95\" y=\"-250.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">orbital nguyên tử</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M100.03,-331C100.03,-331 31.87,-331 31.87,-331 25.87,-331 19.87,-325 19.87,-319 19.87,-319 19.87,-307 19.87,-307 19.87,-301 25.87,-295 31.87,-295 31.87,-295 100.03,-295 100.03,-295 106.03,-295 112.03,-301 112.03,-307 112.03,-307 112.03,-319 112.03,-319 112.03,-325 106.03,-331 100.03,-331\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"65.95\" y=\"-309.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">hệ toạ độ Oxyz</text>\r\n</g>\r\n<!-- N11 -->\r\n<g id=\"node11\" class=\"node\">\r\n<title>N11</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M94.78,-390C94.78,-390 37.12,-390 37.12,-390 31.12,-390 25.12,-384 25.12,-378 25.12,-378 25.12,-366 25.12,-366 25.12,-360 31.12,-354 37.12,-354 37.12,-354 94.78,-354 94.78,-354 100.78,-354 106.78,-360 106.78,-366 106.78,-366 106.78,-378 106.78,-378 106.78,-384 100.78,-390 94.78,-390\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"65.95\" y=\"-368.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">hình số 8 nổi</text>\r\n</g>\r\n<!-- N12 -->\r\n<g id=\"node12\" class=\"node\">\r\n<title>N12</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M119.91,-449C119.91,-449 12,-449 12,-449 6,-449 0,-443 0,-437 0,-437 0,-425 0,-425 0,-419 6,-413 12,-413 12,-413 119.91,-413 119.91,-413 125.91,-413 131.91,-419 131.91,-425 131.91,-425 131.91,-437 131.91,-437 131.91,-443 125.91,-449 119.91,-449\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"65.95\" y=\"-427.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">định hướng không gian</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_31",
      "filename": "vn_diag_31_vong_doi_bien_thai_ech.png",
      "image_url": "vn_images/vn_diag_31_vong_doi_bien_thai_ech.png",
      "width": 654,
      "height": 709,
      "title": "Sự phát triển có biến thái ở Ếch đồng",
      "subject": "Sinh học 7",
      "subject_key": "sinh7",
      "subject_vi": "Sinh học 7 (THCS)",
      "grade": "Khối 7",
      "subject_color": "teal",
      "subject_icon": "fa-frog",
      "series": "Chương trình GDPT (NXB Giáo dục Việt Nam)",
      "chapter": "Chương 6: Ngành Động vật có xương sống",
      "lesson": "Bài 35: Ếch đồng (Hình 35.4)",
      "diagram_type": "life_cycle",
      "taxonomy_key": "life_cycle",
      "taxonomy_vi": "Vòng đời & Phân bào",
      "taxonomy_en": "Life Cycles & Cell Division",
      "taxonomy_color": "indigo",
      "taxonomy_icon": "fa-arrows-spin",
      "key_entities": [
        "ếch trưởng thành",
        "ghép đôi",
        "đẻ trứng",
        "trứng",
        "phôi",
        "nòng nọc",
        "chân sau",
        "chân trước",
        "rụng đuôi",
        "ếch con",
        "biến thái"
      ],
      "directional_relations": [
        {
          "source": "ếch trưởng thành",
          "target": "đẻ trứng",
          "relation": "sinh sản thụ tinh ngoài bờ nước"
        },
        {
          "source": "đẻ trứng",
          "target": "nòng nọc",
          "relation": "nở ra nòng nọc hô hấp bằng mang ngoài"
        },
        {
          "source": "nòng nọc",
          "target": "chân sau",
          "relation": "phát triển mọc chân sau"
        },
        {
          "source": "chân sau",
          "target": "chân trước",
          "relation": "mọc tiếp chân trước"
        },
        {
          "source": "chân trước",
          "target": "ếch con",
          "relation": "tiêu biến đuôi hoàn thiện ếch con lên cạn"
        }
      ],
      "gt_caption_vi": "Sơ đồ vòng đời phát triển có biến thái hoàn toàn ở ếch đồng: Đến mùa sinh sản, ếch trưởng thành ghép đôi tìm đến bờ nước để đẻ trứng và thụ tinh ngoài; trứng thụ tinh phát triển thành phôi rồi nở ra nòng nọc sống dưới nước và hô hấp bằng mang ngoài; qua quá trình biến thái, nòng nọc lần lượt mọc chân sau, mọc tiếp chân trước, rụng đuôi và tiêu biến mang, phổi và da phát triển để thích nghi hô hấp trên cạn, hoàn thiện cấu tạo ếch con di chuyển lên cạn sinh sống.",
      "gt_caption_en": "The life cycle diagram illustrates complete metamorphosis in the pond frog: During breeding season, adult frogs pair at water edges for external fertilization, producing egg clutches; fertilized eggs develop into swimming tadpoles equipped with tails and external gills for aquatic respiration; through gradual metamorphosis, tadpoles sequentially develop hindlimbs then forelimbs, while tails and gills resorb as lungs and cutaneous surfaces adapt for terrestrial respiration, culminating in juvenile frogs emerging onto land.",
      "generated_caption_vi": "Sơ đồ biểu diễn chu trình sinh học khép kín và tiến trình phát triển của sự phát triển có biến thái ở ếch đồng. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: ếch trưởng thành, ghép đôi, đẻ trứng, trứng, phôi, nòng nọc, chân sau cùng các cấu trúc liên quan (chân trước, rụng đuôi, ếch con, biến thái). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: ếch trưởng thành sinh sản thụ tinh ngoài bờ nước đẻ trứng; đẻ trứng nở ra nòng nọc hô hấp bằng mang ngoài nòng nọc; nòng nọc phát triển mọc chân sau chân sau; chân sau mọc tiếp chân trước chân trước; chân trước tiêu biến đuôi hoàn thiện ếch con lên cạn ếch con.",
      "generated_caption_en": "The diagram illustrates the metamorphosis process of a toad, starting with mature toads that reproduce through external fertilization near water bodies, producing eggs. These eggs develop into tadpoles which grow hind legs first, followed by front legs, and eventually lose their tails to become juvenile toads capable of moving onto land.",
      "metrics_vi": {
        "bleu_1": 0.49264705882352944,
        "bleu_4": 0.08270676691729323,
        "rouge_l": 0.39662447257383965,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 0.31,
        "bertscore_f1": 89.46
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "ếch trưởng thành",
            "title": "<b>ếch trưởng thành</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "đẻ trứng",
            "title": "<b>đẻ trứng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "nòng nọc",
            "title": "<b>nòng nọc</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "chân sau",
            "title": "<b>chân sau</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "chân trước",
            "title": "<b>chân trước</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "ếch con",
            "title": "<b>ếch con</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "ghép đôi",
            "title": "<b>ghép đôi</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "trứng",
            "title": "<b>trứng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "phôi",
            "title": "<b>phôi</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "rụng đuôi",
            "title": "<b>rụng đuôi</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N11",
            "label": "biến thái",
            "title": "<b>biến thái</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "sinh sản thụ tinh ngoài bờ nước",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "nở ra nòng nọc hô hấp bằng mang ngoài",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "phát triển mọc chân sau",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N5",
            "label": "mọc tiếp chân trước",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N5",
            "to": "N6",
            "label": "tiêu biến đuôi hoàn thiện ếch con lên cạn",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"1266pt\" height=\"339pt\"\r\n viewBox=\"0.00 0.00 1266.00 339.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 335)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M92.16,-36C92.16,-36 12,-36 12,-36 6,-36 0,-30 0,-24 0,-24 0,-12 0,-12 0,-6 6,0 12,0 12,0 92.16,0 92.16,0 98.16,0 104.16,-6 104.16,-12 104.16,-12 104.16,-24 104.16,-24 104.16,-30 98.16,-36 92.16,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"52.08\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ếch trưởng thành</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M321.32,-36C321.32,-36 283.91,-36 283.91,-36 277.91,-36 271.91,-30 271.91,-24 271.91,-24 271.91,-12 271.91,-12 271.91,-6 277.91,0 283.91,0 283.91,0 321.32,0 321.32,0 327.32,0 333.32,-6 333.32,-12 333.32,-12 333.32,-24 333.32,-24 333.32,-30 327.32,-36 321.32,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"302.61\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">đẻ trứng</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M104.58,-18C151.21,-18 218.94,-18 261.62,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"261.41,-20.63 268.91,-18 261.41,-15.38 261.41,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"188.03\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">sinh sản thụ tinh ngoài bờ nước</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M591.73,-36C591.73,-36 551.32,-36 551.32,-36 545.32,-36 539.32,-30 539.32,-24 539.32,-24 539.32,-12 539.32,-12 539.32,-6 545.32,0 551.32,0 551.32,0 591.73,0 591.73,0 597.73,0 603.73,-6 603.73,-12 603.73,-12 603.73,-24 603.73,-24 603.73,-30 597.73,-36 591.73,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"571.52\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">nòng nọc</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M333.71,-18C381.49,-18 474.79,-18 528.93,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"528.66,-20.63 536.16,-18 528.66,-15.38 528.66,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"436.32\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">nở ra nòng nọc hô hấp bằng mang ngoài</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M790.14,-36C790.14,-36 750.48,-36 750.48,-36 744.48,-36 738.48,-30 738.48,-24 738.48,-24 738.48,-12 738.48,-12 738.48,-6 744.48,0 750.48,0 750.48,0 790.14,0 790.14,0 796.14,0 802.14,-6 802.14,-12 802.14,-12 802.14,-24 802.14,-24 802.14,-30 796.14,-36 790.14,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"770.31\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">chân sau</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M604.14,-18C637.81,-18 691.22,-18 728.15,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"727.87,-20.63 735.37,-18 727.87,-15.38 727.87,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"671.11\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">phát triển mọc chân sau</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M981.05,-36C981.05,-36 931.64,-36 931.64,-36 925.64,-36 919.64,-30 919.64,-24 919.64,-24 919.64,-12 919.64,-12 919.64,-6 925.64,0 931.64,0 931.64,0 981.05,0 981.05,0 987.05,0 993.05,-6 993.05,-12 993.05,-12 993.05,-24 993.05,-24 993.05,-30 987.05,-36 981.05,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"956.35\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">chân trước</text>\r\n</g>\r\n<!-- N4&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N4&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M802.53,-18C831.8,-18 875.94,-18 909.26,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"909.01,-20.63 916.51,-18 909.01,-15.38 909.01,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"860.89\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">mọc tiếp chân trước</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1246.21,-36C1246.21,-36 1212.55,-36 1212.55,-36 1206.55,-36 1200.55,-30 1200.55,-24 1200.55,-24 1200.55,-12 1200.55,-12 1200.55,-6 1206.55,0 1212.55,0 1212.55,0 1246.21,0 1246.21,0 1252.21,0 1258.21,-6 1258.21,-12 1258.21,-12 1258.21,-24 1258.21,-24 1258.21,-30 1252.21,-36 1246.21,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1229.38\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ếch con</text>\r\n</g>\r\n<!-- N5&#45;&gt;N6 -->\r\n<g id=\"edge5\" class=\"edge\">\r\n<title>N5&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M993.34,-18C1044.5,-18 1137.85,-18 1190.19,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1189.86,-20.63 1197.36,-18 1189.86,-15.38 1189.86,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1096.8\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">tiêu biến đuôi hoàn thiện ếch con lên cạn</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M70.78,-95C70.78,-95 33.37,-95 33.37,-95 27.37,-95 21.37,-89 21.37,-83 21.37,-83 21.37,-71 21.37,-71 21.37,-65 27.37,-59 33.37,-59 33.37,-59 70.78,-59 70.78,-59 76.78,-59 82.78,-65 82.78,-71 82.78,-71 82.78,-83 82.78,-83 82.78,-89 76.78,-95 70.78,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"52.08\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ghép đôi</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M67.08,-154C67.08,-154 37.08,-154 37.08,-154 31.08,-154 25.08,-148 25.08,-142 25.08,-142 25.08,-130 25.08,-130 25.08,-124 31.08,-118 37.08,-118 37.08,-118 67.08,-118 67.08,-118 73.08,-118 79.08,-124 79.08,-130 79.08,-130 79.08,-142 79.08,-142 79.08,-148 73.08,-154 67.08,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"52.08\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">trứng</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M67.08,-213C67.08,-213 37.08,-213 37.08,-213 31.08,-213 25.08,-207 25.08,-201 25.08,-201 25.08,-189 25.08,-189 25.08,-183 31.08,-177 37.08,-177 37.08,-177 67.08,-177 67.08,-177 73.08,-177 79.08,-183 79.08,-189 79.08,-189 79.08,-201 79.08,-201 79.08,-207 73.08,-213 67.08,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"52.08\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">phôi</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M72.66,-272C72.66,-272 31.5,-272 31.5,-272 25.5,-272 19.5,-266 19.5,-260 19.5,-260 19.5,-248 19.5,-248 19.5,-242 25.5,-236 31.5,-236 31.5,-236 72.66,-236 72.66,-236 78.66,-236 84.66,-242 84.66,-248 84.66,-248 84.66,-260 84.66,-260 84.66,-266 78.66,-272 72.66,-272\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"52.08\" y=\"-250.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">rụng đuôi</text>\r\n</g>\r\n<!-- N11 -->\r\n<g id=\"node11\" class=\"node\">\r\n<title>N11</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M70.41,-331C70.41,-331 33.75,-331 33.75,-331 27.75,-331 21.75,-325 21.75,-319 21.75,-319 21.75,-307 21.75,-307 21.75,-301 27.75,-295 33.75,-295 33.75,-295 70.41,-295 70.41,-295 76.41,-295 82.41,-301 82.41,-307 82.41,-307 82.41,-319 82.41,-319 82.41,-325 76.41,-331 70.41,-331\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"52.08\" y=\"-309.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">biến thái</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_32",
      "filename": "vn_diag_32_vong_doi_san_la_gan.png",
      "image_url": "vn_images/vn_diag_32_vong_doi_san_la_gan.png",
      "width": 1029,
      "height": 599,
      "title": "Sơ đồ vòng đời kí sinh của Sán lá gan qua vật chủ trung gian",
      "subject": "Sinh học 7",
      "subject_key": "sinh7",
      "subject_vi": "Sinh học 7 (THCS)",
      "grade": "Khối 7",
      "subject_color": "teal",
      "subject_icon": "fa-frog",
      "series": "Chương trình GDPT (NXB Giáo dục Việt Nam)",
      "chapter": "Chương 3: Các ngành Giun",
      "lesson": "Bài 11: Sán lá gan (Hình 11.2)",
      "diagram_type": "parasitic_life_cycle",
      "taxonomy_key": "life_cycle",
      "taxonomy_vi": "Vòng đời & Phân bào",
      "taxonomy_en": "Life Cycles & Cell Division",
      "taxonomy_color": "indigo",
      "taxonomy_icon": "fa-arrows-spin",
      "key_entities": [
        "sán lá gan",
        "trâu bò",
        "trứng",
        "ấu trùng lông",
        "ốc ruộng",
        "ấu trùng có đuôi",
        "kén sán",
        "cây cỏ"
      ],
      "directional_relations": [
        {
          "source": "sán lá gan",
          "target": "trứng",
          "relation": "đẻ hàng nghìn trứng theo phân trâu bò ra ngoài"
        },
        {
          "source": "trứng",
          "target": "ấu trùng lông",
          "relation": "gặp nước nở thành ấu trùng có lông bơi"
        },
        {
          "source": "ấu trùng lông",
          "target": "ốc ruộng",
          "relation": "chui vào kí sinh trong ốc sinh sản vô tính"
        },
        {
          "source": "ốc ruộng",
          "target": "ấu trùng có đuôi",
          "relation": "ấu trùng có đuôi rời ốc bơi tìm bám cây cỏ"
        },
        {
          "source": "ấu trùng có đuôi",
          "target": "kén sán",
          "relation": "rụng đuôi kết vỏ cứng thành kén sán bám cây cỏ"
        },
        {
          "source": "kén sán",
          "target": "trâu bò",
          "relation": "trâu bò ăn cỏ dính kén sán nhiễm bệnh vào gan mật"
        }
      ],
      "gt_caption_vi": "Sơ đồ vòng đời kí sinh phức tạp của sán lá gan qua vật chủ trung gian ốc ruộng: Sán lá gan trưởng thành kí sinh trong gan mật trâu bò đẻ hàng nghìn trứng theo phân ra ngoài; gặp nước, trứng nở thành ấu trùng lông bơi tự do rồi chui vào kí sinh trong ốc ruộng để sinh sản vô tính tạo nhiều ấu trùng có đuôi; ấu trùng có đuôi rời khỏi ốc bám vào cây cỏ thuỷ sinh, rụng đuôi và kết vỏ cứng tạo thành kén sán; khi trâu bò ăn phải cây cỏ có dính kén sán sẽ bị nhiễm bệnh, kén vào ruột non nở ra ấu trùng di chuyển lên gan phát triển thành sán lá gan trưởng thành.",
      "gt_caption_en": "The complex parasitic life cycle diagram outlines liver fluke development via intermediate snail hosts: Adult flukes residing in bovine bile ducts shed thousands of eggs into pasture via feces; in water, eggs hatch into ciliated miracidia that actively penetrate aquatic snails, reproducing asexually into cercariae; free-swimming tailed cercariae exit snails and adhere to marsh plants or water lettuce, shedding their tails and secreting thick cysts to form metacercariae; when cattle ingest cyst-contaminated grasses, juvenile flukes excyst in the intestines and migrate to bile ducts to mature.",
      "generated_caption_vi": "Sơ đồ biểu diễn chu trình sinh học khép kín và tiến trình phát triển của sơ đồ vòng đời kí sinh của sán lá gan qua vật chủ trung gian. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: sán lá gan, trâu bò, trứng, ấu trùng lông, ốc ruộng, ấu trùng có đuôi, kén sán cùng các cấu trúc liên quan (cây cỏ). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: sán lá gan đẻ hàng nghìn trứng theo phân trâu bò ra ngoài trứng; trứng gặp nước nở thành ấu trùng có lông bơi ấu trùng lông; ấu trùng lông chui vào kí sinh trong ốc sinh sản vô tính ốc ruộng; ốc ruộng ấu trùng có đuôi rời ốc bơi tìm bám cây cỏ ấu trùng có đuôi; ấu trùng có đuôi rụng đuôi kết vỏ cứng thành kén sán bám cây cỏ kén sán; kén sán trâu bò ăn cỏ dính kén sán nhiễm bệnh vào gan mật trâu bò.",
      "generated_caption_en": "The diagram illustrates the life cycle of liver flukes in an intermediate host, showing the progression from eggs excreted by cattle to infective stages that develop within snails and plants before being ingested by cattle again. Key steps include egg hatching into hairy larvae in water, which then infect freshwater snails where they reproduce asexually; later, tail-bearing larvae emerge from the snail to attach to aquatic plants, forming cysts that become infectious when eaten by cattle grazing on contaminated vegetation.",
      "metrics_vi": {
        "bleu_1": 0.5480225988700564,
        "bleu_4": 0.13793103448275862,
        "rouge_l": 0.4868421052631578,
        "entity_recall": 1.0,
        "dir_accuracy": 0.8333333333333334
      },
      "metrics_en": {
        "cider": 35.26,
        "bertscore_f1": 87.57
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "sán lá gan",
            "title": "<b>sán lá gan</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "trứng",
            "title": "<b>trứng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "ấu trùng lông",
            "title": "<b>ấu trùng lông</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "ốc ruộng",
            "title": "<b>ốc ruộng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "ấu trùng có đuôi",
            "title": "<b>ấu trùng có đuôi</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "kén sán",
            "title": "<b>kén sán</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "trâu bò",
            "title": "<b>trâu bò</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "cây cỏ",
            "title": "<b>cây cỏ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "đẻ hàng nghìn trứng theo phân trâu bò ra ngoài",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "gặp nước nở thành ấu trùng có lông bơi",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "chui vào kí sinh trong ốc sinh sản vô tính",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N5",
            "label": "ấu trùng có đuôi rời ốc bơi tìm bám cây cỏ",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N5",
            "to": "N6",
            "label": "rụng đuôi kết vỏ cứng thành kén sán bám cây cỏ",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N6",
            "to": "N7",
            "label": "trâu bò ăn cỏ dính kén sán nhiễm bệnh vào gan mật",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"1838pt\" height=\"103pt\"\r\n viewBox=\"0.00 0.00 1838.00 103.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 99)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M57.66,-36C57.66,-36 12,-36 12,-36 6,-36 0,-30 0,-24 0,-24 0,-12 0,-12 0,-6 6,0 12,0 12,0 57.66,0 57.66,0 63.66,0 69.66,-6 69.66,-12 69.66,-12 69.66,-24 69.66,-24 69.66,-30 63.66,-36 57.66,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"34.83\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">sán lá gan</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M346.91,-36C346.91,-36 316.91,-36 316.91,-36 310.91,-36 304.91,-30 304.91,-24 304.91,-24 304.91,-12 304.91,-12 304.91,-6 310.91,0 316.91,0 316.91,0 346.91,0 346.91,0 352.91,0 358.91,-6 358.91,-12 358.91,-12 358.91,-24 358.91,-24 358.91,-30 352.91,-36 346.91,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"331.91\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">trứng</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M69.97,-18C125.95,-18 236.79,-18 294.33,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"294.2,-20.63 301.7,-18 294.2,-15.38 294.2,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"187.28\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">đẻ hàng nghìn trứng theo phân trâu bò ra ngoài</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M632.32,-36C632.32,-36 573.16,-36 573.16,-36 567.16,-36 561.16,-30 561.16,-24 561.16,-24 561.16,-12 561.16,-12 561.16,-6 567.16,0 573.16,0 573.16,0 632.32,0 632.32,0 638.32,0 644.32,-6 644.32,-12 644.32,-12 644.32,-24 644.32,-24 644.32,-30 638.32,-36 632.32,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"602.74\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ấu trùng lông</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M359.18,-18C403.55,-18 494.07,-18 551.11,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"550.78,-20.63 558.28,-18 550.78,-15.38 550.78,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"460.03\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">gặp nước nở thành ấu trùng có lông bơi</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M900.48,-36C900.48,-36 862.32,-36 862.32,-36 856.32,-36 850.32,-30 850.32,-24 850.32,-24 850.32,-12 850.32,-12 850.32,-6 856.32,0 862.32,0 862.32,0 900.48,0 900.48,0 906.48,0 912.48,-6 912.48,-12 912.48,-12 912.48,-24 912.48,-24 912.48,-30 906.48,-36 900.48,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"881.4\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ốc ruộng</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M644.56,-18C697.12,-18 787.9,-18 840.17,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"839.86,-20.63 847.36,-18 839.86,-15.38 839.86,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"747.32\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">chui vào kí sinh trong ốc sinh sản vô tính</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1211.39,-36C1211.39,-36 1137.98,-36 1137.98,-36 1131.98,-36 1125.98,-30 1125.98,-24 1125.98,-24 1125.98,-12 1125.98,-12 1125.98,-6 1131.98,0 1137.98,0 1137.98,0 1211.39,0 1211.39,0 1217.39,0 1223.39,-6 1223.39,-12 1223.39,-12 1223.39,-24 1223.39,-24 1223.39,-30 1217.39,-36 1211.39,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1174.68\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ấu trùng có đuôi</text>\r\n</g>\r\n<!-- N4&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N4&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M912.75,-18C960.64,-18 1054.59,-18 1115.72,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1115.38,-20.63 1122.88,-18 1115.38,-15.38 1115.38,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1019.23\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">ấu trùng có đuôi rời ốc bơi tìm bám cây cỏ</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1508.05,-36C1508.05,-36 1474.39,-36 1474.39,-36 1468.39,-36 1462.39,-30 1462.39,-24 1462.39,-24 1462.39,-12 1462.39,-12 1462.39,-6 1468.39,0 1474.39,0 1474.39,0 1508.05,0 1508.05,0 1514.05,0 1520.05,-6 1520.05,-12 1520.05,-12 1520.05,-24 1520.05,-24 1520.05,-30 1514.05,-36 1508.05,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1491.22\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">kén sán</text>\r\n</g>\r\n<!-- N5&#45;&gt;N6 -->\r\n<g id=\"edge5\" class=\"edge\">\r\n<title>N5&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M1223.8,-18C1286.5,-18 1394.86,-18 1452.16,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1452.02,-20.63 1459.52,-18 1452.02,-15.38 1452.02,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1342.89\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">rụng đuôi kết vỏ cứng thành kén sán bám cây cỏ</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1817.55,-36C1817.55,-36 1787.55,-36 1787.55,-36 1781.55,-36 1775.55,-30 1775.55,-24 1775.55,-24 1775.55,-12 1775.55,-12 1775.55,-6 1781.55,0 1787.55,0 1787.55,0 1817.55,0 1817.55,0 1823.55,0 1829.55,-6 1829.55,-12 1829.55,-12 1829.55,-24 1829.55,-24 1829.55,-30 1823.55,-36 1817.55,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1802.55\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">trâu bò</text>\r\n</g>\r\n<!-- N6&#45;&gt;N7 -->\r\n<g id=\"edge6\" class=\"edge\">\r\n<title>N6&#45;&gt;N7</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M1520.49,-18C1576.75,-18 1702.65,-18 1765.05,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1764.99,-20.63 1772.49,-18 1764.99,-15.38 1764.99,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1647.8\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">trâu bò ăn cỏ dính kén sán nhiễm bệnh vào gan mật</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M49.83,-95C49.83,-95 19.83,-95 19.83,-95 13.83,-95 7.83,-89 7.83,-83 7.83,-83 7.83,-71 7.83,-71 7.83,-65 13.83,-59 19.83,-59 19.83,-59 49.83,-59 49.83,-59 55.83,-59 61.83,-65 61.83,-71 61.83,-71 61.83,-83 61.83,-83 61.83,-89 55.83,-95 49.83,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"34.83\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">cây cỏ</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_33",
      "filename": "vn_diag_33_he_tuan_hoan_ca_chep.png",
      "image_url": "vn_images/vn_diag_33_he_tuan_hoan_ca_chep.png",
      "width": 576,
      "height": 465,
      "title": "Sơ đồ hệ tuần hoàn đơn ở Cá chép",
      "subject": "Sinh học 7",
      "subject_key": "sinh7",
      "subject_vi": "Sinh học 7 (THCS)",
      "grade": "Khối 7",
      "subject_color": "teal",
      "subject_icon": "fa-frog",
      "series": "Chương trình GDPT (NXB Giáo dục Việt Nam)",
      "chapter": "Chương 6: Ngành Động vật có xương sống",
      "lesson": "Bài 33: Cấu tạo trong của cá chép (Hình 33.1)",
      "diagram_type": "anatomy_directional_flow",
      "taxonomy_key": "anatomy",
      "taxonomy_vi": "Giải phẫu & Cấu trúc Sinh học",
      "taxonomy_en": "Anatomy & Biological Structure",
      "taxonomy_color": "sky",
      "taxonomy_icon": "fa-puzzle-piece",
      "key_entities": [
        "tâm nhĩ",
        "tâm thất",
        "động mạch chủ bụng",
        "mao mạch mang",
        "động mạch chủ lưng",
        "mao mạch cơ quan",
        "tĩnh mạch bụng",
        "máu đỏ tươi",
        "máu đỏ thẫm"
      ],
      "directional_relations": [
        {
          "source": "tâm thất",
          "target": "động mạch chủ bụng",
          "relation": "bơm máu đỏ thẫm lên mang"
        },
        {
          "source": "động mạch chủ bụng",
          "target": "mao mạch mang",
          "relation": "trao đổi khí nhả CO2 nhận O2 biến thành máu đỏ tươi"
        },
        {
          "source": "mao mạch mang",
          "target": "động mạch chủ lưng",
          "relation": "dẫn máu giàu O2 đi nuôi cơ thể"
        },
        {
          "source": "động mạch chủ lưng",
          "target": "mao mạch cơ quan",
          "relation": "cung cấp oxy và dưỡng chất cho các tế bào"
        },
        {
          "source": "mao mạch cơ quan",
          "target": "tĩnh mạch bụng",
          "relation": "máu đỏ thẫm nghèo oxy tập trung về tĩnh mạch"
        },
        {
          "source": "tĩnh mạch bụng",
          "target": "tâm nhĩ",
          "relation": "đổ máu về tâm nhĩ khép kín vòng tuần hoàn đơn"
        }
      ],
      "gt_caption_vi": "Sơ đồ cấu tạo hệ tuần hoàn đơn kín ở cá chép: Tim cá gồm hai ngăn là tâm nhĩ và tâm thất; khi tâm thất co, máu đỏ thẫm được bơm vào động mạch chủ bụng lên mao mạch mang để trao đổi khí, thải CO2 và hấp thụ O2 trở thành máu đỏ tươi; máu giàu oxy theo động mạch chủ lưng phân phối đến mao mạch cơ quan để nuôi cơ thể; sau khi trao đổi chất, máu trở thành máu đỏ thẫm tập trung vào tĩnh mạch bụng đổ về tâm nhĩ rồi xuống tâm thất, hoàn thành một vòng tuần hoàn duy nhất.",
      "gt_caption_en": "The anatomical directional diagram details the single closed circulatory system of carp fish: The heart possesses two chambers consisting of a single atrium and ventricle; ventricular contraction pumps deoxygenated blood through the ventral aorta into gill capillaries for gas exchange, shedding CO2 and taking up O2 to become oxygen-rich; oxygenated blood flows along the dorsal aorta to capillary networks throughout all bodily organs; following tissue metabolic exchange, deoxygenated blood converges into ventral veins, returning to the atrium and ventricle to close the single circuit.",
      "generated_caption_vi": "Sơ đồ mô tả chi tiết đặc điểm cấu tạo của sơ đồ hệ tuần hoàn đơn ở cá chép trong chương trình Sinh học 7. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: tâm nhĩ, tâm thất, động mạch chủ bụng, mao mạch mang, động mạch chủ lưng, mao mạch cơ quan, tĩnh mạch bụng cùng các cấu trúc liên quan (máu đỏ tươi, máu đỏ thẫm). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: tâm thất bơm máu đỏ thẫm lên mang động mạch chủ bụng; động mạch chủ bụng trao đổi khí nhả CO2 nhận O2 biến thành máu đỏ tươi mao mạch mang; mao mạch mang dẫn máu giàu O2 đi nuôi cơ thể động mạch chủ lưng; động mạch chủ lưng cung cấp oxy và dưỡng chất cho các tế bào mao mạch cơ quan; mao mạch cơ quan máu đỏ thẫm nghèo oxy tập trung về tĩnh mạch tĩnh mạch bụng; tĩnh mạch bụng đổ máu về tâm nhĩ khép kín vòng tuần hoàn đơn tâm nhĩ.",
      "generated_caption_en": "The diagram illustrates the single circulatory system of a carp, showing key anatomical parts such as the atrium, ventricle, abdominal aorta, gill capillaries, dorsal aorta, organ capillaries, and abdominal veins. The flow of blood is depicted starting from the ventricle to the abdominal aorta where deoxygenated blood is pumped to the gills for gas exchange, turning into oxygen-rich blood which then travels through the dorsal aorta to supply organs, and finally returns to the atrium via the abdominal veins as deoxygenated blood, completing the closed loop of the single circulation.",
      "metrics_vi": {
        "bleu_1": 0.40860215053763443,
        "bleu_4": 0.03825136612021858,
        "rouge_l": 0.41496598639455773,
        "entity_recall": 1.0,
        "dir_accuracy": 0.8333333333333334
      },
      "metrics_en": {
        "cider": 83.69,
        "bertscore_f1": 89.81
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "tâm thất",
            "title": "<b>tâm thất</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "động mạch chủ bụng",
            "title": "<b>động mạch chủ bụng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "mao mạch mang",
            "title": "<b>mao mạch mang</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "động mạch chủ lưng",
            "title": "<b>động mạch chủ lưng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "mao mạch cơ quan",
            "title": "<b>mao mạch cơ quan</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "tĩnh mạch bụng",
            "title": "<b>tĩnh mạch bụng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "tâm nhĩ",
            "title": "<b>tâm nhĩ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "máu đỏ tươi",
            "title": "<b>máu đỏ tươi</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "máu đỏ thẫm",
            "title": "<b>máu đỏ thẫm</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "bơm máu đỏ thẫm lên mang",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "trao đổi khí nhả CO2 nhận O2 biến thành máu đỏ tươi",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "dẫn máu giàu O2 đi nuôi cơ thể",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N5",
            "label": "cung cấp oxy và dưỡng chất cho các tế bào",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N5",
            "to": "N6",
            "label": "máu đỏ thẫm nghèo oxy tập trung về tĩnh mạch",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N6",
            "to": "N7",
            "label": "đổ máu về tâm nhĩ khép kín vòng tuần hoàn đơn",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"1974pt\" height=\"162pt\"\r\n viewBox=\"0.00 0.00 1974.00 162.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 158)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M59.16,-36C59.16,-36 24,-36 24,-36 18,-36 12,-30 12,-24 12,-24 12,-12 12,-12 12,-6 18,0 24,0 24,0 59.16,0 59.16,0 65.16,0 71.16,-6 71.16,-12 71.16,-12 71.16,-24 71.16,-24 71.16,-30 65.16,-36 59.16,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"41.58\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tâm thất</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M346.07,-36C346.07,-36 249.41,-36 249.41,-36 243.41,-36 237.41,-30 237.41,-24 237.41,-24 237.41,-12 237.41,-12 237.41,-6 243.41,0 249.41,0 249.41,0 346.07,0 346.07,0 352.07,0 358.07,-6 358.07,-12 358.07,-12 358.07,-24 358.07,-24 358.07,-30 352.07,-36 346.07,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"297.74\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">động mạch chủ bụng</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M71.24,-18C108.73,-18 175.65,-18 226.89,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"226.69,-20.63 234.19,-18 226.69,-15.38 226.69,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"160.28\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">bơm máu đỏ thẫm lên mang</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M710.98,-36C710.98,-36 634.57,-36 634.57,-36 628.57,-36 622.57,-30 622.57,-24 622.57,-24 622.57,-12 622.57,-12 622.57,-6 628.57,0 634.57,0 634.57,0 710.98,0 710.98,0 716.98,0 722.98,-6 722.98,-12 722.98,-12 722.98,-24 722.98,-24 722.98,-30 716.98,-36 710.98,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"672.77\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">mao mạch mang</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M358.26,-18C427.96,-18 542.71,-18 612.36,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"612.08,-20.63 619.58,-18 612.08,-15.38 612.08,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"490.32\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">trao đổi khí nhả CO2 nhận O2 biến thành máu đỏ tươi</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M997.14,-36C997.14,-36 902.73,-36 902.73,-36 896.73,-36 890.73,-30 890.73,-24 890.73,-24 890.73,-12 890.73,-12 890.73,-6 896.73,0 902.73,0 902.73,0 997.14,0 997.14,0 1003.14,0 1009.14,-6 1009.14,-12 1009.14,-12 1009.14,-24 1009.14,-24 1009.14,-30 1003.14,-36 997.14,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"949.93\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">động mạch chủ lưng</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M723.29,-18C767.05,-18 831.34,-18 880.11,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"880.04,-20.63 887.54,-18 880.04,-15.38 880.04,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"806.85\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">dẫn máu giàu O2 đi nuôi cơ thể</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1327.55,-36C1327.55,-36 1238.39,-36 1238.39,-36 1232.39,-36 1226.39,-30 1226.39,-24 1226.39,-24 1226.39,-12 1226.39,-12 1226.39,-6 1232.39,0 1238.39,0 1238.39,0 1327.55,0 1327.55,0 1333.55,0 1339.55,-6 1339.55,-12 1339.55,-12 1339.55,-24 1339.55,-24 1339.55,-30 1333.55,-36 1327.55,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1282.97\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">mao mạch cơ quan</text>\r\n</g>\r\n<!-- N4&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N4&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M1009.36,-18C1067.17,-18 1155.54,-18 1215.88,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1215.84,-20.63 1223.34,-18 1215.84,-15.38 1215.84,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1117.76\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">cung cấp oxy và dưỡng chất cho các tế bào</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1657.21,-36C1657.21,-36 1586.8,-36 1586.8,-36 1580.8,-36 1574.8,-30 1574.8,-24 1574.8,-24 1574.8,-12 1574.8,-12 1574.8,-6 1580.8,0 1586.8,0 1586.8,0 1657.21,0 1657.21,0 1663.21,0 1669.21,-6 1669.21,-12 1669.21,-12 1669.21,-24 1669.21,-24 1669.21,-30 1663.21,-36 1657.21,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1622\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tĩnh mạch bụng</text>\r\n</g>\r\n<!-- N5&#45;&gt;N6 -->\r\n<g id=\"edge5\" class=\"edge\">\r\n<title>N5&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M1340,-18C1402.15,-18 1501.86,-18 1564.28,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1564.13,-20.63 1571.63,-18 1564.13,-15.38 1564.13,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1457.17\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">máu đỏ thẫm nghèo oxy tập trung về tĩnh mạch</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1953.87,-36C1953.87,-36 1921.71,-36 1921.71,-36 1915.71,-36 1909.71,-30 1909.71,-24 1909.71,-24 1909.71,-12 1909.71,-12 1909.71,-6 1915.71,0 1921.71,0 1921.71,0 1953.87,0 1953.87,0 1959.87,0 1965.87,-6 1965.87,-12 1965.87,-12 1965.87,-24 1965.87,-24 1965.87,-30 1959.87,-36 1953.87,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1937.79\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tâm nhĩ</text>\r\n</g>\r\n<!-- N6&#45;&gt;N7 -->\r\n<g id=\"edge6\" class=\"edge\">\r\n<title>N6&#45;&gt;N7</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M1669.64,-18C1732.16,-18 1841.92,-18 1899.35,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1899.22,-20.63 1906.72,-18 1899.22,-15.38 1899.22,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1789.46\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">đổ máu về tâm nhĩ khép kín vòng tuần hoàn đơn</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M69.28,-95C69.28,-95 13.87,-95 13.87,-95 7.87,-95 1.87,-89 1.87,-83 1.87,-83 1.87,-71 1.87,-71 1.87,-65 7.87,-59 13.87,-59 13.87,-59 69.28,-59 69.28,-59 75.28,-59 81.28,-65 81.28,-71 81.28,-71 81.28,-83 81.28,-83 81.28,-89 75.28,-95 69.28,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"41.58\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">máu đỏ tươi</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M71.16,-154C71.16,-154 12,-154 12,-154 6,-154 0,-148 0,-142 0,-142 0,-130 0,-130 0,-124 6,-118 12,-118 12,-118 71.16,-118 71.16,-118 77.16,-118 83.16,-124 83.16,-130 83.16,-130 83.16,-142 83.16,-142 83.16,-148 77.16,-154 71.16,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"41.58\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">máu đỏ thẫm</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_34",
      "filename": "vn_diag_34_cau_tao_cau_mat.png",
      "image_url": "vn_images/vn_diag_34_cau_tao_cau_mat.png",
      "width": 1117,
      "height": 659,
      "title": "Sơ đồ cấu tạo giải phẫu cầu mắt người (bổ ngang)",
      "subject": "Sinh học 8",
      "subject_key": "sinh8",
      "subject_vi": "Sinh học 8 (THCS)",
      "grade": "Khối 8",
      "subject_color": "rose",
      "subject_icon": "fa-heart-pulse",
      "series": "Chương trình GDPT (NXB Giáo dục Việt Nam)",
      "chapter": "Chương 9: Thần kinh và giác quan",
      "lesson": "Bài 49: Cơ quan phân tích thị giác (Hình 49-2)",
      "diagram_type": "anatomy_structure",
      "taxonomy_key": "anatomy",
      "taxonomy_vi": "Giải phẫu & Cấu trúc Sinh học",
      "taxonomy_en": "Anatomy & Biological Structure",
      "taxonomy_color": "sky",
      "taxonomy_icon": "fa-puzzle-piece",
      "key_entities": [
        "màng cứng",
        "màng giác",
        "màng mạch",
        "màng lưới",
        "mống mắt",
        "lỗ đồng tử",
        "thể thuỷ tinh",
        "dịch thuỷ tinh",
        "điểm vàng",
        "dây thần kinh thị giác"
      ],
      "directional_relations": [
        {
          "source": "ánh sáng",
          "target": "màng giác",
          "relation": "khúc xạ tia sáng xuyên qua màng giác"
        },
        {
          "source": "màng giác",
          "target": "lỗ đồng tử",
          "relation": "điều tiết lượng sáng qua mống mắt"
        },
        {
          "source": "lỗ đồng tử",
          "target": "thể thuỷ tinh",
          "relation": "hội tụ chùm sáng qua thấu kính sinh học"
        },
        {
          "source": "thể thuỷ tinh",
          "target": "màng lưới",
          "relation": "tạo ảnh thật ngược chiều thu nhỏ tại điểm vàng"
        },
        {
          "source": "màng lưới",
          "target": "dây thần kinh thị giác",
          "relation": "truyền xung thần kinh về não bộ"
        }
      ],
      "gt_caption_vi": "Sơ đồ giải phẫu bổ ngang cấu tạo cầu mắt người: Cầu mắt gồm ba lớp màng từ ngoài vào trong là màng cứng (phía trước trong suốt là màng giác để ánh sáng đi qua), màng mạch nuôi dưỡng (phía trước tạo thành mống mắt có lỗ đồng tử điều tiết ánh sáng), và màng lưới ở trong cùng chứa các tế bào thụ cảm thị giác; môi trường trong suốt bên trong gồm thuỷ dịch, thể thuỷ tinh dạng thấu kính hội tụ điều tiết độ cong, và dịch thuỷ tinh; tia sáng đi qua thể thuỷ tinh hội tụ tại điểm vàng trên màng lưới, kích thích phát sinh xung điện truyền theo dây thần kinh thị giác về vỏ não.",
      "gt_caption_en": "The horizontal anatomical cross-section of the human eyeball depicts its structural tunics and refractive media: The outer fibrous tunic comprises the opaque sclera and anterior transparent cornea for light transmission; the middle vascular tunic comprises the choroid, ciliary body, and pigmented iris with a central pupil regulating illumination; the innermost neural tunic consists of the sensory retina densely packed with photoreceptors; the internal transparent media include aqueous humor, the adjustable biconvex crystalline lens, and the gelatinous vitreous body, focusing incoming rays precisely onto the fovea centralis to generate nerve impulses along optic nerve tract II.",
      "generated_caption_vi": "Sơ đồ mô tả chi tiết đặc điểm cấu tạo của sơ đồ cấu tạo giải phẫu cầu mắt người (bổ ngang) trong chương trình Sinh học 8. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: màng cứng, màng giác, màng mạch, màng lưới, mống mắt, lỗ đồng tử, thể thuỷ tinh cùng các cấu trúc liên quan (dịch thuỷ tinh, điểm vàng, dây thần kinh thị giác). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: ánh sáng khúc xạ tia sáng xuyên qua màng giác màng giác; màng giác điều tiết lượng sáng qua mống mắt lỗ đồng tử; lỗ đồng tử hội tụ chùm sáng qua thấu kính sinh học thể thuỷ tinh; thể thuỷ tinh tạo ảnh thật ngược chiều thu nhỏ tại điểm vàng màng lưới; màng lưới truyền xung thần kinh về não bộ dây thần kinh thị giác.",
      "generated_caption_en": "The diagram illustrates a cross-sectional view of the human eye's anatomical structure, highlighting key components such as the sclera, cornea, choroid, retina, pupil, lens, vitreous humor, macula, and optic nerve. Light enters through the cornea, is refracted, then passes through the pupil which adjusts to control light intensity; it then converges through the lens before forming an inverted, reduced image at the macula on the retina, where signals are transmitted via the optic nerve to the brain.",
      "metrics_vi": {
        "bleu_1": 0.47770700636942676,
        "bleu_4": 0.012987012987012988,
        "rouge_l": 0.298932384341637,
        "entity_recall": 1.0,
        "dir_accuracy": 0.6
      },
      "metrics_en": {
        "cider": 0.42,
        "bertscore_f1": 85.82
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "ánh sáng",
            "title": "<b>ánh sáng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "màng giác",
            "title": "<b>màng giác</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "lỗ đồng tử",
            "title": "<b>lỗ đồng tử</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "thể thuỷ tinh",
            "title": "<b>thể thuỷ tinh</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "màng lưới",
            "title": "<b>màng lưới</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "dây thần kinh thị giác",
            "title": "<b>dây thần kinh thị giác</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "màng cứng",
            "title": "<b>màng cứng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "màng mạch",
            "title": "<b>màng mạch</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "mống mắt",
            "title": "<b>mống mắt</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "dịch thuỷ tinh",
            "title": "<b>dịch thuỷ tinh</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N11",
            "label": "điểm vàng",
            "title": "<b>điểm vàng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "khúc xạ tia sáng xuyên qua màng giác",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "điều tiết lượng sáng qua mống mắt",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "hội tụ chùm sáng qua thấu kính sinh học",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N5",
            "label": "tạo ảnh thật ngược chiều thu nhỏ tại điểm vàng",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N5",
            "to": "N6",
            "label": "truyền xung thần kinh về não bộ",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"1485pt\" height=\"339pt\"\r\n viewBox=\"0.00 0.00 1485.00 339.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 335)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M61.78,-36C61.78,-36 21.37,-36 21.37,-36 15.37,-36 9.37,-30 9.37,-24 9.37,-24 9.37,-12 9.37,-12 9.37,-6 15.37,0 21.37,0 21.37,0 61.78,0 61.78,0 67.78,0 73.78,-6 73.78,-12 73.78,-12 73.78,-24 73.78,-24 73.78,-30 67.78,-36 61.78,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"41.58\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ánh sáng</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M335.57,-36C335.57,-36 289.91,-36 289.91,-36 283.91,-36 277.91,-30 277.91,-24 277.91,-24 277.91,-12 277.91,-12 277.91,-6 283.91,0 289.91,0 289.91,0 335.57,0 335.57,0 341.57,0 347.57,-6 347.57,-12 347.57,-12 347.57,-24 347.57,-24 347.57,-30 341.57,-36 335.57,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"312.74\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">màng giác</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M74.25,-18C122.16,-18 213.24,-18 267.62,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"267.43,-20.63 274.93,-18 267.43,-15.38 267.43,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"180.53\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">khúc xạ tia sáng xuyên qua màng giác</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M587.23,-36C587.23,-36 542.32,-36 542.32,-36 536.32,-36 530.32,-30 530.32,-24 530.32,-24 530.32,-12 530.32,-12 530.32,-6 536.32,0 542.32,0 542.32,0 587.23,0 587.23,0 593.23,0 599.23,-6 599.23,-12 599.23,-12 599.23,-24 599.23,-24 599.23,-30 593.23,-36 587.23,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"564.77\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">lỗ đồng tử</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M347.98,-18C392.68,-18 470.98,-18 519.96,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"519.72,-20.63 527.22,-18 519.72,-15.38 519.72,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"438.94\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">điều tiết lượng sáng qua mống mắt</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M871.14,-36C871.14,-36 816.48,-36 816.48,-36 810.48,-36 804.48,-30 804.48,-24 804.48,-24 804.48,-12 804.48,-12 804.48,-6 810.48,0 816.48,0 816.48,0 871.14,0 871.14,0 877.14,0 883.14,-6 883.14,-12 883.14,-12 883.14,-24 883.14,-24 883.14,-30 877.14,-36 871.14,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"843.81\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thể thuỷ tinh</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M599.47,-18C648.07,-18 738.12,-18 794,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"793.8,-20.63 801.3,-18 793.8,-15.38 793.8,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"701.85\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">hội tụ chùm sáng qua thấu kính sinh học</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1176.05,-36C1176.05,-36 1130.39,-36 1130.39,-36 1124.39,-36 1118.39,-30 1118.39,-24 1118.39,-24 1118.39,-12 1118.39,-12 1118.39,-6 1124.39,0 1130.39,0 1130.39,0 1176.05,0 1176.05,0 1182.05,0 1188.05,-6 1188.05,-12 1188.05,-12 1188.05,-24 1188.05,-24 1188.05,-30 1182.05,-36 1176.05,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1153.22\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">màng lưới</text>\r\n</g>\r\n<!-- N4&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N4&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M883.43,-18C940.75,-18 1048.02,-18 1108.27,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1108.01,-20.63 1115.51,-18 1108.01,-15.38 1108.01,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1000.76\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">tạo ảnh thật ngược chiều thu nhỏ tại điểm vàng</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1465.21,-36C1465.21,-36 1368.55,-36 1368.55,-36 1362.55,-36 1356.55,-30 1356.55,-24 1356.55,-24 1356.55,-12 1356.55,-12 1356.55,-6 1362.55,0 1368.55,0 1368.55,0 1465.21,0 1465.21,0 1471.21,0 1477.21,-6 1477.21,-12 1477.21,-12 1477.21,-24 1477.21,-24 1477.21,-30 1471.21,-36 1465.21,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1416.88\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">dây thần kinh thị giác</text>\r\n</g>\r\n<!-- N5&#45;&gt;N6 -->\r\n<g id=\"edge5\" class=\"edge\">\r\n<title>N5&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M1188.43,-18C1228.3,-18 1295.22,-18 1346.18,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1345.92,-20.63 1353.42,-18 1345.92,-15.38 1345.92,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1272.3\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">truyền xung thần kinh về não bộ</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M67.03,-95C67.03,-95 16.12,-95 16.12,-95 10.12,-95 4.12,-89 4.12,-83 4.12,-83 4.12,-71 4.12,-71 4.12,-65 10.12,-59 16.12,-59 16.12,-59 67.03,-59 67.03,-59 73.03,-59 79.03,-65 79.03,-71 79.03,-71 79.03,-83 79.03,-83 79.03,-89 73.03,-95 67.03,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"41.58\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">màng cứng</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M67.78,-154C67.78,-154 15.37,-154 15.37,-154 9.37,-154 3.37,-148 3.37,-142 3.37,-142 3.37,-130 3.37,-130 3.37,-124 9.37,-118 15.37,-118 15.37,-118 67.78,-118 67.78,-118 73.78,-118 79.78,-124 79.78,-130 79.78,-130 79.78,-142 79.78,-142 79.78,-148 73.78,-154 67.78,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"41.58\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">màng mạch</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M63.66,-213C63.66,-213 19.5,-213 19.5,-213 13.5,-213 7.5,-207 7.5,-201 7.5,-201 7.5,-189 7.5,-189 7.5,-183 13.5,-177 19.5,-177 19.5,-177 63.66,-177 63.66,-177 69.66,-177 75.66,-183 75.66,-189 75.66,-189 75.66,-201 75.66,-201 75.66,-207 69.66,-213 63.66,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"41.58\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">mống mắt</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M71.16,-272C71.16,-272 12,-272 12,-272 6,-272 0,-266 0,-260 0,-260 0,-248 0,-248 0,-242 6,-236 12,-236 12,-236 71.16,-236 71.16,-236 77.16,-236 83.16,-242 83.16,-248 83.16,-248 83.16,-260 83.16,-260 83.16,-266 77.16,-272 71.16,-272\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"41.58\" y=\"-250.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">dịch thuỷ tinh</text>\r\n</g>\r\n<!-- N11 -->\r\n<g id=\"node11\" class=\"node\">\r\n<title>N11</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M64.41,-331C64.41,-331 18.75,-331 18.75,-331 12.75,-331 6.75,-325 6.75,-319 6.75,-319 6.75,-307 6.75,-307 6.75,-301 12.75,-295 18.75,-295 18.75,-295 64.41,-295 64.41,-295 70.41,-295 76.41,-301 76.41,-307 76.41,-307 76.41,-319 76.41,-319 76.41,-325 70.41,-331 64.41,-331\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"41.58\" y=\"-309.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">điểm vàng</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_35",
      "filename": "vn_diag_35_cau_tao_mang_luoi.png",
      "image_url": "vn_images/vn_diag_35_cau_tao_mang_luoi.png",
      "width": 571,
      "height": 815,
      "title": "Sơ đồ cấu tạo hiển vi của màng lưới và các tế bào thụ cảm thị giác",
      "subject": "Sinh học 8",
      "subject_key": "sinh8",
      "subject_vi": "Sinh học 8 (THCS)",
      "grade": "Khối 8",
      "subject_color": "rose",
      "subject_icon": "fa-heart-pulse",
      "series": "Chương trình GDPT (NXB Giáo dục Việt Nam)",
      "chapter": "Chương 9: Thần kinh và giác quan",
      "lesson": "Bài 49: Cơ quan phân tích thị giác (Hình 49-3)",
      "diagram_type": "microscopic_structure",
      "taxonomy_key": "anatomy",
      "taxonomy_vi": "Giải phẫu & Cấu trúc Sinh học",
      "taxonomy_en": "Anatomy & Biological Structure",
      "taxonomy_color": "sky",
      "taxonomy_icon": "fa-puzzle-piece",
      "key_entities": [
        "màng lưới",
        "tế bào nón",
        "tế bào que",
        "tế bào hai cực",
        "tế bào hạch",
        "thần kinh thị giác",
        "ánh sáng"
      ],
      "directional_relations": [
        {
          "source": "ánh sáng",
          "target": "tế bào nón",
          "relation": "kích thích thụ thể thị giác"
        },
        {
          "source": "tế bào que",
          "target": "tế bào hai cực",
          "relation": "truyền xung kích thích sang nơron hai cực"
        },
        {
          "source": "tế bào hai cực",
          "target": "tế bào hạch",
          "relation": "truyền tín hiệu điện tới tế bào hạch"
        },
        {
          "source": "tế bào hạch",
          "target": "thần kinh thị giác",
          "relation": "sợi trục gom lại tạo dây thần kinh thị giác dẫn về não"
        }
      ],
      "gt_caption_vi": "Sơ đồ cấu tạo hiển vi các lớp tế bào của màng lưới thị giác: Lớp tế bào thụ cảm gồm tế bào nón tiếp nhận ánh sáng mạnh và phân biệt màu sắc, và tế bào que tiếp nhận ánh sáng yếu; tia ánh sáng xuyên qua lớp tế bào hạch và tế bào hai cực để kích thích tế bào nón và tế bào que; sau đó xung thần kinh phát sinh truyền từ tế bào que và nón sang tế bào hai cực, truyền tới tế bào hạch rồi gom vào các sợi dẫn của dây thần kinh thị giác truyền về não.",
      "gt_caption_en": "The retinal microstructural schematic details layered photoreceptive neural architecture: The basal photoreceptor layer incorporates cone cells (specialized for high-acuity photopic vision and chromatic discrimination) and rod cells (adapted for low-threshold scotopic vision); incoming photons penetrate superficial retinal ganglion cells and intermediate bipolar neurons to reach photopigments within outer segments; phototransduction then elicits neural impulses propagating in reverse to light trajectory: from photoreceptors across synapses to bipolar cells, into ganglion cells whose converging axons form the optic nerve transmitting visual signals to the visual cortex.",
      "generated_caption_vi": "Sơ đồ khoa học minh họa trực quan nội dung 'Sơ đồ cấu tạo hiển vi của màng lưới và các tế bào thụ cảm thị giác'. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: màng lưới, tế bào nón, tế bào que, tế bào hai cực, tế bào hạch, thần kinh thị giác, ánh sáng cùng các cấu trúc liên quan (). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: ánh sáng kích thích thụ thể thị giác tế bào nón; tế bào que truyền xung kích thích sang nơron hai cực tế bào hai cực; tế bào hai cực truyền tín hiệu điện tới tế bào hạch tế bào hạch; tế bào hạch sợi trục gom lại tạo dây thần kinh thị giác dẫn về não thần kinh thị giác.",
      "generated_caption_en": "The diagram illustrates the microscopic structure of the retinal grid and sensory cells, including cone cells, rod cells, bipolar cells, ganglion cells, and the optic nerve. It shows how light stimulates the photoreceptors in the cone cells, which then transmit signals through rod cells to bipolar cells, followed by transmission from bipolar cells to ganglion cells, and finally from ganglion cells to the optic nerve, where the neural signals are sent to the brain.",
      "metrics_vi": {
        "bleu_1": 0.5069444444444444,
        "bleu_4": 0.07092198581560284,
        "rouge_l": 0.41600000000000004,
        "entity_recall": 1.0,
        "dir_accuracy": 0.75
      },
      "metrics_en": {
        "cider": 21.16,
        "bertscore_f1": 87.3
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "ánh sáng",
            "title": "<b>ánh sáng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "tế bào nón",
            "title": "<b>tế bào nón</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "tế bào que",
            "title": "<b>tế bào que</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "tế bào hai cực",
            "title": "<b>tế bào hai cực</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "tế bào hạch",
            "title": "<b>tế bào hạch</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "thần kinh thị giác",
            "title": "<b>thần kinh thị giác</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "màng lưới",
            "title": "<b>màng lưới</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "kích thích thụ thể thị giác",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "truyền xung kích thích sang nơron hai cực",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N5",
            "label": "truyền tín hiệu điện tới tế bào hạch",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N5",
            "to": "N6",
            "label": "sợi trục gom lại tạo dây thần kinh thị giác dẫn về não",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"995pt\" height=\"162pt\"\r\n viewBox=\"0.00 0.00 995.00 162.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 158)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M55.79,-36C55.79,-36 15.38,-36 15.38,-36 9.38,-36 3.38,-30 3.38,-24 3.38,-24 3.38,-12 3.38,-12 3.38,-6 9.38,0 15.38,0 15.38,0 55.79,0 55.79,0 61.79,0 67.79,-6 67.79,-12 67.79,-12 67.79,-24 67.79,-24 67.79,-30 61.79,-36 55.79,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"35.58\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ánh sáng</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M349.44,-36C349.44,-36 302.28,-36 302.28,-36 296.28,-36 290.28,-30 290.28,-24 290.28,-24 290.28,-12 290.28,-12 290.28,-6 296.28,0 302.28,0 302.28,0 349.44,0 349.44,0 355.44,0 361.44,-6 361.44,-12 361.44,-12 361.44,-24 361.44,-24 361.44,-30 355.44,-36 349.44,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"325.86\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tế bào nón</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M68.26,-18C119.59,-18 221.1,-18 279.9,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"279.78,-20.63 287.28,-18 279.78,-15.38 279.78,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"176.41\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">kích thích thụ thể thị giác</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M59.16,-95C59.16,-95 12,-95 12,-95 6,-95 0,-89 0,-83 0,-83 0,-71 0,-71 0,-65 6,-59 12,-59 12,-59 59.16,-59 59.16,-59 65.16,-59 71.16,-65 71.16,-71 71.16,-71 71.16,-83 71.16,-83 71.16,-89 65.16,-95 59.16,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"35.58\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tế bào que</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M358.07,-95C358.07,-95 293.66,-95 293.66,-95 287.66,-95 281.66,-89 281.66,-83 281.66,-83 281.66,-71 281.66,-71 281.66,-65 287.66,-59 293.66,-59 293.66,-59 358.07,-59 358.07,-59 364.07,-59 370.07,-65 370.07,-71 370.07,-71 370.07,-83 370.07,-83 370.07,-89 364.07,-95 358.07,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"325.86\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tế bào hai cực</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M71.64,-77C121.47,-77 213.18,-77 271.48,-77\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"271.38,-79.63 278.88,-77 271.38,-74.38 271.38,-79.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"176.41\" y=\"-79.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">truyền xung kích thích sang nơron hai cực</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M616.48,-95C616.48,-95 564.07,-95 564.07,-95 558.07,-95 552.07,-89 552.07,-83 552.07,-83 552.07,-71 552.07,-71 552.07,-65 558.07,-59 564.07,-59 564.07,-59 616.48,-59 616.48,-59 622.48,-59 628.48,-65 628.48,-71 628.48,-71 628.48,-83 628.48,-83 628.48,-89 622.48,-95 616.48,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"590.27\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tế bào hạch</text>\r\n</g>\r\n<!-- N4&#45;&gt;N5 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N4&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M370.49,-77C417.84,-77 493.19,-77 541.94,-77\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"541.7,-79.63 549.2,-77 541.7,-74.38 541.7,-79.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"461.07\" y=\"-79.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">truyền tín hiệu điện tới tế bào hạch</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M975.39,-95C975.39,-95 898.98,-95 898.98,-95 892.98,-95 886.98,-89 886.98,-83 886.98,-83 886.98,-71 886.98,-71 886.98,-65 892.98,-59 898.98,-59 898.98,-59 975.39,-59 975.39,-59 981.39,-59 987.39,-65 987.39,-71 987.39,-71 987.39,-83 987.39,-83 987.39,-89 981.39,-95 975.39,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"937.18\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thần kinh thị giác</text>\r\n</g>\r\n<!-- N5&#45;&gt;N6 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N5&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M628.84,-77C688.5,-77 805.42,-77 876.6,-77\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"876.53,-79.63 884.03,-77 876.53,-74.38 876.53,-79.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"757.73\" y=\"-79.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">sợi trục gom lại tạo dây thần kinh thị giác dẫn về não</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M58.41,-154C58.41,-154 12.75,-154 12.75,-154 6.75,-154 0.75,-148 0.75,-142 0.75,-142 0.75,-130 0.75,-130 0.75,-124 6.75,-118 12.75,-118 12.75,-118 58.41,-118 58.41,-118 64.41,-118 70.41,-124 70.41,-130 70.41,-130 70.41,-142 70.41,-142 70.41,-148 64.41,-154 58.41,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"35.58\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">màng lưới</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_36",
      "filename": "vn_diag_36_cau_tao_oc_tai.png",
      "image_url": "vn_images/vn_diag_36_cau_tao_oc_tai.png",
      "width": 1126,
      "height": 912,
      "title": "Sơ đồ phân tích cấu tạo ốc tai và cơ quan Coocti",
      "subject": "Sinh học 8",
      "subject_key": "sinh8",
      "subject_vi": "Sinh học 8 (THCS)",
      "grade": "Khối 8",
      "subject_color": "rose",
      "subject_icon": "fa-heart-pulse",
      "series": "Chương trình GDPT (NXB Giáo dục Việt Nam)",
      "chapter": "Chương 9: Thần kinh và giác quan",
      "lesson": "Bài 51: Cơ quan phân tích thính giác (Hình 51-2)",
      "diagram_type": "anatomy_microscopic",
      "taxonomy_key": "anatomy",
      "taxonomy_vi": "Giải phẫu & Cấu trúc Sinh học",
      "taxonomy_en": "Anatomy & Biological Structure",
      "taxonomy_color": "sky",
      "taxonomy_icon": "fa-puzzle-piece",
      "key_entities": [
        "ốc tai",
        "ốc tai xương",
        "ốc tai màng",
        "cửa bầu",
        "cửa tròn",
        "thang tiền đình",
        "thang nhĩ",
        "màng cơ sở",
        "cơ quan Coocti",
        "tế bào thụ cảm thính giác",
        "ngoại dịch",
        "nội dịch"
      ],
      "directional_relations": [
        {
          "source": "cửa bầu",
          "target": "thang tiền đình",
          "relation": "chuỗi xương tai rung cửa bầu truyền sóng dịch vào thang tiền đình"
        },
        {
          "source": "thang tiền đình",
          "target": "thang nhĩ",
          "relation": "sóng ngoại dịch truyền tiếp qua thang nhĩ tới cửa tròn"
        },
        {
          "source": "thang nhĩ",
          "target": "màng cơ sở",
          "relation": "dao động dịch làm rung màng cơ sở mang cơ quan Coocti"
        },
        {
          "source": "màng cơ sở",
          "target": "tế bào thụ cảm thính giác",
          "relation": "lông cảm giác cọ xát với màng phủ gây hưng phấn"
        },
        {
          "source": "tế bào thụ cảm thính giác",
          "target": "dây thần kinh thính giác",
          "relation": "phát sinh xung thần kinh dẫn truyền về não"
        }
      ],
      "gt_caption_vi": "Sơ đồ phân tích giải phẫu và cấu tạo vi thể của ốc tai và cơ quan Coocti: Ốc tai gồm ốc tai màng nằm trong ốc tai xương, chia khoang thành thang tiền đình (chứa ngoại dịch), thang nhĩ (chứa ngoại dịch) thông với cửa tròn, và thang giữa (chứa nội dịch); ngăn cách thang giữa và thang nhĩ là màng cơ sở mang cơ quan Coocti chứa các tế bào thụ cảm thính giác; sóng âm từ chuỗi xương tai truyền qua màng cửa bầu làm chuyển động ngoại dịch ở thang tiền đình rồi thang nhĩ, làm rung màng cơ sở khiến lông tế bào thụ cảm thính giác cọ xát vào màng phủ phát sinh xung thần kinh truyền theo dây thần kinh thính giác về não.",
      "gt_caption_en": "The anatomical and histological breakdown of the inner ear cochlea and Organ of Corti shows: The membranous cochlea spirals two and a half turns within the bony cochlea, dividing into the scala vestibuli (superior, containing perilymph), scala tympani (inferior, containing perilymph), and scala media (cochlear duct containing endolymph); separating the scala media from scala tympani is the basilar membrane supporting the Organ of Corti with specialized auditory hair cells; acoustic fluid waves initiated at the oval window travel through perilymph, vibrating the basilar membrane and shearing stereocilia against the tectorial membrane to transduce mechanical vibrations into nerve action potentials conveyed via the cochlear nerve to the auditory cortex.",
      "generated_caption_vi": "Sơ đồ mô tả chi tiết đặc điểm cấu tạo của sơ đồ phân tích cấu tạo ốc tai và cơ quan coocti trong chương trình Sinh học 8. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: ốc tai, ốc tai xương, ốc tai màng, cửa bầu, cửa tròn, thang tiền đình, thang nhĩ cùng các cấu trúc liên quan (màng cơ sở, cơ quan Coocti, tế bào thụ cảm thính giác, ngoại dịch, nội dịch). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: cửa bầu chuỗi xương tai rung cửa bầu truyền sóng dịch vào thang tiền đình thang tiền đình; thang tiền đình sóng ngoại dịch truyền tiếp qua thang nhĩ tới cửa tròn thang nhĩ; thang nhĩ dao động dịch làm rung màng cơ sở mang cơ quan Coocti màng cơ sở; màng cơ sở lông cảm giác cọ xát với màng phủ gây hưng phấn tế bào thụ cảm thính giác; tế bào thụ cảm thính giác phát sinh xung thần kinh dẫn truyền về não dây thần kinh thính giác.",
      "generated_caption_en": "The diagram illustrates the microscopic structure of the ear, focusing on the ossicles, tympanic membrane, oval window, cochlea, round window, vestibular canal, scala tympani, basilar membrane, organ of Corti, auditory receptor cells, perilymph, and endolymph. It shows the transmission process where sound waves cause the oval window to vibrate, transmitting through the vestibular canal into the scala tympani, then further to the round window; subsequently, the fluid motion vibrates the basilar membrane, which carries the organ of Corti, leading to the stimulation of hair cells that generate neural signals transmitted via auditory nerve fibers to the brain.",
      "metrics_vi": {
        "bleu_1": 0.5478723404255319,
        "bleu_4": 0.10810810810810811,
        "rouge_l": 0.432601880877743,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 16.66,
        "bertscore_f1": 87.32
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "cửa bầu",
            "title": "<b>cửa bầu</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "thang tiền đình",
            "title": "<b>thang tiền đình</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "thang nhĩ",
            "title": "<b>thang nhĩ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "màng cơ sở",
            "title": "<b>màng cơ sở</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "tế bào thụ cảm thính giác",
            "title": "<b>tế bào thụ cảm thính giác</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "dây thần kinh thính giác",
            "title": "<b>dây thần kinh thính giác</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "ốc tai",
            "title": "<b>ốc tai</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "ốc tai xương",
            "title": "<b>ốc tai xương</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "ốc tai màng",
            "title": "<b>ốc tai màng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "cửa tròn",
            "title": "<b>cửa tròn</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N11",
            "label": "cơ quan Coocti",
            "title": "<b>cơ quan Coocti</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N12",
            "label": "ngoại dịch",
            "title": "<b>ngoại dịch</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N13",
            "label": "nội dịch",
            "title": "<b>nội dịch</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "chuỗi xương tai rung cửa bầu truyền sóng dịch vào thang tiền đình",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "sóng ngoại dịch truyền tiếp qua thang nhĩ tới cửa tròn",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "dao động dịch làm rung màng cơ sở mang cơ quan Coocti",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N5",
            "label": "lông cảm giác cọ xát với màng phủ gây hưng phấn",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N5",
            "to": "N6",
            "label": "phát sinh xung thần kinh dẫn truyền về não",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"1933pt\" height=\"457pt\"\r\n viewBox=\"0.00 0.00 1933.00 457.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 453)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M64.78,-36C64.78,-36 28.87,-36 28.87,-36 22.87,-36 16.87,-30 16.87,-24 16.87,-24 16.87,-12 16.87,-12 16.87,-6 22.87,0 28.87,0 28.87,0 64.78,0 64.78,0 70.78,0 76.78,-6 76.78,-12 76.78,-12 76.78,-24 76.78,-24 76.78,-30 70.78,-36 64.78,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.83\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">cửa bầu</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M488.57,-36C488.57,-36 421.16,-36 421.16,-36 415.16,-36 409.16,-30 409.16,-24 409.16,-24 409.16,-12 409.16,-12 409.16,-6 415.16,0 421.16,0 421.16,0 488.57,0 488.57,0 494.57,0 500.57,-6 500.57,-12 500.57,-12 500.57,-24 500.57,-24 500.57,-30 494.57,-36 488.57,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"454.86\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thang tiền đình</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M77.03,-18C144.37,-18 311.45,-18 398.75,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"398.51,-20.63 406.01,-18 398.51,-15.38 398.51,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"251.41\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">chuỗi xương tai rung cửa bầu truyền sóng dịch vào thang tiền đình</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M815.23,-36C815.23,-36 774.07,-36 774.07,-36 768.07,-36 762.07,-30 762.07,-24 762.07,-24 762.07,-12 762.07,-12 762.07,-6 768.07,0 774.07,0 774.07,0 815.23,0 815.23,0 821.23,0 827.23,-6 827.23,-12 827.23,-12 827.23,-24 827.23,-24 827.23,-30 821.23,-36 815.23,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"794.65\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thang nhĩ</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M501.07,-18C566.8,-18 687.87,-18 751.71,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"751.6,-20.63 759.1,-18 751.6,-15.38 751.6,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"631.32\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">sóng ngoại dịch truyền tiếp qua thang nhĩ tới cửa tròn</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1174.89,-36C1174.89,-36 1120.23,-36 1120.23,-36 1114.23,-36 1108.23,-30 1108.23,-24 1108.23,-24 1108.23,-12 1108.23,-12 1108.23,-6 1114.23,0 1120.23,0 1120.23,0 1174.89,0 1174.89,0 1180.89,0 1186.89,-6 1186.89,-12 1186.89,-12 1186.89,-24 1186.89,-24 1186.89,-30 1180.89,-36 1174.89,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1147.56\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">màng cơ sở</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M827.72,-18C889.45,-18 1025.1,-18 1097.98,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1097.61,-20.63 1105.11,-18 1097.61,-15.38 1097.61,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"967.73\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">dao động dịch làm rung màng cơ sở mang cơ quan Coocti</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1563.8,-36C1563.8,-36 1446.89,-36 1446.89,-36 1440.89,-36 1434.89,-30 1434.89,-24 1434.89,-24 1434.89,-12 1434.89,-12 1434.89,-6 1440.89,0 1446.89,0 1446.89,0 1563.8,0 1563.8,0 1569.8,0 1575.8,-6 1575.8,-12 1575.8,-12 1575.8,-24 1575.8,-24 1575.8,-30 1569.8,-36 1563.8,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1505.34\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tế bào thụ cảm thính giác</text>\r\n</g>\r\n<!-- N4&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N4&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M1187.31,-18C1243.9,-18 1350.44,-18 1424.31,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1424.28,-20.63 1431.78,-18 1424.28,-15.38 1424.28,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1310.89\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">lông cảm giác cọ xát với màng phủ gây hưng phấn</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1912.96,-36C1912.96,-36 1803.55,-36 1803.55,-36 1797.55,-36 1791.55,-30 1791.55,-24 1791.55,-24 1791.55,-12 1791.55,-12 1791.55,-6 1797.55,0 1803.55,0 1803.55,0 1912.96,0 1912.96,0 1918.96,0 1924.96,-6 1924.96,-12 1924.96,-12 1924.96,-24 1924.96,-24 1924.96,-30 1918.96,-36 1912.96,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1858.25\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">dây thần kinh thính giác</text>\r\n</g>\r\n<!-- N5&#45;&gt;N6 -->\r\n<g id=\"edge5\" class=\"edge\">\r\n<title>N5&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M1576.09,-18C1635.35,-18 1720.27,-18 1781.25,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1780.98,-20.63 1788.48,-18 1780.98,-15.38 1780.98,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1683.67\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">phát sinh xung thần kinh dẫn truyền về não</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M61.83,-95C61.83,-95 31.83,-95 31.83,-95 25.83,-95 19.83,-89 19.83,-83 19.83,-83 19.83,-71 19.83,-71 19.83,-65 25.83,-59 31.83,-59 31.83,-59 61.83,-59 61.83,-59 67.83,-59 73.83,-65 73.83,-71 73.83,-71 73.83,-83 73.83,-83 73.83,-89 67.83,-95 61.83,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.83\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ốc tai</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M75.28,-154C75.28,-154 18.37,-154 18.37,-154 12.37,-154 6.37,-148 6.37,-142 6.37,-142 6.37,-130 6.37,-130 6.37,-124 12.37,-118 18.37,-118 18.37,-118 75.28,-118 75.28,-118 81.28,-118 87.28,-124 87.28,-130 87.28,-130 87.28,-142 87.28,-142 87.28,-148 81.28,-154 75.28,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.83\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ốc tai xương</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M72.66,-213C72.66,-213 21,-213 21,-213 15,-213 9,-207 9,-201 9,-201 9,-189 9,-189 9,-183 15,-177 21,-177 21,-177 72.66,-177 72.66,-177 78.66,-177 84.66,-183 84.66,-189 84.66,-189 84.66,-201 84.66,-201 84.66,-207 78.66,-213 72.66,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.83\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ốc tai màng</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M65.16,-272C65.16,-272 28.5,-272 28.5,-272 22.5,-272 16.5,-266 16.5,-260 16.5,-260 16.5,-248 16.5,-248 16.5,-242 22.5,-236 28.5,-236 28.5,-236 65.16,-236 65.16,-236 71.16,-236 77.16,-242 77.16,-248 77.16,-248 77.16,-260 77.16,-260 77.16,-266 71.16,-272 65.16,-272\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.83\" y=\"-250.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">cửa tròn</text>\r\n</g>\r\n<!-- N11 -->\r\n<g id=\"node11\" class=\"node\">\r\n<title>N11</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M81.66,-331C81.66,-331 12,-331 12,-331 6,-331 0,-325 0,-319 0,-319 0,-307 0,-307 0,-301 6,-295 12,-295 12,-295 81.66,-295 81.66,-295 87.66,-295 93.66,-301 93.66,-307 93.66,-307 93.66,-319 93.66,-319 93.66,-325 87.66,-331 81.66,-331\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.83\" y=\"-309.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">cơ quan Coocti</text>\r\n</g>\r\n<!-- N12 -->\r\n<g id=\"node12\" class=\"node\">\r\n<title>N12</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M69.28,-390C69.28,-390 24.37,-390 24.37,-390 18.37,-390 12.37,-384 12.37,-378 12.37,-378 12.37,-366 12.37,-366 12.37,-360 18.37,-354 24.37,-354 24.37,-354 69.28,-354 69.28,-354 75.28,-354 81.28,-360 81.28,-366 81.28,-366 81.28,-378 81.28,-378 81.28,-384 75.28,-390 69.28,-390\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.83\" y=\"-368.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ngoại dịch</text>\r\n</g>\r\n<!-- N13 -->\r\n<g id=\"node13\" class=\"node\">\r\n<title>N13</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M63.28,-449C63.28,-449 30.37,-449 30.37,-449 24.37,-449 18.37,-443 18.37,-437 18.37,-437 18.37,-425 18.37,-425 18.37,-419 24.37,-413 30.37,-413 30.37,-413 63.28,-413 63.28,-413 69.28,-413 75.28,-419 75.28,-425 75.28,-425 75.28,-437 75.28,-437 75.28,-443 69.28,-449 63.28,-449\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.83\" y=\"-427.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">nội dịch</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_37",
      "filename": "vn_diag_37_cung_phan_xa.png",
      "image_url": "vn_images/vn_diag_37_cung_phan_xa.png",
      "width": 1099,
      "height": 784,
      "title": "Sơ đồ cấu tạo 5 thành phần của Cung phản xạ thần kinh",
      "subject": "Sinh học 8",
      "subject_key": "sinh8",
      "subject_vi": "Sinh học 8 (THCS)",
      "grade": "Khối 8",
      "subject_color": "rose",
      "subject_icon": "fa-heart-pulse",
      "series": "Chương trình GDPT (NXB Giáo dục Việt Nam)",
      "chapter": "Chương 1: Khái quát về cơ thể người",
      "lesson": "Bài 6: Phản xạ (Hình 6-2)",
      "diagram_type": "system_process",
      "taxonomy_key": "system_process",
      "taxonomy_vi": "Cơ chế Sinh lý & Di truyền Phân tử",
      "taxonomy_en": "Physiological & Molecular Processes",
      "taxonomy_color": "rose",
      "taxonomy_icon": "fa-gears",
      "key_entities": [
        "cung phản xạ",
        "cơ quan thụ cảm",
        "nơron hướng tâm",
        "nơron trung gian",
        "tuỷ sống",
        "nơron li tâm",
        "cơ quan phản ứng"
      ],
      "directional_relations": [
        {
          "source": "cơ quan thụ cảm",
          "target": "nơron hướng tâm",
          "relation": "tiếp nhận kích thích sinh xung thần kinh cảm giác"
        },
        {
          "source": "nơron hướng tâm",
          "target": "tuỷ sống",
          "relation": "dẫn truyền xung thần kinh vào chất xám tuỷ sống"
        },
        {
          "source": "tuỷ sống",
          "target": "nơron li tâm",
          "relation": "nơron trung gian xử lý và chuyển lệnh sang nơron vận động"
        },
        {
          "source": "nơron li tâm",
          "target": "cơ quan phản ứng",
          "relation": "dẫn truyền xung thần kinh truyền lệnh đáp ứng kích thích"
        }
      ],
      "gt_caption_vi": "Sơ đồ mô tả cấu trúc cung phản xạ gồm 5 thành phần cơ bản trong hệ thần kinh: (1) Cơ quan thụ cảm ở da tiếp nhận kích thích từ môi trường và phát sinh xung thần kinh; (2) Nơron hướng tâm dẫn truyền xung thần kinh vào chất xám tuỷ sống; (3) Nơron trung gian nằm trong tuỷ sống tiếp nhận và xử lý thông tin; (4) Nơron li tâm nhận lệnh và dẫn xung thần kinh đi ra ngoài; (5) Cơ quan phản ứng là bắp cơ thực hiện phản ứng co cơ đáp lại kích thích một cách nhanh chóng.",
      "gt_caption_en": "The somatic reflex arc neural circuit diagram depicts its five fundamental anatomical components: (1) Receptor organs (cutaneous sensory receptors) detect external environmental stimuli and initiate electrical receptor potentials; (2) Sensory afferent neurons transmit incoming action potentials via dorsal roots into the spinal cord gray matter; (3) Interneurons within the central nervous system process and integrate synaptic inputs; (4) Motor efferent neurons conduct outgoing command impulses through ventral roots towards peripheral targets; (5) Effector organs (skeletal muscle fibers or endocrine glands) execute immediate contractile or secretional responses to protect the organism.",
      "generated_caption_vi": "Sơ đồ trình bày tiến trình khoa học diễn tiến theo từng giai đoạn của sơ đồ cấu tạo 5 thành phần của cung phản xạ thần kinh. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: cung phản xạ, cơ quan thụ cảm, nơron hướng tâm, nơron trung gian, tuỷ sống, nơron li tâm, cơ quan phản ứng cùng các cấu trúc liên quan (). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: cơ quan thụ cảm tiếp nhận kích thích sinh xung thần kinh cảm giác nơron hướng tâm; nơron hướng tâm dẫn truyền xung thần kinh vào chất xám tuỷ sống tuỷ sống; tuỷ sống nơron trung gian xử lý và chuyển lệnh sang nơron vận động nơron li tâm; nơron li tâm dẫn truyền xung thần kinh truyền lệnh đáp ứng kích thích cơ quan phản ứng.",
      "generated_caption_en": "The diagram illustrates the structure of the five components of a reflex arc, including sensory organs, sensory neurons, interneurons in the spinal cord, motor neurons, and effector organs. It shows the process where sensory organs receive stimuli and transmit nerve impulses to sensory neurons, which then convey these signals to the spinal cord for processing by interneurons before being sent via motor neurons to effector organs to produce a response.",
      "metrics_vi": {
        "bleu_1": 0.4473684210526316,
        "bleu_4": 0.09395973154362416,
        "rouge_l": 0.390625,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 0.23,
        "bertscore_f1": 86.21
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "cơ quan thụ cảm",
            "title": "<b>cơ quan thụ cảm</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "nơron hướng tâm",
            "title": "<b>nơron hướng tâm</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "tuỷ sống",
            "title": "<b>tuỷ sống</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "nơron li tâm",
            "title": "<b>nơron li tâm</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "cơ quan phản ứng",
            "title": "<b>cơ quan phản ứng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "cung phản xạ",
            "title": "<b>cung phản xạ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "nơron trung gian",
            "title": "<b>nơron trung gian</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "tiếp nhận kích thích sinh xung thần kinh cảm giác",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "dẫn truyền xung thần kinh vào chất xám tuỷ sống",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "nơron trung gian xử lý và chuyển lệnh sang nơron vận động",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N5",
            "label": "dẫn truyền xung thần kinh truyền lệnh đáp ứng kích thích",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"1508pt\" height=\"162pt\"\r\n viewBox=\"0.00 0.00 1508.00 162.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 158)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M89.16,-36C89.16,-36 12,-36 12,-36 6,-36 0,-30 0,-24 0,-24 0,-12 0,-12 0,-6 6,0 12,0 12,0 89.16,0 89.16,0 95.16,0 101.16,-6 101.16,-12 101.16,-12 101.16,-24 101.16,-24 101.16,-30 95.16,-36 89.16,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"50.58\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">cơ quan thụ cảm</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M438.32,-36C438.32,-36 355.91,-36 355.91,-36 349.91,-36 343.91,-30 343.91,-24 343.91,-24 343.91,-12 343.91,-12 343.91,-6 349.91,0 355.91,0 355.91,0 438.32,0 438.32,0 444.32,0 450.32,-6 450.32,-12 450.32,-12 450.32,-24 450.32,-24 450.32,-30 444.32,-36 438.32,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"397.11\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">nơron hướng tâm</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M101.31,-18C162.64,-18 266.93,-18 333.61,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"333.35,-20.63 340.85,-18 333.35,-15.38 333.35,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"222.53\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">tiếp nhận kích thích sinh xung thần kinh cảm giác</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M740.23,-36C740.23,-36 703.57,-36 703.57,-36 697.57,-36 691.57,-30 691.57,-24 691.57,-24 691.57,-12 691.57,-12 691.57,-6 697.57,0 703.57,0 703.57,0 740.23,0 740.23,0 746.23,0 752.23,-6 752.23,-12 752.23,-12 752.23,-24 752.23,-24 752.23,-30 746.23,-36 740.23,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"721.9\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tuỷ sống</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M450.69,-18C515.24,-18 623.25,-18 681.23,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"680.89,-20.63 688.39,-18 680.89,-15.38 680.89,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"570.94\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">dẫn truyền xung thần kinh vào chất xám tuỷ sống</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1103.64,-36C1103.64,-36 1049.73,-36 1049.73,-36 1043.73,-36 1037.73,-30 1037.73,-24 1037.73,-24 1037.73,-12 1037.73,-12 1037.73,-6 1043.73,0 1049.73,0 1049.73,0 1103.64,0 1103.64,0 1109.64,0 1115.64,-6 1115.64,-12 1115.64,-12 1115.64,-24 1115.64,-24 1115.64,-30 1109.64,-36 1103.64,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1076.68\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">nơron li tâm</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M752.67,-18C813.68,-18 953.34,-18 1027.45,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1027.23,-20.63 1034.73,-18 1027.23,-15.38 1027.23,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"894.98\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">nơron trung gian xử lý và chuyển lệnh sang nơron vận động</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1488.05,-36C1488.05,-36 1402.64,-36 1402.64,-36 1396.64,-36 1390.64,-30 1390.64,-24 1390.64,-24 1390.64,-12 1390.64,-12 1390.64,-6 1396.64,0 1402.64,0 1402.64,0 1488.05,0 1488.05,0 1494.05,0 1500.05,-6 1500.05,-12 1500.05,-12 1500.05,-24 1500.05,-24 1500.05,-30 1494.05,-36 1488.05,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1445.34\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">cơ quan phản ứng</text>\r\n</g>\r\n<!-- N4&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N4&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M1115.89,-18C1178.55,-18 1303.85,-18 1380.28,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1380.04,-20.63 1387.54,-18 1380.04,-15.38 1380.04,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1253.14\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">dẫn truyền xung thần kinh truyền lệnh đáp ứng kích thích</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M80.91,-95C80.91,-95 20.25,-95 20.25,-95 14.25,-95 8.25,-89 8.25,-83 8.25,-83 8.25,-71 8.25,-71 8.25,-65 14.25,-59 20.25,-59 20.25,-59 80.91,-59 80.91,-59 86.91,-59 92.91,-65 92.91,-71 92.91,-71 92.91,-83 92.91,-83 92.91,-89 86.91,-95 80.91,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"50.58\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">cung phản xạ</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M88.78,-154C88.78,-154 12.37,-154 12.37,-154 6.37,-154 0.37,-148 0.37,-142 0.37,-142 0.37,-130 0.37,-130 0.37,-124 6.37,-118 12.37,-118 12.37,-118 88.78,-118 88.78,-118 94.78,-118 100.78,-124 100.78,-130 100.78,-130 100.78,-142 100.78,-142 100.78,-148 94.78,-154 88.78,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"50.58\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">nơron trung gian</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_38",
      "filename": "vn_diag_38_he_tieu_hoa.png",
      "image_url": "vn_images/vn_diag_38_he_tieu_hoa.png",
      "width": 1126,
      "height": 1223,
      "title": "Sơ đồ các cơ quan trong hệ tiêu hoá của cơ thể người",
      "subject": "Sinh học 8",
      "subject_key": "sinh8",
      "subject_vi": "Sinh học 8 (THCS)",
      "grade": "Khối 8",
      "subject_color": "rose",
      "subject_icon": "fa-heart-pulse",
      "series": "Chương trình GDPT (NXB Giáo dục Việt Nam)",
      "chapter": "Chương 5: Tiêu hoá",
      "lesson": "Bài 24: Tiêu hoá và các cơ quan tiêu hoá (Hình 24-3)",
      "diagram_type": "anatomy_structure",
      "taxonomy_key": "anatomy",
      "taxonomy_vi": "Giải phẫu & Cấu trúc Sinh học",
      "taxonomy_en": "Anatomy & Biological Structure",
      "taxonomy_color": "sky",
      "taxonomy_icon": "fa-puzzle-piece",
      "key_entities": [
        "ống tiêu hoá",
        "tuyến tiêu hoá",
        "khoang miệng",
        "tuyến nước bọt",
        "họng",
        "thực quản",
        "dạ dày",
        "gan",
        "túi mật",
        "tuỵ",
        "ruột non",
        "tá tràng",
        "ruột già",
        "ruột thừa",
        "trực tràng",
        "hậu môn"
      ],
      "directional_relations": [
        {
          "source": "khoang miệng",
          "target": "thực quản",
          "relation": "thức ăn được nghiền tẩm nước bọt nuốt qua họng"
        },
        {
          "source": "thực quản",
          "target": "dạ dày",
          "relation": "sóng nhu động đẩy thức ăn vào dạ dày nhào trộn dịch vị"
        },
        {
          "source": "dạ dày",
          "target": "tá tràng",
          "relation": "thức ăn chuyển từng đợt xuống tá tràng ruột non tiếp nhận dịch mật và dịch tuỵ"
        },
        {
          "source": "ruột non",
          "target": "ruột già",
          "relation": "hoàn tất hấp thụ dinh dưỡng, bã cặn chuyển sang ruột già"
        },
        {
          "source": "ruột già",
          "target": "trực tràng",
          "relation": "tái hấp thu nước cô đặc phân chuyển về trực tràng và hậu môn"
        }
      ],
      "gt_caption_vi": "Sơ đồ các cơ quan trong hệ tiêu hoá người phân hoá thành ống tiêu hoá và tuyến tiêu hoá: Ống tiêu hoá gồm khoang miệng, họng, thực quản, dạ dày, ruột non (với đoạn đầu là tá tràng), ruột già (kèm manh tràng, ruột thừa), trực tràng và hậu môn; các tuyến tiêu hoá phụ trợ gồm tuyến nước bọt, gan tiết dịch mật dự trữ trong túi mật, và tuyến tuỵ tiết dịch tiêu hoá, phối hợp nhịp nhàng biến đổi thức ăn thành chất dinh dưỡng hấp thu vào cơ thể.",
      "gt_caption_en": "The anatomical system schematic depicts the human digestive tract, differentiated into the gastrointestinal alimentary canal and accessory digestive glands: The continuous alimentary canal begins at the oral cavity (with teeth and tongue), descending through the pharynx, muscular esophagus, expandable stomach, extensive small intestine (duodenum, jejunum, ileum), large intestine (colon, cecum with vermiform appendix), rectum, and terminal anus; functioning synchronously are accessory glands including salivary glands (producing amylase), gastric mucosal glands, liver and gallbladder (synthesizing and storing bile for emulsification), exocrine pancreas (secreting comprehensive digestive proteases, lipases, amylases), and enteric intestinal crypts to degrade polymers into absorbable monomers.",
      "generated_caption_vi": "Sơ đồ mô tả chi tiết đặc điểm cấu tạo của sơ đồ các cơ quan trong hệ tiêu hoá của cơ thể người trong chương trình Sinh học 8. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: ống tiêu hoá, tuyến tiêu hoá, khoang miệng, tuyến nước bọt, họng, thực quản, dạ dày cùng các cấu trúc liên quan (gan, túi mật, tuỵ, ruột non, tá tràng). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: khoang miệng thức ăn được nghiền tẩm nước bọt nuốt qua họng thực quản; thực quản sóng nhu động đẩy thức ăn vào dạ dày nhào trộn dịch vị dạ dày; dạ dày thức ăn chuyển từng đợt xuống tá tràng ruột non tiếp nhận dịch mật và dịch tuỵ tá tràng; ruột non hoàn tất hấp thụ dinh dưỡng, bã cặn chuyển sang ruột già ruột già; ruột già tái hấp thu nước cô đặc phân chuyển về trực tràng và hậu môn trực tràng.",
      "generated_caption_en": "The diagram illustrates the digestive organs of the human body, including the alimentary canal and digestive glands such as the mouth cavity, salivary glands, pharynx, esophagus, stomach, liver, gallbladder, pancreas, small intestine (duodenum), large intestine, appendix, and rectum. It shows the directional flow of food through these organs, starting from the mouth where food is chewed and mixed with saliva before being swallowed down the throat into the esophagus, then to the stomach for mixing with gastric juices, followed by passage to the duodenum where it mixes with bile and pancreatic fluids, moving next to the large intestine for water reabsorption, and finally to the rectum for waste evacuation.",
      "metrics_vi": {
        "bleu_1": 0.36,
        "bleu_4": 0.05813953488372093,
        "rouge_l": 0.2899628252788104,
        "entity_recall": 0.9375,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 11.65,
        "bertscore_f1": 86.29
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "khoang miệng",
            "title": "<b>khoang miệng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "thực quản",
            "title": "<b>thực quản</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "dạ dày",
            "title": "<b>dạ dày</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "tá tràng",
            "title": "<b>tá tràng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "ruột non",
            "title": "<b>ruột non</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "ruột già",
            "title": "<b>ruột già</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "trực tràng",
            "title": "<b>trực tràng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "ống tiêu hoá",
            "title": "<b>ống tiêu hoá</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "tuyến tiêu hoá",
            "title": "<b>tuyến tiêu hoá</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "tuyến nước bọt",
            "title": "<b>tuyến nước bọt</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N11",
            "label": "họng",
            "title": "<b>họng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N12",
            "label": "gan",
            "title": "<b>gan</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N13",
            "label": "túi mật",
            "title": "<b>túi mật</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N14",
            "label": "tuỵ",
            "title": "<b>tuỵ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N15",
            "label": "ruột thừa",
            "title": "<b>ruột thừa</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N16",
            "label": "hậu môn",
            "title": "<b>hậu môn</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "thức ăn được nghiền tẩm nước bọt nuốt qua họng",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "sóng nhu động đẩy thức ăn vào dạ dày nhào trộn dịch vị",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "thức ăn chuyển từng đợt xuống tá tràng ruột non tiếp nhận dịch mật và dịch tuỵ",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N5",
            "to": "N6",
            "label": "hoàn tất hấp thụ dinh dưỡng, bã cặn chuyển sang ruột già",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N6",
            "to": "N7",
            "label": "tái hấp thu nước cô đặc phân chuyển về trực tràng và hậu môn",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"1247pt\" height=\"634pt\"\r\n viewBox=\"0.00 0.00 1247.00 634.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 630)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M78.66,-36C78.66,-36 15,-36 15,-36 9,-36 3,-30 3,-24 3,-24 3,-12 3,-12 3,-6 9,0 15,0 15,0 78.66,0 78.66,0 84.66,0 90.66,-6 90.66,-12 90.66,-12 90.66,-24 90.66,-24 90.66,-30 84.66,-36 78.66,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.83\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">khoang miệng</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M430.82,-36C430.82,-36 385.91,-36 385.91,-36 379.91,-36 373.91,-30 373.91,-24 373.91,-24 373.91,-12 373.91,-12 373.91,-6 379.91,0 385.91,0 385.91,0 430.82,0 430.82,0 436.82,0 442.82,-6 442.82,-12 442.82,-12 442.82,-24 442.82,-24 442.82,-30 436.82,-36 430.82,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"408.36\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thực quản</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M90.84,-18C159.72,-18 294.05,-18 363.48,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"363.42,-20.63 370.92,-18 363.42,-15.38 363.42,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"233.78\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">thức ăn được nghiền tẩm nước bọt nuốt qua họng</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M792.02,-36C792.02,-36 762.02,-36 762.02,-36 756.02,-36 750.02,-30 750.02,-24 750.02,-24 750.02,-12 750.02,-12 750.02,-6 756.02,0 762.02,0 762.02,0 792.02,0 792.02,0 798.02,0 804.02,-6 804.02,-12 804.02,-12 804.02,-24 804.02,-24 804.02,-30 798.02,-36 792.02,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"777.02\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">dạ dày</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M443.2,-18C512.31,-18 669.12,-18 740.02,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"739.62,-20.63 747.12,-18 739.62,-15.38 739.62,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"593.07\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">sóng nhu động đẩy thức ăn vào dạ dày nhào trộn dịch vị</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1226.64,-36C1226.64,-36 1193.73,-36 1193.73,-36 1187.73,-36 1181.73,-30 1181.73,-24 1181.73,-24 1181.73,-12 1181.73,-12 1181.73,-6 1187.73,0 1193.73,0 1193.73,0 1226.64,0 1226.64,0 1232.64,0 1238.64,-6 1238.64,-12 1238.64,-12 1238.64,-24 1238.64,-24 1238.64,-30 1232.64,-36 1226.64,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1210.18\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tá tràng</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M804.35,-18C877.8,-18 1085.23,-18 1171.17,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1171.04,-20.63 1178.54,-18 1171.04,-15.38 1171.04,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"996.23\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">thức ăn chuyển từng đợt xuống tá tràng ruột non tiếp nhận dịch mật và dịch tuỵ</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M64.78,-95C64.78,-95 28.87,-95 28.87,-95 22.87,-95 16.87,-89 16.87,-83 16.87,-83 16.87,-71 16.87,-71 16.87,-65 22.87,-59 28.87,-59 28.87,-59 64.78,-59 64.78,-59 70.78,-59 76.78,-65 76.78,-71 76.78,-71 76.78,-83 76.78,-83 76.78,-89 70.78,-95 64.78,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.83\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ruột non</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M424.44,-95C424.44,-95 392.28,-95 392.28,-95 386.28,-95 380.28,-89 380.28,-83 380.28,-83 380.28,-71 380.28,-71 380.28,-65 386.28,-59 392.28,-59 392.28,-59 424.44,-59 424.44,-59 430.44,-59 436.44,-65 436.44,-71 436.44,-71 436.44,-83 436.44,-83 436.44,-89 430.44,-95 424.44,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"408.36\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ruột già</text>\r\n</g>\r\n<!-- N5&#45;&gt;N6 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N5&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M77.25,-77C142.31,-77 298.29,-77 370.06,-77\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"369.8,-79.63 377.3,-77 369.8,-74.38 369.8,-79.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"233.78\" y=\"-79.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">hoàn tất hấp thụ dinh dưỡng, bã cặn chuyển sang ruột già</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M798.73,-95C798.73,-95 755.32,-95 755.32,-95 749.32,-95 743.32,-89 743.32,-83 743.32,-83 743.32,-71 743.32,-71 743.32,-65 749.32,-59 755.32,-59 755.32,-59 798.73,-59 798.73,-59 804.73,-59 810.73,-65 810.73,-71 810.73,-71 810.73,-83 810.73,-83 810.73,-89 804.73,-95 798.73,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"777.02\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">trực tràng</text>\r\n</g>\r\n<!-- N6&#45;&gt;N7 -->\r\n<g id=\"edge5\" class=\"edge\">\r\n<title>N6&#45;&gt;N7</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M436.92,-77C500.23,-77 656.45,-77 732.72,-77\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"732.71,-79.63 740.21,-77 732.71,-74.38 732.71,-79.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"593.07\" y=\"-79.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">tái hấp thu nước cô đặc phân chuyển về trực tràng và hậu môn</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M74.53,-154C74.53,-154 19.12,-154 19.12,-154 13.12,-154 7.12,-148 7.12,-142 7.12,-142 7.12,-130 7.12,-130 7.12,-124 13.12,-118 19.12,-118 19.12,-118 74.53,-118 74.53,-118 80.53,-118 86.53,-124 86.53,-130 86.53,-130 86.53,-142 86.53,-142 86.53,-148 80.53,-154 74.53,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.83\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ống tiêu hoá</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M78.66,-213C78.66,-213 15,-213 15,-213 9,-213 3,-207 3,-201 3,-201 3,-189 3,-189 3,-183 9,-177 15,-177 15,-177 78.66,-177 78.66,-177 84.66,-177 90.66,-183 90.66,-189 90.66,-189 90.66,-201 90.66,-201 90.66,-207 84.66,-213 78.66,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.83\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tuyến tiêu hoá</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M81.66,-272C81.66,-272 12,-272 12,-272 6,-272 0,-266 0,-260 0,-260 0,-248 0,-248 0,-242 6,-236 12,-236 12,-236 81.66,-236 81.66,-236 87.66,-236 93.66,-242 93.66,-248 93.66,-248 93.66,-260 93.66,-260 93.66,-266 87.66,-272 81.66,-272\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.83\" y=\"-250.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tuyến nước bọt</text>\r\n</g>\r\n<!-- N11 -->\r\n<g id=\"node11\" class=\"node\">\r\n<title>N11</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M61.83,-331C61.83,-331 31.83,-331 31.83,-331 25.83,-331 19.83,-325 19.83,-319 19.83,-319 19.83,-307 19.83,-307 19.83,-301 25.83,-295 31.83,-295 31.83,-295 61.83,-295 61.83,-295 67.83,-295 73.83,-301 73.83,-307 73.83,-307 73.83,-319 73.83,-319 73.83,-325 67.83,-331 61.83,-331\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.83\" y=\"-309.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">họng</text>\r\n</g>\r\n<!-- N12 -->\r\n<g id=\"node12\" class=\"node\">\r\n<title>N12</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M61.83,-390C61.83,-390 31.83,-390 31.83,-390 25.83,-390 19.83,-384 19.83,-378 19.83,-378 19.83,-366 19.83,-366 19.83,-360 25.83,-354 31.83,-354 31.83,-354 61.83,-354 61.83,-354 67.83,-354 73.83,-360 73.83,-366 73.83,-366 73.83,-378 73.83,-378 73.83,-384 67.83,-390 61.83,-390\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.83\" y=\"-368.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">gan</text>\r\n</g>\r\n<!-- N13 -->\r\n<g id=\"node13\" class=\"node\">\r\n<title>N13</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M61.83,-449C61.83,-449 31.83,-449 31.83,-449 25.83,-449 19.83,-443 19.83,-437 19.83,-437 19.83,-425 19.83,-425 19.83,-419 25.83,-413 31.83,-413 31.83,-413 61.83,-413 61.83,-413 67.83,-413 73.83,-419 73.83,-425 73.83,-425 73.83,-437 73.83,-437 73.83,-443 67.83,-449 61.83,-449\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.83\" y=\"-427.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">túi mật</text>\r\n</g>\r\n<!-- N14 -->\r\n<g id=\"node14\" class=\"node\">\r\n<title>N14</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M61.83,-508C61.83,-508 31.83,-508 31.83,-508 25.83,-508 19.83,-502 19.83,-496 19.83,-496 19.83,-484 19.83,-484 19.83,-478 25.83,-472 31.83,-472 31.83,-472 61.83,-472 61.83,-472 67.83,-472 73.83,-478 73.83,-484 73.83,-484 73.83,-496 73.83,-496 73.83,-502 67.83,-508 61.83,-508\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.83\" y=\"-486.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tuỵ</text>\r\n</g>\r\n<!-- N15 -->\r\n<g id=\"node15\" class=\"node\">\r\n<title>N15</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M67.03,-567C67.03,-567 26.62,-567 26.62,-567 20.62,-567 14.62,-561 14.62,-555 14.62,-555 14.62,-543 14.62,-543 14.62,-537 20.62,-531 26.62,-531 26.62,-531 67.03,-531 67.03,-531 73.03,-531 79.03,-537 79.03,-543 79.03,-543 79.03,-555 79.03,-555 79.03,-561 73.03,-567 67.03,-567\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.83\" y=\"-545.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ruột thừa</text>\r\n</g>\r\n<!-- N16 -->\r\n<g id=\"node16\" class=\"node\">\r\n<title>N16</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M65.91,-626C65.91,-626 27.75,-626 27.75,-626 21.75,-626 15.75,-620 15.75,-614 15.75,-614 15.75,-602 15.75,-602 15.75,-596 21.75,-590 27.75,-590 27.75,-590 65.91,-590 65.91,-590 71.91,-590 77.91,-596 77.91,-602 77.91,-602 77.91,-614 77.91,-614 77.91,-620 71.91,-626 65.91,-626\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.83\" y=\"-604.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">hậu môn</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_39",
      "filename": "vn_diag_39_he_bai_tiet_nephron.png",
      "image_url": "vn_images/vn_diag_39_he_bai_tiet_nephron.png",
      "width": 1117,
      "height": 1090,
      "title": "Sơ đồ cấu tạo hệ bài tiết nước tiểu và đơn vị chức năng Nephron của thận",
      "subject": "Sinh học 8",
      "subject_key": "sinh8",
      "subject_vi": "Sinh học 8 (THCS)",
      "grade": "Khối 8",
      "subject_color": "rose",
      "subject_icon": "fa-heart-pulse",
      "series": "Chương trình GDPT (NXB Giáo dục Việt Nam)",
      "chapter": "Chương 7: Bài tiết",
      "lesson": "Bài 38: Bài tiết và cấu tạo hệ bài tiết nước tiểu (Hình 38-1)",
      "diagram_type": "anatomy_hierarchical",
      "taxonomy_key": "anatomy",
      "taxonomy_vi": "Giải phẫu & Cấu trúc Sinh học",
      "taxonomy_en": "Anatomy & Biological Structure",
      "taxonomy_color": "sky",
      "taxonomy_icon": "fa-puzzle-piece",
      "key_entities": [
        "thận",
        "ống dẫn nước tiểu",
        "bóng đái",
        "ống đái",
        "vỏ thận",
        "tuỷ thận",
        "bể thận",
        "nephron",
        "cầu thận",
        "nang cầu thận",
        "ống thận"
      ],
      "directional_relations": [
        {
          "source": "cầu thận",
          "target": "nang cầu thận",
          "relation": "áp lực máu lọc huyết tương qua mao mạch cầu thận vào nang cầu thận"
        },
        {
          "source": "nang cầu thận",
          "target": "ống thận",
          "relation": "dẫn nước tiểu đầu vào ống thận thực hiện tái hấp thu"
        },
        {
          "source": "ống thận",
          "target": "bể thận",
          "relation": "nước tiểu chính thức tập trung đổ về bể thận"
        },
        {
          "source": "bể thận",
          "target": "ống dẫn nước tiểu",
          "relation": "dẫn nước tiểu từ thận xuống tích luỹ tại bóng đái"
        },
        {
          "source": "bóng đái",
          "target": "ống đái",
          "relation": "co bóp bài xuất nước tiểu qua ống đái ra ngoài"
        }
      ],
      "gt_caption_vi": "Sơ đồ cấu tạo hệ bài tiết nước tiểu và đơn vị chức năng nephron của thận ở người: Hệ bài tiết nước tiểu gồm hai quả thận, hai ống dẫn nước tiểu, bóng đái và ống đái; cấu tạo quả thận gồm phần vỏ thận, phần tuỷ thận và bể thận; đơn vị chức năng vi thể cấu tạo nên thận là nephron gồm cầu thận (búi mao mạch máu), nang cầu thận bao quanh và ống thận; tại cầu thận diễn ra quá trình lọc máu tạo nước tiểu đầu chảy vào nang cầu thận rồi qua ống thận tái hấp thu và bài tiết tạo thành nước tiểu chính thức đổ về bể thận.",
      "gt_caption_en": "The hierarchical anatomical diagram illustrates the macro- and micro-structure of the human urinary excretion system and renal nephron unit: The urinary tract comprises paired retroperitoneal kidneys, bilateral ureters, muscular urinary bladder for temporary reservoir, and terminal urethra; cross-section of renal parenchyma reveals outer cortex, inner medulla featuring renal pyramids, and central renal pelvis; microscopic functional nephrons (~1 million per kidney) each consist of a vascular glomerulus (fenestrated capillary tuft), double-walled Bowman's capsule receiving primitive ultrafiltrate, and convoluted renal tubules with loops of Henle where selective reabsorption and tubular secretion concentrate urine prior to drainage into collecting ducts and renal pelvis.",
      "generated_caption_vi": "Sơ đồ mô tả chi tiết đặc điểm cấu tạo của sơ đồ cấu tạo hệ bài tiết nước tiểu và đơn vị chức năng nephron của thận trong chương trình Sinh học 8. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: thận, ống dẫn nước tiểu, bóng đái, ống đái, vỏ thận, tuỷ thận, bể thận cùng các cấu trúc liên quan (nephron, cầu thận, nang cầu thận, ống thận). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: cầu thận áp lực máu lọc huyết tương qua mao mạch cầu thận vào nang cầu thận nang cầu thận; nang cầu thận dẫn nước tiểu đầu vào ống thận thực hiện tái hấp thu ống thận; ống thận nước tiểu chính thức tập trung đổ về bể thận bể thận; bể thận dẫn nước tiểu từ thận xuống tích luỹ tại bóng đái ống dẫn nước tiểu; bóng đái co bóp bài xuất nước tiểu qua ống đái ra ngoài ống đái.",
      "generated_caption_en": "The diagram illustrates the structure of the urinary system and the functional unit nephron within the kidney, highlighting key components such as the renal cortex, medulla, calyces, ureter, glomerulus, Bowman's capsule, renal tubule, and bladder. It shows the flow of urine starting from the filtration of blood through the glomerulus into the Bowman's capsule, then moving to the renal tubule for initial reabsorption, followed by collection in the calyces, transport via the ureter to the bladder, and finally excretion through the urethra.",
      "metrics_vi": {
        "bleu_1": 0.4857142857142857,
        "bleu_4": 0.11627906976744186,
        "rouge_l": 0.4246575342465753,
        "entity_recall": 1.0,
        "dir_accuracy": 0.6
      },
      "metrics_en": {
        "cider": 1.08,
        "bertscore_f1": 85.75
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "cầu thận",
            "title": "<b>cầu thận</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "nang cầu thận",
            "title": "<b>nang cầu thận</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "ống thận",
            "title": "<b>ống thận</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "bể thận",
            "title": "<b>bể thận</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "ống dẫn nước tiểu",
            "title": "<b>ống dẫn nước tiểu</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "bóng đái",
            "title": "<b>bóng đái</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "ống đái",
            "title": "<b>ống đái</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "thận",
            "title": "<b>thận</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "vỏ thận",
            "title": "<b>vỏ thận</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "tuỷ thận",
            "title": "<b>tuỷ thận</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N11",
            "label": "nephron",
            "title": "<b>nephron</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "áp lực máu lọc huyết tương qua mao mạch cầu thận vào nang cầu thận",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "dẫn nước tiểu đầu vào ống thận thực hiện tái hấp thu",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "nước tiểu chính thức tập trung đổ về bể thận",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N5",
            "label": "dẫn nước tiểu từ thận xuống tích luỹ tại bóng đái",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N6",
            "to": "N7",
            "label": "co bóp bài xuất nước tiểu qua ống đái ra ngoài",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"1447pt\" height=\"339pt\"\r\n viewBox=\"0.00 0.00 1447.00 339.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 335)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M49.41,-36C49.41,-36 12,-36 12,-36 6,-36 0,-30 0,-24 0,-24 0,-12 0,-12 0,-6 6,0 12,0 12,0 49.41,0 49.41,0 55.41,0 61.41,-6 61.41,-12 61.41,-12 61.41,-24 61.41,-24 61.41,-30 55.41,-36 49.41,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"30.7\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">cầu thận</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M475.82,-36C475.82,-36 411.41,-36 411.41,-36 405.41,-36 399.41,-30 399.41,-24 399.41,-24 399.41,-12 399.41,-12 399.41,-6 405.41,0 411.41,0 411.41,0 475.82,0 475.82,0 481.82,0 487.82,-6 487.82,-12 487.82,-12 487.82,-24 487.82,-24 487.82,-30 481.82,-36 475.82,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"443.61\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">nang cầu thận</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M61.59,-18C130.52,-18 301.42,-18 389,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"388.78,-20.63 396.28,-18 388.78,-15.38 388.78,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"230.41\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">áp lực máu lọc huyết tương qua mao mạch cầu thận vào nang cầu thận</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M797.98,-36C797.98,-36 759.82,-36 759.82,-36 753.82,-36 747.82,-30 747.82,-24 747.82,-24 747.82,-12 747.82,-12 747.82,-6 753.82,0 759.82,0 759.82,0 797.98,0 797.98,0 803.98,0 809.98,-6 809.98,-12 809.98,-12 809.98,-24 809.98,-24 809.98,-30 803.98,-36 797.98,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"778.9\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ống thận</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M488.19,-18C553.2,-18 674.7,-18 737.7,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"737.43,-20.63 744.93,-18 737.43,-15.38 737.43,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"617.82\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">dẫn nước tiểu đầu vào ống thận thực hiện tái hấp thu</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1077.39,-36C1077.39,-36 1045.23,-36 1045.23,-36 1039.23,-36 1033.23,-30 1033.23,-24 1033.23,-24 1033.23,-12 1033.23,-12 1033.23,-6 1039.23,0 1045.23,0 1045.23,0 1077.39,0 1077.39,0 1083.39,0 1089.39,-6 1089.39,-12 1089.39,-12 1089.39,-24 1089.39,-24 1089.39,-30 1083.39,-36 1077.39,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1061.31\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">bể thận</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M810.44,-18C862.18,-18 966.9,-18 1022.93,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1022.91,-20.63 1030.41,-18 1022.91,-15.38 1022.91,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"921.6\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">nước tiểu chính thức tập trung đổ về bể thận</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1426.55,-36C1426.55,-36 1341.89,-36 1341.89,-36 1335.89,-36 1329.89,-30 1329.89,-24 1329.89,-24 1329.89,-12 1329.89,-12 1329.89,-6 1335.89,0 1341.89,0 1341.89,0 1426.55,0 1426.55,0 1432.55,0 1438.55,-6 1438.55,-12 1438.55,-12 1438.55,-24 1438.55,-24 1438.55,-30 1432.55,-36 1426.55,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1384.22\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ống dẫn nước tiểu</text>\r\n</g>\r\n<!-- N4&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N4&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M1089.67,-18C1140.23,-18 1249.53,-18 1319.55,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1319.36,-20.63 1326.86,-18 1319.36,-15.38 1319.36,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1209.64\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">dẫn nước tiểu từ thận xuống tích luỹ tại bóng đái</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M49.41,-95C49.41,-95 12,-95 12,-95 6,-95 0,-89 0,-83 0,-83 0,-71 0,-71 0,-65 6,-59 12,-59 12,-59 49.41,-59 49.41,-59 55.41,-59 61.41,-65 61.41,-71 61.41,-71 61.41,-83 61.41,-83 61.41,-89 55.41,-95 49.41,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"30.7\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">bóng đái</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M459.32,-95C459.32,-95 427.91,-95 427.91,-95 421.91,-95 415.91,-89 415.91,-83 415.91,-83 415.91,-71 415.91,-71 415.91,-65 421.91,-59 427.91,-59 427.91,-59 459.32,-59 459.32,-59 465.32,-59 471.32,-65 471.32,-71 471.32,-71 471.32,-83 471.32,-83 471.32,-89 465.32,-95 459.32,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"443.61\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ống đái</text>\r\n</g>\r\n<!-- N6&#45;&gt;N7 -->\r\n<g id=\"edge5\" class=\"edge\">\r\n<title>N6&#45;&gt;N7</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M61.59,-77C135.11,-77 324.68,-77 405.37,-77\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"405.33,-79.63 412.83,-77 405.33,-74.38 405.33,-79.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"230.41\" y=\"-79.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">co bóp bài xuất nước tiểu qua ống đái ra ngoài</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M45.7,-154C45.7,-154 15.7,-154 15.7,-154 9.7,-154 3.7,-148 3.7,-142 3.7,-142 3.7,-130 3.7,-130 3.7,-124 9.7,-118 15.7,-118 15.7,-118 45.7,-118 45.7,-118 51.7,-118 57.7,-124 57.7,-130 57.7,-130 57.7,-142 57.7,-142 57.7,-148 51.7,-154 45.7,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"30.7\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thận</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M46.41,-213C46.41,-213 15,-213 15,-213 9,-213 3,-207 3,-201 3,-201 3,-189 3,-189 3,-183 9,-177 15,-177 15,-177 46.41,-177 46.41,-177 52.41,-177 58.41,-183 58.41,-189 58.41,-189 58.41,-201 58.41,-201 58.41,-207 52.41,-213 46.41,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"30.7\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">vỏ thận</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M47.91,-272C47.91,-272 13.5,-272 13.5,-272 7.5,-272 1.5,-266 1.5,-260 1.5,-260 1.5,-248 1.5,-248 1.5,-242 7.5,-236 13.5,-236 13.5,-236 47.91,-236 47.91,-236 53.91,-236 59.91,-242 59.91,-248 59.91,-248 59.91,-260 59.91,-260 59.91,-266 53.91,-272 47.91,-272\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"30.7\" y=\"-250.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tuỷ thận</text>\r\n</g>\r\n<!-- N11 -->\r\n<g id=\"node11\" class=\"node\">\r\n<title>N11</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M48.66,-331C48.66,-331 12.75,-331 12.75,-331 6.75,-331 0.75,-325 0.75,-319 0.75,-319 0.75,-307 0.75,-307 0.75,-301 6.75,-295 12.75,-295 12.75,-295 48.66,-295 48.66,-295 54.66,-295 60.66,-301 60.66,-307 60.66,-307 60.66,-319 60.66,-319 60.66,-325 54.66,-331 48.66,-331\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"30.7\" y=\"-309.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">nephron</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_40",
      "filename": "vn_diag_40_van_tinh_mach.png",
      "image_url": "vn_images/vn_diag_40_van_tinh_mach.png",
      "width": 492,
      "height": 889,
      "title": "Sự vận chuyển máu qua tĩnh mạch và vai trò của các van tĩnh mạch một chiều",
      "subject": "Sinh học 8",
      "subject_key": "sinh8",
      "subject_vi": "Sinh học 8 (THCS)",
      "grade": "Khối 8",
      "subject_color": "rose",
      "subject_icon": "fa-heart-pulse",
      "series": "Chương trình GDPT (NXB Giáo dục Việt Nam)",
      "chapter": "Chương 3: Tuần hoàn",
      "lesson": "Bài 18: Vận chuyển máu qua hệ mạch. Vệ sinh hệ tuần hoàn (Hình 18-2)",
      "diagram_type": "anatomy_directional_flow",
      "taxonomy_key": "anatomy",
      "taxonomy_vi": "Giải phẫu & Cấu trúc Sinh học",
      "taxonomy_en": "Anatomy & Biological Structure",
      "taxonomy_color": "sky",
      "taxonomy_icon": "fa-puzzle-piece",
      "key_entities": [
        "tĩnh mạch",
        "van tĩnh mạch",
        "co cơ",
        "tim",
        "áp lực máu"
      ],
      "directional_relations": [
        {
          "source": "tĩnh mạch",
          "target": "tim",
          "relation": "máu vận chuyển trong lòng tĩnh mạch chảy ngược về tim"
        },
        {
          "source": "co cơ",
          "target": "van tĩnh mạch",
          "relation": "sự co cơ ép vào thành tĩnh mạch đẩy máu làm mở van tĩnh mạch"
        },
        {
          "source": "van tĩnh mạch",
          "target": "tĩnh mạch",
          "relation": "khi cơ giãn van tĩnh mạch khép chặt ngăn máu chảy ngược"
        }
      ],
      "gt_caption_vi": "Sơ đồ cơ chế vận chuyển máu qua tĩnh mạch và vai trò của van tĩnh mạch một chiều: Máu trong các tĩnh mạch chảy về tim nhờ sự co cơ bắp xung quanh thành mạch hỗ trợ; khi cơ co bóp ép vào tĩnh mạch, áp lực máu đẩy van tĩnh mạch mở ra cho dòng máu tống lên phía trên; khi cơ giãn, trọng lực khiến máu có xu hướng tụt xuống làm các mép van tĩnh mạch khép chặt lại, ngăn không cho máu chảy ngược xuống dưới.",
      "gt_caption_en": "The physiological directional flow diagram details venous hemodynamics and the mechanical role of unidirectional venous valves: Within peripheral and lower limb veins where residual arterial hydrostatic pressure is minimal, blood ascends against gravity primarily propelled by the skeletal muscle pump and thoracic respiratory suction; inside the venous lumen, pocket-like endothelial cusps act as one-way valves; when surrounding skeletal muscles contract, elevated intraluminal pressure forces venous valves open to drive blood upward toward the heart; conversely, during muscle relaxation or gravitational pull, back-filling of valve pockets promptly coapts cusp margins, completely obstructing retrograde reflux.",
      "generated_caption_vi": "Sơ đồ mô tả chi tiết đặc điểm cấu tạo của sự vận chuyển máu qua tĩnh mạch và vai trò của các van tĩnh mạch một chiều trong chương trình Sinh học 8. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: tĩnh mạch, van tĩnh mạch, co cơ, tim, áp lực máu. Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: tĩnh mạch máu vận chuyển trong lòng tĩnh mạch chảy ngược về tim tim; co cơ sự co cơ ép vào thành tĩnh mạch đẩy máu làm mở van tĩnh mạch van tĩnh mạch; van tĩnh mạch khi cơ giãn van tĩnh mạch khép chặt ngăn máu chảy ngược tĩnh mạch.",
      "generated_caption_en": "The diagram illustrates the blood flow through veins and the function of one-way venous valves. Blood moves from the veins towards the heart against the direction of gravity, facilitated by the contraction of muscles which pushes the blood, opening the venous valves, and when the muscles relax, the valves close to prevent backflow.",
      "metrics_vi": {
        "bleu_1": 0.496,
        "bleu_4": 0.09016393442622951,
        "rouge_l": 0.43518518518518523,
        "entity_recall": 1.0,
        "dir_accuracy": 0.3333333333333333
      },
      "metrics_en": {
        "cider": 0.0,
        "bertscore_f1": 87.59
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "tĩnh mạch",
            "title": "<b>tĩnh mạch</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "tim",
            "title": "<b>tim</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "co cơ",
            "title": "<b>co cơ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "van tĩnh mạch",
            "title": "<b>van tĩnh mạch</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "áp lực máu",
            "title": "<b>áp lực máu</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "máu vận chuyển trong lòng tĩnh mạch chảy ngược về tim",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "sự co cơ ép vào thành tĩnh mạch đẩy máu làm mở van tĩnh mạch",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N1",
            "label": "khi cơ giãn van tĩnh mạch khép chặt ngăn máu chảy ngược",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"1163pt\" height=\"103pt\"\r\n viewBox=\"0.00 0.00 1163.00 103.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 99)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M814.48,-36C814.48,-36 771.07,-36 771.07,-36 765.07,-36 759.07,-30 759.07,-24 759.07,-24 759.07,-12 759.07,-12 759.07,-6 765.07,0 771.07,0 771.07,0 814.48,0 814.48,0 820.48,0 826.48,-6 826.48,-12 826.48,-12 826.48,-24 826.48,-24 826.48,-30 820.48,-36 814.48,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"792.77\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tĩnh mạch</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1143.48,-36C1143.48,-36 1113.48,-36 1113.48,-36 1107.48,-36 1101.48,-30 1101.48,-24 1101.48,-24 1101.48,-12 1101.48,-12 1101.48,-6 1107.48,0 1113.48,0 1113.48,0 1143.48,0 1143.48,0 1149.48,0 1155.48,-6 1155.48,-12 1155.48,-12 1155.48,-24 1155.48,-24 1155.48,-30 1149.48,-36 1143.48,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1128.48\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tim</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M826.69,-18C889.59,-18 1026.4,-18 1091.57,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1091.17,-20.63 1098.67,-18 1091.17,-15.38 1091.17,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"963.98\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">máu vận chuyển trong lòng tĩnh mạch chảy ngược về tim</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M52.08,-36C52.08,-36 22.08,-36 22.08,-36 16.08,-36 10.08,-30 10.08,-24 10.08,-24 10.08,-12 10.08,-12 10.08,-6 16.08,0 22.08,0 22.08,0 52.08,0 52.08,0 58.08,0 64.08,-6 64.08,-12 64.08,-12 64.08,-24 64.08,-24 64.08,-30 58.08,-36 52.08,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"37.08\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">co cơ</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M462.32,-36C462.32,-36 398.66,-36 398.66,-36 392.66,-36 386.66,-30 386.66,-24 386.66,-24 386.66,-12 386.66,-12 386.66,-6 392.66,0 398.66,0 398.66,0 462.32,0 462.32,0 468.32,0 474.32,-6 474.32,-12 474.32,-12 474.32,-24 474.32,-24 474.32,-30 468.32,-36 462.32,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"430.49\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">van tĩnh mạch</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M64.37,-18C127.96,-18 291.13,-18 376.15,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"376.15,-20.63 383.65,-18 376.15,-15.38 376.15,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"230.41\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">sự co cơ ép vào thành tĩnh mạch đẩy máu làm mở van tĩnh mạch</text>\r\n</g>\r\n<!-- N4&#45;&gt;N1 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N4&#45;&gt;N1</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M474.59,-18C543.88,-18 679.27,-18 748.6,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"748.51,-20.63 756.01,-18 748.51,-15.38 748.51,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"616.69\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">khi cơ giãn van tĩnh mạch khép chặt ngăn máu chảy ngược</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M62.16,-95C62.16,-95 12,-95 12,-95 6,-95 0,-89 0,-83 0,-83 0,-71 0,-71 0,-65 6,-59 12,-59 12,-59 62.16,-59 62.16,-59 68.16,-59 74.16,-65 74.16,-71 74.16,-71 74.16,-83 74.16,-83 74.16,-89 68.16,-95 62.16,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"37.08\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">áp lực máu</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_41",
      "filename": "vn_diag_41_lai_men_den.png",
      "image_url": "vn_images/vn_diag_41_lai_men_den.png",
      "width": 585,
      "height": 828,
      "title": "Sơ đồ giải thích kết quả thí nghiệm lai một cặp tính trạng của Men-đen",
      "subject": "Sinh học 9",
      "subject_key": "sinh9",
      "subject_vi": "Sinh học 9 (THCS)",
      "grade": "Khối 9",
      "subject_color": "amber",
      "subject_icon": "fa-dna",
      "series": "Chương trình GDPT (NXB Giáo dục Việt Nam)",
      "chapter": "Chương 1: Các thí nghiệm của Men-đen",
      "lesson": "Bài 2: Lai một cặp tính trạng (Hình 2.3)",
      "diagram_type": "genetic_inheritance_process",
      "taxonomy_key": "system_process",
      "taxonomy_vi": "Cơ chế Sinh lý & Di truyền Phân tử",
      "taxonomy_en": "Physiological & Molecular Processes",
      "taxonomy_color": "rose",
      "taxonomy_icon": "fa-gears",
      "key_entities": [
        "thế hệ P",
        "hoa đỏ",
        "hoa trắng",
        "giao tử P",
        "alen A",
        "alen a",
        "thế hệ F1",
        "giao tử F1",
        "thế hệ F2",
        "kiểu gene",
        "kiểu hình"
      ],
      "directional_relations": [
        {
          "source": "thế hệ P",
          "target": "giao tử P",
          "relation": "hoa đỏ AA tạo giao tử A còn hoa trắng aa tạo giao tử a"
        },
        {
          "source": "giao tử P",
          "target": "thế hệ F1",
          "relation": "thụ tinh tổ hợp tạo 100% thế hệ F1 mang kiểu gene Aa hoa đỏ"
        },
        {
          "source": "thế hệ F1",
          "target": "giao tử F1",
          "relation": "cơ thể F1 dị hợp tạo hai loại giao tử đực và cái là A và a"
        },
        {
          "source": "giao tử F1",
          "target": "thế hệ F2",
          "relation": "tổ hợp giao tử tạo thế hệ F2 với tỉ lệ 3 hoa đỏ : 1 hoa trắng"
        }
      ],
      "gt_caption_vi": "Sơ đồ giải thích thí nghiệm lai một cặp tính trạng của Men-đen ở đậu Hà Lan: Thế hệ P thuần chủng gồm cây hoa đỏ (AA) lai với cây hoa trắng (aa); khi giảm phân tạo giao tử P, cây hoa đỏ tạo giao tử mang alen A và cây hoa trắng tạo giao tử mang alen a; sự thụ tinh kết hợp giao tử tạo thế hệ F1 có 100% kiểu gene Aa và biểu hiện kiểu hình hoa đỏ; khi F1 tự thụ phấn, mỗi cây tạo giao tử F1 gồm 1/2 A và 1/2 a; qua thụ tinh ngẫu nhiên ở thế hệ F2 tạo tỉ lệ kiểu gene 1 AA : 2 Aa : 1 aa, biểu hiện tỉ lệ kiểu hình phân li là 3 hoa đỏ : 1 hoa trắng.",
      "gt_caption_en": "The Mendelian monohybrid inheritance schematic illustrates the genetic mechanism underlying the Law of Segregation in Pisum sativum: Pure-breeding parental generation (P) homozygous dominant red-flowered plants (AA) are crossed with homozygous recessive white-flowered plants (aa); during gametogenesis meiosis, alleles segregate so P generates exclusively A or a gametes; fertilization unites gametes to produce 100% heterozygous F1 progeny (Aa) exhibiting red blossoms due to complete dominance of allele A over a; self-fertilization of F1 yields equal proportions of male and female gametes (1/2 A : 1/2 a); random syngamy in F2 creates four zygotic combinations with genotypic ratio 1 AA : 2 Aa : 1 aa, manifesting the classical 3:1 phenotypic segregation ratio.",
      "generated_caption_vi": "Sơ đồ trình bày tiến trình khoa học diễn tiến theo từng giai đoạn của sơ đồ giải thích kết quả thí nghiệm lai một cặp tính trạng của men-đen. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: thế hệ P, hoa đỏ, hoa trắng, giao tử P, alen A, alen a, thế hệ F1 cùng các cấu trúc liên quan (giao tử F1, thế hệ F2, kiểu gene, kiểu hình). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: thế hệ P hoa đỏ AA tạo giao tử A còn hoa trắng aa tạo giao tử a giao tử P; giao tử P thụ tinh tổ hợp tạo 100% thế hệ F1 mang kiểu gene Aa hoa đỏ thế hệ F1; thế hệ F1 cơ thể F1 dị hợp tạo hai loại giao tử đực và cái là A và a giao tử F1; giao tử F1 tổ hợp giao tử tạo thế hệ F2 với tỉ lệ 3 hoa đỏ : 1 hoa trắng thế hệ F2.",
      "generated_caption_en": "This diagram illustrates Mendel's one-trait cross experiment results, showing the inheritance process through three generations. It begins with the parental generation (P) producing red-flowered plants with genotype AA and white-flowered plants with genotype aa, which generate gametes; these gametes combine to form the first filial generation (F1), all of which have the heterozygous genotype Aa and red flowers. The F1 generation then produces two types of gametes, A and a, leading to the second filial generation (F2) where the flower color ratio is 3 red to 1 white.",
      "metrics_vi": {
        "bleu_1": 0.48066298342541436,
        "bleu_4": 0.07865168539325842,
        "rouge_l": 0.41509433962264153,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 0.04,
        "bertscore_f1": 85.67
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "thế hệ P",
            "title": "<b>thế hệ P</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "giao tử P",
            "title": "<b>giao tử P</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "thế hệ F1",
            "title": "<b>thế hệ F1</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "giao tử F1",
            "title": "<b>giao tử F1</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "thế hệ F2",
            "title": "<b>thế hệ F2</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "hoa đỏ",
            "title": "<b>hoa đỏ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "hoa trắng",
            "title": "<b>hoa trắng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "alen A",
            "title": "<b>alen A</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "kiểu gene",
            "title": "<b>kiểu gene</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "kiểu hình",
            "title": "<b>kiểu hình</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "hoa đỏ AA tạo giao tử A còn hoa trắng aa tạo giao tử a",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "thụ tinh tổ hợp tạo 100% thế hệ F1 mang kiểu gene Aa hoa đỏ",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "cơ thể F1 dị hợp tạo hai loại giao tử đực và cái là A và a",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N5",
            "label": "tổ hợp giao tử tạo thế hệ F2 với tỉ lệ 3 hoa đỏ : 1 hoa trắng",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"1465pt\" height=\"339pt\"\r\n viewBox=\"0.00 0.00 1465.00 339.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 335)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M51.66,-36C51.66,-36 15,-36 15,-36 9,-36 3,-30 3,-24 3,-24 3,-12 3,-12 3,-6 9,0 15,0 15,0 51.66,0 51.66,0 57.66,0 63.66,-6 63.66,-12 63.66,-12 63.66,-24 63.66,-24 63.66,-30 57.66,-36 51.66,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"33.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thế hệ P</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M385.07,-36C385.07,-36 344.66,-36 344.66,-36 338.66,-36 332.66,-30 332.66,-24 332.66,-24 332.66,-12 332.66,-12 332.66,-6 338.66,0 344.66,0 344.66,0 385.07,0 385.07,0 391.07,0 397.07,-6 397.07,-12 397.07,-12 397.07,-24 397.07,-24 397.07,-30 391.07,-36 385.07,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"364.86\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">giao tử P</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M64.16,-18C123.23,-18 255.21,-18 322.58,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"322.2,-20.63 329.7,-18 322.2,-15.38 322.2,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"199.66\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">hoa đỏ AA tạo giao tử A còn hoa trắng aa tạo giao tử a</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M750.73,-36C750.73,-36 708.82,-36 708.82,-36 702.82,-36 696.82,-30 696.82,-24 696.82,-24 696.82,-12 696.82,-12 696.82,-6 702.82,0 708.82,0 708.82,0 750.73,0 750.73,0 756.73,0 762.73,-6 762.73,-12 762.73,-12 762.73,-24 762.73,-24 762.73,-30 756.73,-36 750.73,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"729.77\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thế hệ F1</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M397.44,-18C462.82,-18 613.08,-18 686.64,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"686.27,-20.63 693.77,-18 686.27,-15.38 686.27,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"546.94\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">thụ tinh tổ hợp tạo 100% thế hệ F1 mang kiểu gene Aa hoa đỏ</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1093.14,-36C1093.14,-36 1047.48,-36 1047.48,-36 1041.48,-36 1035.48,-30 1035.48,-24 1035.48,-24 1035.48,-12 1035.48,-12 1035.48,-6 1041.48,0 1047.48,0 1047.48,0 1093.14,0 1093.14,0 1099.14,0 1105.14,-6 1105.14,-12 1105.14,-12 1105.14,-24 1105.14,-24 1105.14,-30 1099.14,-36 1093.14,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1070.31\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">giao tử F1</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M762.93,-18C823.76,-18 955.79,-18 1024.98,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1024.89,-20.63 1032.39,-18 1024.89,-15.38 1024.89,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"899.1\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">cơ thể F1 dị hợp tạo hai loại giao tử đực và cái là A và a</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1445.3,-36C1445.3,-36 1403.39,-36 1403.39,-36 1397.39,-36 1391.39,-30 1391.39,-24 1391.39,-24 1391.39,-12 1391.39,-12 1391.39,-6 1397.39,0 1403.39,0 1403.39,0 1445.3,0 1445.3,0 1451.3,0 1457.3,-6 1457.3,-12 1457.3,-12 1457.3,-24 1457.3,-24 1457.3,-30 1451.3,-36 1445.3,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1424.34\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thế hệ F2</text>\r\n</g>\r\n<!-- N4&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N4&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M1105.38,-18C1170.1,-18 1310.62,-18 1381.16,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1380.82,-20.63 1388.32,-18 1380.82,-15.38 1380.82,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1248.26\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">tổ hợp giao tử tạo thế hệ F2 với tỉ lệ 3 hoa đỏ : 1 hoa trắng</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M48.33,-95C48.33,-95 18.33,-95 18.33,-95 12.33,-95 6.33,-89 6.33,-83 6.33,-83 6.33,-71 6.33,-71 6.33,-65 12.33,-59 18.33,-59 18.33,-59 48.33,-59 48.33,-59 54.33,-59 60.33,-65 60.33,-71 60.33,-71 60.33,-83 60.33,-83 60.33,-89 54.33,-95 48.33,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"33.33\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">hoa đỏ</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M54.28,-154C54.28,-154 12.37,-154 12.37,-154 6.37,-154 0.37,-148 0.37,-142 0.37,-142 0.37,-130 0.37,-130 0.37,-124 6.37,-118 12.37,-118 12.37,-118 54.28,-118 54.28,-118 60.28,-118 66.28,-124 66.28,-130 66.28,-130 66.28,-142 66.28,-142 66.28,-148 60.28,-154 54.28,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"33.33\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">hoa trắng</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M48.33,-213C48.33,-213 18.33,-213 18.33,-213 12.33,-213 6.33,-207 6.33,-201 6.33,-201 6.33,-189 6.33,-189 6.33,-183 12.33,-177 18.33,-177 18.33,-177 48.33,-177 48.33,-177 54.33,-177 60.33,-183 60.33,-189 60.33,-189 60.33,-201 60.33,-201 60.33,-207 54.33,-213 48.33,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"33.33\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">alen A</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M54.66,-272C54.66,-272 12,-272 12,-272 6,-272 0,-266 0,-260 0,-260 0,-248 0,-248 0,-242 6,-236 12,-236 12,-236 54.66,-236 54.66,-236 60.66,-236 66.66,-242 66.66,-248 66.66,-248 66.66,-260 66.66,-260 66.66,-266 60.66,-272 54.66,-272\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"33.33\" y=\"-250.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">kiểu gene</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M53.16,-331C53.16,-331 13.5,-331 13.5,-331 7.5,-331 1.5,-325 1.5,-319 1.5,-319 1.5,-307 1.5,-307 1.5,-301 7.5,-295 13.5,-295 13.5,-295 53.16,-295 53.16,-295 59.16,-295 65.16,-301 65.16,-307 65.16,-307 65.16,-319 65.16,-319 65.16,-325 59.16,-331 53.16,-331\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"33.33\" y=\"-309.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">kiểu hình</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_42",
      "filename": "vn_diag_42_luoi_thuc_an_rung.png",
      "image_url": "vn_images/vn_diag_42_luoi_thuc_an_rung.png",
      "width": 1126,
      "height": 1187,
      "title": "Sơ đồ mạng lưới thức ăn trong hệ sinh thái rừng nhiệt đới",
      "subject": "Sinh học 9",
      "subject_key": "sinh9",
      "subject_vi": "Sinh học 9 (THCS)",
      "grade": "Khối 9",
      "subject_color": "amber",
      "subject_icon": "fa-dna",
      "series": "Chương trình GDPT (NXB Giáo dục Việt Nam)",
      "chapter": "Chương 2: Hệ sinh thái",
      "lesson": "Bài 50: Hệ sinh thái (Hình 50.2)",
      "diagram_type": "food_web_network",
      "taxonomy_key": "food_web",
      "taxonomy_vi": "Chuỗi, Lưới thức ăn & Sinh thái",
      "taxonomy_en": "Food Webs & Ecological Pyramids",
      "taxonomy_color": "emerald",
      "taxonomy_icon": "fa-leaf",
      "key_entities": [
        "cây cỏ",
        "sâu ăn lá",
        "bọ ngựa",
        "chuột",
        "rắn",
        "cú mèo",
        "cầy",
        "hổ",
        "vi sinh vật",
        "lưới thức ăn"
      ],
      "directional_relations": [
        {
          "source": "cây cỏ",
          "target": "sâu ăn lá",
          "relation": "cung cấp thức ăn cho sâu"
        },
        {
          "source": "cây cỏ",
          "target": "chuột",
          "relation": "cung cấp thức ăn cho chuột"
        },
        {
          "source": "sâu ăn lá",
          "target": "bọ ngựa",
          "relation": "thức ăn cho bọ ngựa"
        },
        {
          "source": "sâu ăn lá",
          "target": "chuột",
          "relation": "thức ăn cho chuột"
        },
        {
          "source": "bọ ngựa",
          "target": "rắn",
          "relation": "thức ăn cho rắn"
        },
        {
          "source": "chuột",
          "target": "rắn",
          "relation": "thức ăn cho rắn"
        },
        {
          "source": "chuột",
          "target": "cú mèo",
          "relation": "thức ăn cho cú mèo"
        },
        {
          "source": "chuột",
          "target": "cầy",
          "relation": "thức ăn cho cầy"
        },
        {
          "source": "rắn",
          "target": "cú mèo",
          "relation": "thức ăn cho cú mèo"
        },
        {
          "source": "cầy",
          "target": "hổ",
          "relation": "thức ăn cho hổ"
        }
      ],
      "gt_caption_vi": "Sơ đồ mạng lưới thức ăn trong quần xã hệ sinh thái rừng nhiệt đới: Cây cỏ là sinh vật sản xuất cung cấp thức ăn cho sâu ăn lá và chuột; sâu ăn lá là thức ăn của bọ ngựa và chuột; ở bậc cao hơn, bọ ngựa và chuột là con mồi của rắn; chuột đồng thời bị săn bắt bởi cú mèo và cầy; rắn cũng là thức ăn của cú mèo; loài ăn thịt nhỏ như cầy bị săn bởi thú ăn thịt lớn là hổ; xác chết của các loài sinh vật được vi sinh vật phân giải thành chất khoáng nuôi cây cỏ.",
      "gt_caption_en": "The complex tropical forest ecosystem food web illustrates interwoven trophic chains intersecting at multiple common nodes: Grasses and trees constitute primary autotrophic producers anchoring trophic pyramids; folivorous caterpillars and herbivorous mice act as primary consumers; predatory mantises feed on caterpillars as secondary consumers; mice represent critical pivotal nodes simultaneously predated by snakes, nocturnal owls, and carnivores such as civets; at higher trophic levels, snakes feed on both mantises and mice while serving as prey for apex avian owls; apex terrestrial predators like tigers hunt intermediate civets; ultimately, detritus and organic debris from all trophic tiers are decomposed by microbial saprophytes back into inorganic soil nutrients.",
      "generated_caption_vi": "Sơ đồ lưới thức ăn và các mối quan hệ dinh dưỡng sinh thái trong sơ đồ mạng lưới thức ăn trong hệ sinh thái rừng nhiệt đới. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: cây cỏ, sâu ăn lá, bọ ngựa, chuột, rắn, cú mèo, cầy cùng các cấu trúc liên quan (hổ, vi sinh vật, lưới thức ăn). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: cây cỏ cung cấp thức ăn cho sâu sâu ăn lá; cây cỏ cung cấp thức ăn cho chuột chuột; sâu ăn lá thức ăn cho bọ ngựa bọ ngựa; sâu ăn lá thức ăn cho chuột chuột; bọ ngựa thức ăn cho rắn rắn; chuột thức ăn cho rắn rắn.",
      "generated_caption_en": "The diagram illustrates a food web network within a tropical forest ecosystem, showing various organisms including grass, leaf-eating insects, mantises, mice, snakes, owls, civets, tigers, and microorganisms. It depicts feeding relationships where grass supports leaf-eating insects and mice, which in turn serve as prey for mantises, snakes, owls, and civets; while snakes and owls also feed on mice and other small animals, with larger predators such as civets and tigers preying on smaller ones like mice and civets respectively.",
      "metrics_vi": {
        "bleu_1": 0.42857142857142855,
        "bleu_4": 0.08461538461538462,
        "rouge_l": 0.3305785123966942,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 0.01,
        "bertscore_f1": 85.89
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "cây cỏ",
            "title": "<b>cây cỏ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "sâu ăn lá",
            "title": "<b>sâu ăn lá</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "chuột",
            "title": "<b>chuột</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "bọ ngựa",
            "title": "<b>bọ ngựa</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "rắn",
            "title": "<b>rắn</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "cú mèo",
            "title": "<b>cú mèo</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "cầy",
            "title": "<b>cầy</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "hổ",
            "title": "<b>hổ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "vi sinh vật",
            "title": "<b>vi sinh vật</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "lưới thức ăn",
            "title": "<b>lưới thức ăn</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "cung cấp thức ăn cho sâu",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N1",
            "to": "N3",
            "label": "cung cấp thức ăn cho chuột",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N4",
            "label": "thức ăn cho bọ ngựa",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "thức ăn cho chuột",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N5",
            "label": "thức ăn cho rắn",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N5",
            "label": "thức ăn cho rắn",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N6",
            "label": "thức ăn cho cú mèo",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N7",
            "label": "thức ăn cho cầy",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N5",
            "to": "N6",
            "label": "thức ăn cho cú mèo",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N7",
            "to": "N8",
            "label": "thức ăn cho hổ",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"884pt\" height=\"246pt\"\r\n viewBox=\"0.00 0.00 884.00 246.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 242)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M54.71,-120C54.71,-120 24.71,-120 24.71,-120 18.71,-120 12.71,-114 12.71,-108 12.71,-108 12.71,-96 12.71,-96 12.71,-90 18.71,-84 24.71,-84 24.71,-84 54.71,-84 54.71,-84 60.71,-84 66.71,-90 66.71,-96 66.71,-96 66.71,-108 66.71,-108 66.71,-114 60.71,-120 54.71,-120\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"39.71\" y=\"-98.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">cây cỏ</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M299.62,-152C299.62,-152 259.96,-152 259.96,-152 253.96,-152 247.96,-146 247.96,-140 247.96,-140 247.96,-128 247.96,-128 247.96,-122 253.96,-116 259.96,-116 259.96,-116 299.62,-116 299.62,-116 305.62,-116 311.62,-122 311.62,-128 311.62,-128 311.62,-140 311.62,-140 311.62,-146 305.62,-152 299.62,-152\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"279.79\" y=\"-130.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">sâu ăn lá</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M67.09,-105.55C108.46,-111.11 188.9,-121.92 237.83,-128.5\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"237.29,-131.07 245.07,-129.47 237.99,-125.87 237.29,-131.07\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"150.16\" y=\"-125.87\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">cung cấp thức ăn cho sâu</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M504.49,-100C504.49,-100 474.49,-100 474.49,-100 468.49,-100 462.49,-94 462.49,-88 462.49,-88 462.49,-76 462.49,-76 462.49,-70 468.49,-64 474.49,-64 474.49,-64 504.49,-64 504.49,-64 510.49,-64 516.49,-70 516.49,-76 516.49,-76 516.49,-88 516.49,-88 516.49,-94 510.49,-100 504.49,-100\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"489.49\" y=\"-78.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">chuột</text>\r\n</g>\r\n<!-- N1&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N1&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M66.97,-100.78C102.05,-99.16 166.16,-96.21 220.91,-93.75 303.7,-90.04 400.9,-85.8 452.33,-83.57\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"452.18,-86.2 459.56,-83.25 451.95,-80.96 452.18,-86.2\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"279.79\" y=\"-95.97\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">cung cấp thức ăn cho chuột</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M312.01,-126.92C344.78,-119.4 397.74,-106.96 443.16,-95 446.15,-94.21 449.25,-93.37 452.35,-92.52\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"453.04,-95.05 459.55,-90.49 451.62,-89.99 453.04,-95.05\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"398.91\" y=\"-119.12\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">thức ăn cho chuột</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M507.82,-179C507.82,-179 471.16,-179 471.16,-179 465.16,-179 459.16,-173 459.16,-167 459.16,-167 459.16,-155 459.16,-155 459.16,-149 465.16,-143 471.16,-143 471.16,-143 507.82,-143 507.82,-143 513.82,-143 519.82,-149 519.82,-155 519.82,-155 519.82,-167 519.82,-167 519.82,-173 513.82,-179 507.82,-179\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"489.49\" y=\"-157.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">bọ ngựa</text>\r\n</g>\r\n<!-- N2&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N2&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M311.88,-138.04C348.42,-142.79 409.11,-150.68 448.96,-155.86\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"448.39,-158.43 456.16,-156.8 449.07,-153.23 448.39,-158.43\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"398.91\" y=\"-156.7\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">thức ăn cho bọ ngựa</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M676.7,-152C676.7,-152 646.7,-152 646.7,-152 640.7,-152 634.7,-146 634.7,-140 634.7,-140 634.7,-128 634.7,-128 634.7,-122 640.7,-116 646.7,-116 646.7,-116 676.7,-116 676.7,-116 682.7,-116 688.7,-122 688.7,-128 688.7,-128 688.7,-140 688.7,-140 688.7,-146 682.7,-152 676.7,-152\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"661.7\" y=\"-130.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">rắn</text>\r\n</g>\r\n<!-- N3&#45;&gt;N5 -->\r\n<g id=\"edge6\" class=\"edge\">\r\n<title>N3&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M516.71,-90.01C545.7,-98.87 592.56,-113.18 624.91,-123.07\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"623.9,-125.5 631.84,-125.18 625.43,-120.48 623.9,-125.5\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"569.57\" y=\"-117.92\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">thức ăn cho rắn</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M864.23,-120C864.23,-120 832.82,-120 832.82,-120 826.82,-120 820.82,-114 820.82,-108 820.82,-108 820.82,-96 820.82,-96 820.82,-90 826.82,-84 832.82,-84 832.82,-84 864.23,-84 864.23,-84 870.23,-84 876.23,-90 876.23,-96 876.23,-96 876.23,-108 876.23,-108 876.23,-114 870.23,-120 864.23,-120\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"848.52\" y=\"-98.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">cú mèo</text>\r\n</g>\r\n<!-- N3&#45;&gt;N6 -->\r\n<g id=\"edge7\" class=\"edge\">\r\n<title>N3&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M516.8,-83.43C557.11,-85.62 636.59,-89.95 704.07,-93.75 740.23,-95.78 781.51,-98.16 810.48,-99.84\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"810.2,-102.46 817.84,-100.27 810.5,-97.22 810.2,-102.46\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"661.7\" y=\"-95.97\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">thức ăn cho cú mèo</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M676.7,-36C676.7,-36 646.7,-36 646.7,-36 640.7,-36 634.7,-30 634.7,-24 634.7,-24 634.7,-12 634.7,-12 634.7,-6 640.7,0 646.7,0 646.7,0 676.7,0 676.7,0 682.7,0 688.7,-6 688.7,-12 688.7,-12 688.7,-24 688.7,-24 688.7,-30 682.7,-36 676.7,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"661.7\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">cầy</text>\r\n</g>\r\n<!-- N3&#45;&gt;N7 -->\r\n<g id=\"edge8\" class=\"edge\">\r\n<title>N3&#45;&gt;N7</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M516.65,-63.98C522.77,-60.26 529.38,-56.61 535.82,-53.75 564.62,-40.96 599.19,-31.48 624.65,-25.51\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"625.22,-28.07 631.95,-23.84 624.06,-22.95 625.22,-28.07\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"569.57\" y=\"-55.98\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">thức ăn cho cầy</text>\r\n</g>\r\n<!-- N4&#45;&gt;N5 -->\r\n<g id=\"edge5\" class=\"edge\">\r\n<title>N4&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M520.14,-156.3C549.15,-151.7 593.38,-144.68 624.46,-139.75\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"624.77,-142.36 631.77,-138.59 623.95,-137.17 624.77,-142.36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"569.57\" y=\"-155.98\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">thức ăn cho rắn</text>\r\n</g>\r\n<!-- N5&#45;&gt;N6 -->\r\n<g id=\"edge9\" class=\"edge\">\r\n<title>N5&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M689.18,-129.42C721.11,-123.89 774.96,-114.56 810.87,-108.35\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"810.86,-111.01 817.81,-107.15 809.97,-105.84 810.86,-111.01\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"762.45\" y=\"-125.87\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">thức ăn cho cú mèo</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M863.52,-36C863.52,-36 833.52,-36 833.52,-36 827.52,-36 821.52,-30 821.52,-24 821.52,-24 821.52,-12 821.52,-12 821.52,-6 827.52,0 833.52,0 833.52,0 863.52,0 863.52,0 869.52,0 875.52,-6 875.52,-12 875.52,-12 875.52,-24 875.52,-24 875.52,-30 869.52,-36 863.52,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"848.52\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">hổ</text>\r\n</g>\r\n<!-- N7&#45;&gt;N8 -->\r\n<g id=\"edge10\" class=\"edge\">\r\n<title>N7&#45;&gt;N8</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M689.18,-18C721.16,-18 775.11,-18 811.02,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"810.87,-20.63 818.37,-18 810.87,-15.38 810.87,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"762.45\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">thức ăn cho hổ</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M61.41,-179C61.41,-179 18,-179 18,-179 12,-179 6,-173 6,-167 6,-167 6,-155 6,-155 6,-149 12,-143 18,-143 18,-143 61.41,-143 61.41,-143 67.41,-143 73.41,-149 73.41,-155 73.41,-155 73.41,-167 73.41,-167 73.41,-173 67.41,-179 61.41,-179\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"39.71\" y=\"-157.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">vi sinh vật</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M67.41,-238C67.41,-238 12,-238 12,-238 6,-238 0,-232 0,-226 0,-226 0,-214 0,-214 0,-208 6,-202 12,-202 12,-202 67.41,-202 67.41,-202 73.41,-202 79.41,-208 79.41,-214 79.41,-214 79.41,-226 79.41,-226 79.41,-232 73.41,-238 67.41,-238\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"39.71\" y=\"-216.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">lưới thức ăn</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_43",
      "filename": "vn_diag_43_khac_phuc_can_thi.png",
      "image_url": "vn_images/vn_diag_43_khac_phuc_can_thi.png",
      "width": 1043,
      "height": 251,
      "title": "Sơ đồ cơ chế quang học của tật cận thị và phương pháp khắc phục bằng kính phân kì",
      "subject": "Sinh học 8",
      "subject_key": "sinh8",
      "subject_vi": "Sinh học 8 (THCS)",
      "grade": "Khối 8",
      "subject_color": "rose",
      "subject_icon": "fa-heart-pulse",
      "series": "Chương trình GDPT (NXB Giáo dục Việt Nam)",
      "chapter": "Chương 9: Thần kinh và giác quan",
      "lesson": "Bài 50: Vệ sinh mắt (Hình 50-2)",
      "diagram_type": "physical_schematic",
      "taxonomy_key": "astronomy_physics",
      "taxonomy_vi": "Thiên văn & Vật lý - Hóa học",
      "taxonomy_en": "Astronomy & Physical Science",
      "taxonomy_color": "purple",
      "taxonomy_icon": "fa-moon",
      "key_entities": [
        "cầu mắt",
        "thể thuỷ tinh",
        "màng lưới",
        "thấu kính phân kì",
        "kính cận",
        "chùm sáng hội tụ"
      ],
      "directional_relations": [
        {
          "source": "vị trí A",
          "target": "thấu kính 1",
          "relation": "vật ở xa khúc xạ qua thấu kính 1 tạo ảnh nét trên màng lưới"
        },
        {
          "source": "vị trí B",
          "target": "thấu kính 2",
          "relation": "vật dịch lại gần cần thấu kính 2 có độ cong lớn hơn để kéo ảnh về đúng màng lưới"
        }
      ],
      "gt_caption_vi": "Sơ đồ quang học mô tả tật cận thị và cách khắc phục: Ở mắt cận thị, do cầu mắt quá dài hoặc thể thuỷ tinh quá phồng, chùm tia sáng từ vật hội tụ ở phía trước màng lưới khiến ảnh nhìn bị mờ nhòe. Để khắc phục, người cận thị đeo kính cận là thấu kính phân kì, giúp chùm sáng phân kì thích hợp trước khi qua thể thuỷ tinh để ảnh của vật lùi về hội tụ đúng trên màng lưới.",
      "gt_caption_en": "The optobiological experimental diagram demonstrates crystalline lens accommodation mechanics in the human eye: When a luminous object (candle) is positioned distantly (position A), the lens maintains a flattened configuration (converging lens 1 with small curvature), accurately focusing an inverted real image upon the retinal receptive screen; when the object advances close to the eye (position B), retaining invariant lens curvature causes the focal plane to shift posterior to the retina, generating blurriness; to restore visual acuity, ciliary muscles contract to increase lens convex curvature (converging lens 2), effectively shortening focal length and pulling the sharp real image forward directly onto the photoreceptor layer.",
      "generated_caption_vi": "Sơ đồ khoa học minh họa trực quan nội dung 'Sơ đồ cơ chế quang học của tật cận thị và phương pháp khắc phục bằng kính phân kì'. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: cầu mắt, thể thuỷ tinh, màng lưới, thấu kính phân kì, kính cận, chùm sáng hội tụ. Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: vị trí A vật ở xa khúc xạ qua thấu kính 1 tạo ảnh nét trên màng lưới thấu kính 1; vị trí B vật dịch lại gần cần thấu kính 2 có độ cong lớn hơn để kéo ảnh về đúng màng lưới thấu kính 2.",
      "generated_caption_en": "The diagram illustrates the optical mechanism of nearsightedness, showing how light rays converge at position A through lens 1 to form a sharp image on the retina when viewing distant objects, but require lens 2 with greater curvature at position B to correct for closer objects, demonstrating the need for concave lenses to adjust the focal point back onto the retina.",
      "metrics_vi": {
        "bleu_1": 0.36065573770491804,
        "bleu_4": 0.01680672268907563,
        "rouge_l": 0.2995169082125604,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 0.0,
        "bertscore_f1": 86.65
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "vị trí A",
            "title": "<b>vị trí A</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "thấu kính 1",
            "title": "<b>thấu kính 1</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "vị trí B",
            "title": "<b>vị trí B</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "thấu kính 2",
            "title": "<b>thấu kính 2</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "cầu mắt",
            "title": "<b>cầu mắt</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "thể thuỷ tinh",
            "title": "<b>thể thuỷ tinh</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "màng lưới",
            "title": "<b>màng lưới</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "thấu kính phân kì",
            "title": "<b>thấu kính phân kì</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "kính cận",
            "title": "<b>kính cận</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "chùm sáng hội tụ",
            "title": "<b>chùm sáng hội tụ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "vật ở xa khúc xạ qua thấu kính 1 tạo ảnh nét trên màng lưới",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "vật dịch lại gần cần thấu kính 2 có độ cong lớn hơn để kéo ảnh về đúng màng lưới",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"569pt\" height=\"457pt\"\r\n viewBox=\"0.00 0.00 569.00 457.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 453)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M66.33,-36C66.33,-36 36.33,-36 36.33,-36 30.33,-36 24.33,-30 24.33,-24 24.33,-24 24.33,-12 24.33,-12 24.33,-6 30.33,0 36.33,0 36.33,0 66.33,0 66.33,0 72.33,0 78.33,-6 78.33,-12 78.33,-12 78.33,-24 78.33,-24 78.33,-30 72.33,-36 66.33,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"51.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">vị trí A</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M548.57,-36C548.57,-36 499.16,-36 499.16,-36 493.16,-36 487.16,-30 487.16,-24 487.16,-24 487.16,-12 487.16,-12 487.16,-6 493.16,0 499.16,0 499.16,0 548.57,0 548.57,0 554.57,0 560.57,-6 560.57,-12 560.57,-12 560.57,-24 560.57,-24 560.57,-30 554.57,-36 548.57,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"523.86\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thấu kính 1</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M78.64,-18C155.29,-18 379.18,-18 476.64,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"476.55,-20.63 484.05,-18 476.55,-15.38 476.55,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"294.91\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">vật ở xa khúc xạ qua thấu kính 1 tạo ảnh nét trên màng lưới</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M66.33,-95C66.33,-95 36.33,-95 36.33,-95 30.33,-95 24.33,-89 24.33,-83 24.33,-83 24.33,-71 24.33,-71 24.33,-65 30.33,-59 36.33,-59 36.33,-59 66.33,-59 66.33,-59 72.33,-59 78.33,-65 78.33,-71 78.33,-71 78.33,-83 78.33,-83 78.33,-89 72.33,-95 66.33,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"51.33\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">vị trí B</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M548.57,-95C548.57,-95 499.16,-95 499.16,-95 493.16,-95 487.16,-89 487.16,-83 487.16,-83 487.16,-71 487.16,-71 487.16,-65 493.16,-59 499.16,-59 499.16,-59 548.57,-59 548.57,-59 554.57,-59 560.57,-65 560.57,-71 560.57,-71 560.57,-83 560.57,-83 560.57,-89 554.57,-95 548.57,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"523.86\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thấu kính 2</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M78.64,-77C155.29,-77 379.18,-77 476.64,-77\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"476.55,-79.63 484.05,-77 476.55,-74.38 476.55,-79.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"294.91\" y=\"-79.22\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">vật dịch lại gần cần thấu kính 2 có độ cong lớn hơn để kéo ảnh về đúng màng lưới</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M68.53,-154C68.53,-154 34.12,-154 34.12,-154 28.12,-154 22.12,-148 22.12,-142 22.12,-142 22.12,-130 22.12,-130 22.12,-124 28.12,-118 34.12,-118 34.12,-118 68.53,-118 68.53,-118 74.53,-118 80.53,-124 80.53,-130 80.53,-130 80.53,-142 80.53,-142 80.53,-148 74.53,-154 68.53,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"51.33\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">cầu mắt</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M78.66,-213C78.66,-213 24,-213 24,-213 18,-213 12,-207 12,-201 12,-201 12,-189 12,-189 12,-183 18,-177 24,-177 24,-177 78.66,-177 78.66,-177 84.66,-177 90.66,-183 90.66,-189 90.66,-189 90.66,-201 90.66,-201 90.66,-207 84.66,-213 78.66,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"51.33\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thể thuỷ tinh</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M74.16,-272C74.16,-272 28.5,-272 28.5,-272 22.5,-272 16.5,-266 16.5,-260 16.5,-260 16.5,-248 16.5,-248 16.5,-242 22.5,-236 28.5,-236 28.5,-236 74.16,-236 74.16,-236 80.16,-236 86.16,-242 86.16,-248 86.16,-248 86.16,-260 86.16,-260 86.16,-266 80.16,-272 74.16,-272\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"51.33\" y=\"-250.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">màng lưới</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M90.66,-331C90.66,-331 12,-331 12,-331 6,-331 0,-325 0,-319 0,-319 0,-307 0,-307 0,-301 6,-295 12,-295 12,-295 90.66,-295 90.66,-295 96.66,-295 102.66,-301 102.66,-307 102.66,-307 102.66,-319 102.66,-319 102.66,-325 96.66,-331 90.66,-331\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"51.33\" y=\"-309.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thấu kính phân kì</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M69.66,-390C69.66,-390 33,-390 33,-390 27,-390 21,-384 21,-378 21,-378 21,-366 21,-366 21,-360 27,-354 33,-354 33,-354 69.66,-354 69.66,-354 75.66,-354 81.66,-360 81.66,-366 81.66,-366 81.66,-378 81.66,-378 81.66,-384 75.66,-390 69.66,-390\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"51.33\" y=\"-368.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">kính cận</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M90.28,-449C90.28,-449 12.37,-449 12.37,-449 6.37,-449 0.37,-443 0.37,-437 0.37,-437 0.37,-425 0.37,-425 0.37,-419 6.37,-413 12.37,-413 12.37,-413 90.28,-413 90.28,-413 96.28,-413 102.28,-419 102.28,-425 102.28,-425 102.28,-437 102.28,-437 102.28,-443 96.28,-449 90.28,-449\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"51.33\" y=\"-427.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">chùm sáng hội tụ</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_44",
      "filename": "vn_diag_44_chu_trinh_nuoc.png",
      "image_url": "vn_images/vn_diag_44_chu_trinh_nuoc.png",
      "width": 718,
      "height": 556,
      "title": "Sơ đồ chu trình nước trong sinh thái học tự nhiên",
      "subject": "Sinh học 12",
      "subject_key": "sinh12",
      "subject_vi": "Sinh học 12 (THPT)",
      "grade": "Khối 12",
      "subject_color": "blue",
      "subject_icon": "fa-helix",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương VII: Sinh thái học quần xã và hệ sinh thái",
      "lesson": "Bài 30: Chu trình sinh địa hoá và sinh quyển (Hình 30.1)",
      "diagram_type": "cycle",
      "taxonomy_key": "biogeochemical_cycle",
      "taxonomy_vi": "Chu trình Sinh-Địa-Hóa & Chuyển hóa",
      "taxonomy_en": "Biogeochemical & Metabolic Cycles",
      "taxonomy_color": "cyan",
      "taxonomy_icon": "fa-droplet",
      "key_entities": [
        "đại dương",
        "bốc hơi",
        "thoát hơi nước",
        "ngưng tụ mây",
        "mưa",
        "nước ngầm",
        "sông ngòi"
      ],
      "directional_relations": [
        {
          "source": "đại dương",
          "target": "bốc hơi",
          "relation": "nước đại dương bốc hơi lên khí quyển"
        },
        {
          "source": "bốc hơi",
          "target": "mây",
          "relation": "hơi nước ngưng tụ tạo thành các đám mây"
        },
        {
          "source": "mây",
          "target": "mưa",
          "relation": "ngưng kết rơi xuống mặt đất thành mưa"
        },
        {
          "source": "mưa",
          "target": "sông ngòi",
          "relation": "nước mưa tạo dòng chảy mặt đổ vào sông ngòi"
        },
        {
          "source": "sông ngòi",
          "target": "đại dương",
          "relation": "dẫn nước chảy quay trở về đại dương"
        }
      ],
      "gt_caption_vi": "Sơ đồ chu trình nước trong tự nhiên: Nước từ đại dương, sông hồ và bề mặt đất bốc hơi, kết hợp với lượng nước thoát hơi từ thảm thực vật bay lên khí quyển tạo thành mây; mây ngưng tụ tạo thành mưa rơi xuống lục địa và đại dương; một phần nước ngấm vào đất tạo thành mạch nước ngầm, phần còn lại chảy theo sông ngòi đổ trở lại biển và đại dương.",
      "gt_caption_en": "The comprehensive global biogeochemical hydrologic cycle model depicts planetary water dynamics: Solar thermal irradiation drives immense evaporation from oceans, seas, and surface water bodies into the atmosphere; simultaneously, terrestrial vegetation continuously transpires water vapor via foliar stomata; rising atmospheric vapor cools adiabatically, condensing around cloud condensation nuclei; upon cloud saturation, precipitation falls as rain, snow, or hail onto landmasses and marine surfaces; terrestrial precipitation subsequently partitions into surface runoff replenishing river drainage networks flowing back to the ocean, and deep groundwater percolation feeding subterranean aquifers.",
      "generated_caption_vi": "Sơ đồ biểu diễn chu trình sinh học khép kín và tiến trình phát triển của sơ đồ chu trình nước trong sinh thái học tự nhiên. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: đại dương, bốc hơi, thoát hơi nước, ngưng tụ mây, mưa, nước ngầm, sông ngòi cùng các cấu trúc liên quan (). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: đại dương nước đại dương bốc hơi lên khí quyển bốc hơi; bốc hơi hơi nước ngưng tụ tạo thành các đám mây mây; mây ngưng kết rơi xuống mặt đất thành mưa mưa; mưa nước mưa tạo dòng chảy mặt đổ vào sông ngòi sông ngòi; sông ngòi dẫn nước chảy quay trở về đại dương đại dương.",
      "generated_caption_en": "The diagram illustrates the natural water cycle, showing key components such as the ocean, evaporation, transpiration, cloud formation, precipitation, groundwater, and rivers. The process begins with the ocean where water evaporates into the atmosphere; this vapor then condenses to form clouds which release rain that falls onto land, replenishing rivers and groundwater before ultimately flowing back into the ocean.",
      "metrics_vi": {
        "bleu_1": 0.375,
        "bleu_4": 0.03007518796992481,
        "rouge_l": 0.3113207547169811,
        "entity_recall": 1.0,
        "dir_accuracy": 0.8
      },
      "metrics_en": {
        "cider": 0.01,
        "bertscore_f1": 86.0
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "đại dương",
            "title": "<b>đại dương</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "bốc hơi",
            "title": "<b>bốc hơi</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "mây",
            "title": "<b>mây</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "mưa",
            "title": "<b>mưa</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "sông ngòi",
            "title": "<b>sông ngòi</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "thoát hơi nước",
            "title": "<b>thoát hơi nước</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "ngưng tụ mây",
            "title": "<b>ngưng tụ mây</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "nước ngầm",
            "title": "<b>nước ngầm</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "nước đại dương bốc hơi lên khí quyển",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "hơi nước ngưng tụ tạo thành các đám mây",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "ngưng kết rơi xuống mặt đất thành mưa",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N5",
            "label": "nước mưa tạo dòng chảy mặt đổ vào sông ngòi",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N5",
            "to": "N1",
            "label": "dẫn nước chảy quay trở về đại dương",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"1285pt\" height=\"223pt\"\r\n viewBox=\"0.00 0.00 1285.00 223.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 219)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M69.28,-38C69.28,-38 22.87,-38 22.87,-38 16.87,-38 10.87,-32 10.87,-26 10.87,-26 10.87,-14 10.87,-14 10.87,-8 16.87,-2 22.87,-2 22.87,-2 69.28,-2 69.28,-2 75.28,-2 81.28,-8 81.28,-14 81.28,-14 81.28,-26 81.28,-26 81.28,-32 75.28,-38 69.28,-38\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.08\" y=\"-16.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">đại dương</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M331.07,-71C331.07,-71 298.91,-71 298.91,-71 292.91,-71 286.91,-65 286.91,-59 286.91,-59 286.91,-47 286.91,-47 286.91,-41 292.91,-35 298.91,-35 298.91,-35 331.07,-35 331.07,-35 337.07,-35 343.07,-41 343.07,-47 343.07,-47 343.07,-59 343.07,-59 343.07,-65 337.07,-71 331.07,-71\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"314.99\" y=\"-49.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">bốc hơi</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M81.7,-24.28C131.98,-30.5 224.83,-41.98 276.62,-48.38\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"276.24,-50.98 284,-49.29 276.88,-45.77 276.24,-50.98\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"189.53\" y=\"-49.69\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">nước đại dương bốc hơi lên khí quyển</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M653.32,-71C653.32,-71 623.32,-71 623.32,-71 617.32,-71 611.32,-65 611.32,-59 611.32,-59 611.32,-47 611.32,-47 611.32,-41 617.32,-35 623.32,-35 623.32,-35 653.32,-35 653.32,-35 659.32,-35 665.32,-41 665.32,-47 665.32,-47 665.32,-59 665.32,-59 665.32,-65 659.32,-71 653.32,-71\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"638.32\" y=\"-49.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">mây</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M343.39,-53C401.18,-53 535.6,-53 600.69,-53\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"600.67,-55.63 608.17,-53 600.67,-50.38 600.67,-55.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"450.57\" y=\"-55.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">hơi nước ngưng tụ tạo thành các đám mây</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M963.57,-71C963.57,-71 933.57,-71 933.57,-71 927.57,-71 921.57,-65 921.57,-59 921.57,-59 921.57,-47 921.57,-47 921.57,-41 927.57,-35 933.57,-35 933.57,-35 963.57,-35 963.57,-35 969.57,-35 975.57,-41 975.57,-47 975.57,-47 975.57,-59 975.57,-59 975.57,-65 969.57,-71 963.57,-71\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"948.57\" y=\"-49.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">mưa</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M665.6,-53C720.77,-53 848.71,-53 911.5,-53\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"911.13,-55.63 918.63,-53 911.13,-50.38 911.13,-55.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"820.07\" y=\"-55.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">ngưng kết rơi xuống mặt đất thành mưa</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1264.73,-38C1264.73,-38 1222.07,-38 1222.07,-38 1216.07,-38 1210.07,-32 1210.07,-26 1210.07,-26 1210.07,-14 1210.07,-14 1210.07,-8 1216.07,-2 1222.07,-2 1222.07,-2 1264.73,-2 1264.73,-2 1270.73,-2 1276.73,-8 1276.73,-14 1276.73,-14 1276.73,-26 1276.73,-26 1276.73,-32 1270.73,-38 1264.73,-38\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1243.4\" y=\"-16.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">sông ngòi</text>\r\n</g>\r\n<!-- N4&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N4&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M975.81,-50.04C1026.51,-44.33 1138.3,-31.73 1199.79,-24.8\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1200.07,-27.41 1207.23,-23.96 1199.49,-22.19 1200.07,-27.41\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1092.82\" y=\"-50.43\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">nước mưa tạo dòng chảy mặt đổ vào sông ngòi</text>\r\n</g>\r\n<!-- N5&#45;&gt;N1 -->\r\n<g id=\"edge5\" class=\"edge\">\r\n<title>N5&#45;&gt;N1</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M1209.95,-16.33C1155.99,-10.56 1044.35,0 949.57,0 313.99,0 313.99,0 313.99,0 235.57,0 144.56,-8.69 91.63,-14.61\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"91.43,-11.99 84.28,-15.45 92.02,-17.21 91.43,-11.99\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"638.32\" y=\"-2.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">dẫn nước chảy quay trở về đại dương</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M80.16,-97C80.16,-97 12,-97 12,-97 6,-97 0,-91 0,-85 0,-85 0,-73 0,-73 0,-67 6,-61 12,-61 12,-61 80.16,-61 80.16,-61 86.16,-61 92.16,-67 92.16,-73 92.16,-73 92.16,-85 92.16,-85 92.16,-91 86.16,-97 80.16,-97\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.08\" y=\"-75.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thoát hơi nước</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M77.53,-156C77.53,-156 14.62,-156 14.62,-156 8.62,-156 2.62,-150 2.62,-144 2.62,-144 2.62,-132 2.62,-132 2.62,-126 8.62,-120 14.62,-120 14.62,-120 77.53,-120 77.53,-120 83.53,-120 89.53,-126 89.53,-132 89.53,-132 89.53,-144 89.53,-144 89.53,-150 83.53,-156 77.53,-156\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.08\" y=\"-134.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ngưng tụ mây</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M72.28,-215C72.28,-215 19.87,-215 19.87,-215 13.87,-215 7.87,-209 7.87,-203 7.87,-203 7.87,-191 7.87,-191 7.87,-185 13.87,-179 19.87,-179 19.87,-179 72.28,-179 72.28,-179 78.28,-179 84.28,-185 84.28,-191 84.28,-191 84.28,-203 84.28,-203 84.28,-209 78.28,-215 72.28,-215\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"46.08\" y=\"-193.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">nước ngầm</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_45",
      "filename": "vn_diag_45_chu_trinh_carbon.png",
      "image_url": "vn_images/vn_diag_45_chu_trinh_carbon.png",
      "width": 895,
      "height": 656,
      "title": "Sơ đồ chu trình tuần hoàn Carbon trong sinh quyển",
      "subject": "Sinh học 12",
      "subject_key": "sinh12",
      "subject_vi": "Sinh học 12 (THPT)",
      "grade": "Khối 12",
      "subject_color": "blue",
      "subject_icon": "fa-helix",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương VII: Sinh thái học quần xã và hệ sinh thái",
      "lesson": "Bài 30: Chu trình sinh địa hoá và sinh quyển (Hình 30.2)",
      "diagram_type": "cycle",
      "taxonomy_key": "biogeochemical_cycle",
      "taxonomy_vi": "Chu trình Sinh-Địa-Hóa & Chuyển hóa",
      "taxonomy_en": "Biogeochemical & Metabolic Cycles",
      "taxonomy_color": "cyan",
      "taxonomy_icon": "fa-droplet",
      "key_entities": [
        "khí CO2",
        "quang hợp",
        "thực vật",
        "động vật",
        "hô hấp",
        "vi sinh vật phân giải",
        "nhiên liệu hoá thạch"
      ],
      "directional_relations": [
        {
          "source": "CO2",
          "target": "thực vật",
          "relation": "thực vật quang hợp hấp thu khí CO2 từ khí quyển"
        },
        {
          "source": "thực vật",
          "target": "động vật",
          "relation": "chuyển giao hợp chất carbon qua thức ăn"
        },
        {
          "source": "động vật",
          "target": "CO2",
          "relation": "hô hấp tế bào giải phóng CO2 trả lại khí quyển"
        },
        {
          "source": "nhiên liệu hoá thạch",
          "target": "CO2",
          "relation": "đốt cháy than đá dầu mỏ thải khí CO2 vào khí quyển"
        }
      ],
      "gt_caption_vi": "Sơ đồ chu trình tuần hoàn carbon trong sinh quyển: Khí carbon dioxide (CO2) trong khí quyển được thực vật hấp thu qua quá trình quang hợp để tạo chất hữu cơ; carbon truyền qua lưới thức ăn từ sinh vật sản xuất sang động vật ăn thực vật và động vật ăn thịt; qua quá trình hô hấp của động thực vật, phân giải chất hữu cơ của vi sinh vật và hoạt động đốt cháy nhiên liệu hoá thạch của con người, CO2 được giải phóng hoàn trả lại khí quyển.",
      "gt_caption_en": "The global carbon biogeochemical cycle diagram illustrates pathways and fluxes across atmospheric, terrestrial, and geologic reservoirs: Atmospheric carbon exists predominantly as carbon dioxide (CO2); primary photosynthetic autotrophs (plants, phytoplankton) assimilate CO2 into biomass carbohydrates; organic carbon flows through trophic levels as herbivores consume plants and predators consume prey; metabolic cellular respiration across all living kingdoms continuously releases CO2 back into the atmosphere; dead organic matter is decomposed by saprophytic microorganisms or sequestered under geological pressure over millennia to form fossil fuels (coal, petroleum, natural gas); anthropogenic extraction and fossil combustion inject excessive CO2 fluxes into the atmosphere, perturbing natural equilibrium.",
      "generated_caption_vi": "Sơ đồ biểu diễn chu trình sinh học khép kín và tiến trình phát triển của sơ đồ chu trình tuần hoàn carbon trong sinh quyển. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: khí CO2, quang hợp, thực vật, động vật, hô hấp, vi sinh vật phân giải, nhiên liệu hoá thạch cùng các cấu trúc liên quan (). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: CO2 thực vật quang hợp hấp thu khí CO2 từ khí quyển thực vật; thực vật chuyển giao hợp chất carbon qua thức ăn động vật; động vật hô hấp tế bào giải phóng CO2 trả lại khí quyển CO2; nhiên liệu hoá thạch đốt cháy than đá dầu mỏ thải khí CO2 vào khí quyển CO2.",
      "generated_caption_en": "The diagram illustrates the carbon cycle within the biosphere, showing key processes such as photosynthesis, respiration, and decomposition. It depicts the flow of carbon dioxide (CO2) from the atmosphere to plants through photosynthesis, then transferred to animals via consumption, released back into the atmosphere by animal respiration, and emitted as CO2 when fossil fuels are burned.",
      "metrics_vi": {
        "bleu_1": 0.45985401459854014,
        "bleu_4": 0.06716417910447761,
        "rouge_l": 0.32173913043478264,
        "entity_recall": 1.0,
        "dir_accuracy": 0.5
      },
      "metrics_en": {
        "cider": 0.0,
        "bertscore_f1": 86.22
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "CO2",
            "title": "<b>CO2</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "thực vật",
            "title": "<b>thực vật</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "động vật",
            "title": "<b>động vật</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "nhiên liệu hoá thạch",
            "title": "<b>nhiên liệu hoá thạch</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "khí CO2",
            "title": "<b>khí CO2</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "quang hợp",
            "title": "<b>quang hợp</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "hô hấp",
            "title": "<b>hô hấp</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "vi sinh vật phân giải",
            "title": "<b>vi sinh vật phân giải</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "thực vật quang hợp hấp thu khí CO2 từ khí quyển",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "chuyển giao hợp chất carbon qua thức ăn",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N1",
            "label": "hô hấp tế bào giải phóng CO2 trả lại khí quyển",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N1",
            "label": "đốt cháy than đá dầu mỏ thải khí CO2 vào khí quyển",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"1152pt\" height=\"280pt\"\r\n viewBox=\"0.00 0.00 1152.00 280.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 276)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M415.91,-36C415.91,-36 385.91,-36 385.91,-36 379.91,-36 373.91,-30 373.91,-24 373.91,-24 373.91,-12 373.91,-12 373.91,-6 379.91,0 385.91,0 385.91,0 415.91,0 415.91,0 421.91,0 427.91,-6 427.91,-12 427.91,-12 427.91,-24 427.91,-24 427.91,-30 421.91,-36 415.91,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"400.91\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">CO2</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M790.61,-68C790.61,-68 755.45,-68 755.45,-68 749.45,-68 743.45,-62 743.45,-56 743.45,-56 743.45,-44 743.45,-44 743.45,-38 749.45,-32 755.45,-32 755.45,-32 790.61,-32 790.61,-32 796.61,-32 802.61,-38 802.61,-44 802.61,-44 802.61,-56 802.61,-56 802.61,-62 796.61,-68 790.61,-68\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"773.03\" y=\"-46.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">thực vật</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M428.23,-20.28C492.43,-25.83 657.32,-40.08 733,-46.63\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"732.66,-49.23 740.35,-47.26 733.11,-44 732.66,-49.23\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"550.41\" y=\"-41.87\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">thực vật quang hợp hấp thu khí CO2 từ khí quyển</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1131.57,-36C1131.57,-36 1094.16,-36 1094.16,-36 1088.16,-36 1082.16,-30 1082.16,-24 1082.16,-24 1082.16,-12 1082.16,-12 1082.16,-6 1088.16,0 1094.16,0 1094.16,0 1131.57,0 1131.57,0 1137.57,0 1143.57,-6 1143.57,-12 1143.57,-12 1143.57,-24 1143.57,-24 1143.57,-30 1137.57,-36 1131.57,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1112.87\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">động vật</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M802.84,-47.27C863.09,-41.56 1002.56,-28.35 1071.63,-21.81\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1071.75,-24.44 1078.97,-21.12 1071.26,-19.21 1071.75,-24.44\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"977.66\" y=\"-40.96\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">chuyển giao hợp chất carbon qua thức ăn</text>\r\n</g>\r\n<!-- N3&#45;&gt;N1 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N1</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M1081.73,-16.62C1036.46,-14.63 948.2,-11.05 873.16,-9.75 784.17,-8.21 761.9,-8.4 672.91,-9.75 588.81,-11.03 490.08,-14.54 438.12,-16.55\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"438.18,-13.92 430.79,-16.83 438.38,-19.16 438.18,-13.92\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"773.03\" y=\"-11.97\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">hô hấp tế bào giải phóng CO2 trả lại khí quyển</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M104.16,-36C104.16,-36 12,-36 12,-36 6,-36 0,-30 0,-24 0,-24 0,-12 0,-12 0,-6 6,0 12,0 12,0 104.16,0 104.16,0 110.16,0 116.16,-6 116.16,-12 116.16,-12 116.16,-24 116.16,-24 116.16,-30 110.16,-36 104.16,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"58.08\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">nhiên liệu hoá thạch</text>\r\n</g>\r\n<!-- N4&#45;&gt;N1 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N4&#45;&gt;N1</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M116.51,-18C187.03,-18 304.51,-18 363.61,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"363.38,-20.63 370.88,-18 363.38,-15.38 363.38,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"245.03\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">đốt cháy than đá dầu mỏ thải khí CO2 vào khí quyển</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M76.03,-95C76.03,-95 40.12,-95 40.12,-95 34.12,-95 28.12,-89 28.12,-83 28.12,-83 28.12,-71 28.12,-71 28.12,-65 34.12,-59 40.12,-59 40.12,-59 76.03,-59 76.03,-59 82.03,-59 88.03,-65 88.03,-71 88.03,-71 88.03,-83 88.03,-83 88.03,-89 82.03,-95 76.03,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"58.08\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">khí CO2</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M82.41,-154C82.41,-154 33.75,-154 33.75,-154 27.75,-154 21.75,-148 21.75,-142 21.75,-142 21.75,-130 21.75,-130 21.75,-124 27.75,-118 33.75,-118 33.75,-118 82.41,-118 82.41,-118 88.41,-118 94.41,-124 94.41,-130 94.41,-130 94.41,-142 94.41,-142 94.41,-148 88.41,-154 82.41,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"58.08\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">quang hợp</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M73.08,-213C73.08,-213 43.08,-213 43.08,-213 37.08,-213 31.08,-207 31.08,-201 31.08,-201 31.08,-189 31.08,-189 31.08,-183 37.08,-177 43.08,-177 43.08,-177 73.08,-177 73.08,-177 79.08,-177 85.08,-183 85.08,-189 85.08,-189 85.08,-201 85.08,-201 85.08,-207 79.08,-213 73.08,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"58.08\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">hô hấp</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M103.03,-272C103.03,-272 13.12,-272 13.12,-272 7.12,-272 1.12,-266 1.12,-260 1.12,-260 1.12,-248 1.12,-248 1.12,-242 7.12,-236 13.12,-236 13.12,-236 103.03,-236 103.03,-236 109.03,-236 115.03,-242 115.03,-248 115.03,-248 115.03,-260 115.03,-260 115.03,-266 109.03,-272 103.03,-272\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"58.08\" y=\"-250.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">vi sinh vật phân giải</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_46",
      "filename": "vn_diag_46_thap_sinh_thai.png",
      "image_url": "vn_images/vn_diag_46_thap_sinh_thai.png",
      "width": 867,
      "height": 759,
      "title": "Các dạng tháp sinh thái: Tháp số lượng, tháp sinh khối và tháp năng lượng",
      "subject": "Sinh học 12",
      "subject_key": "sinh12",
      "subject_vi": "Sinh học 12 (THPT)",
      "grade": "Khối 12",
      "subject_color": "blue",
      "subject_icon": "fa-helix",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương VII: Sinh thái học quần xã và hệ sinh thái",
      "lesson": "Bài 29: Trao đổi chất và năng lượng trong hệ sinh thái (Hình 29.6)",
      "diagram_type": "hierarchy_tree",
      "taxonomy_key": "food_web",
      "taxonomy_vi": "Chuỗi, Lưới thức ăn & Sinh thái",
      "taxonomy_en": "Food Webs & Ecological Pyramids",
      "taxonomy_color": "emerald",
      "taxonomy_icon": "fa-leaf",
      "key_entities": [
        "tháp số lượng",
        "tháp sinh khối",
        "tháp năng lượng",
        "sinh vật sản xuất",
        "sinh vật tiêu thụ",
        "bậc dinh dưỡng"
      ],
      "directional_relations": [
        {
          "source": "sinh vật sản xuất",
          "target": "sinh vật tiêu thụ",
          "relation": "nâng đỡ các bậc sinh vật tiêu thụ phía trên"
        },
        {
          "source": "tháp số lượng",
          "target": "bậc dinh dưỡng",
          "relation": "thể hiện số lượng cá thể qua từng bậc dinh dưỡng"
        },
        {
          "source": "tháp năng lượng",
          "target": "bậc dinh dưỡng",
          "relation": "luôn có dạng chuẩn đứng do năng lượng hao hụt qua các bậc"
        }
      ],
      "gt_caption_vi": "Sơ đồ so sánh ba dạng tháp sinh thái chuẩn trong hệ sinh thái: Tháp số lượng xây dựng dựa trên số lượng cá thể sinh vật ở mỗi bậc dinh dưỡng; tháp sinh khối dựa trên tổng khối lượng chất khô của sinh vật; và tháp năng lượng biểu diễn lượng năng lượng được tích lũy trên một đơn vị diện tích hoặc thể tích ở từng bậc dinh dưỡng (sinh vật sản xuất, sinh vật tiêu thụ bậc 1, bậc 2, bậc 3).",
      "gt_caption_en": "The comparative ecological pyramids schematic contrasts three fundamental models quantifying trophic structures: (a) The pyramid of numbers calculates the total individual population density at each successive trophic tier; (b) The pyramid of biomass determines the cumulative dry organic weight (g/m2) per trophic level; (c) The pyramid of energy measures dynamic energy productivity (kcal/m2/year) assimilated per unit area over time; notably, while pyramids of numbers and biomass can occasionally exhibit inverted profiles (such as marine phytoplankton turnover or arboreal parasite systems), the pyramid of energy is universally upright with a broad base, dictated by thermodynamics where approximately 90% of energy is dissipated at each successive step.",
      "generated_caption_vi": "Sơ đồ khoa học minh họa trực quan nội dung 'Các dạng tháp sinh thái: Tháp số lượng, tháp sinh khối và tháp năng lượng'. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: tháp số lượng, tháp sinh khối, tháp năng lượng, sinh vật sản xuất, sinh vật tiêu thụ, bậc dinh dưỡng. Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: sinh vật sản xuất nâng đỡ các bậc sinh vật tiêu thụ phía trên sinh vật tiêu thụ; tháp số lượng thể hiện số lượng cá thể qua từng bậc dinh dưỡng bậc dinh dưỡng; tháp năng lượng luôn có dạng chuẩn đứng do năng lượng hao hụt qua các bậc bậc dinh dưỡng.",
      "generated_caption_en": "The diagram illustrates three types of ecological pyramids: the pyramid of numbers, the pyramid of biomass, and the pyramid of energy, each depicting different aspects of trophic levels within an ecosystem. It shows that producers support primary consumers, which in turn support higher-level consumers, with the number of individuals decreasing at each trophic level in the pyramid of numbers, while the pyramid of energy always maintains a standard upright shape due to energy loss at each transfer step.",
      "metrics_vi": {
        "bleu_1": 0.421875,
        "bleu_4": 0.104,
        "rouge_l": 0.3098591549295775,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 0.01,
        "bertscore_f1": 85.79
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "sinh vật sản xuất",
            "title": "<b>sinh vật sản xuất</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "sinh vật tiêu thụ",
            "title": "<b>sinh vật tiêu thụ</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "tháp số lượng",
            "title": "<b>tháp số lượng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "bậc dinh dưỡng",
            "title": "<b>bậc dinh dưỡng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "tháp năng lượng",
            "title": "<b>tháp năng lượng</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "tháp sinh khối",
            "title": "<b>tháp sinh khối</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "nâng đỡ các bậc sinh vật tiêu thụ phía trên",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "thể hiện số lượng cá thể qua từng bậc dinh dưỡng",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N5",
            "to": "N4",
            "label": "luôn có dạng chuẩn đứng do năng lượng hao hụt qua các bậc",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"500pt\" height=\"221pt\"\r\n viewBox=\"0.00 0.00 500.00 221.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 217)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M88.41,-36C88.41,-36 12,-36 12,-36 6,-36 0,-30 0,-24 0,-24 0,-12 0,-12 0,-6 6,0 12,0 12,0 88.41,0 88.41,0 94.41,0 100.41,-6 100.41,-12 100.41,-12 100.41,-24 100.41,-24 100.41,-30 94.41,-36 88.41,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"50.2\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">sinh vật sản xuất</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M478.82,-36C478.82,-36 407.66,-36 407.66,-36 401.66,-36 395.66,-30 395.66,-24 395.66,-24 395.66,-12 395.66,-12 395.66,-6 401.66,0 407.66,0 407.66,0 478.82,0 478.82,0 484.82,0 490.82,-6 490.82,-12 490.82,-12 490.82,-24 490.82,-24 490.82,-30 484.82,-36 478.82,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"443.24\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">sinh vật tiêu thụ</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M100.73,-18C173.4,-18 308.6,-18 385.29,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"385.03,-20.63 392.53,-18 385.03,-15.38 385.03,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"247.66\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">nâng đỡ các bậc sinh vật tiêu thụ phía trên</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M82.03,-154C82.03,-154 18.37,-154 18.37,-154 12.37,-154 6.37,-148 6.37,-142 6.37,-142 6.37,-130 6.37,-130 6.37,-124 12.37,-118 18.37,-118 18.37,-118 82.03,-118 82.03,-118 88.03,-118 94.03,-124 94.03,-130 94.03,-130 94.03,-142 94.03,-142 94.03,-148 88.03,-154 82.03,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"50.2\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tháp số lượng</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M479.57,-124C479.57,-124 406.91,-124 406.91,-124 400.91,-124 394.91,-118 394.91,-112 394.91,-112 394.91,-100 394.91,-100 394.91,-94 400.91,-88 406.91,-88 406.91,-88 479.57,-88 479.57,-88 485.57,-88 491.57,-94 491.57,-100 491.57,-100 491.57,-112 491.57,-112 491.57,-118 485.57,-124 479.57,-124\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"443.24\" y=\"-102.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">bậc dinh dưỡng</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M94.17,-132.7C164.85,-127.28 305.7,-116.48 384.84,-110.4\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"384.65,-113.05 391.93,-109.86 384.25,-107.82 384.65,-113.05\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"247.66\" y=\"-133.2\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">thể hiện số lượng cá thể qua từng bậc dinh dưỡng</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M88.41,-95C88.41,-95 12,-95 12,-95 6,-95 0,-89 0,-83 0,-83 0,-71 0,-71 0,-65 6,-59 12,-59 12,-59 88.41,-59 88.41,-59 94.41,-59 100.41,-65 100.41,-71 100.41,-71 100.41,-83 100.41,-83 100.41,-89 94.41,-95 88.41,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"50.2\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tháp năng lượng</text>\r\n</g>\r\n<!-- N5&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N5&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M100.72,-78.68C164.99,-81.15 280.54,-86.62 378.91,-96.75 380.82,-96.95 382.75,-97.16 384.71,-97.38\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"384.11,-99.95 391.87,-98.26 384.75,-94.74 384.11,-99.95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"247.66\" y=\"-98.97\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">luôn có dạng chuẩn đứng do năng lượng hao hụt qua các bậc</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M81.28,-213C81.28,-213 19.12,-213 19.12,-213 13.12,-213 7.12,-207 7.12,-201 7.12,-201 7.12,-189 7.12,-189 7.12,-183 13.12,-177 19.12,-177 19.12,-177 81.28,-177 81.28,-177 87.28,-177 93.28,-183 93.28,-189 93.28,-189 93.28,-201 93.28,-201 93.28,-207 87.28,-213 81.28,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"50.2\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tháp sinh khối</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_47",
      "filename": "vn_diag_47_tai_ban_dna.png",
      "image_url": "vn_images/vn_diag_47_tai_ban_dna.png",
      "width": 1468,
      "height": 876,
      "title": "Sơ đồ cơ chế nhân đôi DNA tại chạc tái bản chữ Y",
      "subject": "Sinh học 12",
      "subject_key": "sinh12",
      "subject_vi": "Sinh học 12 (THPT)",
      "grade": "Khối 12",
      "subject_color": "blue",
      "subject_icon": "fa-helix",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương I: Di truyền phân tử",
      "lesson": "Bài 1: DNA và cơ chế tái bản (Hình 1.2)",
      "diagram_type": "process_flow",
      "taxonomy_key": "system_process",
      "taxonomy_vi": "Cơ chế Sinh lý & Di truyền Phân tử",
      "taxonomy_en": "Physiological & Molecular Processes",
      "taxonomy_color": "rose",
      "taxonomy_icon": "fa-gears",
      "key_entities": [
        "chạc chữ Y",
        "DNA khuôn",
        "mạch dẫn đầu",
        "mạch đi sau",
        "đoạn Okazaki",
        "DNA polymerase",
        "DNA ligase"
      ],
      "directional_relations": [
        {
          "source": "helicase",
          "target": "chạc tái bản chữ Y",
          "relation": "tháo xoắn và tách hai mạch đơn DNA mẹ"
        },
        {
          "source": "DNA polymerase",
          "target": "mạch dẫn đầu",
          "relation": "tổng hợp liên tục theo chiều 5'-3'"
        },
        {
          "source": "DNA polymerase",
          "target": "đoạn Okazaki",
          "relation": "tổng hợp gián đoạn trên mạch đi sau tạo các đoạn Okazaki"
        },
        {
          "source": "ligase",
          "target": "đoạn Okazaki",
          "relation": "nối các đoạn Okazaki thành mạch mới hoàn chỉnh"
        }
      ],
      "gt_caption_vi": "Sơ đồ cơ chế tái bản DNA tại chạc tái bản chữ Y: Enzyme helicase tháo xoắn tách hai mạch đơn DNA; trên mạch khuôn có chiều 3' đến 5', mạch bổ sung (mạch dẫn đầu) được enzyme DNA polymerase tổng hợp liên tục theo chiều 5' đến 3'; trên mạch khuôn 5' đến 3', mạch bổ sung (mạch đi sau) được tổng hợp ngắt quãng tạo thành các đoạn Okazaki ngắn, sau đó được nối lại nhờ enzyme DNA ligase.",
      "gt_caption_en": "The molecular DNA replication fork mechanism diagram details semiconservative synthesis at a replication fork: DNA helicase unwinds parental duplex DNA and unzips hydrogen bonds between nucleotide pairs; because DNA polymerase III only synthesizes polynucleotide chains in the 5'-to-3' direction, synthesis proceeds continuously along the 3'-to-5' leading strand template toward the progressing fork; conversely, on the 5'-to-3' lagging strand template, synthesis proceeds discontinuously away from the fork in short Okazaki fragments, each primed by an RNA primer; subsequently, DNA polymerase I replaces primers with deoxyribonucleotides, and DNA ligase catalyzes phosphodiester bonds to weld fragments into a continuous nascent strand.",
      "generated_caption_vi": "Sơ đồ trình bày tiến trình khoa học diễn tiến theo từng giai đoạn của sơ đồ cơ chế nhân đôi dna tại chạc tái bản chữ y. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: chạc chữ Y, DNA khuôn, mạch dẫn đầu, mạch đi sau, đoạn Okazaki, DNA polymerase, DNA ligase cùng các cấu trúc liên quan (). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: helicase tháo xoắn và tách hai mạch đơn DNA mẹ chạc tái bản chữ Y; DNA polymerase tổng hợp liên tục theo chiều 5'-3' mạch dẫn đầu; DNA polymerase tổng hợp gián đoạn trên mạch đi sau tạo các đoạn Okazaki đoạn Okazaki; ligase nối các đoạn Okazaki thành mạch mới hoàn chỉnh đoạn Okazaki.",
      "generated_caption_en": "The diagram illustrates the mechanism of DNA replication at the Y-shaped fork, showing how helicase unwinds and separates the two parental DNA strands. It depicts continuous synthesis along the leading strand by DNA polymerase in the 5' to 3' direction, while discontinuous synthesis occurs on the lagging strand, producing Okazaki fragments which are later joined together by DNA ligase.",
      "metrics_vi": {
        "bleu_1": 0.40441176470588236,
        "bleu_4": 0.09774436090225563,
        "rouge_l": 0.35023041474654376,
        "entity_recall": 1.0,
        "dir_accuracy": 0.0
      },
      "metrics_en": {
        "cider": 0.0,
        "bertscore_f1": 88.45
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "helicase",
            "title": "<b>helicase</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "chạc tái bản chữ Y",
            "title": "<b>chạc tái bản chữ Y</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "DNA polymerase",
            "title": "<b>DNA polymerase</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "mạch dẫn đầu",
            "title": "<b>mạch dẫn đầu</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "đoạn Okazaki",
            "title": "<b>đoạn Okazaki</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "ligase",
            "title": "<b>ligase</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "chạc chữ Y",
            "title": "<b>chạc chữ Y</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "DNA khuôn",
            "title": "<b>DNA khuôn</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "mạch đi sau",
            "title": "<b>mạch đi sau</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "DNA ligase",
            "title": "<b>DNA ligase</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "tháo xoắn và tách hai mạch đơn DNA mẹ",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "tổng hợp liên tục theo chiều 5'-3'",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N5",
            "label": "tổng hợp gián đoạn trên mạch đi sau tạo các đoạn Okazaki",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N6",
            "to": "N5",
            "label": "nối các đoạn Okazaki thành mạch mới hoàn chỉnh",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"504pt\" height=\"408pt\"\r\n viewBox=\"0.00 0.00 504.00 408.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 404)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M68.53,-36C68.53,-36 33.37,-36 33.37,-36 27.37,-36 21.37,-30 21.37,-24 21.37,-24 21.37,-12 21.37,-12 21.37,-6 27.37,0 33.37,0 33.37,0 68.53,0 68.53,0 74.53,0 80.53,-6 80.53,-12 80.53,-12 80.53,-24 80.53,-24 80.53,-30 74.53,-36 68.53,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"50.95\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">helicase</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M484.07,-36C484.07,-36 397.91,-36 397.91,-36 391.91,-36 385.91,-30 385.91,-24 385.91,-24 385.91,-12 385.91,-12 385.91,-6 391.91,0 397.91,0 397.91,0 484.07,0 484.07,0 490.07,0 496.07,-6 496.07,-12 496.07,-12 496.07,-24 496.07,-24 496.07,-30 490.07,-36 484.07,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"440.99\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">chạc tái bản chữ Y</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M80.8,-18C142.83,-18 290.17,-18 375.63,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"375.51,-20.63 383.01,-18 375.51,-15.38 375.51,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"243.91\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">tháo xoắn và tách hai mạch đơn DNA mẹ</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M89.91,-164C89.91,-164 12,-164 12,-164 6,-164 0,-158 0,-152 0,-152 0,-140 0,-140 0,-134 6,-128 12,-128 12,-128 89.91,-128 89.91,-128 95.91,-128 101.91,-134 101.91,-140 101.91,-140 101.91,-152 101.91,-152 101.91,-158 95.91,-164 89.91,-164\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"50.95\" y=\"-142.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">DNA polymerase</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M473.19,-173C473.19,-173 408.79,-173 408.79,-173 402.79,-173 396.79,-167 396.79,-161 396.79,-161 396.79,-149 396.79,-149 396.79,-143 402.79,-137 408.79,-137 408.79,-137 473.19,-137 473.19,-137 479.19,-137 485.19,-143 485.19,-149 485.19,-149 485.19,-161 485.19,-161 485.19,-167 479.19,-173 473.19,-173\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"440.99\" y=\"-151.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">mạch dẫn đầu</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M102.29,-147.17C175.53,-148.87 310.95,-152.01 386.13,-153.75\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"386.05,-156.37 393.61,-153.92 386.17,-151.13 386.05,-156.37\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"243.91\" y=\"-155.5\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">tổng hợp liên tục theo chiều 5&#39;&#45;3&#39;</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M471.69,-105C471.69,-105 410.29,-105 410.29,-105 404.29,-105 398.29,-99 398.29,-93 398.29,-93 398.29,-81 398.29,-81 398.29,-75 404.29,-69 410.29,-69 410.29,-69 471.69,-69 471.69,-69 477.69,-69 483.69,-75 483.69,-81 483.69,-81 483.69,-93 483.69,-93 483.69,-99 477.69,-105 471.69,-105\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"440.99\" y=\"-83.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">đoạn Okazaki</text>\r\n</g>\r\n<!-- N3&#45;&gt;N5 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M102.29,-134.72C107.56,-133.66 112.83,-132.65 117.91,-131.75 212.75,-114.94 324.24,-100.66 388.06,-93\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"388.04,-95.65 395.18,-92.15 387.42,-90.44 388.04,-95.65\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"243.91\" y=\"-133.97\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">tổng hợp gián đoạn trên mạch đi sau tạo các đoạn Okazaki</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M65.95,-95C65.95,-95 35.95,-95 35.95,-95 29.95,-95 23.95,-89 23.95,-83 23.95,-83 23.95,-71 23.95,-71 23.95,-65 29.95,-59 35.95,-59 35.95,-59 65.95,-59 65.95,-59 71.95,-59 77.95,-65 77.95,-71 77.95,-71 77.95,-83 77.95,-83 77.95,-89 71.95,-95 65.95,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"50.95\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">ligase</text>\r\n</g>\r\n<!-- N6&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N6&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M78.38,-75.67C132.95,-73.22 262,-68.9 369.91,-76.75 375.72,-77.17 381.79,-77.79 387.81,-78.52\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"387.37,-81.11 395.15,-79.47 388.05,-75.9 387.37,-81.11\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"243.91\" y=\"-78.97\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">nối các đoạn Okazaki thành mạch mới hoàn chỉnh</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M76.41,-223C76.41,-223 25.5,-223 25.5,-223 19.5,-223 13.5,-217 13.5,-211 13.5,-211 13.5,-199 13.5,-199 13.5,-193 19.5,-187 25.5,-187 25.5,-187 76.41,-187 76.41,-187 82.41,-187 88.41,-193 88.41,-199 88.41,-199 88.41,-211 88.41,-211 88.41,-217 82.41,-223 76.41,-223\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"50.95\" y=\"-201.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">chạc chữ Y</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M76.78,-282C76.78,-282 25.12,-282 25.12,-282 19.12,-282 13.12,-276 13.12,-270 13.12,-270 13.12,-258 13.12,-258 13.12,-252 19.12,-246 25.12,-246 25.12,-246 76.78,-246 76.78,-246 82.78,-246 88.78,-252 88.78,-258 88.78,-258 88.78,-270 88.78,-270 88.78,-276 82.78,-282 76.78,-282\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"50.95\" y=\"-260.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">DNA khuôn</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M77.91,-341C77.91,-341 24,-341 24,-341 18,-341 12,-335 12,-329 12,-329 12,-317 12,-317 12,-311 18,-305 24,-305 24,-305 77.91,-305 77.91,-305 83.91,-305 89.91,-311 89.91,-317 89.91,-317 89.91,-329 89.91,-329 89.91,-335 83.91,-341 77.91,-341\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"50.95\" y=\"-319.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">mạch đi sau</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M76.03,-400C76.03,-400 25.87,-400 25.87,-400 19.87,-400 13.87,-394 13.87,-388 13.87,-388 13.87,-376 13.87,-376 13.87,-370 19.87,-364 25.87,-364 25.87,-364 76.03,-364 76.03,-364 82.03,-364 88.03,-370 88.03,-376 88.03,-376 88.03,-388 88.03,-388 88.03,-394 82.03,-400 76.03,-400\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"50.95\" y=\"-378.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">DNA ligase</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_48",
      "filename": "vn_diag_48_phien_ma_marn.png",
      "image_url": "vn_images/vn_diag_48_phien_ma_marn.png",
      "width": 1389,
      "height": 829,
      "title": "Sơ đồ cơ chế phiên mã tổng hợp phân tử RNA từ mạch khuôn DNA",
      "subject": "Sinh học 12",
      "subject_key": "sinh12",
      "subject_vi": "Sinh học 12 (THPT)",
      "grade": "Khối 12",
      "subject_color": "blue",
      "subject_icon": "fa-helix",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương I: Di truyền phân tử",
      "lesson": "Bài 2: Phiên mã và dịch mã (Hình 2.2)",
      "diagram_type": "process_flow",
      "taxonomy_key": "system_process",
      "taxonomy_vi": "Cơ chế Sinh lý & Di truyền Phân tử",
      "taxonomy_en": "Physiological & Molecular Processes",
      "taxonomy_color": "rose",
      "taxonomy_icon": "fa-gears",
      "key_entities": [
        "DNA",
        "mạch khuôn 3'-5'",
        "mạch mã hoá",
        "RNA polymerase",
        "phân tử RNA",
        "nguyên tắc bổ sung"
      ],
      "directional_relations": [
        {
          "source": "RNA polymerase",
          "target": "mạch khuôn",
          "relation": "bám vào promoter và trượt dọc mạch khuôn tháo xoắn DNA"
        },
        {
          "source": "mạch khuôn",
          "target": "RNA",
          "relation": "lắp ráp các nucleotide tự do tổng hợp chuỗi phân tử RNA theo nguyên tắc bổ sung"
        }
      ],
      "gt_caption_vi": "Sơ đồ cơ chế phiên mã tổng hợp phân tử RNA: Enzyme RNA polymerase liên kết vào vùng điều hoà của gene, làm tháo xoắn cục bộ phân tử DNA để lộ mạch khuôn có chiều 3' đến 5'; enzyme sau đó trượt dọc theo mạch khuôn và tổng hợp chuỗi phân tử RNA theo nguyên tắc bổ sung (A-U, T-A, G-C, C-G) theo chiều từ đầu 5' đến 3'.",
      "gt_caption_en": "The molecular transcription mechanism diagram illustrates RNA synthesis catalyzed by RNA polymerase: Transcription initiates when RNA polymerase recognizes and binds specifically to the gene promoter region; the polymerase unwinds local DNA duplexes, exposing the 3'-to-5' template (antisense) strand; as the enzyme traverses the template strand in the 3'-to-5' orientation, free intracellular ribonucleoside triphosphates are matched complementarily: adenine pairs with uracil, thymine with adenine, guanine with cytosine, and cytosine with guanine, extending nascent RNA in the 5'-to-3' direction; upon encountering a terminator sequence, the polymerase dissociates, liberating the mature primary RNA transcript while the DNA double helix re-anneals.",
      "generated_caption_vi": "Sơ đồ trình bày tiến trình khoa học diễn tiến theo từng giai đoạn của sơ đồ cơ chế phiên mã tổng hợp phân tử rna từ mạch khuôn dna. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: mạch khuôn 3'-5', mạch mã hoá, RNA polymerase, phân tử RNA, nguyên tắc bổ sung. Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: RNA polymerase bám vào promoter và trượt dọc mạch khuôn tháo xoắn DNA mạch khuôn; mạch khuôn lắp ráp các nucleotide tự do tổng hợp chuỗi phân tử RNA theo nguyên tắc bổ sung RNA.",
      "generated_caption_en": "The diagram illustrates the mechanism of RNA synthesis from the template DNA strand, showing RNA polymerase binding to the promoter region and sliding along the 3' to 5' template DNA strand to unwind it. As the enzyme moves, it assembles free nucleotides into a complementary RNA molecule according to base-pairing rules.",
      "metrics_vi": {
        "bleu_1": 0.38181818181818183,
        "bleu_4": 0.14953271028037382,
        "rouge_l": 0.34782608695652173,
        "entity_recall": 1.0,
        "dir_accuracy": 0.0
      },
      "metrics_en": {
        "cider": 0.0,
        "bertscore_f1": 87.15
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "RNA polymerase",
            "title": "<b>RNA polymerase</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "mạch khuôn",
            "title": "<b>mạch khuôn</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "RNA",
            "title": "<b>RNA</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "DNA",
            "title": "<b>DNA</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "mạch khuôn 3'-5'",
            "title": "<b>mạch khuôn 3'-5'</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "mạch mã hoá",
            "title": "<b>mạch mã hoá</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "phân tử RNA",
            "title": "<b>phân tử RNA</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "nguyên tắc bổ sung",
            "title": "<b>nguyên tắc bổ sung</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "bám vào promoter và trượt dọc mạch khuôn tháo xoắn DNA",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "lắp ráp các nucleotide tự do tổng hợp chuỗi phân tử RNA theo nguyên tắc bổ sung",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"925pt\" height=\"339pt\"\r\n viewBox=\"0.00 0.00 925.00 339.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 335)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M95.91,-36C95.91,-36 18,-36 18,-36 12,-36 6,-30 6,-24 6,-24 6,-12 6,-12 6,-6 12,0 18,0 18,0 95.91,0 95.91,0 101.91,0 107.91,-6 107.91,-12 107.91,-12 107.91,-24 107.91,-24 107.91,-30 101.91,-36 95.91,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"56.96\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">RNA polymerase</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M467.57,-36C467.57,-36 412.91,-36 412.91,-36 406.91,-36 400.91,-30 400.91,-24 400.91,-24 400.91,-12 400.91,-12 400.91,-6 406.91,0 412.91,0 412.91,0 467.57,0 467.57,0 473.57,0 479.57,-6 479.57,-12 479.57,-12 479.57,-24 479.57,-24 479.57,-30 473.57,-36 467.57,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"440.24\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">mạch khuôn</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M108.19,-18C181.78,-18 317.98,-18 390.63,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"390.22,-20.63 397.72,-18 390.22,-15.38 390.22,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"257.41\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">bám vào promoter và trượt dọc mạch khuôn tháo xoắn DNA</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M905.32,-36C905.32,-36 875.32,-36 875.32,-36 869.32,-36 863.32,-30 863.32,-24 863.32,-24 863.32,-12 863.32,-12 863.32,-6 869.32,0 875.32,0 875.32,0 905.32,0 905.32,0 911.32,0 917.32,-6 917.32,-12 917.32,-12 917.32,-24 917.32,-24 917.32,-30 911.32,-36 905.32,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"890.32\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">RNA</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M479.83,-18C565.33,-18 769.72,-18 853.04,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"852.82,-20.63 860.32,-18 852.82,-15.38 852.82,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"671.45\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">lắp ráp các nucleotide tự do tổng hợp chuỗi phân tử RNA theo nguyên tắc bổ sung</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M71.96,-95C71.96,-95 41.96,-95 41.96,-95 35.96,-95 29.96,-89 29.96,-83 29.96,-83 29.96,-71 29.96,-71 29.96,-65 35.96,-59 41.96,-59 41.96,-59 71.96,-59 71.96,-59 77.96,-59 83.96,-65 83.96,-71 83.96,-71 83.96,-83 83.96,-83 83.96,-89 77.96,-95 71.96,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"56.96\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">DNA</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M95.91,-154C95.91,-154 18,-154 18,-154 12,-154 6,-148 6,-142 6,-142 6,-130 6,-130 6,-124 12,-118 18,-118 18,-118 95.91,-118 95.91,-118 101.91,-118 107.91,-124 107.91,-130 107.91,-130 107.91,-142 107.91,-142 107.91,-148 101.91,-154 95.91,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"56.96\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">mạch khuôn 3&#39;&#45;5&#39;</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M87.66,-213C87.66,-213 26.25,-213 26.25,-213 20.25,-213 14.25,-207 14.25,-201 14.25,-201 14.25,-189 14.25,-189 14.25,-183 20.25,-177 26.25,-177 26.25,-177 87.66,-177 87.66,-177 93.66,-177 99.66,-183 99.66,-189 99.66,-189 99.66,-201 99.66,-201 99.66,-207 93.66,-213 87.66,-213\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"56.96\" y=\"-191.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">mạch mã hoá</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M87.29,-272C87.29,-272 26.63,-272 26.63,-272 20.63,-272 14.63,-266 14.63,-260 14.63,-260 14.63,-248 14.63,-248 14.63,-242 20.63,-236 26.63,-236 26.63,-236 87.29,-236 87.29,-236 93.29,-236 99.29,-242 99.29,-248 99.29,-248 99.29,-260 99.29,-260 99.29,-266 93.29,-272 87.29,-272\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"56.96\" y=\"-250.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">phân tử RNA</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M101.91,-331C101.91,-331 12,-331 12,-331 6,-331 0,-325 0,-319 0,-319 0,-307 0,-307 0,-301 6,-295 12,-295 12,-295 101.91,-295 101.91,-295 107.91,-295 113.91,-301 113.91,-307 113.91,-307 113.91,-319 113.91,-319 113.91,-325 107.91,-331 101.91,-331\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"56.96\" y=\"-309.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">nguyên tắc bổ sung</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_49",
      "filename": "vn_diag_49_operon_lac_co_lactose.png",
      "image_url": "vn_images/vn_diag_49_operon_lac_co_lactose.png",
      "width": 1284,
      "height": 659,
      "title": "Cơ chế điều hòa hoạt động của Operon Lac khi môi trường CÓ lactose",
      "subject": "Sinh học 12",
      "subject_key": "sinh12",
      "subject_vi": "Sinh học 12 (THPT)",
      "grade": "Khối 12",
      "subject_color": "blue",
      "subject_icon": "fa-helix",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương I: Di truyền phân tử",
      "lesson": "Bài 3: Điều hoà biểu hiện gene (Hình 3.2)",
      "diagram_type": "regulation_network",
      "taxonomy_key": "system_process",
      "taxonomy_vi": "Cơ chế Sinh lý & Di truyền Phân tử",
      "taxonomy_en": "Physiological & Molecular Processes",
      "taxonomy_color": "rose",
      "taxonomy_icon": "fa-gears",
      "key_entities": [
        "operon Lac",
        "lactose",
        "protein ức chế",
        "vùng khởi động (P)",
        "vùng vận hành (O)",
        "RNA polymerase",
        "gene cấu trúc lacZ lacY lacA"
      ],
      "directional_relations": [
        {
          "source": "lactose",
          "target": "protein ức chế",
          "relation": "gắn vào protein ức chế làm biến đổi cấu hình bất hoạt"
        },
        {
          "source": "protein ức chế",
          "target": "operator",
          "relation": "không thể gắn vào operator, giải phóng vùng vận hành"
        },
        {
          "source": "RNA polymerase",
          "target": "promoter",
          "relation": "bám vào promoter và trượt qua các gene cấu trúc"
        },
        {
          "source": "RNA polymerase",
          "target": "mRNA",
          "relation": "phiên mã các gene lacZ, lacY, lacA thành chuỗi mRNA"
        }
      ],
      "gt_caption_vi": "Sơ đồ cơ chế điều hoà hoạt động của operon Lac ở vi khuẩn E. coli khi môi trường có lactose: Phân tử đường allolactose liên kết với protein ức chế làm biến đổi cấu hình không gian của protein này, khiến protein ức chế không thể liên kết vào vùng vận hành (operator O); vùng vận hành được giải phóng giúp enzyme RNA polymerase tự do bám vào vùng khởi động (promoter P) và trượt qua phiên mã các gene cấu trúc lacZ, lacY, lacA thành phân tử polycistronic mRNA.",
      "gt_caption_en": "The molecular gene regulation diagram demonstrates bacterial lac operon induction in the presence of lactose: Intracellular lactose induces allolactose formation, which binds allosterically to active repressor tetramers produced constitutively by the lacI regulatory gene; this induces a conformational change that inactivates the repressor, abrogating its affinity for the operator sequence (O); cleared of steric obstruction, RNA polymerase binds stably to the promoter (P) and transcribes structural cistrons lacZ, lacY, and lacA into a polycistronic mRNA transcript; ribosomal translation subsequently synthesizes beta-galactosidase, beta-galactoside permease, and thiogalactoside transacetylase to import and metabolize lactose.",
      "generated_caption_vi": "Sơ đồ khoa học minh họa trực quan nội dung 'Cơ chế điều hòa hoạt động của Operon Lac khi môi trường CÓ lactose'. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: operon Lac, lactose, protein ức chế, vùng khởi động (P), vùng vận hành (O), RNA polymerase, gene cấu trúc lacZ lacY lacA cùng các cấu trúc liên quan (). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: lactose gắn vào protein ức chế làm biến đổi cấu hình bất hoạt protein ức chế; protein ức chế không thể gắn vào operator, giải phóng vùng vận hành operator; RNA polymerase bám vào promoter và trượt qua các gene cấu trúc promoter; RNA polymerase phiên mã các gene lacZ, lacY, lacA thành chuỗi mRNA mRNA.",
      "generated_caption_en": "The diagram illustrates the regulatory mechanism of the Lac operon in the presence of lactose, showing how lactose binds to the repressor protein, altering its configuration and preventing it from binding to the operator region, thus releasing the regulatory control over the genes. RNA polymerase then binds to the promoter region and transcribes the structural genes lacZ, lacY, and lacA into mRNA.",
      "metrics_vi": {
        "bleu_1": 0.48175182481751827,
        "bleu_4": 0.13432835820895522,
        "rouge_l": 0.45614035087719296,
        "entity_recall": 1.0,
        "dir_accuracy": 1.0
      },
      "metrics_en": {
        "cider": 0.0,
        "bertscore_f1": 88.41
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "lactose",
            "title": "<b>lactose</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "protein ức chế",
            "title": "<b>protein ức chế</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "operator",
            "title": "<b>operator</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "RNA polymerase",
            "title": "<b>RNA polymerase</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "promoter",
            "title": "<b>promoter</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "mRNA",
            "title": "<b>mRNA</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "operon Lac",
            "title": "<b>operon Lac</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "vùng khởi động (P)",
            "title": "<b>vùng khởi động (P)</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "vùng vận hành (O)",
            "title": "<b>vùng vận hành (O)</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "gene cấu trúc lacZ lacY lacA",
            "title": "<b>gene cấu trúc lacZ lacY lacA</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "gắn vào protein ức chế làm biến đổi cấu hình bất hoạt",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "không thể gắn vào operator, giải phóng vùng vận hành",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N5",
            "label": "bám vào promoter và trượt qua các gene cấu trúc",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N6",
            "label": "phiên mã các gene lacZ, lacY, lacA thành chuỗi mRNA",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"843pt\" height=\"368pt\"\r\n viewBox=\"0.00 0.00 843.00 368.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 364)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M93.33,-36C93.33,-36 63.33,-36 63.33,-36 57.33,-36 51.33,-30 51.33,-24 51.33,-24 51.33,-12 51.33,-12 51.33,-6 57.33,0 63.33,0 63.33,0 93.33,0 93.33,0 99.33,0 105.33,-6 105.33,-12 105.33,-12 105.33,-24 105.33,-24 105.33,-30 99.33,-36 93.33,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"78.33\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">lactose</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M498.32,-36C498.32,-36 433.16,-36 433.16,-36 427.16,-36 421.16,-30 421.16,-24 421.16,-24 421.16,-12 421.16,-12 421.16,-6 427.16,0 433.16,0 433.16,0 498.32,0 498.32,0 504.32,0 510.32,-6 510.32,-12 510.32,-12 510.32,-24 510.32,-24 510.32,-30 504.32,-36 498.32,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"465.74\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">protein ức chế</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M105.82,-18C168.51,-18 326.98,-18 410.82,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"410.68,-20.63 418.18,-18 410.68,-15.38 410.68,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"288.91\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">gắn vào protein ức chế làm biến đổi cấu hình bất hoạt</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M823.48,-36C823.48,-36 786.82,-36 786.82,-36 780.82,-36 774.82,-30 774.82,-24 774.82,-24 774.82,-12 774.82,-12 774.82,-6 780.82,0 786.82,0 786.82,0 823.48,0 823.48,0 829.48,0 835.48,-6 835.48,-12 835.48,-12 835.48,-24 835.48,-24 835.48,-30 829.48,-36 823.48,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"805.15\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">operator</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M510.5,-18C576.55,-18 700.71,-18 764.34,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"764.16,-20.63 771.66,-18 764.16,-15.38 764.16,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"642.57\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">không thể gắn vào operator, giải phóng vùng vận hành</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M117.29,-124C117.29,-124 39.38,-124 39.38,-124 33.38,-124 27.38,-118 27.38,-112 27.38,-112 27.38,-100 27.38,-100 27.38,-94 33.38,-88 39.38,-88 39.38,-88 117.29,-88 117.29,-88 123.29,-88 129.29,-94 129.29,-100 129.29,-100 129.29,-112 129.29,-112 129.29,-118 123.29,-124 117.29,-124\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"78.33\" y=\"-102.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">RNA polymerase</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M485.57,-168C485.57,-168 445.91,-168 445.91,-168 439.91,-168 433.91,-162 433.91,-156 433.91,-156 433.91,-144 433.91,-144 433.91,-138 439.91,-132 445.91,-132 445.91,-132 485.57,-132 485.57,-132 491.57,-132 497.57,-138 497.57,-144 497.57,-144 497.57,-156 497.57,-156 497.57,-162 491.57,-168 485.57,-168\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"465.74\" y=\"-146.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">promoter</text>\r\n</g>\r\n<!-- N4&#45;&gt;N5 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N4&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M129.68,-112.65C143.6,-114.44 158.71,-116.34 172.66,-118 262.07,-128.65 367.04,-139.82 423.61,-145.74\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"423.15,-148.33 430.88,-146.5 423.7,-143.11 423.15,-148.33\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"288.91\" y=\"-146.02\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">bám vào promoter và trượt qua các gene cấu trúc</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M480.74,-109C480.74,-109 450.74,-109 450.74,-109 444.74,-109 438.74,-103 438.74,-97 438.74,-97 438.74,-85 438.74,-85 438.74,-79 444.74,-73 450.74,-73 450.74,-73 480.74,-73 480.74,-73 486.74,-73 492.74,-79 492.74,-85 492.74,-85 492.74,-97 492.74,-97 492.74,-103 486.74,-109 480.74,-109\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"465.74\" y=\"-87.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">mRNA</text>\r\n</g>\r\n<!-- N4&#45;&gt;N6 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N4&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M129.72,-104.04C208.51,-100.97 359.04,-95.11 428.26,-92.42\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"428.14,-95.05 435.54,-92.14 427.94,-89.81 428.14,-95.05\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"288.91\" y=\"-104.2\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">phiên mã các gene lacZ, lacY, lacA thành chuỗi mRNA</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M103.41,-183C103.41,-183 53.25,-183 53.25,-183 47.25,-183 41.25,-177 41.25,-171 41.25,-171 41.25,-159 41.25,-159 41.25,-153 47.25,-147 53.25,-147 53.25,-147 103.41,-147 103.41,-147 109.41,-147 115.41,-153 115.41,-159 115.41,-159 115.41,-171 115.41,-171 115.41,-177 109.41,-183 103.41,-183\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"78.33\" y=\"-161.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">operon Lac</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M122.54,-242C122.54,-242 34.13,-242 34.13,-242 28.13,-242 22.13,-236 22.13,-230 22.13,-230 22.13,-218 22.13,-218 22.13,-212 28.13,-206 34.13,-206 34.13,-206 122.54,-206 122.54,-206 128.54,-206 134.54,-212 134.54,-218 134.54,-218 134.54,-230 134.54,-230 134.54,-236 128.54,-242 122.54,-242\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"78.33\" y=\"-220.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">vùng khởi động (P)</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M121.04,-301C121.04,-301 35.63,-301 35.63,-301 29.63,-301 23.63,-295 23.63,-289 23.63,-289 23.63,-277 23.63,-277 23.63,-271 29.63,-265 35.63,-265 35.63,-265 121.04,-265 121.04,-265 127.04,-265 133.04,-271 133.04,-277 133.04,-277 133.04,-289 133.04,-289 133.04,-295 127.04,-301 121.04,-301\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"78.33\" y=\"-279.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">vùng vận hành (O)</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M144.66,-360C144.66,-360 12,-360 12,-360 6,-360 0,-354 0,-348 0,-348 0,-336 0,-336 0,-330 6,-324 12,-324 12,-324 144.66,-324 144.66,-324 150.66,-324 156.66,-330 156.66,-336 156.66,-336 156.66,-348 156.66,-348 156.66,-354 150.66,-360 144.66,-360\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"78.33\" y=\"-338.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">gene cấu trúc lacZ lacY lacA</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    },
    {
      "id": "vn_diag_50",
      "filename": "vn_diag_50_dien_bien_giam_phan.png",
      "image_url": "vn_images/vn_diag_50_dien_bien_giam_phan.png",
      "width": 1431,
      "height": 917,
      "title": "Sơ đồ diễn biến các kì của Giảm phân I và Giảm phân II",
      "subject": "Sinh học 10",
      "subject_key": "sinh10",
      "subject_vi": "Sinh học 10 (THPT)",
      "grade": "Khối 10",
      "subject_color": "indigo",
      "subject_icon": "fa-microscope",
      "series": "Kết nối tri thức với cuộc sống",
      "chapter": "Chương 4: Chu kì tế bào và phân bào",
      "lesson": "Bài 17: Giảm phân (Hình 17.1)",
      "diagram_type": "process_flow",
      "taxonomy_key": "life_cycle",
      "taxonomy_vi": "Vòng đời & Phân bào",
      "taxonomy_en": "Life Cycles & Cell Division",
      "taxonomy_color": "indigo",
      "taxonomy_icon": "fa-arrows-spin",
      "key_entities": [
        "Giảm phân I",
        "Giảm phân II",
        "kì đầu I",
        "kì giữa I",
        "kì sau I",
        "kì cuối I",
        "kì giữa II",
        "kì sau II",
        "tế bào con đơn bội"
      ],
      "directional_relations": [
        {
          "source": "Giảm phân I",
          "target": "kì đầu I",
          "relation": "các cặp nhiễm sắc thể kép tương đồng tiếp hợp trao đổi chéo"
        },
        {
          "source": "kì đầu I",
          "target": "kì giữa I",
          "relation": "nhiễm sắc thể kép xếp hai hàng ở mặt phẳng xích đạo"
        },
        {
          "source": "kì giữa I",
          "target": "kì sau I",
          "relation": "các nhiễm sắc thể kép phân li về hai cực"
        },
        {
          "source": "kì sau I",
          "target": "kì cuối I",
          "relation": "tạo hai tế bào con mang bộ nhiễm sắc thể n kép"
        },
        {
          "source": "kì cuối I",
          "target": "Giảm phân II",
          "relation": "bước vào lần phân bào thứ hai"
        },
        {
          "source": "Giảm phân II",
          "target": "kì sau II",
          "relation": "tách chromatid thành nhiễm sắc thể đơn phân li về hai cực"
        },
        {
          "source": "kì sau II",
          "target": "kì cuối II",
          "relation": "hình thành bốn tế bào con mang bộ nhiễm sắc thể đơn bội n"
        }
      ],
      "gt_caption_vi": "Sơ đồ chi tiết diễn biến hai lần phân bào của quá trình giảm phân: Ở Giảm phân I, các cặp nhiễm sắc thể kép tương đồng tiếp hợp và có thể trao đổi chéo ở kì đầu I, xếp thành 2 hàng trên mặt phẳng xích đạo ở kì giữa I, phân li độc lập về 2 cực ở kì sau I và kết thúc kì cuối I tạo 2 tế bào con có bộ NST đơn bội kép (n kép). Ở Giảm phân II, các nhiễm sắc thể kép xếp thành 1 hàng ở kì giữa II, tách nhau tại tâm động ở kì sau II và tạo ra 4 tế bào con đơn bội (n).",
      "gt_caption_en": "The cellular division schematic illustrates sequential stages of Meiosis I and Meiosis II in gametogenesis: (1) Preceded by interphase DNA replication, Meiosis I begins at Prophase I with synapsis of homologous chromosomes and crossing-over chiasmata exchanging genetic material; at Metaphase I, homologous chromosome pairs align in double ranks along the equatorial plane; at Anaphase I, homologous dyads segregate independently to opposite poles without centromere splitting; Telophase I cytokinesis produces two secondary daughter cells containing a haploid number of replicated double chromosomes (n dyads); (2) Without intervening S-phase DNA synthesis, cells enter Meiosis II: Chromosomes line up in single file along the equatorial plate at Metaphase II; during Anaphase II, sister centromeres cleave, disjoining sister chromatids into individual single chromosomes migrating to opposite poles; Telophase II concludes with four non-identical haploid gametes (n).",
      "generated_caption_vi": "Sơ đồ trình bày tiến trình khoa học diễn tiến theo từng giai đoạn của sơ đồ diễn biến các kì của giảm phân i và giảm phân ii. Các thành phần và vị trí then chốt được định danh trên sơ đồ bao gồm: Giảm phân I, Giảm phân II, kì đầu I, kì giữa I, kì sau I, kì cuối I, kì giữa II cùng các cấu trúc liên quan (kì sau II, tế bào con đơn bội). Các mũi tên chỉ hướng mô tả tiến trình tương tác tuần tự: Giảm phân I các cặp nhiễm sắc thể kép tương đồng tiếp hợp trao đổi chéo kì đầu I; kì đầu I nhiễm sắc thể kép xếp hai hàng ở mặt phẳng xích đạo kì giữa I; kì giữa I các nhiễm sắc thể kép phân li về hai cực kì sau I; kì sau I tạo hai tế bào con mang bộ nhiễm sắc thể n kép kì cuối I; kì cuối I bước vào lần phân bào thứ hai Giảm phân II; Giảm phân II tách chromatid thành nhiễm sắc thể đơn phân li về hai cực kì sau II.",
      "generated_caption_en": "The diagram illustrates the progression of stages in Meiosis I and Meiosis II, showing key phases including Prophase I, Metaphase I, Anaphase I, Telophase I, Metaphase II, Anaphase II, and Telophase II. It depicts the processes where homologous chromosome pairs align and exchange genetic material during Prophase I, followed by their separation into daughter cells with duplicated chromosomes at Anaphase I, leading to the formation of two cells with diploid sets of chromosomes at the end of Meiosis I, which then proceed through Meiosis II to ultimately produce four haploid daughter cells.",
      "metrics_vi": {
        "bleu_1": 0.441025641025641,
        "bleu_4": 0.08854166666666667,
        "rouge_l": 0.3833865814696486,
        "entity_recall": 1.0,
        "dir_accuracy": 0.7142857142857143
      },
      "metrics_en": {
        "cider": 0.0,
        "bertscore_f1": 86.37
      },
      "scene_graph_topology": {
        "nodes": [
          {
            "id": "N1",
            "label": "Giảm phân I",
            "title": "<b>Giảm phân I</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N2",
            "label": "kì đầu I",
            "title": "<b>kì đầu I</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N3",
            "label": "kì giữa I",
            "title": "<b>kì giữa I</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N4",
            "label": "kì sau I",
            "title": "<b>kì sau I</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N5",
            "label": "kì cuối I",
            "title": "<b>kì cuối I</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N6",
            "label": "Giảm phân II",
            "title": "<b>Giảm phân II</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N7",
            "label": "kì sau II",
            "title": "<b>kì sau II</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N8",
            "label": "kì cuối II",
            "title": "<b>kì cuối II</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N9",
            "label": "kì giữa II",
            "title": "<b>kì giữa II</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          },
          {
            "id": "N10",
            "label": "tế bào con đơn bội",
            "title": "<b>tế bào con đơn bội</b><br>Vai trò: Thực thể khoa học",
            "kind": "entity",
            "color": {
              "background": "#dbeafe",
              "border": "#2563eb",
              "highlight": "#bfdbfe"
            },
            "shape": "box"
          }
        ],
        "edges": [
          {
            "from": "N1",
            "to": "N2",
            "label": "các cặp nhiễm sắc thể kép tương đồng tiếp hợp trao đổi chéo",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N2",
            "to": "N3",
            "label": "nhiễm sắc thể kép xếp hai hàng ở mặt phẳng xích đạo",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N3",
            "to": "N4",
            "label": "các nhiễm sắc thể kép phân li về hai cực",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N4",
            "to": "N5",
            "label": "tạo hai tế bào con mang bộ nhiễm sắc thể n kép",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N5",
            "to": "N6",
            "label": "bước vào lần phân bào thứ hai",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N6",
            "to": "N7",
            "label": "tách chromatid thành nhiễm sắc thể đơn phân li về hai cực",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          },
          {
            "from": "N7",
            "to": "N8",
            "label": "hình thành bốn tế bào con mang bộ nhiễm sắc thể đơn bội n",
            "type": "directed_link",
            "color": {
              "color": "#dc2626",
              "highlight": "#991b1b"
            },
            "dashes": false,
            "arrows": "to",
            "width": 2.2
          }
        ]
      },
      "graphviz_svg": "<svg width=\"2284pt\" height=\"162pt\"\r\n viewBox=\"0.00 0.00 2284.00 162.00\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n<g id=\"graph0\" class=\"graph\" transform=\"scale(1 1) rotate(0) translate(4 158)\">\r\n<!-- N1 -->\r\n<g id=\"node1\" class=\"node\">\r\n<title>N1</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M82.41,-36C82.41,-36 27.75,-36 27.75,-36 21.75,-36 15.75,-30 15.75,-24 15.75,-24 15.75,-12 15.75,-12 15.75,-6 21.75,0 27.75,0 27.75,0 82.41,0 82.41,0 88.41,0 94.41,-6 94.41,-12 94.41,-12 94.41,-24 94.41,-24 94.41,-30 88.41,-36 82.41,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"55.08\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Giảm phân I</text>\r\n</g>\r\n<!-- N2 -->\r\n<g id=\"node2\" class=\"node\">\r\n<title>N2</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M448.07,-36C448.07,-36 416.66,-36 416.66,-36 410.66,-36 404.66,-30 404.66,-24 404.66,-24 404.66,-12 404.66,-12 404.66,-6 410.66,0 416.66,0 416.66,0 448.07,0 448.07,0 454.07,0 460.07,-6 460.07,-12 460.07,-12 460.07,-24 460.07,-24 460.07,-30 454.07,-36 448.07,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"432.37\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">kì đầu I</text>\r\n</g>\r\n<!-- N1&#45;&gt;N2 -->\r\n<g id=\"edge1\" class=\"edge\">\r\n<title>N1&#45;&gt;N2</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M94.83,-18C167.48,-18 323.23,-18 394.45,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"394.1,-20.63 401.6,-18 394.1,-15.38 394.1,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"257.41\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">các cặp nhiễm sắc thể kép tương đồng tiếp hợp trao đổi chéo</text>\r\n</g>\r\n<!-- N3 -->\r\n<g id=\"node3\" class=\"node\">\r\n<title>N3</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M771.73,-36C771.73,-36 736.57,-36 736.57,-36 730.57,-36 724.57,-30 724.57,-24 724.57,-24 724.57,-12 724.57,-12 724.57,-6 730.57,0 736.57,0 736.57,0 771.73,0 771.73,0 777.73,0 783.73,-6 783.73,-12 783.73,-12 783.73,-24 783.73,-24 783.73,-30 777.73,-36 771.73,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"754.15\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">kì giữa I</text>\r\n</g>\r\n<!-- N2&#45;&gt;N3 -->\r\n<g id=\"edge2\" class=\"edge\">\r\n<title>N2&#45;&gt;N3</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M460.35,-18C517.1,-18 648.93,-18 714.57,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"714.29,-20.63 721.79,-18 714.29,-15.38 714.29,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"592.32\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">nhiễm sắc thể kép xếp hai hàng ở mặt phẳng xích đạo</text>\r\n</g>\r\n<!-- N4 -->\r\n<g id=\"node4\" class=\"node\">\r\n<title>N4</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1031.64,-36C1031.64,-36 1000.98,-36 1000.98,-36 994.98,-36 988.98,-30 988.98,-24 988.98,-24 988.98,-12 988.98,-12 988.98,-6 994.98,0 1000.98,0 1000.98,0 1031.64,0 1031.64,0 1037.64,0 1043.64,-6 1043.64,-12 1043.64,-12 1043.64,-24 1043.64,-24 1043.64,-30 1037.64,-36 1031.64,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1016.31\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">kì sau I</text>\r\n</g>\r\n<!-- N3&#45;&gt;N4 -->\r\n<g id=\"edge3\" class=\"edge\">\r\n<title>N3&#45;&gt;N4</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M783.99,-18C831.51,-18 926.23,-18 978.52,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"978.47,-20.63 985.97,-18 978.47,-15.38 978.47,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"886.35\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">các nhiễm sắc thể kép phân li về hai cực</text>\r\n</g>\r\n<!-- N5 -->\r\n<g id=\"node5\" class=\"node\">\r\n<title>N5</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1327.55,-36C1327.55,-36 1294.64,-36 1294.64,-36 1288.64,-36 1282.64,-30 1282.64,-24 1282.64,-24 1282.64,-12 1282.64,-12 1282.64,-6 1288.64,0 1294.64,0 1294.64,0 1327.55,0 1327.55,0 1333.55,0 1339.55,-6 1339.55,-12 1339.55,-12 1339.55,-24 1339.55,-24 1339.55,-30 1333.55,-36 1327.55,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1311.09\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">kì cuối I</text>\r\n</g>\r\n<!-- N4&#45;&gt;N5 -->\r\n<g id=\"edge4\" class=\"edge\">\r\n<title>N4&#45;&gt;N5</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M1044.07,-18C1096.27,-18 1211.84,-18 1272.01,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1272,-20.63 1279.5,-18 1272,-15.38 1272,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1163.14\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">tạo hai tế bào con mang bộ nhiễm sắc thể n kép</text>\r\n</g>\r\n<!-- N6 -->\r\n<g id=\"node6\" class=\"node\">\r\n<title>N6</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1572.46,-36C1572.46,-36 1514.8,-36 1514.8,-36 1508.8,-36 1502.8,-30 1502.8,-24 1502.8,-24 1502.8,-12 1502.8,-12 1502.8,-6 1508.8,0 1514.8,0 1514.8,0 1572.46,0 1572.46,0 1578.46,0 1584.46,-6 1584.46,-12 1584.46,-12 1584.46,-24 1584.46,-24 1584.46,-30 1578.46,-36 1572.46,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1543.63\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">Giảm phân II</text>\r\n</g>\r\n<!-- N5&#45;&gt;N6 -->\r\n<g id=\"edge5\" class=\"edge\">\r\n<title>N5&#45;&gt;N6</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M1339.9,-18C1377.61,-18 1445.62,-18 1492.39,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1492.1,-20.63 1499.6,-18 1492.1,-15.38 1492.1,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1421.17\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">bước vào lần phân bào thứ hai</text>\r\n</g>\r\n<!-- N7 -->\r\n<g id=\"node7\" class=\"node\">\r\n<title>N7</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M1912.62,-36C1912.62,-36 1878.96,-36 1878.96,-36 1872.96,-36 1866.96,-30 1866.96,-24 1866.96,-24 1866.96,-12 1866.96,-12 1866.96,-6 1872.96,0 1878.96,0 1878.96,0 1912.62,0 1912.62,0 1918.62,0 1924.62,-6 1924.62,-12 1924.62,-12 1924.62,-24 1924.62,-24 1924.62,-30 1918.62,-36 1912.62,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1895.79\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">kì sau II</text>\r\n</g>\r\n<!-- N6&#45;&gt;N7 -->\r\n<g id=\"edge6\" class=\"edge\">\r\n<title>N6&#45;&gt;N7</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M1584.8,-18C1652.83,-18 1789.84,-18 1856.55,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"1856.41,-20.63 1863.91,-18 1856.41,-15.38 1856.41,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"1725.71\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">tách chromatid thành nhiễm sắc thể đơn phân li về hai cực</text>\r\n</g>\r\n<!-- N8 -->\r\n<g id=\"node8\" class=\"node\">\r\n<title>N8</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M2264.03,-36C2264.03,-36 2228.12,-36 2228.12,-36 2222.12,-36 2216.12,-30 2216.12,-24 2216.12,-24 2216.12,-12 2216.12,-12 2216.12,-6 2222.12,0 2228.12,0 2228.12,0 2264.03,0 2264.03,0 2270.03,0 2276.03,-6 2276.03,-12 2276.03,-12 2276.03,-24 2276.03,-24 2276.03,-30 2270.03,-36 2264.03,-36\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"2246.07\" y=\"-14.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">kì cuối II</text>\r\n</g>\r\n<!-- N7&#45;&gt;N8 -->\r\n<g id=\"edge7\" class=\"edge\">\r\n<title>N7&#45;&gt;N8</title>\r\n<path fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" d=\"M1925,-18C1986.89,-18 2134.74,-18 2205.73,-18\"/>\r\n<polygon fill=\"#dc2626\" stroke=\"#dc2626\" stroke-width=\"1.8\" points=\"2205.4,-20.63 2212.9,-18 2205.4,-15.38 2205.4,-20.63\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"2070.37\" y=\"-20.23\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"9.50\" fill=\"#991b1b\">hình thành bốn tế bào con mang bộ nhiễm sắc thể đơn bội n</text>\r\n</g>\r\n<!-- N9 -->\r\n<g id=\"node9\" class=\"node\">\r\n<title>N9</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M74.16,-95C74.16,-95 36,-95 36,-95 30,-95 24,-89 24,-83 24,-83 24,-71 24,-71 24,-65 30,-59 36,-59 36,-59 74.16,-59 74.16,-59 80.16,-59 86.16,-65 86.16,-71 86.16,-71 86.16,-83 86.16,-83 86.16,-89 80.16,-95 74.16,-95\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"55.08\" y=\"-73.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">kì giữa II</text>\r\n</g>\r\n<!-- N10 -->\r\n<g id=\"node10\" class=\"node\">\r\n<title>N10</title>\r\n<path fill=\"#dbeafe\" stroke=\"#2563eb\" d=\"M98.16,-154C98.16,-154 12,-154 12,-154 6,-154 0,-148 0,-142 0,-142 0,-130 0,-130 0,-124 6,-118 12,-118 12,-118 98.16,-118 98.16,-118 104.16,-118 110.16,-124 110.16,-130 110.16,-130 110.16,-142 110.16,-142 110.16,-148 104.16,-154 98.16,-154\"/>\r\n<text xml:space=\"preserve\" text-anchor=\"middle\" x=\"55.08\" y=\"-132.3\" font-family=\"Inter,Helvetica,Arial,sans-serif\" font-size=\"11.00\" fill=\"#1e3a8a\">tế bào con đơn bội</text>\r\n</g>\r\n</g>\r\n</svg>\r\n"
    }
  ]
};
