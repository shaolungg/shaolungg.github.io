// 影像和文字统一收在这里；新增相遇或小窝，不需要修改页面结构。
window.shaolunContent = {
  // 首页开场视频：桌面 1080p、手机 720p，均保留完整剪辑。
  heroVideo: "assets/video/opening.mp4",
  heroVideoMobile: "assets/video/opening-mobile.mp4",
  heroPoster: "assets/video/opening-poster.webp",
  encounters: [
    {
      id: "001-hello",
      image: "assets/images/encounters/001-hello/portrait.webp",
      smallImage: "assets/images/encounters/001-hello/portrait-small.webp",
      fullImage: "assets/images/encounters/001-hello/full.webp",
      width: 900,
      height: 1200,
      alt: "一只柯基竖着大耳朵，露出笑容望向镜头，前爪站在路面的黄线旁",
      title: "Hello，要给我拍张照吗？",
      text: "有些心动来得很简单，比如遇见一只帅气的小狗，连平常的一天都跟着明亮起来。"
    }
  ],
  // 每个小窝独立存放封面、简介和按顺序排列的故事。
  nests: {
    "maoge-shuge": {
      name: "猫哥鼠哥的小窝",
      intro: "猫哥有猫哥的好奇，鼠哥有鼠哥的忙碌。而我，想把这些不起眼的小日子，慢慢记下来。",
      cover: "assets/images/nests/maoge-shuge/01-neighbors-cover.webp",
      coverPhotos: [
        "assets/images/nests/maoge-shuge/02-upside-down-cover.webp",
        "assets/images/nests/maoge-shuge/04-close-cover.webp"
      ],
      stories: [
        {
          image: "assets/images/nests/maoge-shuge/01-neighbors.webp",
          fullImage: "assets/images/nests/maoge-shuge/01-neighbors-full.webp",
          alt: "鼠哥待在透明的跑轮里，猫哥在透明小屋外睁着圆圆的眼睛",
          title: ["邻居今天", "忙什么？"],
          text: "鼠哥待在轮子里，猫哥凑在透明的小屋外。它们各有各的小世界。"
        },
        {
          image: "assets/images/nests/maoge-shuge/02-upside-down.webp",
          fullImage: "assets/images/nests/maoge-shuge/02-upside-down-full.webp",
          alt: "猫哥仰躺着看向停在鼻尖前的手指",
          title: ["倒着看你，", "也很认真"],
          text: "有时候，陪它玩一会儿，就是我放下手里事情的理由。"
        },
        {
          image: "assets/images/nests/maoge-shuge/03-camera.webp",
          fullImage: "assets/images/nests/maoge-shuge/03-camera-full.webp",
          alt: "猫哥坐在相机前，相机屏幕里也显示着猫哥的脸",
          title: ["你拍我，", "我看你"],
          text: "相机屏幕里是它，相机外还是它。那张一本正经的小脸，让按快门这件事也多了几分好玩。"
        },
        {
          image: "assets/images/nests/maoge-shuge/04-close.webp",
          fullImage: "assets/images/nests/maoge-shuge/04-close-full.webp",
          alt: "猫哥的脸部特写，能看清眼睛、鼻尖和向两边散开的胡须",
          title: ["没什么事，", "就是想看看你"],
          text: "靠近一点，看看它的眼睛、鼻尖，还有向两边散开的胡须。"
        },
        {
          image: "assets/images/nests/maoge-shuge/05-water.webp",
          fullImage: "assets/images/nests/maoge-shuge/05-water-full.webp",
          alt: "圆滚滚的鼠哥背对着镜头，坐在木屑上喝水",
          title: ["先喝口水，", "其他的等会儿"],
          text: "圆滚滚的一团，背对着镜头，认真喝水。鼠哥的身材，只能说是过得太滋润了。"
        },
        {
          image: "assets/images/nests/maoge-shuge/06-see-you.webp",
          fullImage: "assets/images/nests/maoge-shuge/06-see-you-full.webp",
          alt: "猫哥在粉色水碗前低头喝水，身后透明小屋里是鼠哥，两只小家伙的合影",
          title: ["会再见的"],
          text: "这是猫哥和鼠哥的合影，也是最后一张合影。后来因为个人原因，我们还是分开了。"
        }
      ]
    },
    cola: {
      name: "可乐的小窝",
      intro: "从停车场里小小的一团，到妈妈怀里一起看风景。可乐的故事，慢慢有了家的模样。",
      cover: "assets/images/nests/cola/03-with-mom-cover.webp",
      coverPhotos: [
        "assets/images/nests/cola/02-home-cover.webp",
        "assets/images/nests/cola/04-smile-cover.webp"
      ],
      stories: [
        {
          image: "assets/images/nests/cola/01-parking.webp",
          fullImage: "assets/images/nests/cola/01-parking-full.webp",
          alt: "可乐蜷在停车场的水泥地上，黑色卷毛里沾着草屑",
          title: ["那天，", "在停车场"],
          text: "那时的可乐被前主人遗弃在停车场，卷毛里沾着草屑，蜷在水泥地上。这是故事最早的一页，后面，还有回家的路。"
        },
        {
          image: "assets/images/nests/cola/02-home.webp",
          fullImage: "assets/images/nests/cola/02-home-full.webp",
          alt: "洗完澡回到家的可乐仰着脸，前爪搭在床边，卷毛还有些湿",
          title: ["洗个澡，", "回家了"],
          text: "洗完澡回到家，可乐仰着脸，卷毛还有些湿。往后的日子，就从这些平常的小事开始。"
        },
        {
          image: "assets/images/nests/cola/03-with-mom.webp",
          fullImage: "assets/images/nests/cola/03-with-mom-full.webp",
          alt: "可乐穿着小外套，被妈妈抱在怀里，一起在户外游玩",
          title: ["妈妈的怀里，", "也有风景"],
          text: "和妈妈一起出门，可乐被抱在怀里，穿着自己的小外套。风景在身边，有人陪着看，出游也成了家里的好日子。"
        },
        {
          image: "assets/images/nests/cola/04-smile.webp",
          fullImage: "assets/images/nests/cola/04-smile-full.webp",
          alt: "可乐穿着黄色胸背，站在绿树环绕的岩石上，朝镜头露出笑脸",
          title: ["可乐，", "笑一个"],
          text: "穿着黄色小胸背，站在满眼的绿意里，可乐对着镜头露出了笑脸。这张写真里，我最想留下的，就是它现在的样子。"
        }
      ]
    },
    "mimi-baobao": {
      name: "咪咪包包的小窝",
      intro: "床边、椅子下、靠垫旁。咪咪和包包各有各的舒服位置，连家里不起眼的角落，也变得让人惦记。",
      cover: "assets/images/nests/mimi-baobao/04-together-cover.webp",
      coverPhotos: [
        "assets/images/nests/mimi-baobao/02-beside-cover.webp",
        "assets/images/nests/mimi-baobao/05-peek-cover.webp"
      ],
      stories: [
        {
          image: "assets/images/nests/mimi-baobao/01-sleep-in.webp",
          fullImage: "assets/images/nests/mimi-baobao/01-sleep-in-full.webp",
          alt: "白猫仰躺在灰色床单上，露着肚皮、蜷着爪子看向镜头，画面只保留猫咪",
          title: ["今天起，", "开始赖床"],
          text: "肚皮朝上，爪子松松地蜷着，眼睛倒还睁得圆圆的。醒着也不耽误赖床，这个舒服的位置，今天先不让出来。"
        },
        {
          image: "assets/images/nests/mimi-baobao/02-beside.webp",
          fullImage: "assets/images/nests/mimi-baobao/02-beside-full.webp",
          alt: "橘白猫坐在床边，前爪并拢，抬头看向镜头",
          title: ["你忙，", "我在旁边"],
          text: "它坐在床边，前爪并得整整齐齐，抬头看过来。没有什么大事，只是家里多了一个常常和你对上目光的小家伙。"
        },
        {
          image: "assets/images/nests/mimi-baobao/03-found-you.webp",
          fullImage: "assets/images/nests/mimi-baobao/03-found-you-full.webp",
          alt: "白猫从椅子下面探出脸，竖着耳朵看向镜头",
          title: ["藏好了，", "怎么还被发现"],
          text: "从椅子下面探出一张小脸，耳朵竖着，眼睛也亮亮的。家里总有一些角落，要蹲下来，才能碰见它。"
        },
        {
          image: "assets/images/nests/mimi-baobao/04-together.webp",
          fullImage: "assets/images/nests/mimi-baobao/04-together-full.webp",
          alt: "两只猫同框，前面的白猫看着镜头，后面的橘白猫眯着眼",
          title: ["这张照片，", "我们都有份"],
          text: "一只在前面看镜头，一只在后面眯着眼。各有各的表情，凑在一起，就是家里的样子。"
        },
        {
          image: "assets/images/nests/mimi-baobao/05-peek.webp",
          fullImage: "assets/images/nests/mimi-baobao/05-peek-full.webp",
          alt: "橘白猫躲在靠垫旁边，露着脸看向镜头",
          title: ["躲了一半，", "还在看你"],
          text: "靠垫挡住半边身子，眼睛却朝着镜头。它有自己的小角落，也留着一点好奇，看看这边在做什么。"
        },
        {
          image: "assets/images/nests/mimi-baobao/06-rest.webp",
          fullImage: "assets/images/nests/mimi-baobao/06-rest-full.webp",
          alt: "橘白猫收着前爪、眯着眼睛，在软垫里窝成一团",
          title: ["今天先", "不营业"],
          text: "前爪收好，眼睛眯上，在软垫里窝成一团。看它这么安稳地歇着，我也想把手里的事放一放。"
        }
      ]
    }
  }
};
