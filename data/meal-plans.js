/**
 * 四阶段 7 日轮换菜单
 * meals 中的 name 与 recipes.js 的 name 精确对应，点击可跳转菜谱详情
 */

const MEAL_PLANS = [
  /* ============ 6-8 月龄：两餐 ============ */
  {
    stageId: '6-8',
    columns: ['第一餐', '第二餐'],
    note: '母乳或配方奶继续正常喂。质地以泥、厚糊、逐渐带一点细小颗粒为主。',
    days: [
      { day: 1, meals: [
        { name: '牛肉南瓜强化铁米糊', sources: ['A', 'B', 'C'] },
        { name: '西兰花土豆泥', sources: ['B', 'C'] }
      ]},
      { day: 2, meals: [
        { name: '鸡蛋燕麦糊', sources: ['A', 'B', 'C', 'D'] },
        { name: '苹果胡萝卜泥', sources: ['B', 'C'] }
      ]},
      { day: 3, meals: [
        { name: '三文鱼土豆泥', sources: ['A', 'B', 'C', 'D'] },
        { name: '南瓜小米糊', sources: ['A', 'B', 'C'] }
      ]},
      { day: 4, meals: [
        { name: '鸡肉西葫芦米糊', sources: ['A', 'B', 'C'] },
        { name: '梨泥 + 原味全脂酸奶', sources: ['B', 'D'] }
      ]},
      { day: 5, meals: [
        { name: '猪瘦肉菠菜粥泥', sources: ['A', 'B', 'C'] },
        { name: '牛油果香蕉泥', sources: ['B', 'C'] }
      ]},
      { day: 6, meals: [
        { name: '豆腐番茄燕麦糊', sources: ['B', 'C', 'D'] },
        { name: '花生香蕉米糊', sources: ['B', 'C', 'D'] }
      ]},
      { day: 7, meals: [
        { name: '蛋黄/全蛋南瓜泥', sources: ['A', 'B', 'C', 'D'] },
        { name: '牛肉西兰花土豆泥', sources: ['A', 'B', 'C'] }
      ]}
    ],
    allergenNote: '酸奶、花生属于常见过敏原，第一次吃时少量尝试。AAP 认为没有必要为了预防过敏而把鸡蛋、花生、奶制品等故意推迟很久；严重湿疹、已有鸡蛋过敏或曾出现即时食物过敏反应的宝宝，首次引入花生前建议咨询儿科医生。'
  },

  /* ============ 9-11 月龄：三餐 ============ */
  {
    stageId: '9-11',
    columns: ['早餐', '午餐', '晚餐'],
    note: '逐渐使用：粗泥 → 碎末 → 很软的小颗粒 → 容易捏碎的手指食物。WHO 建议 9—23 月龄通常安排每天 3—4 次辅食。',
    days: [
      { day: 1, meals: [
        { name: '香蕉鸡蛋燕麦粥', sources: ['B', 'D'] },
        { name: '牛肉番茄软饭', sources: ['A', 'B', 'C'] },
        { name: '西兰花豆腐粥', sources: ['B', 'C'] }
      ]},
      { day: 2, meals: [
        { name: '南瓜小米粥 + 蒸鸡蛋', sources: ['A', 'B'] },
        { name: '三文鱼西兰花土豆碎', sources: ['A', 'B', 'C'] },
        { name: '鸡肉胡萝卜面', sources: ['A', 'B', 'C'] }
      ]},
      { day: 3, meals: [
        { name: '原味酸奶 + 软香蕉 + 燕麦', sources: ['B', 'D'] },
        { name: '猪肉菠菜软饭', sources: ['A', 'B'] },
        { name: '番茄豆腐蛋羹', sources: ['B', 'D'] }
      ]},
      { day: 4, meals: [
        { name: '花生香蕉燕麦糊', sources: ['B', 'D'] },
        { name: '鸡肉南瓜软饭', sources: ['A', 'B'] },
        { name: '鲈鱼豆腐蔬菜粥', sources: ['A', 'B', 'C'] }
      ]},
      { day: 5, meals: [
        { name: '鸡蛋牛油果软吐司条', sources: ['B', 'C', 'D'] },
        { name: '牛肉西兰花小米饭', sources: ['A', 'B'] },
        { name: '蘑菇鸡肉碎面', sources: ['A', 'B'] }
      ]},
      { day: 6, meals: [
        { name: '芝麻酱香蕉燕麦粥', sources: ['B', 'D'] },
        { name: '虾仁番茄软面', sources: ['B', 'C', 'D'] },
        { name: '豆腐南瓜粥', sources: ['B'] }
      ]},
      { day: 7, meals: [
        { name: '鸡蛋蔬菜粥', sources: ['A', 'B'] },
        { name: '牛肉土豆胡萝卜炖碎', sources: ['A', 'B', 'C'] },
        { name: '三文鱼菠菜软饭', sources: ['A', 'B', 'C'] }
      ]}
    ],
    allergenNote: '面包需要足够柔软，避免坚硬外壳和大块黏成团，根据宝宝进食能力处理。防噎原则参照 CDC。'
  },

  /* ============ 12-23 月龄：三餐 + 加餐 ============ */
  {
    stageId: '12-23',
    columns: ['早餐', '加餐', '午餐', '晚餐'],
    note: '满 1 岁后可逐渐建立规律早、午、晚餐，另加 1—2 次营养加餐；继续母乳喂养也完全可以。WHO 建议保持动物性食物、蔬果、豆类等多样化组合。',
    days: [
      { day: 1, meals: [
        { name: '番茄鸡蛋燕麦粥', sources: ['A', 'B', 'D'] },
        { name: '原味酸奶 + 蓝莓碎', sources: ['B', 'C'] },
        { name: '牛肉西兰花软饭', sources: ['A', 'B'] },
        { name: '三文鱼土豆饼 + 小白菜', sources: ['A', 'B', 'C', 'D'] }
      ]},
      { day: 2, meals: [
        { name: '南瓜小米粥 + 蒸鸡蛋', sources: ['A', 'B', 'D'] },
        { name: '香蕉 + 原味全脂酸奶', sources: ['B'] },
        { name: '鸡肉香菇软面', sources: ['A', 'B', 'C'] },
        { name: '豆腐猪肉小丸子 + 番茄软饭', sources: ['A', 'B', 'C'] }
      ]},
      { day: 3, meals: [
        { name: '花生酱香蕉燕麦粥', sources: ['B', 'D'] },
        { name: '软梨块', sources: ['B', 'C'] },
        { name: '鲈鱼豆腐白菜饭', sources: ['A', 'B', 'C'] },
        { name: '牛肉番茄土豆炖饭', sources: ['A', 'B'] }
      ]},
      { day: 4, meals: [
        { name: '鸡蛋菠菜面', sources: ['A', 'B', 'D'] },
        { name: '原味酸奶 + 猕猴桃', sources: ['B', 'D'] },
        { name: '虾仁西葫芦软饭', sources: ['B', 'C', 'D'] },
        { name: '鸡肉南瓜小米粥 + 西兰花', sources: ['A', 'B'] }
      ]},
      { day: 5, meals: [
        { name: '芝麻酱香蕉软吐司 + 牛奶', sources: ['B', 'D'] },
        { name: '牛油果', sources: ['B'] },
        { name: '猪肉白菜豆腐饺子', sources: ['A', 'B', 'C'] },
        { name: '三文鱼番茄软面', sources: ['A', 'B', 'C'] }
      ]},
      { day: 6, meals: [
        { name: '鸡蛋蔬菜软饼', sources: ['A', 'B', 'C', 'D'] },
        { name: '原味酸奶 + 草莓小块', sources: ['B', 'C'] },
        { name: '牛肉蘑菇炖饭', sources: ['A', 'B'] },
        { name: '豆腐虾仁南瓜粥', sources: ['B', 'D'] }
      ]},
      { day: 7, meals: [
        { name: '燕麦香蕉鸡蛋软饼', sources: ['A', 'B', 'D'] },
        { name: '梨 + 酸奶', sources: ['B'] },
        { name: '鸡肉胡萝卜西兰花焖饭', sources: ['A', 'B'] },
        { name: '鱼肉豆腐蔬菜汤面', sources: ['A', 'B', 'C'] }
      ]}
    ],
    allergenNote: '丸子做成很小、很软、容易用舌头和牙龈压碎的形态；饺子皮不要太厚、馅剁碎、少盐、煮得充分柔软、切成适合吞咽的小块。'
  },

  /* ============ 24-36 月龄：三餐 + 加餐 ============ */
  {
    stageId: '24-36',
    columns: ['早餐', '午餐', '晚餐'],
    note: '3 次正餐 + 2 次小加餐。强调食物多样、规律就餐、每天饮奶、合理选择零食、清淡烹饪。',
    days: [
      { day: 1, meals: [
        { name: '牛奶 + 鸡蛋番茄面 + 香蕉', sources: ['E'] },
        { name: '牛肉西兰花饭 + 豆腐汤', sources: ['A', 'B', 'E'] },
        { name: '三文鱼土豆泥 + 炒软青菜 + 米饭', sources: ['B', 'E'] }
      ]},
      { day: 2, meals: [
        { name: '燕麦牛奶粥 + 鸡蛋 + 蓝莓', sources: ['E'] },
        { name: '鸡腿肉南瓜焖饭 + 西葫芦', sources: ['B', 'E'] },
        { name: '番茄虾仁面 + 豆腐', sources: ['B', 'D', 'E'] }
      ]},
      { day: 3, meals: [
        { name: '原味酸奶 + 燕麦 + 香蕉 + 芝麻酱', sources: ['B', 'D', 'E'] },
        { name: '猪肉白菜饺子 + 西兰花', sources: ['A', 'E'] },
        { name: '鲈鱼软饭 + 番茄炒蛋', sources: ['B', 'D', 'E'] }
      ]},
      { day: 4, meals: [
        { name: '牛奶 + 鸡蛋蔬菜软饼 + 梨', sources: ['E'] },
        { name: '牛肉番茄土豆饭 + 青菜', sources: ['A', 'B', 'E'] },
        { name: '鸡肉香菇面 + 豆腐', sources: ['B', 'E'] }
      ]},
      { day: 5, meals: [
        { name: '小米南瓜粥 + 鸡蛋 + 猕猴桃', sources: ['B', 'E'] },
        { name: '三文鱼西兰花意面', sources: ['B', 'E'] },
        { name: '猪肉豆腐丸 + 米饭 + 小白菜', sources: ['B', 'C', 'E'] }
      ]},
      { day: 6, meals: [
        { name: '牛奶 + 花生酱香蕉吐司 + 鸡蛋', sources: ['D', 'E'] },
        { name: '虾仁鸡蛋蔬菜饭', sources: ['B', 'D', 'E'] },
        { name: '牛肉蘑菇炖饭 + 南瓜', sources: ['B', 'E'] }
      ]},
      { day: 7, meals: [
        { name: '酸奶燕麦水果碗 + 鸡蛋', sources: ['B', 'E'] },
        { name: '鸡肉胡萝卜土豆炖饭', sources: ['B', 'E'] },
        { name: '鱼肉豆腐汤 + 米饭 + 菠菜', sources: ['B', 'E'] }
      ]}
    ],
    allergenNote: '',
    snacks: [
      { name: '原味酸奶', sources: ['B', 'E'] },
      { name: '牛奶（1 岁以后）', sources: ['E'] },
      { name: '香蕉', sources: ['B'] },
      { name: '梨', sources: ['B'] },
      { name: '猕猴桃', sources: ['B'] },
      { name: '蓝莓（切成安全大小）', sources: ['B', 'C'] },
      { name: '牛油果', sources: ['B'] },
      { name: '蒸红薯', sources: ['B'] },
      { name: '玉米 / 南瓜软饼', sources: ['E'] },
      { name: '芝麻酱拌酸奶', sources: ['B', 'D'] },
      { name: '稀薄花生酱抹软吐司', sources: ['D'] },
      { name: '坚果磨粉加入酸奶 / 粥', sources: ['B', 'C', 'D'] }
    ],
    snackNote: '每天两次加餐，任选两种。2—3 岁依然需要警惕整粒坚果、整颗葡萄、小番茄、硬糖、爆米花、大块硬苹果/胡萝卜以及其他圆硬食物。CDC 和 AAP 均强调此类食物的窒息风险。'
  }
];
