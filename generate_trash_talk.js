// generate_trash_talk.js
function generateTrashTalk() {

  let trashTalk
  let target
  let keyman

  // task
  const task = {
    engineerTask: ['加個按鈕', '加新功能', '切個版', '改一點 code', '演算法一下', '寫個AI', '喝咖啡', '多運動', '抄一下這個 code'],
    designerTask: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計', '做個Motion Graphic', '臨摹一下別人', '友情贊助', '用Word裡的png檔'],
    entrepreneurTask: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢', '當個獨角獸', '買比特幣', '法拉利', '補助案', '成為賈伯斯第二']
  }

  // phrase
  const phrase = ['很簡單', '很容易', '很快', '很正常', '沒那麼難吧', '可以啦', '我兒子都會', '我以前也可以']

  // dummy data of req.body
  const options = {
    engineer: 'on',
    designer: 'off',
    entrepreneur: 'off',
  }


  // 隨機task
  // 工程師
  if (options.engineer === 'on') {
    target = '工程師'
    keyman = task['engineerTask'][Math.floor(Math.random() * task['engineerTask'].length)]
  }
  // 設計師
  if (options.designer === 'on') {
    target = '設計師'
    keyman = task['designerTask'][Math.floor(Math.random() * task['designerTask'].length)]
  }
  // 企業家
  if (options.entrepreneur === 'on') {
    target = '創業家'
    keyman = task['entrepreneurTask'][Math.floor(Math.random() * task['entrepreneurTask'].length)]
  }

  // 隨機phrase
  let phraseOut = phrase[Math.floor(Math.random() * phrase.length)]
  // console.log(phraseOut)

  // 講出來

  trashTalk = `${target}，${keyman}，${phraseOut}!`

  console.log(trashTalk)
  console.log('options', options)
}

// invoke generatePassword function 
generateTrashTalk()

// node generate_trash_talk.js