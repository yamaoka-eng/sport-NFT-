import { useState, createContext } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {

  const [ language , setLanguage] = useState('English')

  const chooseLanguage = (info) => {
    if (language === 'English') return info.English
    return info.Chinese
  }

  // 平台现有NFT种类
  const Nfts = {
    cryptoRunnerNFTs: [
      { name: 'cryptoRunnerNo1', url: 'run-01.png', divide: '25%' },
      { name: 'cryptoRunnerNo2', url: 'run-02.png', divide: '20%' },
      { name: 'cryptoRunnerNo3', url: 'run-03.png', divide: '15%' },
      { name: 'cryptoRunnerNo4', url: 'run-04.png', divide: '10%' },
      { name: 'cryptoRunnerNo5', url: 'run-05.png', divide: '5%' },
    ],
    genesisNFTs: [
      { name: 'GenesisNo1', url: 'GenesisNFT-01.png', divide: '15%' },
      { name: 'GenesisNo2', url: 'GenesisNFT-02.png', divide: '15%' },
      { name: 'GenesisNo3', url: 'GenesisNFT-03.png', divide: '15%' },
      { name: 'GenesisNo4', url: 'GenesisNFT-04.png', divide: '15%' },
    ]
  }

  // 个人信息
  var myInfo = {
    GenesisNFTs: [
      { name: 'GenesisNo2', url: 'GenesisNFT-02.png', No: '#0001', divide: '20%' },
    ],                     // 可用创世NFT
    runsNFTs: [
      { name: 'cryptoRunnerNo1', url: 'run-01.png', No: '#0002', divide: '25%' },
      { name: 'cryptoRunnerNo1', url: 'run-01.png', No: '#0003', divide: '25%' },
      { name: 'cryptoRunnerNo2', url: 'run-02.png', No: '#0005', divide: '20%' },
      { name: 'cryptoRunnerNo3', url: 'run-03.png', No: '#0004', divide: '15%' },
      { name: 'cryptoRunnerNo5', url: 'run-05.png', No: '#0006', divide: '5%' },
    ],                     // 可用跑男NFT
    stakeGNFTs: [
      { name: 'GenesisNo3', url: 'GenesisNFT-03.png', No: '#0007', divide: '15%' },
    ],                     // 已质押的创世NFT
    stakeRNFTs: [
      { name: 'cryptoRunnerNo1', url: 'run-01.png', No: '#0008', divide: '15%' },
    ],                     // 已质押的跑男NFT
    setInviter: true,      // 是否设置了邀请人
    participatedIDO: true, // 是否参与了IDO
    bindBoxNum: 5,         // 盲盒数量
    dividendSP: 561.2425,  // 质押NFT分红代币数量
    partnerInfo: {
      isPartner: true,       // 是否成为了合伙人
      partnerIDO: true,      // 是否参与了合伙人IDO
      referralNum: 9,        // 邀请人数量
      inviteRewards: [

      ]                      //邀请奖励
    }
  }

  const MessageInfo = {
    English: {
      isIDO: 'Participated in IDO',
      notPartner: 'not a partner',
      isPartner: 'already a partner',
      referralNumNotE: 'Invite less than 10 people',
      unopen: 'Not yet open',
      isSetInviter: 'Inviters have been set',
      getSuccess: 'Received successfully',
      NoRewardAva: 'No reward for now',
      synthesisSuccess: 'Synthetic success',
      NFTNumNotE: 'NFTs have not been collected yet',
      stakeSuccess: 'Stake success',
      unlockSuccess: 'Unlock success',
    },
    Chinese: {
      isIDO: '已参与IDO',
      notPartner: '还不是合伙人',
      isPartner: '已是合伙人',
      referralNumNotE: '邀请未满10人',
      unopen: '暂未开放',
      isSetInviter: '已设置邀请人',
      getSuccess: '领取成功',
      NoRewardAva: '暂无奖励领取',
      synthesisSuccess: '合成成功',
      NFTNumNotE: 'NFT尚未集齐',
      stakeSuccess: '质押成功',
      unlockSuccess: '解锁成功',
    }
  }

  const HeaderInfo = {
    English: {
      ulItem: [
        { name: 'IDO', href: '#IDO' },
        { name: 'Referral', href: '#Referral' },
        { name: 'Synthetic', href: '#Synthetic' },
        { name: 'Stake', href: '#Stake' }
      ],
      btn: 'connect wallet'
    },
    Chinese: {
      ulItem: [
        { name: 'IDO', href: '#IDO' },
        { name: '邀请', href: '#Referral' },
        { name: '合成', href: '#Synthetic' },
        { name: '抵押', href: '#Stake' }
      ],
      btn: '连接钱包'
    }
  }

  const IDOInfo = {
    English: {
      title: 'is where life happens',
      IDO: 'Go IDO',
      card1: {
        title: 'Unconditional participation',
        acquire: 'obtainable:',
        NFT: '1 NFT blind box ',
        btn: 'PAY'
      },
      card2: {
        title: 'Invite 10 people to participate',
        acquire: 'obtainable',
        NFT: '2 NFT blind box ',
        btn: 'PAY'
      },
      scaleBgCloose: 'BACK'
    },
    Chinese: {
      title: '运动是生命发生的地方',
      IDO: '参与公募',
      card1: {
        title: '无条件参与',
        acquire: '可获得:',
        NFT: 'NFT盲盒1个',
        btn: '支付'
      },
      card2: {
        title: '邀请10人可参与',
        acquire: '可获得:',
        NFT: 'NFT盲盒2个',
        btn: '支付'
      },
      scaleBgCloose: '返回'
    }
  }

  const ReferralInfo = {
    English: {
      inviteCard: {
        before: {
          section: 'Set up invitators to participate in IDO',
          btn: "Set the inviter"
        },
        back: {
          title: "Fill in the inviter's address",
          section: 'Invite friends to earn money together',
          input: 'Enter of Address',
          btn: 'Set Inviter'
        }
      },
      partnerCard: {
        before: {
          section: 'Become a partner and invite friends to get bonus NFT',
          detail1: 'Invite 10 people in total to get a cryptoRunnerNo1',
          detail2: 'Invite 20 people in total to get a cryptoRunnerNo2',
          detail3: 'Invite 30 people in total to get a cryptoRunnerNo3',
          detail4: 'Invite 40 people in total to get a cryptoRunnerNo4',
          detail5: 'Invite 50 people in total to get a cryptoRunnerNo5',
          btn: "View partner information"
        },
        back: {
          title: 'Partner information',
          section: 'To become a partner, a deposit of 300USDT is required, which will be refunded after inviting more than 10 people',
          card1: {
            price: 'Price',
            btn: 'PAY'
          },
          card2: {
            InviteNum: 'Number of invitees：',
            NoEnough: 'The invited number was not reached',
            btn: 'Receive'
          }
        }
      }
    },
    Chinese: {
      inviteCard: {
        before: {
          section: '设置邀请人参与IDO',
          btn: "填写邀请人地址"
        },
        back: {
          title: '填写邀请人地址',
          section: '邀请好友一起赚',
          input: '输入地址',
          btn: '设置邀请人'
        }
      },
      partnerCard: {
        before: {
          section: '成为合伙人邀请好友拿分红NFT',
          detail1: '累积邀请10人ido获得cryptoRunnerNo1',
          detail2: '累积邀请20人ido获得cryptoRunnerNo2',
          detail3: '累积邀请30人ido获得cryptoRunnerNo3',
          detail4: '累积邀请40人ido获得cryptoRunnerNo4',
          detail5: '累积邀请50人ido获得cryptoRunnerNo5',
          btn: "查看合伙人信息"
        },
        back: {
          title: '合伙人信息',
          section: '成为合伙人需缴纳300USDT保证金,邀请满10人退还',
          card1: {
            price: '价格',
            btn: '支付'
          },
          card2: {
            InviteNum: '邀请人数：',
            NoEnough: '未达到邀请人数',
            btn: '领取'
          }
        }
      }
    }
  }

  const SyntheticInfo = {
    English: {
      title: 'NFT synthesis',
      section: 'Collect 5 Running Man cards to synthesize Genesis NFT',
      divideText1: 'Holders Divide',
      divideText2: 'In the 6% transaction fee:',
      isOown: 'Not Owned',
      btn: 'Synthesis',
    },
    Chinese: {
      title: 'NFT合成',
      section: '集齐5个跑男卡片可合成创世NFT',
      divideText1: '持有者瓜分',
      divideText2: '交易6%手续费中:',
      runMans: [
        { name: 'cryptoRunnerNo1', url: 'run-01.png', divide: '25%'  },
        { name: 'cryptoRunnerNo2', url: 'run-02.png', divide: '20%'  },
        { name: 'cryptoRunnerNo3', url: 'run-03.png', divide: '15%'  },
        { name: 'cryptoRunnerNo4', url: 'run-04.png', divide: '10%'  },
        { name: 'cryptoRunnerNo5', url: 'run-05.png', divide: '5%'  },
      ],
      genesisNFTs: [
        { name: 'GenesisNo1', url: 'GenesisNFT-01.png', divide: '15%' },
        { name: 'GenesisNo2', url: 'GenesisNFT-02.png', divide: '15%' },
        { name: 'GenesisNo3', url: 'GenesisNFT-03.png', divide: '15%' },
        { name: 'GenesisNo4', url: 'GenesisNFT-04.png', divide: '15%' },
      ],
      isOown: '未拥有',
      btn: '合成',
    }
  }

  const StakeInfo = {
    English: {
      title: 'Collection',
      dividend: 'NFT dividend income：',
      btn: 'receive',
      cards: {
        No: 'No cards available...',
        available: 'Available NFT',
        stake: 'Stake NFT',
        cardInfo: {
          divideText1: 'Holders Divide',
          divideText2: 'In the 6% transaction fee:',
          btnStake: 'Stake',
          btnUnlock: 'Unlock'
        }
      },
      box: {
        No: 'No blind boxes available...',
        boxNum: 'Number of blind boxes：',
        btn: 'OPEN',
      }
    },
    Chinese: {
      title: '藏品',
      dividend: 'NFT分红收益：',
      btn: '领取',
      cards: {
        No: '没有可用的NFT...',
        available: '可用NFT',
        stake: '已质押NFT',
        cardInfo: {
          divideText1: '持有者瓜分',
          divideText2: '交易6%手续费中:',
          btnStake: '质押',
          btnUnlock: '解锁'
        }
      },
      box: {
        No: '没有可用的盲盒...',
        boxNum: '盲盒数量：',
        btn: '开启',
      }
    }
  }

  const FooterInfo = {
    English: {
      section: 'SPORT combines sports with science and technology, and is a new generation of cyberpunk products in the meta-universe. Its innovative ideas and gameplay are the forerunner of artistic NFT assets in Web3.0. SPORT believes that the maximum value of NFT is in the world of Web3.0 and the world of the meta-universe! ',
      contact: 'Contact'
    },
    Chinese: {
      section: 'SPORT 结合运动与科技，是全新一代元宇宙赛博朋克风产物，新颖的创意和玩法是Web3.0中艺术型NFT资产的先行者,SPORT 相信NFT的价值最大化是在Web3.0的世界，是在元宇宙的世界！',
      contact: '联系'
    }
  }

  const PartnersInfo = {
    English: {
      title: 'Our partners',
    },
    Chinese: {
      title: '我们的合作伙伴',
    }
  }

  return (
    <AppContext.Provider
      value={{
        setLanguage,
        Nfts,
        myInfo,
        MessageInfo: chooseLanguage(MessageInfo),
        HeaderInfo: chooseLanguage(HeaderInfo),
        IDOInfo: chooseLanguage(IDOInfo),
        ReferralInfo: chooseLanguage(ReferralInfo),
        SyntheticInfo: chooseLanguage(SyntheticInfo),
        StakeInfo: chooseLanguage(StakeInfo),
        FooterInfo: chooseLanguage(FooterInfo),
        PartnersInfo: chooseLanguage(PartnersInfo),
      }}
    >
      { children }
    </AppContext.Provider>
  )
}