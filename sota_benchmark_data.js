const SOTA_BENCHMARK_DATA = {
  "title": "EduSGG SOTA Benchmark & Qwen2.5-14B QLoRA Analytics",
  "description": "Comprehensive literature SOTA evaluation, training loss convergence curves, and qualitative Ground Truth vs Generated Caption explorer on AI2D-Caption (N=75)",
  "sota_comparison": [
    {
      "method": "Stable Diffusion v1.4",
      "type": "Zero-shot",
      "paradigm": "Diffusion Image Gen + VLM Eval",
      "cider": 7.7,
      "bertscore": 87.5,
      "bleu_4": 2.1,
      "badge": "bg-slate-100 text-slate-700",
      "is_best": false
    },
    {
      "method": "VPGen",
      "type": "Zero-shot",
      "paradigm": "Visual Programming + VLM Eval",
      "cider": 6.1,
      "bertscore": 87.2,
      "bleu_4": 1.8,
      "badge": "bg-slate-100 text-slate-700",
      "is_best": false
    },
    {
      "method": "AutomaTikZ",
      "type": "Zero-shot",
      "paradigm": "TikZ Code Gen + VLM Eval",
      "cider": 12.2,
      "bertscore": 86.9,
      "bleu_4": 3.5,
      "badge": "bg-slate-100 text-slate-700",
      "is_best": false
    },
    {
      "method": "Stable Diffusion v1.4 (FT)",
      "type": "Fine-tuned",
      "paradigm": "LoRA on AI2D + VLM Eval",
      "cider": 18.2,
      "bertscore": 88.5,
      "bleu_4": 5.4,
      "badge": "bg-blue-50 text-blue-700 border border-blue-200",
      "is_best": false
    },
    {
      "method": "VPGen (FT)",
      "type": "Fine-tuned",
      "paradigm": "Finetuned Visual Prog",
      "cider": 4.2,
      "bertscore": 86.9,
      "bleu_4": 1.2,
      "badge": "bg-slate-100 text-slate-700",
      "is_best": false
    },
    {
      "method": "DiagrammerGPT (COLM 2024)",
      "type": "Literature SOTA",
      "paradigm": "LLM Planning + Layout Assembly",
      "cider": 31.7,
      "bertscore": 90.1,
      "bleu_4": 8.9,
      "badge": "bg-amber-50 text-amber-800 border border-amber-300 font-bold",
      "is_best": false
    },
    {
      "method": "EduSGG (M3 Zero-shot)",
      "type": "Zero-shot Plan",
      "paradigm": "Scene Graph -> Qwen2.5-14B (No FT)",
      "cider": 10.03,
      "bertscore": 89.7,
      "bleu_4": 4.5,
      "badge": "bg-indigo-50 text-indigo-700 border border-indigo-200",
      "is_best": false
    },
    {
      "method": "EduSGG (M3 Qwen2.5-14B QLoRA)",
      "type": "Ours (Proposed)",
      "paradigm": "EduSG -> Content Plan -> Finetuned Qwen2.5-14B",
      "cider": 22.84,
      "bertscore": 90.92,
      "bleu_4": 6.46,
      "badge": "bg-emerald-600 text-white font-extrabold shadow-xs",
      "is_best": true
    }
  ],
  "training_stats": {
    "global_step": 450,
    "total_steps": 720,
    "best_val_loss": 0.652,
    "epochs_completed": 2,
    "history": [
      {
        "step": 50,
        "epoch": 1,
        "val_loss": 0.7997,
        "is_best": true,
        "lr": 0.00019979333640833947,
        "elapsed_minutes": 38.3,
        "timestamp": "2026-11-07 18:25:42"
      },
      {
        "step": 100,
        "epoch": 1,
        "val_loss": 0.726,
        "is_best": true,
        "lr": 0.00019571068366759143,
        "elapsed_minutes": 68.0,
        "timestamp": "2026-11-07 18:55:26"
      },
      {
        "step": 150,
        "epoch": 1,
        "val_loss": 0.683,
        "is_best": true,
        "lr": 0.00018660254037844388,
        "elapsed_minutes": 106.3,
        "timestamp": "2026-11-07 19:33:41"
      },
      {
        "step": 200,
        "epoch": 1,
        "val_loss": 0.6647,
        "is_best": true,
        "lr": 0.0001729471487418621,
        "elapsed_minutes": 136.2,
        "timestamp": "2026-11-07 20:03:35"
      },
      {
        "step": 250,
        "epoch": 2,
        "val_loss": 0.652,
        "is_best": true,
        "lr": 0.00015546151378774086,
        "elapsed_minutes": 174.4,
        "timestamp": "2026-11-07 20:41:53"
      },
      {
        "step": 300,
        "epoch": 2,
        "val_loss": 0.6664,
        "is_best": false,
        "lr": 0.00013506375551927547,
        "elapsed_minutes": 204.7,
        "timestamp": "2026-11-07 21:12:07"
      },
      {
        "step": 350,
        "epoch": 2,
        "val_loss": 0.6797,
        "is_best": false,
        "lr": 0.00011282490109308633,
        "elapsed_minutes": 242.4,
        "timestamp": "2026-11-07 21:49:51"
      },
      {
        "step": 400,
        "epoch": 2,
        "val_loss": 0.675,
        "is_best": false,
        "lr": 8.991264828797319e-05,
        "elapsed_minutes": 280.9,
        "timestamp": "2026-11-07 22:28:16"
      },
      {
        "step": 450,
        "epoch": 2,
        "val_loss": 0.6543,
        "is_best": false,
        "lr": 6.753005307953167e-05,
        "elapsed_minutes": 320.2,
        "timestamp": "2026-11-07 23:07:35"
      }
    ]
  },
  "triple_benchmark": {
    "adapter_evaluated": "/home/stackops/EduSGG/checkpoints/qwen2.5-14b-edusgg-lora/best_adapter",
    "ai2d_caption_test_75": {
      "num_samples": 75,
      "cider": 22.67,
      "cider_raw": 0.2267,
      "bertscore": {
        "precision": 94.17,
        "recall": 88.06,
        "f1": 90.98
      },
      "bleu_1": 18.44,
      "bleu_4": 9.08,
      "rouge_1": 40.81,
      "rouge_2": 25.99,
      "rouge_l": 37.64
    },
    "ai2d_full_test_split": {
      "num_samples": 490,
      "cider": 267.7,
      "cider_raw": 2.677,
      "bertscore": {
        "precision": 95.87,
        "recall": 94.69,
        "f1": 95.26
      },
      "bleu_1": 59.01,
      "bleu_4": 40.68,
      "rouge_1": 68.22,
      "rouge_2": 55.14,
      "rouge_l": 66.69
    },
    "vi_edudiag_50": {
      "num_samples": 50,
      "cider": 0.0,
      "cider_raw": 0.0,
      "bertscore": {
        "precision": 91.44,
        "recall": 80.63,
        "f1": 85.68
      },
      "bleu_1": 1.1,
      "bleu_4": 0.24,
      "rouge_1": 19.54,
      "rouge_2": 5.89,
      "rouge_l": 15.07
    },
    "diagrammergpt_comparison_75": {
      "stable_diffusion_v14_zeroshot": {
        "cider": 7.7,
        "bertscore": 87.5
      },
      "vpgen_zeroshot": {
        "cider": 6.1,
        "bertscore": 87.2
      },
      "automatiz": {
        "cider": 12.2,
        "bertscore": 86.9
      },
      "stable_diffusion_finetuned": {
        "cider": 18.2,
        "bertscore": 88.5
      },
      "vpgen_finetuned": {
        "cider": 4.2,
        "bertscore": 86.9
      },
      "diagrammergpt": {
        "cider": 31.7,
        "bertscore": 90.1
      },
      "edusgg_m3_zeroshot": {
        "cider": 10.03,
        "bertscore": 89.7
      },
      "edusgg_m3_finetuned": {
        "cider": 22.67,
        "bertscore": 90.98
      }
    }
  },
  "diagrams": [
    {
      "id": "ai2d_cap_test_00",
      "index": 0,
      "image": "1597.png",
      "image_url": "images/1597.png",
      "topic": "engineering",
      "layout": "circular",
      "entities": [
        "switch schematic",
        "resistor schematic",
        "led light schematic",
        "battery schematic",
        "switch",
        "resistor",
        "led light",
        "battery"
      ],
      "entity_count": 8,
      "relationships": [
        "switch schematic -> resistor schematic",
        "resistor schematic -> battery schematic",
        "switch schematic -> battery schematic",
        "led light schematic -> switch schematic",
        "switch schematic -> led light schematic",
        "resistor schematic -> switch schematic",
        "led light schematic -> resistor schematic",
        "battery schematic -> led light schematic",
        "led light schematic -> battery schematic",
        "battery schematic -> resistor schematic",
        "battery schematic -> switch schematic",
        "resistor schematic -> led light schematic"
      ],
      "relationship_count": 12,
      "gt_caption": "A diagram showing a simple electronic circuit schematic with a battery, a resistor, a switch, and an LED light. The switch and resistor are connected in parallel to the battery and then LED light. The LED light is directly connected to the battery.",
      "generated_caption": "A diagram showing 2 simple circuits with a battery and three lights. One circuit has a switch to control the flow of electricity. Both circuits are connects in series.",
      "metrics": {
        "cider": 1.57,
        "bertscore_f1": 91.1,
        "bleu_4": 3.51,
        "rouge_l": 38.89
      }
    },
    {
      "id": "ai2d_cap_test_01",
      "index": 1,
      "image": "1560.png",
      "image_url": "images/1560.png",
      "topic": "engineering",
      "layout": "circular",
      "entities": [
        "switch",
        "battery",
        "light bulb"
      ],
      "entity_count": 3,
      "relationships": [
        "switch -> battery",
        "battery -> light bulb",
        "light bulb -> switch"
      ],
      "relationship_count": 3,
      "gt_caption": "A diagram showing a light bulb with a switch and a battery connected to it.",
      "generated_caption": "A diagram showing 2 simple electrical circuits with a battery, switch, and light bulb.",
      "metrics": {
        "cider": 21.73,
        "bertscore_f1": 95.01,
        "bleu_4": 9.0,
        "rouge_l": 48.28
      }
    },
    {
      "id": "ai2d_cap_test_02",
      "index": 2,
      "image": "1611.png",
      "image_url": "images/1611.png",
      "topic": "engineering",
      "layout": "circular",
      "entities": [
        "light bulb",
        "battery"
      ],
      "entity_count": 2,
      "relationships": [
        "battery -> light bulb",
        "light bulb -> battery"
      ],
      "relationship_count": 2,
      "gt_caption": "A diagram showing a series of three lights side by side, connected to each other. The left most light and right most light is also connected to a battery.",
      "generated_caption": "A diagram showing 2 simple circuits with a battery and light bulb.",
      "metrics": {
        "cider": 0.23,
        "bertscore_f1": 89.6,
        "bleu_4": 2.43,
        "rouge_l": 29.27
      }
    },
    {
      "id": "ai2d_cap_test_03",
      "index": 3,
      "image": "1662.png",
      "image_url": "images/1662.png",
      "topic": "astronomy",
      "layout": "rows",
      "entities": [
        "earth",
        "moon",
        "perigee",
        "apogee",
        "earth's shadow"
      ],
      "entity_count": 5,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the Moon during its perigee and apogee phases. The perigee phase is the closer to earth than the apogee phase.",
      "generated_caption": "A diagram showing 2D representations of the Earth, Moon, and their positions relative to each other during perigee and apogee.",
      "metrics": {
        "cider": 57.5,
        "bertscore_f1": 90.84,
        "bleu_4": 5.8,
        "rouge_l": 41.86
      }
    },
    {
      "id": "ai2d_cap_test_04",
      "index": 4,
      "image": "734.png",
      "image_url": "images/734.png",
      "topic": "astronomy",
      "layout": "rows",
      "entities": [
        "earth",
        "moon",
        "sun"
      ],
      "entity_count": 3,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the relative positions of the Earth, the Moon, and the Sun. The moon is orbiting the Earth.",
      "generated_caption": "A diagram showing 3D models of the Earth, Moon, and Sun.",
      "metrics": {
        "cider": 63.42,
        "bertscore_f1": 94.42,
        "bleu_4": 8.1,
        "rouge_l": 58.06
      }
    },
    {
      "id": "ai2d_cap_test_05",
      "index": 5,
      "image": "2604.png",
      "image_url": "images/2604.png",
      "topic": "astronomy",
      "layout": "rows",
      "entities": [
        "earth",
        "moon",
        "high tide",
        "low tide",
        "earth's tides",
        "moons gravitational pull",
        "the moon's pull of gravity creates high and low tides on earth"
      ],
      "entity_count": 7,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the Moon's gravitational pull on Earth and where the high and low tides are on Earth.",
      "generated_caption": "A diagram showing 3 rows with celestial bodies and their effects on Earth's tides.",
      "metrics": {
        "cider": 12.03,
        "bertscore_f1": 91.37,
        "bleu_4": 5.62,
        "rouge_l": 34.29
      }
    },
    {
      "id": "ai2d_cap_test_06",
      "index": 6,
      "image": "743.png",
      "image_url": "images/743.png",
      "topic": "astronomy",
      "layout": "circular",
      "entities": [
        "moon",
        "earth",
        "sunlight",
        "first quarter",
        "waxing crescent",
        "new",
        "waning crescent",
        "third quarter",
        "waning gibbous",
        "full",
        "waxing gibbous",
        "sun's light"
      ],
      "entity_count": 12,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the phases of the moon as it orbits around Earth, starting from new moon, going through first quarter, full moon, third quarter, and ending with a new moon. It also shows the intermediate crescent and gibbous phases",
      "generated_caption": "A diagram showing the phases of the moon in relation to the earth and the sun's light.",
      "metrics": {
        "cider": 0.07,
        "bertscore_f1": 89.19,
        "bleu_4": 11.32,
        "rouge_l": 37.93
      }
    },
    {
      "id": "ai2d_cap_test_07",
      "index": 7,
      "image": "171.png",
      "image_url": "images/171.png",
      "topic": "astronomy",
      "layout": "circular",
      "entities": [
        "earth",
        "sun",
        "spring equinox",
        "summer solstice",
        "fall equinox",
        "winter solstice"
      ],
      "entity_count": 6,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the different seasons as Earth revolves around the Sun, starting with spring, then summer, fall, and finally, winter. It also indicates if there is an equinox or solstice during that season.",
      "generated_caption": "A diagram showing 4 seasons and Earth's position in relation to the sun during equinoxes and solstices.",
      "metrics": {
        "cider": 0.62,
        "bertscore_f1": 89.93,
        "bleu_4": 2.59,
        "rouge_l": 34.62
      }
    },
    {
      "id": "ai2d_cap_test_08",
      "index": 8,
      "image": "154.png",
      "image_url": "images/154.png",
      "topic": "astronomy",
      "layout": "rows",
      "entities": [
        "moon",
        "earth",
        "north pole",
        "high tide (midnight)"
      ],
      "entity_count": 4,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the moon and the Earth side by side. The North Pole and High Tide is labeled on the Earth.",
      "generated_caption": "A diagram showing 24 hours of the Earth's rotation with the Moon's influence on tides.",
      "metrics": {
        "cider": 5.23,
        "bertscore_f1": 90.22,
        "bleu_4": 4.88,
        "rouge_l": 35.9
      }
    },
    {
      "id": "ai2d_cap_test_09",
      "index": 9,
      "image": "2654.png",
      "image_url": "images/2654.png",
      "topic": "astronomy",
      "layout": "circular",
      "entities": [
        "earth",
        "sun",
        "spring",
        "summer",
        "autumn",
        "winter",
        "21st march",
        "21st june",
        "23rd autumn",
        "21st december",
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december"
      ],
      "entity_count": 22,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the different seasons, starting from Spring and going through Summer, Autumn, and Winter. The months are also labeled around the circular diagram. The sun is in the center and the earth is shown going around the sun along with the seasons.",
      "generated_caption": "A diagram showing 4 seasons and Earth's position relative to the Sun during equinoxes and solstices.",
      "metrics": {
        "cider": 0.0,
        "bertscore_f1": 87.02,
        "bleu_4": 1.45,
        "rouge_l": 26.23
      }
    },
    {
      "id": "ai2d_cap_test_10",
      "index": 10,
      "image": "124.png",
      "image_url": "images/124.png",
      "topic": "astronomy",
      "layout": "circular",
      "entities": [
        "moon",
        "earth",
        "spring tides",
        "new moon"
      ],
      "entity_count": 4,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the moon revolving around the Earth and going through each phase. It also indicates where the new moon and the Spring Tides occur.",
      "generated_caption": "A diagram showing 4 phases of the moon in relation to the Earth and Sun, with positions indicating spring and neap tides.",
      "metrics": {
        "cider": 37.61,
        "bertscore_f1": 90.94,
        "bleu_4": 7.24,
        "rouge_l": 45.83
      }
    },
    {
      "id": "ai2d_cap_test_11",
      "index": 11,
      "image": "2579.png",
      "image_url": "images/2579.png",
      "topic": "astronomy",
      "layout": "circular",
      "entities": [
        "earth",
        "sun",
        "autumnal equinox",
        "winter solstice",
        "vernal equinox",
        "summer solstice",
        "arctic circle",
        "tropic of capricorn",
        "antarctic circle",
        "tropic of cancer"
      ],
      "entity_count": 10,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the Earth revolving around the Sun. It indicates where the equinoxes and solstices occur as well as the Tropic of Capricorn and Cancer and then Antarctic and Arctic circles.",
      "generated_caption": "A diagram showing 3D Earth with seasonal equinoxes, solstices, and latitudinal circles.",
      "metrics": {
        "cider": 0.14,
        "bertscore_f1": 89.5,
        "bleu_4": 1.89,
        "rouge_l": 36.36
      }
    },
    {
      "id": "ai2d_cap_test_12",
      "index": 12,
      "image": "1349.png",
      "image_url": "images/1349.png",
      "topic": "astronomy",
      "layout": "circular",
      "entities": [
        "earth",
        "sun",
        "vernal equinox",
        "summer solstice",
        "autumnal equinox",
        "winter solstice",
        "seasonal configuration of earth and sun"
      ],
      "entity_count": 7,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing seasonal configurations of the Earth and Sun as the Earth revolves around the Sun. It also highlights the summer and winter solstices and the equinoxes.",
      "generated_caption": "A diagram showing the seasonal configuration of earth and sun with key dates and positions marked.",
      "metrics": {
        "cider": 4.61,
        "bertscore_f1": 91.15,
        "bleu_4": 5.5,
        "rouge_l": 45.45
      }
    },
    {
      "id": "ai2d_cap_test_13",
      "index": 13,
      "image": "344.png",
      "image_url": "images/344.png",
      "topic": "biology",
      "layout": "circular",
      "entities": [
        "adult grasshopper",
        "grasshopper egg",
        "nymph grasshopper",
        "mealworm beetle",
        "mealworm pupa",
        "mealworm larvae",
        "mealworm egg",
        "grasshopper"
      ],
      "entity_count": 8,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the life cycle of a grasshopper and a mealworm beetle, illustrating the transformation they undergo during their development. The grasshopper goes from an egg, to a nymph, to an adult and then the mealworm beetle goes from an egg, to a larvae, to a pupa, to an adult.",
      "generated_caption": "A diagram showing 2 food chains, one with a mealworm and one with a grasshopper.",
      "metrics": {
        "cider": 0.0,
        "bertscore_f1": 88.93,
        "bleu_4": 0.81,
        "rouge_l": 21.21
      }
    },
    {
      "id": "ai2d_cap_test_14",
      "index": 14,
      "image": "2145.png",
      "image_url": "images/2145.png",
      "topic": "biology",
      "layout": "circular",
      "entities": [
        "adult flea",
        "eggs",
        "first stage larva",
        "second stage larva",
        "third stage larva",
        "flea pupa",
        "Adult (2-4 mm long)",
        "Eggs (0.5 mm long)",
        "(1-2 mm long)",
        "(2-3 mm long)",
        "(3-5 mm long)",
        "(2-4 mm long)",
        "life cycle of the cat flea"
      ],
      "entity_count": 13,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the life cycle of a cat flea, consisting of four stages: egg, larva, pupa, and adult. The larva stage is broken down into three stages. It also indicates the size of the flee at each stage.",
      "generated_caption": "A diagram showing the life cycle of the cat flea",
      "metrics": {
        "cider": 0.0,
        "bertscore_f1": 91.46,
        "bleu_4": 3.89,
        "rouge_l": 36.73
      }
    },
    {
      "id": "ai2d_cap_test_15",
      "index": 15,
      "image": "2277.png",
      "image_url": "images/2277.png",
      "topic": "biology",
      "layout": "circular",
      "entities": [
        "frog",
        "eggs",
        "tadpole"
      ],
      "entity_count": 3,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the life cycle of a frog, illustrating the different stages from egg, to tadpole, to adult frog.",
      "generated_caption": "A diagram showing 3 components arranged in a circular layout",
      "metrics": {
        "cider": 0.11,
        "bertscore_f1": 88.31,
        "bleu_4": 4.13,
        "rouge_l": 26.67
      }
    },
    {
      "id": "ai2d_cap_test_16",
      "index": 16,
      "image": "356.png",
      "image_url": "images/356.png",
      "topic": "biology",
      "layout": "circular",
      "entities": [
        "egg",
        "nymph",
        "adult"
      ],
      "entity_count": 3,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the life cycle of some bug, from an egg into a nymph and then into an adult.",
      "generated_caption": "A diagram showing 3 stages of an insect's life cycle.",
      "metrics": {
        "cider": 6.67,
        "bertscore_f1": 92.18,
        "bleu_4": 4.57,
        "rouge_l": 32.26
      }
    },
    {
      "id": "ai2d_cap_test_17",
      "index": 17,
      "image": "2460.png",
      "image_url": "images/2460.png",
      "topic": "biology",
      "layout": "circular",
      "entities": [
        "adult bug",
        "eggs",
        "first-instar larva",
        "second-instar larva",
        "third-instar larva",
        "fourth-instar larva",
        "bug pupa",
        "adult",
        "oviposition",
        "hatch",
        "moult",
        "pupa",
        "emergence"
      ],
      "entity_count": 13,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the life cycle of a mosquito, illustrating the different stages from egg to adult as well as what occurs in between each stage.",
      "generated_caption": "A diagram showing 8 stages of the life cycle of a bug.",
      "metrics": {
        "cider": 5.44,
        "bertscore_f1": 93.17,
        "bleu_4": 13.6,
        "rouge_l": 42.11
      }
    },
    {
      "id": "ai2d_cap_test_18",
      "index": 18,
      "image": "2421.png",
      "image_url": "images/2421.png",
      "topic": "biology",
      "layout": "circular",
      "entities": [
        "adult cockroach",
        "egg",
        "cockroach nymph"
      ],
      "entity_count": 3,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the life cycle of a flea, illustrating the different stages from egg to adult.",
      "generated_caption": "A diagram showing 3 stages of a cockroach's life cycle",
      "metrics": {
        "cider": 41.07,
        "bertscore_f1": 93.25,
        "bleu_4": 7.88,
        "rouge_l": 35.71
      }
    },
    {
      "id": "ai2d_cap_test_19",
      "index": 19,
      "image": "477.png",
      "image_url": "images/477.png",
      "topic": "biology",
      "layout": "columns",
      "entities": [
        "eagle",
        "snake",
        "toad",
        "slug",
        "lichen",
        "alligator",
        "fish",
        "crayfish",
        "snail",
        "algae"
      ],
      "entity_count": 10,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing two food chains. The left food chain, starting from the bottom, goes from lichen, to slug, to toad, to snake, to eagle. The right food chain, starting from the bottom, goes from algae, to snail, to crayfish, to fish, to alligator.",
      "generated_caption": "A diagram showing 10 different animals and plants arranged in columns.",
      "metrics": {
        "cider": 0.0,
        "bertscore_f1": 85.82,
        "bleu_4": 0.46,
        "rouge_l": 10.91
      }
    },
    {
      "id": "ai2d_cap_test_20",
      "index": 20,
      "image": "2827.png",
      "image_url": "images/2827.png",
      "topic": "biology",
      "layout": "tree",
      "entities": [
        "diatoms",
        "invertebrate larvae",
        "bacteria",
        "algal spores",
        "fungi",
        "pseudoalteromonas tunicata"
      ],
      "entity_count": 6,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the classification of different types of a pseudoalteromonas tunicata, including fungi, diatoms, invertebrate larvae, algal spores, and bacteria, all connected with an arrow.",
      "generated_caption": "A diagram showing 6 components arranged in a tree layout.",
      "metrics": {
        "cider": 0.01,
        "bertscore_f1": 85.75,
        "bleu_4": 2.27,
        "rouge_l": 22.22
      }
    },
    {
      "id": "ai2d_cap_test_21",
      "index": 21,
      "image": "216.png",
      "image_url": "images/216.png",
      "topic": "engineering",
      "layout": "circular",
      "entities": [
        "battery",
        "lamp",
        "switch"
      ],
      "entity_count": 3,
      "relationships": [
        "switch -> battery",
        "lamp -> switch",
        "battery -> lamp"
      ],
      "relationship_count": 3,
      "gt_caption": "A diagram showing a simple circuit with a battery, lamp, and switch. The lamp is connected to the battery and the switch, and the switch is connected to the battery.",
      "generated_caption": "A diagram showing 2 simple electrical circuits with a battery, a lamp, and a switch.",
      "metrics": {
        "cider": 5.15,
        "bertscore_f1": 94.69,
        "bleu_4": 4.98,
        "rouge_l": 48.89
      }
    },
    {
      "id": "ai2d_cap_test_22",
      "index": 22,
      "image": "1780.png",
      "image_url": "images/1780.png",
      "topic": "biology",
      "layout": "tree",
      "entities": [
        "sun",
        "tertiary consumer",
        "secondary consumer",
        "primary consumer",
        "producer",
        "decomposers"
      ],
      "entity_count": 6,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the different types of consumers in an ecosystem. It includes tertiary consumer, secondary consumers, primary consumers, and producer consumers. Then it includes decomposers on the side. The arrows in the diagram also indicate the flow of the product from one consumer group to another.",
      "generated_caption": "A diagram showing 2 food chains, one terrestrial and one aquatic, with various trophic levels.",
      "metrics": {
        "cider": 0.0,
        "bertscore_f1": 85.95,
        "bleu_4": 0.88,
        "rouge_l": 16.13
      }
    },
    {
      "id": "ai2d_cap_test_23",
      "index": 23,
      "image": "1374.png",
      "image_url": "images/1374.png",
      "topic": "engineering",
      "layout": "circular",
      "entities": [
        "battery schematic",
        "light bulb schematic",
        "light bulb",
        "battery",
        "bulb",
        "series circuit"
      ],
      "entity_count": 6,
      "relationships": [
        "light bulb schematic -> battery schematic",
        "battery schematic -> light bulb schematic",
        "battery -> light bulb",
        "light bulb -> battery"
      ],
      "relationship_count": 4,
      "gt_caption": "A diagram showing a simple electronic circuit with a battery and two light bulbs. It also includes a schematic diagram of the components in the circuit.",
      "generated_caption": "A diagram showing 2 simple circuits with a battery and a light bulb.",
      "metrics": {
        "cider": 9.62,
        "bertscore_f1": 95.99,
        "bleu_4": 11.25,
        "rouge_l": 56.41
      }
    },
    {
      "id": "ai2d_cap_test_24",
      "index": 24,
      "image": "1530.png",
      "image_url": "images/1530.png",
      "topic": "engineering",
      "layout": "circular",
      "entities": [
        "battery cell",
        "switch",
        "lamp",
        "cell",
        "simple circuit",
        "here is a simple electric circuit. it has a cell, a lamp, and a switch.",
        "to make the circuit, these components are connected together with metal connecting wires."
      ],
      "entity_count": 7,
      "relationships": [
        "battery cell -> lamp",
        "lamp -> switch",
        "switch -> battery cell"
      ],
      "relationship_count": 3,
      "gt_caption": "A diagram showing a simple electric circuit that includes a battery, a lamp, and a switch which are all connected.",
      "generated_caption": "A diagram showing a simple electric circuit with components connected by metal wires.",
      "metrics": {
        "cider": 122.77,
        "bertscore_f1": 92.85,
        "bleu_4": 27.45,
        "rouge_l": 48.48
      }
    },
    {
      "id": "ai2d_cap_test_25",
      "index": 25,
      "image": "1607.png",
      "image_url": "images/1607.png",
      "topic": "engineering",
      "layout": "circular",
      "entities": [
        "battery schematic",
        "light bulb schematic",
        "switch schematic",
        "2 batteries",
        "light bulb",
        "on/off switch"
      ],
      "entity_count": 6,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing an electrical circuit with a light bulb, two batteries, and a switch. The components are connected in series.",
      "generated_caption": "A diagram showing 2 simple electrical circuits with components arranged in a circular layout.",
      "metrics": {
        "cider": 32.53,
        "bertscore_f1": 92.34,
        "bleu_4": 5.48,
        "rouge_l": 45.71
      }
    },
    {
      "id": "ai2d_cap_test_26",
      "index": 26,
      "image": "1562.png",
      "image_url": "images/1562.png",
      "topic": "engineering",
      "layout": "circular",
      "entities": [
        "battery",
        "resistor",
        "battery schematic",
        "resistor schematic",
        "real circuit using jumper wires",
        "schematic diagram"
      ],
      "entity_count": 6,
      "relationships": [
        "resistor -> battery",
        "battery -> resistor",
        "battery schematic -> resistor schematic",
        "resistor schematic -> battery schematic"
      ],
      "relationship_count": 4,
      "gt_caption": "A diagram showing a circuit with a resistor and a battery which are connected to each other. It also includes a schematic diagram of the circuit.",
      "generated_caption": "A diagram showing 3 different representations of a simple electrical circuit",
      "metrics": {
        "cider": 0.55,
        "bertscore_f1": 90.86,
        "bleu_4": 2.84,
        "rouge_l": 27.03
      }
    },
    {
      "id": "ai2d_cap_test_27",
      "index": 27,
      "image": "1536.png",
      "image_url": "images/1536.png",
      "topic": "engineering",
      "layout": "circular",
      "entities": [
        "battery",
        "light bulb",
        "battery schematic",
        "light bulb schematic"
      ],
      "entity_count": 4,
      "relationships": [
        "light bulb schematic -> battery schematic",
        "battery -> light bulb",
        "battery schematic -> light bulb schematic",
        "light bulb -> battery"
      ],
      "relationship_count": 4,
      "gt_caption": "A diagram showing a circuit with two light bulbs and a battery connected in parallel. It also includes a schematic diagram of the circuit.",
      "generated_caption": "A diagram showing 2 simple electrical circuits with a battery and a light bulb.",
      "metrics": {
        "cider": 8.94,
        "bertscore_f1": 94.6,
        "bleu_4": 5.42,
        "rouge_l": 42.11
      }
    },
    {
      "id": "ai2d_cap_test_28",
      "index": 28,
      "image": "1935.png",
      "image_url": "images/1935.png",
      "topic": "biology",
      "layout": "tree",
      "entities": [
        "producer",
        "herbivore",
        "carnivore",
        "scavenger"
      ],
      "entity_count": 4,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing a food web, illustrating the relationships between different organisms with arrows in the context of a carnivore, producer, herbivore, and scavenger. The producers are consumed by herbivores, which are consumed by carnivores. Carnivores are consumed by other carnivores. Scavengers consume both herbivores and carnivores.",
      "generated_caption": "A diagram showing 4 types of organisms in a food chain.",
      "metrics": {
        "cider": 0.0,
        "bertscore_f1": 87.43,
        "bleu_4": 0.5,
        "rouge_l": 20.69
      }
    },
    {
      "id": "ai2d_cap_test_29",
      "index": 29,
      "image": "208.png",
      "image_url": "images/208.png",
      "topic": "engineering",
      "layout": "circular",
      "entities": [
        "light bulb",
        "battery",
        "switch",
        "electrical circuit"
      ],
      "entity_count": 4,
      "relationships": [
        "battery -> switch",
        "light bulb -> battery",
        "switch -> light bulb"
      ],
      "relationship_count": 3,
      "gt_caption": "A diagram showing an electrical circuit with a light bulb, a battery, and a switch.",
      "generated_caption": "A diagram showing 2 electrical circuits with a battery, switch, and light bulb.",
      "metrics": {
        "cider": 100.52,
        "bertscore_f1": 98.01,
        "bleu_4": 10.32,
        "rouge_l": 64.29
      }
    },
    {
      "id": "ai2d_cap_test_30",
      "index": 30,
      "image": "2136.png",
      "image_url": "images/2136.png",
      "topic": "astronomy",
      "layout": "",
      "entities": [
        "stellar nebula",
        "average star",
        "red giant",
        "planetary nebula",
        "white dwarf",
        "massive star",
        "red supergiant",
        "supernova",
        "black hole",
        "neutron star",
        "life cycle of a star"
      ],
      "entity_count": 11,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the life cycle of a star, starting from its formation as a stellar nebula. From the nebula it can either become an average star or a massive star. An average star then goes to a red giant and then into a planetary nebula and eventually into a white dwarf. The massive star goes to a red supergiant and then into a supernova. Then it can either become a neutron star or a black hole.",
      "generated_caption": "A diagram showing the life cycle of a star with various stages and outcomes.",
      "metrics": {
        "cider": 0.0,
        "bertscore_f1": 87.92,
        "bleu_4": 0.6,
        "rouge_l": 21.98
      }
    },
    {
      "id": "ai2d_cap_test_31",
      "index": 31,
      "image": "1435.png",
      "image_url": "images/1435.png",
      "topic": "astronomy",
      "layout": "",
      "entities": [
        "mercury",
        "venus",
        "earth",
        "mars",
        "jupiter",
        "saturn",
        "uranus",
        "neptune",
        "pluto"
      ],
      "entity_count": 9,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the planets in our solar system in rows of three.",
      "generated_caption": "A diagram showing 8 planets of the solar system with labels.",
      "metrics": {
        "cider": 125.16,
        "bertscore_f1": 94.32,
        "bleu_4": 11.0,
        "rouge_l": 50.0
      }
    },
    {
      "id": "ai2d_cap_test_32",
      "index": 32,
      "image": "776.png",
      "image_url": "images/776.png",
      "topic": "astronomy",
      "layout": "",
      "entities": [
        "moon",
        "new moon",
        "waxing crescent",
        "first quarter",
        "waxing gibbous",
        "full moon",
        "waning gibbous",
        "last quarter",
        "waning crescent"
      ],
      "entity_count": 9,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the eight phases of the moon in a row, with labels indicating the different stages of the moon's cycle. Starts from New Moon and ends with Waning Crescent.",
      "generated_caption": "A diagram showing 8 phases of the moon in a circular layout.",
      "metrics": {
        "cider": 1.09,
        "bertscore_f1": 91.88,
        "bleu_4": 10.9,
        "rouge_l": 40.91
      }
    },
    {
      "id": "ai2d_cap_test_33",
      "index": 33,
      "image": "1451.png",
      "image_url": "images/1451.png",
      "topic": "astronomy",
      "layout": "",
      "entities": [
        "sun",
        "earth",
        "moon"
      ],
      "entity_count": 3,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing two suns and two earths. The earths each have the moon in two different phases, the first earth has the moon below and above it and then second earth has the moons on the left and right of it.",
      "generated_caption": "A diagram showing 3D representations of the Sun, Earth, and Moon",
      "metrics": {
        "cider": 0.0,
        "bertscore_f1": 89.06,
        "bleu_4": 0.69,
        "rouge_l": 26.42
      }
    },
    {
      "id": "ai2d_cap_test_34",
      "index": 34,
      "image": "647.png",
      "image_url": "images/647.png",
      "topic": "astronomy",
      "layout": "",
      "entities": [
        "earth",
        "sun",
        "march equinox",
        "june solstice",
        "september equinox",
        "december solstice",
        "mar 20/21",
        "jun 21/22",
        "sept 22/23",
        "dec 21/22",
        "spring",
        "summer",
        "autumn",
        "winter"
      ],
      "entity_count": 14,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the Earth revolving around the sun. Each season is indicated, as well as the equinoxes and solstices and the dates that they occur.",
      "generated_caption": "A diagram showing the Earth's position relative to the Sun during different seasons and equinoxes.",
      "metrics": {
        "cider": 0.64,
        "bertscore_f1": 91.3,
        "bleu_4": 8.74,
        "rouge_l": 42.86
      }
    },
    {
      "id": "ai2d_cap_test_35",
      "index": 35,
      "image": "2740.png",
      "image_url": "images/2740.png",
      "topic": "astronomy",
      "layout": "",
      "entities": [
        "moon",
        "person",
        "sun",
        "first quarter",
        "waxing gibbous",
        "full moon",
        "waning gibbous",
        "last (third) quarter",
        "waning crescent",
        "new moon",
        "you",
        "earth"
      ],
      "entity_count": 12,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing all eight phases of the moon with labels revolving around Earth and you. It also indicates where the sun is.",
      "generated_caption": "A diagram showing 8 phases of the moon in relation to the Earth and Sun.",
      "metrics": {
        "cider": 40.24,
        "bertscore_f1": 93.03,
        "bleu_4": 15.97,
        "rouge_l": 52.63
      }
    },
    {
      "id": "ai2d_cap_test_36",
      "index": 36,
      "image": "1356.png",
      "image_url": "images/1356.png",
      "topic": "astronomy",
      "layout": "",
      "entities": [
        "earth",
        "sun",
        "jun 21",
        "mar 21",
        "dec 21",
        "sep 21",
        "sunlight and seasons"
      ],
      "entity_count": 7,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the Earth revolve around the sun four times, one of each solstice and equinox. It also indicates what the date would be during each earth position.",
      "generated_caption": "A diagram showing the Earth's position relative to the Sun during different seasons and equinoxes.",
      "metrics": {
        "cider": 0.97,
        "bertscore_f1": 90.72,
        "bleu_4": 8.27,
        "rouge_l": 40.0
      }
    },
    {
      "id": "ai2d_cap_test_37",
      "index": 37,
      "image": "4317.png",
      "image_url": "images/4317.png",
      "topic": "astronomy",
      "layout": "",
      "entities": [
        "sun",
        "mercury",
        "venus",
        "earth",
        "mars",
        "jupiter",
        "saturn",
        "uranus",
        "neptune",
        "pluto",
        "comet",
        "asteroids",
        "the sun",
        "comets"
      ],
      "entity_count": 14,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the relative positions and distances of the planets from the sun in our solar system.",
      "generated_caption": "A diagram showing 11 planets, the sun, comets, and asteroids within bounding boxes.",
      "metrics": {
        "cider": 0.45,
        "bertscore_f1": 90.39,
        "bleu_4": 5.95,
        "rouge_l": 38.71
      }
    },
    {
      "id": "ai2d_cap_test_38",
      "index": 38,
      "image": "2522.png",
      "image_url": "images/2522.png",
      "topic": "astronomy",
      "layout": "",
      "entities": [
        "earth",
        "sun",
        "autumn equinox",
        "winter solstice",
        "spring equinox",
        "summer solstice",
        "(september 22nd/23rd)",
        "(december 21th/22nd)",
        "(march 20th/21st)",
        "(june 21th/22nd)",
        "summer",
        "autumn",
        "winter",
        "spring",
        "closest to the sun (perihelion, january 3rd)"
      ],
      "entity_count": 15,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the position of the Sun and the Earth's orbit around it during different seasons. The equinoxes and solstices are labeled along with the dates that they occur. The points where the earth is the closest and the furthest from the sun are also included.",
      "generated_caption": "A diagram showing 4 seasons and Earth's position relative to the Sun during equinoxes and solstices.",
      "metrics": {
        "cider": 0.0,
        "bertscore_f1": 91.69,
        "bleu_4": 1.44,
        "rouge_l": 30.77
      }
    },
    {
      "id": "ai2d_cap_test_39",
      "index": 39,
      "image": "737.png",
      "image_url": "images/737.png",
      "topic": "astronomy",
      "layout": "",
      "entities": [
        "earth",
        "moon",
        "gravity",
        "moon's speed"
      ],
      "entity_count": 4,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the Earth and the Moon. It also indicates which direction gravity pulls for both.",
      "generated_caption": "A diagram showing 4 components related to the Earth, Moon, and gravity.",
      "metrics": {
        "cider": 0.37,
        "bertscore_f1": 93.14,
        "bleu_4": 6.31,
        "rouge_l": 48.28
      }
    },
    {
      "id": "ai2d_cap_test_40",
      "index": 40,
      "image": "1256.png",
      "image_url": "images/1256.png",
      "topic": "astronomy",
      "layout": "",
      "entities": [
        "moon",
        "earth",
        "1st quarter",
        "waxing gibbous",
        "full",
        "waning gibbous",
        "3rd quarter",
        "waning crescent",
        "new",
        "waxing crescent",
        "sunlight"
      ],
      "entity_count": 11,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the eight phases of the moon with labels as it revolves around Earth.  It also indicates the direction of the sunlight.",
      "generated_caption": "A diagram showing 8 phases of the moon in relation to the earth and sunlight.",
      "metrics": {
        "cider": 43.87,
        "bertscore_f1": 92.42,
        "bleu_4": 13.9,
        "rouge_l": 46.15
      }
    },
    {
      "id": "ai2d_cap_test_41",
      "index": 41,
      "image": "746.png",
      "image_url": "images/746.png",
      "topic": "astronomy",
      "layout": "",
      "entities": [
        "earth",
        "sun"
      ],
      "entity_count": 2,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the Earth's position in four phases as it revolves around the sun.",
      "generated_caption": "A diagram showing 3D models of the Earth and Sun with bounding boxes.",
      "metrics": {
        "cider": 0.56,
        "bertscore_f1": 91.37,
        "bleu_4": 7.08,
        "rouge_l": 41.38
      }
    },
    {
      "id": "ai2d_cap_test_42",
      "index": 42,
      "image": "1430.png",
      "image_url": "images/1430.png",
      "topic": "astronomy",
      "layout": "",
      "entities": [
        "sun",
        "mercury",
        "earth",
        "mars",
        "jupiter",
        "venus",
        "uranus",
        "neptune",
        "saturn",
        "the planets and the sun"
      ],
      "entity_count": 10,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing all the planets in our solar system including the sun.",
      "generated_caption": "A diagram showing the solar system with planets and the sun.",
      "metrics": {
        "cider": 230.58,
        "bertscore_f1": 96.3,
        "bleu_4": 12.17,
        "rouge_l": 66.67
      }
    },
    {
      "id": "ai2d_cap_test_43",
      "index": 43,
      "image": "143.png",
      "image_url": "images/143.png",
      "topic": "astronomy",
      "layout": "",
      "entities": [
        "earth",
        "moon",
        "far tidal bulge",
        "near tidal bulge",
        "tidal bulge"
      ],
      "entity_count": 5,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing where the near and far tidal bulges occur on Earth. It also shows the moon and Earths gravitational attraction to it.",
      "generated_caption": "A diagram showing the gravitational effects of the moon on Earth's tides.",
      "metrics": {
        "cider": 7.28,
        "bertscore_f1": 92.74,
        "bleu_4": 4.39,
        "rouge_l": 37.84
      }
    },
    {
      "id": "ai2d_cap_test_44",
      "index": 44,
      "image": "2696.png",
      "image_url": "images/2696.png",
      "topic": "astronomy",
      "layout": "",
      "entities": [
        "moon",
        "earth",
        "first quarter",
        "waxing gibbous",
        "full moon",
        "waning crescent",
        "last quarter",
        "waning gibbous",
        "new moon",
        "waxing crescent",
        "the phases of the moon",
        "toward sun"
      ],
      "entity_count": 12,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the phases of the moon as it revolves around the earth, including waxing crescent, first quarter, waxing gibbous, full moon, waning crescent, last quarter, waning gibbous, and new moon. It also indicates the direction towards the sun.",
      "generated_caption": "A diagram showing 8 phases of the moon in a circular layout.",
      "metrics": {
        "cider": 0.0,
        "bertscore_f1": 88.51,
        "bleu_4": 2.97,
        "rouge_l": 26.92
      }
    },
    {
      "id": "ai2d_cap_test_45",
      "index": 45,
      "image": "442.png",
      "image_url": "images/442.png",
      "topic": "biology",
      "layout": "",
      "entities": [
        "egg",
        "larva",
        "pupa",
        "adult butterfly"
      ],
      "entity_count": 4,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the life cycle of a butterfly, going from an egg to larva to pupa to an adult butterfly and repeating.",
      "generated_caption": "A diagram showing 4 stages of the butterfly life cycle.",
      "metrics": {
        "cider": 6.15,
        "bertscore_f1": 90.86,
        "bleu_4": 3.52,
        "rouge_l": 36.36
      }
    },
    {
      "id": "ai2d_cap_test_46",
      "index": 46,
      "image": "836.png",
      "image_url": "images/836.png",
      "topic": "biology",
      "layout": "",
      "entities": [
        "adult beetle nymph",
        "eggs",
        "young beetle nymph",
        "later beetle nymph",
        "adult",
        "young nymph",
        "later nymph"
      ],
      "entity_count": 7,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the life cycle of a beetle, going from eggs, to young nymphs, to later nymphs, adults, and then repeating.",
      "generated_caption": "A diagram showing 6 stages of a beetle's life cycle",
      "metrics": {
        "cider": 3.74,
        "bertscore_f1": 89.87,
        "bleu_4": 4.62,
        "rouge_l": 36.36
      }
    },
    {
      "id": "ai2d_cap_test_47",
      "index": 47,
      "image": "1909.png",
      "image_url": "images/1909.png",
      "topic": "biology",
      "layout": "",
      "entities": [
        "tree",
        "giraffe",
        "lion",
        "rhino",
        "grass",
        "grasshopper",
        "bird",
        "skunk",
        "vulture",
        "mouse",
        "fox",
        "snake",
        "baboon",
        "cheetah",
        "antelope"
      ],
      "entity_count": 15,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing a food web of animals. A tree is consumed by a rhino and a giraffe, which are both consumed by a lion. Grass is consumed by the rhino, a grasshopper, and a mouse. The grasshopper is consumed by a bird an monkey, and the mouse is consumed by a cat which is consumed by a snake, which is also consumed by the monkey. The monkey and a antelope are consumed by a cheetah. The antelope consumes a bush. The bird is eaten by a skunk. The rhino, cheetah, and skunk, are eaten by a vulture.",
      "generated_caption": "A diagram showing 15 labeled bounding boxes with various animals and plants.",
      "metrics": {
        "cider": 0.0,
        "bertscore_f1": 83.46,
        "bleu_4": 0.01,
        "rouge_l": 9.09
      }
    },
    {
      "id": "ai2d_cap_test_48",
      "index": 48,
      "image": "2105.png",
      "image_url": "images/2105.png",
      "topic": "biology",
      "layout": "",
      "entities": [
        "plants",
        "snail",
        "woodlouse",
        "farwig",
        "millipede",
        "beetle larva",
        "ground beetle",
        "wolf spider",
        "farwing",
        "producers",
        "primary consumers",
        "secondary consumers",
        "tertiary consumers"
      ],
      "entity_count": 13,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing a food web with producers, primary consumers, secondary consumers, and tertiary consumers for the macroscopic ecosystems. The plants are consumed by snails, woodlouses, earwigs, and millipedes. Those are consumed by beetle larva and ground beetles, which are consumed by wolf spiders.",
      "generated_caption": "A diagram showing 4 trophic levels in an ecosystem",
      "metrics": {
        "cider": 0.0,
        "bertscore_f1": 84.47,
        "bleu_4": 0.24,
        "rouge_l": 15.09
      }
    },
    {
      "id": "ai2d_cap_test_49",
      "index": 49,
      "image": "1967.png",
      "image_url": "images/1967.png",
      "topic": "biology",
      "layout": "",
      "entities": [
        "bateria",
        "tree leaves",
        "heterocampa",
        "vireo",
        "hawk",
        "bacteria",
        "food chain"
      ],
      "entity_count": 7,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing a food chain, starting with bacteria, going to tree leaves, then a heterocampa, then a vireo, then hawk, and ending back with bacteria.",
      "generated_caption": "A diagram showing 2 food chains, one terrestrial and one aquatic.",
      "metrics": {
        "cider": 0.24,
        "bertscore_f1": 87.18,
        "bleu_4": 2.71,
        "rouge_l": 32.43
      }
    },
    {
      "id": "ai2d_cap_test_50",
      "index": 50,
      "image": "2030.png",
      "image_url": "images/2030.png",
      "topic": "biology",
      "layout": "",
      "entities": [
        "fox",
        "puffin",
        "salmon",
        "phytoplankton",
        "zooplankton",
        "cephalopod",
        "sand lance",
        "auklet",
        "gull",
        "rat",
        "kittiwake",
        "decomposers",
        "water and nutrients",
        "sun",
        "air"
      ],
      "entity_count": 15,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing a food web. The Fox eats the rat, the puffin, and the Kittiwake. The rat eats the Kittiwake and the gull. The gull eats the Kittiwake, the sand lance, and the auklet. The Kittiwake eats the sand lance. The puffin eats the salmon, the sand lance, and the Cephelepod. The salmon, sand lance, auklet, and Cephelepod eat zooplankton, which eat phytoplankton. The phytoplankton eat water, nutrients, sun, and air. Decomposers eat everything and produce nutrients.",
      "generated_caption": "A diagram showing 2 food chains, one terrestrial and one marine, with arrows indicating the flow of energy between organisms and the environment.",
      "metrics": {
        "cider": 0.0,
        "bertscore_f1": 82.7,
        "bleu_4": 0.53,
        "rouge_l": 15.84
      }
    },
    {
      "id": "ai2d_cap_test_51",
      "index": 51,
      "image": "589.png",
      "image_url": "images/589.png",
      "topic": "biology",
      "layout": "",
      "entities": [
        "eggs",
        "small ladybug larva",
        "medium ladybug larva",
        "large ladybug larva",
        "ladybug pupa",
        "large ladybug pupa",
        "adult ladybug",
        "two adult ladybug",
        "larva",
        "pupa",
        "adult"
      ],
      "entity_count": 11,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the life cycle of a ladybug, specifically focusing on the different stages from eggs to adult.",
      "generated_caption": "A diagram showing 8 stages of a ladybug's life cycle.",
      "metrics": {
        "cider": 12.37,
        "bertscore_f1": 94.51,
        "bleu_4": 5.81,
        "rouge_l": 40.0
      }
    },
    {
      "id": "ai2d_cap_test_52",
      "index": 52,
      "image": "510.png",
      "image_url": "images/510.png",
      "topic": "biology",
      "layout": "",
      "entities": [
        "plant",
        "beetle",
        "catfish",
        "hawk"
      ],
      "entity_count": 4,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing a food chain of a plant, to a beetle, to a catfish, to a hawk.",
      "generated_caption": "A diagram showing 4 components arranged in a layout.",
      "metrics": {
        "cider": 0.8,
        "bertscore_f1": 88.23,
        "bleu_4": 4.69,
        "rouge_l": 29.63
      }
    },
    {
      "id": "ai2d_cap_test_53",
      "index": 53,
      "image": "2047.png",
      "image_url": "images/2047.png",
      "topic": "biology",
      "layout": "",
      "entities": [
        "rotting log",
        "dead leaves",
        "dead animals",
        "maple tree leaves",
        "bracket fungus",
        "bacteria",
        "puffball",
        "pillbugs",
        "insect larvae",
        "cricket",
        "earthworm",
        "millipede",
        "robin",
        "alligator lizard",
        "cooper's hawk",
        "fox",
        "dead leaves (many species)",
        "dead animals (many species)",
        "bacteria, archaea (many species)",
        "insect larvae (maggots)",
        "food webs"
      ],
      "entity_count": 21,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing a food web in order of energy flow. Starting with a rotting log, dead leaves, dead animals, and maple tree leaves, they are eaten by bracket fungus, bacteria, puffballs, pilbugs, insect larvae, and crickets. Puffballs and bacteria are eaten by earth worms and millipedes. All the bugs are eaten by robins and alligator lizards, which are eaten by foxes. Robins can also be eaten by cooper's hawks.",
      "generated_caption": "A diagram showing 2 food webs with various organisms and elements of their environment.",
      "metrics": {
        "cider": 0.0,
        "bertscore_f1": 85.35,
        "bleu_4": 0.16,
        "rouge_l": 16.47
      }
    },
    {
      "id": "ai2d_cap_test_54",
      "index": 54,
      "image": "2324.png",
      "image_url": "images/2324.png",
      "topic": "biology",
      "layout": "",
      "entities": [
        "mealworm beetle larva",
        "mealworm beetle pupa",
        "mealworm beetle adult",
        "larva",
        "pupa",
        "adult",
        "egg",
        "mealworm beetle life cycle"
      ],
      "entity_count": 8,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the life cycle of a mealworm, indicating the different stages from egg to larva, to pupa, to adult and then repeating.",
      "generated_caption": "A diagram showing the life cycle of a mealworm beetle.",
      "metrics": {
        "cider": 7.9,
        "bertscore_f1": 92.2,
        "bleu_4": 18.74,
        "rouge_l": 52.94
      }
    },
    {
      "id": "ai2d_cap_test_55",
      "index": 55,
      "image": "815.png",
      "image_url": "images/815.png",
      "topic": "biology",
      "layout": "",
      "entities": [
        "grass",
        "mouse",
        "snake",
        "grasshopper",
        "bird"
      ],
      "entity_count": 5,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing a food chain. Grass is eaten by a mouse and a grasshopper. The mouse is eaten by a snake and the grasshopper is a eaten by a bird.",
      "generated_caption": "A diagram showing 5 components arranged in a layout",
      "metrics": {
        "cider": 0.0,
        "bertscore_f1": 86.51,
        "bleu_4": 1.11,
        "rouge_l": 20.0
      }
    },
    {
      "id": "ai2d_cap_test_56",
      "index": 56,
      "image": "2392.png",
      "image_url": "images/2392.png",
      "topic": "biology",
      "layout": "",
      "entities": [
        "plant",
        "fish",
        "fish food",
        "sand",
        "plants",
        "fish waste",
        "biofilter cycle",
        "ammonia (nh3)",
        "nitrosopira (needed)",
        "nitrite (no2)",
        "nitrobacter nitrospira (needed)",
        "nirate (no3)",
        "water change"
      ],
      "entity_count": 13,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the biofilter cycle, which is the process by which fish waste and food are transformed and filtered. The cycle includes fish waste and food being turned into ammonia, then nitrosopira, then nitrite (NO2), then nitrobacter, and finally nitrate (NO3). Plants then can absorb the nitrate or the nitrate goes into the water.",
      "generated_caption": "A diagram showing the components of an aquarium ecosystem and the biofilter cycle.",
      "metrics": {
        "cider": 0.0,
        "bertscore_f1": 87.38,
        "bleu_4": 0.94,
        "rouge_l": 20.59
      }
    },
    {
      "id": "ai2d_cap_test_57",
      "index": 57,
      "image": "2163.png",
      "image_url": "images/2163.png",
      "topic": "biology",
      "layout": "",
      "entities": [
        "dog",
        "eggs",
        "larvae",
        "pupae",
        "adult flee",
        "flea life cycle",
        "adults",
        "hatch in 2 - 3 days",
        "go through 3 stages in 5 - 10 days before pupating",
        "live from 5 - 10 days to 6 months in a cocoon",
        "emerge and live on 1 host for up to 2 months"
      ],
      "entity_count": 11,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing the life cycle of a flea, from egg to adult, indicating how long it spends in each stage. It starts from an egg that hatches in 2-3 days. Then to a larvae that pupates in 5-10 days, then to a pupae for 5-10 days and then an adult that can live for 2 months when in a host. Then the adult can go to a host like a dog and lay more eggs to repeat the cycle.",
      "generated_caption": "A diagram showing the life cycle of a flea.",
      "metrics": {
        "cider": 0.0,
        "bertscore_f1": 88.92,
        "bleu_4": 0.03,
        "rouge_l": 19.57
      }
    },
    {
      "id": "ai2d_cap_test_58",
      "index": 58,
      "image": "880.png",
      "image_url": "images/880.png",
      "topic": "biology",
      "layout": "",
      "entities": [
        "grass",
        "ants",
        "lizard",
        "rattlesnake",
        "fungus",
        "producer",
        "consumers",
        "decomposer",
        "herbivore",
        "carnivore"
      ],
      "entity_count": 10,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing a food web which labels the producers, decomposers, and consumers. Grass is consumed by ants, which are consumed by a lizard, which is consumed by a rattlesnake. Everything is consumed by a fungus.",
      "generated_caption": "A diagram showing 2 food chains, one terrestrial and one aquatic, with various organisms and their roles in the ecosystem.",
      "metrics": {
        "cider": 0.08,
        "bertscore_f1": 86.43,
        "bleu_4": 2.55,
        "rouge_l": 17.86
      }
    },
    {
      "id": "ai2d_cap_test_59",
      "index": 59,
      "image": "237.png",
      "image_url": "images/237.png",
      "topic": "biology",
      "layout": "",
      "entities": [
        "corn",
        "mouse",
        "owl",
        "carrots",
        "rabbit",
        "fox",
        "lion",
        "grass",
        "grasshopper",
        "frog",
        "snake",
        "hawk"
      ],
      "entity_count": 12,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing three food chains. The first one is corn, to a mouse, to an owl. The second one is a carrot to a rabbit, to a fox, to a lion. The third one is grass, to a grasshopper, to a frog, to a snake, to a hawk.",
      "generated_caption": "A diagram showing 12 components arranged in a layout.",
      "metrics": {
        "cider": 0.0,
        "bertscore_f1": 84.5,
        "bleu_4": 0.15,
        "rouge_l": 13.79
      }
    },
    {
      "id": "ai2d_cap_test_60",
      "index": 60,
      "image": "210.png",
      "image_url": "images/210.png",
      "topic": "engineering",
      "layout": "",
      "entities": [
        "motor",
        "switch schematic",
        "battery",
        "switch"
      ],
      "entity_count": 4,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing a simple circuit with a switch and a motor connected to a battery.",
      "generated_caption": "A diagram showing 2 simple electrical circuits with a battery, switch, and motor.",
      "metrics": {
        "cider": 26.13,
        "bertscore_f1": 96.6,
        "bleu_4": 8.35,
        "rouge_l": 68.97
      }
    },
    {
      "id": "ai2d_cap_test_61",
      "index": 61,
      "image": "1568.png",
      "image_url": "images/1568.png",
      "topic": "engineering",
      "layout": "",
      "entities": [
        "battery",
        "switch",
        "light bulb",
        "bulb",
        "pictorial drawing of a parallel circuit"
      ],
      "entity_count": 5,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing a parallel circuit with a battery, a switch, and a three light bulbs which are in parallel.",
      "generated_caption": "A diagram showing a parallel circuit with a battery, switch, and two light bulbs.",
      "metrics": {
        "cider": 229.85,
        "bertscore_f1": 97.23,
        "bleu_4": 42.94,
        "rouge_l": 76.47
      }
    },
    {
      "id": "ai2d_cap_test_62",
      "index": 62,
      "image": "4440.png",
      "image_url": "images/4440.png",
      "topic": "engineering",
      "layout": "",
      "entities": [
        "lever",
        "inclined plane",
        "wedge",
        "pulley",
        "wheel and axle",
        "screw",
        "simple machines"
      ],
      "entity_count": 7,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing some Simple Machines, including a lever, inclined plane, wedge, pulley, wheel and axle, and screw.",
      "generated_caption": "A diagram showing 6 simple machines",
      "metrics": {
        "cider": 0.0,
        "bertscore_f1": 90.49,
        "bleu_4": 2.94,
        "rouge_l": 41.67
      }
    },
    {
      "id": "ai2d_cap_test_63",
      "index": 63,
      "image": "1559.png",
      "image_url": "images/1559.png",
      "topic": "engineering",
      "layout": "",
      "entities": [
        "battery",
        "light bulb",
        "electron flow",
        "conventional current flow"
      ],
      "entity_count": 4,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing a circuit with a light bulb connected to a battery on both ends. It also indicates the conventional current flow and electron flow directions.",
      "generated_caption": "A diagram showing 2 types of current flow in a simple electrical circuit",
      "metrics": {
        "cider": 7.55,
        "bertscore_f1": 91.14,
        "bleu_4": 3.58,
        "rouge_l": 25.0
      }
    },
    {
      "id": "ai2d_cap_test_64",
      "index": 64,
      "image": "214.png",
      "image_url": "images/214.png",
      "topic": "engineering",
      "layout": "",
      "entities": [
        "battery",
        "switch",
        "light",
        "electrochemical cell (battery)",
        "conducting lead (metal wire)",
        "switch (open)",
        "light globe"
      ],
      "entity_count": 7,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing a simple electronic circuit with a light globe, battery, and an open switch.",
      "generated_caption": "A diagram showing 2 simple circuits with a battery and a light globe.",
      "metrics": {
        "cider": 40.32,
        "bertscore_f1": 96.23,
        "bleu_4": 9.55,
        "rouge_l": 62.07
      }
    },
    {
      "id": "ai2d_cap_test_65",
      "index": 65,
      "image": "645.png",
      "image_url": "images/645.png",
      "topic": "engineering",
      "layout": "",
      "entities": [
        "battery",
        "fuse schematic",
        "switch schematic",
        "light bulb schematic",
        "battery/source",
        "fuse",
        "switch",
        "light bulb/load"
      ],
      "entity_count": 8,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing a basic circuit schematic with various components, including a switch, a fuse, a light bulb, and a battery.",
      "generated_caption": "A diagram showing 2 simple electrical circuits with components arranged in a layout.",
      "metrics": {
        "cider": 1.48,
        "bertscore_f1": 91.7,
        "bleu_4": 4.72,
        "rouge_l": 41.18
      }
    },
    {
      "id": "ai2d_cap_test_66",
      "index": 66,
      "image": "234.png",
      "image_url": "images/234.png",
      "topic": "engineering",
      "layout": "",
      "entities": [
        "switch",
        "copper wire coil",
        "battery",
        "switch made out of wood, copper screws and copper plate",
        "steel bolt with copper wire wound up on it several times",
        "copper connection wires"
      ],
      "entity_count": 6,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing a circuit with a switch made of wood and metal, a copper wire coil, and a battery all connected together.",
      "generated_caption": "A diagram showing 2 types of electromagnets",
      "metrics": {
        "cider": 0.03,
        "bertscore_f1": 89.11,
        "bleu_4": 1.79,
        "rouge_l": 26.67
      }
    },
    {
      "id": "ai2d_cap_test_67",
      "index": 67,
      "image": "2951.png",
      "image_url": "images/2951.png",
      "topic": "engineering",
      "layout": "",
      "entities": [
        "wedge",
        "wheel and axel",
        "lever",
        "inclined plane",
        "screw",
        "pulley",
        "simple machines"
      ],
      "entity_count": 7,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing various simple machines in a row, including a wedge, wheel and axle, lever, inclined plane, screw, and pulley.",
      "generated_caption": "A diagram showing 6 simple machines",
      "metrics": {
        "cider": 4.63,
        "bertscore_f1": 90.8,
        "bleu_4": 2.09,
        "rouge_l": 37.04
      }
    },
    {
      "id": "ai2d_cap_test_68",
      "index": 68,
      "image": "228.png",
      "image_url": "images/228.png",
      "topic": "engineering",
      "layout": "",
      "entities": [
        "battery schematic",
        "light bulb schematic",
        "switch schematic",
        "battery",
        "light bulb",
        "switch"
      ],
      "entity_count": 6,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing a simple electronic circuit schematic with a battery, a switch, and a light bulb.",
      "generated_caption": "A diagram showing 2 simple circuits with a battery, light bulb, and switch.",
      "metrics": {
        "cider": 70.28,
        "bertscore_f1": 97.7,
        "bleu_4": 10.52,
        "rouge_l": 66.67
      }
    },
    {
      "id": "ai2d_cap_test_69",
      "index": 69,
      "image": "1606.png",
      "image_url": "images/1606.png",
      "topic": "engineering",
      "layout": "",
      "entities": [
        "voltmeter schematic",
        "battery",
        "voltmeter reads \"+3 volts\"",
        "3v",
        "test electrode",
        "reference electrode"
      ],
      "entity_count": 6,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing a voltmeter and a battery connected in a circuit. The voltmeter reads 3 volts and the test electrode and reference electrode are labeled on each end of the battery.",
      "generated_caption": "A diagram showing 3 types of voltmeter schematics",
      "metrics": {
        "cider": 0.03,
        "bertscore_f1": 89.19,
        "bleu_4": 0.81,
        "rouge_l": 25.0
      }
    },
    {
      "id": "ai2d_cap_test_70",
      "index": 70,
      "image": "1547.png",
      "image_url": "images/1547.png",
      "topic": "engineering",
      "layout": "",
      "entities": [
        "battery schematic",
        "resistor schematic",
        "battery",
        "R",
        "r = resistor (such as a lightbulb)",
        "parallel circuit"
      ],
      "entity_count": 6,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing a parallel circuit schematic with a battery and four resistors.",
      "generated_caption": "A diagram showing 2 types of electrical circuits: series and parallel.",
      "metrics": {
        "cider": 0.11,
        "bertscore_f1": 91.88,
        "bleu_4": 8.36,
        "rouge_l": 41.67
      }
    },
    {
      "id": "ai2d_cap_test_71",
      "index": 71,
      "image": "1592.png",
      "image_url": "images/1592.png",
      "topic": "engineering",
      "layout": "",
      "entities": [
        "battery schematic",
        "resistor schematic",
        "switch schematic",
        "battery",
        "R",
        "switch"
      ],
      "entity_count": 6,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing schematic diagram with a battery, a switch, and a resistor all connected in series.",
      "generated_caption": "A diagram showing 2 simple electrical circuits with a battery, resistor, and switch.",
      "metrics": {
        "cider": 36.32,
        "bertscore_f1": 94.82,
        "bleu_4": 9.88,
        "rouge_l": 46.67
      }
    },
    {
      "id": "ai2d_cap_test_72",
      "index": 72,
      "image": "217.png",
      "image_url": "images/217.png",
      "topic": "engineering",
      "layout": "",
      "entities": [
        "battery",
        "light bulb",
        "bulbs",
        "copper wire",
        "series circuit"
      ],
      "entity_count": 5,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing a series circuit with a battery and two bulbs.",
      "generated_caption": "A diagram showing 2 simple circuits with a battery and three light bulbs.",
      "metrics": {
        "cider": 165.94,
        "bertscore_f1": 96.97,
        "bleu_4": 28.92,
        "rouge_l": 72.0
      }
    },
    {
      "id": "ai2d_cap_test_73",
      "index": 73,
      "image": "213.png",
      "image_url": "images/213.png",
      "topic": "engineering",
      "layout": "",
      "entities": [
        "light bulb",
        "battery"
      ],
      "entity_count": 2,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing a battery connected to a light bulb. It also indicates where the positive and negative ends of the battery are.",
      "generated_caption": "A diagram showing 2 simple circuits with a battery and a light bulb.",
      "metrics": {
        "cider": 29.44,
        "bertscore_f1": 92.49,
        "bleu_4": 7.01,
        "rouge_l": 44.44
      }
    },
    {
      "id": "ai2d_cap_test_74",
      "index": 74,
      "image": "1571.png",
      "image_url": "images/1571.png",
      "topic": "engineering",
      "layout": "",
      "entities": [
        "battery",
        "light bulb",
        "1.5 v"
      ],
      "entity_count": 3,
      "relationships": [],
      "relationship_count": 0,
      "gt_caption": "A diagram showing a light bulb that is connected to a battery with a voltage of 1.5 V.",
      "generated_caption": "A diagram showing 3 simple circuits with a battery and a light bulb",
      "metrics": {
        "cider": 80.37,
        "bertscore_f1": 93.39,
        "bleu_4": 10.78,
        "rouge_l": 37.5
      }
    }
  ]
};
