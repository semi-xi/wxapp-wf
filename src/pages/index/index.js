import words from '../../static/word'

Page({
  data: {
    cell: {
      x: 5,
      y: 5
    },
    colorArr: [],
    arrClass: {}
  },
  onLoad () {
    this.init()
    console.log(words)
  },
  init () {
    this.initColor()
    this.initWords() 
  },
  initColor () {
    let redLen = 9
    let blueLen = 8
    let grayLen = 7
    let blackLen = 1
    let arr = []
    let arrRed = []
    let arrBlue = []
    let arrGray = []
    let arrBlack = [{ color: 'black' }]
    for (let i = 0; i < redLen; i++) {
      arrRed.push({ color: 'red' })
    }
    for (let i = 0; i < blueLen; i++) {
      arrBlue.push({ color: 'blue' })
    }
    for (let i = 0; i < grayLen; i++) {
      arrGray.push({ color: 'gray' })
    }
    arr = arr.concat(arrRed, arrBlue, arrGray, arrBlack)

    arr.sort(function g (a, b) {
      return Math.random() > 0.5 ? -1 : 1
    })
    this.setData({
      colorArr: arr
    })
  },
  initWords () {
    // 25
    let wordsArr = []
    let cell = 24
    let _words = [...words]
    _words.sort(function g (a, b) {
      return Math.random() > 0.5 ? -1 : 1
    })
    wordsArr = _words.slice(0, 25)
    this.setData({
      wordsArr
    })
  },
  change () {
    this.init()
  },
  tapCell (e) {
    let target = e.currentTarget
    let { index } = target.dataset
    let { arrClass } = this.data
    if (arrClass[index]) {
      arrClass[index] = ''
      this.setData({
        arrClass
      })
      return
    } 
    arrClass[index] = 'active'
    this.setData({
      arrClass
    })
    console.log(index)
  }
})
