(() => {
  // Original Japanese text is the key; names and visual English wordmarks stay unchanged.
  const dictionary = [
    ['作品へスキップ','Skip to works','跳至作品'],
    ['実績','RECOGNITION','成果'],
    ['まだない世界に、','For worlds yet to exist,','为尚未存在的世界，'],
    ['物語と、命を。','a story. A life.','赋予故事与生命。'],
    ['企画・脚本・世界観設計から、','From concepts, scripts and worldbuilding,','从策划、剧本到世界观设计，'],
    ['AIとともに、新しいエンターテインメントをつくる。','creating new entertainment with AI.','携手AI，创造全新的娱乐体验。'],
    ['物語から、','From stories,','从故事出发，'],
    ['表現のその先へ。','to new forms of expression.','探索表达的更多可能。'],
    ['Xのハイライトを見る ↗','View X highlights ↗','查看X精选作品 ↗'],
    ['企画・制作','Concept & production','策划与制作'],
    ['Y2Kの熱量をまとう、6人の男性アイドル。Instagram開始3ヶ月でフォロワー2万人超。リールの月間再生数は約1,000万回。','Six male idols with Y2K energy. Over 20,000 Instagram followers in the first three months, with approximately 10 million monthly Reel views.','六位充满Y2K魅力的男性偶像。Instagram账号上线3个月，粉丝突破2万，Reels月播放量约1,000万次。'],
    ['Instagramで見る','View on Instagram','在Instagram查看'],
    ['音楽が宝となる世界。','A world where music is treasure.','音乐即为珍宝的世界。'],
    ['脚本・演出・音楽','Script, direction & music','剧本、导演与音乐'],
    ['奪われた歌を追う怪盗たちのダークファンタジー。脚本からキャラクター、楽曲、演出までを一貫して制作。','A dark fantasy about phantom thieves pursuing stolen songs. Created from script and characters through music and direction.','一部讲述怪盗们追寻被夺走歌曲的黑暗奇幻作品。从剧本、角色到音乐与导演，贯穿全流程创作。'],
    ['かわいさの、その奥へ。','Beyond the cute exterior.','走进可爱背后的世界。'],
    ['企画・映像・VFX','Concept, film & VFX','策划、影像与VFX'],
    ['Chroma Awards 2025 / 2次審査通過','Chroma Awards 2025 / Passed second-round screening','Chroma Awards 2025 / 通过第二轮评审'],
    ['SNSの光と影、心の崩壊と再生。「病みかわいい」世界に物語を重ねた、AI-VFXミュージックビデオ。','An AI-VFX music video exploring the light and dark of social media, emotional collapse and renewal, through a story set in a “yami kawaii” world.','一部融合AI与VFX的音乐视频，以“病娇可爱”的世界描绘社交媒体的光影，以及内心的崩溃与重生。'],
    ['漫画制作','Manga production','漫画制作'],
    ['AI漫画作品','AI Manga','AI漫画作品'],
    ['映像から漫画へ。AIを活用した漫画制作の実績。','From film to manga: storytelling through AI-assisted manga production.','从影像到漫画：运用AI进行漫画创作。'],
    ['めちゃコミック クリエイターズ 掲載作品','Published on Mecha Comic Creators','刊载于Mecha Comic Creators'],
    ['漫画を読む','Read the manga','阅读漫画'],
    ['技術の先に、','Beyond technology,','超越技术，'],
    ['心を動かす物語を。','stories that move you.','创造打动人心的故事。'],
    ['AI IP開発クリエイター / 映像ディレクター','AI IP Creator / Film Director','AI IP创作者 / 影像导演'],
    ['企画・脚本・世界観設計を出発点に、オリジナルIPと映像を制作。AIアニメ、実写MV、漫画など、表現の領域を横断して活動しています。','I create original IP and films, starting with concepts, scripts and worldbuilding. My work spans AI animation, live-action-style music videos and manga.','以策划、剧本和世界观设计为起点，创作原创IP与影像作品。创作领域涵盖AI动画、真人风格MV和漫画。'],
    ['つくりたいのは、映像の美しさだけではなく、その先に続く物語と感動。キャラクターが生きる世界を、構想から作品へと育てていきます。','I aim to create more than beautiful images: stories and emotions that stay with you. I develop living worlds for characters, from the first idea to the finished work.','我希望创造的不只是美丽的画面，更是延续其后的故事与感动。从最初构想到最终作品，打造角色真正生活其中的世界。'],
    ['パートナー契約（非専属）','Non-exclusive creative partnership','非独家合作伙伴'],
    ['実績・クリエイター活動','Recognition & Creator Programs','创作成果与创作者活动'],
    ['特別賞 受賞','Special Award recipient','荣获特别奖'],
    ['受賞作品を見る ↗','View awarded work ↗','查看获奖作品 ↗'],
    ['公式の結果発表 ↗','Official results ↗','官方结果公告 ↗'],
    ['1次審査通過','Passed first-round screening','通过第一轮评审'],
    ['2次審査通過','Passed second-round screening','通过第二轮评审'],
    ['作品を見る ↗','View work ↗','查看作品 ↗'],
    ['CPP・ECP /','CPP / ECP /','CPP / ECP /'],
    ['公認クリエイター活動','Official Creator Programs','官方创作者计划'],
    ['映像・アニメーション・音楽の制作を通じて、複数のAIツールのクリエイタープログラムで活動。','Active in creator programs for multiple AI tools, producing films, animation and music.','参与多个AI工具的创作者计划，开展影像、动画与音乐创作。'],
    ['上記のツールなどで、クリエイター活動を展開。','Creator activities across these tools and more.','围绕上述工具等开展创作者活动。'],
    ['構想を、ひとつの世界に。','Turning ideas into worlds.','让构想成为一个世界。'],
    ['企画 / 脚本 / 世界観設計','Concept / Script / Worldbuilding','策划 / 剧本 / 世界观设计'],
    ['物語の核とキャラクターの個性を組み立て、作品の方向性をつくる。プロのシナリオライターとしての活動実績あり。','Building the heart of a story and distinctive characters to shape a project’s direction. Experienced as a professional screenwriter.','构建故事内核与鲜明的角色个性，确立作品方向。拥有职业编剧的创作经验。'],
    ['AI映像 / アニメーション / ショートドラマ / MV / 漫画','AI Film / Animation / Short Drama / Music Video / Manga','AI影像 / 动画 / 短剧 / MV / 漫画'],
    ['表現に合わせて手法を選び、演出・映像・音楽をひとつの体験へ。商業アニメの制作チームに参画経験あり。','Bringing direction, visuals and music into one experience, with techniques chosen for each story. Experience working on a commercial animation production team.','根据表达需求选择创作手法，将导演、影像与音乐融为一体。曾参与商业动画制作团队。'],
    ['ショート動画から育てるオリジナルIP','Original IP built through short-form video','通过短视频打造原创IP'],
    ['リールを起点にNOIR RIOTをゼロから立ち上げ、フォロワー2万人超へ。思わずシェアしたくなる一場面と、推しの続きを追いたくなる世界観・ドラマをつくる。','Built NOIR RIOT from scratch through Reels, reaching over 20,000 followers. Creating share-worthy moments and worlds, characters and drama that turn viewers into fans.','以Reels为起点，从零打造NOIR RIOT，吸引超过2万粉丝。创作令人想要分享的瞬间，以及让观众成为粉丝、持续追随的角色、世界观与剧情。'],
    ['IP開発、映像制作、クリエイティブのご相談。','For IP development, film production and creative collaborations.','欢迎洽谈IP开发、影像制作与创意合作。'],
    ['Googleフォームにご記入いただくか、XのDMでお声がけください。','Please use the Google Form or send a DM on X.','请填写Google表单，或通过X私信联系。'],
    ['Googleフォームに記入する','Open Google Form','填写Google表单'],
    ['XのDMで相談する','Contact via X DM','通过X私信联系'],
    ['銀ペガ トップ','GINPEGA home','GINPEGA 首页'],
    ['メインナビゲーション','Main navigation','主导航'],
    ['NOIR RIOTの6人のキャラクター','The six NOIR RIOT characters','NOIR RIOT的六位角色'],
    ['Instagramで作品を見る','View work on Instagram','在Instagram查看作品'],
    ['Xで作品を見る','View work on X','在X查看作品'],
    ['銀ペガ໒꒱のプロフィールキャラクター','GINPEGA profile character','銀ペガ໒꒱的形象角色'],
    ['クリエイター活動の関連ツール','Creator program tools','创作者活动相关工具'],
    ['XプロフィールからDMで相談する','Open X profile to send a DM','打开X个人主页并发送私信']
  ];
  const translations = new Map(dictionary.map(([ja,en,zh])=>[ja,{ja,en,'zh-CN':zh}]));
  const nodes=[];
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  while(walker.nextNode()) {const n=walker.currentNode;if(n.parentElement.closest('script,style,.language-switch,.motion-toggle'))continue;const key=n.textContent.trim();if(translations.has(key))nodes.push({node:n,key,prefix:n.textContent.match(/^\s*/)[0],suffix:n.textContent.match(/\s*$/)[0]});}
  const attrs=[];
  document.querySelectorAll('[alt],[aria-label]').forEach(el=>['alt','aria-label'].forEach(attr=>{const key=el.getAttribute(attr);if(translations.has(key))attrs.push({el,attr,key});}));
  const buttons=[...document.querySelectorAll('.language-switch button')];
  const motion=document.querySelector('.motion-toggle');
  let current='ja';
  const motionWords={ja:['Ⅱ 動きを停止','▶ 動きを再開','動きを抑制中'],en:['Ⅱ Pause motion','▶ Resume motion','Reduced motion'],'zh-CN':['Ⅱ 暂停动画','▶ 恢复动画','已减少动画']};
  function updateMotion(){const words=motionWords[current];const value=motion.disabled?words[2]:words[motion.getAttribute('aria-pressed')==='true'?1:0];if(motion.textContent!==value)motion.textContent=value;if(motion.getAttribute('aria-label')!==value)motion.setAttribute('aria-label',value);}
  function setLanguage(lang){
    current=lang;document.documentElement.lang=lang;
    nodes.forEach(({node,key,prefix,suffix})=>node.textContent=prefix+translations.get(key)[lang]+suffix);
    attrs.forEach(({el,attr,key})=>el.setAttribute(attr,translations.get(key)[lang]));
    buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
    document.querySelector('meta[name="description"]').content={ja:'銀ペガ໒꒱ — 企画・脚本・世界観設計から、AI映像とオリジナルIPをつくるクリエイター。',en:'GINPEGA — Original IP, AI film and animation, built from stories, characters and worlds.','zh-CN':'銀ペガ໒꒱ — 从故事、角色与世界观出发，创作AI影像与原创IP。'}[lang];
    updateMotion();try{localStorage.setItem('ginpega-language',lang);}catch{}
    window.dispatchEvent(new Event('resize'));
  }
  buttons.forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
  new MutationObserver(updateMotion).observe(motion,{childList:true,attributes:true,attributeFilter:['aria-pressed','disabled','aria-label']});
  let saved='ja';try{saved=localStorage.getItem('ginpega-language')||'ja';}catch{}
  setLanguage(['ja','en','zh-CN'].includes(saved)?saved:'ja');
})();
