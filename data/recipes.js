/**
 * 菜谱数据（以四阶段 7 日菜单为准）
 * 每道菜五段完整 + sources 权威依据标注
 * name 与 meal-plans.js 精确对应，供菜单跳转
 */

const RECIPES = [
  /* ==================== 6-8 月龄 ==================== */
  {
    id: 'beef-pumpkin-cereal', name: '牛肉南瓜强化铁米糊', emoji: '🐮',
    ageMin: 6, ageMax: 8, texture: '细腻泥糊，顺滑可挂勺',
    category: '主食', time: 25, serving: '初期 1-2 小勺，逐渐加到 1 小碗（约 50ml）',
    nutrients: ['补铁', '补维A', '高蛋白'],
    allergens: [], sources: ['A', 'B', 'C'],
    why: '这是把「富铁」落到实处的黄金组合：牛肉提供血红素铁，南瓜补 β-胡萝卜素（转维 A），强化铁米粉补铁又易调质地。中国指南明确把富铁泥糊状食物作为辅食起点，并重视动物性食物。',
    ingredients: [
      { name: '牛里脊', amount: '一小块（约 20g）' },
      { name: '南瓜', amount: '一小块（约 30g）' },
      { name: '铁强化婴儿米粉', amount: '1 平勺' },
      { name: '母乳 / 配方奶 / 温水', amount: '适量' }
    ],
    tools: ['蒸锅', '辅食机', '碗'],
    steps: [
      { text: '牛肉彻底煮熟，去筋剁成小块。', tip: '牛肉必须全熟、无血水。' },
      { text: '南瓜蒸软，去皮去籽。', tip: '筷子能戳穿即熟。' },
      { text: '牛肉打成细腻肉泥，和南瓜泥混合。', tip: '加少许水打更细腻。' },
      { text: '强化铁米粉按包装说明冲调。', tip: '用 70℃ 温水，调到能挂勺。' },
      { text: '把少量牛肉南瓜泥拌入米糊。', tip: '初期保持顺滑，适应后逐渐加稠。' }
    ],
    cautions: ['必须用「强化铁」米粉，不是普通米粉。', '牛肉一定彻底煮熟、去净筋膜。', '从少量开始，观察 2-3 天再加新食材。']
  },

  {
    id: 'broccoli-potato-puree', name: '西兰花土豆泥', emoji: '🥦',
    ageMin: 6, ageMax: 8, texture: '细腻泥状',
    category: '蔬果', time: 20, serving: '一次 2-3 勺',
    nutrients: ['补维C', '补钙', '补膳食纤维'],
    allergens: [], sources: ['B', 'C'],
    why: '西兰花的维 C、维 K、叶酸和钙含量在蔬菜中领先，土豆质地绵密能中和西兰花的青草味。WHO 建议每天安排蔬菜水果，这道帮助宝宝建立对绿色蔬菜的接受度。',
    ingredients: [
      { name: '西兰花', amount: '2-3 朵小花球' },
      { name: '土豆', amount: '半个' },
      { name: '温水', amount: '少许' }
    ],
    tools: ['蒸锅', '辅食机'],
    steps: [
      { text: '西兰花只取顶端花球，去粗梗。', tip: '粗梗纤维多，不给宝宝。' },
      { text: '西兰花淡盐水泡 10 分钟冲净。', tip: '去小虫和农残。' },
      { text: '土豆去皮切块，和西兰花一起蒸 15 分钟。', tip: '蒸到西兰花一掐就碎。' },
      { text: '加温水打成泥。', tip: '土豆:西兰花约 2:1，绿味不冲。' }
    ],
    cautions: ['西兰花只取花球，不要粗梗。', '蒸过头会变黄、营养流失。', 'CDC：初期保持泥糊顺滑。']
  },

  {
    id: 'egg-oat-porridge', name: '鸡蛋燕麦糊', emoji: '🥚',
    ageMin: 6, ageMax: 9, texture: '细腻糊状',
    category: '主食', time: 15, serving: '从 1/4 蛋黄开始，逐渐加量',
    nutrients: ['补铁', '补DHA', '补膳食纤维'],
    allergens: ['蛋'], sources: ['A', 'B', 'C', 'D'],
    why: '蛋黄含卵磷脂、胆碱和铁，燕麦提供 β-葡聚糖助消化。鸡蛋是八大过敏原，AAP 建议具备辅食能力后尽早引入而非推迟，能降低日后过敏风险。',
    ingredients: [
      { name: '鸡蛋', amount: '1 个（先用蛋黄）' },
      { name: '原味燕麦片', amount: '1 勺' },
      { name: '母乳 / 配方奶 / 温水', amount: '适量' }
    ],
    tools: ['小锅', '碗'],
    steps: [
      { text: '鸡蛋冷水下锅，水开煮 10 分钟至全熟。', tip: '宝宝必须吃全熟蛋。' },
      { text: '取 1/4 个蛋黄压碎。', tip: '首次只给 1/4，观察过敏。' },
      { text: '燕麦片煮到完全软烂。', tip: '选原味燕麦，不是含糖速溶。' },
      { text: '蛋黄拌入燕麦糊调匀。', tip: '用奶或温水调稀。' }
    ],
    cautions: ['首次从 1/4 蛋黄开始，观察 2-3 天。', '蛋白 8 月龄后再单独引入。', '燕麦煮到无颗粒、完全软烂。']
  },

  {
    id: 'apple-carrot-puree', name: '苹果胡萝卜泥', emoji: '🍎',
    ageMin: 6, ageMax: 8, texture: '细腻泥状',
    category: '蔬果', time: 15, serving: '一次 1-2 勺（约 20-30g）',
    nutrients: ['补维A', '补维C', '补膳食纤维'],
    allergens: [], sources: ['B', 'C'],
    why: '胡萝卜补 β-胡萝卜素（转维 A），苹果蒸熟后含果胶助消化。两种都是低过敏食材，甜味温和，是这个阶段安全的水果蔬菜入门组合。',
    ingredients: [
      { name: '苹果', amount: '半个' },
      { name: '胡萝卜', amount: '一小段' },
      { name: '温水', amount: '少许' }
    ],
    tools: ['蒸锅', '辅食机'],
    steps: [
      { text: '苹果去皮去核切块，胡萝卜去皮切块。', tip: '都切小一点。' },
      { text: '上锅蒸 12 分钟至软。', tip: '筷子能戳穿即可。' },
      { text: '加少许温水打成泥。', tip: '两者比例约 1:1。' }
    ],
    cautions: ['苹果和生胡萝卜是窒息高危，必须蒸软打成泥。', '胡萝卜维 A 脂溶性，可加 1 滴油帮助吸收。', '现做现吃，冷藏不超过 24 小时。']
  },

  {
    id: 'salmon-potato-puree', name: '三文鱼土豆泥', emoji: '🐟',
    ageMin: 6, ageMax: 9, texture: '细腻泥状',
    category: '鱼虾', time: 20, serving: '一次 2-3 勺（约 30g）',
    nutrients: ['补DHA', '高蛋白', '补碘'],
    allergens: ['鱼'], sources: ['A', 'B', 'C', 'D'],
    why: '三文鱼是 DHA 最丰富的食材之一，DHA 是大脑和视网膜发育的关键结构脂肪。WHO 建议每天安排肉鱼蛋等动物性食物；CDC 强调鱼类彻底去骨去刺。',
    ingredients: [
      { name: '三文鱼', amount: '20g' },
      { name: '土豆', amount: '半个' },
      { name: '西兰花', amount: '少量' }
    ],
    tools: ['蒸锅', '辅食机'],
    steps: [
      { text: '三文鱼彻底蒸熟。', tip: '蒸到肉质变白易碎。' },
      { text: '极仔细检查鱼刺，逐根挑净。', tip: '用手指反复捻，确保无刺。' },
      { text: '土豆、西兰花蒸到叉子轻压即碎。', tip: '西兰花取花球。' },
      { text: '全部压成泥混合。', tip: '根据宝宝吞咽能力调节粗细。' }
    ],
    cautions: ['三文鱼务必逐根挑净鱼刺。', '首次吃鱼少量试，观察 2-3 天。', '选低汞鱼：三文鱼、鳕鱼、鲈鱼。']
  },

  {
    id: 'pumpkin-millet-puree', name: '南瓜小米糊', emoji: '🎃',
    ageMin: 6, ageMax: 9, texture: '细腻糊状',
    category: '主食', time: 20, serving: '一次 1 小碗（约 50ml）',
    nutrients: ['补维A', '补膳食纤维', '易消化'],
    allergens: [], sources: ['A', 'B', 'C'],
    why: '小米是温和易消化的谷物，南瓜补 β-胡萝卜素。中国指南强调及时增加食物多样性，小米让宝宝接触大米之外的谷物。',
    ingredients: [
      { name: '小米', amount: '1 勺' },
      { name: '南瓜', amount: '一小块' },
      { name: '清水', amount: '适量' }
    ],
    tools: ['小锅', '辅食机'],
    steps: [
      { text: '小米淘洗后加 8 倍水煮开，转小火。', tip: '小米易煮烂出稠。' },
      { text: '南瓜去皮蒸软压泥。', tip: '蒸 15 分钟。' },
      { text: '小米煮到软烂，加南瓜泥搅匀。', tip: '初期可打成细腻糊。' },
      { text: '放温后喂。', tip: '不加糖，南瓜自带甜味。' }
    ],
    cautions: ['小米要煮到完全软烂、无颗粒感。', '第一次吃小米少量试。', 'CDC：初期保持泥糊状。']
  },

  {
    id: 'chicken-zucchini-cereal', name: '鸡肉西葫芦米糊', emoji: '🐔',
    ageMin: 6, ageMax: 8, texture: '细腻泥糊',
    category: '主食', time: 25, serving: '一次 1 小碗（约 50ml）',
    nutrients: ['高蛋白', '补铁', '补维C'],
    allergens: [], sources: ['A', 'B', 'C'],
    why: '鸡肉是优质蛋白、质地细嫩、接受度最高的肉类之一；西葫芦纤维细软、味道清淡。混入强化铁米糊，动物性食物 + 铁 + 蔬菜一次补齐。',
    ingredients: [
      { name: '鸡腿肉', amount: '20g' },
      { name: '西葫芦', amount: '一小块' },
      { name: '铁强化米粉', amount: '1 平勺' }
    ],
    tools: ['蒸锅', '辅食机'],
    steps: [
      { text: '鸡腿肉去皮去骨蒸熟。', tip: '鸡腿肉比鸡胸嫩。' },
      { text: '西葫芦去皮去籽蒸软。', tip: '蒸到软烂。' },
      { text: '鸡肉和西葫芦打成泥。', tip: '加少许水打细腻。' },
      { text: '强化铁米粉按说明冲调，拌入鸡肉西葫芦泥。', tip: '调成能挂勺的稠度。' }
    ],
    cautions: ['鸡肉一定全熟。', '西葫芦营养密度低，不能当主菜，和肉同吃。', '从少量开始。']
  },

  {
    id: 'pear-yogurt-puree', name: '梨泥 + 原味全脂酸奶', emoji: '🍐',
    ageMin: 6, ageMax: 9, texture: '细腻泥糊',
    category: '点心', time: 10, serving: '梨泥 1-2 勺 + 酸奶 1 小勺',
    nutrients: ['补钙', '补膳食纤维', '益生菌'],
    allergens: ['奶'], sources: ['B', 'D'],
    why: '梨水分足、纤维多，助缓解便秘；原味全脂酸奶提供钙和益生菌，发酵后乳糖降低更好消化。酸奶属常见过敏原，AAP 建议尽早逐步引入。',
    ingredients: [
      { name: '梨', amount: '半个' },
      { name: '无糖原味全脂酸奶', amount: '1 小勺' }
    ],
    tools: ['蒸锅', '勺'],
    steps: [
      { text: '梨去皮去核，蒸软压成泥。', tip: '6-8M 梨要蒸软。' },
      { text: '酸奶取 1 小勺，放至室温。', tip: '选无糖、无添加的原味酸奶。' },
      { text: '梨泥和酸奶混合。', tip: '首次酸奶只给一小勺，观察奶过敏。' }
    ],
    cautions: ['一定选无糖、无添加原味酸奶，市售果味酸奶糖分极高。', '奶是过敏原，首次少量试。', '梨要蒸软，不给生梨块。']
  },

  {
    id: 'pork-spinach-congee', name: '猪瘦肉菠菜粥泥', emoji: '🐖',
    ageMin: 6, ageMax: 9, texture: '细腻粥泥',
    category: '主食', time: 30, serving: '一次 1 小碗（约 60ml）',
    nutrients: ['补铁', '补叶酸', '补维C'],
    allergens: [], sources: ['A', 'B', 'C'],
    why: '猪瘦肉是血红素铁的良好来源，菠菜补叶酸和维生素。中国指南强调富铁食物 + 动物性食物，这道把补铁和绿叶蔬菜结合起来。',
    ingredients: [
      { name: '猪里脊', amount: '20g' },
      { name: '菠菜', amount: '2 片叶' },
      { name: '大米', amount: '2 勺' }
    ],
    tools: ['小锅', '辅食机'],
    steps: [
      { text: '猪里脊去筋膜，冷水焯水去浮沫。', tip: '去腥。' },
      { text: '菠菜焯水 1 分钟去草酸。', tip: '焯水去涩味。' },
      { text: '大米煮成烂粥，加猪肉煮 10 分钟。', tip: '猪肉要全熟。' },
      { text: '菠菜切细，和粥一起打成泥。', tip: '初期打细腻，后期可保留颗粒。' }
    ],
    cautions: ['菠菜先焯水去草酸。', '猪肉去净筋膜。', '菠菜铁吸收率低，补铁主力是猪肉，不是菠菜。']
  },

  {
    id: 'avocado-banana', name: '牛油果香蕉泥', emoji: '🥑',
    ageMin: 6, ageMax: 10, texture: '细腻泥状',
    category: '蔬果', time: 5, serving: '一次 1-2 勺（约 20g）',
    nutrients: ['补DHA', '高蛋白', '补钾'],
    allergens: [], sources: ['B', 'C'],
    why: '牛油果富含优质不饱和脂肪——大脑发育最需要的原料，混入香蕉甜味后接受度大幅提升。WHO 建议每天蔬果，这道是补充健康脂肪的好选择。',
    ingredients: [
      { name: '熟牛油果', amount: '1/4 个' },
      { name: '熟香蕉', amount: '半根' }
    ],
    tools: ['碗', '叉子'],
    steps: [
      { text: '牛油果对半切去核，取 1/4 个果肉。', tip: '选表皮变黑、捏着微软的熟果。' },
      { text: '香蕉取熟透带斑点的半根。', tip: '生香蕉鞣酸多，加重便秘。' },
      { text: '用叉子压成泥。', tip: '牛油果质地软，叉子压即可。' },
      { text: '立即喂。', tip: '牛油果氧化快，别久放。' }
    ],
    cautions: ['牛油果热量高，一次 1/4 个足够。', '氧化变黑就不要再吃。', '食材要新鲜。']
  },

  {
    id: 'tofu-tomato-oat', name: '豆腐番茄燕麦糊', emoji: '🍅',
    ageMin: 6, ageMax: 9, texture: '细腻糊状',
    category: '主食', time: 20, serving: '一次 1 小碗（约 60ml）',
    nutrients: ['补钙', '高蛋白', '补维C'],
    allergens: ['大豆'], sources: ['B', 'C', 'D'],
    why: '豆腐是优质植物蛋白、钙含量高，番茄的维 C 促进铁吸收。大豆是常见过敏原，AAP 建议尽早引入。WHO 建议经常安排豆类食物。',
    ingredients: [
      { name: '嫩豆腐', amount: '1/4 块（约 30g）' },
      { name: '番茄', amount: '1/4 个' },
      { name: '燕麦片', amount: '1 勺' }
    ],
    tools: ['小锅', '辅食机'],
    steps: [
      { text: '番茄开水烫 10 秒撕皮去籽。', tip: '番茄皮难消化易呛。' },
      { text: '嫩豆腐切小块焯水 1 分钟。', tip: '去豆腥。' },
      { text: '燕麦煮软，加番茄、豆腐煮 3 分钟。', tip: '都煮软烂。' },
      { text: '打成细腻糊。', tip: '初期打细，适应后保留颗粒。' }
    ],
    cautions: ['大豆是过敏原，首次少量试。', '番茄一定去皮去籽。', '燕麦选原味无糖。']
  },

  {
    id: 'peanut-banana-puree', name: '花生香蕉米糊', emoji: '🥜',
    ageMin: 6, ageMax: 9, texture: '细腻糊状',
    category: '主食', time: 15, serving: '首次极少量，逐渐加',
    nutrients: ['高蛋白', '补钾', '补膳食纤维'],
    allergens: ['花生'], sources: ['B', 'C', 'D'],
    why: '花生是致死性过敏最常见元凶，但 AAP 建议婴儿通过稀释花生酱等适龄形态尽早引入花生，反而降低过敏率。WHO 建议经常安排坚果。关键是形态安全。',
    ingredients: [
      { name: '熟香蕉', amount: '半根' },
      { name: '燕麦糊', amount: '适量' },
      { name: '无糖无盐顺滑花生酱', amount: '极少量' }
    ],
    tools: ['碗', '勺'],
    steps: [
      { text: '香蕉压成泥。', tip: '选熟透带斑点的。' },
      { text: '燕麦煮到完全软烂。', tip: '无颗粒。' },
      { text: '花生酱用温水/奶充分稀释。', tip: '稀释到稀糊状，绝不能一坨。' },
      { text: '少量混入燕麦香蕉糊。', tip: '首次只加极少量，观察。' }
    ],
    cautions: ['绝对不要直接喂一坨浓稠花生酱，也不要给整颗花生。', '花生是强过敏原，首次极少量，观察 2-3 天。', '严重湿疹、已有过敏史的宝宝，首次引入前咨询儿科医生。']
  },

  {
    id: 'egg-pumpkin-puree', name: '蛋黄/全蛋南瓜泥', emoji: '🥚',
    ageMin: 6, ageMax: 9, texture: '细腻泥状',
    category: '肉蛋', time: 15, serving: '从 1/4 蛋黄开始',
    nutrients: ['补铁', '补维A', '高蛋白'],
    allergens: ['蛋'], sources: ['A', 'B', 'C', 'D'],
    why: '蛋黄补铁、胆碱和维 A/D，南瓜补 β-胡萝卜素。鸡蛋是八大过敏原，AAP 建议尽早引入而非推迟。蛋黄是引入鸡蛋最安全的第一步。',
    ingredients: [
      { name: '鸡蛋', amount: '1 个（先用蛋黄）' },
      { name: '南瓜', amount: '一小块' },
      { name: '温水', amount: '少许' }
    ],
    tools: ['蒸锅', '小锅'],
    steps: [
      { text: '鸡蛋冷水煮 10 分钟至全熟。', tip: '全熟蛋。' },
      { text: '南瓜蒸软压泥。', tip: '蒸 15 分钟。' },
      { text: '取 1/4 蛋黄压碎，拌入南瓜泥。', tip: '首次只 1/4 蛋黄。' },
      { text: '太干加温水调稀。', tip: '调成细腻泥。' }
    ],
    cautions: ['首次从 1/4 蛋黄开始，观察 2-3 天。', '全蛋（含蛋白）8 月龄后再尝试。', '鸡蛋必须全熟。']
  },

  {
    id: 'beef-broccoli-potato-puree', name: '牛肉西兰花土豆泥', emoji: '🐮',
    ageMin: 6, ageMax: 9, texture: '细腻泥状',
    category: '肉蛋', time: 30, serving: '一次 2-3 勺（约 30g）',
    nutrients: ['补铁', '补维C', '高蛋白'],
    allergens: [], sources: ['A', 'B', 'C'],
    why: '牛肉补铁补锌，西兰花补维 C（促进铁吸收），土豆增稠顺滑。这是补铁 + 蔬菜 + 淀粉的均衡组合，中国指南强调富铁食物与动物性食物。',
    ingredients: [
      { name: '牛里脊', amount: '30g' },
      { name: '西兰花', amount: '2 朵花球' },
      { name: '土豆', amount: '半个' }
    ],
    tools: ['蒸锅', '辅食机'],
    steps: [
      { text: '牛肉去筋，冷水焯水后蒸熟。', tip: '全熟无血水。' },
      { text: '西兰花取花球，和土豆一起蒸软。', tip: '蒸 15 分钟。' },
      { text: '三者加温水打成细腻泥。', tip: '牛肉纤维多，打透无颗粒。' }
    ],
    cautions: ['牛肉打透，摸不到颗粒。', '西兰花取花球。', '不加盐。']
  },

  /* ==================== 9-11 月龄 ==================== */
  {
    id: 'banana-egg-oat-porridge', name: '香蕉鸡蛋燕麦粥', emoji: '🍌',
    ageMin: 9, ageMax: 12, texture: '带颗粒的稠粥',
    category: '主食', time: 15, serving: '半碗到 1 碗',
    nutrients: ['高蛋白', '补钾', '补膳食纤维'],
    allergens: ['蛋'], sources: ['B', 'D'],
    why: '燕麦补纤维、鸡蛋补蛋白、香蕉补钾，是快手早餐。这个月龄保留燕麦颗粒感，继续锻炼咀嚼。鸡蛋是过敏原，AAP 建议尽早引入。',
    ingredients: [
      { name: '燕麦片', amount: '2 勺' },
      { name: '鸡蛋', amount: '1 个' },
      { name: '熟香蕉', amount: '半根' }
    ],
    tools: ['小锅', '碗'],
    steps: [
      { text: '燕麦加奶/水煮 5 分钟至软。', tip: '原味燕麦，不是速溶糖。' },
      { text: '鸡蛋打散，淋入粥中煮成蛋花。', tip: '慢慢淋，边淋边搅。' },
      { text: '香蕉压成泥拌入。', tip: '熟透香蕉。' },
      { text: '放温喂。', tip: '保留一点颗粒感。' }
    ],
    cautions: ['鸡蛋全熟。', '燕麦保留颗粒但不要有整片硬燕麦。', '不加糖。']
  },

  {
    id: 'beef-tomato-rice', name: '牛肉番茄软饭', emoji: '🍅',
    ageMin: 9, ageMax: 14, texture: '软烂小颗粒软饭',
    category: '主食', time: 30, serving: '半碗到 1 碗',
    nutrients: ['补铁', '补维C', '高蛋白'],
    allergens: [], sources: ['A', 'B', 'C'],
    why: '牛肉补铁，番茄维 C 促进铁吸收，是绝佳搭配。软饭的颗粒感推进咀嚼练习。中国指南建议 24 月龄以内尽量少加糖盐，保持食物原味。',
    ingredients: [
      { name: '大米', amount: '2 勺' },
      { name: '牛里脊', amount: '20g' },
      { name: '番茄', amount: '半个' },
      { name: '西兰花 / 小白菜', amount: '少许' }
    ],
    tools: ['小锅', '刀'],
    steps: [
      { text: '大米煮成比成人饭更软的软饭。', tip: '水量比成人饭多 1/3。' },
      { text: '牛肉切碎或剁末，彻底煮熟。', tip: '逆纹路剁细。' },
      { text: '番茄去较硬的皮，切碎炖软。', tip: '烫 10 秒撕皮。' },
      { text: '加西兰花碎或小白菜碎，与软饭混合。', tip: '菜切细碎。' }
    ],
    cautions: ['不靠盐和酱油提味，保持原味。', '牛肉末剁细、煮熟。', '番茄一定去皮。']
  },

  {
    id: 'broccoli-tofu-congee', name: '西兰花豆腐粥', emoji: '🥦',
    ageMin: 9, ageMax: 14, texture: '带颗粒稠粥',
    category: '主食', time: 25, serving: '半碗到 1 碗',
    nutrients: ['补钙', '补维C', '高蛋白'],
    allergens: ['大豆'], sources: ['B', 'C'],
    why: '豆腐补钙、西兰花补维 C 和叶酸。豆腐软嫩易嚼，是「泥到块」过渡的好载体。WHO 建议每天安排豆类和蔬果。',
    ingredients: [
      { name: '嫩豆腐', amount: '1/4 块' },
      { name: '西兰花', amount: '2-3 朵' },
      { name: '大米', amount: '2 勺' }
    ],
    tools: ['小锅', '刀'],
    steps: [
      { text: '大米煮成稠粥。', tip: '泡米后煮更糯。' },
      { text: '西兰花取花球，焯水切碎。', tip: '切细碎。' },
      { text: '嫩豆腐切小丁。', tip: '0.5cm 大小。' },
      { text: '豆腐丁、西兰花碎下粥煮 3 分钟。', tip: '轻搅，豆腐易碎。' }
    ],
    cautions: ['豆腐丁切小。', '大豆过敏者回避。', '保留颗粒感，不打成泥。']
  },

  {
    id: 'pumpkin-millet-egg', name: '南瓜小米粥 + 蒸鸡蛋', emoji: '🎃',
    ageMin: 9, ageMax: 12, texture: '带颗粒稠粥 + 软嫩蛋',
    category: '主食', time: 25, serving: '半碗粥 + 半个蛋',
    nutrients: ['补维A', '高蛋白', '补铁'],
    allergens: ['蛋'], sources: ['A', 'B'],
    why: '小米粥温和易消化，南瓜补维 A，蒸鸡蛋提供优质蛋白和铁。这套早餐组合营养均衡，符合中国指南「重视动物性食物 + 食物多样」的要求。',
    ingredients: [
      { name: '小米', amount: '1 勺' },
      { name: '南瓜', amount: '一小块' },
      { name: '鸡蛋', amount: '1 个' }
    ],
    tools: ['小锅', '蒸锅'],
    steps: [
      { text: '小米煮成稠粥，南瓜去皮切碎同煮。', tip: '南瓜煮软烂。' },
      { text: '鸡蛋打散，加 1:1 温水搅匀。', tip: '加水让蛋更嫩。' },
      { text: '蛋液上锅蒸 10 分钟成蒸蛋。', tip: '小火蒸，防蜂窝。' },
      { text: '蒸蛋分小块拌入粥。', tip: '蛋要全熟。' }
    ],
    cautions: ['蒸蛋全熟，不溏心。', '这个月龄保留颗粒感。', '不加盐。']
  },

  {
    id: 'salmon-broccoli-potato-crumb', name: '三文鱼西兰花土豆碎', emoji: '🐟',
    ageMin: 9, ageMax: 12, texture: '带细颗粒的碎末',
    category: '鱼虾', time: 20, serving: '一次 2-3 勺（约 40g）',
    nutrients: ['补DHA', '高蛋白', '补维C'],
    allergens: ['鱼'], sources: ['A', 'B', 'C'],
    why: '三文鱼补 DHA，西兰花补维 C，土豆增稠。这个月龄从泥升级到「碎末」，锻炼咀嚼。WHO 建议每天安排肉鱼蛋，CDC 强调鱼类彻底去刺。',
    ingredients: [
      { name: '三文鱼', amount: '20g' },
      { name: '西兰花', amount: '2 朵' },
      { name: '土豆', amount: '半个' }
    ],
    tools: ['蒸锅', '刀'],
    steps: [
      { text: '三文鱼蒸熟，逐根挑净鱼刺。', tip: '手指捻碎再查一遍。' },
      { text: '西兰花取花球、土豆切块蒸软。', tip: '蒸到叉子能压碎。' },
      { text: '三文鱼压碎，土豆压碎，西兰花切细。', tip: '保留细颗粒，不打成泥。' },
      { text: '混合拌匀。', tip: '根据吞咽能力调节粗细。' }
    ],
    cautions: ['三文鱼逐根去刺。', '保留颗粒感，不要打成泥。', '鱼过敏者首次少量试。']
  },

  {
    id: 'chicken-carrot-noodle', name: '鸡肉胡萝卜面', emoji: '🍜',
    ageMin: 9, ageMax: 14, texture: '软烂碎面',
    category: '主食', time: 20, serving: '半碗到 1 碗',
    nutrients: ['高蛋白', '补维A', '补铁'],
    allergens: ['小麦'], sources: ['A', 'B', 'C'],
    why: '鸡肉补蛋白、胡萝卜补维 A，碎面继续锻炼咀嚼。面条是练习「咀嚼+吞咽」协调的好载体。中国指南强调动物性食物。',
    ingredients: [
      { name: '婴儿碎面 / 无盐面条', amount: '15g' },
      { name: '鸡腿肉', amount: '20g' },
      { name: '胡萝卜', amount: '一小段' }
    ],
    tools: ['小锅', '刀'],
    steps: [
      { text: '面条剪成 1cm 短段。', tip: '短段防呛。' },
      { text: '鸡腿肉去皮去骨剁细末。', tip: '剁细。' },
      { text: '胡萝卜切细末，下锅煮软。', tip: '胡萝卜先煮。' },
      { text: '下面条煮软，下鸡肉末煮熟。', tip: '鸡肉末搅散。' }
    ],
    cautions: ['面条一定剪短段。', '鸡肉末搅散防结块。', '不加盐。']
  },

  {
    id: 'yogurt-banana-oat', name: '原味酸奶 + 软香蕉 + 燕麦', emoji: '🍌',
    ageMin: 9, ageMax: 14, texture: '软烂颗粒',
    category: '点心', time: 10, serving: '酸奶 1 小杯 + 香蕉半根 + 燕麦 1 勺',
    nutrients: ['补钙', '补钾', '益生菌'],
    allergens: ['奶'], sources: ['B', 'D'],
    why: '原味酸奶补钙和益生菌，香蕉补钾，燕麦补纤维。这是便捷的加餐组合。酸奶属过敏原，AAP 建议尽早引入。',
    ingredients: [
      { name: '无糖原味酸奶', amount: '1 小杯' },
      { name: '熟香蕉', amount: '半根' },
      { name: '燕麦片', amount: '1 勺' }
    ],
    tools: ['碗'],
    steps: [
      { text: '燕麦煮软或奶泡软。', tip: '原味燕麦。' },
      { text: '香蕉压成泥或切软段。', tip: '软香蕉段可当手指食物。' },
      { text: '和酸奶拌在一起。', tip: '选无糖原味酸奶。' }
    ],
    cautions: ['选无糖原味酸奶，果味酸奶糖分极高。', '奶过敏者回避。', '香蕉熟透。']
  },

  {
    id: 'pork-spinach-rice', name: '猪肉菠菜软饭', emoji: '🐖',
    ageMin: 9, ageMax: 14, texture: '软烂颗粒饭',
    category: '主食', time: 25, serving: '半碗到 1 碗',
    nutrients: ['补铁', '补叶酸', '高蛋白'],
    allergens: [], sources: ['A', 'B'],
    why: '猪肉补铁、菠菜补叶酸，软饭锻炼咀嚼。中国指南强调富铁食物和动物性食物。菠菜焯水去草酸后切细，安全易嚼。',
    ingredients: [
      { name: '大米', amount: '2 勺' },
      { name: '猪里脊', amount: '20g' },
      { name: '菠菜', amount: '2 片叶' }
    ],
    tools: ['小锅', '刀'],
    steps: [
      { text: '大米煮成软饭。', tip: '比成人饭软。' },
      { text: '猪里脊剁末，煮熟。', tip: '全熟。' },
      { text: '菠菜焯水 1 分钟，切细碎。', tip: '去草酸。' },
      { text: '猪肉末、菠菜碎拌入软饭。', tip: '拌匀。' }
    ],
    cautions: ['菠菜先焯水。', '菠菜切细碎，长纤维易卡喉。', '补铁主力是猪肉，不是菠菜。']
  },

  {
    id: 'tomato-tofu-egg-custard', name: '番茄豆腐蛋羹', emoji: '🍅',
    ageMin: 9, ageMax: 14, texture: '软嫩羹状',
    category: '肉蛋', time: 20, serving: '半碗到 1 碗',
    nutrients: ['高蛋白', '补钙', '补维C'],
    allergens: ['蛋', '大豆'], sources: ['B', 'D'],
    why: '鸡蛋补蛋白，豆腐补钙，番茄提味并促进铁吸收。蛋羹软嫩易吃，是这个月龄的理想菜品。鸡蛋和大豆都是过敏原，AAP 建议尽早引入。',
    ingredients: [
      { name: '鸡蛋', amount: '1 个' },
      { name: '嫩豆腐', amount: '1/4 块' },
      { name: '番茄', amount: '1/4 个' }
    ],
    tools: ['蒸锅', '碗'],
    steps: [
      { text: '番茄烫皮去籽切碎。', tip: '去皮。' },
      { text: '豆腐压碎。', tip: '压成小碎。' },
      { text: '鸡蛋打散，加温水 1:1，加番茄豆腐碎。', tip: '加水蛋更嫩。' },
      { text: '小火蒸 10 分钟至全熟。', tip: '全熟，不溏心。' }
    ],
    cautions: ['蛋羹全熟。', '番茄去皮去籽。', '首次吃豆腐少量试大豆过敏。']
  },

  {
    id: 'peanut-banana-oat-porridge', name: '花生香蕉燕麦糊', emoji: '🥜',
    ageMin: 9, ageMax: 14, texture: '带颗粒稠糊',
    category: '主食', time: 15, serving: '半碗',
    nutrients: ['高蛋白', '补钾', '补膳食纤维'],
    allergens: ['花生'], sources: ['B', 'D'],
    why: '花生提供优质蛋白和脂肪，AAP 建议通过稀释花生酱引入花生，降低过敏率。香蕉补钾，燕麦补纤维。花生形态必须安全。',
    ingredients: [
      { name: '燕麦片', amount: '2 勺' },
      { name: '熟香蕉', amount: '半根' },
      { name: '无糖无盐花生酱', amount: '少量' }
    ],
    tools: ['小锅', '碗'],
    steps: [
      { text: '燕麦煮软。', tip: '原味燕麦。' },
      { text: '香蕉压泥拌入。', tip: '熟透。' },
      { text: '花生酱用温水充分稀释后拌入。', tip: '稀释到稀糊状。' }
    ],
    cautions: ['花生酱必须稀释，不喂一坨，不给整颗花生。', '花生强过敏原，首次少量观察。', '有过敏史先咨询医生。']
  },

  {
    id: 'chicken-pumpkin-rice', name: '鸡肉南瓜软饭', emoji: '🐔',
    ageMin: 9, ageMax: 14, texture: '软烂颗粒饭',
    category: '主食', time: 25, serving: '半碗到 1 碗',
    nutrients: ['高蛋白', '补维A', '补铁'],
    allergens: [], sources: ['A', 'B'],
    why: '鸡肉补蛋白，南瓜补维 A 且自带甜味，软饭锻炼咀嚼。中国指南强调动物性食物和食物多样。',
    ingredients: [
      { name: '大米', amount: '2 勺' },
      { name: '鸡腿肉', amount: '20g' },
      { name: '南瓜', amount: '一小块' }
    ],
    tools: ['小锅', '刀'],
    steps: [
      { text: '大米煮软饭。', tip: '水量稍多。' },
      { text: '鸡腿肉去皮去骨剁末，煮熟。', tip: '全熟。' },
      { text: '南瓜去皮蒸软压碎。', tip: '蒸 15 分钟。' },
      { text: '三者拌在一起。', tip: '南瓜让饭更香甜。' }
    ],
    cautions: ['鸡肉全熟。', '南瓜保留颗粒感。', '不加盐。']
  },

  {
    id: 'bass-tofu-veggie-congee', name: '鲈鱼豆腐蔬菜粥', emoji: '🐟',
    ageMin: 9, ageMax: 14, texture: '带颗粒稠粥',
    category: '鱼虾', time: 30, serving: '半碗到 1 碗',
    nutrients: ['补DHA', '补钙', '高蛋白'],
    allergens: ['鱼', '大豆'], sources: ['A', 'B', 'C'],
    why: '鲈鱼是低汞鱼、肉质细嫩、DHA 丰富，豆腐补钙。CDC 强调鱼类彻底去骨去刺。WHO 建议每天安排肉鱼蛋和豆类。',
    ingredients: [
      { name: '鲈鱼', amount: '20g' },
      { name: '嫩豆腐', amount: '1/4 块' },
      { name: '青菜', amount: '2 片' },
      { name: '大米', amount: '2 勺' }
    ],
    tools: ['小锅', '刀'],
    steps: [
      { text: '鲈鱼蒸熟，逐根挑净鱼刺。', tip: '手指捻碎再查。' },
      { text: '大米煮成稠粥。', tip: '泡米煮糯。' },
      { text: '豆腐切小丁，青菜焯水切细。', tip: '切细碎。' },
      { text: '鱼肉、豆腐、青菜下粥煮 3 分钟。', tip: '轻搅。' }
    ],
    cautions: ['鲈鱼逐根去刺。', '豆腐丁切小。', '鱼和豆都是过敏原，注意观察。']
  },

  {
    id: 'egg-avocado-toast', name: '鸡蛋牛油果软吐司条', emoji: '🥑',
    ageMin: 9, ageMax: 14, texture: '软吐司条',
    category: '点心', time: 10, serving: '1-2 条',
    nutrients: ['补DHA', '高蛋白', '补钙'],
    allergens: ['蛋', '小麦'], sources: ['B', 'C', 'D'],
    why: '牛油果补健康脂肪，鸡蛋补蛋白，软吐司条是理想的手指食物，锻炼自主进食。CDC 强调食物形态安全，面包需足够柔软。',
    ingredients: [
      { name: '软吐司', amount: '1 片' },
      { name: '牛油果', amount: '1/4 个' },
      { name: '鸡蛋', amount: '1 个（可选）' }
    ],
    tools: ['不粘锅', '刀'],
    steps: [
      { text: '牛油果压成泥。', tip: '熟牛油果。' },
      { text: '鸡蛋煮熟压碎（可选），混入牛油果泥。', tip: '全熟蛋。' },
      { text: '吐司去硬边，切成手指条。', tip: '去硬边，避免大块黏成团。' },
      { text: '抹上牛油果泥，切小段给。', tip: '面包要足够柔软。' }
    ],
    cautions: ['面包必须足够柔软，避免坚硬外壳和大块黏成团。', '切成长条，便于抓握。', '小麦、蛋是过敏原，注意观察。']
  },

  {
    id: 'beef-broccoli-millet-rice', name: '牛肉西兰花小米饭', emoji: '🐮',
    ageMin: 9, ageMax: 14, texture: '软烂颗粒饭',
    category: '主食', time: 30, serving: '半碗到 1 碗',
    nutrients: ['补铁', '补维C', '补锌'],
    allergens: [], sources: ['A', 'B'],
    why: '牛肉补铁补锌，西兰花补维 C 促进铁吸收，小米温和易消化。中国指南强调富铁食物。',
    ingredients: [
      { name: '大米 + 小米', amount: '各 1 勺' },
      { name: '牛里脊', amount: '20g' },
      { name: '西兰花', amount: '2 朵' }
    ],
    tools: ['小锅', '刀'],
    steps: [
      { text: '大米小米混煮成软饭。', tip: '小米易烂。' },
      { text: '牛里脊剁末，彻底煮熟。', tip: '全熟。' },
      { text: '西兰花取花球焯水切碎。', tip: '切细。' },
      { text: '牛肉末、西兰花碎拌入饭。', tip: '拌匀。' }
    ],
    cautions: ['牛肉剁细煮熟。', '西兰花切细。', '保留颗粒感。']
  },

  {
    id: 'mushroom-chicken-noodle', name: '蘑菇鸡肉碎面', emoji: '🍄',
    ageMin: 9, ageMax: 14, texture: '软烂碎面',
    category: '主食', time: 20, serving: '半碗到 1 碗',
    nutrients: ['高蛋白', '补维B', '补膳食纤维'],
    allergens: ['小麦'], sources: ['A', 'B'],
    why: '蘑菇是天然鲜味来源，鸡肉补蛋白，碎面锻炼咀嚼。蘑菇的鲜味让面在不加盐的情况下依然好吃。',
    ingredients: [
      { name: '婴儿碎面', amount: '15g' },
      { name: '鸡肉末', amount: '20g' },
      { name: '香菇', amount: '1 朵' }
    ],
    tools: ['小锅', '刀'],
    steps: [
      { text: '香菇泡发，剁得非常细。', tip: '菌类滑韧，一定剁细。' },
      { text: '面条剪短段。', tip: '1cm 短段。' },
      { text: '水开下面煮软，下香菇末。', tip: '香菇先煮。' },
      { text: '下鸡肉末煮熟。', tip: '搅散。' }
    ],
    cautions: ['香菇剁得非常细，整片滑韧易呛。', '面条剪短段。', '鸡肉末搅散。']
  },

  {
    id: 'sesame-banana-oat-porridge', name: '芝麻酱香蕉燕麦粥', emoji: '🥜',
    ageMin: 9, ageMax: 14, texture: '带颗粒稠粥',
    category: '主食', time: 15, serving: '半碗',
    nutrients: ['补钙', '补钾', '补膳食纤维'],
    allergens: ['芝麻'], sources: ['B', 'D'],
    why: '芝麻酱富含钙和不饱和脂肪，香蕉补钾，燕麦补纤维。芝麻是常见过敏原，AAP 建议尽早引入。WHO 建议经常安排坚果种子。',
    ingredients: [
      { name: '燕麦片', amount: '2 勺' },
      { name: '熟香蕉', amount: '半根' },
      { name: '纯芝麻酱', amount: '少量' }
    ],
    tools: ['小锅', '碗'],
    steps: [
      { text: '燕麦煮软。', tip: '原味燕麦。' },
      { text: '香蕉压泥拌入。', tip: '熟透。' },
      { text: '芝麻酱用温水调稀拌入。', tip: '少量即可，芝麻酱油脂高。' }
    ],
    cautions: ['芝麻是过敏原，首次少量试。', '选无糖纯芝麻酱。', '芝麻酱少量，油脂高。']
  },

  {
    id: 'shrimp-tomato-noodle', name: '虾仁番茄软面', emoji: '🦐',
    ageMin: 9, ageMax: 14, texture: '软烂碎面',
    category: '主食', time: 20, serving: '半碗到 1 碗',
    nutrients: ['高蛋白', '补锌', '补维C'],
    allergens: ['甲壳类', '小麦'], sources: ['B', 'C', 'D'],
    why: '虾仁高蛋白低脂肪、鲜味足，番茄维 C 促进铁吸收。甲壳类是常见过敏原，AAP 建议尽早引入。虾要剁细，整只虾仁对 9-11M 太硬。',
    ingredients: [
      { name: '婴儿碎面', amount: '15g' },
      { name: '虾仁', amount: '2 只' },
      { name: '番茄', amount: '半个' }
    ],
    tools: ['小锅', '刀'],
    steps: [
      { text: '虾去壳去虾线，剁成细泥。', tip: '虾肉弹性大，必须剁细。' },
      { text: '番茄烫皮去籽切碎。', tip: '去皮。' },
      { text: '面条剪短段，下锅煮软。', tip: '1cm 短段。' },
      { text: '下番茄碎煮出味，下虾泥煮熟。', tip: '虾泥变色即熟。' }
    ],
    cautions: ['虾剁成细泥，整只虾仁太硬。', '甲壳类是过敏原，首次半只观察。', '面条剪短段。']
  },

  {
    id: 'tofu-pumpkin-congee', name: '豆腐南瓜粥', emoji: '🎃',
    ageMin: 9, ageMax: 14, texture: '带颗粒稠粥',
    category: '主食', time: 25, serving: '半碗到 1 碗',
    nutrients: ['补钙', '补维A', '高蛋白'],
    allergens: ['大豆'], sources: ['B'],
    why: '豆腐补钙和植物蛋白，南瓜补维 A。WHO 建议每天安排豆类和蔬果。豆腐软嫩、南瓜甘甜，是温和的组合。',
    ingredients: [
      { name: '嫩豆腐', amount: '1/4 块' },
      { name: '南瓜', amount: '一小块' },
      { name: '大米', amount: '2 勺' }
    ],
    tools: ['小锅', '刀'],
    steps: [
      { text: '大米煮稠粥，南瓜去皮切碎同煮。', tip: '南瓜煮软烂。' },
      { text: '豆腐切小丁，下锅煮 3 分钟。', tip: '0.5cm 小丁。' },
      { text: '放温喂。', tip: '保留颗粒感。' }
    ],
    cautions: ['豆腐丁切小。', '大豆过敏者回避。', '南瓜煮软。']
  },

  {
    id: 'egg-veggie-congee', name: '鸡蛋蔬菜粥', emoji: '🥚',
    ageMin: 9, ageMax: 14, texture: '带颗粒稠粥',
    category: '主食', time: 25, serving: '半碗到 1 碗',
    nutrients: ['高蛋白', '补维C', '补铁'],
    allergens: ['蛋'], sources: ['A', 'B'],
    why: '鸡蛋补优质蛋白，蔬菜补维生素，粥锻炼咀嚼。中国指南强调食物多样和动物性食物。鸡蛋是过敏原，8 月龄后引入全蛋。',
    ingredients: [
      { name: '大米', amount: '2 勺' },
      { name: '鸡蛋', amount: '1 个' },
      { name: '青菜 / 胡萝卜', amount: '各少许' }
    ],
    tools: ['小锅', '刀'],
    steps: [
      { text: '大米煮稠粥。', tip: '泡米煮糯。' },
      { text: '青菜焯水切细，胡萝卜切碎煮软。', tip: '都切细。' },
      { text: '鸡蛋打散，淋入粥中煮成蛋花。', tip: '边淋边搅。' },
      { text: '下蔬菜碎煮 1 分钟。', tip: '最后放菜。' }
    ],
    cautions: ['鸡蛋全熟。', '蔬菜切细碎。', '保留颗粒感。']
  },

  {
    id: 'beef-potato-carrot-stew', name: '牛肉土豆胡萝卜炖碎', emoji: '🐮',
    ageMin: 9, ageMax: 14, texture: '软烂碎末',
    category: '肉蛋', time: 30, serving: '配饭半小碗',
    nutrients: ['补铁', '补维A', '补锌'],
    allergens: [], sources: ['A', 'B', 'C'],
    why: '牛肉补铁补锌，胡萝卜补维 A，土豆增稠。三者炖到软烂，是这个月龄锻炼咀嚼小颗粒的好菜。CDC 强调硬蔬果煮软。',
    ingredients: [
      { name: '牛里脊', amount: '30g' },
      { name: '土豆', amount: '半个' },
      { name: '胡萝卜', amount: '一小段' }
    ],
    tools: ['炖锅', '刀'],
    steps: [
      { text: '牛肉去筋切小丁，焯水。', tip: '0.5cm 小丁。' },
      { text: '土豆、胡萝卜切小丁。', tip: '切丁不切圆片。' },
      { text: '三者加水炖 20 分钟至软烂。', tip: '炖到牛肉一捏就散。' },
      { text: '压成碎末，保留颗粒。', tip: '根据吞咽能力调节。' }
    ],
    cautions: ['牛肉炖到软烂，硬肉丁噎人。', '胡萝卜、土豆切小丁。', '不加盐。']
  },

  {
    id: 'salmon-spinach-rice', name: '三文鱼菠菜软饭', emoji: '🐟',
    ageMin: 9, ageMax: 14, texture: '软烂颗粒饭',
    category: '主食', time: 25, serving: '半碗到 1 碗',
    nutrients: ['补DHA', '补叶酸', '高蛋白'],
    allergens: ['鱼'], sources: ['A', 'B', 'C'],
    why: '三文鱼补 DHA，菠菜补叶酸，软饭锻炼咀嚼。WHO 建议每天安排肉鱼蛋，CDC 强调鱼类彻底去刺。',
    ingredients: [
      { name: '三文鱼', amount: '20g' },
      { name: '菠菜', amount: '2 片叶' },
      { name: '大米', amount: '2 勺' }
    ],
    tools: ['小锅', '刀'],
    steps: [
      { text: '三文鱼蒸熟，逐根挑净鱼刺。', tip: '手指捻碎再查。' },
      { text: '大米煮软饭。', tip: '水量稍多。' },
      { text: '菠菜焯水 1 分钟切细。', tip: '去草酸。' },
      { text: '鱼肉、菠菜碎拌入软饭。', tip: '拌匀。' }
    ],
    cautions: ['三文鱼逐根去刺。', '菠菜焯水。', '菠菜切细。']
  },

  /* ==================== 12-23 月龄 ==================== */
  {
    id: 'tomato-egg-oat-porridge', name: '番茄鸡蛋燕麦粥', emoji: '🍅',
    ageMin: 12, ageMax: 24, texture: '带颗粒稠粥',
    category: '主食', time: 20, serving: '1 小碗（约 150ml）',
    nutrients: ['高蛋白', '补维C', '补铁'],
    allergens: ['蛋'], sources: ['A', 'B', 'D'],
    why: '番茄维 C 促进铁吸收，鸡蛋补蛋白，燕麦补纤维。满 1 岁可建立规律早餐，这是营养均衡的早餐选择。',
    ingredients: [
      { name: '燕麦片', amount: '2 勺' },
      { name: '鸡蛋', amount: '1 个' },
      { name: '番茄', amount: '半个' }
    ],
    tools: ['小锅', '刀'],
    steps: [
      { text: '番茄烫皮去籽切碎。', tip: '去皮。' },
      { text: '燕麦煮软，下番茄碎煮出味。', tip: '原味燕麦。' },
      { text: '鸡蛋打散淋入煮成蛋花。', tip: '边淋边搅。' },
      { text: '放温喂。', tip: '保留颗粒感。' }
    ],
    cautions: ['鸡蛋全熟。', '番茄去皮。', '不加糖。']
  },

  {
    id: 'yogurt-blueberry', name: '原味酸奶 + 蓝莓碎', emoji: '🫐',
    ageMin: 12, ageMax: 36, texture: '软碎果粒',
    category: '点心', time: 5, serving: '酸奶 1 小杯 + 蓝莓几颗',
    nutrients: ['补钙', '补维C', '花青素'],
    allergens: ['奶'], sources: ['B', 'C'],
    why: '原味酸奶补钙和益生菌，蓝莓花青素和维 C 丰富。CDC 强调蓝莓要切开，整颗是窒息风险。',
    ingredients: [
      { name: '无糖原味酸奶', amount: '1 小杯' },
      { name: '蓝莓', amount: '3-4 颗' }
    ],
    tools: ['刀'],
    steps: [
      { text: '蓝莓洗净，切成四瓣或压碎。', tip: '3 岁前蓝莓都要切开。' },
      { text: '拌入酸奶。', tip: '选无糖原味酸奶。' }
    ],
    cautions: ['蓝莓必须切开，整颗是窒息高危。', '选无糖原味酸奶。', '奶过敏者回避。']
  },

  {
    id: 'beef-broccoli-rice', name: '牛肉西兰花软饭', emoji: '🐮',
    ageMin: 12, ageMax: 24, texture: '软烂小块饭',
    category: '主食', time: 30, serving: '1 小碗',
    nutrients: ['补铁', '补维C', '补锌'],
    allergens: [], sources: ['A', 'B'],
    why: '牛肉补铁补锌，西兰花补维 C 促进铁吸收，软饭锻炼咀嚼。中国指南强调富铁食物和动物性食物。',
    ingredients: [
      { name: '软饭', amount: '1 小碗' },
      { name: '牛里脊', amount: '30g' },
      { name: '西兰花', amount: '3 朵' },
      { name: '胡萝卜', amount: '少许' }
    ],
    tools: ['炒锅', '刀'],
    steps: [
      { text: '牛肉切小丁焯水，炖软。', tip: '0.5cm 小丁，炖软。' },
      { text: '西兰花取花球焯水切碎，胡萝卜切碎。', tip: '切细。' },
      { text: '牛肉丁、蔬菜碎和软饭炒匀。', tip: '软饭提前焖软。' },
      { text: '加一点水焖 2 分钟。', tip: '饭更软。' }
    ],
    cautions: ['牛肉炖软。', '蔬菜切细。', '不加盐或极少量。']
  },

  {
    id: 'salmon-potato-pancake', name: '三文鱼土豆饼 + 小白菜', emoji: '🐟',
    ageMin: 12, ageMax: 30, texture: '软嫩小饼',
    category: '鱼虾', time: 25, serving: '1-2 块饼 + 小白菜',
    nutrients: ['补DHA', '高蛋白', '补维C'],
    allergens: ['鱼', '小麦'], sources: ['A', 'B', 'C', 'D'],
    why: '三文鱼补 DHA，土豆饼软嫩易抓，是理想的手指食物。CDC 强调鱼类彻底去刺。WHO 建议每天安排肉鱼蛋。',
    ingredients: [
      { name: '三文鱼', amount: '30g' },
      { name: '土豆', amount: '半个' },
      { name: '面粉', amount: '1 勺' },
      { name: '小白菜', amount: '几片' }
    ],
    tools: ['蒸锅', '不粘锅'],
    steps: [
      { text: '三文鱼蒸熟，逐根挑净鱼刺。', tip: '手指捻碎再查。' },
      { text: '土豆蒸软压泥，和鱼肉、面粉混合。', tip: '调成可塑形的糊。' },
      { text: '不粘锅刷薄油，小火煎成小饼。', tip: '小火慢煎。' },
      { text: '小白菜焯水切碎，配饼吃。', tip: '菜切细。' }
    ],
    cautions: ['三文鱼逐根去刺。', '饼煎到全熟。', '切小块给，方便抓握。']
  },

  {
    id: 'pumpkin-millet-steamed-egg', name: '南瓜小米粥 + 蒸鸡蛋', emoji: '🎃',
    ageMin: 12, ageMax: 24, texture: '稠粥 + 软嫩蛋',
    category: '主食', time: 25, serving: '半碗粥 + 半个蛋',
    nutrients: ['补维A', '高蛋白', '补铁'],
    allergens: ['蛋'], sources: ['A', 'B', 'D'],
    why: '南瓜补维 A，小米温和易消化，蒸鸡蛋补优质蛋白。满 1 岁建立规律早餐，这套组合营养均衡。',
    ingredients: [
      { name: '小米', amount: '1 勺' },
      { name: '南瓜', amount: '一小块' },
      { name: '鸡蛋', amount: '1 个' }
    ],
    tools: ['小锅', '蒸锅'],
    steps: [
      { text: '小米煮稠粥，南瓜切碎同煮。', tip: '南瓜煮软烂。' },
      { text: '鸡蛋打散加温水 1:1，蒸 10 分钟。', tip: '小火蒸嫩。' },
      { text: '蒸蛋分小块拌入粥。', tip: '全熟。' }
    ],
    cautions: ['蒸蛋全熟。', '不加盐。', '保留颗粒感。']
  },

  {
    id: 'banana-yogurt', name: '香蕉 + 原味全脂酸奶', emoji: '🍌',
    ageMin: 12, ageMax: 36, texture: '软果 + 酸奶',
    category: '点心', time: 5, serving: '香蕉半根 + 酸奶 1 小杯',
    nutrients: ['补钙', '补钾', '益生菌'],
    allergens: ['奶'], sources: ['B'],
    why: '香蕉补钾、酸奶补钙，是便捷加餐。满 1 岁后酸奶和奶制品可作常规补充。',
    ingredients: [
      { name: '熟香蕉', amount: '半根' },
      { name: '无糖原味全脂酸奶', amount: '1 小杯' }
    ],
    tools: ['刀'],
    steps: [
      { text: '香蕉切小段。', tip: '熟透香蕉。' },
      { text: '配酸奶吃。', tip: '选无糖原味酸奶。' }
    ],
    cautions: ['选无糖原味酸奶。', '奶过敏者回避。', '香蕉熟透。']
  },

  {
    id: 'chicken-mushroom-noodle', name: '鸡肉香菇软面', emoji: '🍜',
    ageMin: 12, ageMax: 24, texture: '软面',
    category: '主食', time: 25, serving: '1 小碗',
    nutrients: ['高蛋白', '补维B', '补膳食纤维'],
    allergens: ['小麦'], sources: ['A', 'B', 'C'],
    why: '鸡肉补蛋白，香菇提供天然鲜味，软面锻炼咀嚼。CDC 强调食物质地随进食技能升级。',
    ingredients: [
      { name: '面条', amount: '1 小把' },
      { name: '鸡肉末', amount: '30g' },
      { name: '香菇', amount: '1-2 朵' }
    ],
    tools: ['小锅', '刀'],
    steps: [
      { text: '香菇泡发剁细。', tip: '剁细，别整片。' },
      { text: '面条煮软。', tip: '煮到软烂。' },
      { text: '下香菇末和鸡肉末煮熟。', tip: '鸡肉搅散。' },
      { text: '放温喂。', tip: '面可剪短。' }
    ],
    cautions: ['香菇剁细。', '鸡肉搅散。', '面条煮软。']
  },

  {
    id: 'tofu-pork-meatball', name: '豆腐猪肉小丸子 + 番茄软饭', emoji: '🐖',
    ageMin: 12, ageMax: 30, texture: '软嫩小丸子',
    category: '肉蛋', time: 35, serving: '3-4 个小丸子 + 软饭',
    nutrients: ['高蛋白', '补钙', '补铁'],
    allergens: ['大豆'], sources: ['A', 'B', 'C'],
    why: '猪肉补铁、豆腐补钙，做成小丸子软嫩易嚼。丸子要做得很小、很软，容易用舌头和牙龈压碎。中国指南强调动物性食物。',
    ingredients: [
      { name: '猪肉末', amount: '40g' },
      { name: '嫩豆腐', amount: '1/4 块' },
      { name: '番茄', amount: '1 个' },
      { name: '大米', amount: '适量' }
    ],
    tools: ['锅', '刀'],
    steps: [
      { text: '肉末和压碎的豆腐拌匀，加少许淀粉。', tip: '豆腐让丸子更嫩。' },
      { text: '搓成很小的小丸子。', tip: '约 1cm 大小。' },
      { text: '番茄烫皮切碎炖成酱，下丸子煮熟。', tip: '丸子浮起即熟。' },
      { text: '配软饭。', tip: '软饭提前焖软。' }
    ],
    cautions: ['丸子做成很小、很软、容易压碎的形态。', '丸子煮熟，不夹生。', '豆腐含大豆，过敏者回避。']
  },

  {
    id: 'peanut-butter-banana-oat-porridge', name: '花生酱香蕉燕麦粥', emoji: '🥜',
    ageMin: 12, ageMax: 36, texture: '带颗粒稠粥',
    category: '主食', time: 15, serving: '1 小碗',
    nutrients: ['高蛋白', '补钾', '补膳食纤维'],
    allergens: ['花生'], sources: ['B', 'D'],
    why: '花生酱提供优质蛋白和脂肪，AAP 建议通过适龄形态引入花生。香蕉补钾，燕麦补纤维。',
    ingredients: [
      { name: '燕麦片', amount: '2 勺' },
      { name: '熟香蕉', amount: '半根' },
      { name: '无糖无盐花生酱', amount: '少量' }
    ],
    tools: ['小锅', '碗'],
    steps: [
      { text: '燕麦煮软。', tip: '原味燕麦。' },
      { text: '香蕉压泥拌入。', tip: '熟透。' },
      { text: '花生酱温水稀释后拌入。', tip: '稀释到稀糊状。' }
    ],
    cautions: ['花生酱稀释，不喂整颗花生。', '花生强过敏原，注意观察。', '不加糖。']
  },

  {
    id: 'soft-pear', name: '软梨块', emoji: '🍐',
    ageMin: 12, ageMax: 24, texture: '软梨块',
    category: '点心', time: 5, serving: '几小块',
    nutrients: ['补维C', '补膳食纤维'],
    allergens: [], sources: ['B', 'C'],
    why: '梨水分足、纤维多，助缓解便秘。这个月龄可吃软梨块，但 CDC 强调硬蔬果要煮软或切安全大小。',
    ingredients: [
      { name: '熟梨', amount: '半个' }
    ],
    tools: ['刀'],
    steps: [
      { text: '梨去皮去核。', tip: '去皮。' },
      { text: '切成软的小块。', tip: '选熟软梨，或蒸软。' }
    ],
    cautions: ['梨要熟软，硬梨块是窒息风险。', '切小块，别给整块。']
  },

  {
    id: 'bass-tofu-cabbage-rice', name: '鲈鱼豆腐白菜饭', emoji: '🐟',
    ageMin: 12, ageMax: 30, texture: '软烂烩饭',
    category: '主食', time: 30, serving: '1 小碗',
    nutrients: ['补DHA', '补钙', '高蛋白'],
    allergens: ['鱼', '大豆'], sources: ['A', 'B', 'C'],
    why: '鲈鱼低汞、DHA 丰富，豆腐补钙，白菜补纤维。CDC 强调鱼类彻底去骨去刺。WHO 建议每天安排肉鱼蛋和豆类。',
    ingredients: [
      { name: '鲈鱼', amount: '30g' },
      { name: '嫩豆腐', amount: '1/4 块' },
      { name: '白菜', amount: '2 片' },
      { name: '软饭', amount: '1 小碗' }
    ],
    tools: ['炒锅', '刀'],
    steps: [
      { text: '鲈鱼蒸熟，逐根挑净鱼刺。', tip: '手指捻碎再查。' },
      { text: '豆腐切小丁，白菜切细。', tip: '切细。' },
      { text: '鲈鱼、豆腐、白菜和软饭加水烩 5 分钟。', tip: '烩到软烂。' }
    ],
    cautions: ['鲈鱼逐根去刺。', '豆腐丁切小。', '鱼和豆是过敏原，注意观察。']
  },

  {
    id: 'beef-tomato-potato-rice', name: '牛肉番茄土豆炖饭', emoji: '🐮',
    ageMin: 12, ageMax: 36, texture: '软烂炖饭',
    category: '主食', time: 40, serving: '1 小碗',
    nutrients: ['补铁', '补维C', '补维A'],
    allergens: [], sources: ['A', 'B'],
    why: '牛肉补铁，番茄维 C 促进铁吸收，土豆增稠。一锅炖饭软烂营养全面。中国指南强调富铁食物。',
    ingredients: [
      { name: '牛里脊', amount: '30g' },
      { name: '番茄', amount: '1 个' },
      { name: '土豆', amount: '半个' },
      { name: '大米', amount: '3 勺' }
    ],
    tools: ['炖锅', '刀'],
    steps: [
      { text: '牛肉切小丁焯水。', tip: '0.5cm 小丁。' },
      { text: '番茄烫皮切碎，土豆切小丁。', tip: '去皮切丁。' },
      { text: '牛肉、番茄、土豆、大米加水炖 20 分钟。', tip: '水量稍多。' },
      { text: '炖到软烂收汁。', tip: '饭软烂。' }
    ],
    cautions: ['牛肉炖软。', '番茄去皮。', '饭别太干。']
  },

  {
    id: 'egg-spinach-noodle', name: '鸡蛋菠菜面', emoji: '🍜',
    ageMin: 12, ageMax: 30, texture: '软面',
    category: '主食', time: 20, serving: '1 小碗',
    nutrients: ['高蛋白', '补叶酸', '补铁'],
    allergens: ['蛋', '小麦'], sources: ['A', 'B', 'D'],
    why: '鸡蛋补蛋白，菠菜补叶酸和铁（注意植物铁吸收率低），面锻炼咀嚼。鸡蛋是过敏原，AAP 建议尽早引入。',
    ingredients: [
      { name: '面条', amount: '1 小把' },
      { name: '鸡蛋', amount: '1 个' },
      { name: '菠菜', amount: '几片' }
    ],
    tools: ['小锅', '刀'],
    steps: [
      { text: '菠菜焯水切细。', tip: '去草酸。' },
      { text: '面条煮软。', tip: '煮软烂。' },
      { text: '鸡蛋打散淋入煮成蛋花。', tip: '全熟。' },
      { text: '下菠菜碎煮 1 分钟。', tip: '最后放。' }
    ],
    cautions: ['鸡蛋全熟。', '菠菜焯水切细。', '面条煮软。']
  },

  {
    id: 'yogurt-kiwi', name: '原味酸奶 + 猕猴桃', emoji: '🥝',
    ageMin: 12, ageMax: 36, texture: '软果 + 酸奶',
    category: '点心', time: 5, serving: '酸奶 1 小杯 + 猕猴桃半个',
    nutrients: ['补钙', '补维C', '补膳食纤维'],
    allergens: ['奶'], sources: ['B', 'D'],
    why: '猕猴桃维 C 极高，酸奶补钙。猕猴桃是水果中维 C 之王，有助于铁吸收。',
    ingredients: [
      { name: '无糖原味酸奶', amount: '1 小杯' },
      { name: '熟猕猴桃', amount: '半个' }
    ],
    tools: ['刀'],
    steps: [
      { text: '猕猴桃去皮切小块。', tip: '选熟软猕猴桃。' },
      { text: '拌酸奶吃。', tip: '无糖原味酸奶。' }
    ],
    cautions: ['猕猴桃选熟软的，生猕猴桃酸且硬。', '切小块。', '奶过敏者回避。']
  },

  {
    id: 'shrimp-zucchini-rice', name: '虾仁西葫芦软饭', emoji: '🦐',
    ageMin: 12, ageMax: 30, texture: '软烂烩饭',
    category: '主食', time: 25, serving: '1 小碗',
    nutrients: ['高蛋白', '补锌', '补维C'],
    allergens: ['甲壳类'], sources: ['B', 'C', 'D'],
    why: '虾仁高蛋白低脂肪、补锌，西葫芦纤维细软。甲壳类是常见过敏原，AAP 建议尽早引入。',
    ingredients: [
      { name: '虾仁', amount: '3-4 只' },
      { name: '西葫芦', amount: '一小段' },
      { name: '软饭', amount: '1 小碗' }
    ],
    tools: ['炒锅', '刀'],
    steps: [
      { text: '虾去壳去虾线，切小丁。', tip: '0.5cm 小丁。' },
      { text: '西葫芦去皮去籽切小丁。', tip: '切小丁。' },
      { text: '虾丁炒变色，下西葫芦炒软。', tip: '虾变色即熟。' },
      { text: '加软饭和水烩 3 分钟。', tip: '软烂。' }
    ],
    cautions: ['虾切小丁，别给整只。', '甲壳类过敏者首次少量试。', '软饭别太干。']
  },

  {
    id: 'chicken-pumpkin-millet', name: '鸡肉南瓜小米粥 + 西兰花', emoji: '🐔',
    ageMin: 12, ageMax: 24, texture: '稠粥',
    category: '主食', time: 30, serving: '1 小碗 + 西兰花',
    nutrients: ['高蛋白', '补维A', '补维C'],
    allergens: [], sources: ['A', 'B'],
    why: '鸡肉补蛋白，南瓜补维 A，小米温和易消化，西兰花补维 C。营养全面的晚餐。',
    ingredients: [
      { name: '小米', amount: '2 勺' },
      { name: '鸡肉末', amount: '30g' },
      { name: '南瓜', amount: '一小块' },
      { name: '西兰花', amount: '2 朵' }
    ],
    tools: ['小锅', '刀'],
    steps: [
      { text: '小米煮稠粥，南瓜切碎同煮。', tip: '南瓜煮软。' },
      { text: '鸡肉末下锅煮熟。', tip: '搅散。' },
      { text: '西兰花取花球焯水切碎。', tip: '切细。' },
      { text: '西兰花拌入粥。', tip: '最后放。' }
    ],
    cautions: ['鸡肉搅散。', '西兰花切细。', '保留颗粒感。']
  },

  {
    id: 'sesame-banana-toast', name: '芝麻酱香蕉软吐司 + 牛奶', emoji: '🥜',
    ageMin: 12, ageMax: 36, texture: '软吐司',
    category: '点心', time: 10, serving: '1 片吐司 + 牛奶 1 杯',
    nutrients: ['补钙', '补钾', '高蛋白'],
    allergens: ['芝麻', '小麦', '奶'], sources: ['B', 'D'],
    why: '芝麻酱补钙，香蕉补钾，牛奶补钙和蛋白（满 1 岁后可喝全脂牛奶）。',
    ingredients: [
      { name: '软吐司', amount: '1 片' },
      { name: '熟香蕉', amount: '半根' },
      { name: '纯芝麻酱', amount: '少量' },
      { name: '全脂牛奶', amount: '1 杯' }
    ],
    tools: ['刀'],
    steps: [
      { text: '香蕉压泥。', tip: '熟透。' },
      { text: '吐司去硬边，抹芝麻酱和香蕉泥。', tip: '芝麻酱少量。' },
      { text: '切小块配牛奶。', tip: '满 1 岁后可喝全脂牛奶。' }
    ],
    cautions: ['芝麻是过敏原，注意观察。', '选全脂牛奶，不用低脂。', '吐司去硬边。']
  },

  {
    id: 'avocado', name: '牛油果', emoji: '🥑',
    ageMin: 12, ageMax: 36, texture: '软果',
    category: '点心', time: 5, serving: '1/4 个',
    nutrients: ['补DHA', '高蛋白', '补钾'],
    allergens: [], sources: ['B'],
    why: '牛油果富含优质不饱和脂肪，是大脑发育的重要原料，直接吃或压泥即可。',
    ingredients: [
      { name: '熟牛油果', amount: '1/4 个' }
    ],
    tools: ['刀', '叉子'],
    steps: [
      { text: '牛油果对半切去核，取 1/4 个果肉。', tip: '选熟果。' },
      { text: '压泥或切小块。', tip: '软烂易吃。' }
    ],
    cautions: ['热量高，一次 1/4 个足够。', '氧化变黑不吃。']
  },

  {
    id: 'pork-cabbage-tofu-dumpling', name: '猪肉白菜豆腐饺子', emoji: '🥟',
    ageMin: 12, ageMax: 36, texture: '软饺子',
    category: '主食', time: 50, serving: '3-4 个小饺子',
    nutrients: ['高蛋白', '补铁', '补钙'],
    allergens: ['大豆', '小麦'], sources: ['A', 'B', 'C'],
    why: '饺子营养均衡、方便，是幼儿接受度高的主食。关键在形态：皮薄、馅碎、少盐、煮软、切小块。中国指南强调少盐和进食安全。',
    ingredients: [
      { name: '饺子皮', amount: '适量' },
      { name: '猪肉末', amount: '40g' },
      { name: '白菜', amount: '2 片' },
      { name: '嫩豆腐', amount: '1/4 块' }
    ],
    tools: ['锅', '刀'],
    steps: [
      { text: '白菜焯水切碎挤干，豆腐压碎。', tip: '馅要剁碎。' },
      { text: '肉末、白菜、豆腐拌成馅。', tip: '少盐或不放盐。' },
      { text: '包成小饺子，皮不要太厚。', tip: '馅剁碎。' },
      { text: '煮到充分柔软，捞出。', tip: '煮透煮软。' },
      { text: '切成适合吞咽的小块。', tip: '切小块防呛。' }
    ],
    cautions: ['皮不要太厚，馅剁碎。', '少盐或不额外放盐。', '煮得充分柔软，切成小块。']
  },

  {
    id: 'salmon-tomato-noodle', name: '三文鱼番茄软面', emoji: '🐟',
    ageMin: 12, ageMax: 30, texture: '软面',
    category: '主食', time: 25, serving: '1 小碗',
    nutrients: ['补DHA', '高蛋白', '补维C'],
    allergens: ['鱼', '小麦'], sources: ['A', 'B', 'C'],
    why: '三文鱼补 DHA，番茄维 C 促进铁吸收。CDC 强调鱼类彻底去刺。WHO 建议每天安排肉鱼蛋。',
    ingredients: [
      { name: '三文鱼', amount: '30g' },
      { name: '番茄', amount: '1 个' },
      { name: '面条', amount: '1 小把' }
    ],
    tools: ['小锅', '刀'],
    steps: [
      { text: '三文鱼蒸熟，逐根挑净鱼刺。', tip: '手指捻碎再查。' },
      { text: '番茄烫皮切碎炖成汁。', tip: '去皮。' },
      { text: '面条煮软，加番茄汁。', tip: '煮软。' },
      { text: '拌入三文鱼肉碎。', tip: '最后放。' }
    ],
    cautions: ['三文鱼逐根去刺。', '番茄去皮。', '面条煮软。']
  },

  {
    id: 'egg-veggie-pancake', name: '鸡蛋蔬菜软饼', emoji: '🥞',
    ageMin: 12, ageMax: 36, texture: '软嫩薄饼',
    category: '点心', time: 20, serving: '1-2 块',
    nutrients: ['高蛋白', '补维C', '补钙'],
    allergens: ['蛋', '小麦'], sources: ['A', 'B', 'C', 'D'],
    why: '鸡蛋补蛋白，蔬菜补维生素，软饼是理想的手指食物。鸡蛋是过敏原，AAP 建议尽早引入。少油煎制，做得柔软。',
    ingredients: [
      { name: '鸡蛋', amount: '1 个' },
      { name: '面粉', amount: '1 勺' },
      { name: '胡萝卜碎、西葫芦碎', amount: '各少许' }
    ],
    tools: ['不粘锅', '碗'],
    steps: [
      { text: '胡萝卜、西葫芦切细末。', tip: '切细，饼不散。' },
      { text: '鸡蛋打散，加面粉和菜末拌匀。', tip: '调成略稠面糊。' },
      { text: '不粘锅刷薄油，小火。', tip: '少油。' },
      { text: '倒面糊摊薄饼，小火烙熟。', tip: '做得柔软，全熟。' }
    ],
    cautions: ['鸡蛋全熟。', '少油煎，做得柔软。', '切小块给。']
  },

  {
    id: 'yogurt-strawberry', name: '原味酸奶 + 草莓小块', emoji: '🍓',
    ageMin: 12, ageMax: 36, texture: '软果 + 酸奶',
    category: '点心', time: 5, serving: '酸奶 1 小杯 + 草莓 2-3 颗',
    nutrients: ['补钙', '补维C', '花青素'],
    allergens: ['奶'], sources: ['B', 'C'],
    why: '草莓维 C 丰富，酸奶补钙。CDC 强调草莓要切小块，整颗是窒息风险。',
    ingredients: [
      { name: '无糖原味酸奶', amount: '1 小杯' },
      { name: '草莓', amount: '2-3 颗' }
    ],
    tools: ['刀'],
    steps: [
      { text: '草莓洗净去蒂，切成小块。', tip: '3 岁前草莓切小块。' },
      { text: '拌酸奶吃。', tip: '无糖原味酸奶。' }
    ],
    cautions: ['草莓切小块，整颗是窒息风险。', '奶过敏者回避。']
  },

  {
    id: 'beef-mushroom-rice', name: '牛肉蘑菇炖饭', emoji: '🍄',
    ageMin: 12, ageMax: 36, texture: '软烂炖饭',
    category: '主食', time: 40, serving: '1 小碗',
    nutrients: ['补铁', '补锌', '补膳食纤维'],
    allergens: [], sources: ['A', 'B'],
    why: '牛肉补铁补锌，蘑菇提供天然鲜味，一锅炖饭软烂营养。中国指南强调富铁食物。',
    ingredients: [
      { name: '牛里脊', amount: '30g' },
      { name: '蘑菇', amount: '2-3 朵' },
      { name: '大米', amount: '3 勺' }
    ],
    tools: ['炖锅', '刀'],
    steps: [
      { text: '牛肉切小丁焯水。', tip: '0.5cm 小丁。' },
      { text: '蘑菇剁细。', tip: '菌类滑韧，剁细。' },
      { text: '牛肉、蘑菇、大米加水炖 20 分钟。', tip: '水量稍多。' },
      { text: '炖到软烂收汁。', tip: '饭软烂。' }
    ],
    cautions: ['蘑菇剁细。', '牛肉炖软。', '饭别太干。']
  },

  {
    id: 'tofu-shrimp-pumpkin-congee', name: '豆腐虾仁南瓜粥', emoji: '🦐',
    ageMin: 12, ageMax: 30, texture: '稠粥',
    category: '主食', time: 30, serving: '1 小碗',
    nutrients: ['补钙', '补锌', '补维A'],
    allergens: ['甲壳类', '大豆'], sources: ['B', 'D'],
    why: '虾仁补锌，豆腐补钙，南瓜补维 A。虾和豆都是过敏原，AAP 建议尽早引入。',
    ingredients: [
      { name: '虾仁', amount: '3 只' },
      { name: '嫩豆腐', amount: '1/4 块' },
      { name: '南瓜', amount: '一小块' },
      { name: '大米', amount: '2 勺' }
    ],
    tools: ['小锅', '刀'],
    steps: [
      { text: '虾去壳去虾线剁碎。', tip: '剁细。' },
      { text: '大米煮稠粥，南瓜切碎同煮。', tip: '南瓜煮软。' },
      { text: '豆腐切小丁，和虾泥下锅煮 3 分钟。', tip: '虾泥变色即熟。' }
    ],
    cautions: ['虾剁细。', '豆腐丁切小。', '虾和豆过敏者注意。']
  },

  {
    id: 'oat-banana-egg-pancake', name: '燕麦香蕉鸡蛋软饼', emoji: '🥞',
    ageMin: 12, ageMax: 36, texture: '软嫩小饼',
    category: '点心', time: 20, serving: '1-2 块',
    nutrients: ['高蛋白', '补钾', '补膳食纤维'],
    allergens: ['蛋'], sources: ['A', 'B', 'D'],
    why: '燕麦补纤维，香蕉补钾，鸡蛋补蛋白，软饼是理想手指食物。鸡蛋是过敏原，AAP 建议尽早引入。',
    ingredients: [
      { name: '燕麦片', amount: '2 勺' },
      { name: '熟香蕉', amount: '半根' },
      { name: '鸡蛋', amount: '1 个' }
    ],
    tools: ['不粘锅', '碗'],
    steps: [
      { text: '香蕉压泥。', tip: '熟透。' },
      { text: '鸡蛋打散，和燕麦、香蕉泥拌匀。', tip: '燕麦可先泡软。' },
      { text: '不粘锅刷薄油，小火煎成小饼。', tip: '少油，全熟。' }
    ],
    cautions: ['鸡蛋全熟。', '少油。', '切小块给。']
  },

  {
    id: 'pear-yogurt', name: '梨 + 酸奶', emoji: '🍐',
    ageMin: 12, ageMax: 36, texture: '软果 + 酸奶',
    category: '点心', time: 5, serving: '梨几块 + 酸奶 1 小杯',
    nutrients: ['补钙', '补维C', '补膳食纤维'],
    allergens: ['奶'], sources: ['B'],
    why: '梨补纤维助通便，酸奶补钙。简单加餐组合。',
    ingredients: [
      { name: '熟梨', amount: '半个' },
      { name: '无糖原味酸奶', amount: '1 小杯' }
    ],
    tools: ['刀'],
    steps: [
      { text: '梨去皮去核切小块。', tip: '选熟软梨。' },
      { text: '配酸奶吃。', tip: '无糖原味酸奶。' }
    ],
    cautions: ['梨选熟软，硬梨块窒息风险。', '奶过敏者回避。']
  },

  {
    id: 'chicken-carrot-broccoli-rice', name: '鸡肉胡萝卜西兰花焖饭', emoji: '🐔',
    ageMin: 12, ageMax: 36, texture: '软糯焖饭',
    category: '主食', time: 40, serving: '1 小碗',
    nutrients: ['高蛋白', '补维A', '补维C'],
    allergens: [], sources: ['A', 'B'],
    why: '鸡肉补蛋白，胡萝卜补维 A，西兰花补维 C，焖饭一锅出省时省力。中国指南强调食物多样。',
    ingredients: [
      { name: '大米', amount: '3 勺' },
      { name: '鸡肉末', amount: '30g' },
      { name: '胡萝卜', amount: '一小段' },
      { name: '西兰花', amount: '2 朵' }
    ],
    tools: ['电饭煲或炖锅', '刀'],
    steps: [
      { text: '鸡肉末焯水，胡萝卜切碎，西兰花取花球切碎。', tip: '都切碎。' },
      { text: '大米洗净加水，拌入鸡肉和蔬菜。', tip: '水量稍多。' },
      { text: '焖熟。', tip: '正常煮饭程序。' }
    ],
    cautions: ['鸡肉末焯水去腥。', '蔬菜切碎。', '水量稍多，饭更软。']
  },

  {
    id: 'fish-tofu-veggie-noodle', name: '鱼肉豆腐蔬菜汤面', emoji: '🐟',
    ageMin: 12, ageMax: 36, texture: '软面汤',
    category: '主食', time: 25, serving: '1 小碗',
    nutrients: ['补DHA', '补钙', '高蛋白'],
    allergens: ['鱼', '大豆', '小麦'], sources: ['A', 'B', 'C'],
    why: '鱼肉补 DHA，豆腐补钙，蔬菜补维生素，汤面软烂易吃。CDC 强调鱼类彻底去刺。',
    ingredients: [
      { name: '鱼肉（低汞鱼）', amount: '30g' },
      { name: '嫩豆腐', amount: '1/4 块' },
      { name: '青菜', amount: '几片' },
      { name: '面条', amount: '1 小把' }
    ],
    tools: ['小锅', '刀'],
    steps: [
      { text: '鱼肉蒸熟，逐根挑净鱼刺。', tip: '手指捻碎再查。' },
      { text: '面条煮软，豆腐切小丁，青菜切细。', tip: '都切小。' },
      { text: '豆腐、青菜下锅煮 2 分钟。', tip: '最后放菜。' },
      { text: '拌入鱼肉碎。', tip: '最后放鱼。' }
    ],
    cautions: ['鱼肉逐根去刺。', '豆腐丁切小。', '面条煮软。']
  },

  /* ==================== 24-36 月龄 ==================== */
  {
    id: 'milk-egg-tomato-noodle', name: '牛奶 + 鸡蛋番茄面 + 香蕉', emoji: '🍜',
    ageMin: 24, ageMax: 36, texture: '正常软面',
    category: '主食', time: 20, serving: '牛奶 1 杯 + 面 1 碗 + 香蕉半根',
    nutrients: ['补钙', '高蛋白', '补维C'],
    allergens: ['蛋', '小麦', '奶'], sources: ['E'],
    why: '满 2 岁强调每天饮奶、食物多样。鸡蛋番茄面营养均衡，香蕉补钾，牛奶补钙。这套早餐符合 2-3 岁「食物多样、规律就餐、每天饮奶」的指南要求。',
    ingredients: [
      { name: '全脂牛奶', amount: '1 杯' },
      { name: '面条', amount: '1 小把' },
      { name: '鸡蛋', amount: '1 个' },
      { name: '番茄', amount: '1 个' },
      { name: '香蕉', amount: '半根' }
    ],
    tools: ['炒锅', '刀'],
    steps: [
      { text: '番茄烫皮切块炒软出汁。', tip: '去皮。' },
      { text: '加水烧开下面条煮软。', tip: '煮软。' },
      { text: '淋蛋液成蛋花。', tip: '全熟。' },
      { text: '先给孩子盛出，大人再加盐。', tip: '先盛后调味。' },
      { text: '配牛奶和香蕉。', tip: '牛奶全脂。' }
    ],
    cautions: ['先给孩子盛出再调味，控制盐分。', '鸡蛋全熟。', '牛奶选全脂。']
  },

  {
    id: 'beef-broccoli-tofu-soup', name: '牛肉西兰花饭 + 豆腐汤', emoji: '🐮',
    ageMin: 24, ageMax: 36, texture: '软饭 + 汤',
    category: '主食', time: 35, serving: '饭 1 小碗 + 汤 1 碗',
    nutrients: ['补铁', '补钙', '补维C'],
    allergens: ['大豆'], sources: ['A', 'B', 'E'],
    why: '牛肉补铁，西兰花补维 C，豆腐汤补钙。中国指南强调食物多样、清淡烹调，这套组合荤素搭配、营养全面。',
    ingredients: [
      { name: '牛里脊', amount: '40g' },
      { name: '西兰花', amount: '3-4 朵' },
      { name: '嫩豆腐', amount: '半块' },
      { name: '米饭', amount: '1 小碗' }
    ],
    tools: ['炒锅', '刀'],
    steps: [
      { text: '牛肉切小丁焯水炖软，西兰花取花球焯水。', tip: '牛肉炖软。' },
      { text: '牛肉西兰花炒匀配饭。', tip: '先盛后调味。' },
      { text: '豆腐切丁煮成豆腐汤。', tip: '汤清淡少盐。' }
    ],
    cautions: ['牛肉炖软。', '汤要清淡，少盐。', '豆腐含大豆，过敏者回避。']
  },

  {
    id: 'salmon-potato-greens', name: '三文鱼土豆泥 + 炒软青菜 + 米饭', emoji: '🐟',
    ageMin: 24, ageMax: 36, texture: '软烂饭菜',
    category: '主食', time: 30, serving: '鱼泥 + 青菜 + 米饭各一份',
    nutrients: ['补DHA', '高蛋白', '补维C'],
    allergens: ['鱼'], sources: ['B', 'E'],
    why: '三文鱼补 DHA，土豆泥软糯，炒软青菜补维生素。这套荤素搭配符合 2-3 岁食物多样的要求。',
    ingredients: [
      { name: '三文鱼', amount: '30g' },
      { name: '土豆', amount: '半个' },
      { name: '青菜', amount: '几片' },
      { name: '米饭', amount: '1 小碗' }
    ],
    tools: ['蒸锅', '炒锅', '刀'],
    steps: [
      { text: '三文鱼蒸熟，逐根挑净鱼刺。', tip: '手指捻碎再查。' },
      { text: '土豆蒸软压泥。', tip: '趁热压。' },
      { text: '青菜切段炒软。', tip: '少油少盐。' },
      { text: '三者配米饭。', tip: '荤素搭配。' }
    ],
    cautions: ['三文鱼逐根去刺。', '青菜炒软切小段。', '清淡少盐。']
  },

  {
    id: 'oat-milk-egg-blueberry', name: '燕麦牛奶粥 + 鸡蛋 + 蓝莓', emoji: '🥣',
    ageMin: 24, ageMax: 36, texture: '软粥',
    category: '主食', time: 15, serving: '粥 1 碗 + 蛋 1 个 + 蓝莓几颗',
    nutrients: ['补钙', '高蛋白', '补维C'],
    allergens: ['蛋', '奶'], sources: ['E'],
    why: '燕麦补纤维，牛奶补钙，鸡蛋补蛋白，蓝莓补维 C。符合 2-3 岁「每天饮奶、食物多样」的要求。',
    ingredients: [
      { name: '燕麦片', amount: '2 勺' },
      { name: '全脂牛奶', amount: '1 杯' },
      { name: '鸡蛋', amount: '1 个' },
      { name: '蓝莓', amount: '几颗' }
    ],
    tools: ['小锅'],
    steps: [
      { text: '燕麦加牛奶煮软。', tip: '牛奶小火煮，别溢锅。' },
      { text: '鸡蛋煮熟。', tip: '全熟。' },
      { text: '蓝莓切开。', tip: '3 岁前蓝莓切开。' }
    ],
    cautions: ['蓝莓切开，整颗窒息风险。', '鸡蛋全熟。', '牛奶全脂。']
  },

  {
    id: 'chicken-pumpkin-zucchini-rice', name: '鸡腿肉南瓜焖饭 + 西葫芦', emoji: '🐔',
    ageMin: 24, ageMax: 36, texture: '软糯焖饭',
    category: '主食', time: 40, serving: '焖饭 1 小碗 + 西葫芦',
    nutrients: ['高蛋白', '补维A', '补维C'],
    allergens: [], sources: ['B', 'E'],
    why: '鸡腿肉补蛋白，南瓜补维 A，西葫芦补维 C。焖饭一锅出省时，符合 2-3 岁食物多样的要求。',
    ingredients: [
      { name: '鸡腿肉', amount: '40g' },
      { name: '南瓜', amount: '一小块' },
      { name: '大米', amount: '3 勺' },
      { name: '西葫芦', amount: '一小段' }
    ],
    tools: ['电饭煲', '刀'],
    steps: [
      { text: '鸡腿肉去皮去骨切丁。', tip: '切小丁。' },
      { text: '南瓜、西葫芦切小丁。', tip: '切丁。' },
      { text: '鸡肉、南瓜、大米加水焖熟。', tip: '水量稍多。' },
      { text: '西葫芦炒软配着吃。', tip: '少油。' }
    ],
    cautions: ['鸡腿肉去皮。', '蔬菜切小丁。', '清淡少盐。']
  },

  {
    id: 'tomato-shrimp-noodle-tofu', name: '番茄虾仁面 + 豆腐', emoji: '🦐',
    ageMin: 24, ageMax: 36, texture: '软面',
    category: '主食', time: 25, serving: '面 1 碗 + 豆腐',
    nutrients: ['高蛋白', '补锌', '补维C'],
    allergens: ['甲壳类', '小麦', '大豆'], sources: ['B', 'D', 'E'],
    why: '虾仁补锌，番茄维 C，豆腐补钙。虾是过敏原，AAP 建议尽早引入。这套营养均衡。',
    ingredients: [
      { name: '虾仁', amount: '4-5 只' },
      { name: '番茄', amount: '1 个' },
      { name: '面条', amount: '1 小把' },
      { name: '嫩豆腐', amount: '半块' }
    ],
    tools: ['炒锅', '刀'],
    steps: [
      { text: '虾去壳去虾线切小丁。', tip: '切小丁。' },
      { text: '番茄烫皮切块炒软出汁。', tip: '去皮。' },
      { text: '加水烧开下面煮软，下虾丁煮熟。', tip: '虾变色即熟。' },
      { text: '豆腐切丁下锅煮 2 分钟。', tip: '轻搅。' }
    ],
    cautions: ['虾切小丁。', '豆腐丁切小。', '先盛后调味。']
  },

  {
    id: 'yogurt-oat-banana-sesame', name: '原味酸奶 + 燕麦 + 香蕉 + 芝麻酱', emoji: '🥣',
    ageMin: 24, ageMax: 36, texture: '软果奶碗',
    category: '点心', time: 10, serving: '1 碗',
    nutrients: ['补钙', '补钾', '补膳食纤维'],
    allergens: ['奶', '芝麻'], sources: ['B', 'D', 'E'],
    why: '酸奶补钙，燕麦补纤维，香蕉补钾，芝麻酱补钙。这是营养丰富的早餐或加餐。',
    ingredients: [
      { name: '无糖原味酸奶', amount: '1 小杯' },
      { name: '燕麦片', amount: '2 勺' },
      { name: '熟香蕉', amount: '半根' },
      { name: '纯芝麻酱', amount: '少量' }
    ],
    tools: ['碗'],
    steps: [
      { text: '燕麦泡软或煮软。', tip: '原味燕麦。' },
      { text: '香蕉切小段，芝麻酱温水调稀。', tip: '芝麻酱少量。' },
      { text: '全部拌入酸奶。', tip: '拌匀。' }
    ],
    cautions: ['芝麻是过敏原，注意观察。', '选无糖原味酸奶。', '芝麻酱少量。']
  },

  {
    id: 'pork-cabbage-dumpling-broccoli', name: '猪肉白菜饺子 + 西兰花', emoji: '🥟',
    ageMin: 24, ageMax: 36, texture: '软饺子',
    category: '主食', time: 50, serving: '4-5 个小饺子 + 西兰花',
    nutrients: ['高蛋白', '补铁', '补维C'],
    allergens: ['小麦'], sources: ['A', 'E'],
    why: '饺子营养均衡，西兰花补维 C。中国指南强调食物多样、清淡烹调。饺子要皮薄馅碎、少盐、煮软切小块。',
    ingredients: [
      { name: '饺子皮', amount: '适量' },
      { name: '猪肉末', amount: '40g' },
      { name: '白菜', amount: '2 片' },
      { name: '西兰花', amount: '3 朵' }
    ],
    tools: ['锅', '刀'],
    steps: [
      { text: '白菜焯水切碎挤干，和肉末拌馅。', tip: '少盐。' },
      { text: '包小饺子，煮到充分柔软。', tip: '煮透。' },
      { text: '西兰花取花球焯水。', tip: '配饺子。' },
      { text: '饺子切小块。', tip: '切小块防呛。' }
    ],
    cautions: ['饺子煮软切小块。', '少盐。', '西兰花切碎或蒸软。']
  },

  {
    id: 'bass-rice-tomato-egg', name: '鲈鱼软饭 + 番茄炒蛋', emoji: '🐟',
    ageMin: 24, ageMax: 36, texture: '软饭 + 软菜',
    category: '主食', time: 30, serving: '软饭 1 碗 + 番茄炒蛋',
    nutrients: ['补DHA', '高蛋白', '补维C'],
    allergens: ['鱼', '蛋'], sources: ['B', 'D', 'E'],
    why: '鲈鱼低汞补 DHA，番茄炒蛋补蛋白和维 C。鱼和蛋都是过敏原，AAP 建议尽早引入。营养均衡。',
    ingredients: [
      { name: '鲈鱼', amount: '40g' },
      { name: '番茄', amount: '1 个' },
      { name: '鸡蛋', amount: '1 个' },
      { name: '软饭', amount: '1 小碗' }
    ],
    tools: ['蒸锅', '炒锅', '刀'],
    steps: [
      { text: '鲈鱼蒸熟，逐根挑净鱼刺。', tip: '手指捻碎再查。' },
      { text: '番茄烫皮切块，鸡蛋炒嫩，和番茄炒匀。', tip: '鸡蛋全熟。' },
      { text: '鲈鱼配软饭和番茄炒蛋。', tip: '荤素搭配。' }
    ],
    cautions: ['鲈鱼逐根去刺。', '鸡蛋全熟。', '先盛后调味。']
  },

  {
    id: 'milk-egg-veggie-pancake-pear', name: '牛奶 + 鸡蛋蔬菜软饼 + 梨', emoji: '🥞',
    ageMin: 24, ageMax: 36, texture: '软饼 + 水果',
    category: '主食', time: 20, serving: '牛奶 1 杯 + 软饼 1 块 + 梨',
    nutrients: ['补钙', '高蛋白', '补维C'],
    allergens: ['蛋', '奶', '小麦'], sources: ['E'],
    why: '牛奶补钙，鸡蛋蔬菜软饼补蛋白和维生素，梨补纤维。符合 2-3 岁每天饮奶、食物多样的要求。',
    ingredients: [
      { name: '全脂牛奶', amount: '1 杯' },
      { name: '鸡蛋', amount: '1 个' },
      { name: '面粉', amount: '1 勺' },
      { name: '胡萝卜碎', amount: '少许' },
      { name: '梨', amount: '半个' }
    ],
    tools: ['不粘锅', '刀'],
    steps: [
      { text: '鸡蛋加面粉和胡萝卜碎调面糊。', tip: '略稠。' },
      { text: '不粘锅少油小火煎软饼。', tip: '全熟柔软。' },
      { text: '梨去皮切小块。', tip: '熟软梨。' },
      { text: '配牛奶。', tip: '全脂牛奶。' }
    ],
    cautions: ['鸡蛋全熟。', '少油。', '梨切小块。']
  },

  {
    id: 'beef-tomato-potato-greens', name: '牛肉番茄土豆饭 + 青菜', emoji: '🐮',
    ageMin: 24, ageMax: 36, texture: '软烂炖饭',
    category: '主食', time: 40, serving: '炖饭 1 小碗 + 青菜',
    nutrients: ['补铁', '补维C', '补维A'],
    allergens: [], sources: ['A', 'B', 'E'],
    why: '牛肉补铁，番茄维 C 促进铁吸收，土豆增稠，青菜补维生素。中国指南强调富铁食物和食物多样。',
    ingredients: [
      { name: '牛里脊', amount: '40g' },
      { name: '番茄', amount: '1 个' },
      { name: '土豆', amount: '半个' },
      { name: '青菜', amount: '几片' },
      { name: '大米', amount: '3 勺' }
    ],
    tools: ['炖锅', '刀'],
    steps: [
      { text: '牛肉切小丁焯水。', tip: '小丁。' },
      { text: '番茄烫皮切碎，土豆切小丁。', tip: '切丁。' },
      { text: '牛肉、番茄、土豆、大米加水炖 20 分钟。', tip: '炖软烂。' },
      { text: '青菜炒软配着吃。', tip: '少油。' }
    ],
    cautions: ['牛肉炖软。', '番茄去皮。', '清淡少盐。']
  },

  {
    id: 'chicken-mushroom-noodle-tofu', name: '鸡肉香菇面 + 豆腐', emoji: '🍜',
    ageMin: 24, ageMax: 36, texture: '软面',
    category: '主食', time: 25, serving: '面 1 碗 + 豆腐',
    nutrients: ['高蛋白', '补钙', '补维B'],
    allergens: ['小麦', '大豆'], sources: ['B', 'E'],
    why: '鸡肉补蛋白，香菇提鲜，豆腐补钙。清淡又营养，符合 2-3 岁清淡烹调的要求。',
    ingredients: [
      { name: '面条', amount: '1 小把' },
      { name: '鸡肉末', amount: '30g' },
      { name: '香菇', amount: '1-2 朵' },
      { name: '嫩豆腐', amount: '半块' }
    ],
    tools: ['小锅', '刀'],
    steps: [
      { text: '香菇泡发剁细。', tip: '剁细。' },
      { text: '面条煮软，下香菇、鸡肉末煮熟。', tip: '鸡肉搅散。' },
      { text: '豆腐切丁下锅煮 2 分钟。', tip: '轻搅。' }
    ],
    cautions: ['香菇剁细。', '豆腐丁切小。', '清淡少盐。']
  },

  {
    id: 'millet-pumpkin-egg-kiwi', name: '小米南瓜粥 + 鸡蛋 + 猕猴桃', emoji: '🎃',
    ageMin: 24, ageMax: 36, texture: '软粥 + 水果',
    category: '主食', time: 25, serving: '粥 1 碗 + 蛋 1 个 + 猕猴桃半个',
    nutrients: ['补维A', '高蛋白', '补维C'],
    allergens: ['蛋'], sources: ['B', 'E'],
    why: '小米南瓜粥温和易消化，鸡蛋补蛋白，猕猴桃维 C 极高。营养均衡的早餐。',
    ingredients: [
      { name: '小米', amount: '2 勺' },
      { name: '南瓜', amount: '一小块' },
      { name: '鸡蛋', amount: '1 个' },
      { name: '熟猕猴桃', amount: '半个' }
    ],
    tools: ['小锅'],
    steps: [
      { text: '小米煮稠粥，南瓜切碎同煮。', tip: '煮软。' },
      { text: '鸡蛋煮熟。', tip: '全熟。' },
      { text: '猕猴桃去皮切小块。', tip: '选熟软。' }
    ],
    cautions: ['鸡蛋全熟。', '猕猴桃选熟软。', '切小块。']
  },

  {
    id: 'salmon-broccoli-pasta', name: '三文鱼西兰花意面', emoji: '🍝',
    ageMin: 24, ageMax: 36, texture: '软意面',
    category: '主食', time: 25, serving: '1 小碗',
    nutrients: ['补DHA', '高蛋白', '补维C'],
    allergens: ['鱼', '小麦'], sources: ['B', 'E'],
    why: '三文鱼补 DHA，西兰花补维 C，意面耐嚼锻炼咀嚼。符合 2-3 岁食物多样的要求。',
    ingredients: [
      { name: '儿童意面', amount: '1 小把' },
      { name: '三文鱼', amount: '30g' },
      { name: '西兰花', amount: '3 朵' }
    ],
    tools: ['煮锅', '炒锅'],
    steps: [
      { text: '三文鱼蒸熟，逐根挑净鱼刺。', tip: '手指捻碎再查。' },
      { text: '意面煮软。', tip: '儿童意面更软。' },
      { text: '西兰花取花球焯水切碎。', tip: '切碎。' },
      { text: '三文鱼、西兰花和意面拌匀。', tip: '先盛后调味。' }
    ],
    cautions: ['三文鱼逐根去刺。', '意面煮软。', '清淡少盐。']
  },

  {
    id: 'pork-tofu-meatball-greens', name: '猪肉豆腐丸 + 米饭 + 小白菜', emoji: '🐖',
    ageMin: 24, ageMax: 36, texture: '软嫩肉丸',
    category: '肉蛋', time: 35, serving: '4-5 个丸子 + 米饭 + 菜',
    nutrients: ['高蛋白', '补钙', '补铁'],
    allergens: ['大豆'], sources: ['B', 'C', 'E'],
    why: '猪肉补铁，豆腐补钙，做成软嫩小丸子。CDC 强调食物形态安全，丸子要做成容易压碎的形态。',
    ingredients: [
      { name: '猪肉末', amount: '50g' },
      { name: '嫩豆腐', amount: '1/4 块' },
      { name: '小白菜', amount: '几片' },
      { name: '米饭', amount: '1 小碗' }
    ],
    tools: ['锅', '刀'],
    steps: [
      { text: '肉末和压碎豆腐拌匀，搓小丸子。', tip: '约 1-1.5cm。' },
      { text: '丸子煮熟。', tip: '浮起即熟。' },
      { text: '小白菜炒软。', tip: '少油。' },
      { text: '配米饭。', tip: '清淡。' }
    ],
    cautions: ['丸子做小、做软，容易压碎。', '小白菜切小段。', '清淡少盐。']
  },

  {
    id: 'peanut-butter-banana-toast-egg', name: '牛奶 + 花生酱香蕉吐司 + 鸡蛋', emoji: '🥜',
    ageMin: 24, ageMax: 36, texture: '软吐司',
    category: '主食', time: 15, serving: '牛奶 1 杯 + 吐司 1 片 + 蛋 1 个',
    nutrients: ['补钙', '高蛋白', '补钾'],
    allergens: ['花生', '奶', '小麦', '蛋'], sources: ['D', 'E'],
    why: '花生酱补优质蛋白和脂肪，AAP 建议通过适龄形态引入花生。鸡蛋补蛋白，牛奶补钙。',
    ingredients: [
      { name: '全脂牛奶', amount: '1 杯' },
      { name: '软吐司', amount: '1 片' },
      { name: '稀薄花生酱', amount: '少量' },
      { name: '熟香蕉', amount: '半根' },
      { name: '鸡蛋', amount: '1 个' }
    ],
    tools: ['刀'],
    steps: [
      { text: '香蕉压泥，和稀薄花生酱抹吐司。', tip: '花生酱要稀薄。' },
      { text: '鸡蛋煮熟。', tip: '全熟。' },
      { text: '吐司切小块，配牛奶和鸡蛋。', tip: '去硬边。' }
    ],
    cautions: ['花生酱要稀薄，不给整颗花生。', '吐司去硬边切小块。', '牛奶全脂。']
  },

  {
    id: 'shrimp-egg-veggie-rice', name: '虾仁鸡蛋蔬菜饭', emoji: '🦐',
    ageMin: 24, ageMax: 36, texture: '软饭',
    category: '主食', time: 20, serving: '1 小碗',
    nutrients: ['高蛋白', '补锌', '补维C'],
    allergens: ['甲壳类', '蛋'], sources: ['B', 'D', 'E'],
    why: '虾仁补锌，鸡蛋补蛋白，蔬菜补维生素。虾和蛋都是过敏原，AAP 建议尽早引入。',
    ingredients: [
      { name: '虾仁', amount: '4 只' },
      { name: '鸡蛋', amount: '1 个' },
      { name: '胡萝卜、青菜', amount: '各少许' },
      { name: '软饭', amount: '1 小碗' }
    ],
    tools: ['炒锅', '刀'],
    steps: [
      { text: '虾去壳去虾线切小丁。', tip: '切小丁。' },
      { text: '鸡蛋炒嫩。', tip: '全熟。' },
      { text: '蔬菜切碎炒软，和虾丁炒熟。', tip: '虾变色即熟。' },
      { text: '全部和软饭炒匀。', tip: '先盛后调味。' }
    ],
    cautions: ['虾切小丁。', '鸡蛋全熟。', '清淡少盐。']
  },

  {
    id: 'beef-mushroom-rice-pumpkin', name: '牛肉蘑菇炖饭 + 南瓜', emoji: '🍄',
    ageMin: 24, ageMax: 36, texture: '软糯炖饭',
    category: '主食', time: 40, serving: '炖饭 1 小碗 + 南瓜',
    nutrients: ['补铁', '补锌', '补维A'],
    allergens: [], sources: ['B', 'E'],
    why: '牛肉补铁补锌，蘑菇提鲜，南瓜补维 A。一锅炖饭营养全面，符合 2-3 岁食物多样的要求。',
    ingredients: [
      { name: '牛里脊', amount: '40g' },
      { name: '蘑菇', amount: '2-3 朵' },
      { name: '南瓜', amount: '一小块' },
      { name: '大米', amount: '3 勺' }
    ],
    tools: ['炖锅', '刀'],
    steps: [
      { text: '牛肉切小丁焯水。', tip: '小丁。' },
      { text: '蘑菇剁细，南瓜切小丁。', tip: '切小。' },
      { text: '牛肉、蘑菇、南瓜、大米加水炖 20 分钟。', tip: '炖软烂。' }
    ],
    cautions: ['蘑菇剁细。', '牛肉炖软。', '清淡少盐。']
  },

  {
    id: 'yogurt-oat-fruit-egg', name: '酸奶燕麦水果碗 + 鸡蛋', emoji: '🥣',
    ageMin: 24, ageMax: 36, texture: '软果奶碗',
    category: '主食', time: 10, serving: '酸奶碗 1 份 + 蛋 1 个',
    nutrients: ['补钙', '高蛋白', '补维C'],
    allergens: ['奶', '蛋'], sources: ['B', 'E'],
    why: '酸奶补钙，燕麦补纤维，水果补维 C，鸡蛋补蛋白。营养丰富的早餐组合。',
    ingredients: [
      { name: '无糖原味酸奶', amount: '1 小杯' },
      { name: '燕麦片', amount: '2 勺' },
      { name: '香蕉 / 蓝莓', amount: '适量' },
      { name: '鸡蛋', amount: '1 个' }
    ],
    tools: ['碗'],
    steps: [
      { text: '燕麦泡软。', tip: '原味燕麦。' },
      { text: '水果切小块（蓝莓切开）。', tip: '切安全大小。' },
      { text: '拌入酸奶。', tip: '无糖原味。' },
      { text: '鸡蛋煮熟配着吃。', tip: '全熟。' }
    ],
    cautions: ['蓝莓等圆水果切开。', '鸡蛋全熟。', '选无糖酸奶。']
  },

  {
    id: 'chicken-carrot-potato-rice', name: '鸡肉胡萝卜土豆炖饭', emoji: '🐔',
    ageMin: 24, ageMax: 36, texture: '软糯炖饭',
    category: '主食', time: 40, serving: '1 小碗',
    nutrients: ['高蛋白', '补维A', '补维C'],
    allergens: [], sources: ['B', 'E'],
    why: '鸡肉补蛋白，胡萝卜补维 A，土豆增稠。一锅炖饭省时省力，营养全面。',
    ingredients: [
      { name: '鸡肉末', amount: '40g' },
      { name: '胡萝卜', amount: '一小段' },
      { name: '土豆', amount: '半个' },
      { name: '大米', amount: '3 勺' }
    ],
    tools: ['炖锅', '刀'],
    steps: [
      { text: '鸡肉末焯水，胡萝卜、土豆切小丁。', tip: '切小丁。' },
      { text: '所有食材加米和水炖 20 分钟。', tip: '水量稍多。' },
      { text: '炖软烂收汁。', tip: '饭软糯。' }
    ],
    cautions: ['鸡肉焯水。', '蔬菜切小丁。', '清淡少盐。']
  },

  {
    id: 'fish-tofu-soup-spinach', name: '鱼肉豆腐汤 + 米饭 + 菠菜', emoji: '🐟',
    ageMin: 24, ageMax: 36, texture: '软汤 + 饭',
    category: '主食', time: 30, serving: '汤 1 碗 + 米饭 + 菠菜',
    nutrients: ['补DHA', '补钙', '补叶酸'],
    allergens: ['鱼', '大豆'], sources: ['B', 'E'],
    why: '鱼肉补 DHA，豆腐补钙，菠菜补叶酸。清淡汤配饭，符合 2-3 岁清淡烹调的要求。',
    ingredients: [
      { name: '鱼肉（低汞鱼）', amount: '40g' },
      { name: '嫩豆腐', amount: '半块' },
      { name: '菠菜', amount: '几片' },
      { name: '米饭', amount: '1 小碗' }
    ],
    tools: ['小锅', '刀'],
    steps: [
      { text: '鱼肉蒸熟，逐根挑净鱼刺。', tip: '手指捻碎再查。' },
      { text: '豆腐切丁，菠菜焯水切段。', tip: '切小。' },
      { text: '豆腐下锅煮汤，下菠菜。', tip: '清淡。' },
      { text: '拌入鱼肉，配米饭。', tip: '最后放鱼。' }
    ],
    cautions: ['鱼肉逐根去刺。', '菠菜焯水。', '清淡少盐。']
  }
];
