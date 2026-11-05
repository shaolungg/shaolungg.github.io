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
    },
    {
      "id": "002-stay-cool",
      "image": "assets/images/encounters/002-stay-cool/portrait.webp",
      "smallImage": "assets/images/encounters/002-stay-cool/portrait-small.webp",
      "fullImage": "assets/images/encounters/002-stay-cool/full.webp",
      "width": 900,
      "height": 1200,
      "alt": "戴着黑色护目镜的黑白小狗趴在草地上，张着嘴，伸着舌头",
      "title": "今天的酷，分你一点",
      "text": "墨镜一戴，往草地上一趴，自有一副从容模样。嘴角却藏不住好心情，连路过的我，也跟着笑了起来。"
    },
    {
      "id": "003-come-closer",
      "image": "assets/images/encounters/003-come-closer/portrait.webp",
      "smallImage": "assets/images/encounters/003-come-closer/portrait-small.webp",
      "fullImage": "assets/images/encounters/003-come-closer/full.webp",
      "width": 900,
      "height": 1200,
      "alt": "一只三花猫竖着尾巴，从窗下的草丛中朝镜头走来",
      "title": "你别动，我过来看看",
      "text": "尾巴竖得高高的，从草里朝镜头走来。看这架势，今天不光是我来拍猫，也是猫来检查我。"
    },
    {
      "id": "004-come-in",
      "image": "assets/images/encounters/004-come-in/portrait.webp",
      "smallImage": "assets/images/encounters/004-come-in/portrait-small.webp",
      "fullImage": "assets/images/encounters/004-come-in/full.webp",
      "width": 900,
      "height": 1200,
      "alt": "一只白色大狗站在敞开的木门口，张着嘴伸着舌头",
      "title": "站门口干嘛，进来呀",
      "text": "两只前爪并在门槛边，毛茸茸的一大只，把门口占了个满满当当。嘴巴一咧，像是已经跟你很熟了。"
    },
    {
      "id": "005-keep-petting",
      "image": "assets/images/encounters/005-keep-petting/portrait.webp",
      "smallImage": "assets/images/encounters/005-keep-petting/portrait-small.webp",
      "fullImage": "assets/images/encounters/005-keep-petting/full.webp",
      "width": 900,
      "height": 1200,
      "alt": "一只猫站在黑色坐垫上拱着背，身旁的人正在轻抚它的后背",
      "title": "对，就这儿，手别停",
      "text": "背拱起来，尾巴翘起来，手掌刚好落在舒服的位置。脸上还是一本正经，身体倒是一点没客气。"
    },
    {
      "id": "006-crouch-down",
      "image": "assets/images/encounters/006-crouch-down/portrait.webp",
      "smallImage": "assets/images/encounters/006-crouch-down/portrait-small.webp",
      "fullImage": "assets/images/encounters/006-crouch-down/full.webp",
      "width": 900,
      "height": 1200,
      "alt": "一个人蹲在街边台阶旁伸出手，两只猫一前一后凑近",
      "title": "蹲下来，就有猫了",
      "text": "一只凑到手边，另一只在后面张望。路还没走完，先在台阶边停一会儿，眼前这两位也挺值得认识。"
    },
    {
      "id": "007-in-your-arms",
      "image": "assets/images/encounters/007-in-your-arms/portrait.webp",
      "smallImage": "assets/images/encounters/007-in-your-arms/portrait-small.webp",
      "fullImage": "assets/images/encounters/007-in-your-arms/full.webp",
      "width": 900,
      "height": 1200,
      "alt": "户外阳光下，一位戴帽子的人抱着扎了小辫的浅棕色小狗",
      "title": "抱着也要看热闹",
      "text": "扎着小辫，窝在怀里，两只爪子垂在外面。有人负责抱稳，它就负责认真看世界，连吹乱的头毛都顾不上。"
    },
    {
      "id": "008-rest-by-the-door",
      "image": "assets/images/encounters/008-rest-by-the-door/portrait.webp",
      "smallImage": "assets/images/encounters/008-rest-by-the-door/portrait-small.webp",
      "fullImage": "assets/images/encounters/008-rest-by-the-door/full.webp",
      "width": 900,
      "height": 1200,
      "alt": "一只狸花猫靠着红色木门和门旁石雕，伸着前爪趴在石阶上",
      "title": "你拍你的，我歇我的",
      "text": "往门边一靠，前爪一伸，眼睛半眯着。红门、石阶，还有一只不怎么想营业的猫。它歇它的，倒让我忍不住停下来。"
    },
    {
      "id": "009-out-for-a-walk",
      "image": "assets/images/encounters/009-out-for-a-walk/portrait.webp",
      "smallImage": "assets/images/encounters/009-out-for-a-walk/portrait-small.webp",
      "fullImage": "assets/images/encounters/009-out-for-a-walk/full.webp",
      "width": 900,
      "height": 1200,
      "alt": "蓝天和风车下，一只浅黄色大狗站在草地与石头前，身后的人牵着它",
      "title": "出来玩，当然要开心",
      "text": "蓝天、草地，还有身后一起出来玩的人。它站在石头前张着嘴，光看这个表情，就觉得这一趟没白来。"
    },
    {
      "id": "010-grassland-hello",
      "image": "assets/images/encounters/010-grassland-hello/portrait.webp",
      "smallImage": "assets/images/encounters/010-grassland-hello/portrait-small.webp",
      "fullImage": "assets/images/encounters/010-grassland-hello/full.webp",
      "width": 900,
      "height": 1200,
      "alt": "一头戴红色笼头的棕色小驴站在木桩旁，身后是草地、蓝天和白云",
      "title": "草原上，还有这位朋友",
      "text": "草地很宽，云也很大，一头戴红色笼头的小驴站在眼前。耳朵竖得直直的，看过来的样子有点认真，也有点可爱。"
    },
    {
      "id": "011-little-shopkeeper",
      "image": "assets/images/encounters/011-little-shopkeeper/portrait.webp",
      "smallImage": "assets/images/encounters/011-little-shopkeeper/portrait-small.webp",
      "fullImage": "assets/images/encounters/011-little-shopkeeper/full.webp",
      "width": 900,
      "height": 1200,
      "alt": "一只白色卷毛小狗坐在店铺柜台上，旁边放着打包袋，身后有点心海报",
      "title": "小店员，今天也在",
      "text": "柜台上坐着一团白色卷毛，旁边是打包袋，身后是点心的招牌。它不负责找零，光是坐在那儿，就让人想多看两眼。"
    },
    {
      "id": "012-upstairs-downstairs",
      "image": "assets/images/encounters/012-upstairs-downstairs/portrait.webp",
      "smallImage": "assets/images/encounters/012-upstairs-downstairs/portrait-small.webp",
      "fullImage": "assets/images/encounters/012-upstairs-downstairs/full.webp",
      "width": 900,
      "height": 1200,
      "alt": "两只橘白与橘色的猫分别坐在石墙上方和墙根，墙头垂着红绿相间的叶子",
      "title": "楼上的，楼下的",
      "text": "一只坐在墙头，一只坐在墙根，中间隔着好大一面墙。同样朝这边看过来，倒像是约好了，要一起看看谁路过。"
    },
    {
      "id": "013-front-row-seats",
      "image": "assets/images/encounters/013-front-row-seats/portrait.webp",
      "smallImage": "assets/images/encounters/013-front-row-seats/portrait-small.webp",
      "fullImage": "assets/images/encounters/013-front-row-seats/full.webp",
      "width": 900,
      "height": 1200,
      "alt": "两只浅色卷毛小狗坐在宠物推车里，身旁的人推着车停在店铺前",
      "title": "逛街，我们坐前排",
      "text": "两只挤在小推车里，一只探着脑袋往外看，另一只朝着摊位。人有人的逛法，它们也有自己的热闹要凑。"
    },
    {
      "id": "014-through-the-glass",
      "image": "assets/images/encounters/014-through-the-glass/portrait.webp",
      "smallImage": "assets/images/encounters/014-through-the-glass/portrait-small.webp",
      "fullImage": "assets/images/encounters/014-through-the-glass/full.webp",
      "width": 900,
      "height": 1200,
      "alt": "两只长毛猫在玻璃门的另一边并排坐着，身后放着两座小屋",
      "title": "隔着玻璃，也要看看你",
      "text": "两张毛茸茸的小脸，隔着玻璃朝这边看。明明只是走到窗边，忽然就有了被认真注视的感觉。"
    },
    {
      "id": "015-doorway-duo",
      "image": "assets/images/encounters/015-doorway-duo/portrait.webp",
      "smallImage": "assets/images/encounters/015-doorway-duo/portrait-small.webp",
      "fullImage": "assets/images/encounters/015-doorway-duo/full.webp",
      "width": 900,
      "height": 1200,
      "alt": "两只小狗一站一坐待在木门旁，面向镜头，暖光从左边照进来",
      "title": "门口一下来了两位",
      "text": "一个站着，一个坐着，两颗小脑袋都朝着门外。原本只是一个普通的门口，因为它们在，进出都想多停一会儿。"
    },
    {
      "id": "016-let-us-go",
      "image": "assets/images/encounters/016-let-us-go/portrait.webp",
      "smallImage": "assets/images/encounters/016-let-us-go/portrait-small.webp",
      "fullImage": "assets/images/encounters/016-let-us-go/full.webp",
      "width": 900,
      "height": 1200,
      "alt": "阳光下，一只黑白边牧向前迈步，身后的人牵着蓝色牵引绳走在草地旁",
      "title": "走呀，前面还有呢",
      "text": "前爪已经迈出去了，目光还牢牢盯着前面。身后的人牵着绳，它带着一身毛和满满的兴致，把散步走得格外带劲。"
    },
    {
      "id": "017-side-by-side",
      "image": "assets/images/encounters/017-side-by-side/portrait.webp",
      "smallImage": "assets/images/encounters/017-side-by-side/portrait-small.webp",
      "fullImage": "assets/images/encounters/017-side-by-side/full.webp",
      "width": 900,
      "height": 1200,
      "alt": "逆光窗帘前，两只深色小动物并排坐在绿色纸箱上，耳朵一圆一尖",
      "title": "挤一挤，刚好坐下",
      "text": "窗帘前的纸箱上，并排坐着两个小家伙。逆着光，脸都快看不清了，一圆一尖的耳朵却把它们认得明明白白。"
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
