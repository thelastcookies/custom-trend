export const getTagConstructMock = {
  'code': 200,
  'msg': 'success',
  'data': [
    {
      'id': 1,
      'pid': null,
      'description': '实时采集',
      'hierarchy': 1,
    },
    {
      'id': 2,
      'pid': 1,
      'description': '3号机组DCS',
      'hierarchy': 2,
    },
    {
      'id': 3,
      'pid': 1,
      'description': '4号机组DCS',
      'hierarchy': 2,
    },
    {
      'id': 4,
      'pid': 1,
      'description': '辅网DCS',
      'hierarchy': 2,
    },
    {
      'id': 5,
      'pid': 1,
      'description': 'ECMS3',
      'hierarchy': 2,
    },
    {
      'id': 6,
      'pid': 1,
      'description': 'ECMS4',
      'hierarchy': 2,
    },
    {
      'id': 7,
      'pid': 1,
      'description': 'NCS',
      'hierarchy': 2,
    },
    {
      'id': 8,
      'pid': 1,
      'description': '输煤PLC',
      'hierarchy': 2,
    },
    {
      'id': 9,
      'pid': 1,
      'description': '电能量TMR',
      'hierarchy': 2,
    },
    {
      'id': 10,
      'pid': 1,
      'description': '故障诊断TDM',
      'hierarchy': 2,
    },
    {
      'id': 11,
      'pid': null,
      'description': '性能计算',
      'hierarchy': 1,
    },
    {
      'id': 12,
      'pid': 11,
      'description': '3号机组',
      'hierarchy': 2,
    },
    {
      'id': 13,
      'pid': 11,
      'description': '4号机组',
      'hierarchy': 2,
    },
    {
      'id': 14,
      'pid': 11,
      'description': '全厂',
      'hierarchy': 2,
    },
  ],
};

export const getTagPointMock = {
  'code': 200,
  'msg': 'success',
  'data': [
    {
      'id': 1,
      'taglogicid': 'N3_DPU3001_HW_AQ010101_PV',
      'tagid': 'BHG_UNIT3_DPU3001_HW_AQ010101_PV',
      'tagdesc': 'A给煤机瞬时煤量给定',
      'tagdescsec': null,
      'classificationId': 2,
    },
    {
      'id': 2,
      'taglogicid': 'N3_DPU3001_HW_AQ010102_PV',
      'tagid': 'BHG_UNIT3_DPU3001_HW_AQ010102_PV',
      'tagdesc': 'A磨煤机冷一次风电动调节挡板指令',
      'tagdescsec': null,
      'classificationId': 2,
    },
    {
      'id': 3,
      'taglogicid': 'N3_DPU3001_HW_AQ010103_PV',
      'tagid': 'BHG_UNIT3_DPU3001_HW_AQ010103_PV',
      'tagdesc': 'A磨煤机热一次风电动调节挡板指令',
      'tagdescsec': null,
      'classificationId': 2,
    },
    {
      'id': 4,
      'taglogicid': 'N3_DPU3001_HW_AQ010104_PV',
      'tagid': 'BHG_UNIT3_DPU3001_HW_AQ010104_PV',
      'tagdesc': '#1角A层燃烧器二次风调节挡板指令',
      'tagdescsec': null,
      'classificationId': 2,
    },
    {
      'id': 5,
      'taglogicid': 'N3_DPU3001_HW_AQ010105_PV',
      'tagid': 'BHG_UNIT3_DPU3001_HW_AQ010105_PV',
      'tagdesc': '#2角A层燃烧器二次风调节挡板指令',
      'tagdescsec': null,
      'classificationId': 2,
    },
    {
      'id': 6,
      'taglogicid': 'N3_DPU3001_HW_AQ010106_PV',
      'tagid': 'BHG_UNIT3_DPU3001_HW_AQ010106_PV',
      'tagdesc': '备用',
      'tagdescsec': null,
      'classificationId': 2,
    },
    {
      'id': 7,
      'taglogicid': 'N3_DPU3001_HW_AI010201_PV',
      'tagid': 'BHG_UNIT3_DPU3001_HW_AI010201_PV',
      'tagdesc': '#1角A1层煤火检信号',
      'tagdescsec': null,
      'classificationId': 2,
    },
    {
      'id': 8,
      'taglogicid': 'N3_DPU3001_HW_AI010202_PV',
      'tagid': 'BHG_UNIT3_DPU3001_HW_AI010202_PV',
      'tagdesc': '#1角A2层煤火检信号',
      'tagdescsec': null,
      'classificationId': 2,
    },
    {
      'id': 9,
      'taglogicid': 'N3_DPU3001_HW_AI010203_PV',
      'tagid': 'BHG_UNIT3_DPU3001_HW_AI010203_PV',
      'tagdesc': '#2角A1层煤火检信号',
      'tagdescsec': null,
      'classificationId': 2,
    },
    {
      'id': 10,
      'taglogicid': 'N3_DPU3001_HW_AI010204_PV',
      'tagid': 'BHG_UNIT3_DPU3001_HW_AI010204_PV',
      'tagdesc': '#2角A2层煤火检信号',
      'tagdescsec': null,
      'classificationId': 2,
    },
  ],
};

export const getTagPointByDescMock ={
  "code": 200,
  "msg": "success",
  "data": [
    {
      "id": 15,
      "taglogicid": "N3_DPU3001_HW_RT010301_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT010301_PV",
      "tagdesc": "A磨煤机主电机U相定子线圈温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16,
      "taglogicid": "N3_DPU3001_HW_RT010302_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT010302_PV",
      "tagdesc": "A磨煤机主电机V相定子线圈温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17,
      "taglogicid": "N3_DPU3001_HW_RT010303_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT010303_PV",
      "tagdesc": "A磨煤机主电机W相定子线圈温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18,
      "taglogicid": "N3_DPU3001_HW_RT010304_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT010304_PV",
      "tagdesc": "A磨煤机主电机轴伸端轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19,
      "taglogicid": "N3_DPU3001_HW_RT010305_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT010305_PV",
      "tagdesc": "A磨煤机减速机输入轴内部轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 20,
      "taglogicid": "N3_DPU3001_HW_RT010306_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT010306_PV",
      "tagdesc": "A磨煤机减速机输入轴内部轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 61,
      "taglogicid": "N3_DPU3001_HW_RT020301_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT020301_PV",
      "tagdesc": "A磨煤机主电机U相定子线圈温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 62,
      "taglogicid": "N3_DPU3001_HW_RT020302_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT020302_PV",
      "tagdesc": "A磨煤机主电机V相定子线圈温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 63,
      "taglogicid": "N3_DPU3001_HW_RT020303_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT020303_PV",
      "tagdesc": "A磨煤机主电机W相定子线圈温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 64,
      "taglogicid": "N3_DPU3001_HW_RT020304_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT020304_PV",
      "tagdesc": "A磨煤机主电机非轴伸端轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 65,
      "taglogicid": "N3_DPU3001_HW_RT020305_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT020305_PV",
      "tagdesc": "A磨煤机减速机输入轴外部轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 68,
      "taglogicid": "N3_DPU3001_HW_RT020308_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT020308_PV",
      "tagdesc": "DPU3001机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 93,
      "taglogicid": "N3_DPU3001_HW_RT030201_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT030201_PV",
      "tagdesc": "A磨煤机磨辊轴承润滑油温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 94,
      "taglogicid": "N3_DPU3001_HW_RT030202_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT030202_PV",
      "tagdesc": "A磨煤机分离器风粉混合物温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 95,
      "taglogicid": "N3_DPU3001_HW_RT030203_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT030203_PV",
      "tagdesc": "A磨煤机稀油站推力轴承油槽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 96,
      "taglogicid": "N3_DPU3001_HW_RT030204_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT030204_PV",
      "tagdesc": "A层燃烧器#1一次风粉温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 97,
      "taglogicid": "N3_DPU3001_HW_RT030205_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT030205_PV",
      "tagdesc": "A层燃烧器#2一次风粉温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 133,
      "taglogicid": "N3_DPU3001_HW_RT040201_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT040201_PV",
      "tagdesc": "A磨煤机磨辊轴承润滑油温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 134,
      "taglogicid": "N3_DPU3001_HW_RT040202_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT040202_PV",
      "tagdesc": "A磨煤机分离器风粉混合物温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 135,
      "taglogicid": "N3_DPU3001_HW_RT040203_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT040203_PV",
      "tagdesc": "A磨煤机稀油站推力轴承油槽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 136,
      "taglogicid": "N3_DPU3001_HW_RT040204_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT040204_PV",
      "tagdesc": "A层燃烧器#3一次风粉温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 137,
      "taglogicid": "N3_DPU3001_HW_RT040205_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT040205_PV",
      "tagdesc": "A层燃烧器#4一次风粉温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 165,
      "taglogicid": "N3_DPU3001_HW_RT050201_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT050201_PV",
      "tagdesc": "A磨煤机磨辊轴承润滑油温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 166,
      "taglogicid": "N3_DPU3001_HW_RT050202_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT050202_PV",
      "tagdesc": "A磨煤机分离器风粉混合物温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 167,
      "taglogicid": "N3_DPU3001_HW_RT050203_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT050203_PV",
      "tagdesc": "A磨煤机稀油站推力轴承油槽温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 189,
      "taglogicid": "N3_DPU3001_HW_RT060201_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT060201_PV",
      "tagdesc": "A磨煤机液压站油箱温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 190,
      "taglogicid": "N3_DPU3001_HW_RT060202_PV",
      "tagid": "BHG_UNIT3_DPU3001_HW_RT060202_PV",
      "tagdesc": "A磨煤机液压站油箱温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 415,
      "taglogicid": "N3_DPU3001_SH0121_BALM6_PV",
      "tagid": "BHG_UNIT3_DPU3001_SH0121_BALM6_PV",
      "tagdesc": "分离器出口温度正常",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 421,
      "taglogicid": "N3_DPU3001_SH0121_BALM12_PV",
      "tagid": "BHG_UNIT3_DPU3001_SH0121_BALM12_PV",
      "tagdesc": "磨煤机本体温度正常",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 432,
      "taglogicid": "N3_DPU3001_SH0124_BALM8_PV",
      "tagid": "BHG_UNIT3_DPU3001_SH0124_BALM8_PV",
      "tagdesc": "稀油站推力轴承油槽温度高(75℃)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 433,
      "taglogicid": "N3_DPU3001_SH0124_BALM9_PV",
      "tagid": "BHG_UNIT3_DPU3001_SH0124_BALM9_PV",
      "tagdesc": "减速机输入轴承内部温度高(85℃)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 434,
      "taglogicid": "N3_DPU3001_SH0124_BALM10_PV",
      "tagid": "BHG_UNIT3_DPU3001_SH0124_BALM10_PV",
      "tagdesc": "分离器出口温度高(110℃)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 438,
      "taglogicid": "N3_DPU3001_SH0124_BALM13_PV",
      "tagid": "BHG_UNIT3_DPU3001_SH0124_BALM13_PV",
      "tagdesc": "A磨辊轴承润滑油温度高(≥100℃)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 509,
      "taglogicid": "N3_DPU3002_HW_RT010301_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT010301_PV",
      "tagdesc": "B磨煤机主电机U相定子线圈温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 510,
      "taglogicid": "N3_DPU3002_HW_RT010302_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT010302_PV",
      "tagdesc": "B磨煤机主电机V相定子线圈温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 511,
      "taglogicid": "N3_DPU3002_HW_RT010303_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT010303_PV",
      "tagdesc": "B磨煤机主电机W相定子线圈温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 512,
      "taglogicid": "N3_DPU3002_HW_RT010304_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT010304_PV",
      "tagdesc": "B磨煤机主电机轴伸端轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 513,
      "taglogicid": "N3_DPU3002_HW_RT010305_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT010305_PV",
      "tagdesc": "B磨煤机减速机输入轴内部轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 514,
      "taglogicid": "N3_DPU3002_HW_RT010306_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT010306_PV",
      "tagdesc": "B磨煤机减速机输入轴内部轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 547,
      "taglogicid": "N3_DPU3002_HW_RT020301_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT020301_PV",
      "tagdesc": "B磨煤机主电机U相定子线圈温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 548,
      "taglogicid": "N3_DPU3002_HW_RT020302_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT020302_PV",
      "tagdesc": "B磨煤机主电机V相定子线圈温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 549,
      "taglogicid": "N3_DPU3002_HW_RT020303_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT020303_PV",
      "tagdesc": "B磨煤机主电机W相定子线圈温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 550,
      "taglogicid": "N3_DPU3002_HW_RT020304_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT020304_PV",
      "tagdesc": "B磨煤机主电机非轴伸端轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 551,
      "taglogicid": "N3_DPU3002_HW_RT020305_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT020305_PV",
      "tagdesc": "B磨煤机减速机输入轴外部轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 552,
      "taglogicid": "N3_DPU3002_HW_RT020306_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT020306_PV",
      "tagdesc": "B磨等离子暖风器入口蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 567,
      "taglogicid": "N3_DPU3002_HW_TC020505_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_TC020505_PV",
      "tagdesc": "B磨煤机进口一次风暖风器后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 603,
      "taglogicid": "N3_DPU3002_HW_RT030301_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT030301_PV",
      "tagdesc": "B磨煤机磨辊轴承润滑油温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 604,
      "taglogicid": "N3_DPU3002_HW_RT030302_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT030302_PV",
      "tagdesc": "B磨煤机分离器风粉混合物温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 605,
      "taglogicid": "N3_DPU3002_HW_RT030303_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT030303_PV",
      "tagdesc": "B磨煤机稀油站推力轴承油槽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 606,
      "taglogicid": "N3_DPU3002_HW_RT030304_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT030304_PV",
      "tagdesc": "B层燃烧器#1一次风粉温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 607,
      "taglogicid": "N3_DPU3002_HW_RT030305_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT030305_PV",
      "tagdesc": "B层燃烧器#2一次风粉温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 610,
      "taglogicid": "N3_DPU3002_HW_RT030308_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT030308_PV",
      "tagdesc": "DPU3002机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 651,
      "taglogicid": "N3_DPU3002_HW_RT040301_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT040301_PV",
      "tagdesc": "B磨煤机磨辊轴承润滑油温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 652,
      "taglogicid": "N3_DPU3002_HW_RT040302_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT040302_PV",
      "tagdesc": "B磨煤机分离器风粉混合物温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 653,
      "taglogicid": "N3_DPU3002_HW_RT040303_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT040303_PV",
      "tagdesc": "B磨煤机稀油站推力轴承油槽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 654,
      "taglogicid": "N3_DPU3002_HW_RT040304_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT040304_PV",
      "tagdesc": "B层燃烧器#3一次风粉温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 655,
      "taglogicid": "N3_DPU3002_HW_RT040305_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT040305_PV",
      "tagdesc": "B层燃烧器#4一次风粉温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 691,
      "taglogicid": "N3_DPU3002_HW_RT050301_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT050301_PV",
      "tagdesc": "B磨煤机磨辊轴承润滑油温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 692,
      "taglogicid": "N3_DPU3002_HW_RT050302_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT050302_PV",
      "tagdesc": "B磨煤机分离器风粉混合物温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 693,
      "taglogicid": "N3_DPU3002_HW_RT050303_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT050303_PV",
      "tagdesc": "B磨煤机稀油站推力轴承油槽温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 745,
      "taglogicid": "N3_DPU3002_HW_RT060301_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT060301_PV",
      "tagdesc": "B磨煤机液压站油箱温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 746,
      "taglogicid": "N3_DPU3002_HW_RT060302_PV",
      "tagid": "BHG_UNIT3_DPU3002_HW_RT060302_PV",
      "tagdesc": "B磨煤机液压站油箱温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1107,
      "taglogicid": "N3_DPU3002_SH0121_BALM6_PV",
      "tagid": "BHG_UNIT3_DPU3002_SH0121_BALM6_PV",
      "tagdesc": "分离器出口温度正常",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1113,
      "taglogicid": "N3_DPU3002_SH0121_BALM12_PV",
      "tagid": "BHG_UNIT3_DPU3002_SH0121_BALM12_PV",
      "tagdesc": "磨煤机本体温度正常",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1124,
      "taglogicid": "N3_DPU3002_SH0124_BALM8_PV",
      "tagid": "BHG_UNIT3_DPU3002_SH0124_BALM8_PV",
      "tagdesc": "稀油站推力轴承油槽温度高(75℃)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1125,
      "taglogicid": "N3_DPU3002_SH0124_BALM9_PV",
      "tagid": "BHG_UNIT3_DPU3002_SH0124_BALM9_PV",
      "tagdesc": "减速机输入轴承内部温度高(85℃)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1126,
      "taglogicid": "N3_DPU3002_SH0124_BALM10_PV",
      "tagid": "BHG_UNIT3_DPU3002_SH0124_BALM10_PV",
      "tagdesc": "分离器出口温度高(110℃)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1130,
      "taglogicid": "N3_DPU3002_SH0124_BALM13_PV",
      "tagid": "BHG_UNIT3_DPU3002_SH0124_BALM13_PV",
      "tagdesc": "B磨辊轴承润滑油温度高≥(100℃)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1352,
      "taglogicid": "N3_DPU3003_HW_RT010301_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT010301_PV",
      "tagdesc": "C磨煤机主电机U相定子线圈温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1353,
      "taglogicid": "N3_DPU3003_HW_RT010302_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT010302_PV",
      "tagdesc": "C磨煤机主电机V相定子线圈温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1354,
      "taglogicid": "N3_DPU3003_HW_RT010303_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT010303_PV",
      "tagdesc": "C磨煤机主电机W相定子线圈温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1355,
      "taglogicid": "N3_DPU3003_HW_RT010304_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT010304_PV",
      "tagdesc": "C磨煤机主电机轴伸端轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1356,
      "taglogicid": "N3_DPU3003_HW_RT010305_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT010305_PV",
      "tagdesc": "C磨煤机减速机输入轴内部轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1357,
      "taglogicid": "N3_DPU3003_HW_RT010306_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT010306_PV",
      "tagdesc": "C磨煤机减速机输入轴内部轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1398,
      "taglogicid": "N3_DPU3003_HW_RT020301_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT020301_PV",
      "tagdesc": "C磨煤机主电机U相定子线圈温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1399,
      "taglogicid": "N3_DPU3003_HW_RT020302_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT020302_PV",
      "tagdesc": "C磨煤机主电机V相定子线圈温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1400,
      "taglogicid": "N3_DPU3003_HW_RT020303_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT020303_PV",
      "tagdesc": "C磨煤机主电机W相定子线圈温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1401,
      "taglogicid": "N3_DPU3003_HW_RT020304_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT020304_PV",
      "tagdesc": "C磨煤机主电机非轴伸端轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1402,
      "taglogicid": "N3_DPU3003_HW_RT020305_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT020305_PV",
      "tagdesc": "C磨煤机减速机输入轴外部轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1405,
      "taglogicid": "N3_DPU3003_HW_RT020308_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT020308_PV",
      "tagdesc": "DPU3003机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1444,
      "taglogicid": "N3_DPU3003_HW_RT030401_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT030401_PV",
      "tagdesc": "C磨煤机磨辊轴承润滑油温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1445,
      "taglogicid": "N3_DPU3003_HW_RT030402_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT030402_PV",
      "tagdesc": "C磨煤机分离器风粉混合物温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1446,
      "taglogicid": "N3_DPU3003_HW_RT030403_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT030403_PV",
      "tagdesc": "C磨煤机稀油站推力轴承油槽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1447,
      "taglogicid": "N3_DPU3003_HW_RT030404_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT030404_PV",
      "tagdesc": "C层燃烧器#1一次风粉温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1448,
      "taglogicid": "N3_DPU3003_HW_RT030405_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT030405_PV",
      "tagdesc": "C层燃烧器#2一次风粉温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1484,
      "taglogicid": "N3_DPU3003_HW_RT040201_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT040201_PV",
      "tagdesc": "C磨煤机磨辊轴承润滑油温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1485,
      "taglogicid": "N3_DPU3003_HW_RT040202_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT040202_PV",
      "tagdesc": "C磨煤机分离器风粉混合物温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1486,
      "taglogicid": "N3_DPU3003_HW_RT040203_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT040203_PV",
      "tagdesc": "C磨煤机稀油站推力轴承油槽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1487,
      "taglogicid": "N3_DPU3003_HW_RT040204_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT040204_PV",
      "tagdesc": "C层燃烧器#3一次风粉温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1488,
      "taglogicid": "N3_DPU3003_HW_RT040205_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT040205_PV",
      "tagdesc": "C层燃烧器#4一次风粉温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1516,
      "taglogicid": "N3_DPU3003_HW_RT050201_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT050201_PV",
      "tagdesc": "C磨煤机磨辊轴承润滑油温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1517,
      "taglogicid": "N3_DPU3003_HW_RT050202_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT050202_PV",
      "tagdesc": "C磨煤机分离器风粉混合物温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1518,
      "taglogicid": "N3_DPU3003_HW_RT050203_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT050203_PV",
      "tagdesc": "C磨煤机稀油站推力轴承油槽温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1548,
      "taglogicid": "N3_DPU3003_HW_RT060201_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT060201_PV",
      "tagdesc": "C磨煤机液压站油箱温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1549,
      "taglogicid": "N3_DPU3003_HW_RT060202_PV",
      "tagid": "BHG_UNIT3_DPU3003_HW_RT060202_PV",
      "tagdesc": "C磨煤机液压站油箱温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1766,
      "taglogicid": "N3_DPU3003_SH0121_BALM6_PV",
      "tagid": "BHG_UNIT3_DPU3003_SH0121_BALM6_PV",
      "tagdesc": "分离器出口温度正常",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1772,
      "taglogicid": "N3_DPU3003_SH0121_BALM12_PV",
      "tagid": "BHG_UNIT3_DPU3003_SH0121_BALM12_PV",
      "tagdesc": "磨煤机本体温度正常",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1783,
      "taglogicid": "N3_DPU3003_SH0124_BALM8_PV",
      "tagid": "BHG_UNIT3_DPU3003_SH0124_BALM8_PV",
      "tagdesc": "稀油站推力轴承油槽温度高(75℃)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1784,
      "taglogicid": "N3_DPU3003_SH0124_BALM9_PV",
      "tagid": "BHG_UNIT3_DPU3003_SH0124_BALM9_PV",
      "tagdesc": "减速机输入轴承内部温度高(85℃)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1785,
      "taglogicid": "N3_DPU3003_SH0124_BALM10_PV",
      "tagid": "BHG_UNIT3_DPU3003_SH0124_BALM10_PV",
      "tagdesc": "分离器出口温度高(110℃)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1789,
      "taglogicid": "N3_DPU3003_SH0124_BALM13_PV",
      "tagid": "BHG_UNIT3_DPU3003_SH0124_BALM13_PV",
      "tagdesc": "C磨辊轴承润滑油温度高(≥100℃)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1875,
      "taglogicid": "N3_DPU3004_HW_RT010301_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT010301_PV",
      "tagdesc": "D磨煤机主电机U相定子线圈温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1876,
      "taglogicid": "N3_DPU3004_HW_RT010302_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT010302_PV",
      "tagdesc": "D磨煤机主电机V相定子线圈温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1877,
      "taglogicid": "N3_DPU3004_HW_RT010303_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT010303_PV",
      "tagdesc": "D磨煤机主电机W相定子线圈温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1878,
      "taglogicid": "N3_DPU3004_HW_RT010304_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT010304_PV",
      "tagdesc": "D磨煤机主电机轴伸端轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1879,
      "taglogicid": "N3_DPU3004_HW_RT010305_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT010305_PV",
      "tagdesc": "D磨煤机减速机输入轴内部轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1880,
      "taglogicid": "N3_DPU3004_HW_RT010306_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT010306_PV",
      "tagdesc": "D磨煤机减速机输入轴内部轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1929,
      "taglogicid": "N3_DPU3004_HW_RT020301_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT020301_PV",
      "tagdesc": "D磨煤机主电机U相定子线圈温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1930,
      "taglogicid": "N3_DPU3004_HW_RT020302_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT020302_PV",
      "tagdesc": "D磨煤机主电机V相定子线圈温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1931,
      "taglogicid": "N3_DPU3004_HW_RT020303_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT020303_PV",
      "tagdesc": "D磨煤机主电机W相定子线圈温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1932,
      "taglogicid": "N3_DPU3004_HW_RT020304_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT020304_PV",
      "tagdesc": "D磨煤机主电机非轴伸端轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1933,
      "taglogicid": "N3_DPU3004_HW_RT020305_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT020305_PV",
      "tagdesc": "D磨煤机减速机输入轴外部轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1934,
      "taglogicid": "N3_DPU3004_HW_RT020306_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT020306_PV",
      "tagdesc": "D磨等离子暖风器入口蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1949,
      "taglogicid": "N3_DPU3004_HW_TC020505_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_TC020505_PV",
      "tagdesc": "D磨煤机进口一次风暖风器后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1985,
      "taglogicid": "N3_DPU3004_HW_RT030301_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT030301_PV",
      "tagdesc": "D磨煤机磨辊轴承润滑油温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1986,
      "taglogicid": "N3_DPU3004_HW_RT030302_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT030302_PV",
      "tagdesc": "D磨煤机分离器风粉混合物温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1987,
      "taglogicid": "N3_DPU3004_HW_RT030303_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT030303_PV",
      "tagdesc": "D磨煤机稀油站推力轴承油槽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1988,
      "taglogicid": "N3_DPU3004_HW_RT030304_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT030304_PV",
      "tagdesc": "D层燃烧器#1一次风粉温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1989,
      "taglogicid": "N3_DPU3004_HW_RT030305_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT030305_PV",
      "tagdesc": "D层燃烧器#2一次风粉温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 1992,
      "taglogicid": "N3_DPU3004_HW_RT030308_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT030308_PV",
      "tagdesc": "DPU3004机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2033,
      "taglogicid": "N3_DPU3004_HW_RT040301_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT040301_PV",
      "tagdesc": "D磨煤机磨辊轴承润滑油温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2034,
      "taglogicid": "N3_DPU3004_HW_RT040302_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT040302_PV",
      "tagdesc": "D磨煤机分离器风粉混合物温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2035,
      "taglogicid": "N3_DPU3004_HW_RT040303_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT040303_PV",
      "tagdesc": "D磨煤机稀油站推力轴承油槽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2036,
      "taglogicid": "N3_DPU3004_HW_RT040304_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT040304_PV",
      "tagdesc": "D层燃烧器#3一次风粉温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2037,
      "taglogicid": "N3_DPU3004_HW_RT040305_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT040305_PV",
      "tagdesc": "D层燃烧器#4一次风粉温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2073,
      "taglogicid": "N3_DPU3004_HW_RT050301_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT050301_PV",
      "tagdesc": "D磨煤机磨辊轴承润滑油温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2074,
      "taglogicid": "N3_DPU3004_HW_RT050302_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT050302_PV",
      "tagdesc": "D磨煤机分离器风粉混合物温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2075,
      "taglogicid": "N3_DPU3004_HW_RT050303_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT050303_PV",
      "tagdesc": "D磨煤机稀油站推力轴承油槽温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2119,
      "taglogicid": "N3_DPU3004_HW_RT060301_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT060301_PV",
      "tagdesc": "D磨煤机液压站油箱温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2120,
      "taglogicid": "N3_DPU3004_HW_RT060302_PV",
      "tagid": "BHG_UNIT3_DPU3004_HW_RT060302_PV",
      "tagdesc": "D磨煤机液压站油箱温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2473,
      "taglogicid": "N3_DPU3004_SH0121_BALM6_PV",
      "tagid": "BHG_UNIT3_DPU3004_SH0121_BALM6_PV",
      "tagdesc": "分离器出口温度正常",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2479,
      "taglogicid": "N3_DPU3004_SH0121_BALM12_PV",
      "tagid": "BHG_UNIT3_DPU3004_SH0121_BALM12_PV",
      "tagdesc": "磨煤机本体温度正常",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2490,
      "taglogicid": "N3_DPU3004_SH0124_BALM8_PV",
      "tagid": "BHG_UNIT3_DPU3004_SH0124_BALM8_PV",
      "tagdesc": "稀油站推力轴承油槽温度高(75℃)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2491,
      "taglogicid": "N3_DPU3004_SH0124_BALM9_PV",
      "tagid": "BHG_UNIT3_DPU3004_SH0124_BALM9_PV",
      "tagdesc": "减速机输入轴承内部温度高(85℃)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2492,
      "taglogicid": "N3_DPU3004_SH0124_BALM10_PV",
      "tagid": "BHG_UNIT3_DPU3004_SH0124_BALM10_PV",
      "tagdesc": "分离器出口温度高(110℃)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2496,
      "taglogicid": "N3_DPU3004_SH0124_BALM13_PV",
      "tagid": "BHG_UNIT3_DPU3004_SH0124_BALM13_PV",
      "tagdesc": "D磨辊轴承润滑油温度高(≥100℃)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2718,
      "taglogicid": "N3_DPU3005_HW_RT010301_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT010301_PV",
      "tagdesc": "E磨煤机主电机U相定子线圈温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2719,
      "taglogicid": "N3_DPU3005_HW_RT010302_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT010302_PV",
      "tagdesc": "E磨煤机主电机V相定子线圈温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2720,
      "taglogicid": "N3_DPU3005_HW_RT010303_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT010303_PV",
      "tagdesc": "E磨煤机主电机W相定子线圈温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2721,
      "taglogicid": "N3_DPU3005_HW_RT010304_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT010304_PV",
      "tagdesc": "E磨煤机主电机轴伸端轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2722,
      "taglogicid": "N3_DPU3005_HW_RT010305_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT010305_PV",
      "tagdesc": "E磨煤机减速机输入轴内部轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2723,
      "taglogicid": "N3_DPU3005_HW_RT010306_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT010306_PV",
      "tagdesc": "E磨煤机减速机输入轴内部轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2764,
      "taglogicid": "N3_DPU3005_HW_RT020301_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT020301_PV",
      "tagdesc": "E磨煤机主电机U相定子线圈温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2765,
      "taglogicid": "N3_DPU3005_HW_RT020302_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT020302_PV",
      "tagdesc": "E磨煤机主电机V相定子线圈温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2766,
      "taglogicid": "N3_DPU3005_HW_RT020303_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT020303_PV",
      "tagdesc": "E磨煤机主电机W相定子线圈温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2767,
      "taglogicid": "N3_DPU3005_HW_RT020304_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT020304_PV",
      "tagdesc": "E磨煤机主电机非轴伸端轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2768,
      "taglogicid": "N3_DPU3005_HW_RT020305_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT020305_PV",
      "tagdesc": "E磨煤机减速机输入轴外部轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2771,
      "taglogicid": "N3_DPU3005_HW_RT020308_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT020308_PV",
      "tagdesc": "DPU3005机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2810,
      "taglogicid": "N3_DPU3005_HW_RT030401_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT030401_PV",
      "tagdesc": "E磨煤机磨辊轴承润滑油温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2811,
      "taglogicid": "N3_DPU3005_HW_RT030402_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT030402_PV",
      "tagdesc": "E磨煤机分离器风粉混合物温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2812,
      "taglogicid": "N3_DPU3005_HW_RT030403_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT030403_PV",
      "tagdesc": "E磨煤机稀油站推力轴承油槽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2813,
      "taglogicid": "N3_DPU3005_HW_RT030404_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT030404_PV",
      "tagdesc": "E层燃烧器#1一次风粉温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2814,
      "taglogicid": "N3_DPU3005_HW_RT030405_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT030405_PV",
      "tagdesc": "E层燃烧器#2一次风粉温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2850,
      "taglogicid": "N3_DPU3005_HW_RT040201_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT040201_PV",
      "tagdesc": "E磨煤机磨辊轴承润滑油温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2851,
      "taglogicid": "N3_DPU3005_HW_RT040202_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT040202_PV",
      "tagdesc": "E磨煤机分离器风粉混合物温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2852,
      "taglogicid": "N3_DPU3005_HW_RT040203_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT040203_PV",
      "tagdesc": "E磨煤机稀油站推力轴承油槽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2853,
      "taglogicid": "N3_DPU3005_HW_RT040204_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT040204_PV",
      "tagdesc": "E层燃烧器#3一次风粉温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2854,
      "taglogicid": "N3_DPU3005_HW_RT040205_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT040205_PV",
      "tagdesc": "E层燃烧器#4一次风粉温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2882,
      "taglogicid": "N3_DPU3005_HW_RT050201_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT050201_PV",
      "tagdesc": "E磨煤机磨辊轴承润滑油温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2883,
      "taglogicid": "N3_DPU3005_HW_RT050202_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT050202_PV",
      "tagdesc": "E磨煤机分离器风粉混合物温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2884,
      "taglogicid": "N3_DPU3005_HW_RT050203_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT050203_PV",
      "tagdesc": "E磨煤机稀油站推力轴承油槽温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2906,
      "taglogicid": "N3_DPU3005_HW_RT060201_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT060201_PV",
      "tagdesc": "E磨煤机液压站油箱温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 2907,
      "taglogicid": "N3_DPU3005_HW_RT060202_PV",
      "tagid": "BHG_UNIT3_DPU3005_HW_RT060202_PV",
      "tagdesc": "E磨煤机液压站油箱温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3132,
      "taglogicid": "N3_DPU3005_SH0121_BALM6_PV",
      "tagid": "BHG_UNIT3_DPU3005_SH0121_BALM6_PV",
      "tagdesc": "分离器出口温度正常",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3138,
      "taglogicid": "N3_DPU3005_SH0121_BALM12_PV",
      "tagid": "BHG_UNIT3_DPU3005_SH0121_BALM12_PV",
      "tagdesc": "磨煤机本体温度正常",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3149,
      "taglogicid": "N3_DPU3005_SH0124_BALM8_PV",
      "tagid": "BHG_UNIT3_DPU3005_SH0124_BALM8_PV",
      "tagdesc": "稀油站推力轴承油槽温度高(75℃)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3150,
      "taglogicid": "N3_DPU3005_SH0124_BALM9_PV",
      "tagid": "BHG_UNIT3_DPU3005_SH0124_BALM9_PV",
      "tagdesc": "减速机输入轴承内部温度高(85℃)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3151,
      "taglogicid": "N3_DPU3005_SH0124_BALM10_PV",
      "tagid": "BHG_UNIT3_DPU3005_SH0124_BALM10_PV",
      "tagdesc": "分离器出口温度高(110℃)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3155,
      "taglogicid": "N3_DPU3005_SH0124_BALM13_PV",
      "tagid": "BHG_UNIT3_DPU3005_SH0124_BALM13_PV",
      "tagdesc": "E磨辊轴承润滑油温度高(≥100℃)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3241,
      "taglogicid": "N3_DPU3006_HW_RT010301_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT010301_PV",
      "tagdesc": "F磨煤机主电机U相定子线圈温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3242,
      "taglogicid": "N3_DPU3006_HW_RT010302_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT010302_PV",
      "tagdesc": "F磨煤机主电机V相定子线圈温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3243,
      "taglogicid": "N3_DPU3006_HW_RT010303_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT010303_PV",
      "tagdesc": "F磨煤机主电机W相定子线圈温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3244,
      "taglogicid": "N3_DPU3006_HW_RT010304_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT010304_PV",
      "tagdesc": "F磨煤机主电机轴伸端轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3245,
      "taglogicid": "N3_DPU3006_HW_RT010305_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT010305_PV",
      "tagdesc": "F磨煤机减速机输入轴内部轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3246,
      "taglogicid": "N3_DPU3006_HW_RT010306_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT010306_PV",
      "tagdesc": "F磨煤机减速机输入轴内部轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3287,
      "taglogicid": "N3_DPU3006_HW_RT020301_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT020301_PV",
      "tagdesc": "F磨煤机主电机U相定子线圈温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3288,
      "taglogicid": "N3_DPU3006_HW_RT020302_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT020302_PV",
      "tagdesc": "F磨煤机主电机V相定子线圈温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3289,
      "taglogicid": "N3_DPU3006_HW_RT020303_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT020303_PV",
      "tagdesc": "F磨煤机主电机W相定子线圈温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3290,
      "taglogicid": "N3_DPU3006_HW_RT020304_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT020304_PV",
      "tagdesc": "F磨煤机主电机非轴伸端轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3291,
      "taglogicid": "N3_DPU3006_HW_RT020305_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT020305_PV",
      "tagdesc": "F磨煤机减速机输入轴外部轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3294,
      "taglogicid": "N3_DPU3006_HW_RT020308_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT020308_PV",
      "tagdesc": "DPU3006机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3319,
      "taglogicid": "N3_DPU3006_HW_RT030201_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT030201_PV",
      "tagdesc": "F磨煤机磨辊轴承润滑油温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3320,
      "taglogicid": "N3_DPU3006_HW_RT030202_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT030202_PV",
      "tagdesc": "F磨煤机分离器风粉混合物温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3321,
      "taglogicid": "N3_DPU3006_HW_RT030203_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT030203_PV",
      "tagdesc": "F磨煤机稀油站推力轴承油槽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3322,
      "taglogicid": "N3_DPU3006_HW_RT030204_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT030204_PV",
      "tagdesc": "F层燃烧器#1一次风粉温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3323,
      "taglogicid": "N3_DPU3006_HW_RT030205_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT030205_PV",
      "tagdesc": "F层燃烧器#2一次风粉温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3359,
      "taglogicid": "N3_DPU3006_HW_RT040201_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT040201_PV",
      "tagdesc": "F磨煤机磨辊轴承润滑油温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3360,
      "taglogicid": "N3_DPU3006_HW_RT040202_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT040202_PV",
      "tagdesc": "F磨煤机分离器风粉混合物温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3361,
      "taglogicid": "N3_DPU3006_HW_RT040203_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT040203_PV",
      "tagdesc": "F磨煤机稀油站推力轴承油槽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3362,
      "taglogicid": "N3_DPU3006_HW_RT040204_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT040204_PV",
      "tagdesc": "F层燃烧器#3一次风粉温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3363,
      "taglogicid": "N3_DPU3006_HW_RT040205_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT040205_PV",
      "tagdesc": "F层燃烧器#4一次风粉温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3383,
      "taglogicid": "N3_DPU3006_HW_RT050201_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT050201_PV",
      "tagdesc": "F磨煤机磨辊轴承润滑油温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3384,
      "taglogicid": "N3_DPU3006_HW_RT050202_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT050202_PV",
      "tagdesc": "F磨煤机分离器风粉混合物温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3385,
      "taglogicid": "N3_DPU3006_HW_RT050203_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT050203_PV",
      "tagdesc": "F磨煤机稀油站推力轴承油槽温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3415,
      "taglogicid": "N3_DPU3006_HW_RT060201_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT060201_PV",
      "tagdesc": "F磨煤机液压站油箱温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3416,
      "taglogicid": "N3_DPU3006_HW_RT060202_PV",
      "tagid": "BHG_UNIT3_DPU3006_HW_RT060202_PV",
      "tagdesc": "F磨煤机液压站油箱温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3641,
      "taglogicid": "N3_DPU3006_SH0121_BALM6_PV",
      "tagid": "BHG_UNIT3_DPU3006_SH0121_BALM6_PV",
      "tagdesc": "分离器出口温度正常",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3647,
      "taglogicid": "N3_DPU3006_SH0121_BALM12_PV",
      "tagid": "BHG_UNIT3_DPU3006_SH0121_BALM12_PV",
      "tagdesc": "磨煤机本体温度正常",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3658,
      "taglogicid": "N3_DPU3006_SH0124_BALM8_PV",
      "tagid": "BHG_UNIT3_DPU3006_SH0124_BALM8_PV",
      "tagdesc": "稀油站推力轴承油槽温度高(75℃)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3659,
      "taglogicid": "N3_DPU3006_SH0124_BALM9_PV",
      "tagid": "BHG_UNIT3_DPU3006_SH0124_BALM9_PV",
      "tagdesc": "减速机输入轴承内部温度高(85℃)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3660,
      "taglogicid": "N3_DPU3006_SH0124_BALM10_PV",
      "tagid": "BHG_UNIT3_DPU3006_SH0124_BALM10_PV",
      "tagdesc": "分离器出口温度高(110℃)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3664,
      "taglogicid": "N3_DPU3006_SH0124_BALM13_PV",
      "tagid": "BHG_UNIT3_DPU3006_SH0124_BALM13_PV",
      "tagdesc": "F磨辊轴承润滑油温度高(≥100℃)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3735,
      "taglogicid": "N3_DPU3007_HW_RT010301_PV",
      "tagid": "BHG_UNIT3_DPU3007_HW_RT010301_PV",
      "tagdesc": "A密封风机电机U相定子线圈温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3736,
      "taglogicid": "N3_DPU3007_HW_RT010302_PV",
      "tagid": "BHG_UNIT3_DPU3007_HW_RT010302_PV",
      "tagdesc": "A密封风机电机V相定子线圈温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3737,
      "taglogicid": "N3_DPU3007_HW_RT010303_PV",
      "tagid": "BHG_UNIT3_DPU3007_HW_RT010303_PV",
      "tagdesc": "A密封风机电机W相定子线圈温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3738,
      "taglogicid": "N3_DPU3007_HW_RT010304_PV",
      "tagid": "BHG_UNIT3_DPU3007_HW_RT010304_PV",
      "tagdesc": "A密封风机电机非轴伸端轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3739,
      "taglogicid": "N3_DPU3007_HW_RT010305_PV",
      "tagid": "BHG_UNIT3_DPU3007_HW_RT010305_PV",
      "tagdesc": "A密封风机承力侧轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3742,
      "taglogicid": "N3_DPU3007_HW_RT010308_PV",
      "tagid": "BHG_UNIT3_DPU3007_HW_RT010308_PV",
      "tagdesc": "DPU3007机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3853,
      "taglogicid": "N3_DPU3007_HW_RT030201_PV",
      "tagid": "BHG_UNIT3_DPU3007_HW_RT030201_PV",
      "tagdesc": "A密封风机电机U相定子线圈温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3854,
      "taglogicid": "N3_DPU3007_HW_RT030202_PV",
      "tagid": "BHG_UNIT3_DPU3007_HW_RT030202_PV",
      "tagdesc": "A密封风机电机V相定子线圈温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3855,
      "taglogicid": "N3_DPU3007_HW_RT030203_PV",
      "tagid": "BHG_UNIT3_DPU3007_HW_RT030203_PV",
      "tagdesc": "A密封风机电机W相定子线圈温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3856,
      "taglogicid": "N3_DPU3007_HW_RT030204_PV",
      "tagid": "BHG_UNIT3_DPU3007_HW_RT030204_PV",
      "tagdesc": "A密封风机电机轴伸端轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3857,
      "taglogicid": "N3_DPU3007_HW_RT030205_PV",
      "tagid": "BHG_UNIT3_DPU3007_HW_RT030205_PV",
      "tagdesc": "A密封风机推力侧轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3914,
      "taglogicid": "N3_DPU3007_HW_DI040106_PV",
      "tagid": "BHG_UNIT3_DPU3007_HW_DI040106_PV",
      "tagdesc": "水冷壁出口蒸汽温度高越限1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3946,
      "taglogicid": "N3_DPU3007_HW_DI050106_PV",
      "tagid": "BHG_UNIT3_DPU3007_HW_DI050106_PV",
      "tagdesc": "水冷壁出口蒸汽温度高越限2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 3978,
      "taglogicid": "N3_DPU3007_HW_DI060106_PV",
      "tagid": "BHG_UNIT3_DPU3007_HW_DI060106_PV",
      "tagdesc": "水冷壁出口蒸汽温度高越限3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4063,
      "taglogicid": "N3_DPU3008_HW_RT010401_PV",
      "tagid": "BHG_UNIT3_DPU3008_HW_RT010401_PV",
      "tagdesc": "B密封风机电机U相定子线圈温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4064,
      "taglogicid": "N3_DPU3008_HW_RT010402_PV",
      "tagid": "BHG_UNIT3_DPU3008_HW_RT010402_PV",
      "tagdesc": "B密封风机电机V相定子线圈温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4065,
      "taglogicid": "N3_DPU3008_HW_RT010403_PV",
      "tagid": "BHG_UNIT3_DPU3008_HW_RT010403_PV",
      "tagdesc": "B密封风机电机W相定子线圈温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4066,
      "taglogicid": "N3_DPU3008_HW_RT010404_PV",
      "tagid": "BHG_UNIT3_DPU3008_HW_RT010404_PV",
      "tagdesc": "B密封风机电机轴伸端轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4067,
      "taglogicid": "N3_DPU3008_HW_RT010405_PV",
      "tagid": "BHG_UNIT3_DPU3008_HW_RT010405_PV",
      "tagdesc": "B密封风机推力侧轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4070,
      "taglogicid": "N3_DPU3008_HW_RT010408_PV",
      "tagid": "BHG_UNIT3_DPU3008_HW_RT010408_PV",
      "tagdesc": "DPU3008机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4119,
      "taglogicid": "N3_DPU3008_HW_RT020301_PV",
      "tagid": "BHG_UNIT3_DPU3008_HW_RT020301_PV",
      "tagdesc": "B密封风机电机U相定子线圈温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4120,
      "taglogicid": "N3_DPU3008_HW_RT020302_PV",
      "tagid": "BHG_UNIT3_DPU3008_HW_RT020302_PV",
      "tagdesc": "B密封风机电机V相定子线圈温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4121,
      "taglogicid": "N3_DPU3008_HW_RT020303_PV",
      "tagid": "BHG_UNIT3_DPU3008_HW_RT020303_PV",
      "tagdesc": "B密封风机电机W相定子线圈温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4122,
      "taglogicid": "N3_DPU3008_HW_RT020304_PV",
      "tagid": "BHG_UNIT3_DPU3008_HW_RT020304_PV",
      "tagdesc": "B密封风机电机非轴伸端轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4123,
      "taglogicid": "N3_DPU3008_HW_RT020305_PV",
      "tagid": "BHG_UNIT3_DPU3008_HW_RT020305_PV",
      "tagdesc": "B密封风机承力侧轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4207,
      "taglogicid": "N3_DPU3008_HW_TC030101_PV",
      "tagid": "BHG_UNIT3_DPU3008_HW_TC030101_PV",
      "tagdesc": "热一次风母管温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4312,
      "taglogicid": "N3_DPU3009_HW_RT020403_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT020403_PV",
      "tagdesc": "A引风机出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4314,
      "taglogicid": "N3_DPU3009_HW_RT020405_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT020405_PV",
      "tagdesc": "A引风机润滑油过滤器出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4317,
      "taglogicid": "N3_DPU3009_HW_RT020408_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT020408_PV",
      "tagdesc": "A引风机润滑油供油温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4326,
      "taglogicid": "N3_DPU3009_HW_RT020601_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT020601_PV",
      "tagdesc": "A空气预热器进口二次风温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4327,
      "taglogicid": "N3_DPU3009_HW_RT020602_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT020602_PV",
      "tagdesc": "B空气预热器进口二次风温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4328,
      "taglogicid": "N3_DPU3009_HW_RT020603_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT020603_PV",
      "tagdesc": "大气温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4330,
      "taglogicid": "N3_DPU3009_HW_RT020605_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT020605_PV",
      "tagdesc": "A送风机电机前轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4331,
      "taglogicid": "N3_DPU3009_HW_RT020606_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT020606_PV",
      "tagdesc": "A送风机电机后轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4333,
      "taglogicid": "N3_DPU3009_HW_RT020608_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT020608_PV",
      "tagdesc": "DPU3009机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4334,
      "taglogicid": "N3_DPU3009_HW_RT020701_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT020701_PV",
      "tagdesc": "A空气预热器进口二次风温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4335,
      "taglogicid": "N3_DPU3009_HW_RT020702_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT020702_PV",
      "tagdesc": "B空气预热器进口二次风温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4336,
      "taglogicid": "N3_DPU3009_HW_RT020703_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT020703_PV",
      "tagdesc": "大气温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4338,
      "taglogicid": "N3_DPU3009_HW_RT020705_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT020705_PV",
      "tagdesc": "A送风机电机前轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4339,
      "taglogicid": "N3_DPU3009_HW_RT020706_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT020706_PV",
      "tagdesc": "A送风机电机后轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4414,
      "taglogicid": "N3_DPU3009_HW_RT040201_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT040201_PV",
      "tagdesc": "A空气预热器进口二次风温度4",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4415,
      "taglogicid": "N3_DPU3009_HW_RT040202_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT040202_PV",
      "tagdesc": "B空气预热器进口二次风温度4",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4416,
      "taglogicid": "N3_DPU3009_HW_RT040203_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT040203_PV",
      "tagdesc": "A送风机电机定子线圈U相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4417,
      "taglogicid": "N3_DPU3009_HW_RT040204_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT040204_PV",
      "tagdesc": "A送风机电机定子线圈V相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4418,
      "taglogicid": "N3_DPU3009_HW_RT040205_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT040205_PV",
      "tagdesc": "A送风机电机定子线圈W相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4470,
      "taglogicid": "N3_DPU3009_HW_RT050201_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT050201_PV",
      "tagdesc": "A送风机轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4471,
      "taglogicid": "N3_DPU3009_HW_RT050202_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT050202_PV",
      "tagdesc": "A送风机轴承温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4472,
      "taglogicid": "N3_DPU3009_HW_RT050203_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT050203_PV",
      "tagdesc": "A引风机轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4473,
      "taglogicid": "N3_DPU3009_HW_RT050204_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT050204_PV",
      "tagdesc": "A引风机轴承温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4474,
      "taglogicid": "N3_DPU3009_HW_RT050205_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT050205_PV",
      "tagdesc": "A引风机电机前轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4475,
      "taglogicid": "N3_DPU3009_HW_RT050206_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT050206_PV",
      "tagdesc": "A引风机电机后轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4542,
      "taglogicid": "N3_DPU3009_HW_RT060201_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT060201_PV",
      "tagdesc": "A送风机轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4543,
      "taglogicid": "N3_DPU3009_HW_RT060202_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT060202_PV",
      "tagdesc": "A送风机轴承温度4",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4544,
      "taglogicid": "N3_DPU3009_HW_RT060203_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT060203_PV",
      "tagdesc": "A引风机轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4545,
      "taglogicid": "N3_DPU3009_HW_RT060204_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT060204_PV",
      "tagdesc": "A引风机轴承温度4",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4546,
      "taglogicid": "N3_DPU3009_HW_RT060205_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT060205_PV",
      "tagdesc": "A引风机电机前轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4547,
      "taglogicid": "N3_DPU3009_HW_RT060206_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT060206_PV",
      "tagdesc": "A引风机电机后轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4614,
      "taglogicid": "N3_DPU3009_HW_RT070201_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT070201_PV",
      "tagdesc": "A送风机轴承温度5",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4615,
      "taglogicid": "N3_DPU3009_HW_RT070202_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT070202_PV",
      "tagdesc": "A送风机轴承温度7",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4616,
      "taglogicid": "N3_DPU3009_HW_RT070203_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT070203_PV",
      "tagdesc": "A引风机轴承温度5",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4617,
      "taglogicid": "N3_DPU3009_HW_RT070204_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT070204_PV",
      "tagdesc": "A引风机轴承温度7",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4618,
      "taglogicid": "N3_DPU3009_HW_RT070205_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT070205_PV",
      "tagdesc": "A引风机电机定子线圈U相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4619,
      "taglogicid": "N3_DPU3009_HW_RT070206_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT070206_PV",
      "tagdesc": "A引风机电机定子线圈V相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4620,
      "taglogicid": "N3_DPU3009_HW_RT070207_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT070207_PV",
      "tagdesc": "A引风机电机定子线圈W相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4632,
      "taglogicid": "N3_DPU3009_HW_RT070403_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT070403_PV",
      "tagdesc": "A送风机润滑油过滤器出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4634,
      "taglogicid": "N3_DPU3009_HW_RT070405_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT070405_PV",
      "tagdesc": "A送风机润滑油供油温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4635,
      "taglogicid": "N3_DPU3009_HW_RT070406_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT070406_PV",
      "tagdesc": "A引风机入口烟气温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4636,
      "taglogicid": "N3_DPU3009_HW_RT070407_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT070407_PV",
      "tagdesc": "A送风机轴承温度9",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4637,
      "taglogicid": "N3_DPU3009_HW_RT070408_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT070408_PV",
      "tagdesc": "A引风机轴承温度9",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4638,
      "taglogicid": "N3_DPU3009_HW_RT070501_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT070501_PV",
      "tagdesc": "A空气预热器进口二次风温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4639,
      "taglogicid": "N3_DPU3009_HW_RT070502_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT070502_PV",
      "tagdesc": "B空气预热器进口二次风温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4640,
      "taglogicid": "N3_DPU3009_HW_RT070503_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT070503_PV",
      "tagdesc": "A送风机电机定子线圈U相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4641,
      "taglogicid": "N3_DPU3009_HW_RT070504_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT070504_PV",
      "tagdesc": "A送风机电机定子线圈V相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4642,
      "taglogicid": "N3_DPU3009_HW_RT070505_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT070505_PV",
      "tagdesc": "A送风机电机定子线圈W相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4643,
      "taglogicid": "N3_DPU3009_HW_RT070506_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT070506_PV",
      "tagdesc": "A送风机出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4694,
      "taglogicid": "N3_DPU3009_HW_RT080201_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT080201_PV",
      "tagdesc": "A送风机轴承温度6",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4695,
      "taglogicid": "N3_DPU3009_HW_RT080202_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT080202_PV",
      "tagdesc": "A送风机轴承温度8",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4696,
      "taglogicid": "N3_DPU3009_HW_RT080203_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT080203_PV",
      "tagdesc": "A引风机轴承温度6",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4697,
      "taglogicid": "N3_DPU3009_HW_RT080204_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT080204_PV",
      "tagdesc": "A引风机轴承温度8",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4698,
      "taglogicid": "N3_DPU3009_HW_RT080205_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT080205_PV",
      "tagdesc": "A引风机电机定子线圈U相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4699,
      "taglogicid": "N3_DPU3009_HW_RT080206_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT080206_PV",
      "tagdesc": "A引风机电机定子线圈V相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4700,
      "taglogicid": "N3_DPU3009_HW_RT080207_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT080207_PV",
      "tagdesc": "A引风机电机定子线圈W相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4783,
      "taglogicid": "N3_DPU3009_HW_RT090202_PV",
      "tagid": "BHG_UNIT3_DPU3009_HW_RT090202_PV",
      "tagdesc": "A引风机出口烟气温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4855,
      "taglogicid": "N3_DPU3009_SH0159_BALM5_PV",
      "tagid": "BHG_UNIT3_DPU3009_SH0159_BALM5_PV",
      "tagdesc": "A引风机电机轴承温度满足启动",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4870,
      "taglogicid": "N3_DPU3009_SH0162_BALM4_PV",
      "tagid": "BHG_UNIT3_DPU3009_SH0162_BALM4_PV",
      "tagdesc": "A引风机电机轴承温度高跳闸",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4875,
      "taglogicid": "N3_DPU3009_SH0162_BALM10_PV",
      "tagid": "BHG_UNIT3_DPU3009_SH0162_BALM10_PV",
      "tagdesc": "A引风机定子绕组温度高跳闸",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4885,
      "taglogicid": "N3_DPU3009_SH0174_BALM3_PV",
      "tagid": "BHG_UNIT3_DPU3009_SH0174_BALM3_PV",
      "tagdesc": "A送风机轴承温度满足启动",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4886,
      "taglogicid": "N3_DPU3009_SH0174_BALM4_PV",
      "tagid": "BHG_UNIT3_DPU3009_SH0174_BALM4_PV",
      "tagdesc": "A送风机定子绕组温度满足启动",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4887,
      "taglogicid": "N3_DPU3009_SH0174_BALM5_PV",
      "tagid": "BHG_UNIT3_DPU3009_SH0174_BALM5_PV",
      "tagdesc": "A送风机电机轴承温度满足启动",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4902,
      "taglogicid": "N3_DPU3009_SH0177_BALM4_PV",
      "tagid": "BHG_UNIT3_DPU3009_SH0177_BALM4_PV",
      "tagdesc": "A送风机电机轴承温度高跳闸",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4940,
      "taglogicid": "N3_DPU3010_HW_RT010301_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT010301_PV",
      "tagdesc": "B送风机轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4941,
      "taglogicid": "N3_DPU3010_HW_RT010302_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT010302_PV",
      "tagdesc": "B引风机轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4942,
      "taglogicid": "N3_DPU3010_HW_RT010303_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT010303_PV",
      "tagdesc": "B送风机电机定子线圈U相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4943,
      "taglogicid": "N3_DPU3010_HW_RT010304_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT010304_PV",
      "tagdesc": "B送风机电机定子线圈V相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4944,
      "taglogicid": "N3_DPU3010_HW_RT010305_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT010305_PV",
      "tagdesc": "B送风机电机定子线圈W相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4945,
      "taglogicid": "N3_DPU3010_HW_RT010306_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT010306_PV",
      "tagdesc": "B送风机电机前轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4947,
      "taglogicid": "N3_DPU3010_HW_RT010308_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT010308_PV",
      "tagdesc": "DPU3010机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4972,
      "taglogicid": "N3_DPU3010_HW_RT020201_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT020201_PV",
      "tagdesc": "B送风机轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4973,
      "taglogicid": "N3_DPU3010_HW_RT020202_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT020202_PV",
      "tagdesc": "B引风机轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4974,
      "taglogicid": "N3_DPU3010_HW_RT020203_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT020203_PV",
      "tagdesc": "B送风机电机定子线圈U相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4975,
      "taglogicid": "N3_DPU3010_HW_RT020204_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT020204_PV",
      "tagdesc": "B送风机电机定子线圈V相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4976,
      "taglogicid": "N3_DPU3010_HW_RT020205_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT020205_PV",
      "tagdesc": "B送风机电机定子线圈W相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4977,
      "taglogicid": "N3_DPU3010_HW_RT020206_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT020206_PV",
      "tagdesc": "B送风机电机前轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 4978,
      "taglogicid": "N3_DPU3010_HW_RT020207_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT020207_PV",
      "tagdesc": "B送风机电机后轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5012,
      "taglogicid": "N3_DPU3010_HW_RT030201_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT030201_PV",
      "tagdesc": "B送风机轴承温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5013,
      "taglogicid": "N3_DPU3010_HW_RT030202_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT030202_PV",
      "tagdesc": "B引风机轴承温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5014,
      "taglogicid": "N3_DPU3010_HW_RT030203_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT030203_PV",
      "tagdesc": "B引风机电机定子线圈U相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5015,
      "taglogicid": "N3_DPU3010_HW_RT030204_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT030204_PV",
      "tagdesc": "B引风机电机定子线圈V相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5016,
      "taglogicid": "N3_DPU3010_HW_RT030205_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT030205_PV",
      "tagdesc": "B引风机电机定子线圈W相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5017,
      "taglogicid": "N3_DPU3010_HW_RT030206_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT030206_PV",
      "tagdesc": "B送风机电机后轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5076,
      "taglogicid": "N3_DPU3010_HW_RT040201_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT040201_PV",
      "tagdesc": "B送风机轴承温度4",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5077,
      "taglogicid": "N3_DPU3010_HW_RT040202_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT040202_PV",
      "tagdesc": "B引风机轴承温度4",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5078,
      "taglogicid": "N3_DPU3010_HW_RT040203_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT040203_PV",
      "tagdesc": "B引风机电机定子线圈U相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5079,
      "taglogicid": "N3_DPU3010_HW_RT040204_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT040204_PV",
      "tagdesc": "B引风机电机定子线圈V相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5080,
      "taglogicid": "N3_DPU3010_HW_RT040205_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT040205_PV",
      "tagdesc": "B引风机电机定子线圈W相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5156,
      "taglogicid": "N3_DPU3010_HW_RT050201_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT050201_PV",
      "tagdesc": "B送风机轴承温度5",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5157,
      "taglogicid": "N3_DPU3010_HW_RT050202_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT050202_PV",
      "tagdesc": "B引风机轴承温度5",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5158,
      "taglogicid": "N3_DPU3010_HW_RT050203_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT050203_PV",
      "tagdesc": "B引风机电机前轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5159,
      "taglogicid": "N3_DPU3010_HW_RT050204_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT050204_PV",
      "tagdesc": "B引风机电机后轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5160,
      "taglogicid": "N3_DPU3010_HW_RT050205_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT050205_PV",
      "tagdesc": "B送风机出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5196,
      "taglogicid": "N3_DPU3010_HW_RT060201_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT060201_PV",
      "tagdesc": "B送风机轴承温度6",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5197,
      "taglogicid": "N3_DPU3010_HW_RT060202_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT060202_PV",
      "tagdesc": "B引风机轴承温度6",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5198,
      "taglogicid": "N3_DPU3010_HW_RT060203_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT060203_PV",
      "tagdesc": "B引风机电机前轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5199,
      "taglogicid": "N3_DPU3010_HW_RT060204_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT060204_PV",
      "tagdesc": "B引风机电机后轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5200,
      "taglogicid": "N3_DPU3010_HW_RT060205_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT060205_PV",
      "tagdesc": "B送风机润滑油过滤器出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5308,
      "taglogicid": "N3_DPU3010_HW_RT080201_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT080201_PV",
      "tagdesc": "B送风机轴承温度7",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5309,
      "taglogicid": "N3_DPU3010_HW_RT080202_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT080202_PV",
      "tagdesc": "B引风机轴承温度7",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5311,
      "taglogicid": "N3_DPU3010_HW_RT080204_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT080204_PV",
      "tagdesc": "B送风机润滑油供油温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5314,
      "taglogicid": "N3_DPU3010_HW_RT080207_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT080207_PV",
      "tagdesc": "B送风机轴承温度9",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5315,
      "taglogicid": "N3_DPU3010_HW_RT080208_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT080208_PV",
      "tagdesc": "B引风机轴承温度9",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5340,
      "taglogicid": "N3_DPU3010_HW_RT090201_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT090201_PV",
      "tagdesc": "B送风机轴承温度8",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5341,
      "taglogicid": "N3_DPU3010_HW_RT090202_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT090202_PV",
      "tagdesc": "B引风机轴承温度8",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5342,
      "taglogicid": "N3_DPU3010_HW_RT090203_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT090203_PV",
      "tagdesc": "B引风机出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5344,
      "taglogicid": "N3_DPU3010_HW_RT090205_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT090205_PV",
      "tagdesc": "B引风机润滑油过滤器出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5391,
      "taglogicid": "N3_DPU3010_HW_RT100204_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT100204_PV",
      "tagdesc": "B引风机润滑油供油温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5394,
      "taglogicid": "N3_DPU3010_HW_RT100207_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT100207_PV",
      "tagdesc": "B引风机入口烟气温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5395,
      "taglogicid": "N3_DPU3010_HW_RT100208_PV",
      "tagid": "BHG_UNIT3_DPU3010_HW_RT100208_PV",
      "tagdesc": "B引风机出口烟气温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5416,
      "taglogicid": "N3_DPU3010_SH0159_BALM5_PV",
      "tagid": "BHG_UNIT3_DPU3010_SH0159_BALM5_PV",
      "tagdesc": "B引风机电机轴承温度满足启动",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5431,
      "taglogicid": "N3_DPU3010_SH0162_BALM4_PV",
      "tagid": "BHG_UNIT3_DPU3010_SH0162_BALM4_PV",
      "tagdesc": "B引风机电机轴承温度高跳闸",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5436,
      "taglogicid": "N3_DPU3010_SH0162_BALM10_PV",
      "tagid": "BHG_UNIT3_DPU3010_SH0162_BALM10_PV",
      "tagdesc": "B引风机定子绕组温度高跳闸",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5446,
      "taglogicid": "N3_DPU3010_SH0174_BALM3_PV",
      "tagid": "BHG_UNIT3_DPU3010_SH0174_BALM3_PV",
      "tagdesc": "B送风机轴承温度满足启动",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5447,
      "taglogicid": "N3_DPU3010_SH0174_BALM4_PV",
      "tagid": "BHG_UNIT3_DPU3010_SH0174_BALM4_PV",
      "tagdesc": "B送风机定子绕组温度满足启动",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5448,
      "taglogicid": "N3_DPU3010_SH0174_BALM5_PV",
      "tagid": "BHG_UNIT3_DPU3010_SH0174_BALM5_PV",
      "tagdesc": "B送风机电机轴承温度满足启动",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5463,
      "taglogicid": "N3_DPU3010_SH0177_BALM4_PV",
      "tagid": "BHG_UNIT3_DPU3010_SH0177_BALM4_PV",
      "tagdesc": "B送风机电机轴承温度高跳闸",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5505,
      "taglogicid": "N3_DPU3011_HW_TC010401_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_TC010401_PV",
      "tagdesc": "A空预器进口空气温度1（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5506,
      "taglogicid": "N3_DPU3011_HW_TC010402_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_TC010402_PV",
      "tagdesc": "A空预器出口空气温度1（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5507,
      "taglogicid": "N3_DPU3011_HW_TC010403_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_TC010403_PV",
      "tagdesc": "A空预器进口烟气温度1（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5511,
      "taglogicid": "N3_DPU3011_HW_TC010407_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_TC010407_PV",
      "tagdesc": "A空预器出口热一次风温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5567,
      "taglogicid": "N3_DPU3011_HW_TC020401_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_TC020401_PV",
      "tagdesc": "A空预器进口空气温度2（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5568,
      "taglogicid": "N3_DPU3011_HW_TC020402_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_TC020402_PV",
      "tagdesc": "A空预器出口空气温度2（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5569,
      "taglogicid": "N3_DPU3011_HW_TC020403_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_TC020403_PV",
      "tagdesc": "A空预器进口烟气温度2（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5573,
      "taglogicid": "N3_DPU3011_HW_TC020407_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_TC020407_PV",
      "tagdesc": "A空预器出口热一次风温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5615,
      "taglogicid": "N3_DPU3011_HW_RT030201_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT030201_PV",
      "tagdesc": "A一次风机电机前轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5616,
      "taglogicid": "N3_DPU3011_HW_RT030202_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT030202_PV",
      "tagdesc": "A一次风机电机定子线圈U相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5617,
      "taglogicid": "N3_DPU3011_HW_RT030203_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT030203_PV",
      "tagdesc": "A一次风机电机定子线圈V相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5618,
      "taglogicid": "N3_DPU3011_HW_RT030204_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT030204_PV",
      "tagdesc": "A一次风机电机定子线圈W相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5619,
      "taglogicid": "N3_DPU3011_HW_RT030205_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT030205_PV",
      "tagdesc": "A一次风机电机后轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5623,
      "taglogicid": "N3_DPU3011_HW_TC030301_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_TC030301_PV",
      "tagdesc": "A空预器出口空气温度3（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5627,
      "taglogicid": "N3_DPU3011_HW_TC030305_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_TC030305_PV",
      "tagdesc": "A空预器出口空气温度5（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5671,
      "taglogicid": "N3_DPU3011_HW_RT040201_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT040201_PV",
      "tagdesc": "A一次风机电机前轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5672,
      "taglogicid": "N3_DPU3011_HW_RT040202_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT040202_PV",
      "tagdesc": "A一次风机电机定子线圈U相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5673,
      "taglogicid": "N3_DPU3011_HW_RT040203_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT040203_PV",
      "tagdesc": "A一次风机电机定子线圈V相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5674,
      "taglogicid": "N3_DPU3011_HW_RT040204_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT040204_PV",
      "tagdesc": "A一次风机电机定子线圈W相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5675,
      "taglogicid": "N3_DPU3011_HW_RT040205_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT040205_PV",
      "tagdesc": "A一次风机电机后轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5676,
      "taglogicid": "N3_DPU3011_HW_RT040206_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT040206_PV",
      "tagdesc": "A烟气再循环风机轴伸端温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5681,
      "taglogicid": "N3_DPU3011_HW_TC040303_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_TC040303_PV",
      "tagdesc": "A空预器出口空气温度7（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5683,
      "taglogicid": "N3_DPU3011_HW_TC040305_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_TC040305_PV",
      "tagdesc": "A空预器出口空气温度9（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5711,
      "taglogicid": "N3_DPU3011_HW_RT050201_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT050201_PV",
      "tagdesc": "A烟气再循环风机非轴伸端温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5712,
      "taglogicid": "N3_DPU3011_HW_RT050202_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT050202_PV",
      "tagdesc": "A烟气再循环风机电机U相绕组温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5713,
      "taglogicid": "N3_DPU3011_HW_RT050203_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT050203_PV",
      "tagdesc": "A烟气再循环风机电机V相绕组温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5714,
      "taglogicid": "N3_DPU3011_HW_RT050204_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT050204_PV",
      "tagdesc": "A烟气再循环风机电机W相绕组温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5715,
      "taglogicid": "N3_DPU3011_HW_RT050205_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT050205_PV",
      "tagdesc": "A空气预热器进口一次风温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5717,
      "taglogicid": "N3_DPU3011_HW_RT050207_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT050207_PV",
      "tagdesc": "A烟气再循环风机电机轴伸端温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5721,
      "taglogicid": "N3_DPU3011_HW_TC050303_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_TC050303_PV",
      "tagdesc": "A空预器出口空气温度8（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5751,
      "taglogicid": "N3_DPU3011_HW_RT060201_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT060201_PV",
      "tagdesc": "A烟气再循环风机非轴伸端温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5752,
      "taglogicid": "N3_DPU3011_HW_RT060202_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT060202_PV",
      "tagdesc": "A烟气再循环风机电机U相绕组温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5753,
      "taglogicid": "N3_DPU3011_HW_RT060203_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT060203_PV",
      "tagdesc": "A烟气再循环风机电机V相绕组温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5754,
      "taglogicid": "N3_DPU3011_HW_RT060204_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT060204_PV",
      "tagdesc": "A烟气再循环风机电机W相绕组温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5757,
      "taglogicid": "N3_DPU3011_HW_RT060207_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT060207_PV",
      "tagdesc": "A烟气再循环风机轴伸端温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5758,
      "taglogicid": "N3_DPU3011_HW_RT060208_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT060208_PV",
      "tagdesc": "A烟气再循环风机电机非轴伸端温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5759,
      "taglogicid": "N3_DPU3011_HW_TC060301_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_TC060301_PV",
      "tagdesc": "A空预器出口空气温度4（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5762,
      "taglogicid": "N3_DPU3011_HW_TC060304_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_TC060304_PV",
      "tagdesc": "A空预器出口空气温度6（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5765,
      "taglogicid": "N3_DPU3011_HW_TC060307_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_TC060307_PV",
      "tagdesc": "A空预器出口热一次风温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5807,
      "taglogicid": "N3_DPU3011_HW_RT070201_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT070201_PV",
      "tagdesc": "A一次风机轴承温度10",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5808,
      "taglogicid": "N3_DPU3011_HW_RT070202_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT070202_PV",
      "tagdesc": "A一次风机轴承温度12",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5809,
      "taglogicid": "N3_DPU3011_HW_RT070203_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT070203_PV",
      "tagdesc": "A一次风机出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5811,
      "taglogicid": "N3_DPU3011_HW_RT070205_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT070205_PV",
      "tagdesc": "A一次风机润滑油过滤器出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5871,
      "taglogicid": "N3_DPU3011_HW_RT080201_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT080201_PV",
      "tagdesc": "A一次风机轴承温度11",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5873,
      "taglogicid": "N3_DPU3011_HW_RT080203_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT080203_PV",
      "tagdesc": "A一次风机润滑油供油温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5874,
      "taglogicid": "N3_DPU3011_HW_RT080204_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT080204_PV",
      "tagdesc": "A空预器导向轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5876,
      "taglogicid": "N3_DPU3011_HW_RT080206_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT080206_PV",
      "tagdesc": "A一次风机轴承温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5927,
      "taglogicid": "N3_DPU3011_HW_RT090101_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT090101_PV",
      "tagdesc": "A空气预热器进口一次风温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5929,
      "taglogicid": "N3_DPU3011_HW_RT090103_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT090103_PV",
      "tagdesc": "A一次风机轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5930,
      "taglogicid": "N3_DPU3011_HW_RT090104_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT090104_PV",
      "tagdesc": "A一次风机轴承温度5",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5931,
      "taglogicid": "N3_DPU3011_HW_RT090105_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT090105_PV",
      "tagdesc": "A一次风机轴承温度7",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5932,
      "taglogicid": "N3_DPU3011_HW_RT090106_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT090106_PV",
      "tagdesc": "A一次风机轴承温度9",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5934,
      "taglogicid": "N3_DPU3011_HW_RT090108_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT090108_PV",
      "tagdesc": "DPU3011机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5935,
      "taglogicid": "N3_DPU3011_HW_RT090201_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT090201_PV",
      "tagdesc": "A空预器支向轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5936,
      "taglogicid": "N3_DPU3011_HW_RT090202_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT090202_PV",
      "tagdesc": "A烟气余热利用出口烟气温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5991,
      "taglogicid": "N3_DPU3011_HW_RT100101_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT100101_PV",
      "tagdesc": "A空气预热器进口一次风温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5993,
      "taglogicid": "N3_DPU3011_HW_RT100103_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT100103_PV",
      "tagdesc": "A一次风机轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5994,
      "taglogicid": "N3_DPU3011_HW_RT100104_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT100104_PV",
      "tagdesc": "A一次风机轴承温度4",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5995,
      "taglogicid": "N3_DPU3011_HW_RT100105_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT100105_PV",
      "tagdesc": "A一次风机轴承温度6",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 5996,
      "taglogicid": "N3_DPU3011_HW_RT100106_PV",
      "tagid": "BHG_UNIT3_DPU3011_HW_RT100106_PV",
      "tagdesc": "A一次风机轴承温度8",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6130,
      "taglogicid": "N3_DPU3011_SH0154_BALM3_PV",
      "tagid": "BHG_UNIT3_DPU3011_SH0154_BALM3_PV",
      "tagdesc": "A一次风机电机线圈温度满足启动",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6131,
      "taglogicid": "N3_DPU3011_SH0154_BALM4_PV",
      "tagid": "BHG_UNIT3_DPU3011_SH0154_BALM4_PV",
      "tagdesc": "A一次风机轴承温度满足启动",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6132,
      "taglogicid": "N3_DPU3011_SH0154_BALM5_PV",
      "tagid": "BHG_UNIT3_DPU3011_SH0154_BALM5_PV",
      "tagdesc": "A一次风机电机轴承温度满足启动",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6147,
      "taglogicid": "N3_DPU3011_SH0157_BALM4_PV",
      "tagid": "BHG_UNIT3_DPU3011_SH0157_BALM4_PV",
      "tagdesc": "A一次风机电机轴承温度高跳闸",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6150,
      "taglogicid": "N3_DPU3011_SH0157_BALM8_PV",
      "tagid": "BHG_UNIT3_DPU3011_SH0157_BALM8_PV",
      "tagdesc": "A一次风机电机定子线圈温度高跳闸",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6156,
      "taglogicid": "N3_DPU3011_SH0175_BALM4_PV",
      "tagid": "BHG_UNIT3_DPU3011_SH0175_BALM4_PV",
      "tagdesc": "A烟气再循环风机电机绕组温度OK",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6157,
      "taglogicid": "N3_DPU3011_SH0175_BALM5_PV",
      "tagid": "BHG_UNIT3_DPU3011_SH0175_BALM5_PV",
      "tagdesc": "A烟气再循环风机电机温度满足启动",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6158,
      "taglogicid": "N3_DPU3011_SH0175_BALM6_PV",
      "tagid": "BHG_UNIT3_DPU3011_SH0175_BALM6_PV",
      "tagdesc": "A烟气再循环风机温度满足启动",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6164,
      "taglogicid": "N3_DPU3011_SH0177_BALM4_PV",
      "tagid": "BHG_UNIT3_DPU3011_SH0177_BALM4_PV",
      "tagdesc": "A烟气再循环风机轴承温度高跳闸",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6216,
      "taglogicid": "N3_DPU3012_HW_RT010301_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT010301_PV",
      "tagdesc": "B空气预热器进口一次风温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6218,
      "taglogicid": "N3_DPU3012_HW_RT010303_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT010303_PV",
      "tagdesc": "B一次风机轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6220,
      "taglogicid": "N3_DPU3012_HW_RT010305_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT010305_PV",
      "tagdesc": "B一次风机轴承温度5",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6221,
      "taglogicid": "N3_DPU3012_HW_RT010306_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT010306_PV",
      "tagdesc": "B一次风机轴承温度7",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6223,
      "taglogicid": "N3_DPU3012_HW_RT010308_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT010308_PV",
      "tagdesc": "DPU3012机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6224,
      "taglogicid": "N3_DPU3012_HW_TC010401_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_TC010401_PV",
      "tagdesc": "B空预器进口空气温度1（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6225,
      "taglogicid": "N3_DPU3012_HW_TC010402_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_TC010402_PV",
      "tagdesc": "B空预器出口空气温度1（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6226,
      "taglogicid": "N3_DPU3012_HW_TC010403_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_TC010403_PV",
      "tagdesc": "B空预器进口烟气温度1（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6230,
      "taglogicid": "N3_DPU3012_HW_TC010407_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_TC010407_PV",
      "tagdesc": "B空预器出口热一次风温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6256,
      "taglogicid": "N3_DPU3012_HW_RT020201_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT020201_PV",
      "tagdesc": "B空气预热器进口一次风温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6258,
      "taglogicid": "N3_DPU3012_HW_RT020203_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT020203_PV",
      "tagdesc": "B一次风机轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6260,
      "taglogicid": "N3_DPU3012_HW_RT020205_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT020205_PV",
      "tagdesc": "B一次风机轴承温度4",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6261,
      "taglogicid": "N3_DPU3012_HW_RT020206_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT020206_PV",
      "tagdesc": "B一次风机轴承温度6",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6264,
      "taglogicid": "N3_DPU3012_HW_TC020301_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_TC020301_PV",
      "tagdesc": "B空预器进口空气温度2（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6265,
      "taglogicid": "N3_DPU3012_HW_TC020302_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_TC020302_PV",
      "tagdesc": "B空预器出口空气温度2（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6266,
      "taglogicid": "N3_DPU3012_HW_TC020303_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_TC020303_PV",
      "tagdesc": "B空预器进口烟气温度2（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6270,
      "taglogicid": "N3_DPU3012_HW_TC020307_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_TC020307_PV",
      "tagdesc": "B空预器出口热一次风温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6312,
      "taglogicid": "N3_DPU3012_HW_RT030201_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT030201_PV",
      "tagdesc": "B空气预热器进口一次风温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6314,
      "taglogicid": "N3_DPU3012_HW_RT030203_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT030203_PV",
      "tagdesc": "B一次风机轴承温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6315,
      "taglogicid": "N3_DPU3012_HW_RT030204_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT030204_PV",
      "tagdesc": "B一次风机轴承温度8",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6316,
      "taglogicid": "N3_DPU3012_HW_RT030205_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT030205_PV",
      "tagdesc": "B一次风机轴承温度10",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6317,
      "taglogicid": "N3_DPU3012_HW_RT030206_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT030206_PV",
      "tagdesc": "B一次风机轴承温度12",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6320,
      "taglogicid": "N3_DPU3012_HW_TC030301_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_TC030301_PV",
      "tagdesc": "B空预器出口空气温度3（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6324,
      "taglogicid": "N3_DPU3012_HW_TC030305_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_TC030305_PV",
      "tagdesc": "B空预器出口空气温度4（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6326,
      "taglogicid": "N3_DPU3012_HW_TC030307_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_TC030307_PV",
      "tagdesc": "B空预器出口热一次风温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6368,
      "taglogicid": "N3_DPU3012_HW_RT040201_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT040201_PV",
      "tagdesc": "B一次风机电机前轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6369,
      "taglogicid": "N3_DPU3012_HW_RT040202_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT040202_PV",
      "tagdesc": "B一次风机电机定子线圈U相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6370,
      "taglogicid": "N3_DPU3012_HW_RT040203_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT040203_PV",
      "tagdesc": "B一次风机电机定子线圈V相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6371,
      "taglogicid": "N3_DPU3012_HW_RT040204_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT040204_PV",
      "tagdesc": "B一次风机电机定子线圈W相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6372,
      "taglogicid": "N3_DPU3012_HW_RT040205_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT040205_PV",
      "tagdesc": "B一次风机电机后轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6376,
      "taglogicid": "N3_DPU3012_HW_TC040301_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_TC040301_PV",
      "tagdesc": "B空预器出口空气温度5（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6377,
      "taglogicid": "N3_DPU3012_HW_TC040302_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_TC040302_PV",
      "tagdesc": "B空预器出口空气温度7（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6424,
      "taglogicid": "N3_DPU3012_HW_RT050201_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT050201_PV",
      "tagdesc": "B一次风机电机前轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6425,
      "taglogicid": "N3_DPU3012_HW_RT050202_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT050202_PV",
      "tagdesc": "B一次风机电机定子线圈U相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6426,
      "taglogicid": "N3_DPU3012_HW_RT050203_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT050203_PV",
      "tagdesc": "B一次风机电机定子线圈V相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6427,
      "taglogicid": "N3_DPU3012_HW_RT050204_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT050204_PV",
      "tagdesc": "B一次风机电机定子线圈W相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6428,
      "taglogicid": "N3_DPU3012_HW_RT050205_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT050205_PV",
      "tagdesc": "B一次风机电机后轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6432,
      "taglogicid": "N3_DPU3012_HW_TC050301_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_TC050301_PV",
      "tagdesc": "B空预器出口空气温度6（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6433,
      "taglogicid": "N3_DPU3012_HW_TC050302_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_TC050302_PV",
      "tagdesc": "B空预器出口空气温度8（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6437,
      "taglogicid": "N3_DPU3012_HW_TC050306_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_TC050306_PV",
      "tagdesc": "B空预器出口空气温度9（火灾报警）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6480,
      "taglogicid": "N3_DPU3012_HW_RT060201_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT060201_PV",
      "tagdesc": "B一次风机轴承温度9",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6481,
      "taglogicid": "N3_DPU3012_HW_RT060202_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT060202_PV",
      "tagdesc": "B一次风机轴承温度11",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6482,
      "taglogicid": "N3_DPU3012_HW_RT060203_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT060203_PV",
      "tagdesc": "B一次风机出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6484,
      "taglogicid": "N3_DPU3012_HW_RT060205_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT060205_PV",
      "tagdesc": "B一次风机润滑油过滤器出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6485,
      "taglogicid": "N3_DPU3012_HW_RT060206_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT060206_PV",
      "tagdesc": "B一次风机润滑油供油温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6488,
      "taglogicid": "N3_DPU3012_HW_TC060301_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_TC060301_PV",
      "tagdesc": "B烟气余热利用出口烟气温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6536,
      "taglogicid": "N3_DPU3012_HW_RT070201_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT070201_PV",
      "tagdesc": "B烟气再循环风机轴伸端温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6537,
      "taglogicid": "N3_DPU3012_HW_RT070202_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT070202_PV",
      "tagdesc": "B烟气再循环风机非轴伸端温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6538,
      "taglogicid": "N3_DPU3012_HW_RT070203_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT070203_PV",
      "tagdesc": "B烟气再循环风机电机U相绕组温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6539,
      "taglogicid": "N3_DPU3012_HW_RT070204_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT070204_PV",
      "tagdesc": "B烟气再循环风机电机V相绕组温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6540,
      "taglogicid": "N3_DPU3012_HW_RT070205_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT070205_PV",
      "tagdesc": "B烟气再循环风机电机W相绕组温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6541,
      "taglogicid": "N3_DPU3012_HW_RT070206_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT070206_PV",
      "tagdesc": "B烟气再循环风机电机轴伸端温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6616,
      "taglogicid": "N3_DPU3012_HW_RT080201_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT080201_PV",
      "tagdesc": "B烟气再循环风机轴伸端温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6617,
      "taglogicid": "N3_DPU3012_HW_RT080202_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT080202_PV",
      "tagdesc": "B烟气再循环风机非轴伸端温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6618,
      "taglogicid": "N3_DPU3012_HW_RT080203_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT080203_PV",
      "tagdesc": "B烟气再循环风机电机U相绕组温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6619,
      "taglogicid": "N3_DPU3012_HW_RT080204_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT080204_PV",
      "tagdesc": "B烟气再循环风机电机V相绕组温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6620,
      "taglogicid": "N3_DPU3012_HW_RT080205_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT080205_PV",
      "tagdesc": "B烟气再循环风机电机W相绕组温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6621,
      "taglogicid": "N3_DPU3012_HW_RT080206_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT080206_PV",
      "tagdesc": "B烟气再循环风机电机非轴伸端温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6665,
      "taglogicid": "N3_DPU3012_HW_RT090202_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT090202_PV",
      "tagdesc": "B空预器导向轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6666,
      "taglogicid": "N3_DPU3012_HW_RT090203_PV",
      "tagid": "BHG_UNIT3_DPU3012_HW_RT090203_PV",
      "tagdesc": "B空预器支向轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6843,
      "taglogicid": "N3_DPU3012_SH0154_BALM3_PV",
      "tagid": "BHG_UNIT3_DPU3012_SH0154_BALM3_PV",
      "tagdesc": "B一次风机电机线圈温度满足启动",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6844,
      "taglogicid": "N3_DPU3012_SH0154_BALM4_PV",
      "tagid": "BHG_UNIT3_DPU3012_SH0154_BALM4_PV",
      "tagdesc": "B一次风机轴承温度满足启动",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6845,
      "taglogicid": "N3_DPU3012_SH0154_BALM5_PV",
      "tagid": "BHG_UNIT3_DPU3012_SH0154_BALM5_PV",
      "tagdesc": "B一次风机电机轴承温度满足启动",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6860,
      "taglogicid": "N3_DPU3012_SH0157_BALM4_PV",
      "tagid": "BHG_UNIT3_DPU3012_SH0157_BALM4_PV",
      "tagdesc": "B一次风机电机轴承温度高跳闸",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6863,
      "taglogicid": "N3_DPU3012_SH0157_BALM8_PV",
      "tagid": "BHG_UNIT3_DPU3012_SH0157_BALM8_PV",
      "tagdesc": "B一次风机电机定子线圈温度高跳闸",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6868,
      "taglogicid": "N3_DPU3012_SH0175_BALM4_PV",
      "tagid": "BHG_UNIT3_DPU3012_SH0175_BALM4_PV",
      "tagdesc": "B烟气再循环风机电机绕组温度OK",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6869,
      "taglogicid": "N3_DPU3012_SH0175_BALM5_PV",
      "tagid": "BHG_UNIT3_DPU3012_SH0175_BALM5_PV",
      "tagdesc": "B烟气再循环风机电机温度满足启动",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6870,
      "taglogicid": "N3_DPU3012_SH0175_BALM6_PV",
      "tagid": "BHG_UNIT3_DPU3012_SH0175_BALM6_PV",
      "tagdesc": "B烟气再循环风机温度满足启动",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6876,
      "taglogicid": "N3_DPU3012_SH0177_BALM4_PV",
      "tagid": "BHG_UNIT3_DPU3012_SH0177_BALM4_PV",
      "tagdesc": "B烟气再循环风机轴承温度高跳闸",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 6913,
      "taglogicid": "N3_DPU3013_HW_RT010308_PV",
      "tagid": "BHG_UNIT3_DPU3013_HW_RT010308_PV",
      "tagdesc": "DPU3013机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7087,
      "taglogicid": "N3_DPU3014_HW_TC010101_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC010101_PV",
      "tagdesc": "省煤器出口给水温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7088,
      "taglogicid": "N3_DPU3014_HW_TC010102_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC010102_PV",
      "tagdesc": "水冷壁左墙出口管路蒸汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7089,
      "taglogicid": "N3_DPU3014_HW_TC010103_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC010103_PV",
      "tagdesc": "水冷壁前墙出口管路蒸汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7090,
      "taglogicid": "N3_DPU3014_HW_TC010104_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC010104_PV",
      "tagdesc": "水冷壁右墙出口管路蒸汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7091,
      "taglogicid": "N3_DPU3014_HW_TC010105_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC010105_PV",
      "tagdesc": "水冷壁后墙出口管路蒸汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7092,
      "taglogicid": "N3_DPU3014_HW_TC010106_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC010106_PV",
      "tagdesc": "水冷壁隔墙出口管路蒸汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7095,
      "taglogicid": "N3_DPU3014_HW_TC010201_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC010201_PV",
      "tagdesc": "省煤器入口给水温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7096,
      "taglogicid": "N3_DPU3014_HW_TC010202_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC010202_PV",
      "tagdesc": "省煤器水旁路温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7099,
      "taglogicid": "N3_DPU3014_HW_TC010205_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC010205_PV",
      "tagdesc": "贮水箱至大气扩容器温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7151,
      "taglogicid": "N3_DPU3014_HW_TC020101_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC020101_PV",
      "tagdesc": "省煤器出口给水温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7152,
      "taglogicid": "N3_DPU3014_HW_TC020102_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC020102_PV",
      "tagdesc": "水冷壁左墙出口管路蒸汽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7153,
      "taglogicid": "N3_DPU3014_HW_TC020103_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC020103_PV",
      "tagdesc": "水冷壁前墙出口管路蒸汽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7154,
      "taglogicid": "N3_DPU3014_HW_TC020104_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC020104_PV",
      "tagdesc": "水冷壁右墙出口管路蒸汽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7155,
      "taglogicid": "N3_DPU3014_HW_TC020105_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC020105_PV",
      "tagdesc": "水冷壁后墙出口管路蒸汽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7156,
      "taglogicid": "N3_DPU3014_HW_TC020106_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC020106_PV",
      "tagdesc": "水冷壁隔墙出口管路蒸汽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7159,
      "taglogicid": "N3_DPU3014_HW_TC020201_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC020201_PV",
      "tagdesc": "省煤器入口给水温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7160,
      "taglogicid": "N3_DPU3014_HW_TC020202_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC020202_PV",
      "tagdesc": "省煤器水旁路温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7223,
      "taglogicid": "N3_DPU3014_HW_TC030201_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC030201_PV",
      "tagdesc": "省煤器出口给水温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7224,
      "taglogicid": "N3_DPU3014_HW_TC030202_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC030202_PV",
      "tagdesc": "水冷壁左墙出口管路蒸汽温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7225,
      "taglogicid": "N3_DPU3014_HW_TC030203_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC030203_PV",
      "tagdesc": "水冷壁前墙出口管路蒸汽温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7226,
      "taglogicid": "N3_DPU3014_HW_TC030204_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC030204_PV",
      "tagdesc": "水冷壁右墙出口管路蒸汽温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7227,
      "taglogicid": "N3_DPU3014_HW_TC030205_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC030205_PV",
      "tagdesc": "水冷壁后墙出口管路蒸汽温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7228,
      "taglogicid": "N3_DPU3014_HW_TC030206_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC030206_PV",
      "tagdesc": "水冷壁隔墙出口管路蒸汽温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7231,
      "taglogicid": "N3_DPU3014_HW_TC030301_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC030301_PV",
      "tagdesc": "省煤器入口给水温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7232,
      "taglogicid": "N3_DPU3014_HW_TC030302_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC030302_PV",
      "tagdesc": "省煤器水旁路温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7233,
      "taglogicid": "N3_DPU3014_HW_TC030303_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC030303_PV",
      "tagdesc": "省煤器出口母管温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7235,
      "taglogicid": "N3_DPU3014_HW_TC030305_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC030305_PV",
      "tagdesc": "锅炉启动循环泵泵壳温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7281,
      "taglogicid": "N3_DPU3014_HW_DQ030611_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_DQ030611_PV",
      "tagdesc": "水冷壁出口蒸汽温度高越限1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7293,
      "taglogicid": "N3_DPU3014_HW_TC040201_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC040201_PV",
      "tagdesc": "省煤器出口给水温度4",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7294,
      "taglogicid": "N3_DPU3014_HW_TC040202_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC040202_PV",
      "tagdesc": "水冷壁左墙出口管路蒸汽温度4",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7295,
      "taglogicid": "N3_DPU3014_HW_TC040203_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC040203_PV",
      "tagdesc": "水冷壁前墙出口管路蒸汽温度4",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7296,
      "taglogicid": "N3_DPU3014_HW_TC040204_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC040204_PV",
      "tagdesc": "水冷壁右墙出口管路蒸汽温度4",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7297,
      "taglogicid": "N3_DPU3014_HW_TC040205_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC040205_PV",
      "tagdesc": "水冷壁后墙出口管路蒸汽温度4",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7298,
      "taglogicid": "N3_DPU3014_HW_TC040206_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC040206_PV",
      "tagdesc": "水冷壁隔墙出口管路蒸汽温度4",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7333,
      "taglogicid": "N3_DPU3014_HW_DQ040609_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_DQ040609_PV",
      "tagdesc": "水冷壁出口蒸汽温度高越限2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7349,
      "taglogicid": "N3_DPU3014_HW_TC050201_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC050201_PV",
      "tagdesc": "省煤器出口给水温度5",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7350,
      "taglogicid": "N3_DPU3014_HW_TC050202_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC050202_PV",
      "tagdesc": "水冷壁左墙出口管路蒸汽温度5",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7351,
      "taglogicid": "N3_DPU3014_HW_TC050203_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC050203_PV",
      "tagdesc": "水冷壁前墙出口管路蒸汽温度5",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7352,
      "taglogicid": "N3_DPU3014_HW_TC050204_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC050204_PV",
      "tagdesc": "水冷壁右墙出口管路蒸汽温度5",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7353,
      "taglogicid": "N3_DPU3014_HW_TC050205_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC050205_PV",
      "tagdesc": "水冷壁后墙出口管路蒸汽温度5",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7354,
      "taglogicid": "N3_DPU3014_HW_TC050206_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC050206_PV",
      "tagdesc": "水冷壁隔墙出口管路蒸汽温度5",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7388,
      "taglogicid": "N3_DPU3014_HW_DI050508_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_DI050508_PV",
      "tagdesc": "锅炉启动循环泵电机腔温度高",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7405,
      "taglogicid": "N3_DPU3014_HW_DQ050609_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_DQ050609_PV",
      "tagdesc": "水冷壁出口蒸汽温度高越限3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7413,
      "taglogicid": "N3_DPU3014_HW_TC060101_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC060101_PV",
      "tagdesc": "省煤器出口给水温度6",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7414,
      "taglogicid": "N3_DPU3014_HW_TC060102_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC060102_PV",
      "tagdesc": "水冷壁左墙出口管路蒸汽温度6",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7415,
      "taglogicid": "N3_DPU3014_HW_TC060103_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC060103_PV",
      "tagdesc": "水冷壁前墙出口管路蒸汽温度6",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7416,
      "taglogicid": "N3_DPU3014_HW_TC060104_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC060104_PV",
      "tagdesc": "水冷壁右墙出口管路蒸汽温度6",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7417,
      "taglogicid": "N3_DPU3014_HW_TC060105_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC060105_PV",
      "tagdesc": "水冷壁后墙出口管路蒸汽温度6",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7418,
      "taglogicid": "N3_DPU3014_HW_TC060106_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_TC060106_PV",
      "tagdesc": "水冷壁隔墙出口管路蒸汽温度6",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7459,
      "taglogicid": "N3_DPU3014_HW_RT060701_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_RT060701_PV",
      "tagdesc": "锅炉启动循环泵电机腔温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7466,
      "taglogicid": "N3_DPU3014_HW_RT060708_PV",
      "tagid": "BHG_UNIT3_DPU3014_HW_RT060708_PV",
      "tagdesc": "DPU3014机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7474,
      "taglogicid": "N3_DPU3014_SH0026_BALM001_PV",
      "tagid": "BHG_UNIT3_DPU3014_SH0026_BALM001_PV",
      "tagdesc": "水冷壁左墙出口蒸汽温度任一测点坏",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7475,
      "taglogicid": "N3_DPU3014_SH0026_AALM001_PV",
      "tagid": "BHG_UNIT3_DPU3014_SH0026_AALM001_PV",
      "tagdesc": "水冷壁左墙出口蒸汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7477,
      "taglogicid": "N3_DPU3014_SH0026_AALM011_PV",
      "tagid": "BHG_UNIT3_DPU3014_SH0026_AALM011_PV",
      "tagdesc": "水冷壁左墙出口蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7478,
      "taglogicid": "N3_DPU3014_SH0026_BALM002_PV",
      "tagid": "BHG_UNIT3_DPU3014_SH0026_BALM002_PV",
      "tagdesc": "水冷壁前墙出口蒸汽温度任一测点坏",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7479,
      "taglogicid": "N3_DPU3014_SH0026_AALM002_PV",
      "tagid": "BHG_UNIT3_DPU3014_SH0026_AALM002_PV",
      "tagdesc": "水冷壁前墙出口蒸汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7481,
      "taglogicid": "N3_DPU3014_SH0026_AALM021_PV",
      "tagid": "BHG_UNIT3_DPU3014_SH0026_AALM021_PV",
      "tagdesc": "水冷壁前墙出口蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7482,
      "taglogicid": "N3_DPU3014_SH0026_BALM003_PV",
      "tagid": "BHG_UNIT3_DPU3014_SH0026_BALM003_PV",
      "tagdesc": "水冷壁右墙出口蒸汽温度任一测点坏",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7483,
      "taglogicid": "N3_DPU3014_SH0026_AALM003_PV",
      "tagid": "BHG_UNIT3_DPU3014_SH0026_AALM003_PV",
      "tagdesc": "水冷壁右墙出口蒸汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7485,
      "taglogicid": "N3_DPU3014_SH0026_AALM031_PV",
      "tagid": "BHG_UNIT3_DPU3014_SH0026_AALM031_PV",
      "tagdesc": "水冷壁右墙出口蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7486,
      "taglogicid": "N3_DPU3014_SH0026_BALM004_PV",
      "tagid": "BHG_UNIT3_DPU3014_SH0026_BALM004_PV",
      "tagdesc": "水冷壁后墙出口蒸汽温度任一测点坏",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7487,
      "taglogicid": "N3_DPU3014_SH0026_AALM004_PV",
      "tagid": "BHG_UNIT3_DPU3014_SH0026_AALM004_PV",
      "tagdesc": "水冷壁后墙出口蒸汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7489,
      "taglogicid": "N3_DPU3014_SH0026_AALM041_PV",
      "tagid": "BHG_UNIT3_DPU3014_SH0026_AALM041_PV",
      "tagdesc": "水冷壁后墙出口蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7499,
      "taglogicid": "N3_DPU3014_SH0033_BALM01_PV",
      "tagid": "BHG_UNIT3_DPU3014_SH0033_BALM01_PV",
      "tagdesc": "省煤器入口给水温度任一测点坏",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7500,
      "taglogicid": "N3_DPU3014_SH0033_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3014_SH0033_AALM01_PV",
      "tagdesc": "省煤器入口给水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7501,
      "taglogicid": "N3_DPU3014_SH0034_BALM001_PV",
      "tagid": "BHG_UNIT3_DPU3014_SH0034_BALM001_PV",
      "tagdesc": "水冷壁隔墙出口蒸汽温度任一测点坏",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7502,
      "taglogicid": "N3_DPU3014_SH0034_AALM001_PV",
      "tagid": "BHG_UNIT3_DPU3014_SH0034_AALM001_PV",
      "tagdesc": "水冷壁隔墙出口蒸汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7504,
      "taglogicid": "N3_DPU3014_SH0034_AALM011_PV",
      "tagid": "BHG_UNIT3_DPU3014_SH0034_AALM011_PV",
      "tagdesc": "水冷壁隔墙出口蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7505,
      "taglogicid": "N3_DPU3014_SH0035_BALM001_PV",
      "tagid": "BHG_UNIT3_DPU3014_SH0035_BALM001_PV",
      "tagdesc": "省煤器出口给水温度任一测点坏",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7506,
      "taglogicid": "N3_DPU3014_SH0035_AALM001_PV",
      "tagid": "BHG_UNIT3_DPU3014_SH0035_AALM001_PV",
      "tagdesc": "省煤器出口给水温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7507,
      "taglogicid": "N3_DPU3014_SH0035_BALM011_PV",
      "tagid": "BHG_UNIT3_DPU3014_SH0035_BALM011_PV",
      "tagdesc": "省煤器出口给水温度2任一测点坏",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7508,
      "taglogicid": "N3_DPU3014_SH0035_AALM011_PV",
      "tagid": "BHG_UNIT3_DPU3014_SH0035_AALM011_PV",
      "tagdesc": "省煤器出口给水温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7515,
      "taglogicid": "N3_DPU3014_SH0142_BALM6_PV",
      "tagid": "BHG_UNIT3_DPU3014_SH0142_BALM6_PV",
      "tagdesc": "锅炉启动循环泵电机腔温度不高",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7522,
      "taglogicid": "N3_DPU3014_SH0144_BALM5_PV",
      "tagid": "BHG_UNIT3_DPU3014_SH0144_BALM5_PV",
      "tagdesc": "泵电压腔温度高",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7575,
      "taglogicid": "N3_DPU3015_HW_TC010201_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC010201_PV",
      "tagdesc": "A侧过热器一级减温器1进口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7576,
      "taglogicid": "N3_DPU3015_HW_TC010202_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC010202_PV",
      "tagdesc": "B侧过热器一级减温器1进口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7577,
      "taglogicid": "N3_DPU3015_HW_TC010203_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC010203_PV",
      "tagdesc": "A侧过热器一级减温器2进口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7578,
      "taglogicid": "N3_DPU3015_HW_TC010204_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC010204_PV",
      "tagdesc": "B侧过热器一级减温器2进口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7579,
      "taglogicid": "N3_DPU3015_HW_TC010205_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC010205_PV",
      "tagdesc": "A侧过热器一级减温器2出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7580,
      "taglogicid": "N3_DPU3015_HW_TC010206_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC010206_PV",
      "tagdesc": "B侧过热器一级减温器2出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7583,
      "taglogicid": "N3_DPU3015_HW_TC010301_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC010301_PV",
      "tagdesc": "A侧高温过热器1出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7584,
      "taglogicid": "N3_DPU3015_HW_TC010302_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC010302_PV",
      "tagdesc": "B侧高温过热器1出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7585,
      "taglogicid": "N3_DPU3015_HW_TC010303_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC010303_PV",
      "tagdesc": "A侧高温过热器2出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7586,
      "taglogicid": "N3_DPU3015_HW_TC010304_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC010304_PV",
      "tagdesc": "B侧高温过热器2出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7587,
      "taglogicid": "N3_DPU3015_HW_TC010305_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC010305_PV",
      "tagdesc": "A侧过热器一级减温器1出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7588,
      "taglogicid": "N3_DPU3015_HW_TC010306_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC010306_PV",
      "tagdesc": "A侧过热器一级减温器2出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7647,
      "taglogicid": "N3_DPU3015_HW_TC020201_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC020201_PV",
      "tagdesc": "A侧过热器一级减温器1进口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7648,
      "taglogicid": "N3_DPU3015_HW_TC020202_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC020202_PV",
      "tagdesc": "B侧过热器一级减温器1进口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7649,
      "taglogicid": "N3_DPU3015_HW_TC020203_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC020203_PV",
      "tagdesc": "A侧过热器一级减温器2进口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7650,
      "taglogicid": "N3_DPU3015_HW_TC020204_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC020204_PV",
      "tagdesc": "B侧过热器一级减温器2进口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7651,
      "taglogicid": "N3_DPU3015_HW_TC020205_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC020205_PV",
      "tagdesc": "A侧过热器一级减温器1出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7652,
      "taglogicid": "N3_DPU3015_HW_TC020206_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC020206_PV",
      "tagdesc": "B侧过热器一级减温器1出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7717,
      "taglogicid": "N3_DPU3015_HW_TC030201_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC030201_PV",
      "tagdesc": "A侧过热器二级减温器1进口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7718,
      "taglogicid": "N3_DPU3015_HW_TC030202_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC030202_PV",
      "tagdesc": "B侧过热器二级减温器1进口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7719,
      "taglogicid": "N3_DPU3015_HW_TC030203_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC030203_PV",
      "tagdesc": "A侧过热器二级减温器2进口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7720,
      "taglogicid": "N3_DPU3015_HW_TC030204_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC030204_PV",
      "tagdesc": "B侧过热器二级减温器2进口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7721,
      "taglogicid": "N3_DPU3015_HW_TC030205_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC030205_PV",
      "tagdesc": "A侧过热器二级减温器2出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7722,
      "taglogicid": "N3_DPU3015_HW_TC030206_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC030206_PV",
      "tagdesc": "B侧过热器二级减温器2出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7789,
      "taglogicid": "N3_DPU3015_HW_TC040201_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC040201_PV",
      "tagdesc": "A侧过热器二级减温器1进口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7790,
      "taglogicid": "N3_DPU3015_HW_TC040202_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC040202_PV",
      "tagdesc": "B侧过热器二级减温器1进口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7791,
      "taglogicid": "N3_DPU3015_HW_TC040203_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC040203_PV",
      "tagdesc": "A侧过热器二级减温器2进口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7792,
      "taglogicid": "N3_DPU3015_HW_TC040204_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC040204_PV",
      "tagdesc": "B侧过热器二级减温器2进口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7793,
      "taglogicid": "N3_DPU3015_HW_TC040205_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC040205_PV",
      "tagdesc": "A侧过热器二级减温器1出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7794,
      "taglogicid": "N3_DPU3015_HW_TC040206_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC040206_PV",
      "tagdesc": "B侧过热器二级减温器1出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7797,
      "taglogicid": "N3_DPU3015_HW_TC040301_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC040301_PV",
      "tagdesc": "A侧高温过热器1出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7798,
      "taglogicid": "N3_DPU3015_HW_TC040302_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC040302_PV",
      "tagdesc": "B侧高温过热器1出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7799,
      "taglogicid": "N3_DPU3015_HW_TC040303_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC040303_PV",
      "tagdesc": "A侧高温过热器2出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7800,
      "taglogicid": "N3_DPU3015_HW_TC040304_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC040304_PV",
      "tagdesc": "B侧高温过热器2出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7801,
      "taglogicid": "N3_DPU3015_HW_TC040305_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC040305_PV",
      "tagdesc": "B侧过热器一级减温器1出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7802,
      "taglogicid": "N3_DPU3015_HW_TC040306_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC040306_PV",
      "tagdesc": "B侧过热器一级减温器2出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7853,
      "taglogicid": "N3_DPU3015_HW_TC050101_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC050101_PV",
      "tagdesc": "A侧过热器二级减温器1出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7854,
      "taglogicid": "N3_DPU3015_HW_TC050102_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC050102_PV",
      "tagdesc": "B侧过热器二级减温器1出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7855,
      "taglogicid": "N3_DPU3015_HW_TC050103_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC050103_PV",
      "tagdesc": "A侧过热器二级减温器2出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7856,
      "taglogicid": "N3_DPU3015_HW_TC050104_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC050104_PV",
      "tagdesc": "B侧过热器二级减温器2出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7907,
      "taglogicid": "N3_DPU3015_HW_TC060101_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC060101_PV",
      "tagdesc": "A侧高温过热器1出口温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7908,
      "taglogicid": "N3_DPU3015_HW_TC060102_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC060102_PV",
      "tagdesc": "B侧高温过热器1出口温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7909,
      "taglogicid": "N3_DPU3015_HW_TC060103_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC060103_PV",
      "tagdesc": "A侧高温过热器2出口温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7910,
      "taglogicid": "N3_DPU3015_HW_TC060104_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_TC060104_PV",
      "tagdesc": "B侧高温过热器2出口温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7954,
      "taglogicid": "N3_DPU3015_HW_RT060408_PV",
      "tagid": "BHG_UNIT3_DPU3015_HW_RT060408_PV",
      "tagdesc": "DPU3015机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7971,
      "taglogicid": "N3_DPU3015_SH0022_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0022_AALM01_PV",
      "tagdesc": "A侧过热器一级减温器1进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7972,
      "taglogicid": "N3_DPU3015_SH0022_BALM01_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0022_BALM01_PV",
      "tagdesc": "A侧过热器一级减温器1进口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7973,
      "taglogicid": "N3_DPU3015_SH0022_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0022_AALM02_PV",
      "tagdesc": "A侧过热器一级减温器2进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7974,
      "taglogicid": "N3_DPU3015_SH0022_BALM02_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0022_BALM02_PV",
      "tagdesc": "A侧过热器一级减温器2进口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7975,
      "taglogicid": "N3_DPU3015_SH0022_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0022_AALM03_PV",
      "tagdesc": "B侧过热器一级减温器1进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7976,
      "taglogicid": "N3_DPU3015_SH0022_BALM03_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0022_BALM03_PV",
      "tagdesc": "B侧过热器一级减温器1进口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7977,
      "taglogicid": "N3_DPU3015_SH0022_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0022_AALM04_PV",
      "tagdesc": "B侧过热器一级减温器2进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7978,
      "taglogicid": "N3_DPU3015_SH0022_BALM04_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0022_BALM04_PV",
      "tagdesc": "B侧过热器一级减温器2进口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7979,
      "taglogicid": "N3_DPU3015_SH0023_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0023_AALM01_PV",
      "tagdesc": "A侧过热器一级减温器1出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7980,
      "taglogicid": "N3_DPU3015_SH0023_BALM01_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0023_BALM01_PV",
      "tagdesc": "A侧过热器一级减温器1出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7981,
      "taglogicid": "N3_DPU3015_SH0023_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0023_AALM02_PV",
      "tagdesc": "A侧过热器一级减温器2出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7982,
      "taglogicid": "N3_DPU3015_SH0023_BALM02_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0023_BALM02_PV",
      "tagdesc": "A侧过热器一级减温器2出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7983,
      "taglogicid": "N3_DPU3015_SH0023_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0023_AALM03_PV",
      "tagdesc": "B侧过热器一级减温器1出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7984,
      "taglogicid": "N3_DPU3015_SH0023_BALM03_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0023_BALM03_PV",
      "tagdesc": "B侧过热器一级减温器1出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7985,
      "taglogicid": "N3_DPU3015_SH0023_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0023_AALM04_PV",
      "tagdesc": "B侧过热器一级减温器2出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7986,
      "taglogicid": "N3_DPU3015_SH0023_BALM04_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0023_BALM04_PV",
      "tagdesc": "B侧过热器一级减温器2出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7987,
      "taglogicid": "N3_DPU3015_SH0024_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0024_AALM01_PV",
      "tagdesc": "A侧过热器二级减温器2进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7988,
      "taglogicid": "N3_DPU3015_SH0024_BALM01_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0024_BALM01_PV",
      "tagdesc": "A侧过热器二级减温器2进口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7989,
      "taglogicid": "N3_DPU3015_SH0024_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0024_AALM02_PV",
      "tagdesc": "A侧过热器二级减温器1进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7990,
      "taglogicid": "N3_DPU3015_SH0024_BALM02_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0024_BALM02_PV",
      "tagdesc": "A侧过热器二级减温器1进口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7991,
      "taglogicid": "N3_DPU3015_SH0024_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0024_AALM03_PV",
      "tagdesc": "B侧过热器二级减温器1进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7992,
      "taglogicid": "N3_DPU3015_SH0024_BALM03_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0024_BALM03_PV",
      "tagdesc": "B侧过热器二级减温器1进口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7993,
      "taglogicid": "N3_DPU3015_SH0024_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0024_AALM04_PV",
      "tagdesc": "B侧过热器二级减温器2进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7994,
      "taglogicid": "N3_DPU3015_SH0024_BALM04_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0024_BALM04_PV",
      "tagdesc": "B侧过热器二级减温器2进口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7995,
      "taglogicid": "N3_DPU3015_SH0025_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0025_AALM01_PV",
      "tagdesc": "A侧过热器二级减温器2出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7996,
      "taglogicid": "N3_DPU3015_SH0025_BALM01_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0025_BALM01_PV",
      "tagdesc": "A侧过热器二级减温器2出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7997,
      "taglogicid": "N3_DPU3015_SH0025_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0025_AALM02_PV",
      "tagdesc": "A侧过热器二级减温器1出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7998,
      "taglogicid": "N3_DPU3015_SH0025_BALM02_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0025_BALM02_PV",
      "tagdesc": "A侧过热器二级减温器1出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 7999,
      "taglogicid": "N3_DPU3015_SH0025_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0025_AALM03_PV",
      "tagdesc": "B侧过热器二级减温器1出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8000,
      "taglogicid": "N3_DPU3015_SH0025_BALM03_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0025_BALM03_PV",
      "tagdesc": "B侧过热器二级减温器1出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8001,
      "taglogicid": "N3_DPU3015_SH0025_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0025_AALM04_PV",
      "tagdesc": "B侧过热器二级减温器2出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8002,
      "taglogicid": "N3_DPU3015_SH0025_BALM04_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0025_BALM04_PV",
      "tagdesc": "B侧过热器二级减温器2出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8003,
      "taglogicid": "N3_DPU3015_SH0026_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0026_AALM01_PV",
      "tagdesc": "A侧高温过热器1出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8004,
      "taglogicid": "N3_DPU3015_SH0026_BALM01_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0026_BALM01_PV",
      "tagdesc": "A侧高温过热器1出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8005,
      "taglogicid": "N3_DPU3015_SH0026_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0026_AALM02_PV",
      "tagdesc": "A侧高温过热器2出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8006,
      "taglogicid": "N3_DPU3015_SH0026_BALM02_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0026_BALM02_PV",
      "tagdesc": "A侧高温过热器2出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8007,
      "taglogicid": "N3_DPU3015_SH0026_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0026_AALM03_PV",
      "tagdesc": "B侧高温过热器2出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8008,
      "taglogicid": "N3_DPU3015_SH0026_BALM03_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0026_BALM03_PV",
      "tagdesc": "B侧高温过热器2出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8009,
      "taglogicid": "N3_DPU3015_SH0026_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0026_AALM04_PV",
      "tagdesc": "B侧高温过热器1出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8010,
      "taglogicid": "N3_DPU3015_SH0026_BALM04_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0026_BALM04_PV",
      "tagdesc": "B侧高温过热器1出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8011,
      "taglogicid": "N3_DPU3015_SH0026_AALM001_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0026_AALM001_PV",
      "tagdesc": "A侧高温过热器出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8012,
      "taglogicid": "N3_DPU3015_SH0026_AALM002_PV",
      "tagid": "BHG_UNIT3_DPU3015_SH0026_AALM002_PV",
      "tagdesc": "B侧高温过热器2出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8089,
      "taglogicid": "N3_DPU3016_HW_TC010201_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC010201_PV",
      "tagdesc": "A侧一次低温再热器进口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8090,
      "taglogicid": "N3_DPU3016_HW_TC010202_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC010202_PV",
      "tagdesc": "B侧一次低温再热器进口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8091,
      "taglogicid": "N3_DPU3016_HW_TC010203_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC010203_PV",
      "tagdesc": "A侧一次再热微喷减温器1进口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8092,
      "taglogicid": "N3_DPU3016_HW_TC010204_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC010204_PV",
      "tagdesc": "B侧一次再热微喷减温器1进口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8093,
      "taglogicid": "N3_DPU3016_HW_TC010205_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC010205_PV",
      "tagdesc": "A侧一次再热微喷减温器2进口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8094,
      "taglogicid": "N3_DPU3016_HW_TC010206_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC010206_PV",
      "tagdesc": "B侧一次再热微喷减温器2进口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8136,
      "taglogicid": "N3_DPU3016_HW_RT010508_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_RT010508_PV",
      "tagdesc": "DPU3016机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8161,
      "taglogicid": "N3_DPU3016_HW_TC020201_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC020201_PV",
      "tagdesc": "A侧一次低温再热器进口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8162,
      "taglogicid": "N3_DPU3016_HW_TC020202_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC020202_PV",
      "tagdesc": "B侧一次低温再热器进口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8163,
      "taglogicid": "N3_DPU3016_HW_TC020203_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC020203_PV",
      "tagdesc": "A侧一次再热微喷减温器1进口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8164,
      "taglogicid": "N3_DPU3016_HW_TC020204_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC020204_PV",
      "tagdesc": "B侧一次再热微喷减温器1进口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8165,
      "taglogicid": "N3_DPU3016_HW_TC020205_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC020205_PV",
      "tagdesc": "A侧一次再热微喷减温器2进口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8166,
      "taglogicid": "N3_DPU3016_HW_TC020206_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC020206_PV",
      "tagdesc": "B侧一次再热微喷减温器2进口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8225,
      "taglogicid": "N3_DPU3016_HW_TC030201_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC030201_PV",
      "tagdesc": "A侧一次再热微喷减温器1出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8226,
      "taglogicid": "N3_DPU3016_HW_TC030202_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC030202_PV",
      "tagdesc": "B侧一次再热微喷减温器1出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8227,
      "taglogicid": "N3_DPU3016_HW_TC030203_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC030203_PV",
      "tagdesc": "A侧一次再热微喷减温器2出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8228,
      "taglogicid": "N3_DPU3016_HW_TC030204_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC030204_PV",
      "tagdesc": "B侧一次再热微喷减温器2出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8281,
      "taglogicid": "N3_DPU3016_HW_TC040101_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC040101_PV",
      "tagdesc": "A侧一次再热微喷减温器1出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8282,
      "taglogicid": "N3_DPU3016_HW_TC040102_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC040102_PV",
      "tagdesc": "B侧一次再热微喷减温器1出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8283,
      "taglogicid": "N3_DPU3016_HW_TC040103_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC040103_PV",
      "tagdesc": "A侧一次再热微喷减温器2出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8284,
      "taglogicid": "N3_DPU3016_HW_TC040104_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC040104_PV",
      "tagdesc": "B侧一次再热微喷减温器2出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8437,
      "taglogicid": "N3_DPU3016_HW_TC070201_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC070201_PV",
      "tagdesc": "A侧二次低温再热器进口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8438,
      "taglogicid": "N3_DPU3016_HW_TC070202_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC070202_PV",
      "tagdesc": "B侧二次低温再热器进口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8439,
      "taglogicid": "N3_DPU3016_HW_TC070203_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC070203_PV",
      "tagdesc": "A侧二次再热微喷减温器1进口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8440,
      "taglogicid": "N3_DPU3016_HW_TC070204_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC070204_PV",
      "tagdesc": "B侧二次再热微喷减温器1进口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8441,
      "taglogicid": "N3_DPU3016_HW_TC070205_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC070205_PV",
      "tagdesc": "A侧二次再热微喷减温器2进口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8442,
      "taglogicid": "N3_DPU3016_HW_TC070206_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC070206_PV",
      "tagdesc": "B侧二次再热微喷减温器2进口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8484,
      "taglogicid": "N3_DPU3016_HW_RT070508_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_RT070508_PV",
      "tagdesc": "DPU3016扩展柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8509,
      "taglogicid": "N3_DPU3016_HW_TC080201_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC080201_PV",
      "tagdesc": "A侧二次低温再热器进口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8510,
      "taglogicid": "N3_DPU3016_HW_TC080202_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC080202_PV",
      "tagdesc": "B侧二次低温再热器进口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8511,
      "taglogicid": "N3_DPU3016_HW_TC080203_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC080203_PV",
      "tagdesc": "A侧二次再热微喷减温器1进口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8512,
      "taglogicid": "N3_DPU3016_HW_TC080204_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC080204_PV",
      "tagdesc": "B侧二次再热微喷减温器1进口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8513,
      "taglogicid": "N3_DPU3016_HW_TC080205_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC080205_PV",
      "tagdesc": "A侧二次再热微喷减温器2进口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8514,
      "taglogicid": "N3_DPU3016_HW_TC080206_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC080206_PV",
      "tagdesc": "B侧二次再热微喷减温器2进口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8573,
      "taglogicid": "N3_DPU3016_HW_TC090201_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC090201_PV",
      "tagdesc": "A侧二次再热微喷减温器1出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8574,
      "taglogicid": "N3_DPU3016_HW_TC090202_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC090202_PV",
      "tagdesc": "B侧二次再热微喷减温器1出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8575,
      "taglogicid": "N3_DPU3016_HW_TC090203_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC090203_PV",
      "tagdesc": "A侧二次再热微喷减温器2出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8576,
      "taglogicid": "N3_DPU3016_HW_TC090204_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC090204_PV",
      "tagdesc": "B侧二次再热微喷减温器2出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8613,
      "taglogicid": "N3_DPU3016_HW_TC100101_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC100101_PV",
      "tagdesc": "A侧一次高温再热器1出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8614,
      "taglogicid": "N3_DPU3016_HW_TC100102_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC100102_PV",
      "tagdesc": "B侧一次高温再热器1出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8615,
      "taglogicid": "N3_DPU3016_HW_TC100103_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC100103_PV",
      "tagdesc": "A侧一次高温再热器2出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8616,
      "taglogicid": "N3_DPU3016_HW_TC100104_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC100104_PV",
      "tagdesc": "B侧一次高温再热器2出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8621,
      "taglogicid": "N3_DPU3016_HW_TC100201_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC100201_PV",
      "tagdesc": "A侧二次再热微喷减温器1出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8622,
      "taglogicid": "N3_DPU3016_HW_TC100202_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC100202_PV",
      "tagdesc": "B侧二次再热微喷减温器1出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8623,
      "taglogicid": "N3_DPU3016_HW_TC100203_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC100203_PV",
      "tagdesc": "A侧二次再热微喷减温器2出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8624,
      "taglogicid": "N3_DPU3016_HW_TC100204_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC100204_PV",
      "tagdesc": "B侧二次再热微喷减温器2出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8629,
      "taglogicid": "N3_DPU3016_HW_TC100301_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC100301_PV",
      "tagdesc": "A侧二次高温再热器1出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8630,
      "taglogicid": "N3_DPU3016_HW_TC100302_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC100302_PV",
      "tagdesc": "B侧二次高温再热器1出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8631,
      "taglogicid": "N3_DPU3016_HW_TC100303_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC100303_PV",
      "tagdesc": "A侧二次高温再热器2出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8632,
      "taglogicid": "N3_DPU3016_HW_TC100304_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC100304_PV",
      "tagdesc": "B侧二次高温再热器2出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8669,
      "taglogicid": "N3_DPU3016_HW_TC110101_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC110101_PV",
      "tagdesc": "A侧一次高温再热器1出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8670,
      "taglogicid": "N3_DPU3016_HW_TC110102_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC110102_PV",
      "tagdesc": "B侧一次高温再热器1出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8671,
      "taglogicid": "N3_DPU3016_HW_TC110103_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC110103_PV",
      "tagdesc": "A侧一次高温再热器2出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8672,
      "taglogicid": "N3_DPU3016_HW_TC110104_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC110104_PV",
      "tagdesc": "B侧一次高温再热器2出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8677,
      "taglogicid": "N3_DPU3016_HW_TC110301_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC110301_PV",
      "tagdesc": "A侧二次高温再热器1出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8678,
      "taglogicid": "N3_DPU3016_HW_TC110302_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC110302_PV",
      "tagdesc": "B侧二次高温再热器1出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8679,
      "taglogicid": "N3_DPU3016_HW_TC110303_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC110303_PV",
      "tagdesc": "A侧二次高温再热器2出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8680,
      "taglogicid": "N3_DPU3016_HW_TC110304_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC110304_PV",
      "tagdesc": "B侧二次高温再热器2出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8701,
      "taglogicid": "N3_DPU3016_HW_TC120101_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC120101_PV",
      "tagdesc": "A侧一次高温再热器1出口温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8702,
      "taglogicid": "N3_DPU3016_HW_TC120102_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC120102_PV",
      "tagdesc": "B侧一次高温再热器1出口温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8703,
      "taglogicid": "N3_DPU3016_HW_TC120103_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC120103_PV",
      "tagdesc": "A侧一次高温再热器2出口温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8704,
      "taglogicid": "N3_DPU3016_HW_TC120104_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC120104_PV",
      "tagdesc": "B侧一次高温再热器2出口温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8709,
      "taglogicid": "N3_DPU3016_HW_TC120301_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC120301_PV",
      "tagdesc": "A侧二次高温再热器1出口温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8710,
      "taglogicid": "N3_DPU3016_HW_TC120302_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC120302_PV",
      "tagdesc": "B侧二次高温再热器1出口温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8711,
      "taglogicid": "N3_DPU3016_HW_TC120303_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC120303_PV",
      "tagdesc": "A侧二次高温再热器2出口温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8712,
      "taglogicid": "N3_DPU3016_HW_TC120304_PV",
      "tagid": "BHG_UNIT3_DPU3016_HW_TC120304_PV",
      "tagdesc": "B侧二次高温再热器2出口温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8733,
      "taglogicid": "N3_DPU3016_SH0022_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0022_AALM01_PV",
      "tagdesc": "A侧一次再热微喷减温器2进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8734,
      "taglogicid": "N3_DPU3016_SH0022_BALM01_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0022_BALM01_PV",
      "tagdesc": "A侧一次再热微喷减温器2进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8735,
      "taglogicid": "N3_DPU3016_SH0022_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0022_AALM02_PV",
      "tagdesc": "A侧一次再热微喷减温器1进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8736,
      "taglogicid": "N3_DPU3016_SH0022_BALM02_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0022_BALM02_PV",
      "tagdesc": "A侧一再微喷减温器1进口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8737,
      "taglogicid": "N3_DPU3016_SH0022_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0022_AALM03_PV",
      "tagdesc": "B侧一再微喷减温器2进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8738,
      "taglogicid": "N3_DPU3016_SH0022_BALM03_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0022_BALM03_PV",
      "tagdesc": "B侧一再微喷减温器2进口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8739,
      "taglogicid": "N3_DPU3016_SH0022_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0022_AALM04_PV",
      "tagdesc": "B侧一再微喷减温器1进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8740,
      "taglogicid": "N3_DPU3016_SH0022_BALM04_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0022_BALM04_PV",
      "tagdesc": "B侧一再微喷减温器1进口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8741,
      "taglogicid": "N3_DPU3016_SH0023_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0023_AALM01_PV",
      "tagdesc": "A侧一次再热微喷减温器1出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8742,
      "taglogicid": "N3_DPU3016_SH0023_BALM01_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0023_BALM01_PV",
      "tagdesc": "A侧一次再热微喷减温器1出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8743,
      "taglogicid": "N3_DPU3016_SH0023_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0023_AALM02_PV",
      "tagdesc": "A侧一再微喷减温器2出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8744,
      "taglogicid": "N3_DPU3016_SH0023_BALM02_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0023_BALM02_PV",
      "tagdesc": "A侧一再微喷减温器2出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8745,
      "taglogicid": "N3_DPU3016_SH0023_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0023_AALM03_PV",
      "tagdesc": "B侧一再微喷减温器1出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8746,
      "taglogicid": "N3_DPU3016_SH0023_BALM03_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0023_BALM03_PV",
      "tagdesc": "B侧一再微喷减温器1出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8747,
      "taglogicid": "N3_DPU3016_SH0023_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0023_AALM04_PV",
      "tagdesc": "B侧一再微喷减温器2出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8748,
      "taglogicid": "N3_DPU3016_SH0023_BALM04_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0023_BALM04_PV",
      "tagdesc": "B侧一再微喷减温器2出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8749,
      "taglogicid": "N3_DPU3016_SH0024_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0024_AALM01_PV",
      "tagdesc": "A侧一次低温再热器进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8750,
      "taglogicid": "N3_DPU3016_SH0024_BALM01_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0024_BALM01_PV",
      "tagdesc": "A侧一次低温再热器进口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8751,
      "taglogicid": "N3_DPU3016_SH0024_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0024_AALM02_PV",
      "tagdesc": "B侧一次低温再热器进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8752,
      "taglogicid": "N3_DPU3016_SH0024_BALM02_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0024_BALM02_PV",
      "tagdesc": "B侧一次低温再热器进口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8753,
      "taglogicid": "N3_DPU3016_SH0025_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0025_AALM01_PV",
      "tagdesc": "A侧一次高温再热器1出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8754,
      "taglogicid": "N3_DPU3016_SH0025_BALM01_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0025_BALM01_PV",
      "tagdesc": "A侧一次高温再热器1出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8755,
      "taglogicid": "N3_DPU3016_SH0025_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0025_AALM02_PV",
      "tagdesc": "A侧一次高温再热器2出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8756,
      "taglogicid": "N3_DPU3016_SH0025_BALM02_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0025_BALM02_PV",
      "tagdesc": "A侧一次高温再热器2出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8757,
      "taglogicid": "N3_DPU3016_SH0025_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0025_AALM03_PV",
      "tagdesc": "B侧一次高温再热器1出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8758,
      "taglogicid": "N3_DPU3016_SH0025_BALM03_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0025_BALM03_PV",
      "tagdesc": "B侧一次高温再热器1出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8759,
      "taglogicid": "N3_DPU3016_SH0025_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0025_AALM04_PV",
      "tagdesc": "B侧一次高温再热器2出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8760,
      "taglogicid": "N3_DPU3016_SH0025_BALM04_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0025_BALM04_PV",
      "tagdesc": "B侧一次高温再热器2出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8761,
      "taglogicid": "N3_DPU3016_SH0026_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0026_AALM01_PV",
      "tagdesc": "A侧二次再热微喷减温器1进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8762,
      "taglogicid": "N3_DPU3016_SH0026_BALM01_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0026_BALM01_PV",
      "tagdesc": "A侧二次再热减温器1进口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8763,
      "taglogicid": "N3_DPU3016_SH0026_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0026_AALM02_PV",
      "tagdesc": "A侧二次再热减温器2进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8764,
      "taglogicid": "N3_DPU3016_SH0026_BALM02_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0026_BALM02_PV",
      "tagdesc": "A侧二次再热减温器2进口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8765,
      "taglogicid": "N3_DPU3016_SH0026_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0026_AALM03_PV",
      "tagdesc": "B侧二次再热减温器1进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8766,
      "taglogicid": "N3_DPU3016_SH0026_BALM03_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0026_BALM03_PV",
      "tagdesc": "B侧二次再热减温器1进口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8767,
      "taglogicid": "N3_DPU3016_SH0026_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0026_AALM04_PV",
      "tagdesc": "B侧二次再热减温器2进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8768,
      "taglogicid": "N3_DPU3016_SH0026_BALM04_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0026_BALM04_PV",
      "tagdesc": "B侧二次再热减温器2进口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8769,
      "taglogicid": "N3_DPU3016_SH0027_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0027_AALM01_PV",
      "tagdesc": "A侧二次再热减温器1出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8770,
      "taglogicid": "N3_DPU3016_SH0027_BALM01_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0027_BALM01_PV",
      "tagdesc": "A侧二次再热减温器1出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8771,
      "taglogicid": "N3_DPU3016_SH0027_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0027_AALM02_PV",
      "tagdesc": "A侧二次再热减温器2出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8772,
      "taglogicid": "N3_DPU3016_SH0027_BALM02_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0027_BALM02_PV",
      "tagdesc": "A侧二次再热减温器2出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8773,
      "taglogicid": "N3_DPU3016_SH0027_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0027_AALM03_PV",
      "tagdesc": "B侧二次再热减温器1出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8774,
      "taglogicid": "N3_DPU3016_SH0027_BALM03_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0027_BALM03_PV",
      "tagdesc": "B侧二次再热减温器1出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8775,
      "taglogicid": "N3_DPU3016_SH0027_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0027_AALM04_PV",
      "tagdesc": "B侧二次再热减温器2出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8776,
      "taglogicid": "N3_DPU3016_SH0027_BALM04_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0027_BALM04_PV",
      "tagdesc": "B侧二次再热减温器2出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8777,
      "taglogicid": "N3_DPU3016_SH0028_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0028_AALM01_PV",
      "tagdesc": "A侧二次低温再热器进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8778,
      "taglogicid": "N3_DPU3016_SH0028_BALM01_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0028_BALM01_PV",
      "tagdesc": "A侧二次低温再热器进口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8779,
      "taglogicid": "N3_DPU3016_SH0028_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0028_AALM02_PV",
      "tagdesc": "B侧二次低温再热器进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8780,
      "taglogicid": "N3_DPU3016_SH0028_BALM02_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0028_BALM02_PV",
      "tagdesc": "B侧二次低温再热器进口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8781,
      "taglogicid": "N3_DPU3016_SH0029_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0029_AALM01_PV",
      "tagdesc": "A侧二次高温再热器1出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8782,
      "taglogicid": "N3_DPU3016_SH0029_BALM01_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0029_BALM01_PV",
      "tagdesc": "A侧二次高温再热器1出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8783,
      "taglogicid": "N3_DPU3016_SH0029_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0029_AALM02_PV",
      "tagdesc": "A侧二次高温再热器2出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8784,
      "taglogicid": "N3_DPU3016_SH0029_BALM02_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0029_BALM02_PV",
      "tagdesc": "A侧二次高温再热器2出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8785,
      "taglogicid": "N3_DPU3016_SH0029_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0029_AALM03_PV",
      "tagdesc": "B侧二次高温再热器1出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8786,
      "taglogicid": "N3_DPU3016_SH0029_BALM03_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0029_BALM03_PV",
      "tagdesc": "B侧二次高温再热器1出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8787,
      "taglogicid": "N3_DPU3016_SH0029_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0029_AALM04_PV",
      "tagdesc": "B侧二次高温再热器2出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 8788,
      "taglogicid": "N3_DPU3016_SH0029_BALM04_PV",
      "tagid": "BHG_UNIT3_DPU3016_SH0029_BALM04_PV",
      "tagdesc": "B侧二次高温再热器2出口温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 9059,
      "taglogicid": "N3_DPU3017_HW_RT040501_PV",
      "tagid": "BHG_UNIT3_DPU3017_HW_RT040501_PV",
      "tagdesc": "锅炉疏水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 9066,
      "taglogicid": "N3_DPU3017_HW_RT040508_PV",
      "tagid": "BHG_UNIT3_DPU3017_HW_RT040508_PV",
      "tagdesc": "DPU3017机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 9105,
      "taglogicid": "N3_DPU3017_HW_TC050401_PV",
      "tagid": "BHG_UNIT3_DPU3017_HW_TC050401_PV",
      "tagdesc": "集水箱温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 9410,
      "taglogicid": "N3_DPU3018_HW_RT010401_PV",
      "tagid": "BHG_UNIT3_DPU3018_HW_RT010401_PV",
      "tagdesc": "#3机组计量模块A氨气温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 9411,
      "taglogicid": "N3_DPU3018_HW_RT010402_PV",
      "tagid": "BHG_UNIT3_DPU3018_HW_RT010402_PV",
      "tagdesc": "SCR出口A侧取样母管温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 9412,
      "taglogicid": "N3_DPU3018_HW_RT010403_PV",
      "tagid": "BHG_UNIT3_DPU3018_HW_RT010403_PV",
      "tagdesc": "#3机组稀释风温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 9413,
      "taglogicid": "N3_DPU3018_HW_RT010404_PV",
      "tagid": "BHG_UNIT3_DPU3018_HW_RT010404_PV",
      "tagdesc": "脱硝辅助蒸汽母管蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 9417,
      "taglogicid": "N3_DPU3018_HW_RT010408_PV",
      "tagid": "BHG_UNIT3_DPU3018_HW_RT010408_PV",
      "tagdesc": "DPU3018机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 9456,
      "taglogicid": "N3_DPU3018_HW_RT020401_PV",
      "tagid": "BHG_UNIT3_DPU3018_HW_RT020401_PV",
      "tagdesc": "#3机组计量模块B氨气温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 9457,
      "taglogicid": "N3_DPU3018_HW_RT020402_PV",
      "tagid": "BHG_UNIT3_DPU3018_HW_RT020402_PV",
      "tagdesc": "SCR出口B侧取样母管温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 9474,
      "taglogicid": "N3_DPU3018_HW_AI030205_PV",
      "tagid": "BHG_UNIT3_DPU3018_HW_AI030205_PV",
      "tagdesc": "#3机组入口CEMS小室温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 9486,
      "taglogicid": "N3_DPU3018_HW_TC030401_PV",
      "tagid": "BHG_UNIT3_DPU3018_HW_TC030401_PV",
      "tagdesc": "#3机组反应器入口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 9487,
      "taglogicid": "N3_DPU3018_HW_TC030402_PV",
      "tagid": "BHG_UNIT3_DPU3018_HW_TC030402_PV",
      "tagdesc": "#3机组反应器入口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 9520,
      "taglogicid": "N3_DPU3018_HW_AI040205_PV",
      "tagid": "BHG_UNIT3_DPU3018_HW_AI040205_PV",
      "tagdesc": "#3机组出口CEMS小室温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 9532,
      "taglogicid": "N3_DPU3018_HW_TC040401_PV",
      "tagid": "BHG_UNIT3_DPU3018_HW_TC040401_PV",
      "tagdesc": "#3机组反应器入口温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 9533,
      "taglogicid": "N3_DPU3018_HW_TC040402_PV",
      "tagid": "BHG_UNIT3_DPU3018_HW_TC040402_PV",
      "tagdesc": "#3机组反应器出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 9964,
      "taglogicid": "N3_DPU3019_HW_RT010301_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT010301_PV",
      "tagdesc": "A热媒水泵U相绕组温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 9965,
      "taglogicid": "N3_DPU3019_HW_RT010302_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT010302_PV",
      "tagdesc": "A热媒水泵V相绕组温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 9966,
      "taglogicid": "N3_DPU3019_HW_RT010303_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT010303_PV",
      "tagdesc": "A热媒水泵W相绕组温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 9967,
      "taglogicid": "N3_DPU3019_HW_RT010304_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT010304_PV",
      "tagdesc": "B热媒水泵U相绕组温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 9968,
      "taglogicid": "N3_DPU3019_HW_RT010305_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT010305_PV",
      "tagdesc": "B热媒水泵V相绕组温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 9969,
      "taglogicid": "N3_DPU3019_HW_RT010306_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT010306_PV",
      "tagdesc": "B热媒水泵W相绕组温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10012,
      "taglogicid": "N3_DPU3019_HW_RT020201_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT020201_PV",
      "tagdesc": "A热媒水泵U相绕组温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10013,
      "taglogicid": "N3_DPU3019_HW_RT020202_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT020202_PV",
      "tagdesc": "A热媒水泵V相绕组温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10014,
      "taglogicid": "N3_DPU3019_HW_RT020203_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT020203_PV",
      "tagdesc": "A热媒水泵W相绕组温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10015,
      "taglogicid": "N3_DPU3019_HW_RT020204_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT020204_PV",
      "tagdesc": "B热媒水泵U相绕组温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10016,
      "taglogicid": "N3_DPU3019_HW_RT020205_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT020205_PV",
      "tagdesc": "B热媒水泵V相绕组温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10017,
      "taglogicid": "N3_DPU3019_HW_RT020206_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT020206_PV",
      "tagdesc": "B热媒水泵W相绕组温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10020,
      "taglogicid": "N3_DPU3019_HW_RT020301_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT020301_PV",
      "tagdesc": "C热媒水泵U相绕组温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10021,
      "taglogicid": "N3_DPU3019_HW_RT020302_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT020302_PV",
      "tagdesc": "C热媒水泵V相绕组温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10022,
      "taglogicid": "N3_DPU3019_HW_RT020303_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT020303_PV",
      "tagdesc": "C热媒水泵W相绕组温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10044,
      "taglogicid": "N3_DPU3019_HW_RT030101_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT030101_PV",
      "tagdesc": "C热媒水泵U相绕组温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10045,
      "taglogicid": "N3_DPU3019_HW_RT030102_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT030102_PV",
      "tagdesc": "C热媒水泵V相绕组温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10046,
      "taglogicid": "N3_DPU3019_HW_RT030103_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT030103_PV",
      "tagdesc": "C热媒水泵W相绕组温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10052,
      "taglogicid": "N3_DPU3019_HW_RT030201_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT030201_PV",
      "tagdesc": "A凝结水升压泵U绕组温度1（预留）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10053,
      "taglogicid": "N3_DPU3019_HW_RT030202_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT030202_PV",
      "tagdesc": "A凝结水升压泵V绕组温度1（预留）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10054,
      "taglogicid": "N3_DPU3019_HW_RT030203_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT030203_PV",
      "tagdesc": "A凝结水升压泵W绕组温度1（预留）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10055,
      "taglogicid": "N3_DPU3019_HW_RT030204_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT030204_PV",
      "tagdesc": "B凝结水升压泵U绕组温度1（预留）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10056,
      "taglogicid": "N3_DPU3019_HW_RT030205_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT030205_PV",
      "tagdesc": "B凝结水升压泵V绕组温度1（预留）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10057,
      "taglogicid": "N3_DPU3019_HW_RT030206_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT030206_PV",
      "tagdesc": "B凝结水升压泵W绕组温度1（预留）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10099,
      "taglogicid": "N3_DPU3019_HW_RT040108_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT040108_PV",
      "tagdesc": "DPU3019机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10100,
      "taglogicid": "N3_DPU3019_HW_RT040201_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT040201_PV",
      "tagdesc": "A凝结水升压泵U绕组温度2（预留）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10101,
      "taglogicid": "N3_DPU3019_HW_RT040202_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT040202_PV",
      "tagdesc": "A凝结水升压泵V绕组温度2（预留）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10102,
      "taglogicid": "N3_DPU3019_HW_RT040203_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT040203_PV",
      "tagdesc": "A凝结水升压泵W绕组温度2（预留）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10103,
      "taglogicid": "N3_DPU3019_HW_RT040204_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT040204_PV",
      "tagdesc": "B凝结水升压泵U绕组温度2（预留）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10104,
      "taglogicid": "N3_DPU3019_HW_RT040205_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT040205_PV",
      "tagdesc": "B凝结水升压泵V绕组温度2（预留）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10105,
      "taglogicid": "N3_DPU3019_HW_RT040206_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT040206_PV",
      "tagdesc": "B凝结水升压泵W绕组温度2（预留）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10230,
      "taglogicid": "N3_DPU3019_HW_RT070305_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT070305_PV",
      "tagdesc": "一次风暖风器A 进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10231,
      "taglogicid": "N3_DPU3019_HW_RT070306_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT070306_PV",
      "tagdesc": "一次风暖风器A 出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10278,
      "taglogicid": "N3_DPU3019_HW_RT080205_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT080205_PV",
      "tagdesc": "一次风暖风器B 进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10279,
      "taglogicid": "N3_DPU3019_HW_RT080206_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT080206_PV",
      "tagdesc": "一次风暖风器B 出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10342,
      "taglogicid": "N3_DPU3019_HW_RT090205_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT090205_PV",
      "tagdesc": "二次风暖风器A 进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10343,
      "taglogicid": "N3_DPU3019_HW_RT090206_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT090206_PV",
      "tagdesc": "二次风暖风器A 出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10386,
      "taglogicid": "N3_DPU3019_HW_RT100201_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT100201_PV",
      "tagdesc": "二次风暖风器B 进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10387,
      "taglogicid": "N3_DPU3019_HW_RT100202_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT100202_PV",
      "tagdesc": "二次风暖风器B 出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10389,
      "taglogicid": "N3_DPU3019_HW_RT100204_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT100204_PV",
      "tagdesc": "3#机低省辅助蒸汽进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10390,
      "taglogicid": "N3_DPU3019_HW_RT100205_PV",
      "tagid": "BHG_UNIT3_DPU3019_HW_RT100205_PV",
      "tagdesc": "3#机低省辅助蒸汽疏水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10641,
      "taglogicid": "N3_DPU3020_HW_RT020102_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_RT020102_PV",
      "tagdesc": "干渣机温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10647,
      "taglogicid": "N3_DPU3020_HW_RT020108_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_RT020108_PV",
      "tagdesc": "DPU3020机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10648,
      "taglogicid": "N3_DPU3020_HW_TC020201_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC020201_PV",
      "tagdesc": "#1落渣口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10649,
      "taglogicid": "N3_DPU3020_HW_TC020202_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC020202_PV",
      "tagdesc": "#2落渣口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10650,
      "taglogicid": "N3_DPU3020_HW_TC020203_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC020203_PV",
      "tagdesc": "#3落渣口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10782,
      "taglogicid": "N3_DPU3020_HW_TC040301_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC040301_PV",
      "tagdesc": "旁路高压省煤器入口烟气温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10783,
      "taglogicid": "N3_DPU3020_HW_TC040302_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC040302_PV",
      "tagdesc": "旁路高压省煤器出口烟气温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10784,
      "taglogicid": "N3_DPU3020_HW_TC040303_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC040303_PV",
      "tagdesc": "旁路低压省煤器出口烟气温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10785,
      "taglogicid": "N3_DPU3020_HW_TC040304_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC040304_PV",
      "tagdesc": "旁路高压省煤器进水母管温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10786,
      "taglogicid": "N3_DPU3020_HW_TC040305_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC040305_PV",
      "tagdesc": "旁路低压省煤器进水母管温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10830,
      "taglogicid": "N3_DPU3020_HW_TC050201_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC050201_PV",
      "tagdesc": "旁路高压省煤器入口烟气温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10831,
      "taglogicid": "N3_DPU3020_HW_TC050202_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC050202_PV",
      "tagdesc": "旁路高压省煤器出口烟气温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10832,
      "taglogicid": "N3_DPU3020_HW_TC050203_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC050203_PV",
      "tagdesc": "旁路低压省煤器出口烟气温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10833,
      "taglogicid": "N3_DPU3020_HW_TC050204_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC050204_PV",
      "tagdesc": "旁路高压省煤器进水母管温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10834,
      "taglogicid": "N3_DPU3020_HW_TC050205_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC050205_PV",
      "tagdesc": "旁路低压省煤器进水母管温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10878,
      "taglogicid": "N3_DPU3020_HW_TC060201_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC060201_PV",
      "tagdesc": "旁路高压省煤器出水母管温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10879,
      "taglogicid": "N3_DPU3020_HW_TC060202_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC060202_PV",
      "tagdesc": "旁路低压省煤器出水母管温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10880,
      "taglogicid": "N3_DPU3020_HW_TC060203_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC060203_PV",
      "tagdesc": "旁路高压省煤器进水母管温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10881,
      "taglogicid": "N3_DPU3020_HW_TC060204_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC060204_PV",
      "tagdesc": "旁路低压省煤器进水母管温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10918,
      "taglogicid": "N3_DPU3020_HW_TC070101_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC070101_PV",
      "tagdesc": "旁路高压省煤器模块1出水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10919,
      "taglogicid": "N3_DPU3020_HW_TC070102_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC070102_PV",
      "tagdesc": "旁路高压省煤器模块2出水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10920,
      "taglogicid": "N3_DPU3020_HW_TC070103_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC070103_PV",
      "tagdesc": "旁路高压省煤器模块3出水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10921,
      "taglogicid": "N3_DPU3020_HW_TC070104_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC070104_PV",
      "tagdesc": "旁路高压省煤器模块4出水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10922,
      "taglogicid": "N3_DPU3020_HW_TC070105_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC070105_PV",
      "tagdesc": "旁路高压省煤器模块5出水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10923,
      "taglogicid": "N3_DPU3020_HW_TC070106_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC070106_PV",
      "tagdesc": "旁路高压省煤器模块6出水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10924,
      "taglogicid": "N3_DPU3020_HW_TC070107_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC070107_PV",
      "tagdesc": "旁路高压省煤器出水母管温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10974,
      "taglogicid": "N3_DPU3020_HW_TC080101_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC080101_PV",
      "tagdesc": "旁路低压省煤器模块1出水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10975,
      "taglogicid": "N3_DPU3020_HW_TC080102_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC080102_PV",
      "tagdesc": "旁路低压省煤器模块2出水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10976,
      "taglogicid": "N3_DPU3020_HW_TC080103_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC080103_PV",
      "tagdesc": "旁路低压省煤器模块3出水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10977,
      "taglogicid": "N3_DPU3020_HW_TC080104_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC080104_PV",
      "tagdesc": "旁路低压省煤器模块4出水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10978,
      "taglogicid": "N3_DPU3020_HW_TC080105_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC080105_PV",
      "tagdesc": "旁路低压省煤器模块5出水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10979,
      "taglogicid": "N3_DPU3020_HW_TC080106_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC080106_PV",
      "tagdesc": "旁路低压省煤器模块6出水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 10980,
      "taglogicid": "N3_DPU3020_HW_TC080107_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_TC080107_PV",
      "tagdesc": "旁路低压省煤器出水母管温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 11069,
      "taglogicid": "N3_DPU3020_HW_RT090308_PV",
      "tagid": "BHG_UNIT3_DPU3020_HW_RT090308_PV",
      "tagdesc": "DPU3020扩展柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 11281,
      "taglogicid": "N3_DPU3021_HW_RT010408_PV",
      "tagid": "BHG_UNIT3_DPU3021_HW_RT010408_PV",
      "tagdesc": "DPU3021机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 11298,
      "taglogicid": "N3_DPU3021_HW_TC020101_PV",
      "tagid": "BHG_UNIT3_DPU3021_HW_TC020101_PV",
      "tagdesc": "锅炉本体吹灰蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 11299,
      "taglogicid": "N3_DPU3021_HW_TC020102_PV",
      "tagid": "BHG_UNIT3_DPU3021_HW_TC020102_PV",
      "tagdesc": "锅炉左前墙炉膛蒸汽吹灰疏水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 11300,
      "taglogicid": "N3_DPU3021_HW_TC020103_PV",
      "tagid": "BHG_UNIT3_DPU3021_HW_TC020103_PV",
      "tagdesc": "锅炉右后墙炉膛蒸汽吹灰疏水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 11870,
      "taglogicid": "N3_DPU3022_HW_TC010101_PV",
      "tagid": "BHG_UNIT3_DPU3022_HW_TC010101_PV",
      "tagdesc": "锅炉长伸缩蒸汽吹灰疏水温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 11871,
      "taglogicid": "N3_DPU3022_HW_TC010102_PV",
      "tagid": "BHG_UNIT3_DPU3022_HW_TC010102_PV",
      "tagdesc": "锅炉长伸缩蒸汽吹灰疏水温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 11872,
      "taglogicid": "N3_DPU3022_HW_TC010103_PV",
      "tagid": "BHG_UNIT3_DPU3022_HW_TC010103_PV",
      "tagdesc": "锅炉长伸缩蒸汽吹灰疏水温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 11873,
      "taglogicid": "N3_DPU3022_HW_TC010104_PV",
      "tagid": "BHG_UNIT3_DPU3022_HW_TC010104_PV",
      "tagdesc": "锅炉长伸缩蒸汽吹灰疏水温度4",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 11874,
      "taglogicid": "N3_DPU3022_HW_TC010105_PV",
      "tagid": "BHG_UNIT3_DPU3022_HW_TC010105_PV",
      "tagdesc": "锅炉空预器蒸汽吹灰疏水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 11917,
      "taglogicid": "N3_DPU3022_HW_RT010408_PV",
      "tagid": "BHG_UNIT3_DPU3022_HW_RT010408_PV",
      "tagdesc": "DPU3022机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12524,
      "taglogicid": "N3_DPU3031_HW_TC010201_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC010201_PV",
      "tagdesc": "主蒸汽管道(左侧)疏水阀1阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12525,
      "taglogicid": "N3_DPU3031_HW_TC010202_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC010202_PV",
      "tagdesc": "主蒸汽管道(右侧)疏水阀1阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12526,
      "taglogicid": "N3_DPU3031_HW_TC010203_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC010203_PV",
      "tagdesc": "一次高再进汽门(左)前疏水1后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12527,
      "taglogicid": "N3_DPU3031_HW_TC010204_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC010204_PV",
      "tagdesc": "一次高再进汽门(右)前疏水1后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12528,
      "taglogicid": "N3_DPU3031_HW_TC010205_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC010205_PV",
      "tagdesc": "二次高再热段(左)疏水阀1阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12529,
      "taglogicid": "N3_DPU3031_HW_TC010206_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC010206_PV",
      "tagdesc": "二次高再热段(左)疏水阀1阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12530,
      "taglogicid": "N3_DPU3031_HW_TC010207_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC010207_PV",
      "tagdesc": "超高压缸排气温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12531,
      "taglogicid": "N3_DPU3031_HW_TC010208_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC010208_PV",
      "tagdesc": "超高压缸排汽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12532,
      "taglogicid": "N3_DPU3031_HW_TC010301_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC010301_PV",
      "tagdesc": "疏水集管四温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12533,
      "taglogicid": "N3_DPU3031_HW_TC010302_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC010302_PV",
      "tagdesc": "疏水集管八温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12534,
      "taglogicid": "N3_DPU3031_HW_TC010303_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC010303_PV",
      "tagdesc": "疏水集管十温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12535,
      "taglogicid": "N3_DPU3031_HW_TC010304_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC010304_PV",
      "tagdesc": "疏水集管十二温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12536,
      "taglogicid": "N3_DPU3031_HW_TC010305_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC010305_PV",
      "tagdesc": "一次冷再热逆止阀后母管底部温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12537,
      "taglogicid": "N3_DPU3031_HW_TC010306_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC010306_PV",
      "tagdesc": "一次冷再热逆止阀后疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12538,
      "taglogicid": "N3_DPU3031_HW_TC010307_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC010307_PV",
      "tagdesc": "超高压缸排气温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12563,
      "taglogicid": "N3_DPU3031_HW_RT010508_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_RT010508_PV",
      "tagdesc": "DPU3031机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12588,
      "taglogicid": "N3_DPU3031_HW_TC020201_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC020201_PV",
      "tagdesc": "主蒸汽管道(左侧)疏水阀2阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12589,
      "taglogicid": "N3_DPU3031_HW_TC020202_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC020202_PV",
      "tagdesc": "主蒸汽管道(右侧)疏水阀2阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12590,
      "taglogicid": "N3_DPU3031_HW_TC020203_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC020203_PV",
      "tagdesc": "一次高再进汽门(左)前疏水2后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12591,
      "taglogicid": "N3_DPU3031_HW_TC020204_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC020204_PV",
      "tagdesc": "一次高再进汽门(右)前疏水2后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12592,
      "taglogicid": "N3_DPU3031_HW_TC020205_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC020205_PV",
      "tagdesc": "二次高再热段(左)疏水阀2阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12593,
      "taglogicid": "N3_DPU3031_HW_TC020206_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC020206_PV",
      "tagdesc": "二次高再热段(左)疏水阀2阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12596,
      "taglogicid": "N3_DPU3031_HW_TC020301_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC020301_PV",
      "tagdesc": "疏水集管五温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12597,
      "taglogicid": "N3_DPU3031_HW_TC020302_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC020302_PV",
      "tagdesc": "疏水集管七温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12598,
      "taglogicid": "N3_DPU3031_HW_TC020303_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC020303_PV",
      "tagdesc": "疏水集管九温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12599,
      "taglogicid": "N3_DPU3031_HW_TC020304_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC020304_PV",
      "tagdesc": "疏水集管十一温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12600,
      "taglogicid": "N3_DPU3031_HW_TC020305_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC020305_PV",
      "tagdesc": "疏水集管十三温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12628,
      "taglogicid": "N3_DPU3031_HW_TC030201_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC030201_PV",
      "tagdesc": "超高压补汽阀（左侧）疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12629,
      "taglogicid": "N3_DPU3031_HW_TC030202_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC030202_PV",
      "tagdesc": "高压主汽门（左侧）疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12630,
      "taglogicid": "N3_DPU3031_HW_TC030203_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC030203_PV",
      "tagdesc": "高压再热主调门（左）疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12631,
      "taglogicid": "N3_DPU3031_HW_TC030204_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC030204_PV",
      "tagdesc": "超高压主汽门后（左）疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12632,
      "taglogicid": "N3_DPU3031_HW_TC030205_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC030205_PV",
      "tagdesc": "中压再热主门（左侧）疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12633,
      "taglogicid": "N3_DPU3031_HW_TC030206_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC030206_PV",
      "tagdesc": "中压再热调门（左侧）疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12636,
      "taglogicid": "N3_DPU3031_HW_TC030301_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC030301_PV",
      "tagdesc": "超高压缸内外缸夹层疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12637,
      "taglogicid": "N3_DPU3031_HW_TC030302_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC030302_PV",
      "tagdesc": "超高压外缸气动疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12638,
      "taglogicid": "N3_DPU3031_HW_TC030303_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC030303_PV",
      "tagdesc": "高压阀门与高压缸间疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12639,
      "taglogicid": "N3_DPU3031_HW_TC030304_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC030304_PV",
      "tagdesc": "中压阀门与中压缸间疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12676,
      "taglogicid": "N3_DPU3031_HW_TC040101_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC040101_PV",
      "tagdesc": "超高压补汽阀疏水（右）疏水后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12677,
      "taglogicid": "N3_DPU3031_HW_TC040102_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC040102_PV",
      "tagdesc": "高压再热主汽门（右）疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12678,
      "taglogicid": "N3_DPU3031_HW_TC040103_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC040103_PV",
      "tagdesc": "高压再热主调门（右）疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12679,
      "taglogicid": "N3_DPU3031_HW_TC040104_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC040104_PV",
      "tagdesc": "超高压主汽门后（右）疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12680,
      "taglogicid": "N3_DPU3031_HW_TC040105_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC040105_PV",
      "tagdesc": "中压再热主门（右侧）疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12681,
      "taglogicid": "N3_DPU3031_HW_TC040106_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC040106_PV",
      "tagdesc": "中压再热调门（右侧）疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12732,
      "taglogicid": "N3_DPU3031_HW_TC050101_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC050101_PV",
      "tagdesc": "左二次冷再热逆止阀后母管底部温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12733,
      "taglogicid": "N3_DPU3031_HW_TC050102_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC050102_PV",
      "tagdesc": "左一次冷再逆阀至炉疏扩疏水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12734,
      "taglogicid": "N3_DPU3031_HW_TC050103_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC050103_PV",
      "tagdesc": "左二次冷再热逆止阀后疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12735,
      "taglogicid": "N3_DPU3031_HW_TC050104_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC050104_PV",
      "tagdesc": "左二次冷再逆阀至炉疏扩疏水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12736,
      "taglogicid": "N3_DPU3031_HW_TC050105_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC050105_PV",
      "tagdesc": "疏水集管一温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12737,
      "taglogicid": "N3_DPU3031_HW_TC050106_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC050106_PV",
      "tagdesc": "疏水集管三温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12772,
      "taglogicid": "N3_DPU3031_HW_TC060101_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC060101_PV",
      "tagdesc": "右侧二次冷再热逆止阀前蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12773,
      "taglogicid": "N3_DPU3031_HW_TC060102_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC060102_PV",
      "tagdesc": "右二次冷再热逆止阀后母管底部温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12774,
      "taglogicid": "N3_DPU3031_HW_TC060103_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC060103_PV",
      "tagdesc": "右一次冷再逆阀至炉疏扩疏水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12775,
      "taglogicid": "N3_DPU3031_HW_TC060104_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC060104_PV",
      "tagdesc": "右二次冷再热逆止阀后疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12776,
      "taglogicid": "N3_DPU3031_HW_TC060105_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC060105_PV",
      "tagdesc": "右二次冷再逆阀至炉疏扩疏水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12777,
      "taglogicid": "N3_DPU3031_HW_TC060106_PV",
      "tagid": "BHG_UNIT3_DPU3031_HW_TC060106_PV",
      "tagdesc": "疏水集管二温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12829,
      "taglogicid": "N3_DPU3032_HW_AI010304_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_AI010304_PV",
      "tagdesc": "A&C高旁油站油箱温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12834,
      "taglogicid": "N3_DPU3032_HW_TC010401_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC010401_PV",
      "tagdesc": "高压进汽再热汽门(左)前蒸汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12836,
      "taglogicid": "N3_DPU3032_HW_TC010403_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC010403_PV",
      "tagdesc": "高旁A出口蒸汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12837,
      "taglogicid": "N3_DPU3032_HW_TC010404_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC010404_PV",
      "tagdesc": "中旁A出口蒸汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12838,
      "taglogicid": "N3_DPU3032_HW_TC010405_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC010405_PV",
      "tagdesc": "低旁阀A出口蒸汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12839,
      "taglogicid": "N3_DPU3032_HW_TC010406_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC010406_PV",
      "tagdesc": "高旁C出口蒸汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12849,
      "taglogicid": "N3_DPU3032_HW_RT010508_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_RT010508_PV",
      "tagdesc": "DPU3032机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12883,
      "taglogicid": "N3_DPU3032_HW_AI020304_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_AI020304_PV",
      "tagdesc": "B&D高旁油站油箱温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12888,
      "taglogicid": "N3_DPU3032_HW_TC020401_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC020401_PV",
      "tagdesc": "高压进汽再热汽门(右)前蒸汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12890,
      "taglogicid": "N3_DPU3032_HW_TC020403_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC020403_PV",
      "tagdesc": "高旁B出口蒸汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12891,
      "taglogicid": "N3_DPU3032_HW_TC020404_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC020404_PV",
      "tagdesc": "中旁B出口蒸汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12892,
      "taglogicid": "N3_DPU3032_HW_TC020405_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC020405_PV",
      "tagdesc": "低旁阀B出口蒸汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12893,
      "taglogicid": "N3_DPU3032_HW_TC020406_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC020406_PV",
      "tagdesc": "高旁D出口蒸汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12929,
      "taglogicid": "N3_DPU3032_HW_AI030304_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_AI030304_PV",
      "tagdesc": "中旁油站油箱温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12931,
      "taglogicid": "N3_DPU3032_HW_AI030306_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_AI030306_PV",
      "tagdesc": "低旁油站油箱温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12934,
      "taglogicid": "N3_DPU3032_HW_TC030401_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC030401_PV",
      "tagdesc": "超高压进汽主汽门(左)前蒸汽温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12935,
      "taglogicid": "N3_DPU3032_HW_TC030402_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC030402_PV",
      "tagdesc": "超高压进汽主汽门(右)前蒸汽温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12936,
      "taglogicid": "N3_DPU3032_HW_TC030403_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC030403_PV",
      "tagdesc": "高压进汽再热汽门(左)前蒸汽温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12937,
      "taglogicid": "N3_DPU3032_HW_TC030404_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC030404_PV",
      "tagdesc": "高压进汽再热汽门(右)前蒸汽温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12972,
      "taglogicid": "N3_DPU3032_HW_TC040301_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC040301_PV",
      "tagdesc": "超高压进汽主汽门(左)前蒸汽温度4",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12973,
      "taglogicid": "N3_DPU3032_HW_TC040302_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC040302_PV",
      "tagdesc": "超高压进汽主汽门(右)前蒸汽温度4",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12974,
      "taglogicid": "N3_DPU3032_HW_TC040303_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC040303_PV",
      "tagdesc": "超高压进汽主汽门(左)前蒸汽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12975,
      "taglogicid": "N3_DPU3032_HW_TC040304_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC040304_PV",
      "tagdesc": "高压进汽再热汽门(左)前蒸汽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 12977,
      "taglogicid": "N3_DPU3032_HW_TC040306_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC040306_PV",
      "tagdesc": "高旁C出口蒸汽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13020,
      "taglogicid": "N3_DPU3032_HW_TC050201_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC050201_PV",
      "tagdesc": "超高压进汽主汽门(右)前蒸汽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13021,
      "taglogicid": "N3_DPU3032_HW_TC050202_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC050202_PV",
      "tagdesc": "高压进汽再热汽门(右)前蒸汽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13023,
      "taglogicid": "N3_DPU3032_HW_TC050204_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC050204_PV",
      "tagdesc": "中旁阀A前气动疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13024,
      "taglogicid": "N3_DPU3032_HW_TC050205_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC050205_PV",
      "tagdesc": "低压旁路阀A入口管道疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13025,
      "taglogicid": "N3_DPU3032_HW_TC050206_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC050206_PV",
      "tagdesc": "高旁D出口蒸汽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13061,
      "taglogicid": "N3_DPU3032_HW_DQ050602_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_DQ050602_PV",
      "tagdesc": "A&C高旁油站温度高指示灯打开指令",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13066,
      "taglogicid": "N3_DPU3032_HW_DQ050607_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_DQ050607_PV",
      "tagdesc": "B&D高旁油站温度高指示灯打开指令",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13084,
      "taglogicid": "N3_DPU3032_HW_TC060201_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC060201_PV",
      "tagdesc": "高旁A出口蒸汽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13085,
      "taglogicid": "N3_DPU3032_HW_TC060202_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC060202_PV",
      "tagdesc": "中旁A出口蒸汽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13086,
      "taglogicid": "N3_DPU3032_HW_TC060203_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC060203_PV",
      "tagdesc": "低旁阀A出口蒸汽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13087,
      "taglogicid": "N3_DPU3032_HW_TC060204_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC060204_PV",
      "tagdesc": "中旁阀B前气动疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13088,
      "taglogicid": "N3_DPU3032_HW_TC060205_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC060205_PV",
      "tagdesc": "低压旁路阀B入口管道疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13148,
      "taglogicid": "N3_DPU3032_HW_TC070201_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC070201_PV",
      "tagdesc": "高旁B出口蒸汽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13149,
      "taglogicid": "N3_DPU3032_HW_TC070202_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC070202_PV",
      "tagdesc": "中旁B出口蒸汽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13150,
      "taglogicid": "N3_DPU3032_HW_TC070203_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_TC070203_PV",
      "tagdesc": "低旁阀B出口蒸汽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13195,
      "taglogicid": "N3_DPU3032_HW_RT070508_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_RT070508_PV",
      "tagdesc": "DPU3032扩展柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13381,
      "taglogicid": "N3_DPU3032_HW_DQ100602_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_DQ100602_PV",
      "tagdesc": "低旁油站温度高指示灯打开指令",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13390,
      "taglogicid": "N3_DPU3032_HW_DQ100611_PV",
      "tagid": "BHG_UNIT3_DPU3032_HW_DQ100611_PV",
      "tagdesc": "中旁油站温度高指示灯打开指令",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13430,
      "taglogicid": "N3_DPU3032_SH0022_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0022_AALM02_PV",
      "tagdesc": "A侧一次再热微喷减温器1进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13436,
      "taglogicid": "N3_DPU3032_SH0023_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0023_AALM01_PV",
      "tagdesc": "高旁A出口蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13437,
      "taglogicid": "N3_DPU3032_SH0023_BALM01_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0023_BALM01_PV",
      "tagdesc": "高旁A出口蒸汽温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13438,
      "taglogicid": "N3_DPU3032_SH0023_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0023_AALM02_PV",
      "tagdesc": "高旁B出口蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13439,
      "taglogicid": "N3_DPU3032_SH0023_BALM02_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0023_BALM02_PV",
      "tagdesc": "高旁B出口蒸汽温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13440,
      "taglogicid": "N3_DPU3032_SH0023_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0023_AALM03_PV",
      "tagdesc": "高旁C出口蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13441,
      "taglogicid": "N3_DPU3032_SH0023_BALM03_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0023_BALM03_PV",
      "tagdesc": "高旁C出口蒸汽温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13442,
      "taglogicid": "N3_DPU3032_SH0023_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0023_AALM04_PV",
      "tagdesc": "高旁D出口蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13443,
      "taglogicid": "N3_DPU3032_SH0023_BALM04_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0023_BALM04_PV",
      "tagdesc": "高旁D出口蒸汽温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13446,
      "taglogicid": "N3_DPU3032_SH0024_BALM011_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0024_BALM011_PV",
      "tagdesc": "超高压主汽门(左)前蒸汽温度点坏",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13447,
      "taglogicid": "N3_DPU3032_SH0024_AALM011_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0024_AALM011_PV",
      "tagdesc": "超高压主汽门(左)前蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13450,
      "taglogicid": "N3_DPU3032_SH0024_BALM022_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0024_BALM022_PV",
      "tagdesc": "超高压主汽门(右)前蒸汽温度点坏",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13451,
      "taglogicid": "N3_DPU3032_SH0024_AALM022_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0024_AALM022_PV",
      "tagdesc": "超高压主汽门(右)前蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13453,
      "taglogicid": "N3_DPU3032_SH0024_AALM0002_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0024_AALM0002_PV",
      "tagdesc": "超高压主汽门前蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13456,
      "taglogicid": "N3_DPU3032_SH0025_BALM011_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0025_BALM011_PV",
      "tagdesc": "高压再热汽门(左)前蒸汽温度点坏",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13457,
      "taglogicid": "N3_DPU3032_SH0025_AALM011_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0025_AALM011_PV",
      "tagdesc": "高压再热汽门(左)前蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13460,
      "taglogicid": "N3_DPU3032_SH0025_BALM022_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0025_BALM022_PV",
      "tagdesc": "高压再热汽门(右)前蒸汽温度点坏",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13461,
      "taglogicid": "N3_DPU3032_SH0025_AALM022_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0025_AALM022_PV",
      "tagdesc": "高压再热汽门(右)前蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13463,
      "taglogicid": "N3_DPU3032_SH0025_AALM0002_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0025_AALM0002_PV",
      "tagdesc": "高压再热汽门前蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13466,
      "taglogicid": "N3_DPU3032_SH0026_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0026_AALM02_PV",
      "tagdesc": "中旁A出口蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13467,
      "taglogicid": "N3_DPU3032_SH0026_BALM02_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0026_BALM02_PV",
      "tagdesc": "中旁A出口蒸汽温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13470,
      "taglogicid": "N3_DPU3032_SH0026_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0026_AALM04_PV",
      "tagdesc": "中旁B出口蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13471,
      "taglogicid": "N3_DPU3032_SH0026_BALM04_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0026_BALM04_PV",
      "tagdesc": "中旁B出口蒸汽温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13481,
      "taglogicid": "N3_DPU3032_SH0027_AALM0002_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0027_AALM0002_PV",
      "tagdesc": "中压再热汽门前蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13484,
      "taglogicid": "N3_DPU3032_SH0028_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0028_AALM02_PV",
      "tagdesc": "低旁阀A出口蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13485,
      "taglogicid": "N3_DPU3032_SH0028_BALM02_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0028_BALM02_PV",
      "tagdesc": "低旁阀A出口蒸汽温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13488,
      "taglogicid": "N3_DPU3032_SH0028_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0028_AALM04_PV",
      "tagdesc": "低旁阀B出口蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13489,
      "taglogicid": "N3_DPU3032_SH0028_BALM04_PV",
      "tagid": "BHG_UNIT3_DPU3032_SH0028_BALM04_PV",
      "tagdesc": "低旁阀B出口蒸汽温度报警",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13581,
      "taglogicid": "N3_DPU3033_HW_RT010308_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_RT010308_PV",
      "tagdesc": "DPU3033机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13582,
      "taglogicid": "N3_DPU3033_HW_TC010401_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC010401_PV",
      "tagdesc": "#4高加前置式加热器进汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13583,
      "taglogicid": "N3_DPU3033_HW_TC010402_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC010402_PV",
      "tagdesc": "#4高压外置式蒸汽冷却器温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13584,
      "taglogicid": "N3_DPU3033_HW_TC010403_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC010403_PV",
      "tagdesc": "#4高压外置式蒸汽冷却器温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13585,
      "taglogicid": "N3_DPU3033_HW_TC010404_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC010404_PV",
      "tagdesc": "#4高压外置蒸汽冷却器给水进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13586,
      "taglogicid": "N3_DPU3033_HW_TC010405_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC010405_PV",
      "tagdesc": "#4高压外置蒸汽冷却器给水出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13587,
      "taglogicid": "N3_DPU3033_HW_TC010406_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC010406_PV",
      "tagdesc": "最终给水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13591,
      "taglogicid": "N3_DPU3033_HW_TC010502_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC010502_PV",
      "tagdesc": "四抽逆止阀后管道底部温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13592,
      "taglogicid": "N3_DPU3033_HW_TC010503_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC010503_PV",
      "tagdesc": "#4高压加热器进汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13593,
      "taglogicid": "N3_DPU3033_HW_TC010504_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC010504_PV",
      "tagdesc": "#4高压加热器温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13594,
      "taglogicid": "N3_DPU3033_HW_TC010505_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC010505_PV",
      "tagdesc": "#4高压加热器给水进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13595,
      "taglogicid": "N3_DPU3033_HW_TC010506_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC010506_PV",
      "tagdesc": "#4高压加热器给水出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13661,
      "taglogicid": "N3_DPU3033_HW_TC020302_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC020302_PV",
      "tagdesc": "一抽逆止阀后管道底部温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13662,
      "taglogicid": "N3_DPU3033_HW_TC020303_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC020303_PV",
      "tagdesc": "#1高加进汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13663,
      "taglogicid": "N3_DPU3033_HW_TC020304_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC020304_PV",
      "tagdesc": "#1高压加热器温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13664,
      "taglogicid": "N3_DPU3033_HW_TC020305_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC020305_PV",
      "tagdesc": "#1高压加热器给水进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13665,
      "taglogicid": "N3_DPU3033_HW_TC020306_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC020306_PV",
      "tagdesc": "#1高压加热器给水出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13668,
      "taglogicid": "N3_DPU3033_HW_TC020401_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC020401_PV",
      "tagdesc": "#1高压加热器疏水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13669,
      "taglogicid": "N3_DPU3033_HW_TC020402_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC020402_PV",
      "tagdesc": "#2高压加热器疏水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13670,
      "taglogicid": "N3_DPU3033_HW_TC020403_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC020403_PV",
      "tagdesc": "#3高压加热器疏水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13671,
      "taglogicid": "N3_DPU3033_HW_TC020404_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC020404_PV",
      "tagdesc": "#4高压加热器疏水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13672,
      "taglogicid": "N3_DPU3033_HW_TC020405_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC020405_PV",
      "tagdesc": "#2高压外置式蒸汽冷却器疏水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13673,
      "taglogicid": "N3_DPU3033_HW_TC020406_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC020406_PV",
      "tagdesc": "#4高压外置式蒸汽冷却器疏水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13676,
      "taglogicid": "N3_DPU3033_HW_TC020501_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC020501_PV",
      "tagdesc": "#2高加外置式蒸汽冷却器进汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13677,
      "taglogicid": "N3_DPU3033_HW_TC020502_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC020502_PV",
      "tagdesc": "#2高压外置式蒸汽冷却器温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13678,
      "taglogicid": "N3_DPU3033_HW_TC020503_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC020503_PV",
      "tagdesc": "#2高压外置式蒸汽冷却器温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13679,
      "taglogicid": "N3_DPU3033_HW_TC020504_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC020504_PV",
      "tagdesc": "#2高压外置蒸汽冷却器给水进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13680,
      "taglogicid": "N3_DPU3033_HW_TC020505_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC020505_PV",
      "tagdesc": "#2高压外置蒸汽冷却器给水出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13732,
      "taglogicid": "N3_DPU3033_HW_TC030303_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC030303_PV",
      "tagdesc": "#2高加进汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13733,
      "taglogicid": "N3_DPU3033_HW_TC030304_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC030304_PV",
      "tagdesc": "#2高压加热器温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13734,
      "taglogicid": "N3_DPU3033_HW_TC030305_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC030305_PV",
      "tagdesc": "#2高压加热器给水进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13735,
      "taglogicid": "N3_DPU3033_HW_TC030306_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC030306_PV",
      "tagdesc": "#2高压加热器给水出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13738,
      "taglogicid": "N3_DPU3033_HW_TC030401_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC030401_PV",
      "tagdesc": "一抽管道止回阀后疏水阀1阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13739,
      "taglogicid": "N3_DPU3033_HW_TC030402_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC030402_PV",
      "tagdesc": "二抽管道止回阀后疏水阀1阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13740,
      "taglogicid": "N3_DPU3033_HW_TC030403_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC030403_PV",
      "tagdesc": "三抽管道止回阀后疏水阀1阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13741,
      "taglogicid": "N3_DPU3033_HW_TC030404_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC030404_PV",
      "tagdesc": "四抽管道止回阀后疏水阀1阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13742,
      "taglogicid": "N3_DPU3033_HW_TC030405_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC030405_PV",
      "tagdesc": "二抽#2高加外置冷却器后疏水后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13743,
      "taglogicid": "N3_DPU3033_HW_TC030406_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC030406_PV",
      "tagdesc": "四抽气动止回阀后气动疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13746,
      "taglogicid": "N3_DPU3033_HW_TC030501_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC030501_PV",
      "tagdesc": "#3机至#4机邻机加热调阀前蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13747,
      "taglogicid": "N3_DPU3033_HW_TC030502_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC030502_PV",
      "tagdesc": "#3机至#4机邻机加热调阀后蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13748,
      "taglogicid": "N3_DPU3033_HW_TC030503_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC030503_PV",
      "tagdesc": "#3至#4机邻机加热调阀前疏水后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13749,
      "taglogicid": "N3_DPU3033_HW_TC030504_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC030504_PV",
      "tagdesc": "一级抽汽管道止回阀前疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13750,
      "taglogicid": "N3_DPU3033_HW_TC030505_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC030505_PV",
      "tagdesc": "二级抽汽管道止回阀前疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13751,
      "taglogicid": "N3_DPU3033_HW_TC030506_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC030506_PV",
      "tagdesc": "二级抽汽管道止回阀后疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13804,
      "taglogicid": "N3_DPU3033_HW_TC040303_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC040303_PV",
      "tagdesc": "#3高压加热器进汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13805,
      "taglogicid": "N3_DPU3033_HW_TC040304_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC040304_PV",
      "tagdesc": "#3高压加热器温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13806,
      "taglogicid": "N3_DPU3033_HW_TC040305_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC040305_PV",
      "tagdesc": "#3高压加热器给水进口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13807,
      "taglogicid": "N3_DPU3033_HW_TC040306_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC040306_PV",
      "tagdesc": "#3高压加热器给水出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13810,
      "taglogicid": "N3_DPU3033_HW_TC040401_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC040401_PV",
      "tagdesc": "一抽管道止回阀后疏水阀1阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13811,
      "taglogicid": "N3_DPU3033_HW_TC040402_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC040402_PV",
      "tagdesc": "二抽管道止回阀后疏水阀2阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13812,
      "taglogicid": "N3_DPU3033_HW_TC040403_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC040403_PV",
      "tagdesc": "二抽管道止回阀后疏水阀3阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13813,
      "taglogicid": "N3_DPU3033_HW_TC040404_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC040404_PV",
      "tagdesc": "三抽管道止回阀后疏水阀1阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13814,
      "taglogicid": "N3_DPU3033_HW_TC040405_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC040405_PV",
      "tagdesc": "四抽管道止回阀后疏水阀2阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13815,
      "taglogicid": "N3_DPU3033_HW_TC040406_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC040406_PV",
      "tagdesc": "四抽管道止回阀后疏水阀3阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13818,
      "taglogicid": "N3_DPU3033_HW_TC040501_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC040501_PV",
      "tagdesc": "一次低温再热止回阀前疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13819,
      "taglogicid": "N3_DPU3033_HW_TC040502_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC040502_PV",
      "tagdesc": "左二次冷再热逆止阀前疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13820,
      "taglogicid": "N3_DPU3033_HW_TC040503_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC040503_PV",
      "tagdesc": "右二次冷再热逆止阀前疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13821,
      "taglogicid": "N3_DPU3033_HW_TC040504_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC040504_PV",
      "tagdesc": "三级抽汽管道止回阀前疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 13822,
      "taglogicid": "N3_DPU3033_HW_TC040505_PV",
      "tagid": "BHG_UNIT3_DPU3033_HW_TC040505_PV",
      "tagdesc": "四级抽汽管道止回阀前疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14251,
      "taglogicid": "N3_DPU3034_HW_DI040502_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_DI040502_PV",
      "tagdesc": "二次再热蒸汽左/右侧样水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14252,
      "taglogicid": "N3_DPU3034_HW_DI040503_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_DI040503_PV",
      "tagdesc": "启动分离器排水样水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14254,
      "taglogicid": "N3_DPU3034_HW_DI040505_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_DI040505_PV",
      "tagdesc": "启动分离器排汽样水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14256,
      "taglogicid": "N3_DPU3034_HW_DI040507_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_DI040507_PV",
      "tagdesc": "精处理出口母管加药点前样水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14258,
      "taglogicid": "N3_DPU3034_HW_DI040509_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_DI040509_PV",
      "tagdesc": "精处理出口母管加药点后样水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14260,
      "taglogicid": "N3_DPU3034_HW_DI040511_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_DI040511_PV",
      "tagdesc": "1号高速混床出口样水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14262,
      "taglogicid": "N3_DPU3034_HW_DI040513_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_DI040513_PV",
      "tagdesc": "2号高速混床出口样水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14274,
      "taglogicid": "N3_DPU3034_HW_RT050201_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_RT050201_PV",
      "tagdesc": "除氧器温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14275,
      "taglogicid": "N3_DPU3034_HW_RT050202_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_RT050202_PV",
      "tagdesc": "除氧器温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14276,
      "taglogicid": "N3_DPU3034_HW_RT050203_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_RT050203_PV",
      "tagdesc": "汽封冷却器进水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14277,
      "taglogicid": "N3_DPU3034_HW_RT050204_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_RT050204_PV",
      "tagdesc": "汽封冷却器出水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14278,
      "taglogicid": "N3_DPU3034_HW_RT050205_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_RT050205_PV",
      "tagdesc": "除氧器入口凝结水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14281,
      "taglogicid": "N3_DPU3034_HW_RT050208_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_RT050208_PV",
      "tagdesc": "DPU3034机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14299,
      "taglogicid": "N3_DPU3034_HW_DI050402_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_DI050402_PV",
      "tagdesc": "凝结水泵出口样水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14301,
      "taglogicid": "N3_DPU3034_HW_DI050404_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_DI050404_PV",
      "tagdesc": "除氧器入口样水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14303,
      "taglogicid": "N3_DPU3034_HW_DI050406_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_DI050406_PV",
      "tagdesc": "除氧器出口样水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14315,
      "taglogicid": "N3_DPU3034_HW_DI050502_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_DI050502_PV",
      "tagdesc": "4号高压加热器疏水样水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14316,
      "taglogicid": "N3_DPU3034_HW_DI050503_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_DI050503_PV",
      "tagdesc": "低压加热器疏水泵出口管样水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14318,
      "taglogicid": "N3_DPU3034_HW_DI050505_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_DI050505_PV",
      "tagdesc": "暖风器疏水样水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14320,
      "taglogicid": "N3_DPU3034_HW_DI050507_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_DI050507_PV",
      "tagdesc": "发电机内冷水样水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14322,
      "taglogicid": "N3_DPU3034_HW_DI050509_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_DI050509_PV",
      "tagdesc": "闭式冷却水样水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14324,
      "taglogicid": "N3_DPU3034_HW_DI050511_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_DI050511_PV",
      "tagdesc": "3号高速混床出口样水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14326,
      "taglogicid": "N3_DPU3034_HW_DI050513_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_DI050513_PV",
      "tagdesc": "4号高速混床出口样水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14371,
      "taglogicid": "N3_DPU3034_HW_DI060402_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_DI060402_PV",
      "tagdesc": "省煤器入口样水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14373,
      "taglogicid": "N3_DPU3034_HW_DI060404_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_DI060404_PV",
      "tagdesc": "主蒸汽左/右侧样水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14375,
      "taglogicid": "N3_DPU3034_HW_DI060406_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_DI060406_PV",
      "tagdesc": "一次再热蒸汽左/右侧样水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14410,
      "taglogicid": "N3_DPU3034_HW_TC070201_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_TC070201_PV",
      "tagdesc": "辅汽联箱温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14411,
      "taglogicid": "N3_DPU3034_HW_TC070202_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_TC070202_PV",
      "tagdesc": "五抽逆止阀后管道底部温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14412,
      "taglogicid": "N3_DPU3034_HW_TC070203_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_TC070203_PV",
      "tagdesc": "除氧器进汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14413,
      "taglogicid": "N3_DPU3034_HW_TC070204_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_TC070204_PV",
      "tagdesc": "辅汽至大机轴封减温装置后蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14414,
      "taglogicid": "N3_DPU3034_HW_TC070205_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_TC070205_PV",
      "tagdesc": "五抽至辅汽减温装置后蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14415,
      "taglogicid": "N3_DPU3034_HW_TC070206_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_TC070206_PV",
      "tagdesc": "冷段至辅汽减温装置后蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14458,
      "taglogicid": "N3_DPU3034_HW_TC080201_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_TC080201_PV",
      "tagdesc": "辅汽联箱温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14459,
      "taglogicid": "N3_DPU3034_HW_TC080202_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_TC080202_PV",
      "tagdesc": "辅汽至制粉灭火减温装置后蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14460,
      "taglogicid": "N3_DPU3034_HW_TC080203_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_TC080203_PV",
      "tagdesc": "五抽至辅汽联箱管道疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14461,
      "taglogicid": "N3_DPU3034_HW_TC080204_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_TC080204_PV",
      "tagdesc": "冷段至辅汽阀前管道疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14462,
      "taglogicid": "N3_DPU3034_HW_TC080205_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_TC080205_PV",
      "tagdesc": "五级抽汽电动蝶阀前疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14463,
      "taglogicid": "N3_DPU3034_HW_TC080206_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_TC080206_PV",
      "tagdesc": "五级抽汽管道止回阀1前疏水阀温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14506,
      "taglogicid": "N3_DPU3034_HW_TC090201_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_TC090201_PV",
      "tagdesc": "机轴封漏汽及门杆漏汽疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14507,
      "taglogicid": "N3_DPU3034_HW_TC090202_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_TC090202_PV",
      "tagdesc": "汽封漏汽至中低压连通管疏水后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14508,
      "taglogicid": "N3_DPU3034_HW_TC090203_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_TC090203_PV",
      "tagdesc": "轴封供汽母管溢流阀前疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14509,
      "taglogicid": "N3_DPU3034_HW_TC090204_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_TC090204_PV",
      "tagdesc": "五级抽汽管道止回阀2前疏水阀温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14510,
      "taglogicid": "N3_DPU3034_HW_TC090205_PV",
      "tagid": "BHG_UNIT3_DPU3034_HW_TC090205_PV",
      "tagdesc": "汽轮机轴封供汽管道疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14602,
      "taglogicid": "N3_DPU3035_HW_RT010301_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT010301_PV",
      "tagdesc": "#6低压加热器进水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14603,
      "taglogicid": "N3_DPU3035_HW_RT010302_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT010302_PV",
      "tagdesc": "#7低压加热器进水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14604,
      "taglogicid": "N3_DPU3035_HW_RT010303_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT010303_PV",
      "tagdesc": "#8低压加热器进水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14605,
      "taglogicid": "N3_DPU3035_HW_RT010304_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT010304_PV",
      "tagdesc": "#9低压加热器进水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14606,
      "taglogicid": "N3_DPU3035_HW_RT010305_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT010305_PV",
      "tagdesc": "#10低压加热器进水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14609,
      "taglogicid": "N3_DPU3035_HW_RT010308_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT010308_PV",
      "tagdesc": "DPU3035机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14610,
      "taglogicid": "N3_DPU3035_HW_RT010401_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT010401_PV",
      "tagdesc": "A低加疏水泵电机轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14611,
      "taglogicid": "N3_DPU3035_HW_RT010402_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT010402_PV",
      "tagdesc": "A低加疏水泵轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14612,
      "taglogicid": "N3_DPU3035_HW_RT010403_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT010403_PV",
      "tagdesc": "B低加疏水泵电机轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14613,
      "taglogicid": "N3_DPU3035_HW_RT010404_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT010404_PV",
      "tagdesc": "B低加疏水泵轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14664,
      "taglogicid": "N3_DPU3035_HW_RT020301_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT020301_PV",
      "tagdesc": "#6低压加热器出水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14665,
      "taglogicid": "N3_DPU3035_HW_RT020302_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT020302_PV",
      "tagdesc": "#7低压加热器出水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14666,
      "taglogicid": "N3_DPU3035_HW_RT020303_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT020303_PV",
      "tagdesc": "#8低压加热器出水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14667,
      "taglogicid": "N3_DPU3035_HW_RT020304_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT020304_PV",
      "tagdesc": "#9低压加热器出水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14668,
      "taglogicid": "N3_DPU3035_HW_RT020305_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT020305_PV",
      "tagdesc": "#10低压加热器出水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14673,
      "taglogicid": "N3_DPU3035_HW_TC020402_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC020402_PV",
      "tagdesc": "六级抽汽管道气动疏水阀1阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14674,
      "taglogicid": "N3_DPU3035_HW_TC020403_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC020403_PV",
      "tagdesc": "六级抽汽管道止回阀前疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14675,
      "taglogicid": "N3_DPU3035_HW_TC020404_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC020404_PV",
      "tagdesc": "八抽管道止回阀1阀后疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14676,
      "taglogicid": "N3_DPU3035_HW_TC020405_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC020405_PV",
      "tagdesc": "#10低压加热器进汽温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14726,
      "taglogicid": "N3_DPU3035_HW_RT030301_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT030301_PV",
      "tagdesc": "#6低压加热器疏水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14727,
      "taglogicid": "N3_DPU3035_HW_RT030302_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT030302_PV",
      "tagdesc": "#7低压加热器疏水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14728,
      "taglogicid": "N3_DPU3035_HW_RT030303_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT030303_PV",
      "tagdesc": "#8低压加热器疏水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14729,
      "taglogicid": "N3_DPU3035_HW_RT030304_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT030304_PV",
      "tagdesc": "#9低压加热器疏水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14730,
      "taglogicid": "N3_DPU3035_HW_RT030305_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT030305_PV",
      "tagdesc": "#10低压加热器疏水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14735,
      "taglogicid": "N3_DPU3035_HW_TC030402_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC030402_PV",
      "tagdesc": "七抽逆止阀后管道底部温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14736,
      "taglogicid": "N3_DPU3035_HW_TC030403_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC030403_PV",
      "tagdesc": "六级抽汽管道气动疏水阀2阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14737,
      "taglogicid": "N3_DPU3035_HW_TC030404_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC030404_PV",
      "tagdesc": "七抽管道止回阀后疏水阀1阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14738,
      "taglogicid": "N3_DPU3035_HW_TC030405_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC030405_PV",
      "tagdesc": "八抽管道止回阀2阀后疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14739,
      "taglogicid": "N3_DPU3035_HW_TC030406_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC030406_PV",
      "tagdesc": "#10低压加热器进汽温度4",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14774,
      "taglogicid": "N3_DPU3035_HW_RT040301_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT040301_PV",
      "tagdesc": "A低加疏水泵电机定子U相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14775,
      "taglogicid": "N3_DPU3035_HW_RT040302_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT040302_PV",
      "tagdesc": "A低加疏水泵电机定子V相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14776,
      "taglogicid": "N3_DPU3035_HW_RT040303_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT040303_PV",
      "tagdesc": "A低加疏水泵电机定子W相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14777,
      "taglogicid": "N3_DPU3035_HW_RT040304_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT040304_PV",
      "tagdesc": "B低加疏水泵电机定子U相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14778,
      "taglogicid": "N3_DPU3035_HW_RT040305_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT040305_PV",
      "tagdesc": "B低加疏水泵电机定子V相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14779,
      "taglogicid": "N3_DPU3035_HW_RT040306_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT040306_PV",
      "tagdesc": "B低加疏水泵电机定子W相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14783,
      "taglogicid": "N3_DPU3035_HW_TC040402_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC040402_PV",
      "tagdesc": "八抽逆止阀1后管道底部温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14784,
      "taglogicid": "N3_DPU3035_HW_TC040403_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC040403_PV",
      "tagdesc": "六级抽汽管道气动疏水阀3阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14785,
      "taglogicid": "N3_DPU3035_HW_TC040404_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC040404_PV",
      "tagdesc": "七抽管道止回阀后疏水阀2阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14786,
      "taglogicid": "N3_DPU3035_HW_TC040405_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC040405_PV",
      "tagdesc": "八抽管道止回阀前疏水阀1阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14787,
      "taglogicid": "N3_DPU3035_HW_TC040406_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC040406_PV",
      "tagdesc": "八抽电动蝶阀1阀后疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14822,
      "taglogicid": "N3_DPU3035_HW_RT050301_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT050301_PV",
      "tagdesc": "A低加疏水泵电机定子U相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14823,
      "taglogicid": "N3_DPU3035_HW_RT050302_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT050302_PV",
      "tagdesc": "A低加疏水泵电机定子V相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14824,
      "taglogicid": "N3_DPU3035_HW_RT050303_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT050303_PV",
      "tagdesc": "A低加疏水泵电机定子W相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14825,
      "taglogicid": "N3_DPU3035_HW_RT050304_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT050304_PV",
      "tagdesc": "B低加疏水泵电机定子U相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14826,
      "taglogicid": "N3_DPU3035_HW_RT050305_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT050305_PV",
      "tagdesc": "B低加疏水泵电机定子V相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14827,
      "taglogicid": "N3_DPU3035_HW_RT050306_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT050306_PV",
      "tagdesc": "B低加疏水泵电机定子W相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14831,
      "taglogicid": "N3_DPU3035_HW_TC050402_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC050402_PV",
      "tagdesc": "八抽逆止阀2后管道底部温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14832,
      "taglogicid": "N3_DPU3035_HW_TC050403_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC050403_PV",
      "tagdesc": "#9低压加热器进汽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14833,
      "taglogicid": "N3_DPU3035_HW_TC050404_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC050404_PV",
      "tagdesc": "#10低压加热器进汽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14834,
      "taglogicid": "N3_DPU3035_HW_TC050405_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC050405_PV",
      "tagdesc": "七级抽汽管道止回阀前疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14835,
      "taglogicid": "N3_DPU3035_HW_TC050406_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC050406_PV",
      "tagdesc": "八抽管道止回阀前疏水阀2阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14870,
      "taglogicid": "N3_DPU3035_HW_RT060301_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT060301_PV",
      "tagdesc": "A低加疏水泵电机轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14871,
      "taglogicid": "N3_DPU3035_HW_RT060302_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT060302_PV",
      "tagdesc": "A低加疏水泵轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14872,
      "taglogicid": "N3_DPU3035_HW_RT060303_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT060303_PV",
      "tagdesc": "B低加疏水泵电机轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14873,
      "taglogicid": "N3_DPU3035_HW_RT060304_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_RT060304_PV",
      "tagdesc": "B低加疏水泵轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14878,
      "taglogicid": "N3_DPU3035_HW_TC060401_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC060401_PV",
      "tagdesc": "#7低压加热器进汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14879,
      "taglogicid": "N3_DPU3035_HW_TC060402_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC060402_PV",
      "tagdesc": "#8低压加热器进汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14880,
      "taglogicid": "N3_DPU3035_HW_TC060403_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC060403_PV",
      "tagdesc": "#9低压加热器进汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14881,
      "taglogicid": "N3_DPU3035_HW_TC060404_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC060404_PV",
      "tagdesc": "#10低压加热器进汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14882,
      "taglogicid": "N3_DPU3035_HW_TC060405_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC060405_PV",
      "tagdesc": "八抽电动蝶阀2阀后疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 14883,
      "taglogicid": "N3_DPU3035_HW_TC060406_PV",
      "tagid": "BHG_UNIT3_DPU3035_HW_TC060406_PV",
      "tagdesc": "#6低压加热器进汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15121,
      "taglogicid": "N3_DPU3035_SH0200_BALM5_PV",
      "tagid": "BHG_UNIT3_DPU3035_SH0200_BALM5_PV",
      "tagdesc": "A低加疏水泵温度正常",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15136,
      "taglogicid": "N3_DPU3035_SH0207_BALM5_PV",
      "tagid": "BHG_UNIT3_DPU3035_SH0207_BALM5_PV",
      "tagdesc": "A低加疏水泵轴承温度高高",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15153,
      "taglogicid": "N3_DPU3035_SH0227_BALM5_PV",
      "tagid": "BHG_UNIT3_DPU3035_SH0227_BALM5_PV",
      "tagdesc": "B低加疏水泵温度正常",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15168,
      "taglogicid": "N3_DPU3035_SH0234_BALM5_PV",
      "tagid": "BHG_UNIT3_DPU3035_SH0234_BALM5_PV",
      "tagdesc": "B低加疏水泵轴承温度高高",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15226,
      "taglogicid": "N3_DPU3036_HW_RT010201_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT010201_PV",
      "tagdesc": "A凝汽器(LP)温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15227,
      "taglogicid": "N3_DPU3036_HW_RT010202_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT010202_PV",
      "tagdesc": "A凝结水泵电机U相绕组温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15228,
      "taglogicid": "N3_DPU3036_HW_RT010203_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT010203_PV",
      "tagdesc": "A凝结水泵电机V相绕组温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15229,
      "taglogicid": "N3_DPU3036_HW_RT010204_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT010204_PV",
      "tagdesc": "A凝结水泵电机W相绕组温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15233,
      "taglogicid": "N3_DPU3036_HW_RT010208_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT010208_PV",
      "tagdesc": "DPU3036机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15290,
      "taglogicid": "N3_DPU3036_HW_RT020201_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT020201_PV",
      "tagdesc": "A凝汽器(LP)温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15291,
      "taglogicid": "N3_DPU3036_HW_RT020202_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT020202_PV",
      "tagdesc": "A凝结水泵电机U相绕组温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15292,
      "taglogicid": "N3_DPU3036_HW_RT020203_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT020203_PV",
      "tagdesc": "A凝结水泵电机V相绕组温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15293,
      "taglogicid": "N3_DPU3036_HW_RT020204_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT020204_PV",
      "tagdesc": "A凝结水泵电机W相绕组温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15338,
      "taglogicid": "N3_DPU3036_HW_RT030201_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT030201_PV",
      "tagdesc": "A凝汽器(LP)温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15339,
      "taglogicid": "N3_DPU3036_HW_RT030202_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT030202_PV",
      "tagdesc": "A凝结水泵冷却水回水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15340,
      "taglogicid": "N3_DPU3036_HW_RT030203_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT030203_PV",
      "tagdesc": "大机真空泵A(50%)电机绕组U相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15341,
      "taglogicid": "N3_DPU3036_HW_RT030204_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT030204_PV",
      "tagdesc": "大机真空泵A(50%)电机绕组V相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15342,
      "taglogicid": "N3_DPU3036_HW_RT030205_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT030205_PV",
      "tagdesc": "大机真空泵A(50%)电机绕组W相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15386,
      "taglogicid": "N3_DPU3036_HW_RT040201_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT040201_PV",
      "tagdesc": "凝汽器热井出水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15387,
      "taglogicid": "N3_DPU3036_HW_RT040202_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT040202_PV",
      "tagdesc": "凝结水泵出口母管温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15388,
      "taglogicid": "N3_DPU3036_HW_RT040203_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT040203_PV",
      "tagdesc": "大机真空泵A(50%)电机绕组U相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15389,
      "taglogicid": "N3_DPU3036_HW_RT040204_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT040204_PV",
      "tagdesc": "大机真空泵A(50%)电机绕组V相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15390,
      "taglogicid": "N3_DPU3036_HW_RT040205_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT040205_PV",
      "tagdesc": "大机真空泵A(50%)电机绕组W相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15434,
      "taglogicid": "N3_DPU3036_HW_RT050201_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT050201_PV",
      "tagdesc": "A凝结水泵推力轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15435,
      "taglogicid": "N3_DPU3036_HW_RT050202_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT050202_PV",
      "tagdesc": "A凝结水泵电机下轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15436,
      "taglogicid": "N3_DPU3036_HW_RT050203_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT050203_PV",
      "tagdesc": "大机真空泵A(50%)电机前轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15437,
      "taglogicid": "N3_DPU3036_HW_RT050204_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT050204_PV",
      "tagdesc": "A凝汽器 (LP)循环水进口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15438,
      "taglogicid": "N3_DPU3036_HW_RT050205_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT050205_PV",
      "tagdesc": "A凝汽器 (LP)循环水出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15439,
      "taglogicid": "N3_DPU3036_HW_RT050206_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT050206_PV",
      "tagdesc": "A凝结水泵电机上轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15482,
      "taglogicid": "N3_DPU3036_HW_RT060201_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT060201_PV",
      "tagdesc": "A凝结水泵推力轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15483,
      "taglogicid": "N3_DPU3036_HW_RT060202_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT060202_PV",
      "tagdesc": "A凝结水泵电机下轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15484,
      "taglogicid": "N3_DPU3036_HW_RT060203_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT060203_PV",
      "tagdesc": "大机真空泵A(50%)电机后轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15485,
      "taglogicid": "N3_DPU3036_HW_RT060204_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT060204_PV",
      "tagdesc": "A凝汽器 (LP)循环水进口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15486,
      "taglogicid": "N3_DPU3036_HW_RT060205_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT060205_PV",
      "tagdesc": "A凝汽器 (LP)循环水出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15487,
      "taglogicid": "N3_DPU3036_HW_RT060206_PV",
      "tagid": "BHG_UNIT3_DPU3036_HW_RT060206_PV",
      "tagdesc": "A凝结水泵电机上轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15524,
      "taglogicid": "N3_DPU3036_SH0024_AALM1_PV",
      "tagid": "BHG_UNIT3_DPU3036_SH0024_AALM1_PV",
      "tagdesc": "A凝汽器(LP)温度选后",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15533,
      "taglogicid": "N3_DPU3036_SH0105_BALM5_PV",
      "tagid": "BHG_UNIT3_DPU3036_SH0105_BALM5_PV",
      "tagdesc": "A凝结水泵温度正常",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15549,
      "taglogicid": "N3_DPU3036_SH0106_BALM5_PV",
      "tagid": "BHG_UNIT3_DPU3036_SH0106_BALM5_PV",
      "tagdesc": "A凝结水泵温度正常",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15564,
      "taglogicid": "N3_DPU3036_SH0114_BALM5_PV",
      "tagid": "BHG_UNIT3_DPU3036_SH0114_BALM5_PV",
      "tagdesc": "A凝结水泵温度高高",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15579,
      "taglogicid": "N3_DPU3036_SH0160_BALM4_PV",
      "tagid": "BHG_UNIT3_DPU3036_SH0160_BALM4_PV",
      "tagdesc": "大机真空泵A电机温度正常",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15692,
      "taglogicid": "N3_DPU3037_HW_RT010201_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT010201_PV",
      "tagdesc": "B凝汽器(HP)温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15693,
      "taglogicid": "N3_DPU3037_HW_RT010202_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT010202_PV",
      "tagdesc": "B凝结水泵电机U相绕组温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15694,
      "taglogicid": "N3_DPU3037_HW_RT010203_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT010203_PV",
      "tagdesc": "B凝结水泵电机V相绕组温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15695,
      "taglogicid": "N3_DPU3037_HW_RT010204_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT010204_PV",
      "tagdesc": "B凝结水泵电机W相绕组温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15696,
      "taglogicid": "N3_DPU3037_HW_RT010205_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT010205_PV",
      "tagdesc": "凝汽器#1疏水立管温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15699,
      "taglogicid": "N3_DPU3037_HW_RT010208_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT010208_PV",
      "tagdesc": "DPU3037机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15764,
      "taglogicid": "N3_DPU3037_HW_RT020201_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT020201_PV",
      "tagdesc": "B凝汽器(HP)温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15765,
      "taglogicid": "N3_DPU3037_HW_RT020202_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT020202_PV",
      "tagdesc": "B凝结水泵电机U相绕组温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15766,
      "taglogicid": "N3_DPU3037_HW_RT020203_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT020203_PV",
      "tagdesc": "B凝结水泵电机V相绕组温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15767,
      "taglogicid": "N3_DPU3037_HW_RT020204_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT020204_PV",
      "tagdesc": "B凝结水泵电机W相绕组温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15768,
      "taglogicid": "N3_DPU3037_HW_RT020205_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT020205_PV",
      "tagdesc": "凝汽器#2疏水立管温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15788,
      "taglogicid": "N3_DPU3037_HW_RT020401_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT020401_PV",
      "tagdesc": "B凝结水泵推力轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15789,
      "taglogicid": "N3_DPU3037_HW_RT020402_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT020402_PV",
      "tagdesc": "B凝结水泵电机下轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15790,
      "taglogicid": "N3_DPU3037_HW_RT020403_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT020403_PV",
      "tagdesc": "大机真空泵C(50%)电机后轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15791,
      "taglogicid": "N3_DPU3037_HW_RT020404_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT020404_PV",
      "tagdesc": "B凝汽器 (HP)循环水出口温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15792,
      "taglogicid": "N3_DPU3037_HW_RT020405_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT020405_PV",
      "tagdesc": "B凝结水泵电机上轴承温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15820,
      "taglogicid": "N3_DPU3037_HW_RT030201_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT030201_PV",
      "tagdesc": "B凝汽器(HP)温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15821,
      "taglogicid": "N3_DPU3037_HW_RT030202_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT030202_PV",
      "tagdesc": "B凝结水泵冷却水回水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15822,
      "taglogicid": "N3_DPU3037_HW_RT030203_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT030203_PV",
      "tagdesc": "大机真空泵C(50%)电机绕组U相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15823,
      "taglogicid": "N3_DPU3037_HW_RT030204_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT030204_PV",
      "tagdesc": "大机真空泵C(50%)电机绕组V相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15824,
      "taglogicid": "N3_DPU3037_HW_RT030205_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT030205_PV",
      "tagdesc": "大机真空泵C(50%)电机绕组W相温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15825,
      "taglogicid": "N3_DPU3037_HW_RT030206_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT030206_PV",
      "tagdesc": "403疏水扩容器温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15868,
      "taglogicid": "N3_DPU3037_HW_RT040201_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT040201_PV",
      "tagdesc": "小机凝汽器热井出水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15869,
      "taglogicid": "N3_DPU3037_HW_RT040202_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT040202_PV",
      "tagdesc": "大机真空泵C(50%)电机绕组U相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15870,
      "taglogicid": "N3_DPU3037_HW_RT040203_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT040203_PV",
      "tagdesc": "大机真空泵C(50%)电机绕组V相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15871,
      "taglogicid": "N3_DPU3037_HW_RT040204_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT040204_PV",
      "tagdesc": "大机真空泵C(50%)电机绕组W相温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15872,
      "taglogicid": "N3_DPU3037_HW_RT040205_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT040205_PV",
      "tagdesc": "主机凝汽器正常补水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15873,
      "taglogicid": "N3_DPU3037_HW_RT040206_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT040206_PV",
      "tagdesc": "203疏水扩容器温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15932,
      "taglogicid": "N3_DPU3037_HW_RT050201_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT050201_PV",
      "tagdesc": "B凝结水泵推力轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15933,
      "taglogicid": "N3_DPU3037_HW_RT050202_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT050202_PV",
      "tagdesc": "B凝结水泵电机下轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15934,
      "taglogicid": "N3_DPU3037_HW_RT050203_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT050203_PV",
      "tagdesc": "大机真空泵C(50%)电机前轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15935,
      "taglogicid": "N3_DPU3037_HW_RT050204_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT050204_PV",
      "tagdesc": "B凝汽器 (HP)循环水出口温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15936,
      "taglogicid": "N3_DPU3037_HW_RT050205_PV",
      "tagid": "BHG_UNIT3_DPU3037_HW_RT050205_PV",
      "tagdesc": "B凝结水泵电机上轴承温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15973,
      "taglogicid": "N3_DPU3037_SH0024_AALM1_PV",
      "tagid": "BHG_UNIT3_DPU3037_SH0024_AALM1_PV",
      "tagdesc": "B凝汽器(HP)温度选后",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15980,
      "taglogicid": "N3_DPU3037_SH0105_BALM5_PV",
      "tagid": "BHG_UNIT3_DPU3037_SH0105_BALM5_PV",
      "tagdesc": "B凝结水泵温度正常",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 15996,
      "taglogicid": "N3_DPU3037_SH0106_BALM5_PV",
      "tagid": "BHG_UNIT3_DPU3037_SH0106_BALM5_PV",
      "tagdesc": "B凝结水泵温度正常",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16011,
      "taglogicid": "N3_DPU3037_SH0114_BALM5_PV",
      "tagid": "BHG_UNIT3_DPU3037_SH0114_BALM5_PV",
      "tagdesc": "B凝结水泵温度高高",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16026,
      "taglogicid": "N3_DPU3037_SH0160_BALM4_PV",
      "tagid": "BHG_UNIT3_DPU3037_SH0160_BALM4_PV",
      "tagdesc": "大机真空泵C电机温度正常",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16161,
      "taglogicid": "N3_DPU3038_HW_RT020301_PV",
      "tagid": "BHG_UNIT3_DPU3038_HW_RT020301_PV",
      "tagdesc": "凝结水进水总管温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16168,
      "taglogicid": "N3_DPU3038_HW_RT020308_PV",
      "tagid": "BHG_UNIT3_DPU3038_HW_RT020308_PV",
      "tagdesc": "DPU3038机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16579,
      "taglogicid": "N3_DPU3039_HW_RT010301_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT010301_PV",
      "tagdesc": "给泵汽机后轴承（负推力）温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16580,
      "taglogicid": "N3_DPU3039_HW_RT010302_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT010302_PV",
      "tagdesc": "汽泵前置泵推力轴承温度（内侧）1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16581,
      "taglogicid": "N3_DPU3039_HW_RT010303_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT010303_PV",
      "tagdesc": "汽动给水泵推力轴承温度（内侧）1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16584,
      "taglogicid": "N3_DPU3039_HW_RT010306_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT010306_PV",
      "tagdesc": "汽泵径向轴承温度（推力侧）1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16585,
      "taglogicid": "N3_DPU3039_HW_RT010307_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT010307_PV",
      "tagdesc": "汽动给水泵泵体上部温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16601,
      "taglogicid": "N3_DPU3039_HW_DI010415_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_DI010415_PV",
      "tagdesc": "汽泵密封水温度调阀（机侧）全开",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16602,
      "taglogicid": "N3_DPU3039_HW_DI010416_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_DI010416_PV",
      "tagdesc": "汽泵密封水温度调阀（机侧）全关",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16620,
      "taglogicid": "N3_DPU3039_HW_AQ020102_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_AQ020102_PV",
      "tagdesc": "汽泵密封水温度调阀（推力侧）指令",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16633,
      "taglogicid": "N3_DPU3039_HW_RT020301_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT020301_PV",
      "tagdesc": "给泵汽机后轴承（负推力）温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16634,
      "taglogicid": "N3_DPU3039_HW_RT020302_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT020302_PV",
      "tagdesc": "汽泵前置泵推力轴承温度（内侧）2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16635,
      "taglogicid": "N3_DPU3039_HW_RT020303_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT020303_PV",
      "tagdesc": "汽动给水泵推力轴承温度（内侧）2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16638,
      "taglogicid": "N3_DPU3039_HW_RT020306_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT020306_PV",
      "tagdesc": "汽泵径向轴承温度（推力侧）2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16639,
      "taglogicid": "N3_DPU3039_HW_RT020307_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT020307_PV",
      "tagdesc": "汽动给水泵泵体下部温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16674,
      "taglogicid": "N3_DPU3039_HW_AQ030102_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_AQ030102_PV",
      "tagdesc": "汽泵密封水温度调阀（机侧）指令",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16679,
      "taglogicid": "N3_DPU3039_HW_RT030201_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT030201_PV",
      "tagdesc": "给泵汽机后轴承（正推力）温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16680,
      "taglogicid": "N3_DPU3039_HW_RT030202_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT030202_PV",
      "tagdesc": "汽泵前置泵推力轴承温度（外侧）1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16681,
      "taglogicid": "N3_DPU3039_HW_RT030203_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT030203_PV",
      "tagdesc": "汽动给水泵推力轴承温度（外侧）1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16682,
      "taglogicid": "N3_DPU3039_HW_RT030204_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT030204_PV",
      "tagdesc": "汽动给水泵入口给水温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16683,
      "taglogicid": "N3_DPU3039_HW_RT030205_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT030205_PV",
      "tagdesc": "给水泵汽轮机凝汽器温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16684,
      "taglogicid": "N3_DPU3039_HW_RT030206_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT030206_PV",
      "tagdesc": "汽泵前置泵入口给水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16687,
      "taglogicid": "N3_DPU3039_HW_RT030301_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT030301_PV",
      "tagdesc": "给泵汽机后轴承（负推力）温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16688,
      "taglogicid": "N3_DPU3039_HW_RT030302_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT030302_PV",
      "tagdesc": "汽泵前置泵推力轴承温度（内侧）3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16689,
      "taglogicid": "N3_DPU3039_HW_RT030303_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT030303_PV",
      "tagdesc": "汽动给水泵推力轴承温度（内侧）3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16690,
      "taglogicid": "N3_DPU3039_HW_RT030304_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT030304_PV",
      "tagdesc": "给泵汽机后轴承（正推力）回油温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16691,
      "taglogicid": "N3_DPU3039_HW_RT030305_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT030305_PV",
      "tagdesc": "汽泵径向轴承温度（汽轮机侧）1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16707,
      "taglogicid": "N3_DPU3039_HW_DI030413_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_DI030413_PV",
      "tagdesc": "汽泵密封水温度调阀（推力侧）全开",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16708,
      "taglogicid": "N3_DPU3039_HW_DI030414_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_DI030414_PV",
      "tagdesc": "汽泵密封水温度调阀（推力侧）全关",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16719,
      "taglogicid": "N3_DPU3039_HW_RT040201_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT040201_PV",
      "tagdesc": "给泵汽机后轴承（正推力）温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16720,
      "taglogicid": "N3_DPU3039_HW_RT040202_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT040202_PV",
      "tagdesc": "汽泵前置泵推力轴承温度（外侧）2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16721,
      "taglogicid": "N3_DPU3039_HW_RT040203_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT040203_PV",
      "tagdesc": "汽动给水泵推力轴承温度（外侧）2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16722,
      "taglogicid": "N3_DPU3039_HW_RT040204_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT040204_PV",
      "tagdesc": "汽动给水泵入口给水温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16723,
      "taglogicid": "N3_DPU3039_HW_RT040205_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT040205_PV",
      "tagdesc": "给水泵汽轮机凝汽器温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16724,
      "taglogicid": "N3_DPU3039_HW_RT040206_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT040206_PV",
      "tagdesc": "汽泵密封水出口温度（推力侧）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16726,
      "taglogicid": "N3_DPU3039_HW_RT040208_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT040208_PV",
      "tagdesc": "DPU3039机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16727,
      "taglogicid": "N3_DPU3039_HW_RT040301_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT040301_PV",
      "tagdesc": "给泵汽机后轴承（负推力）温度4",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16728,
      "taglogicid": "N3_DPU3039_HW_RT040302_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT040302_PV",
      "tagdesc": "给泵汽机盘车端后汽缸排汽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16729,
      "taglogicid": "N3_DPU3039_HW_RT040303_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT040303_PV",
      "tagdesc": "给泵汽机水泵端后汽缸排汽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16732,
      "taglogicid": "N3_DPU3039_HW_RT040306_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT040306_PV",
      "tagdesc": "汽泵径向轴承温度（汽轮机侧）2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16775,
      "taglogicid": "N3_DPU3039_HW_RT050201_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT050201_PV",
      "tagdesc": "给泵汽机后轴承（正推力）温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16776,
      "taglogicid": "N3_DPU3039_HW_RT050202_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT050202_PV",
      "tagdesc": "汽泵前置泵推力轴承温度（外侧）3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16777,
      "taglogicid": "N3_DPU3039_HW_RT050203_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT050203_PV",
      "tagdesc": "汽动给水泵推力轴承温度（外侧）3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16778,
      "taglogicid": "N3_DPU3039_HW_RT050204_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT050204_PV",
      "tagdesc": "给泵汽机后轴承（负推力）回油温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16779,
      "taglogicid": "N3_DPU3039_HW_RT050205_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT050205_PV",
      "tagdesc": "汽泵前置泵密封水温度（推力侧）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16780,
      "taglogicid": "N3_DPU3039_HW_RT050206_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT050206_PV",
      "tagdesc": "汽泵密封水出口温度（汽轮机侧）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16839,
      "taglogicid": "N3_DPU3039_HW_RT060201_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT060201_PV",
      "tagdesc": "给泵汽机后轴承（正推力）温度4",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16840,
      "taglogicid": "N3_DPU3039_HW_RT060202_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT060202_PV",
      "tagdesc": "给泵汽机盘车端后汽缸排汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16841,
      "taglogicid": "N3_DPU3039_HW_RT060203_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT060203_PV",
      "tagdesc": "给泵汽机水泵端后汽缸排汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16844,
      "taglogicid": "N3_DPU3039_HW_RT060206_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT060206_PV",
      "tagdesc": "汽泵前置泵密封水温度（齿轮箱侧）",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16845,
      "taglogicid": "N3_DPU3039_HW_RT060207_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT060207_PV",
      "tagdesc": "给水泵疏水立管排气温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16903,
      "taglogicid": "N3_DPU3039_HW_RT070201_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT070201_PV",
      "tagdesc": "A小机凝结水泵驱动端轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16904,
      "taglogicid": "N3_DPU3039_HW_RT070202_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT070202_PV",
      "tagdesc": "A小机凝结水泵电机驱动端轴承温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16905,
      "taglogicid": "N3_DPU3039_HW_RT070203_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT070203_PV",
      "tagdesc": "A小机凝结水泵电机U相绕组温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16906,
      "taglogicid": "N3_DPU3039_HW_RT070204_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT070204_PV",
      "tagdesc": "A小机凝结水泵电机V相绕组温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16907,
      "taglogicid": "N3_DPU3039_HW_RT070205_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT070205_PV",
      "tagdesc": "A小机凝结水泵电机W相绕组温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16908,
      "taglogicid": "N3_DPU3039_HW_RT070206_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT070206_PV",
      "tagdesc": "给水泵汽轮机冷油器出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16910,
      "taglogicid": "N3_DPU3039_HW_RT070208_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT070208_PV",
      "tagdesc": "DPU3039扩展柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16911,
      "taglogicid": "N3_DPU3039_HW_TC070301_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_TC070301_PV",
      "tagdesc": "汽动给水泵出口给水温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16912,
      "taglogicid": "N3_DPU3039_HW_TC070302_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_TC070302_PV",
      "tagdesc": "给水泵汽轮机汽封供汽母管温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16913,
      "taglogicid": "N3_DPU3039_HW_TC070303_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_TC070303_PV",
      "tagdesc": "给水泵汽轮机主汽阀后疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16914,
      "taglogicid": "N3_DPU3039_HW_TC070304_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_TC070304_PV",
      "tagdesc": "给泵汽机调节汽阀后疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16915,
      "taglogicid": "N3_DPU3039_HW_TC070305_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_TC070305_PV",
      "tagdesc": "给泵汽机导汽管底部疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16943,
      "taglogicid": "N3_DPU3039_HW_RT080201_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT080201_PV",
      "tagdesc": "小机凝结水泵出口母管温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16945,
      "taglogicid": "N3_DPU3039_HW_RT080203_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT080203_PV",
      "tagdesc": "A小机凝结水泵电机V相绕组温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16946,
      "taglogicid": "N3_DPU3039_HW_RT080204_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT080204_PV",
      "tagdesc": "A小机凝结水泵电机U相绕组温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16947,
      "taglogicid": "N3_DPU3039_HW_RT080205_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT080205_PV",
      "tagdesc": "A小机凝结水泵电机W相绕组温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16948,
      "taglogicid": "N3_DPU3039_HW_RT080206_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_RT080206_PV",
      "tagdesc": "除氧器下降管至汽泵前置泵温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16951,
      "taglogicid": "N3_DPU3039_HW_TC080301_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_TC080301_PV",
      "tagdesc": "给水泵汽轮机调节级后蒸汽温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16952,
      "taglogicid": "N3_DPU3039_HW_TC080302_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_TC080302_PV",
      "tagdesc": "给泵汽机前轴承(径向）金属温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16953,
      "taglogicid": "N3_DPU3039_HW_TC080303_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_TC080303_PV",
      "tagdesc": "给泵汽机后轴承（径向）金属温度1",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16954,
      "taglogicid": "N3_DPU3039_HW_TC080304_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_TC080304_PV",
      "tagdesc": "给水泵汽轮机主汽门前蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16955,
      "taglogicid": "N3_DPU3039_HW_TC080305_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_TC080305_PV",
      "tagdesc": "给水泵汽轮机调节级后疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16993,
      "taglogicid": "N3_DPU3039_HW_AI090103_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_AI090103_PV",
      "tagdesc": "汽泵密封水温度调阀（推力侧）位反",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16994,
      "taglogicid": "N3_DPU3039_HW_AI090104_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_AI090104_PV",
      "tagdesc": "汽泵密封水温度调阀（机侧）位反",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 16999,
      "taglogicid": "N3_DPU3039_HW_TC090201_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_TC090201_PV",
      "tagdesc": "给水泵汽轮机调节级后蒸汽温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17000,
      "taglogicid": "N3_DPU3039_HW_TC090202_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_TC090202_PV",
      "tagdesc": "给泵汽机前轴承(径向）金属温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17001,
      "taglogicid": "N3_DPU3039_HW_TC090203_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_TC090203_PV",
      "tagdesc": "给泵汽机后轴承（径向）金属温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17002,
      "taglogicid": "N3_DPU3039_HW_TC090204_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_TC090204_PV",
      "tagdesc": "给水泵汽轮机主汽门后蒸汽温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17003,
      "taglogicid": "N3_DPU3039_HW_TC090205_PV",
      "tagid": "BHG_UNIT3_DPU3039_HW_TC090205_PV",
      "tagdesc": "给泵汽机进汽缸下半疏水阀后温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17032,
      "taglogicid": "N3_DPU3039_SH0101_BALM9_PV",
      "tagid": "BHG_UNIT3_DPU3039_SH0101_BALM9_PV",
      "tagdesc": "给水泵及前置泵密封水温度正常",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17034,
      "taglogicid": "N3_DPU3039_SH0101_BALM10_PV",
      "tagid": "BHG_UNIT3_DPU3039_SH0101_BALM10_PV",
      "tagdesc": "汽动给水泵温度正常",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17047,
      "taglogicid": "N3_DPU3039_SH0115_BALM4_PV",
      "tagid": "BHG_UNIT3_DPU3039_SH0115_BALM4_PV",
      "tagdesc": "汽动给水泵小机排汽温度高",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17048,
      "taglogicid": "N3_DPU3039_SH0115_BALM5_PV",
      "tagid": "BHG_UNIT3_DPU3039_SH0115_BALM5_PV",
      "tagdesc": "汽动给水泵温度保护",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17386,
      "taglogicid": "N3_DPU3007_SH0129_BALM2_PV",
      "tagid": "BHG_UNIT3_DPU3007_SH0129_BALM2_PV",
      "tagdesc": "A密封风机轴承温度合适(启允许)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17418,
      "taglogicid": "N3_DPU3008_SH0129_BALM2_PV",
      "tagid": "BHG_UNIT3_DPU3008_SH0129_BALM2_PV",
      "tagdesc": "B密封风机轴承温度合适(启允许)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17595,
      "taglogicid": "N3_DPU3013_HW_AQ040202_PV",
      "tagid": "BHG_UNIT3_DPU3013_HW_AQ040202_PV",
      "tagdesc": "主蒸汽温度(超(超) 临界)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17596,
      "taglogicid": "N3_DPU3013_HW_AQ040203_PV",
      "tagid": "BHG_UNIT3_DPU3013_HW_AQ040203_PV",
      "tagdesc": "再热蒸汽温度(超(超) 临界)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17612,
      "taglogicid": "N3_DPU3013_HW_AQ060201_PV",
      "tagid": "BHG_UNIT3_DPU3013_HW_AQ060201_PV",
      "tagdesc": "供热温度(超超) 临界)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17614,
      "taglogicid": "N3_DPU3013_HW_AQ060203_PV",
      "tagid": "BHG_UNIT3_DPU3013_HW_AQ060203_PV",
      "tagdesc": "调节级温度(超超) 临界)",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17686,
      "taglogicid": "N3_DPU3023_SH0051_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0051_AALM01_PV",
      "tagdesc": "左墙螺旋水冷壁P01管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17687,
      "taglogicid": "N3_DPU3023_SH0051_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0051_AALM02_PV",
      "tagdesc": "左墙螺旋水冷壁P02管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17688,
      "taglogicid": "N3_DPU3023_SH0051_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0051_AALM03_PV",
      "tagdesc": "左墙螺旋水冷壁P03管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17689,
      "taglogicid": "N3_DPU3023_SH0051_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0051_AALM04_PV",
      "tagdesc": "左墙螺旋水冷壁P04管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17690,
      "taglogicid": "N3_DPU3023_SH0051_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0051_AALM05_PV",
      "tagdesc": "左墙螺旋水冷壁P05管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17691,
      "taglogicid": "N3_DPU3023_SH0051_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0051_AALM08_PV",
      "tagdesc": "左墙螺旋水冷壁P08管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17692,
      "taglogicid": "N3_DPU3023_SH0051_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0051_AALM07_PV",
      "tagdesc": "左墙螺旋水冷壁P07管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17693,
      "taglogicid": "N3_DPU3023_SH0051_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0051_AALM06_PV",
      "tagdesc": "左墙螺旋水冷壁P06管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17694,
      "taglogicid": "N3_DPU3023_SH0051_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0051_AALM09_PV",
      "tagdesc": "左墙螺旋水冷壁P09管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17695,
      "taglogicid": "N3_DPU3023_SH0051_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0051_AALM10_PV",
      "tagdesc": "左墙螺旋水冷壁P10管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17696,
      "taglogicid": "N3_DPU3023_SH0051_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0051_AALM11_PV",
      "tagdesc": "左墙螺旋水冷壁P11管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17697,
      "taglogicid": "N3_DPU3023_SH0051_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0051_AALM12_PV",
      "tagdesc": "左墙螺旋水冷壁P12管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17698,
      "taglogicid": "N3_DPU3023_SH0051_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0051_AALM13_PV",
      "tagdesc": "左墙螺旋水冷壁P13管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17699,
      "taglogicid": "N3_DPU3023_SH0051_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0051_AALM16_PV",
      "tagdesc": "左墙螺旋水冷壁P16管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17700,
      "taglogicid": "N3_DPU3023_SH0051_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0051_AALM15_PV",
      "tagdesc": "左墙螺旋水冷壁P15管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17701,
      "taglogicid": "N3_DPU3023_SH0051_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0051_AALM14_PV",
      "tagdesc": "左墙螺旋水冷壁P14管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17702,
      "taglogicid": "N3_DPU3023_SH0051_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0051_AALM17_PV",
      "tagdesc": "左墙螺旋水冷壁P17管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17703,
      "taglogicid": "N3_DPU3023_SH0051_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0051_AALM18_PV",
      "tagdesc": "左墙螺旋水冷壁P18管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17704,
      "taglogicid": "N3_DPU3023_SH0051_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0051_AALM19_PV",
      "tagdesc": "左墙螺旋水冷壁P19管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17705,
      "taglogicid": "N3_DPU3023_SH0051_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0051_AALM20_PV",
      "tagdesc": "左墙螺旋水冷壁P20管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17706,
      "taglogicid": "N3_DPU3023_SH0051_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0051_AALM21_PV",
      "tagdesc": "左墙螺旋水冷壁P21管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17709,
      "taglogicid": "N3_DPU3023_SH0051_AALM22_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0051_AALM22_PV",
      "tagdesc": "左墙螺旋水冷壁P22管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17710,
      "taglogicid": "N3_DPU3023_SH0052_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0052_AALM01_PV",
      "tagdesc": "左墙螺旋水冷壁P23管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17711,
      "taglogicid": "N3_DPU3023_SH0052_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0052_AALM02_PV",
      "tagdesc": "左墙螺旋水冷壁P24管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17712,
      "taglogicid": "N3_DPU3023_SH0052_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0052_AALM03_PV",
      "tagdesc": "左墙螺旋水冷壁P25管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17713,
      "taglogicid": "N3_DPU3023_SH0052_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0052_AALM04_PV",
      "tagdesc": "左墙螺旋水冷壁P26管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17714,
      "taglogicid": "N3_DPU3023_SH0052_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0052_AALM05_PV",
      "tagdesc": "左墙螺旋水冷壁P27管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17715,
      "taglogicid": "N3_DPU3023_SH0052_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0052_AALM08_PV",
      "tagdesc": "左墙螺旋水冷壁P30管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17716,
      "taglogicid": "N3_DPU3023_SH0052_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0052_AALM07_PV",
      "tagdesc": "左墙螺旋水冷壁P29管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17717,
      "taglogicid": "N3_DPU3023_SH0052_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0052_AALM06_PV",
      "tagdesc": "左墙螺旋水冷壁P28管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17718,
      "taglogicid": "N3_DPU3023_SH0052_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0052_AALM09_PV",
      "tagdesc": "左墙螺旋水冷壁P31管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17719,
      "taglogicid": "N3_DPU3023_SH0052_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0052_AALM10_PV",
      "tagdesc": "左墙螺旋水冷壁P32管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17720,
      "taglogicid": "N3_DPU3023_SH0052_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0052_AALM11_PV",
      "tagdesc": "左墙螺旋水冷壁P33管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17721,
      "taglogicid": "N3_DPU3023_SH0052_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0052_AALM12_PV",
      "tagdesc": "左墙螺旋水冷壁P34管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17722,
      "taglogicid": "N3_DPU3023_SH0052_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0052_AALM13_PV",
      "tagdesc": "左墙螺旋水冷壁P35管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17723,
      "taglogicid": "N3_DPU3023_SH0052_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0052_AALM16_PV",
      "tagdesc": "左墙螺旋水冷壁P38管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17724,
      "taglogicid": "N3_DPU3023_SH0052_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0052_AALM15_PV",
      "tagdesc": "左墙螺旋水冷壁P37管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17725,
      "taglogicid": "N3_DPU3023_SH0052_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0052_AALM14_PV",
      "tagdesc": "左墙螺旋水冷壁P36管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17726,
      "taglogicid": "N3_DPU3023_SH0052_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0052_AALM17_PV",
      "tagdesc": "左墙螺旋水冷壁P39管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17727,
      "taglogicid": "N3_DPU3023_SH0052_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0052_AALM18_PV",
      "tagdesc": "左墙螺旋水冷壁P40管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17728,
      "taglogicid": "N3_DPU3023_SH0052_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0052_AALM19_PV",
      "tagdesc": "左墙螺旋水冷壁P41管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17729,
      "taglogicid": "N3_DPU3023_SH0052_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0052_AALM20_PV",
      "tagdesc": "左墙螺旋水冷壁P42管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17730,
      "taglogicid": "N3_DPU3023_SH0052_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0052_AALM21_PV",
      "tagdesc": "左墙螺旋水冷壁P43管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17733,
      "taglogicid": "N3_DPU3023_SH0052_AALM22_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0052_AALM22_PV",
      "tagdesc": "左墙螺旋水冷壁P44管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17734,
      "taglogicid": "N3_DPU3023_SH0053_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0053_AALM01_PV",
      "tagdesc": "左墙螺旋水冷壁P45管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17735,
      "taglogicid": "N3_DPU3023_SH0053_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0053_AALM02_PV",
      "tagdesc": "左墙螺旋水冷壁P46管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17736,
      "taglogicid": "N3_DPU3023_SH0053_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0053_AALM03_PV",
      "tagdesc": "左墙螺旋水冷壁P47管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17737,
      "taglogicid": "N3_DPU3023_SH0053_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0053_AALM04_PV",
      "tagdesc": "左墙螺旋水冷壁P48管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17738,
      "taglogicid": "N3_DPU3023_SH0053_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0053_AALM05_PV",
      "tagdesc": "左墙螺旋水冷壁P49管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17739,
      "taglogicid": "N3_DPU3023_SH0053_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0053_AALM08_PV",
      "tagdesc": "左墙螺旋水冷壁P52管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17740,
      "taglogicid": "N3_DPU3023_SH0053_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0053_AALM07_PV",
      "tagdesc": "左墙螺旋水冷壁P51管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17741,
      "taglogicid": "N3_DPU3023_SH0053_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0053_AALM06_PV",
      "tagdesc": "左墙螺旋水冷壁P50管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17742,
      "taglogicid": "N3_DPU3023_SH0053_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0053_AALM09_PV",
      "tagdesc": "左墙螺旋水冷壁P53管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17743,
      "taglogicid": "N3_DPU3023_SH0053_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0053_AALM10_PV",
      "tagdesc": "左墙螺旋水冷壁P54管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17744,
      "taglogicid": "N3_DPU3023_SH0053_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0053_AALM11_PV",
      "tagdesc": "左墙螺旋水冷壁P55管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17745,
      "taglogicid": "N3_DPU3023_SH0053_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0053_AALM12_PV",
      "tagdesc": "左墙螺旋水冷壁P56管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17746,
      "taglogicid": "N3_DPU3023_SH0053_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0053_AALM13_PV",
      "tagdesc": "左墙螺旋水冷壁P57管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17747,
      "taglogicid": "N3_DPU3023_SH0053_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0053_AALM16_PV",
      "tagdesc": "左墙螺旋水冷壁P60管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17748,
      "taglogicid": "N3_DPU3023_SH0053_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0053_AALM15_PV",
      "tagdesc": "左墙螺旋水冷壁P59管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17749,
      "taglogicid": "N3_DPU3023_SH0053_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0053_AALM14_PV",
      "tagdesc": "左墙螺旋水冷壁P58管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17750,
      "taglogicid": "N3_DPU3023_SH0053_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0053_AALM17_PV",
      "tagdesc": "左墙螺旋水冷壁P61管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17751,
      "taglogicid": "N3_DPU3023_SH0053_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0053_AALM18_PV",
      "tagdesc": "左墙螺旋水冷壁P62管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17752,
      "taglogicid": "N3_DPU3023_SH0053_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0053_AALM19_PV",
      "tagdesc": "左墙螺旋水冷壁P63管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17753,
      "taglogicid": "N3_DPU3023_SH0053_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0053_AALM20_PV",
      "tagdesc": "左墙螺旋水冷壁P64管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17754,
      "taglogicid": "N3_DPU3023_SH0053_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0053_AALM21_PV",
      "tagdesc": "左墙螺旋水冷壁P65管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17757,
      "taglogicid": "N3_DPU3023_SH0053_AALM22_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0053_AALM22_PV",
      "tagdesc": "左墙螺旋水冷壁P66管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17758,
      "taglogicid": "N3_DPU3023_SH0054_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0054_AALM01_PV",
      "tagdesc": "左墙螺旋水冷壁P67管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17759,
      "taglogicid": "N3_DPU3023_SH0054_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0054_AALM02_PV",
      "tagdesc": "左墙螺旋水冷壁P68管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17760,
      "taglogicid": "N3_DPU3023_SH0054_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0054_AALM03_PV",
      "tagdesc": "左墙螺旋水冷壁P69管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17761,
      "taglogicid": "N3_DPU3023_SH0054_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0054_AALM04_PV",
      "tagdesc": "左墙螺旋水冷壁P70管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17762,
      "taglogicid": "N3_DPU3023_SH0054_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0054_AALM05_PV",
      "tagdesc": "左墙螺旋水冷壁P71管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17763,
      "taglogicid": "N3_DPU3023_SH0054_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0054_AALM08_PV",
      "tagdesc": "左墙螺旋水冷壁P74管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17764,
      "taglogicid": "N3_DPU3023_SH0054_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0054_AALM07_PV",
      "tagdesc": "左墙螺旋水冷壁P73管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17765,
      "taglogicid": "N3_DPU3023_SH0054_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0054_AALM06_PV",
      "tagdesc": "左墙螺旋水冷壁P72管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17766,
      "taglogicid": "N3_DPU3023_SH0054_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0054_AALM09_PV",
      "tagdesc": "左墙螺旋水冷壁P75管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17767,
      "taglogicid": "N3_DPU3023_SH0054_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0054_AALM10_PV",
      "tagdesc": "左墙螺旋水冷壁P76管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17768,
      "taglogicid": "N3_DPU3023_SH0054_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0054_AALM11_PV",
      "tagdesc": "左墙螺旋水冷壁P77管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17769,
      "taglogicid": "N3_DPU3023_SH0054_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0054_AALM12_PV",
      "tagdesc": "左墙螺旋水冷壁P78管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17770,
      "taglogicid": "N3_DPU3023_SH0054_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0054_AALM13_PV",
      "tagdesc": "左墙螺旋水冷壁P79管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17771,
      "taglogicid": "N3_DPU3023_SH0054_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0054_AALM16_PV",
      "tagdesc": "左墙螺旋水冷壁P82管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17772,
      "taglogicid": "N3_DPU3023_SH0054_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0054_AALM15_PV",
      "tagdesc": "左墙螺旋水冷壁P81管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17773,
      "taglogicid": "N3_DPU3023_SH0054_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0054_AALM14_PV",
      "tagdesc": "左墙螺旋水冷壁P80管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17774,
      "taglogicid": "N3_DPU3023_SH0054_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0054_AALM17_PV",
      "tagdesc": "左墙螺旋水冷壁P83管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17775,
      "taglogicid": "N3_DPU3023_SH0054_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0054_AALM18_PV",
      "tagdesc": "左墙螺旋水冷壁P84管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17776,
      "taglogicid": "N3_DPU3023_SH0054_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0054_AALM19_PV",
      "tagdesc": "左墙螺旋水冷壁P85管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17777,
      "taglogicid": "N3_DPU3023_SH0054_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0054_AALM20_PV",
      "tagdesc": "左墙螺旋水冷壁P86管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17778,
      "taglogicid": "N3_DPU3023_SH0054_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0054_AALM21_PV",
      "tagdesc": "左墙螺旋水冷壁P87管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17781,
      "taglogicid": "N3_DPU3023_SH0054_AALM22_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0054_AALM22_PV",
      "tagdesc": "左墙螺旋水冷壁P88管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17782,
      "taglogicid": "N3_DPU3023_SH0055_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0055_AALM01_PV",
      "tagdesc": "左墙螺旋水冷壁P89管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17783,
      "taglogicid": "N3_DPU3023_SH0055_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0055_AALM02_PV",
      "tagdesc": "左墙螺旋水冷壁P90管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17784,
      "taglogicid": "N3_DPU3023_SH0055_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0055_AALM03_PV",
      "tagdesc": "左墙螺旋水冷壁P91管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17785,
      "taglogicid": "N3_DPU3023_SH0055_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0055_AALM04_PV",
      "tagdesc": "左墙螺旋水冷壁P92管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17786,
      "taglogicid": "N3_DPU3023_SH0055_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0055_AALM05_PV",
      "tagdesc": "左墙螺旋水冷壁P93管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17787,
      "taglogicid": "N3_DPU3023_SH0055_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0055_AALM08_PV",
      "tagdesc": "左墙螺旋水冷壁P96管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17788,
      "taglogicid": "N3_DPU3023_SH0055_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0055_AALM07_PV",
      "tagdesc": "左墙螺旋水冷壁P95管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17789,
      "taglogicid": "N3_DPU3023_SH0055_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0055_AALM06_PV",
      "tagdesc": "左墙螺旋水冷壁P94管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17790,
      "taglogicid": "N3_DPU3023_SH0055_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0055_AALM09_PV",
      "tagdesc": "左墙螺旋水冷壁P97管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17791,
      "taglogicid": "N3_DPU3023_SH0055_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0055_AALM10_PV",
      "tagdesc": "左墙螺旋水冷壁P98管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17792,
      "taglogicid": "N3_DPU3023_SH0055_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0055_AALM11_PV",
      "tagdesc": "左墙螺旋水冷壁P99管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17793,
      "taglogicid": "N3_DPU3023_SH0055_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0055_AALM12_PV",
      "tagdesc": "左墙螺旋水冷壁P100管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17794,
      "taglogicid": "N3_DPU3023_SH0055_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0055_AALM13_PV",
      "tagdesc": "左墙螺旋水冷壁P101管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17795,
      "taglogicid": "N3_DPU3023_SH0055_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0055_AALM16_PV",
      "tagdesc": "左墙螺旋水冷壁P104管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17796,
      "taglogicid": "N3_DPU3023_SH0055_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0055_AALM15_PV",
      "tagdesc": "左墙螺旋水冷壁P103管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17797,
      "taglogicid": "N3_DPU3023_SH0055_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0055_AALM14_PV",
      "tagdesc": "左墙螺旋水冷壁P102管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17798,
      "taglogicid": "N3_DPU3023_SH0055_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0055_AALM17_PV",
      "tagdesc": "左墙螺旋水冷壁P105管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17799,
      "taglogicid": "N3_DPU3023_SH0055_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0055_AALM18_PV",
      "tagdesc": "左墙螺旋水冷壁P106管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17800,
      "taglogicid": "N3_DPU3023_SH0055_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0055_AALM19_PV",
      "tagdesc": "左墙螺旋水冷壁P107管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17801,
      "taglogicid": "N3_DPU3023_SH0055_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0055_AALM20_PV",
      "tagdesc": "左墙螺旋水冷壁P108管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17802,
      "taglogicid": "N3_DPU3023_SH0055_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0055_AALM21_PV",
      "tagdesc": "左墙螺旋水冷壁P109管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17805,
      "taglogicid": "N3_DPU3023_SH0055_AALM22_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0055_AALM22_PV",
      "tagdesc": "左墙螺旋水冷壁P110管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17806,
      "taglogicid": "N3_DPU3023_SH0056_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0056_AALM01_PV",
      "tagdesc": "左墙螺旋水冷壁P111管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17807,
      "taglogicid": "N3_DPU3023_SH0056_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0056_AALM02_PV",
      "tagdesc": "左墙螺旋水冷壁P112管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17808,
      "taglogicid": "N3_DPU3023_SH0056_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0056_AALM03_PV",
      "tagdesc": "左墙螺旋水冷壁P113管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17809,
      "taglogicid": "N3_DPU3023_SH0056_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0056_AALM04_PV",
      "tagdesc": "左墙螺旋水冷壁P114管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17810,
      "taglogicid": "N3_DPU3023_SH0056_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0056_AALM05_PV",
      "tagdesc": "左墙螺旋水冷壁P115管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17811,
      "taglogicid": "N3_DPU3023_SH0056_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0056_AALM08_PV",
      "tagdesc": "左墙螺旋水冷壁P118管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17812,
      "taglogicid": "N3_DPU3023_SH0056_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0056_AALM07_PV",
      "tagdesc": "左墙螺旋水冷壁P117管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17813,
      "taglogicid": "N3_DPU3023_SH0056_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0056_AALM06_PV",
      "tagdesc": "左墙螺旋水冷壁P116管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17814,
      "taglogicid": "N3_DPU3023_SH0056_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0056_AALM09_PV",
      "tagdesc": "左墙螺旋水冷壁P119管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17815,
      "taglogicid": "N3_DPU3023_SH0056_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0056_AALM10_PV",
      "tagdesc": "左墙螺旋水冷壁P120管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17816,
      "taglogicid": "N3_DPU3023_SH0056_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0056_AALM11_PV",
      "tagdesc": "左墙螺旋水冷壁P121管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17817,
      "taglogicid": "N3_DPU3023_SH0056_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0056_AALM12_PV",
      "tagdesc": "左墙螺旋水冷壁P122管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17818,
      "taglogicid": "N3_DPU3023_SH0056_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0056_AALM13_PV",
      "tagdesc": "左墙螺旋水冷壁P123管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17819,
      "taglogicid": "N3_DPU3023_SH0056_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0056_AALM16_PV",
      "tagdesc": "左墙螺旋水冷壁P126管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17820,
      "taglogicid": "N3_DPU3023_SH0056_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0056_AALM15_PV",
      "tagdesc": "左墙螺旋水冷壁P125管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17821,
      "taglogicid": "N3_DPU3023_SH0056_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0056_AALM14_PV",
      "tagdesc": "左墙螺旋水冷壁P124管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17822,
      "taglogicid": "N3_DPU3023_SH0056_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0056_AALM17_PV",
      "tagdesc": "左墙螺旋水冷壁P127管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17823,
      "taglogicid": "N3_DPU3023_SH0056_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0056_AALM18_PV",
      "tagdesc": "左墙螺旋水冷壁P128管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17824,
      "taglogicid": "N3_DPU3023_SH0056_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0056_AALM19_PV",
      "tagdesc": "左墙螺旋水冷壁P129管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17825,
      "taglogicid": "N3_DPU3023_SH0056_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0056_AALM20_PV",
      "tagdesc": "左墙螺旋水冷壁P130管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17830,
      "taglogicid": "N3_DPU3023_SH0057_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0057_AALM01_PV",
      "tagdesc": "左墙螺旋水冷壁P131管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17831,
      "taglogicid": "N3_DPU3023_SH0057_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0057_AALM02_PV",
      "tagdesc": "左墙螺旋水冷壁P132管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17832,
      "taglogicid": "N3_DPU3023_SH0057_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0057_AALM03_PV",
      "tagdesc": "左墙螺旋水冷壁P133管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17833,
      "taglogicid": "N3_DPU3023_SH0057_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0057_AALM04_PV",
      "tagdesc": "左墙螺旋水冷壁P134管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17834,
      "taglogicid": "N3_DPU3023_SH0057_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0057_AALM05_PV",
      "tagdesc": "左墙螺旋水冷壁P135管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17835,
      "taglogicid": "N3_DPU3023_SH0057_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0057_AALM08_PV",
      "tagdesc": "左墙螺旋水冷壁P138管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17836,
      "taglogicid": "N3_DPU3023_SH0057_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0057_AALM07_PV",
      "tagdesc": "左墙螺旋水冷壁P137管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17837,
      "taglogicid": "N3_DPU3023_SH0057_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0057_AALM06_PV",
      "tagdesc": "左墙螺旋水冷壁P136管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17838,
      "taglogicid": "N3_DPU3023_SH0057_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0057_AALM09_PV",
      "tagdesc": "左墙螺旋水冷壁P139管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17839,
      "taglogicid": "N3_DPU3023_SH0057_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0057_AALM10_PV",
      "tagdesc": "左墙螺旋水冷壁P140管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17840,
      "taglogicid": "N3_DPU3023_SH0057_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0057_AALM11_PV",
      "tagdesc": "左墙螺旋水冷壁P141管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17841,
      "taglogicid": "N3_DPU3023_SH0057_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0057_AALM12_PV",
      "tagdesc": "左墙螺旋水冷壁P142管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17842,
      "taglogicid": "N3_DPU3023_SH0057_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0057_AALM13_PV",
      "tagdesc": "左墙螺旋水冷壁P143管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17843,
      "taglogicid": "N3_DPU3023_SH0057_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0057_AALM16_PV",
      "tagdesc": "左墙螺旋水冷壁P146管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17844,
      "taglogicid": "N3_DPU3023_SH0057_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0057_AALM15_PV",
      "tagdesc": "左墙螺旋水冷壁P145管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17845,
      "taglogicid": "N3_DPU3023_SH0057_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0057_AALM14_PV",
      "tagdesc": "左墙螺旋水冷壁P144管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17846,
      "taglogicid": "N3_DPU3023_SH0057_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0057_AALM17_PV",
      "tagdesc": "左墙螺旋水冷壁P147管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17847,
      "taglogicid": "N3_DPU3023_SH0057_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0057_AALM18_PV",
      "tagdesc": "左墙螺旋水冷壁P148管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17848,
      "taglogicid": "N3_DPU3023_SH0057_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0057_AALM19_PV",
      "tagdesc": "左墙螺旋水冷壁P149管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17849,
      "taglogicid": "N3_DPU3023_SH0057_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0057_AALM20_PV",
      "tagdesc": "左墙螺旋水冷壁P150管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17850,
      "taglogicid": "N3_DPU3023_SH0057_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0057_AALM21_PV",
      "tagdesc": "左墙螺旋水冷壁P151管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17853,
      "taglogicid": "N3_DPU3023_SH0057_AALM22_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0057_AALM22_PV",
      "tagdesc": "左墙螺旋水冷壁P152管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17854,
      "taglogicid": "N3_DPU3023_SH0058_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0058_AALM01_PV",
      "tagdesc": "左墙螺旋水冷壁P153管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17855,
      "taglogicid": "N3_DPU3023_SH0058_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0058_AALM05_PV",
      "tagdesc": "左墙螺旋水冷壁P157管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17856,
      "taglogicid": "N3_DPU3023_SH0058_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0058_AALM09_PV",
      "tagdesc": "左墙螺旋水冷壁P161管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17857,
      "taglogicid": "N3_DPU3023_SH0058_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0058_AALM02_PV",
      "tagdesc": "左墙螺旋水冷壁P154管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17858,
      "taglogicid": "N3_DPU3023_SH0058_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0058_AALM13_PV",
      "tagdesc": "左墙螺旋水冷壁P165管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17859,
      "taglogicid": "N3_DPU3023_SH0058_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0058_AALM06_PV",
      "tagdesc": "左墙螺旋水冷壁P158管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17860,
      "taglogicid": "N3_DPU3023_SH0058_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0058_AALM10_PV",
      "tagdesc": "左墙螺旋水冷壁P162管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17861,
      "taglogicid": "N3_DPU3023_SH0058_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0058_AALM17_PV",
      "tagdesc": "左墙螺旋水冷壁P169管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17862,
      "taglogicid": "N3_DPU3023_SH0058_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0058_AALM03_PV",
      "tagdesc": "左墙螺旋水冷壁P155管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17863,
      "taglogicid": "N3_DPU3023_SH0058_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0058_AALM14_PV",
      "tagdesc": "左墙螺旋水冷壁P166管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17864,
      "taglogicid": "N3_DPU3023_SH0058_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0058_AALM07_PV",
      "tagdesc": "左墙螺旋水冷壁P159管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17865,
      "taglogicid": "N3_DPU3023_SH0058_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0058_AALM21_PV",
      "tagdesc": "左墙螺旋水冷壁P173管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17866,
      "taglogicid": "N3_DPU3023_SH0058_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0058_AALM11_PV",
      "tagdesc": "左墙螺旋水冷壁P163管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17867,
      "taglogicid": "N3_DPU3023_SH0058_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0058_AALM18_PV",
      "tagdesc": "左墙螺旋水冷壁P170管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17868,
      "taglogicid": "N3_DPU3023_SH0058_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0058_AALM04_PV",
      "tagdesc": "左墙螺旋水冷壁P156管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17869,
      "taglogicid": "N3_DPU3023_SH0058_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0058_AALM15_PV",
      "tagdesc": "左墙螺旋水冷壁P167管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17870,
      "taglogicid": "N3_DPU3023_SH0058_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0058_AALM08_PV",
      "tagdesc": "左墙螺旋水冷壁P160管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17872,
      "taglogicid": "N3_DPU3023_SH0058_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0058_AALM12_PV",
      "tagdesc": "左墙螺旋水冷壁P164管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17873,
      "taglogicid": "N3_DPU3023_SH0058_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0058_AALM19_PV",
      "tagdesc": "左墙螺旋水冷壁P171管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17874,
      "taglogicid": "N3_DPU3023_SH0058_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0058_AALM16_PV",
      "tagdesc": "左墙螺旋水冷壁P168管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17876,
      "taglogicid": "N3_DPU3023_SH0058_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0058_AALM20_PV",
      "tagdesc": "左墙螺旋水冷壁P172管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17938,
      "taglogicid": "N3_DPU3023_SH0071_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0071_AALM01_PV",
      "tagdesc": "前墙螺旋水冷壁P01管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17939,
      "taglogicid": "N3_DPU3023_SH0071_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0071_AALM05_PV",
      "tagdesc": "前墙螺旋水冷壁P05管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17940,
      "taglogicid": "N3_DPU3023_SH0071_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0071_AALM09_PV",
      "tagdesc": "前墙螺旋水冷壁P09管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17941,
      "taglogicid": "N3_DPU3023_SH0071_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0071_AALM02_PV",
      "tagdesc": "前墙螺旋水冷壁P02管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17942,
      "taglogicid": "N3_DPU3023_SH0071_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0071_AALM13_PV",
      "tagdesc": "前墙螺旋水冷壁P13管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17943,
      "taglogicid": "N3_DPU3023_SH0071_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0071_AALM06_PV",
      "tagdesc": "前墙螺旋水冷壁P06管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17944,
      "taglogicid": "N3_DPU3023_SH0071_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0071_AALM10_PV",
      "tagdesc": "前墙螺旋水冷壁P10管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17945,
      "taglogicid": "N3_DPU3023_SH0071_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0071_AALM17_PV",
      "tagdesc": "前墙螺旋水冷壁P17管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17946,
      "taglogicid": "N3_DPU3023_SH0071_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0071_AALM03_PV",
      "tagdesc": "前墙螺旋水冷壁P03管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17947,
      "taglogicid": "N3_DPU3023_SH0071_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0071_AALM14_PV",
      "tagdesc": "前墙螺旋水冷壁P14管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17948,
      "taglogicid": "N3_DPU3023_SH0071_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0071_AALM07_PV",
      "tagdesc": "前墙螺旋水冷壁P07管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17949,
      "taglogicid": "N3_DPU3023_SH0071_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0071_AALM21_PV",
      "tagdesc": "前墙螺旋水冷壁P21管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17950,
      "taglogicid": "N3_DPU3023_SH0071_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0071_AALM11_PV",
      "tagdesc": "前墙螺旋水冷壁P11管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17951,
      "taglogicid": "N3_DPU3023_SH0071_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0071_AALM18_PV",
      "tagdesc": "前墙螺旋水冷壁P18管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17952,
      "taglogicid": "N3_DPU3023_SH0071_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0071_AALM04_PV",
      "tagdesc": "前墙螺旋水冷壁P04管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17953,
      "taglogicid": "N3_DPU3023_SH0071_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0071_AALM15_PV",
      "tagdesc": "前墙螺旋水冷壁P15管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17954,
      "taglogicid": "N3_DPU3023_SH0071_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0071_AALM08_PV",
      "tagdesc": "前墙螺旋水冷壁P08管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17955,
      "taglogicid": "N3_DPU3023_SH0071_AALM22_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0071_AALM22_PV",
      "tagdesc": "前墙螺旋水冷壁P22管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17956,
      "taglogicid": "N3_DPU3023_SH0071_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0071_AALM12_PV",
      "tagdesc": "前墙螺旋水冷壁P12管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17957,
      "taglogicid": "N3_DPU3023_SH0071_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0071_AALM19_PV",
      "tagdesc": "前墙螺旋水冷壁P19管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17958,
      "taglogicid": "N3_DPU3023_SH0071_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0071_AALM16_PV",
      "tagdesc": "前墙螺旋水冷壁P16管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17960,
      "taglogicid": "N3_DPU3023_SH0071_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0071_AALM20_PV",
      "tagdesc": "前墙螺旋水冷壁P20管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17962,
      "taglogicid": "N3_DPU3023_SH0072_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0072_AALM01_PV",
      "tagdesc": "前墙螺旋水冷壁P23管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17963,
      "taglogicid": "N3_DPU3023_SH0072_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0072_AALM05_PV",
      "tagdesc": "前墙螺旋水冷壁P27管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17964,
      "taglogicid": "N3_DPU3023_SH0072_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0072_AALM09_PV",
      "tagdesc": "前墙螺旋水冷壁P31管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17965,
      "taglogicid": "N3_DPU3023_SH0072_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0072_AALM02_PV",
      "tagdesc": "前墙螺旋水冷壁P24管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17966,
      "taglogicid": "N3_DPU3023_SH0072_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0072_AALM13_PV",
      "tagdesc": "前墙螺旋水冷壁P35管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17967,
      "taglogicid": "N3_DPU3023_SH0072_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0072_AALM06_PV",
      "tagdesc": "前墙螺旋水冷壁P28管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17968,
      "taglogicid": "N3_DPU3023_SH0072_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0072_AALM10_PV",
      "tagdesc": "前墙螺旋水冷壁P32管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17969,
      "taglogicid": "N3_DPU3023_SH0072_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0072_AALM17_PV",
      "tagdesc": "前墙螺旋水冷壁P39管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17970,
      "taglogicid": "N3_DPU3023_SH0072_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0072_AALM03_PV",
      "tagdesc": "前墙螺旋水冷壁P25管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17971,
      "taglogicid": "N3_DPU3023_SH0072_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0072_AALM14_PV",
      "tagdesc": "前墙螺旋水冷壁P36管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17972,
      "taglogicid": "N3_DPU3023_SH0072_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0072_AALM07_PV",
      "tagdesc": "前墙螺旋水冷壁P29管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17973,
      "taglogicid": "N3_DPU3023_SH0072_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0072_AALM21_PV",
      "tagdesc": "前墙螺旋水冷壁P43管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17974,
      "taglogicid": "N3_DPU3023_SH0072_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0072_AALM11_PV",
      "tagdesc": "前墙螺旋水冷壁P33管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17975,
      "taglogicid": "N3_DPU3023_SH0072_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0072_AALM18_PV",
      "tagdesc": "前墙螺旋水冷壁P40管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17976,
      "taglogicid": "N3_DPU3023_SH0072_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0072_AALM04_PV",
      "tagdesc": "前墙螺旋水冷壁P26管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17977,
      "taglogicid": "N3_DPU3023_SH0072_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0072_AALM15_PV",
      "tagdesc": "前墙螺旋水冷壁P37管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17978,
      "taglogicid": "N3_DPU3023_SH0072_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0072_AALM08_PV",
      "tagdesc": "前墙螺旋水冷壁P30管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17979,
      "taglogicid": "N3_DPU3023_SH0072_AALM22_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0072_AALM22_PV",
      "tagdesc": "前墙螺旋水冷壁P44管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17980,
      "taglogicid": "N3_DPU3023_SH0072_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0072_AALM12_PV",
      "tagdesc": "前墙螺旋水冷壁P34管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17981,
      "taglogicid": "N3_DPU3023_SH0072_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0072_AALM19_PV",
      "tagdesc": "前墙螺旋水冷壁P41管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17982,
      "taglogicid": "N3_DPU3023_SH0072_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0072_AALM16_PV",
      "tagdesc": "前墙螺旋水冷壁P38管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17984,
      "taglogicid": "N3_DPU3023_SH0072_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0072_AALM20_PV",
      "tagdesc": "前墙螺旋水冷壁P42管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17986,
      "taglogicid": "N3_DPU3023_SH0073_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0073_AALM01_PV",
      "tagdesc": "前墙螺旋水冷壁P45管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17987,
      "taglogicid": "N3_DPU3023_SH0073_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0073_AALM05_PV",
      "tagdesc": "前墙螺旋水冷壁P49管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17988,
      "taglogicid": "N3_DPU3023_SH0073_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0073_AALM09_PV",
      "tagdesc": "前墙螺旋水冷壁P53管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17989,
      "taglogicid": "N3_DPU3023_SH0073_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0073_AALM02_PV",
      "tagdesc": "前墙螺旋水冷壁P46管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17990,
      "taglogicid": "N3_DPU3023_SH0073_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0073_AALM13_PV",
      "tagdesc": "前墙螺旋水冷壁P57管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17991,
      "taglogicid": "N3_DPU3023_SH0073_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0073_AALM06_PV",
      "tagdesc": "前墙螺旋水冷壁P50管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17992,
      "taglogicid": "N3_DPU3023_SH0073_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0073_AALM10_PV",
      "tagdesc": "前墙螺旋水冷壁P54管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17993,
      "taglogicid": "N3_DPU3023_SH0073_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0073_AALM17_PV",
      "tagdesc": "前墙螺旋水冷壁P61管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17994,
      "taglogicid": "N3_DPU3023_SH0073_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0073_AALM03_PV",
      "tagdesc": "前墙螺旋水冷壁P47管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17995,
      "taglogicid": "N3_DPU3023_SH0073_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0073_AALM14_PV",
      "tagdesc": "前墙螺旋水冷壁P58管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17996,
      "taglogicid": "N3_DPU3023_SH0073_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0073_AALM07_PV",
      "tagdesc": "前墙螺旋水冷壁P51管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17997,
      "taglogicid": "N3_DPU3023_SH0073_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0073_AALM21_PV",
      "tagdesc": "前墙螺旋水冷壁P65管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17998,
      "taglogicid": "N3_DPU3023_SH0073_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0073_AALM11_PV",
      "tagdesc": "前墙螺旋水冷壁P55管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 17999,
      "taglogicid": "N3_DPU3023_SH0073_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0073_AALM18_PV",
      "tagdesc": "前墙螺旋水冷壁P62管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18000,
      "taglogicid": "N3_DPU3023_SH0073_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0073_AALM04_PV",
      "tagdesc": "前墙螺旋水冷壁P48管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18001,
      "taglogicid": "N3_DPU3023_SH0073_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0073_AALM15_PV",
      "tagdesc": "前墙螺旋水冷壁P59管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18002,
      "taglogicid": "N3_DPU3023_SH0073_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0073_AALM08_PV",
      "tagdesc": "前墙螺旋水冷壁P52管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18003,
      "taglogicid": "N3_DPU3023_SH0073_AALM22_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0073_AALM22_PV",
      "tagdesc": "前墙螺旋水冷壁P66管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18004,
      "taglogicid": "N3_DPU3023_SH0073_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0073_AALM12_PV",
      "tagdesc": "前墙螺旋水冷壁P56管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18005,
      "taglogicid": "N3_DPU3023_SH0073_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0073_AALM19_PV",
      "tagdesc": "前墙螺旋水冷壁P63管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18006,
      "taglogicid": "N3_DPU3023_SH0073_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0073_AALM16_PV",
      "tagdesc": "前墙螺旋水冷壁P60管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18008,
      "taglogicid": "N3_DPU3023_SH0073_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0073_AALM20_PV",
      "tagdesc": "前墙螺旋水冷壁P64管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18010,
      "taglogicid": "N3_DPU3023_SH0074_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0074_AALM01_PV",
      "tagdesc": "前墙螺旋水冷壁P67管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18011,
      "taglogicid": "N3_DPU3023_SH0074_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0074_AALM05_PV",
      "tagdesc": "前墙螺旋水冷壁P71管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18012,
      "taglogicid": "N3_DPU3023_SH0074_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0074_AALM09_PV",
      "tagdesc": "前墙螺旋水冷壁P75管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18013,
      "taglogicid": "N3_DPU3023_SH0074_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0074_AALM02_PV",
      "tagdesc": "前墙螺旋水冷壁P68管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18014,
      "taglogicid": "N3_DPU3023_SH0074_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0074_AALM13_PV",
      "tagdesc": "前墙螺旋水冷壁P79管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18015,
      "taglogicid": "N3_DPU3023_SH0074_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0074_AALM06_PV",
      "tagdesc": "前墙螺旋水冷壁P72管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18016,
      "taglogicid": "N3_DPU3023_SH0074_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0074_AALM10_PV",
      "tagdesc": "前墙螺旋水冷壁P76管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18017,
      "taglogicid": "N3_DPU3023_SH0074_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0074_AALM17_PV",
      "tagdesc": "前墙螺旋水冷壁P83管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18018,
      "taglogicid": "N3_DPU3023_SH0074_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0074_AALM03_PV",
      "tagdesc": "前墙螺旋水冷壁P69管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18019,
      "taglogicid": "N3_DPU3023_SH0074_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0074_AALM14_PV",
      "tagdesc": "前墙螺旋水冷壁P80管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18020,
      "taglogicid": "N3_DPU3023_SH0074_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0074_AALM07_PV",
      "tagdesc": "前墙螺旋水冷壁P73管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18021,
      "taglogicid": "N3_DPU3023_SH0074_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0074_AALM21_PV",
      "tagdesc": "前墙螺旋水冷壁P87管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18022,
      "taglogicid": "N3_DPU3023_SH0074_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0074_AALM11_PV",
      "tagdesc": "前墙螺旋水冷壁P77管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18023,
      "taglogicid": "N3_DPU3023_SH0074_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0074_AALM18_PV",
      "tagdesc": "前墙螺旋水冷壁P84管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18024,
      "taglogicid": "N3_DPU3023_SH0074_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0074_AALM04_PV",
      "tagdesc": "前墙螺旋水冷壁P70管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18025,
      "taglogicid": "N3_DPU3023_SH0074_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0074_AALM15_PV",
      "tagdesc": "前墙螺旋水冷壁P81管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18026,
      "taglogicid": "N3_DPU3023_SH0074_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0074_AALM08_PV",
      "tagdesc": "前墙螺旋水冷壁P74管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18027,
      "taglogicid": "N3_DPU3023_SH0074_AALM22_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0074_AALM22_PV",
      "tagdesc": "前墙螺旋水冷壁P88管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18028,
      "taglogicid": "N3_DPU3023_SH0074_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0074_AALM12_PV",
      "tagdesc": "前墙螺旋水冷壁P78管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18029,
      "taglogicid": "N3_DPU3023_SH0074_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0074_AALM19_PV",
      "tagdesc": "前墙螺旋水冷壁P85管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18030,
      "taglogicid": "N3_DPU3023_SH0074_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0074_AALM16_PV",
      "tagdesc": "前墙螺旋水冷壁P82管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18032,
      "taglogicid": "N3_DPU3023_SH0074_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0074_AALM20_PV",
      "tagdesc": "前墙螺旋水冷壁P86管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18034,
      "taglogicid": "N3_DPU3023_SH0075_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0075_AALM01_PV",
      "tagdesc": "前墙螺旋水冷壁P89管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18035,
      "taglogicid": "N3_DPU3023_SH0075_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0075_AALM05_PV",
      "tagdesc": "前墙螺旋水冷壁P93管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18036,
      "taglogicid": "N3_DPU3023_SH0075_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0075_AALM09_PV",
      "tagdesc": "前墙螺旋水冷壁P97管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18037,
      "taglogicid": "N3_DPU3023_SH0075_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0075_AALM02_PV",
      "tagdesc": "前墙螺旋水冷壁P90管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18038,
      "taglogicid": "N3_DPU3023_SH0075_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0075_AALM13_PV",
      "tagdesc": "前墙螺旋水冷壁P101管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18039,
      "taglogicid": "N3_DPU3023_SH0075_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0075_AALM06_PV",
      "tagdesc": "前墙螺旋水冷壁P94管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18040,
      "taglogicid": "N3_DPU3023_SH0075_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0075_AALM10_PV",
      "tagdesc": "前墙螺旋水冷壁P98管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18041,
      "taglogicid": "N3_DPU3023_SH0075_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0075_AALM17_PV",
      "tagdesc": "前墙螺旋水冷壁P105管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18042,
      "taglogicid": "N3_DPU3023_SH0075_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0075_AALM03_PV",
      "tagdesc": "前墙螺旋水冷壁P91管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18043,
      "taglogicid": "N3_DPU3023_SH0075_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0075_AALM14_PV",
      "tagdesc": "前墙螺旋水冷壁P102管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18044,
      "taglogicid": "N3_DPU3023_SH0075_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0075_AALM07_PV",
      "tagdesc": "前墙螺旋水冷壁P95管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18045,
      "taglogicid": "N3_DPU3023_SH0075_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0075_AALM21_PV",
      "tagdesc": "前墙螺旋水冷壁P109管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18046,
      "taglogicid": "N3_DPU3023_SH0075_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0075_AALM11_PV",
      "tagdesc": "前墙螺旋水冷壁P99管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18047,
      "taglogicid": "N3_DPU3023_SH0075_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0075_AALM18_PV",
      "tagdesc": "前墙螺旋水冷壁P106管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18048,
      "taglogicid": "N3_DPU3023_SH0075_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0075_AALM04_PV",
      "tagdesc": "前墙螺旋水冷壁P92管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18049,
      "taglogicid": "N3_DPU3023_SH0075_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0075_AALM15_PV",
      "tagdesc": "前墙螺旋水冷壁P103管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18050,
      "taglogicid": "N3_DPU3023_SH0075_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0075_AALM08_PV",
      "tagdesc": "前墙螺旋水冷壁P96管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18051,
      "taglogicid": "N3_DPU3023_SH0075_AALM22_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0075_AALM22_PV",
      "tagdesc": "前墙螺旋水冷壁P110管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18052,
      "taglogicid": "N3_DPU3023_SH0075_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0075_AALM12_PV",
      "tagdesc": "前墙螺旋水冷壁P100管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18053,
      "taglogicid": "N3_DPU3023_SH0075_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0075_AALM19_PV",
      "tagdesc": "前墙螺旋水冷壁P107管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18054,
      "taglogicid": "N3_DPU3023_SH0075_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0075_AALM16_PV",
      "tagdesc": "前墙螺旋水冷壁P104管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18056,
      "taglogicid": "N3_DPU3023_SH0075_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0075_AALM20_PV",
      "tagdesc": "前墙螺旋水冷壁P108管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18058,
      "taglogicid": "N3_DPU3023_SH0076_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0076_AALM01_PV",
      "tagdesc": "前墙螺旋水冷壁P111管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18059,
      "taglogicid": "N3_DPU3023_SH0076_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0076_AALM05_PV",
      "tagdesc": "前墙螺旋水冷壁P115管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18060,
      "taglogicid": "N3_DPU3023_SH0076_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0076_AALM09_PV",
      "tagdesc": "前墙螺旋水冷壁P119管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18061,
      "taglogicid": "N3_DPU3023_SH0076_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0076_AALM02_PV",
      "tagdesc": "前墙螺旋水冷壁P112管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18062,
      "taglogicid": "N3_DPU3023_SH0076_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0076_AALM13_PV",
      "tagdesc": "前墙螺旋水冷壁P123管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18063,
      "taglogicid": "N3_DPU3023_SH0076_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0076_AALM06_PV",
      "tagdesc": "前墙螺旋水冷壁P116管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18064,
      "taglogicid": "N3_DPU3023_SH0076_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0076_AALM10_PV",
      "tagdesc": "前墙螺旋水冷壁P120管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18065,
      "taglogicid": "N3_DPU3023_SH0076_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0076_AALM17_PV",
      "tagdesc": "前墙螺旋水冷壁P127管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18066,
      "taglogicid": "N3_DPU3023_SH0076_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0076_AALM03_PV",
      "tagdesc": "前墙螺旋水冷壁P113管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18067,
      "taglogicid": "N3_DPU3023_SH0076_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0076_AALM14_PV",
      "tagdesc": "前墙螺旋水冷壁P124管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18068,
      "taglogicid": "N3_DPU3023_SH0076_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0076_AALM07_PV",
      "tagdesc": "前墙螺旋水冷壁P117管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18070,
      "taglogicid": "N3_DPU3023_SH0076_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0076_AALM11_PV",
      "tagdesc": "前墙螺旋水冷壁P121管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18071,
      "taglogicid": "N3_DPU3023_SH0076_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0076_AALM18_PV",
      "tagdesc": "前墙螺旋水冷壁P128管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18072,
      "taglogicid": "N3_DPU3023_SH0076_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0076_AALM04_PV",
      "tagdesc": "前墙螺旋水冷壁P114管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18073,
      "taglogicid": "N3_DPU3023_SH0076_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0076_AALM15_PV",
      "tagdesc": "前墙螺旋水冷壁P125管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18074,
      "taglogicid": "N3_DPU3023_SH0076_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0076_AALM08_PV",
      "tagdesc": "前墙螺旋水冷壁P118管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18076,
      "taglogicid": "N3_DPU3023_SH0076_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0076_AALM12_PV",
      "tagdesc": "前墙螺旋水冷壁P122管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18077,
      "taglogicid": "N3_DPU3023_SH0076_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0076_AALM19_PV",
      "tagdesc": "前墙螺旋水冷壁P129管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18078,
      "taglogicid": "N3_DPU3023_SH0076_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0076_AALM16_PV",
      "tagdesc": "前墙螺旋水冷壁P126管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18080,
      "taglogicid": "N3_DPU3023_SH0076_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0076_AALM20_PV",
      "tagdesc": "前墙螺旋水冷壁P130管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18082,
      "taglogicid": "N3_DPU3023_SH0077_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0077_AALM01_PV",
      "tagdesc": "前墙螺旋水冷壁P131管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18083,
      "taglogicid": "N3_DPU3023_SH0077_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0077_AALM05_PV",
      "tagdesc": "前墙螺旋水冷壁P135管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18084,
      "taglogicid": "N3_DPU3023_SH0077_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0077_AALM09_PV",
      "tagdesc": "前墙螺旋水冷壁P139管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18085,
      "taglogicid": "N3_DPU3023_SH0077_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0077_AALM02_PV",
      "tagdesc": "前墙螺旋水冷壁P132管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18086,
      "taglogicid": "N3_DPU3023_SH0077_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0077_AALM13_PV",
      "tagdesc": "前墙螺旋水冷壁P143管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18087,
      "taglogicid": "N3_DPU3023_SH0077_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0077_AALM06_PV",
      "tagdesc": "前墙螺旋水冷壁P136管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18088,
      "taglogicid": "N3_DPU3023_SH0077_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0077_AALM10_PV",
      "tagdesc": "前墙螺旋水冷壁P140壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18089,
      "taglogicid": "N3_DPU3023_SH0077_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0077_AALM17_PV",
      "tagdesc": "前墙螺旋水冷壁P147管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18090,
      "taglogicid": "N3_DPU3023_SH0077_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0077_AALM03_PV",
      "tagdesc": "前墙螺旋水冷壁P133管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18091,
      "taglogicid": "N3_DPU3023_SH0077_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0077_AALM14_PV",
      "tagdesc": "前墙螺旋水冷壁P144管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18092,
      "taglogicid": "N3_DPU3023_SH0077_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0077_AALM07_PV",
      "tagdesc": "前墙螺旋水冷壁P137管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18093,
      "taglogicid": "N3_DPU3023_SH0077_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0077_AALM21_PV",
      "tagdesc": "前墙螺旋水冷壁P151管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18094,
      "taglogicid": "N3_DPU3023_SH0077_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0077_AALM11_PV",
      "tagdesc": "前墙螺旋水冷壁P141管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18095,
      "taglogicid": "N3_DPU3023_SH0077_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0077_AALM18_PV",
      "tagdesc": "前墙螺旋水冷壁P148管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18096,
      "taglogicid": "N3_DPU3023_SH0077_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0077_AALM04_PV",
      "tagdesc": "前墙螺旋水冷壁P134管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18097,
      "taglogicid": "N3_DPU3023_SH0077_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0077_AALM15_PV",
      "tagdesc": "前墙螺旋水冷壁P145管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18098,
      "taglogicid": "N3_DPU3023_SH0077_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0077_AALM08_PV",
      "tagdesc": "前墙螺旋水冷壁P138管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18099,
      "taglogicid": "N3_DPU3023_SH0077_AALM22_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0077_AALM22_PV",
      "tagdesc": "前墙螺旋水冷壁P152管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18100,
      "taglogicid": "N3_DPU3023_SH0077_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0077_AALM12_PV",
      "tagdesc": "前墙螺旋水冷壁P142管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18101,
      "taglogicid": "N3_DPU3023_SH0077_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0077_AALM19_PV",
      "tagdesc": "前墙螺旋水冷壁P149管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18102,
      "taglogicid": "N3_DPU3023_SH0077_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0077_AALM16_PV",
      "tagdesc": "前墙螺旋水冷壁P146管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18104,
      "taglogicid": "N3_DPU3023_SH0077_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0077_AALM20_PV",
      "tagdesc": "前墙螺旋水冷壁P150管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18106,
      "taglogicid": "N3_DPU3023_SH0078_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0078_AALM01_PV",
      "tagdesc": "前墙螺旋水冷壁P153管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18107,
      "taglogicid": "N3_DPU3023_SH0078_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0078_AALM05_PV",
      "tagdesc": "前墙螺旋水冷壁P157管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18108,
      "taglogicid": "N3_DPU3023_SH0078_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0078_AALM09_PV",
      "tagdesc": "前墙螺旋水冷壁P161管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18109,
      "taglogicid": "N3_DPU3023_SH0078_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0078_AALM02_PV",
      "tagdesc": "前墙螺旋水冷壁P154管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18110,
      "taglogicid": "N3_DPU3023_SH0078_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0078_AALM13_PV",
      "tagdesc": "前墙螺旋水冷壁P165管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18111,
      "taglogicid": "N3_DPU3023_SH0078_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0078_AALM06_PV",
      "tagdesc": "前墙螺旋水冷壁P158管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18112,
      "taglogicid": "N3_DPU3023_SH0078_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0078_AALM10_PV",
      "tagdesc": "前墙螺旋水冷壁P162管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18113,
      "taglogicid": "N3_DPU3023_SH0078_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0078_AALM17_PV",
      "tagdesc": "前墙螺旋水冷壁P169管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18114,
      "taglogicid": "N3_DPU3023_SH0078_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0078_AALM03_PV",
      "tagdesc": "前墙螺旋水冷壁P155管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18115,
      "taglogicid": "N3_DPU3023_SH0078_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0078_AALM14_PV",
      "tagdesc": "前墙螺旋水冷壁P166管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18116,
      "taglogicid": "N3_DPU3023_SH0078_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0078_AALM07_PV",
      "tagdesc": "前墙螺旋水冷壁P159管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18117,
      "taglogicid": "N3_DPU3023_SH0078_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0078_AALM21_PV",
      "tagdesc": "前墙螺旋水冷壁P173管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18118,
      "taglogicid": "N3_DPU3023_SH0078_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0078_AALM11_PV",
      "tagdesc": "前墙螺旋水冷壁P163管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18119,
      "taglogicid": "N3_DPU3023_SH0078_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0078_AALM18_PV",
      "tagdesc": "前墙螺旋水冷壁P170管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18120,
      "taglogicid": "N3_DPU3023_SH0078_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0078_AALM04_PV",
      "tagdesc": "前墙螺旋水冷壁P156管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18121,
      "taglogicid": "N3_DPU3023_SH0078_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0078_AALM15_PV",
      "tagdesc": "前墙螺旋水冷壁P167管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18122,
      "taglogicid": "N3_DPU3023_SH0078_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0078_AALM08_PV",
      "tagdesc": "前墙螺旋水冷壁P160管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18124,
      "taglogicid": "N3_DPU3023_SH0078_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0078_AALM12_PV",
      "tagdesc": "前墙螺旋水冷壁P164管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18125,
      "taglogicid": "N3_DPU3023_SH0078_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0078_AALM19_PV",
      "tagdesc": "前墙螺旋水冷壁P171管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18126,
      "taglogicid": "N3_DPU3023_SH0078_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0078_AALM16_PV",
      "tagdesc": "前墙螺旋水冷壁P168管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18128,
      "taglogicid": "N3_DPU3023_SH0078_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0078_AALM20_PV",
      "tagdesc": "前墙螺旋水冷壁P172管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18166,
      "taglogicid": "N3_DPU3023_SH0091_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0091_AALM01_PV",
      "tagdesc": "右墙螺旋水冷壁P01管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18167,
      "taglogicid": "N3_DPU3023_SH0091_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0091_AALM05_PV",
      "tagdesc": "右墙螺旋水冷壁P05管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18168,
      "taglogicid": "N3_DPU3023_SH0091_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0091_AALM09_PV",
      "tagdesc": "右墙螺旋水冷壁P09管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18169,
      "taglogicid": "N3_DPU3023_SH0091_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0091_AALM02_PV",
      "tagdesc": "右墙螺旋水冷壁P02管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18170,
      "taglogicid": "N3_DPU3023_SH0091_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0091_AALM13_PV",
      "tagdesc": "右墙螺旋水冷壁P13管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18171,
      "taglogicid": "N3_DPU3023_SH0091_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0091_AALM06_PV",
      "tagdesc": "右墙螺旋水冷壁P06管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18172,
      "taglogicid": "N3_DPU3023_SH0091_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0091_AALM10_PV",
      "tagdesc": "右墙螺旋水冷壁P10管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18173,
      "taglogicid": "N3_DPU3023_SH0091_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0091_AALM17_PV",
      "tagdesc": "右墙螺旋水冷壁P17管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18174,
      "taglogicid": "N3_DPU3023_SH0091_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0091_AALM03_PV",
      "tagdesc": "右墙螺旋水冷壁P03管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18175,
      "taglogicid": "N3_DPU3023_SH0091_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0091_AALM14_PV",
      "tagdesc": "右墙螺旋水冷壁P14管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18176,
      "taglogicid": "N3_DPU3023_SH0091_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0091_AALM07_PV",
      "tagdesc": "右墙螺旋水冷壁P07管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18177,
      "taglogicid": "N3_DPU3023_SH0091_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0091_AALM21_PV",
      "tagdesc": "右墙螺旋水冷壁P21管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18178,
      "taglogicid": "N3_DPU3023_SH0091_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0091_AALM11_PV",
      "tagdesc": "右墙螺旋水冷壁P11管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18179,
      "taglogicid": "N3_DPU3023_SH0091_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0091_AALM18_PV",
      "tagdesc": "右墙螺旋水冷壁P18管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18180,
      "taglogicid": "N3_DPU3023_SH0091_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0091_AALM04_PV",
      "tagdesc": "右墙螺旋水冷壁P04管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18181,
      "taglogicid": "N3_DPU3023_SH0091_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0091_AALM15_PV",
      "tagdesc": "右墙螺旋水冷壁P15管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18182,
      "taglogicid": "N3_DPU3023_SH0091_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0091_AALM08_PV",
      "tagdesc": "右墙螺旋水冷壁P08管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18183,
      "taglogicid": "N3_DPU3023_SH0091_AALM22_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0091_AALM22_PV",
      "tagdesc": "右墙螺旋水冷壁P22管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18184,
      "taglogicid": "N3_DPU3023_SH0091_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0091_AALM12_PV",
      "tagdesc": "右墙螺旋水冷壁P12管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18185,
      "taglogicid": "N3_DPU3023_SH0091_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0091_AALM19_PV",
      "tagdesc": "右墙螺旋水冷壁P19管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18186,
      "taglogicid": "N3_DPU3023_SH0091_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0091_AALM16_PV",
      "tagdesc": "右墙螺旋水冷壁P16管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18188,
      "taglogicid": "N3_DPU3023_SH0091_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0091_AALM20_PV",
      "tagdesc": "右墙螺旋水冷壁P20管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18190,
      "taglogicid": "N3_DPU3023_SH0092_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0092_AALM01_PV",
      "tagdesc": "右墙螺旋水冷壁P23管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18191,
      "taglogicid": "N3_DPU3023_SH0092_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0092_AALM05_PV",
      "tagdesc": "右墙螺旋水冷壁P27管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18192,
      "taglogicid": "N3_DPU3023_SH0092_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0092_AALM09_PV",
      "tagdesc": "右墙螺旋水冷壁P31管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18193,
      "taglogicid": "N3_DPU3023_SH0092_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0092_AALM02_PV",
      "tagdesc": "右墙螺旋水冷壁P24管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18194,
      "taglogicid": "N3_DPU3023_SH0092_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0092_AALM13_PV",
      "tagdesc": "右墙螺旋水冷壁P35管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18195,
      "taglogicid": "N3_DPU3023_SH0092_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0092_AALM06_PV",
      "tagdesc": "右墙螺旋水冷壁P28管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18196,
      "taglogicid": "N3_DPU3023_SH0092_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0092_AALM10_PV",
      "tagdesc": "右墙螺旋水冷壁P32管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18197,
      "taglogicid": "N3_DPU3023_SH0092_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0092_AALM17_PV",
      "tagdesc": "右墙螺旋水冷壁P39管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18198,
      "taglogicid": "N3_DPU3023_SH0092_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0092_AALM03_PV",
      "tagdesc": "右墙螺旋水冷壁P25管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18199,
      "taglogicid": "N3_DPU3023_SH0092_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0092_AALM14_PV",
      "tagdesc": "右墙螺旋水冷壁P36管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18200,
      "taglogicid": "N3_DPU3023_SH0092_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0092_AALM07_PV",
      "tagdesc": "右墙螺旋水冷壁P29管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18201,
      "taglogicid": "N3_DPU3023_SH0092_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0092_AALM21_PV",
      "tagdesc": "右墙螺旋水冷壁P43管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18202,
      "taglogicid": "N3_DPU3023_SH0092_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0092_AALM11_PV",
      "tagdesc": "右墙螺旋水冷壁P33管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18203,
      "taglogicid": "N3_DPU3023_SH0092_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0092_AALM18_PV",
      "tagdesc": "右墙螺旋水冷壁P40管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18204,
      "taglogicid": "N3_DPU3023_SH0092_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0092_AALM04_PV",
      "tagdesc": "右墙螺旋水冷壁P26管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18205,
      "taglogicid": "N3_DPU3023_SH0092_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0092_AALM15_PV",
      "tagdesc": "右墙螺旋水冷壁P37管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18206,
      "taglogicid": "N3_DPU3023_SH0092_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0092_AALM08_PV",
      "tagdesc": "右墙螺旋水冷壁P30管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18207,
      "taglogicid": "N3_DPU3023_SH0092_AALM22_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0092_AALM22_PV",
      "tagdesc": "右墙螺旋水冷壁P44管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18208,
      "taglogicid": "N3_DPU3023_SH0092_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0092_AALM12_PV",
      "tagdesc": "右墙螺旋水冷壁P34管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18209,
      "taglogicid": "N3_DPU3023_SH0092_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0092_AALM19_PV",
      "tagdesc": "右墙螺旋水冷壁P41管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18210,
      "taglogicid": "N3_DPU3023_SH0092_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0092_AALM16_PV",
      "tagdesc": "右墙螺旋水冷壁P38管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18212,
      "taglogicid": "N3_DPU3023_SH0092_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0092_AALM20_PV",
      "tagdesc": "右墙螺旋水冷壁P42管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18214,
      "taglogicid": "N3_DPU3023_SH0093_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0093_AALM01_PV",
      "tagdesc": "右墙螺旋水冷壁P45管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18215,
      "taglogicid": "N3_DPU3023_SH0093_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0093_AALM05_PV",
      "tagdesc": "右墙螺旋水冷壁P49管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18216,
      "taglogicid": "N3_DPU3023_SH0093_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0093_AALM09_PV",
      "tagdesc": "右墙螺旋水冷壁P53管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18217,
      "taglogicid": "N3_DPU3023_SH0093_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0093_AALM02_PV",
      "tagdesc": "右墙螺旋水冷壁P46管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18218,
      "taglogicid": "N3_DPU3023_SH0093_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0093_AALM13_PV",
      "tagdesc": "右墙螺旋水冷壁P57管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18219,
      "taglogicid": "N3_DPU3023_SH0093_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0093_AALM06_PV",
      "tagdesc": "右墙螺旋水冷壁P50管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18220,
      "taglogicid": "N3_DPU3023_SH0093_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0093_AALM10_PV",
      "tagdesc": "右墙螺旋水冷壁P54管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18221,
      "taglogicid": "N3_DPU3023_SH0093_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0093_AALM17_PV",
      "tagdesc": "右墙螺旋水冷壁P61管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18222,
      "taglogicid": "N3_DPU3023_SH0093_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0093_AALM03_PV",
      "tagdesc": "右墙螺旋水冷壁P47管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18223,
      "taglogicid": "N3_DPU3023_SH0093_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0093_AALM14_PV",
      "tagdesc": "右墙螺旋水冷壁P58管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18224,
      "taglogicid": "N3_DPU3023_SH0093_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0093_AALM07_PV",
      "tagdesc": "右墙螺旋水冷壁P51管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18225,
      "taglogicid": "N3_DPU3023_SH0093_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0093_AALM21_PV",
      "tagdesc": "右墙螺旋水冷壁P65管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18226,
      "taglogicid": "N3_DPU3023_SH0093_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0093_AALM11_PV",
      "tagdesc": "右墙螺旋水冷壁P55管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18227,
      "taglogicid": "N3_DPU3023_SH0093_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0093_AALM18_PV",
      "tagdesc": "右墙螺旋水冷壁P62管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18228,
      "taglogicid": "N3_DPU3023_SH0093_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0093_AALM04_PV",
      "tagdesc": "右墙螺旋水冷壁P48管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18229,
      "taglogicid": "N3_DPU3023_SH0093_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0093_AALM15_PV",
      "tagdesc": "右墙螺旋水冷壁P59管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18230,
      "taglogicid": "N3_DPU3023_SH0093_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0093_AALM08_PV",
      "tagdesc": "右墙螺旋水冷壁P52管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18231,
      "taglogicid": "N3_DPU3023_SH0093_AALM22_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0093_AALM22_PV",
      "tagdesc": "右墙螺旋水冷壁P66管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18232,
      "taglogicid": "N3_DPU3023_SH0093_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0093_AALM12_PV",
      "tagdesc": "右墙螺旋水冷壁P56管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18233,
      "taglogicid": "N3_DPU3023_SH0093_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0093_AALM19_PV",
      "tagdesc": "右墙螺旋水冷壁P63管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18234,
      "taglogicid": "N3_DPU3023_SH0093_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0093_AALM16_PV",
      "tagdesc": "右墙螺旋水冷壁P60管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18236,
      "taglogicid": "N3_DPU3023_SH0093_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0093_AALM20_PV",
      "tagdesc": "右墙螺旋水冷壁P64管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18238,
      "taglogicid": "N3_DPU3023_SH0094_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0094_AALM01_PV",
      "tagdesc": "右墙螺旋水冷壁P67管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18239,
      "taglogicid": "N3_DPU3023_SH0094_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0094_AALM05_PV",
      "tagdesc": "右墙螺旋水冷壁P71管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18240,
      "taglogicid": "N3_DPU3023_SH0094_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0094_AALM09_PV",
      "tagdesc": "右墙螺旋水冷壁P75管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18241,
      "taglogicid": "N3_DPU3023_SH0094_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0094_AALM02_PV",
      "tagdesc": "右墙螺旋水冷壁P68管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18242,
      "taglogicid": "N3_DPU3023_SH0094_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0094_AALM13_PV",
      "tagdesc": "右墙螺旋水冷壁P79管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18243,
      "taglogicid": "N3_DPU3023_SH0094_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0094_AALM06_PV",
      "tagdesc": "右墙螺旋水冷壁P72管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18244,
      "taglogicid": "N3_DPU3023_SH0094_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0094_AALM10_PV",
      "tagdesc": "右墙螺旋水冷壁P76管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18245,
      "taglogicid": "N3_DPU3023_SH0094_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0094_AALM17_PV",
      "tagdesc": "右墙螺旋水冷壁P83管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18246,
      "taglogicid": "N3_DPU3023_SH0094_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0094_AALM03_PV",
      "tagdesc": "右墙螺旋水冷壁P69管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18247,
      "taglogicid": "N3_DPU3023_SH0094_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0094_AALM14_PV",
      "tagdesc": "右墙螺旋水冷壁P80管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18248,
      "taglogicid": "N3_DPU3023_SH0094_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0094_AALM07_PV",
      "tagdesc": "右墙螺旋水冷壁P73管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18249,
      "taglogicid": "N3_DPU3023_SH0094_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0094_AALM21_PV",
      "tagdesc": "右墙螺旋水冷壁P87管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18250,
      "taglogicid": "N3_DPU3023_SH0094_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0094_AALM11_PV",
      "tagdesc": "右墙螺旋水冷壁P77管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18251,
      "taglogicid": "N3_DPU3023_SH0094_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0094_AALM18_PV",
      "tagdesc": "右墙螺旋水冷壁P84管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18252,
      "taglogicid": "N3_DPU3023_SH0094_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0094_AALM04_PV",
      "tagdesc": "右墙螺旋水冷壁P70管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18253,
      "taglogicid": "N3_DPU3023_SH0094_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0094_AALM15_PV",
      "tagdesc": "右墙螺旋水冷壁P81管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18254,
      "taglogicid": "N3_DPU3023_SH0094_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0094_AALM08_PV",
      "tagdesc": "右墙螺旋水冷壁P74管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18255,
      "taglogicid": "N3_DPU3023_SH0094_AALM22_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0094_AALM22_PV",
      "tagdesc": "右墙螺旋水冷壁P88管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18256,
      "taglogicid": "N3_DPU3023_SH0094_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0094_AALM12_PV",
      "tagdesc": "右墙螺旋水冷壁P78管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18257,
      "taglogicid": "N3_DPU3023_SH0094_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0094_AALM19_PV",
      "tagdesc": "右墙螺旋水冷壁P85管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18258,
      "taglogicid": "N3_DPU3023_SH0094_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0094_AALM16_PV",
      "tagdesc": "右墙螺旋水冷壁P82管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18260,
      "taglogicid": "N3_DPU3023_SH0094_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0094_AALM20_PV",
      "tagdesc": "右墙螺旋水冷壁P86管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18262,
      "taglogicid": "N3_DPU3023_SH0095_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0095_AALM01_PV",
      "tagdesc": "右墙螺旋水冷壁P89管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18263,
      "taglogicid": "N3_DPU3023_SH0095_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0095_AALM05_PV",
      "tagdesc": "右墙螺旋水冷壁P93管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18264,
      "taglogicid": "N3_DPU3023_SH0095_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0095_AALM09_PV",
      "tagdesc": "右墙螺旋水冷壁P97管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18265,
      "taglogicid": "N3_DPU3023_SH0095_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0095_AALM02_PV",
      "tagdesc": "右墙螺旋水冷壁P90管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18266,
      "taglogicid": "N3_DPU3023_SH0095_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0095_AALM13_PV",
      "tagdesc": "右墙螺旋水冷壁P101管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18267,
      "taglogicid": "N3_DPU3023_SH0095_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0095_AALM06_PV",
      "tagdesc": "右墙螺旋水冷壁P94管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18268,
      "taglogicid": "N3_DPU3023_SH0095_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0095_AALM10_PV",
      "tagdesc": "右墙螺旋水冷壁P98管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18269,
      "taglogicid": "N3_DPU3023_SH0095_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0095_AALM17_PV",
      "tagdesc": "右墙螺旋水冷壁P105管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18270,
      "taglogicid": "N3_DPU3023_SH0095_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0095_AALM03_PV",
      "tagdesc": "右墙螺旋水冷壁P91管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18271,
      "taglogicid": "N3_DPU3023_SH0095_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0095_AALM14_PV",
      "tagdesc": "右墙螺旋水冷壁P102管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18272,
      "taglogicid": "N3_DPU3023_SH0095_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0095_AALM07_PV",
      "tagdesc": "右墙螺旋水冷壁P95管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18273,
      "taglogicid": "N3_DPU3023_SH0095_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0095_AALM21_PV",
      "tagdesc": "右墙螺旋水冷壁P109管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18274,
      "taglogicid": "N3_DPU3023_SH0095_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0095_AALM11_PV",
      "tagdesc": "右墙螺旋水冷壁P99管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18275,
      "taglogicid": "N3_DPU3023_SH0095_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0095_AALM18_PV",
      "tagdesc": "右墙螺旋水冷壁P106管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18276,
      "taglogicid": "N3_DPU3023_SH0095_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0095_AALM04_PV",
      "tagdesc": "右墙螺旋水冷壁P92管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18277,
      "taglogicid": "N3_DPU3023_SH0095_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0095_AALM15_PV",
      "tagdesc": "右墙螺旋水冷壁P103管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18278,
      "taglogicid": "N3_DPU3023_SH0095_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0095_AALM08_PV",
      "tagdesc": "右墙螺旋水冷壁P96管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18279,
      "taglogicid": "N3_DPU3023_SH0095_AALM22_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0095_AALM22_PV",
      "tagdesc": "右墙螺旋水冷壁P110管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18280,
      "taglogicid": "N3_DPU3023_SH0095_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0095_AALM12_PV",
      "tagdesc": "右墙螺旋水冷壁P100管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18281,
      "taglogicid": "N3_DPU3023_SH0095_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0095_AALM19_PV",
      "tagdesc": "右墙螺旋水冷壁P107管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18282,
      "taglogicid": "N3_DPU3023_SH0095_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0095_AALM16_PV",
      "tagdesc": "右墙螺旋水冷壁P104管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18284,
      "taglogicid": "N3_DPU3023_SH0095_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0095_AALM20_PV",
      "tagdesc": "右墙螺旋水冷壁P108管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18286,
      "taglogicid": "N3_DPU3023_SH0096_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0096_AALM01_PV",
      "tagdesc": "右墙螺旋水冷壁P111管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18287,
      "taglogicid": "N3_DPU3023_SH0096_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0096_AALM05_PV",
      "tagdesc": "右墙螺旋水冷壁P115管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18288,
      "taglogicid": "N3_DPU3023_SH0096_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0096_AALM09_PV",
      "tagdesc": "右墙螺旋水冷壁P119管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18289,
      "taglogicid": "N3_DPU3023_SH0096_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0096_AALM02_PV",
      "tagdesc": "右墙螺旋水冷壁P112管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18290,
      "taglogicid": "N3_DPU3023_SH0096_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0096_AALM13_PV",
      "tagdesc": "右墙螺旋水冷壁P123管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18291,
      "taglogicid": "N3_DPU3023_SH0096_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0096_AALM06_PV",
      "tagdesc": "右墙螺旋水冷壁P116管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18292,
      "taglogicid": "N3_DPU3023_SH0096_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0096_AALM10_PV",
      "tagdesc": "右墙螺旋水冷壁P120管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18293,
      "taglogicid": "N3_DPU3023_SH0096_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0096_AALM17_PV",
      "tagdesc": "右墙螺旋水冷壁P127管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18294,
      "taglogicid": "N3_DPU3023_SH0096_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0096_AALM03_PV",
      "tagdesc": "右墙螺旋水冷壁P113管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18295,
      "taglogicid": "N3_DPU3023_SH0096_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0096_AALM14_PV",
      "tagdesc": "右墙螺旋水冷壁P124管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18296,
      "taglogicid": "N3_DPU3023_SH0096_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0096_AALM07_PV",
      "tagdesc": "右墙螺旋水冷壁P117管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18298,
      "taglogicid": "N3_DPU3023_SH0096_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0096_AALM11_PV",
      "tagdesc": "右墙螺旋水冷壁P121管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18299,
      "taglogicid": "N3_DPU3023_SH0096_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0096_AALM18_PV",
      "tagdesc": "右墙螺旋水冷壁P128管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18300,
      "taglogicid": "N3_DPU3023_SH0096_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0096_AALM04_PV",
      "tagdesc": "右墙螺旋水冷壁P114管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18301,
      "taglogicid": "N3_DPU3023_SH0096_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0096_AALM15_PV",
      "tagdesc": "右墙螺旋水冷壁P125管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18302,
      "taglogicid": "N3_DPU3023_SH0096_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0096_AALM08_PV",
      "tagdesc": "右墙螺旋水冷壁P118管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18304,
      "taglogicid": "N3_DPU3023_SH0096_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0096_AALM12_PV",
      "tagdesc": "右墙螺旋水冷壁P122管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18305,
      "taglogicid": "N3_DPU3023_SH0096_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0096_AALM19_PV",
      "tagdesc": "右墙螺旋水冷壁P129管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18306,
      "taglogicid": "N3_DPU3023_SH0096_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0096_AALM16_PV",
      "tagdesc": "右墙螺旋水冷壁P126管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18308,
      "taglogicid": "N3_DPU3023_SH0096_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0096_AALM20_PV",
      "tagdesc": "右墙螺旋水冷壁P130管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18310,
      "taglogicid": "N3_DPU3023_SH0097_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0097_AALM01_PV",
      "tagdesc": "右墙螺旋水冷壁P131管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18311,
      "taglogicid": "N3_DPU3023_SH0097_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0097_AALM05_PV",
      "tagdesc": "右墙螺旋水冷壁P135管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18312,
      "taglogicid": "N3_DPU3023_SH0097_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0097_AALM09_PV",
      "tagdesc": "右墙螺旋水冷壁P139管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18313,
      "taglogicid": "N3_DPU3023_SH0097_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0097_AALM02_PV",
      "tagdesc": "右墙螺旋水冷壁P132管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18314,
      "taglogicid": "N3_DPU3023_SH0097_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0097_AALM13_PV",
      "tagdesc": "右墙螺旋水冷壁P143管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18315,
      "taglogicid": "N3_DPU3023_SH0097_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0097_AALM06_PV",
      "tagdesc": "右墙螺旋水冷壁P136管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18316,
      "taglogicid": "N3_DPU3023_SH0097_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0097_AALM10_PV",
      "tagdesc": "右墙螺旋水冷壁P140管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18317,
      "taglogicid": "N3_DPU3023_SH0097_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0097_AALM17_PV",
      "tagdesc": "右墙螺旋水冷壁P147管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18318,
      "taglogicid": "N3_DPU3023_SH0097_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0097_AALM03_PV",
      "tagdesc": "右墙螺旋水冷壁P133管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18319,
      "taglogicid": "N3_DPU3023_SH0097_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0097_AALM14_PV",
      "tagdesc": "右墙螺旋水冷壁P144管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18320,
      "taglogicid": "N3_DPU3023_SH0097_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0097_AALM07_PV",
      "tagdesc": "右墙螺旋水冷壁P137管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18321,
      "taglogicid": "N3_DPU3023_SH0097_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0097_AALM21_PV",
      "tagdesc": "右墙螺旋水冷壁P151管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18322,
      "taglogicid": "N3_DPU3023_SH0097_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0097_AALM11_PV",
      "tagdesc": "右墙螺旋水冷壁P141管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18323,
      "taglogicid": "N3_DPU3023_SH0097_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0097_AALM18_PV",
      "tagdesc": "右墙螺旋水冷壁P148管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18324,
      "taglogicid": "N3_DPU3023_SH0097_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0097_AALM04_PV",
      "tagdesc": "右墙螺旋水冷壁P134管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18325,
      "taglogicid": "N3_DPU3023_SH0097_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0097_AALM15_PV",
      "tagdesc": "右墙螺旋水冷壁P145管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18326,
      "taglogicid": "N3_DPU3023_SH0097_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0097_AALM08_PV",
      "tagdesc": "右墙螺旋水冷壁P138管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18327,
      "taglogicid": "N3_DPU3023_SH0097_AALM22_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0097_AALM22_PV",
      "tagdesc": "右墙螺旋水冷壁P152管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18328,
      "taglogicid": "N3_DPU3023_SH0097_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0097_AALM12_PV",
      "tagdesc": "右墙螺旋水冷壁P142管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18329,
      "taglogicid": "N3_DPU3023_SH0097_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0097_AALM19_PV",
      "tagdesc": "右墙螺旋水冷壁P149管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18330,
      "taglogicid": "N3_DPU3023_SH0097_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0097_AALM16_PV",
      "tagdesc": "右墙螺旋水冷壁P146管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18332,
      "taglogicid": "N3_DPU3023_SH0097_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0097_AALM20_PV",
      "tagdesc": "右墙螺旋水冷壁P150管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18334,
      "taglogicid": "N3_DPU3023_SH0098_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0098_AALM01_PV",
      "tagdesc": "右墙螺旋水冷壁P153管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18335,
      "taglogicid": "N3_DPU3023_SH0098_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0098_AALM05_PV",
      "tagdesc": "右墙螺旋水冷壁P157管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18336,
      "taglogicid": "N3_DPU3023_SH0098_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0098_AALM09_PV",
      "tagdesc": "右墙螺旋水冷壁P161管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18337,
      "taglogicid": "N3_DPU3023_SH0098_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0098_AALM02_PV",
      "tagdesc": "右墙螺旋水冷壁P154管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18338,
      "taglogicid": "N3_DPU3023_SH0098_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0098_AALM13_PV",
      "tagdesc": "右墙螺旋水冷壁P165管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18339,
      "taglogicid": "N3_DPU3023_SH0098_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0098_AALM06_PV",
      "tagdesc": "右墙螺旋水冷壁P158管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18340,
      "taglogicid": "N3_DPU3023_SH0098_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0098_AALM10_PV",
      "tagdesc": "右墙螺旋水冷壁P162管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18341,
      "taglogicid": "N3_DPU3023_SH0098_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0098_AALM17_PV",
      "tagdesc": "右墙螺旋水冷壁P169管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18342,
      "taglogicid": "N3_DPU3023_SH0098_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0098_AALM03_PV",
      "tagdesc": "右墙螺旋水冷壁P155管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18343,
      "taglogicid": "N3_DPU3023_SH0098_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0098_AALM14_PV",
      "tagdesc": "右墙螺旋水冷壁P166管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18344,
      "taglogicid": "N3_DPU3023_SH0098_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0098_AALM07_PV",
      "tagdesc": "右墙螺旋水冷壁P159管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18345,
      "taglogicid": "N3_DPU3023_SH0098_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0098_AALM21_PV",
      "tagdesc": "右墙螺旋水冷壁P173管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18346,
      "taglogicid": "N3_DPU3023_SH0098_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0098_AALM11_PV",
      "tagdesc": "右墙螺旋水冷壁P163管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18347,
      "taglogicid": "N3_DPU3023_SH0098_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0098_AALM18_PV",
      "tagdesc": "右墙螺旋水冷壁P170管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18348,
      "taglogicid": "N3_DPU3023_SH0098_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0098_AALM04_PV",
      "tagdesc": "右墙螺旋水冷壁P156管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18349,
      "taglogicid": "N3_DPU3023_SH0098_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0098_AALM15_PV",
      "tagdesc": "右墙螺旋水冷壁P167管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18350,
      "taglogicid": "N3_DPU3023_SH0098_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0098_AALM08_PV",
      "tagdesc": "右墙螺旋水冷壁P160管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18352,
      "taglogicid": "N3_DPU3023_SH0098_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0098_AALM12_PV",
      "tagdesc": "右墙螺旋水冷壁P164管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18353,
      "taglogicid": "N3_DPU3023_SH0098_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0098_AALM19_PV",
      "tagdesc": "右墙螺旋水冷壁P171管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18354,
      "taglogicid": "N3_DPU3023_SH0098_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0098_AALM16_PV",
      "tagdesc": "右墙螺旋水冷壁P168管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18356,
      "taglogicid": "N3_DPU3023_SH0098_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0098_AALM20_PV",
      "tagdesc": "右墙螺旋水冷壁P172管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18418,
      "taglogicid": "N3_DPU3023_SH0111_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0111_AALM01_PV",
      "tagdesc": "后墙螺旋水冷壁P01管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18419,
      "taglogicid": "N3_DPU3023_SH0111_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0111_AALM05_PV",
      "tagdesc": "后墙螺旋水冷壁P05管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18420,
      "taglogicid": "N3_DPU3023_SH0111_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0111_AALM09_PV",
      "tagdesc": "后墙螺旋水冷壁P09管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18421,
      "taglogicid": "N3_DPU3023_SH0111_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0111_AALM02_PV",
      "tagdesc": "后墙螺旋水冷壁P02管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18422,
      "taglogicid": "N3_DPU3023_SH0111_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0111_AALM13_PV",
      "tagdesc": "后墙螺旋水冷壁P13管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18423,
      "taglogicid": "N3_DPU3023_SH0111_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0111_AALM06_PV",
      "tagdesc": "后墙螺旋水冷壁P06管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18424,
      "taglogicid": "N3_DPU3023_SH0111_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0111_AALM10_PV",
      "tagdesc": "后墙螺旋水冷壁P10管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18425,
      "taglogicid": "N3_DPU3023_SH0111_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0111_AALM17_PV",
      "tagdesc": "后墙螺旋水冷壁P17管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18426,
      "taglogicid": "N3_DPU3023_SH0111_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0111_AALM03_PV",
      "tagdesc": "后墙螺旋水冷壁P03管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18427,
      "taglogicid": "N3_DPU3023_SH0111_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0111_AALM14_PV",
      "tagdesc": "后墙螺旋水冷壁P14管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18428,
      "taglogicid": "N3_DPU3023_SH0111_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0111_AALM07_PV",
      "tagdesc": "后墙螺旋水冷壁P07管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18429,
      "taglogicid": "N3_DPU3023_SH0111_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0111_AALM21_PV",
      "tagdesc": "后墙螺旋水冷壁P21管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18430,
      "taglogicid": "N3_DPU3023_SH0111_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0111_AALM11_PV",
      "tagdesc": "后墙螺旋水冷壁P11管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18431,
      "taglogicid": "N3_DPU3023_SH0111_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0111_AALM18_PV",
      "tagdesc": "后墙螺旋水冷壁P18管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18432,
      "taglogicid": "N3_DPU3023_SH0111_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0111_AALM04_PV",
      "tagdesc": "后墙螺旋水冷壁P04管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18433,
      "taglogicid": "N3_DPU3023_SH0111_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0111_AALM15_PV",
      "tagdesc": "后墙螺旋水冷壁P15管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18434,
      "taglogicid": "N3_DPU3023_SH0111_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0111_AALM08_PV",
      "tagdesc": "后墙螺旋水冷壁P08管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18435,
      "taglogicid": "N3_DPU3023_SH0111_AALM22_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0111_AALM22_PV",
      "tagdesc": "后墙螺旋水冷壁P22管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18436,
      "taglogicid": "N3_DPU3023_SH0111_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0111_AALM12_PV",
      "tagdesc": "后墙螺旋水冷壁P12管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18437,
      "taglogicid": "N3_DPU3023_SH0111_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0111_AALM19_PV",
      "tagdesc": "后墙螺旋水冷壁P19管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18438,
      "taglogicid": "N3_DPU3023_SH0111_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0111_AALM16_PV",
      "tagdesc": "后墙螺旋水冷壁P16管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18440,
      "taglogicid": "N3_DPU3023_SH0111_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0111_AALM20_PV",
      "tagdesc": "后墙螺旋水冷壁P20管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18442,
      "taglogicid": "N3_DPU3023_SH0112_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0112_AALM01_PV",
      "tagdesc": "后墙螺旋水冷壁P23管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18443,
      "taglogicid": "N3_DPU3023_SH0112_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0112_AALM05_PV",
      "tagdesc": "后墙螺旋水冷壁P27管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18444,
      "taglogicid": "N3_DPU3023_SH0112_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0112_AALM09_PV",
      "tagdesc": "后墙螺旋水冷壁P31管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18445,
      "taglogicid": "N3_DPU3023_SH0112_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0112_AALM02_PV",
      "tagdesc": "后墙螺旋水冷壁P24管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18446,
      "taglogicid": "N3_DPU3023_SH0112_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0112_AALM13_PV",
      "tagdesc": "后墙螺旋水冷壁P35管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18447,
      "taglogicid": "N3_DPU3023_SH0112_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0112_AALM06_PV",
      "tagdesc": "后墙螺旋水冷壁P28管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18448,
      "taglogicid": "N3_DPU3023_SH0112_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0112_AALM10_PV",
      "tagdesc": "后墙螺旋水冷壁P32管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18449,
      "taglogicid": "N3_DPU3023_SH0112_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0112_AALM17_PV",
      "tagdesc": "后墙螺旋水冷壁P39管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18450,
      "taglogicid": "N3_DPU3023_SH0112_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0112_AALM03_PV",
      "tagdesc": "后墙螺旋水冷壁P25管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18451,
      "taglogicid": "N3_DPU3023_SH0112_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0112_AALM14_PV",
      "tagdesc": "后墙螺旋水冷壁P36管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18452,
      "taglogicid": "N3_DPU3023_SH0112_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0112_AALM07_PV",
      "tagdesc": "后墙螺旋水冷壁P29管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18453,
      "taglogicid": "N3_DPU3023_SH0112_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0112_AALM21_PV",
      "tagdesc": "后墙螺旋水冷壁P43管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18454,
      "taglogicid": "N3_DPU3023_SH0112_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0112_AALM11_PV",
      "tagdesc": "后墙螺旋水冷壁P33管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18455,
      "taglogicid": "N3_DPU3023_SH0112_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0112_AALM18_PV",
      "tagdesc": "后墙螺旋水冷壁P40管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18456,
      "taglogicid": "N3_DPU3023_SH0112_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0112_AALM04_PV",
      "tagdesc": "后墙螺旋水冷壁P26管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18457,
      "taglogicid": "N3_DPU3023_SH0112_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0112_AALM15_PV",
      "tagdesc": "后墙螺旋水冷壁P37管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18458,
      "taglogicid": "N3_DPU3023_SH0112_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0112_AALM08_PV",
      "tagdesc": "后墙螺旋水冷壁P30管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18459,
      "taglogicid": "N3_DPU3023_SH0112_AALM22_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0112_AALM22_PV",
      "tagdesc": "后墙螺旋水冷壁P44管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18460,
      "taglogicid": "N3_DPU3023_SH0112_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0112_AALM12_PV",
      "tagdesc": "后墙螺旋水冷壁P34管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18461,
      "taglogicid": "N3_DPU3023_SH0112_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0112_AALM19_PV",
      "tagdesc": "后墙螺旋水冷壁P41管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18462,
      "taglogicid": "N3_DPU3023_SH0112_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0112_AALM16_PV",
      "tagdesc": "后墙螺旋水冷壁P38管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18464,
      "taglogicid": "N3_DPU3023_SH0112_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0112_AALM20_PV",
      "tagdesc": "后墙螺旋水冷壁P42管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18466,
      "taglogicid": "N3_DPU3023_SH0113_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0113_AALM01_PV",
      "tagdesc": "后墙螺旋水冷壁P45管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18467,
      "taglogicid": "N3_DPU3023_SH0113_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0113_AALM02_PV",
      "tagdesc": "后墙螺旋水冷壁P46管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18468,
      "taglogicid": "N3_DPU3023_SH0113_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0113_AALM03_PV",
      "tagdesc": "后墙螺旋水冷壁P47管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18469,
      "taglogicid": "N3_DPU3023_SH0113_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0113_AALM04_PV",
      "tagdesc": "后墙螺旋水冷壁P48管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18470,
      "taglogicid": "N3_DPU3023_SH0113_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0113_AALM05_PV",
      "tagdesc": "后墙螺旋水冷壁P49管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18471,
      "taglogicid": "N3_DPU3023_SH0113_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0113_AALM08_PV",
      "tagdesc": "后墙螺旋水冷壁P52管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18472,
      "taglogicid": "N3_DPU3023_SH0113_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0113_AALM07_PV",
      "tagdesc": "后墙螺旋水冷壁P51管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18473,
      "taglogicid": "N3_DPU3023_SH0113_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0113_AALM06_PV",
      "tagdesc": "后墙螺旋水冷壁P50管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18474,
      "taglogicid": "N3_DPU3023_SH0113_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0113_AALM09_PV",
      "tagdesc": "后墙螺旋水冷壁P53管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18475,
      "taglogicid": "N3_DPU3023_SH0113_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0113_AALM10_PV",
      "tagdesc": "后墙螺旋水冷壁P54管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18476,
      "taglogicid": "N3_DPU3023_SH0113_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0113_AALM11_PV",
      "tagdesc": "后墙螺旋水冷壁P55管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18477,
      "taglogicid": "N3_DPU3023_SH0113_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0113_AALM12_PV",
      "tagdesc": "后墙螺旋水冷壁P56管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18478,
      "taglogicid": "N3_DPU3023_SH0113_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0113_AALM13_PV",
      "tagdesc": "后墙螺旋水冷壁P57管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18479,
      "taglogicid": "N3_DPU3023_SH0113_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0113_AALM16_PV",
      "tagdesc": "后墙螺旋水冷壁P60管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18480,
      "taglogicid": "N3_DPU3023_SH0113_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0113_AALM15_PV",
      "tagdesc": "后墙螺旋水冷壁P59管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18481,
      "taglogicid": "N3_DPU3023_SH0113_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0113_AALM14_PV",
      "tagdesc": "后墙螺旋水冷壁P58管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18482,
      "taglogicid": "N3_DPU3023_SH0113_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0113_AALM17_PV",
      "tagdesc": "后墙螺旋水冷壁P61管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18483,
      "taglogicid": "N3_DPU3023_SH0113_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0113_AALM18_PV",
      "tagdesc": "后墙螺旋水冷壁P62管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18484,
      "taglogicid": "N3_DPU3023_SH0113_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0113_AALM19_PV",
      "tagdesc": "后墙螺旋水冷壁P63管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18485,
      "taglogicid": "N3_DPU3023_SH0113_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0113_AALM20_PV",
      "tagdesc": "后墙螺旋水冷壁P64管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18486,
      "taglogicid": "N3_DPU3023_SH0113_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0113_AALM21_PV",
      "tagdesc": "后墙螺旋水冷壁P65管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18489,
      "taglogicid": "N3_DPU3023_SH0113_AALM22_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0113_AALM22_PV",
      "tagdesc": "后墙螺旋水冷壁P66管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18490,
      "taglogicid": "N3_DPU3023_SH0114_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0114_AALM01_PV",
      "tagdesc": "后墙螺旋水冷壁P67管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18491,
      "taglogicid": "N3_DPU3023_SH0114_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0114_AALM02_PV",
      "tagdesc": "后墙螺旋水冷壁P68管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18492,
      "taglogicid": "N3_DPU3023_SH0114_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0114_AALM03_PV",
      "tagdesc": "后墙螺旋水冷壁P69管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18493,
      "taglogicid": "N3_DPU3023_SH0114_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0114_AALM04_PV",
      "tagdesc": "后墙螺旋水冷壁P70管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18494,
      "taglogicid": "N3_DPU3023_SH0114_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0114_AALM05_PV",
      "tagdesc": "后墙螺旋水冷壁P71管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18495,
      "taglogicid": "N3_DPU3023_SH0114_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0114_AALM08_PV",
      "tagdesc": "后墙螺旋水冷壁P74管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18496,
      "taglogicid": "N3_DPU3023_SH0114_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0114_AALM07_PV",
      "tagdesc": "后墙螺旋水冷壁P73管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18497,
      "taglogicid": "N3_DPU3023_SH0114_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0114_AALM06_PV",
      "tagdesc": "后墙螺旋水冷壁P72管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18498,
      "taglogicid": "N3_DPU3023_SH0114_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0114_AALM09_PV",
      "tagdesc": "后墙螺旋水冷壁P75管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18499,
      "taglogicid": "N3_DPU3023_SH0114_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0114_AALM10_PV",
      "tagdesc": "后墙螺旋水冷壁P76管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18500,
      "taglogicid": "N3_DPU3023_SH0114_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0114_AALM11_PV",
      "tagdesc": "后墙螺旋水冷壁P77管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18501,
      "taglogicid": "N3_DPU3023_SH0114_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0114_AALM12_PV",
      "tagdesc": "后墙螺旋水冷壁P78管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18502,
      "taglogicid": "N3_DPU3023_SH0114_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0114_AALM13_PV",
      "tagdesc": "后墙螺旋水冷壁P79管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18503,
      "taglogicid": "N3_DPU3023_SH0114_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0114_AALM16_PV",
      "tagdesc": "后墙螺旋水冷壁P82管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18504,
      "taglogicid": "N3_DPU3023_SH0114_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0114_AALM15_PV",
      "tagdesc": "后墙螺旋水冷壁P81管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18505,
      "taglogicid": "N3_DPU3023_SH0114_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0114_AALM14_PV",
      "tagdesc": "后墙螺旋水冷壁P80管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18506,
      "taglogicid": "N3_DPU3023_SH0114_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0114_AALM17_PV",
      "tagdesc": "后墙螺旋水冷壁P83管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18507,
      "taglogicid": "N3_DPU3023_SH0114_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0114_AALM18_PV",
      "tagdesc": "后墙螺旋水冷壁P84管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18508,
      "taglogicid": "N3_DPU3023_SH0114_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0114_AALM19_PV",
      "tagdesc": "后墙螺旋水冷壁P85管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18509,
      "taglogicid": "N3_DPU3023_SH0114_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0114_AALM20_PV",
      "tagdesc": "后墙螺旋水冷壁P86管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18510,
      "taglogicid": "N3_DPU3023_SH0114_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0114_AALM21_PV",
      "tagdesc": "后墙螺旋水冷壁P87管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18513,
      "taglogicid": "N3_DPU3023_SH0114_AALM22_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0114_AALM22_PV",
      "tagdesc": "后墙螺旋水冷壁P88管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18514,
      "taglogicid": "N3_DPU3023_SH0115_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0115_AALM01_PV",
      "tagdesc": "后墙螺旋水冷壁P89管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18515,
      "taglogicid": "N3_DPU3023_SH0115_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0115_AALM02_PV",
      "tagdesc": "后墙螺旋水冷壁P90管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18516,
      "taglogicid": "N3_DPU3023_SH0115_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0115_AALM03_PV",
      "tagdesc": "后墙螺旋水冷壁P91管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18517,
      "taglogicid": "N3_DPU3023_SH0115_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0115_AALM04_PV",
      "tagdesc": "后墙螺旋水冷壁P92管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18518,
      "taglogicid": "N3_DPU3023_SH0115_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0115_AALM05_PV",
      "tagdesc": "后墙螺旋水冷壁P93管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18519,
      "taglogicid": "N3_DPU3023_SH0115_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0115_AALM08_PV",
      "tagdesc": "后墙螺旋水冷壁P96管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18520,
      "taglogicid": "N3_DPU3023_SH0115_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0115_AALM07_PV",
      "tagdesc": "后墙螺旋水冷壁P95管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18521,
      "taglogicid": "N3_DPU3023_SH0115_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0115_AALM06_PV",
      "tagdesc": "后墙螺旋水冷壁P94管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18522,
      "taglogicid": "N3_DPU3023_SH0115_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0115_AALM09_PV",
      "tagdesc": "后墙螺旋水冷壁P97管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18523,
      "taglogicid": "N3_DPU3023_SH0115_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0115_AALM10_PV",
      "tagdesc": "后墙螺旋水冷壁P98管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18524,
      "taglogicid": "N3_DPU3023_SH0115_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0115_AALM11_PV",
      "tagdesc": "后墙螺旋水冷壁P99管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18525,
      "taglogicid": "N3_DPU3023_SH0115_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0115_AALM12_PV",
      "tagdesc": "后墙螺旋水冷壁P100管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18526,
      "taglogicid": "N3_DPU3023_SH0115_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0115_AALM13_PV",
      "tagdesc": "后墙螺旋水冷壁P101管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18527,
      "taglogicid": "N3_DPU3023_SH0115_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0115_AALM16_PV",
      "tagdesc": "后墙螺旋水冷壁P104管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18528,
      "taglogicid": "N3_DPU3023_SH0115_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0115_AALM15_PV",
      "tagdesc": "后墙螺旋水冷壁P103管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18529,
      "taglogicid": "N3_DPU3023_SH0115_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0115_AALM14_PV",
      "tagdesc": "后墙螺旋水冷壁P102管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18530,
      "taglogicid": "N3_DPU3023_SH0115_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0115_AALM17_PV",
      "tagdesc": "后墙螺旋水冷壁P105管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18531,
      "taglogicid": "N3_DPU3023_SH0115_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0115_AALM18_PV",
      "tagdesc": "后墙螺旋水冷壁P106管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18532,
      "taglogicid": "N3_DPU3023_SH0115_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0115_AALM19_PV",
      "tagdesc": "后墙螺旋水冷壁P107管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18533,
      "taglogicid": "N3_DPU3023_SH0115_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0115_AALM20_PV",
      "tagdesc": "后墙螺旋水冷壁P108管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18534,
      "taglogicid": "N3_DPU3023_SH0115_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0115_AALM21_PV",
      "tagdesc": "后墙螺旋水冷壁P109管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18537,
      "taglogicid": "N3_DPU3023_SH0115_AALM22_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0115_AALM22_PV",
      "tagdesc": "后墙螺旋水冷壁P110管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18538,
      "taglogicid": "N3_DPU3023_SH0116_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0116_AALM01_PV",
      "tagdesc": "后墙螺旋水冷壁P111管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18539,
      "taglogicid": "N3_DPU3023_SH0116_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0116_AALM02_PV",
      "tagdesc": "后墙螺旋水冷壁P112管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18540,
      "taglogicid": "N3_DPU3023_SH0116_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0116_AALM03_PV",
      "tagdesc": "后墙螺旋水冷壁P113管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18541,
      "taglogicid": "N3_DPU3023_SH0116_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0116_AALM04_PV",
      "tagdesc": "后墙螺旋水冷壁P114管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18542,
      "taglogicid": "N3_DPU3023_SH0116_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0116_AALM05_PV",
      "tagdesc": "后墙螺旋水冷壁P115管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18543,
      "taglogicid": "N3_DPU3023_SH0116_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0116_AALM08_PV",
      "tagdesc": "后墙螺旋水冷壁P118管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18544,
      "taglogicid": "N3_DPU3023_SH0116_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0116_AALM07_PV",
      "tagdesc": "后墙螺旋水冷壁P117管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18545,
      "taglogicid": "N3_DPU3023_SH0116_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0116_AALM06_PV",
      "tagdesc": "后墙螺旋水冷壁P116管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18546,
      "taglogicid": "N3_DPU3023_SH0116_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0116_AALM09_PV",
      "tagdesc": "后墙螺旋水冷壁P119管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18547,
      "taglogicid": "N3_DPU3023_SH0116_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0116_AALM10_PV",
      "tagdesc": "后墙螺旋水冷壁P120管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18548,
      "taglogicid": "N3_DPU3023_SH0116_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0116_AALM11_PV",
      "tagdesc": "后墙螺旋水冷壁P121管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18549,
      "taglogicid": "N3_DPU3023_SH0116_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0116_AALM12_PV",
      "tagdesc": "后墙螺旋水冷壁P122管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18550,
      "taglogicid": "N3_DPU3023_SH0116_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0116_AALM13_PV",
      "tagdesc": "后墙螺旋水冷壁P123管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18551,
      "taglogicid": "N3_DPU3023_SH0116_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0116_AALM16_PV",
      "tagdesc": "后墙螺旋水冷壁P126管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18552,
      "taglogicid": "N3_DPU3023_SH0116_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0116_AALM15_PV",
      "tagdesc": "后墙螺旋水冷壁P125管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18553,
      "taglogicid": "N3_DPU3023_SH0116_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0116_AALM14_PV",
      "tagdesc": "后墙螺旋水冷壁P124管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18554,
      "taglogicid": "N3_DPU3023_SH0116_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0116_AALM17_PV",
      "tagdesc": "后墙螺旋水冷壁P127管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18555,
      "taglogicid": "N3_DPU3023_SH0116_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0116_AALM18_PV",
      "tagdesc": "后墙螺旋水冷壁P128管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18556,
      "taglogicid": "N3_DPU3023_SH0116_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0116_AALM19_PV",
      "tagdesc": "后墙螺旋水冷壁P129管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18557,
      "taglogicid": "N3_DPU3023_SH0116_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0116_AALM20_PV",
      "tagdesc": "后墙螺旋水冷壁P130管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18562,
      "taglogicid": "N3_DPU3023_SH0117_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0117_AALM01_PV",
      "tagdesc": "后墙螺旋水冷壁P131管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18563,
      "taglogicid": "N3_DPU3023_SH0117_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0117_AALM02_PV",
      "tagdesc": "后墙螺旋水冷壁P132管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18564,
      "taglogicid": "N3_DPU3023_SH0117_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0117_AALM03_PV",
      "tagdesc": "后墙螺旋水冷壁P133管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18565,
      "taglogicid": "N3_DPU3023_SH0117_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0117_AALM04_PV",
      "tagdesc": "后墙螺旋水冷壁P134管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18566,
      "taglogicid": "N3_DPU3023_SH0117_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0117_AALM05_PV",
      "tagdesc": "后墙螺旋水冷壁P135管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18567,
      "taglogicid": "N3_DPU3023_SH0117_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0117_AALM08_PV",
      "tagdesc": "后墙螺旋水冷壁P138管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18568,
      "taglogicid": "N3_DPU3023_SH0117_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0117_AALM07_PV",
      "tagdesc": "后墙螺旋水冷壁P137管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18569,
      "taglogicid": "N3_DPU3023_SH0117_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0117_AALM06_PV",
      "tagdesc": "后墙螺旋水冷壁P136管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18570,
      "taglogicid": "N3_DPU3023_SH0117_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0117_AALM09_PV",
      "tagdesc": "后墙螺旋水冷壁P139管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18571,
      "taglogicid": "N3_DPU3023_SH0117_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0117_AALM10_PV",
      "tagdesc": "后墙螺旋水冷壁P140管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18572,
      "taglogicid": "N3_DPU3023_SH0117_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0117_AALM11_PV",
      "tagdesc": "后墙螺旋水冷壁P141管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18573,
      "taglogicid": "N3_DPU3023_SH0117_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0117_AALM12_PV",
      "tagdesc": "后墙螺旋水冷壁P142管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18574,
      "taglogicid": "N3_DPU3023_SH0117_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0117_AALM13_PV",
      "tagdesc": "后墙螺旋水冷壁P143管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18575,
      "taglogicid": "N3_DPU3023_SH0117_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0117_AALM16_PV",
      "tagdesc": "后墙螺旋水冷壁P146管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18576,
      "taglogicid": "N3_DPU3023_SH0117_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0117_AALM15_PV",
      "tagdesc": "后墙螺旋水冷壁P145管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18577,
      "taglogicid": "N3_DPU3023_SH0117_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0117_AALM14_PV",
      "tagdesc": "后墙螺旋水冷壁P144管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18578,
      "taglogicid": "N3_DPU3023_SH0117_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0117_AALM17_PV",
      "tagdesc": "后墙螺旋水冷壁P147管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18579,
      "taglogicid": "N3_DPU3023_SH0117_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0117_AALM18_PV",
      "tagdesc": "后墙螺旋水冷壁P148管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18580,
      "taglogicid": "N3_DPU3023_SH0117_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0117_AALM19_PV",
      "tagdesc": "后墙螺旋水冷壁P149管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18581,
      "taglogicid": "N3_DPU3023_SH0117_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0117_AALM20_PV",
      "tagdesc": "后墙螺旋水冷壁P150管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18582,
      "taglogicid": "N3_DPU3023_SH0117_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0117_AALM21_PV",
      "tagdesc": "后墙螺旋水冷壁P151管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18585,
      "taglogicid": "N3_DPU3023_SH0117_AALM22_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0117_AALM22_PV",
      "tagdesc": "后墙螺旋水冷壁P152管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18586,
      "taglogicid": "N3_DPU3023_SH0118_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0118_AALM01_PV",
      "tagdesc": "后墙螺旋水冷壁P153管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18587,
      "taglogicid": "N3_DPU3023_SH0118_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0118_AALM02_PV",
      "tagdesc": "后墙螺旋水冷壁P154管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18588,
      "taglogicid": "N3_DPU3023_SH0118_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0118_AALM03_PV",
      "tagdesc": "后墙螺旋水冷壁P155管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18589,
      "taglogicid": "N3_DPU3023_SH0118_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0118_AALM04_PV",
      "tagdesc": "后墙螺旋水冷壁P156管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18590,
      "taglogicid": "N3_DPU3023_SH0118_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0118_AALM05_PV",
      "tagdesc": "后墙螺旋水冷壁P157管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18591,
      "taglogicid": "N3_DPU3023_SH0118_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0118_AALM08_PV",
      "tagdesc": "后墙螺旋水冷壁P160管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18592,
      "taglogicid": "N3_DPU3023_SH0118_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0118_AALM07_PV",
      "tagdesc": "后墙螺旋水冷壁P159管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18593,
      "taglogicid": "N3_DPU3023_SH0118_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0118_AALM06_PV",
      "tagdesc": "后墙螺旋水冷壁P158管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18594,
      "taglogicid": "N3_DPU3023_SH0118_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0118_AALM09_PV",
      "tagdesc": "后墙螺旋水冷壁P161管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18595,
      "taglogicid": "N3_DPU3023_SH0118_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0118_AALM10_PV",
      "tagdesc": "后墙螺旋水冷壁P162管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18596,
      "taglogicid": "N3_DPU3023_SH0118_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0118_AALM11_PV",
      "tagdesc": "后墙螺旋水冷壁P163管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18597,
      "taglogicid": "N3_DPU3023_SH0118_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0118_AALM12_PV",
      "tagdesc": "后墙螺旋水冷壁P164管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18598,
      "taglogicid": "N3_DPU3023_SH0118_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0118_AALM13_PV",
      "tagdesc": "后墙螺旋水冷壁P165管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18599,
      "taglogicid": "N3_DPU3023_SH0118_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0118_AALM16_PV",
      "tagdesc": "后墙螺旋水冷壁P168管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18600,
      "taglogicid": "N3_DPU3023_SH0118_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0118_AALM15_PV",
      "tagdesc": "后墙螺旋水冷壁P167管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18601,
      "taglogicid": "N3_DPU3023_SH0118_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0118_AALM14_PV",
      "tagdesc": "后墙螺旋水冷壁P166管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18602,
      "taglogicid": "N3_DPU3023_SH0118_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0118_AALM17_PV",
      "tagdesc": "后墙螺旋水冷壁P169管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18603,
      "taglogicid": "N3_DPU3023_SH0118_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0118_AALM18_PV",
      "tagdesc": "后墙螺旋水冷壁P170管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18604,
      "taglogicid": "N3_DPU3023_SH0118_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0118_AALM19_PV",
      "tagdesc": "后墙螺旋水冷壁P171管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18605,
      "taglogicid": "N3_DPU3023_SH0118_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0118_AALM20_PV",
      "tagdesc": "后墙螺旋水冷壁P172管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 18606,
      "taglogicid": "N3_DPU3023_SH0118_AALM21_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0118_AALM21_PV",
      "tagdesc": "后墙螺旋水冷壁P173管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19150,
      "taglogicid": "N3_DPU3023_SH0171_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0171_AALM01_PV",
      "tagdesc": "高温过热器P01屏G01管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19151,
      "taglogicid": "N3_DPU3023_SH0171_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0171_AALM02_PV",
      "tagdesc": "高温过热器P01屏G02管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19152,
      "taglogicid": "N3_DPU3023_SH0171_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0171_AALM03_PV",
      "tagdesc": "高温过热器P01屏G03管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19153,
      "taglogicid": "N3_DPU3023_SH0171_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0171_AALM04_PV",
      "tagdesc": "高温过热器P01屏G04管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19154,
      "taglogicid": "N3_DPU3023_SH0171_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0171_AALM05_PV",
      "tagdesc": "高温过热器P01屏G05管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19155,
      "taglogicid": "N3_DPU3023_SH0171_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0171_AALM08_PV",
      "tagdesc": "高温过热器P01屏G08管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19156,
      "taglogicid": "N3_DPU3023_SH0171_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0171_AALM07_PV",
      "tagdesc": "高温过热器P01屏G07管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19157,
      "taglogicid": "N3_DPU3023_SH0171_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0171_AALM06_PV",
      "tagdesc": "高温过热器P01屏G06管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19158,
      "taglogicid": "N3_DPU3023_SH0171_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0171_AALM09_PV",
      "tagdesc": "高温过热器P01屏G09管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19159,
      "taglogicid": "N3_DPU3023_SH0171_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0171_AALM10_PV",
      "tagdesc": "高温过热器P01屏G10管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19160,
      "taglogicid": "N3_DPU3023_SH0171_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0171_AALM11_PV",
      "tagdesc": "高温过热器P01屏G11管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19161,
      "taglogicid": "N3_DPU3023_SH0171_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0171_AALM12_PV",
      "tagdesc": "高温过热器P01屏G12管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19162,
      "taglogicid": "N3_DPU3023_SH0171_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0171_AALM13_PV",
      "tagdesc": "高温过热器P01屏G13管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19163,
      "taglogicid": "N3_DPU3023_SH0171_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0171_AALM16_PV",
      "tagdesc": "高温过热器P01屏G16管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19164,
      "taglogicid": "N3_DPU3023_SH0171_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0171_AALM15_PV",
      "tagdesc": "高温过热器P01屏G15管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19165,
      "taglogicid": "N3_DPU3023_SH0171_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0171_AALM14_PV",
      "tagdesc": "高温过热器P01屏G14管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19166,
      "taglogicid": "N3_DPU3023_SH0171_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0171_AALM17_PV",
      "tagdesc": "高温过热器P01屏G17管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19167,
      "taglogicid": "N3_DPU3023_SH0171_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0171_AALM18_PV",
      "tagdesc": "高温过热器P01屏G18管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19168,
      "taglogicid": "N3_DPU3023_SH0171_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0171_AALM19_PV",
      "tagdesc": "高温过热器P01屏G19管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19169,
      "taglogicid": "N3_DPU3023_SH0171_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0171_AALM20_PV",
      "tagdesc": "高温过热器P02屏G01管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19174,
      "taglogicid": "N3_DPU3023_SH0172_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0172_AALM01_PV",
      "tagdesc": "高温过热器P02屏G02管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19175,
      "taglogicid": "N3_DPU3023_SH0172_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0172_AALM02_PV",
      "tagdesc": "高温过热器P02屏G03管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19176,
      "taglogicid": "N3_DPU3023_SH0172_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0172_AALM03_PV",
      "tagdesc": "高温过热器P02屏G04管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19177,
      "taglogicid": "N3_DPU3023_SH0172_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0172_AALM04_PV",
      "tagdesc": "高温过热器P02屏G05管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19178,
      "taglogicid": "N3_DPU3023_SH0172_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0172_AALM05_PV",
      "tagdesc": "高温过热器P02屏G06管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19179,
      "taglogicid": "N3_DPU3023_SH0172_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0172_AALM08_PV",
      "tagdesc": "高温过热器P02屏G09管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19180,
      "taglogicid": "N3_DPU3023_SH0172_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0172_AALM07_PV",
      "tagdesc": "高温过热器P02屏G08管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19181,
      "taglogicid": "N3_DPU3023_SH0172_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0172_AALM06_PV",
      "tagdesc": "高温过热器P02屏G07管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19182,
      "taglogicid": "N3_DPU3023_SH0172_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0172_AALM09_PV",
      "tagdesc": "高温过热器P02屏G10管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19183,
      "taglogicid": "N3_DPU3023_SH0172_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0172_AALM10_PV",
      "tagdesc": "高温过热器P02屏G11管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19184,
      "taglogicid": "N3_DPU3023_SH0172_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0172_AALM11_PV",
      "tagdesc": "高温过热器P02屏G12管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19185,
      "taglogicid": "N3_DPU3023_SH0172_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0172_AALM12_PV",
      "tagdesc": "高温过热器P02屏G13管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19186,
      "taglogicid": "N3_DPU3023_SH0172_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0172_AALM13_PV",
      "tagdesc": "高温过热器P02屏G14管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19187,
      "taglogicid": "N3_DPU3023_SH0172_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0172_AALM16_PV",
      "tagdesc": "高温过热器P02屏G17管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19188,
      "taglogicid": "N3_DPU3023_SH0172_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0172_AALM15_PV",
      "tagdesc": "高温过热器P02屏G16管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19189,
      "taglogicid": "N3_DPU3023_SH0172_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0172_AALM14_PV",
      "tagdesc": "高温过热器P02屏G15管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19190,
      "taglogicid": "N3_DPU3023_SH0172_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0172_AALM17_PV",
      "tagdesc": "高温过热器P02屏G18管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19191,
      "taglogicid": "N3_DPU3023_SH0172_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0172_AALM18_PV",
      "tagdesc": "高温过热器P02屏G19管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19192,
      "taglogicid": "N3_DPU3023_SH0172_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0172_AALM19_PV",
      "tagdesc": "高温过热器P03屏G01管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19193,
      "taglogicid": "N3_DPU3023_SH0172_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0172_AALM20_PV",
      "tagdesc": "高温过热器P03屏G02管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19198,
      "taglogicid": "N3_DPU3023_SH0173_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0173_AALM01_PV",
      "tagdesc": "高温过热器P03屏G03管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19199,
      "taglogicid": "N3_DPU3023_SH0173_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0173_AALM02_PV",
      "tagdesc": "高温过热器P03屏G04管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19200,
      "taglogicid": "N3_DPU3023_SH0173_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0173_AALM03_PV",
      "tagdesc": "高温过热器P03屏G05管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19201,
      "taglogicid": "N3_DPU3023_SH0173_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0173_AALM04_PV",
      "tagdesc": "高温过热器P03屏G06管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19202,
      "taglogicid": "N3_DPU3023_SH0173_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0173_AALM05_PV",
      "tagdesc": "高温过热器P03屏G07管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19203,
      "taglogicid": "N3_DPU3023_SH0173_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0173_AALM08_PV",
      "tagdesc": "高温过热器P03屏G10管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19204,
      "taglogicid": "N3_DPU3023_SH0173_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0173_AALM07_PV",
      "tagdesc": "高温过热器P03屏G09管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19205,
      "taglogicid": "N3_DPU3023_SH0173_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0173_AALM06_PV",
      "tagdesc": "高温过热器P03屏G08管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19206,
      "taglogicid": "N3_DPU3023_SH0173_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0173_AALM09_PV",
      "tagdesc": "高温过热器P03屏G11管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19207,
      "taglogicid": "N3_DPU3023_SH0173_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0173_AALM10_PV",
      "tagdesc": "高温过热器P03屏G12管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19208,
      "taglogicid": "N3_DPU3023_SH0173_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0173_AALM11_PV",
      "tagdesc": "高温过热器P03屏G13管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19209,
      "taglogicid": "N3_DPU3023_SH0173_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0173_AALM12_PV",
      "tagdesc": "高温过热器P03屏G14管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19210,
      "taglogicid": "N3_DPU3023_SH0173_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0173_AALM13_PV",
      "tagdesc": "高温过热器P03屏G15管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19211,
      "taglogicid": "N3_DPU3023_SH0173_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0173_AALM16_PV",
      "tagdesc": "高温过热器P03屏G18管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19212,
      "taglogicid": "N3_DPU3023_SH0173_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0173_AALM15_PV",
      "tagdesc": "高温过热器P03屏G17管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19213,
      "taglogicid": "N3_DPU3023_SH0173_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0173_AALM14_PV",
      "tagdesc": "高温过热器P03屏G16管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19214,
      "taglogicid": "N3_DPU3023_SH0173_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0173_AALM17_PV",
      "tagdesc": "高温过热器P03屏G19管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19215,
      "taglogicid": "N3_DPU3023_SH0173_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0173_AALM18_PV",
      "tagdesc": "高温过热器P04屏G01管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19216,
      "taglogicid": "N3_DPU3023_SH0173_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0173_AALM19_PV",
      "tagdesc": "高温过热器P04屏G02管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19217,
      "taglogicid": "N3_DPU3023_SH0173_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0173_AALM20_PV",
      "tagdesc": "高温过热器P04屏G03管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19222,
      "taglogicid": "N3_DPU3023_SH0174_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0174_AALM01_PV",
      "tagdesc": "高温过热器P04屏G04管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19223,
      "taglogicid": "N3_DPU3023_SH0174_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0174_AALM02_PV",
      "tagdesc": "高温过热器P04屏G05管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19224,
      "taglogicid": "N3_DPU3023_SH0174_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0174_AALM03_PV",
      "tagdesc": "高温过热器P04屏G06管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19225,
      "taglogicid": "N3_DPU3023_SH0174_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0174_AALM04_PV",
      "tagdesc": "高温过热器P04屏G07管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19226,
      "taglogicid": "N3_DPU3023_SH0174_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0174_AALM05_PV",
      "tagdesc": "高温过热器P04屏G08管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19227,
      "taglogicid": "N3_DPU3023_SH0174_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0174_AALM08_PV",
      "tagdesc": "高温过热器P04屏G11管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19228,
      "taglogicid": "N3_DPU3023_SH0174_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0174_AALM07_PV",
      "tagdesc": "高温过热器P04屏G10管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19229,
      "taglogicid": "N3_DPU3023_SH0174_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0174_AALM06_PV",
      "tagdesc": "高温过热器P04屏G09管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19230,
      "taglogicid": "N3_DPU3023_SH0174_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0174_AALM09_PV",
      "tagdesc": "高温过热器P04屏G12管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19231,
      "taglogicid": "N3_DPU3023_SH0174_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0174_AALM10_PV",
      "tagdesc": "高温过热器P04屏G13管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19232,
      "taglogicid": "N3_DPU3023_SH0174_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0174_AALM11_PV",
      "tagdesc": "高温过热器P04屏G14管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19233,
      "taglogicid": "N3_DPU3023_SH0174_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0174_AALM12_PV",
      "tagdesc": "高温过热器P04屏G15管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19234,
      "taglogicid": "N3_DPU3023_SH0174_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0174_AALM13_PV",
      "tagdesc": "高温过热器P04屏G16管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19235,
      "taglogicid": "N3_DPU3023_SH0174_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0174_AALM16_PV",
      "tagdesc": "高温过热器P04屏G19管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19236,
      "taglogicid": "N3_DPU3023_SH0174_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0174_AALM15_PV",
      "tagdesc": "高温过热器P04屏G18管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19237,
      "taglogicid": "N3_DPU3023_SH0174_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0174_AALM14_PV",
      "tagdesc": "高温过热器P04屏G17管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19238,
      "taglogicid": "N3_DPU3023_SH0174_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0174_AALM17_PV",
      "tagdesc": "高温过热器P05屏G01管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19239,
      "taglogicid": "N3_DPU3023_SH0174_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0174_AALM18_PV",
      "tagdesc": "高温过热器P05屏G02管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19240,
      "taglogicid": "N3_DPU3023_SH0174_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0174_AALM19_PV",
      "tagdesc": "高温过热器P05屏G03管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19241,
      "taglogicid": "N3_DPU3023_SH0174_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0174_AALM20_PV",
      "tagdesc": "高温过热器P05屏G04管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19246,
      "taglogicid": "N3_DPU3023_SH0175_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0175_AALM01_PV",
      "tagdesc": "高温过热器P05屏G05管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19247,
      "taglogicid": "N3_DPU3023_SH0175_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0175_AALM02_PV",
      "tagdesc": "高温过热器P05屏G06管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19248,
      "taglogicid": "N3_DPU3023_SH0175_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0175_AALM03_PV",
      "tagdesc": "高温过热器P05屏G07管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19249,
      "taglogicid": "N3_DPU3023_SH0175_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0175_AALM04_PV",
      "tagdesc": "高温过热器P05屏G08管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19250,
      "taglogicid": "N3_DPU3023_SH0175_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0175_AALM05_PV",
      "tagdesc": "高温过热器P05屏G09管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19251,
      "taglogicid": "N3_DPU3023_SH0175_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0175_AALM08_PV",
      "tagdesc": "高温过热器P05屏G12管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19252,
      "taglogicid": "N3_DPU3023_SH0175_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0175_AALM07_PV",
      "tagdesc": "高温过热器P05屏G11管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19253,
      "taglogicid": "N3_DPU3023_SH0175_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0175_AALM06_PV",
      "tagdesc": "高温过热器P05屏G10管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19254,
      "taglogicid": "N3_DPU3023_SH0175_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0175_AALM09_PV",
      "tagdesc": "高温过热器P05屏G13管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19255,
      "taglogicid": "N3_DPU3023_SH0175_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0175_AALM10_PV",
      "tagdesc": "高温过热器P05屏G14管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19256,
      "taglogicid": "N3_DPU3023_SH0175_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0175_AALM11_PV",
      "tagdesc": "高温过热器P05屏G15管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19257,
      "taglogicid": "N3_DPU3023_SH0175_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0175_AALM12_PV",
      "tagdesc": "高温过热器P05屏G16管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19258,
      "taglogicid": "N3_DPU3023_SH0175_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0175_AALM13_PV",
      "tagdesc": "高温过热器P05屏G17管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19259,
      "taglogicid": "N3_DPU3023_SH0175_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0175_AALM16_PV",
      "tagdesc": "高温过热器P06屏G01管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19260,
      "taglogicid": "N3_DPU3023_SH0175_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0175_AALM15_PV",
      "tagdesc": "高温过热器P05屏G19管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19261,
      "taglogicid": "N3_DPU3023_SH0175_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0175_AALM14_PV",
      "tagdesc": "高温过热器P05屏G18管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19262,
      "taglogicid": "N3_DPU3023_SH0175_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0175_AALM17_PV",
      "tagdesc": "高温过热器P06屏G02管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19263,
      "taglogicid": "N3_DPU3023_SH0175_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0175_AALM18_PV",
      "tagdesc": "高温过热器P06屏G03管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19264,
      "taglogicid": "N3_DPU3023_SH0175_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0175_AALM19_PV",
      "tagdesc": "高温过热器P06屏G04管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19265,
      "taglogicid": "N3_DPU3023_SH0175_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0175_AALM20_PV",
      "tagdesc": "高温过热器P06屏G05管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19270,
      "taglogicid": "N3_DPU3023_SH0176_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0176_AALM01_PV",
      "tagdesc": "高温过热器P06屏G06管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19271,
      "taglogicid": "N3_DPU3023_SH0176_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0176_AALM02_PV",
      "tagdesc": "高温过热器P06屏G07管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19272,
      "taglogicid": "N3_DPU3023_SH0176_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0176_AALM03_PV",
      "tagdesc": "高温过热器P06屏G08管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19273,
      "taglogicid": "N3_DPU3023_SH0176_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0176_AALM04_PV",
      "tagdesc": "高温过热器P06屏G09管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19274,
      "taglogicid": "N3_DPU3023_SH0176_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0176_AALM05_PV",
      "tagdesc": "高温过热器P06屏G10管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19275,
      "taglogicid": "N3_DPU3023_SH0176_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0176_AALM08_PV",
      "tagdesc": "高温过热器P06屏G13管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19276,
      "taglogicid": "N3_DPU3023_SH0176_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0176_AALM07_PV",
      "tagdesc": "高温过热器P06屏G12管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19277,
      "taglogicid": "N3_DPU3023_SH0176_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0176_AALM06_PV",
      "tagdesc": "高温过热器P06屏G11管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19278,
      "taglogicid": "N3_DPU3023_SH0176_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0176_AALM09_PV",
      "tagdesc": "高温过热器P06屏G14管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19279,
      "taglogicid": "N3_DPU3023_SH0176_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0176_AALM10_PV",
      "tagdesc": "高温过热器P06屏G15管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19280,
      "taglogicid": "N3_DPU3023_SH0176_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0176_AALM11_PV",
      "tagdesc": "高温过热器P06屏G16管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19281,
      "taglogicid": "N3_DPU3023_SH0176_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0176_AALM12_PV",
      "tagdesc": "高温过热器P06屏G17管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19282,
      "taglogicid": "N3_DPU3023_SH0176_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0176_AALM13_PV",
      "tagdesc": "高温过热器P06屏G18管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19283,
      "taglogicid": "N3_DPU3023_SH0176_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0176_AALM16_PV",
      "tagdesc": "高温过热器P07屏G02管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19284,
      "taglogicid": "N3_DPU3023_SH0176_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0176_AALM15_PV",
      "tagdesc": "高温过热器P07屏G01管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19285,
      "taglogicid": "N3_DPU3023_SH0176_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0176_AALM14_PV",
      "tagdesc": "高温过热器P06屏G19管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19286,
      "taglogicid": "N3_DPU3023_SH0176_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0176_AALM17_PV",
      "tagdesc": "高温过热器P07屏G03管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19287,
      "taglogicid": "N3_DPU3023_SH0176_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0176_AALM18_PV",
      "tagdesc": "高温过热器P07屏G04管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19288,
      "taglogicid": "N3_DPU3023_SH0176_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0176_AALM19_PV",
      "tagdesc": "高温过热器P07屏G05管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19289,
      "taglogicid": "N3_DPU3023_SH0176_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0176_AALM20_PV",
      "tagdesc": "高温过热器P07屏G06管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19294,
      "taglogicid": "N3_DPU3023_SH0177_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0177_AALM01_PV",
      "tagdesc": "高温过热器P07屏G07管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19295,
      "taglogicid": "N3_DPU3023_SH0177_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0177_AALM02_PV",
      "tagdesc": "高温过热器P07屏G08管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19296,
      "taglogicid": "N3_DPU3023_SH0177_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0177_AALM03_PV",
      "tagdesc": "高温过热器P07屏G09管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19297,
      "taglogicid": "N3_DPU3023_SH0177_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0177_AALM04_PV",
      "tagdesc": "高温过热器P07屏G10管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19298,
      "taglogicid": "N3_DPU3023_SH0177_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0177_AALM05_PV",
      "tagdesc": "高温过热器P07屏G11管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19299,
      "taglogicid": "N3_DPU3023_SH0177_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0177_AALM08_PV",
      "tagdesc": "高温过热器P07屏G14管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19300,
      "taglogicid": "N3_DPU3023_SH0177_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0177_AALM07_PV",
      "tagdesc": "高温过热器P07屏G13管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19301,
      "taglogicid": "N3_DPU3023_SH0177_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0177_AALM06_PV",
      "tagdesc": "高温过热器P07屏G12管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19302,
      "taglogicid": "N3_DPU3023_SH0177_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0177_AALM09_PV",
      "tagdesc": "高温过热器P07屏G15管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19303,
      "taglogicid": "N3_DPU3023_SH0177_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0177_AALM10_PV",
      "tagdesc": "高温过热器P07屏G16管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19304,
      "taglogicid": "N3_DPU3023_SH0177_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0177_AALM11_PV",
      "tagdesc": "高温过热器P07屏G17管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19305,
      "taglogicid": "N3_DPU3023_SH0177_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0177_AALM12_PV",
      "tagdesc": "高温过热器P07屏G18管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19306,
      "taglogicid": "N3_DPU3023_SH0177_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0177_AALM13_PV",
      "tagdesc": "高温过热器P07屏G19管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19307,
      "taglogicid": "N3_DPU3023_SH0177_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0177_AALM16_PV",
      "tagdesc": "高温过热器P08屏G03管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19308,
      "taglogicid": "N3_DPU3023_SH0177_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0177_AALM15_PV",
      "tagdesc": "高温过热器P08屏G02管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19309,
      "taglogicid": "N3_DPU3023_SH0177_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0177_AALM14_PV",
      "tagdesc": "高温过热器P08屏G01管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19310,
      "taglogicid": "N3_DPU3023_SH0177_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0177_AALM17_PV",
      "tagdesc": "高温过热器P08屏G04管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19311,
      "taglogicid": "N3_DPU3023_SH0177_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0177_AALM18_PV",
      "tagdesc": "高温过热器P08屏G05管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19312,
      "taglogicid": "N3_DPU3023_SH0177_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0177_AALM19_PV",
      "tagdesc": "高温过热器P08屏G06管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19313,
      "taglogicid": "N3_DPU3023_SH0177_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0177_AALM20_PV",
      "tagdesc": "高温过热器P08屏G07管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19318,
      "taglogicid": "N3_DPU3023_SH0178_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0178_AALM01_PV",
      "tagdesc": "高温过热器P08屏G08管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19319,
      "taglogicid": "N3_DPU3023_SH0178_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0178_AALM02_PV",
      "tagdesc": "高温过热器P08屏G09管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19320,
      "taglogicid": "N3_DPU3023_SH0178_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0178_AALM03_PV",
      "tagdesc": "高温过热器P08屏G10管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19321,
      "taglogicid": "N3_DPU3023_SH0178_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0178_AALM04_PV",
      "tagdesc": "高温过热器P08屏G11管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19322,
      "taglogicid": "N3_DPU3023_SH0178_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0178_AALM05_PV",
      "tagdesc": "高温过热器P08屏G12管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19323,
      "taglogicid": "N3_DPU3023_SH0178_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0178_AALM08_PV",
      "tagdesc": "高温过热器P08屏G15管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19324,
      "taglogicid": "N3_DPU3023_SH0178_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0178_AALM07_PV",
      "tagdesc": "高温过热器P08屏G14管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19325,
      "taglogicid": "N3_DPU3023_SH0178_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0178_AALM06_PV",
      "tagdesc": "高温过热器P08屏G13管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19326,
      "taglogicid": "N3_DPU3023_SH0178_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0178_AALM09_PV",
      "tagdesc": "高温过热器P08屏G16管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19327,
      "taglogicid": "N3_DPU3023_SH0178_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0178_AALM10_PV",
      "tagdesc": "高温过热器P08屏G17管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19328,
      "taglogicid": "N3_DPU3023_SH0178_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0178_AALM11_PV",
      "tagdesc": "高温过热器P08屏G18管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19329,
      "taglogicid": "N3_DPU3023_SH0178_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0178_AALM12_PV",
      "tagdesc": "高温过热器P08屏G19管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19330,
      "taglogicid": "N3_DPU3023_SH0178_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0178_AALM13_PV",
      "tagdesc": "高温过热器P09屏G01管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19331,
      "taglogicid": "N3_DPU3023_SH0178_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0178_AALM16_PV",
      "tagdesc": "高温过热器P09屏G04管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19332,
      "taglogicid": "N3_DPU3023_SH0178_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0178_AALM15_PV",
      "tagdesc": "高温过热器P09屏G03管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19333,
      "taglogicid": "N3_DPU3023_SH0178_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0178_AALM14_PV",
      "tagdesc": "高温过热器P09屏G02管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19334,
      "taglogicid": "N3_DPU3023_SH0178_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0178_AALM17_PV",
      "tagdesc": "高温过热器P09屏G05管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19335,
      "taglogicid": "N3_DPU3023_SH0178_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0178_AALM18_PV",
      "tagdesc": "高温过热器P09屏G06管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19336,
      "taglogicid": "N3_DPU3023_SH0178_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0178_AALM19_PV",
      "tagdesc": "高温过热器P09屏G07管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19337,
      "taglogicid": "N3_DPU3023_SH0178_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0178_AALM20_PV",
      "tagdesc": "高温过热器P09屏G08管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19342,
      "taglogicid": "N3_DPU3023_SH0179_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0179_AALM01_PV",
      "tagdesc": "高温过热器P09屏G09管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19343,
      "taglogicid": "N3_DPU3023_SH0179_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0179_AALM02_PV",
      "tagdesc": "高温过热器P09屏G10管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19344,
      "taglogicid": "N3_DPU3023_SH0179_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0179_AALM03_PV",
      "tagdesc": "高温过热器P09屏G11管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19345,
      "taglogicid": "N3_DPU3023_SH0179_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0179_AALM04_PV",
      "tagdesc": "高温过热器P09屏G12管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19346,
      "taglogicid": "N3_DPU3023_SH0179_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0179_AALM05_PV",
      "tagdesc": "高温过热器P09屏G13管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19347,
      "taglogicid": "N3_DPU3023_SH0179_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0179_AALM08_PV",
      "tagdesc": "高温过热器P09屏G16管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19348,
      "taglogicid": "N3_DPU3023_SH0179_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0179_AALM07_PV",
      "tagdesc": "高温过热器P09屏G15管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19349,
      "taglogicid": "N3_DPU3023_SH0179_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0179_AALM06_PV",
      "tagdesc": "高温过热器P09屏G14管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19350,
      "taglogicid": "N3_DPU3023_SH0179_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0179_AALM09_PV",
      "tagdesc": "高温过热器P09屏G17管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19351,
      "taglogicid": "N3_DPU3023_SH0179_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0179_AALM10_PV",
      "tagdesc": "高温过热器P09屏G18管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19352,
      "taglogicid": "N3_DPU3023_SH0179_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0179_AALM11_PV",
      "tagdesc": "高温过热器P09屏G19管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19353,
      "taglogicid": "N3_DPU3023_SH0179_AALM12_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0179_AALM12_PV",
      "tagdesc": "高温过热器P10屏G01管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19354,
      "taglogicid": "N3_DPU3023_SH0179_AALM13_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0179_AALM13_PV",
      "tagdesc": "高温过热器P10屏G02管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19355,
      "taglogicid": "N3_DPU3023_SH0179_AALM16_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0179_AALM16_PV",
      "tagdesc": "高温过热器P10屏G05管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19356,
      "taglogicid": "N3_DPU3023_SH0179_AALM15_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0179_AALM15_PV",
      "tagdesc": "高温过热器P10屏G04管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19357,
      "taglogicid": "N3_DPU3023_SH0179_AALM14_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0179_AALM14_PV",
      "tagdesc": "高温过热器P10屏G03管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19358,
      "taglogicid": "N3_DPU3023_SH0179_AALM17_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0179_AALM17_PV",
      "tagdesc": "高温过热器P10屏G06管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19359,
      "taglogicid": "N3_DPU3023_SH0179_AALM18_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0179_AALM18_PV",
      "tagdesc": "高温过热器P10屏G07管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19360,
      "taglogicid": "N3_DPU3023_SH0179_AALM19_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0179_AALM19_PV",
      "tagdesc": "高温过热器P10屏G08管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19361,
      "taglogicid": "N3_DPU3023_SH0179_AALM20_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0179_AALM20_PV",
      "tagdesc": "高温过热器P10屏G09管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19366,
      "taglogicid": "N3_DPU3023_SH0180_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0180_AALM01_PV",
      "tagdesc": "高温过热器P10屏G10管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19367,
      "taglogicid": "N3_DPU3023_SH0180_AALM02_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0180_AALM02_PV",
      "tagdesc": "高温过热器P10屏G11管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19368,
      "taglogicid": "N3_DPU3023_SH0180_AALM03_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0180_AALM03_PV",
      "tagdesc": "高温过热器P10屏G12管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19369,
      "taglogicid": "N3_DPU3023_SH0180_AALM04_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0180_AALM04_PV",
      "tagdesc": "高温过热器P10屏G13管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19370,
      "taglogicid": "N3_DPU3023_SH0180_AALM05_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0180_AALM05_PV",
      "tagdesc": "高温过热器P10屏G14管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19371,
      "taglogicid": "N3_DPU3023_SH0180_AALM08_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0180_AALM08_PV",
      "tagdesc": "高温过热器P10屏G17管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19372,
      "taglogicid": "N3_DPU3023_SH0180_AALM07_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0180_AALM07_PV",
      "tagdesc": "高温过热器P10屏G16管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19373,
      "taglogicid": "N3_DPU3023_SH0180_AALM06_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0180_AALM06_PV",
      "tagdesc": "高温过热器P10屏G15管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19374,
      "taglogicid": "N3_DPU3023_SH0180_AALM09_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0180_AALM09_PV",
      "tagdesc": "高温过热器P10屏G18管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19375,
      "taglogicid": "N3_DPU3023_SH0180_AALM10_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0180_AALM10_PV",
      "tagdesc": "高温过热器P10屏G19管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 19376,
      "taglogicid": "N3_DPU3023_SH0180_AALM11_PV",
      "tagid": "BHG_UNIT3_DPU3023_SH0180_AALM11_PV",
      "tagdesc": "高温过热器P11屏G01管壁温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 54415,
      "taglogicid": "N3_DPU8021_HW_RT040305_PV",
      "tagid": "BHG_UNIT3_DPU8021_HW_RT040305_PV",
      "tagdesc": "厂区产品气母管A管道温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 54416,
      "taglogicid": "N3_DPU8021_HW_RT040306_PV",
      "tagid": "BHG_UNIT3_DPU8021_HW_RT040306_PV",
      "tagdesc": "疏水箱温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 54454,
      "taglogicid": "N3_DPU8021_HW_AI050104_PV",
      "tagid": "BHG_UNIT3_DPU8021_HW_AI050104_PV",
      "tagdesc": "尿素水解器A尿素管道伴热温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 54455,
      "taglogicid": "N3_DPU8021_HW_AI050105_PV",
      "tagid": "BHG_UNIT3_DPU8021_HW_AI050105_PV",
      "tagdesc": "尿素水解器A安全阀管道伴热温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 54460,
      "taglogicid": "N3_DPU8021_HW_AI050202_PV",
      "tagid": "BHG_UNIT3_DPU8021_HW_AI050202_PV",
      "tagdesc": "尿素水解器B尿素管道伴热温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 54461,
      "taglogicid": "N3_DPU8021_HW_AI050203_PV",
      "tagid": "BHG_UNIT3_DPU8021_HW_AI050203_PV",
      "tagdesc": "尿素水解器B安全阀管道伴热温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 54467,
      "taglogicid": "N3_DPU8021_HW_RT050301_PV",
      "tagid": "BHG_UNIT3_DPU8021_HW_RT050301_PV",
      "tagdesc": "尿素水解器A温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 54468,
      "taglogicid": "N3_DPU8021_HW_RT050302_PV",
      "tagid": "BHG_UNIT3_DPU8021_HW_RT050302_PV",
      "tagdesc": "尿素水解器A产品气出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 54469,
      "taglogicid": "N3_DPU8021_HW_RT050303_PV",
      "tagid": "BHG_UNIT3_DPU8021_HW_RT050303_PV",
      "tagdesc": "尿素水解器B温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 54470,
      "taglogicid": "N3_DPU8021_HW_RT050304_PV",
      "tagid": "BHG_UNIT3_DPU8021_HW_RT050304_PV",
      "tagdesc": "尿素水解器B产品气出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 54471,
      "taglogicid": "N3_DPU8021_HW_RT050305_PV",
      "tagid": "BHG_UNIT3_DPU8021_HW_RT050305_PV",
      "tagdesc": "尿素水解器C温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 54472,
      "taglogicid": "N3_DPU8021_HW_RT050306_PV",
      "tagid": "BHG_UNIT3_DPU8021_HW_RT050306_PV",
      "tagdesc": "尿素水解器C产品气出口温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 54521,
      "taglogicid": "N3_DPU8021_HW_RT060301_PV",
      "tagid": "BHG_UNIT3_DPU8021_HW_RT060301_PV",
      "tagdesc": "厂区产品气母管A管道温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 54523,
      "taglogicid": "N3_DPU8021_HW_RT060303_PV",
      "tagid": "BHG_UNIT3_DPU8021_HW_RT060303_PV",
      "tagdesc": "厂区产品气母管B管道温度2",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 54525,
      "taglogicid": "N3_DPU8021_HW_RT060305_PV",
      "tagid": "BHG_UNIT3_DPU8021_HW_RT060305_PV",
      "tagdesc": "厂区产品气母管B管道温度3",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 54756,
      "taglogicid": "N3_DPU8021_SH0481_BALM3_PV",
      "tagid": "BHG_UNIT3_DPU8021_SH0481_BALM3_PV",
      "tagdesc": "尿素溶解罐A温度高",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 54757,
      "taglogicid": "N3_DPU8021_SH0481_BALM4_PV",
      "tagid": "BHG_UNIT3_DPU8021_SH0481_BALM4_PV",
      "tagdesc": "尿素溶解罐A温度低",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 54833,
      "taglogicid": "N3_DPU8022_HW_RT020301_PV",
      "tagid": "BHG_UNIT3_DPU8022_HW_RT020301_PV",
      "tagdesc": "尿素溶解罐B温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 54834,
      "taglogicid": "N3_DPU8022_HW_RT020302_PV",
      "tagid": "BHG_UNIT3_DPU8022_HW_RT020302_PV",
      "tagdesc": "尿素溶液储罐A温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 54835,
      "taglogicid": "N3_DPU8022_HW_RT020303_PV",
      "tagid": "BHG_UNIT3_DPU8022_HW_RT020303_PV",
      "tagdesc": "尿素溶液储罐B温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 54836,
      "taglogicid": "N3_DPU8022_HW_RT020304_PV",
      "tagid": "BHG_UNIT3_DPU8022_HW_RT020304_PV",
      "tagdesc": "厂区蒸汽至减温减压站温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 54837,
      "taglogicid": "N3_DPU8022_HW_RT020305_PV",
      "tagid": "BHG_UNIT3_DPU8022_HW_RT020305_PV",
      "tagdesc": "减温减压站出口蒸汽母管温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 54838,
      "taglogicid": "N3_DPU8022_HW_RT020306_PV",
      "tagid": "BHG_UNIT3_DPU8022_HW_RT020306_PV",
      "tagdesc": "废水池温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 54840,
      "taglogicid": "N3_DPU8022_HW_RT020308_PV",
      "tagid": "BHG_UNIT3_DPU8022_HW_RT020308_PV",
      "tagdesc": "机柜温度",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 55422,
      "taglogicid": "N3_DPU3014_SH0354_AALM01_PV",
      "tagid": "BHG_UNIT3_DPU3014_SH0354_AALM01_PV",
      "tagdesc": "水冷壁出口温度裕量",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 55439,
      "taglogicid": "N3_DPU3007_SH0155_FIST2_BO06",
      "tagid": "BHG_UNIT3_DPU3007_SH0155_FIST2_BO06",
      "tagdesc": "水冷壁出口蒸汽温度高MFT",
      "tagdescsec": null,
      "classificationId": 2
    },
    {
      "id": 55681,
      "taglogicid": "FW_DPU7001_HW_AI070206_PV",
      "tagid": "BHG_FW_DPU7001_HW_AI070206_PV",
      "tagdesc": "EDI进水母管温度",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 57422,
      "taglogicid": "FW_DPU7002_HW_AI030203_PV",
      "tagid": "BHG_FW_DPU7002_HW_AI030203_PV",
      "tagdesc": "一级反渗透升压泵进口母管温度",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 57687,
      "taglogicid": "FW_DPU7002_HW_AI080302_PV",
      "tagid": "BHG_FW_DPU7002_HW_AI080302_PV",
      "tagdesc": "生水加热器出水温度",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 57851,
      "taglogicid": "FW_DPU7002_HW_AI110302_PV",
      "tagid": "BHG_FW_DPU7002_HW_AI110302_PV",
      "tagdesc": "生水加热器进汽温度",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 58451,
      "taglogicid": "FW_DPU7002_SH0236_PBO1_IN",
      "tagid": "BHG_FW_DPU7002_SH0236_PBO1_IN",
      "tagdesc": "生水加热器出口蒸汽温度联锁",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59118,
      "taglogicid": "FW_DPU7004_HW_RT020101_PV",
      "tagid": "BHG_FW_DPU7004_HW_RT020101_PV",
      "tagdesc": "1号工业水泵电机U相定子绕组温度1",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59119,
      "taglogicid": "FW_DPU7004_HW_RT020102_PV",
      "tagid": "BHG_FW_DPU7004_HW_RT020102_PV",
      "tagdesc": "1号工业水泵电机V相定子绕组温度1",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59120,
      "taglogicid": "FW_DPU7004_HW_RT020103_PV",
      "tagid": "BHG_FW_DPU7004_HW_RT020103_PV",
      "tagdesc": "1号工业水泵电机W相定子绕组温度1",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59126,
      "taglogicid": "FW_DPU7004_HW_RT020201_PV",
      "tagid": "BHG_FW_DPU7004_HW_RT020201_PV",
      "tagdesc": "1号工业水泵电机U相定子绕组温度2",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59127,
      "taglogicid": "FW_DPU7004_HW_RT020202_PV",
      "tagid": "BHG_FW_DPU7004_HW_RT020202_PV",
      "tagdesc": "1号工业水泵电机V相定子绕组温度2",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59128,
      "taglogicid": "FW_DPU7004_HW_RT020203_PV",
      "tagid": "BHG_FW_DPU7004_HW_RT020203_PV",
      "tagdesc": "1号工业水泵电机W相定子绕组温度2",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59136,
      "taglogicid": "FW_DPU7004_HW_RT020303_PV",
      "tagid": "BHG_FW_DPU7004_HW_RT020303_PV",
      "tagdesc": "1号工业水泵电机轴伸端轴承温度",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59137,
      "taglogicid": "FW_DPU7004_HW_RT020304_PV",
      "tagid": "BHG_FW_DPU7004_HW_RT020304_PV",
      "tagdesc": "1号工业水泵电机非轴伸端轴承温度",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59472,
      "taglogicid": "FW_DPU7004_HW_RT080201_PV",
      "tagid": "BHG_FW_DPU7004_HW_RT080201_PV",
      "tagdesc": "电动消防水泵电机U相定子绕组温度1",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59473,
      "taglogicid": "FW_DPU7004_HW_RT080202_PV",
      "tagid": "BHG_FW_DPU7004_HW_RT080202_PV",
      "tagdesc": "电动消防水泵电机V相定子绕组温度1",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59474,
      "taglogicid": "FW_DPU7004_HW_RT080203_PV",
      "tagid": "BHG_FW_DPU7004_HW_RT080203_PV",
      "tagdesc": "电动消防水泵电机W相定子绕组温度1",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59475,
      "taglogicid": "FW_DPU7004_HW_RT080204_PV",
      "tagid": "BHG_FW_DPU7004_HW_RT080204_PV",
      "tagdesc": "电动消防水泵电机轴伸端轴承温度",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59476,
      "taglogicid": "FW_DPU7004_HW_RT080205_PV",
      "tagid": "BHG_FW_DPU7004_HW_RT080205_PV",
      "tagdesc": "电动消防水泵电机非轴伸端轴承温度",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59480,
      "taglogicid": "FW_DPU7004_HW_RT080301_PV",
      "tagid": "BHG_FW_DPU7004_HW_RT080301_PV",
      "tagdesc": "电动消防水泵电机U相定子绕组温度2",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59481,
      "taglogicid": "FW_DPU7004_HW_RT080302_PV",
      "tagid": "BHG_FW_DPU7004_HW_RT080302_PV",
      "tagdesc": "电动消防水泵电机V相定子绕组温度2",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59482,
      "taglogicid": "FW_DPU7004_HW_RT080303_PV",
      "tagid": "BHG_FW_DPU7004_HW_RT080303_PV",
      "tagdesc": "电动消防水泵电机W相定子绕组温度2",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59483,
      "taglogicid": "FW_DPU7004_HW_RT080304_PV",
      "tagid": "BHG_FW_DPU7004_HW_RT080304_PV",
      "tagdesc": "电动消防水泵轴伸端轴承温度",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59484,
      "taglogicid": "FW_DPU7004_HW_RT080305_PV",
      "tagid": "BHG_FW_DPU7004_HW_RT080305_PV",
      "tagdesc": "电动消防水泵非轴伸端轴承温度",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59651,
      "taglogicid": "FW_DPU7005_HW_RT020101_PV",
      "tagid": "BHG_FW_DPU7005_HW_RT020101_PV",
      "tagdesc": "2号工业水泵电机U相定子绕组温度1",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59652,
      "taglogicid": "FW_DPU7005_HW_RT020102_PV",
      "tagid": "BHG_FW_DPU7005_HW_RT020102_PV",
      "tagdesc": "2号工业水泵电机V相定子绕组温度1",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59653,
      "taglogicid": "FW_DPU7005_HW_RT020103_PV",
      "tagid": "BHG_FW_DPU7005_HW_RT020103_PV",
      "tagdesc": "2号工业水泵电机W相定子绕组温度1",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59659,
      "taglogicid": "FW_DPU7005_HW_RT020201_PV",
      "tagid": "BHG_FW_DPU7005_HW_RT020201_PV",
      "tagdesc": "2号工业水泵电机U相定子绕组温度2",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59660,
      "taglogicid": "FW_DPU7005_HW_RT020202_PV",
      "tagid": "BHG_FW_DPU7005_HW_RT020202_PV",
      "tagdesc": "2号工业水泵电机V相定子绕组温度2",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59661,
      "taglogicid": "FW_DPU7005_HW_RT020203_PV",
      "tagid": "BHG_FW_DPU7005_HW_RT020203_PV",
      "tagdesc": "2号工业水泵电机W相定子绕组温度2",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59667,
      "taglogicid": "FW_DPU7005_HW_RT020301_PV",
      "tagid": "BHG_FW_DPU7005_HW_RT020301_PV",
      "tagdesc": "2号工业水泵电机轴伸端轴承温度",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 59668,
      "taglogicid": "FW_DPU7005_HW_RT020302_PV",
      "tagid": "BHG_FW_DPU7005_HW_RT020302_PV",
      "tagdesc": "2号工业水泵电机非轴伸端轴承温度",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 60540,
      "taglogicid": "FW_DPU7010_HW_AI050201_PV",
      "tagid": "BHG_FW_DPU7010_HW_AI050201_PV",
      "tagdesc": "原灰库电加热器出口温度",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 60541,
      "taglogicid": "FW_DPU7010_HW_AI050202_PV",
      "tagid": "BHG_FW_DPU7010_HW_AI050202_PV",
      "tagdesc": "粗灰库电加热器出口温度",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 60542,
      "taglogicid": "FW_DPU7010_HW_AI050203_PV",
      "tagid": "BHG_FW_DPU7010_HW_AI050203_PV",
      "tagdesc": "细灰库电加热器出口温度",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 60628,
      "taglogicid": "FW_DPU7010_HW_RT080101_PV",
      "tagid": "BHG_FW_DPU7010_HW_RT080101_PV",
      "tagdesc": "干灰分选离心风机电机A相绕组温度1",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 60629,
      "taglogicid": "FW_DPU7010_HW_RT080102_PV",
      "tagid": "BHG_FW_DPU7010_HW_RT080102_PV",
      "tagdesc": "干灰分选离心风机电机B相绕组温度1",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 60630,
      "taglogicid": "FW_DPU7010_HW_RT080103_PV",
      "tagid": "BHG_FW_DPU7010_HW_RT080103_PV",
      "tagdesc": "干灰分选离心风机电机C相绕组温度1",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 60631,
      "taglogicid": "FW_DPU7010_HW_RT080104_PV",
      "tagid": "BHG_FW_DPU7010_HW_RT080104_PV",
      "tagdesc": "干灰分选离心风机电机前轴承温度",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 60632,
      "taglogicid": "FW_DPU7010_HW_RT080105_PV",
      "tagid": "BHG_FW_DPU7010_HW_RT080105_PV",
      "tagdesc": "干灰分选离心风机电机后轴承温度",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 60633,
      "taglogicid": "FW_DPU7010_HW_RT080106_PV",
      "tagid": "BHG_FW_DPU7010_HW_RT080106_PV",
      "tagdesc": "干灰分选旋风分离器1出口温度",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 60636,
      "taglogicid": "FW_DPU7010_HW_RT080201_PV",
      "tagid": "BHG_FW_DPU7010_HW_RT080201_PV",
      "tagdesc": "干灰分选离心风机电机A相绕组温度2",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 60637,
      "taglogicid": "FW_DPU7010_HW_RT080202_PV",
      "tagid": "BHG_FW_DPU7010_HW_RT080202_PV",
      "tagdesc": "干灰分选离心风机电机B相绕组温度2",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 60638,
      "taglogicid": "FW_DPU7010_HW_RT080203_PV",
      "tagid": "BHG_FW_DPU7010_HW_RT080203_PV",
      "tagdesc": "干灰分选离心风机电机C相绕组温度2",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 60639,
      "taglogicid": "FW_DPU7010_HW_RT080204_PV",
      "tagid": "BHG_FW_DPU7010_HW_RT080204_PV",
      "tagdesc": "干灰分选离心风机前轴承温度",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 60640,
      "taglogicid": "FW_DPU7010_HW_RT080205_PV",
      "tagid": "BHG_FW_DPU7010_HW_RT080205_PV",
      "tagdesc": "干灰分选离心风机后轴承温度",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 60641,
      "taglogicid": "FW_DPU7010_HW_RT080206_PV",
      "tagid": "BHG_FW_DPU7010_HW_RT080206_PV",
      "tagdesc": "干灰分选旋风分离器2出口温度",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 62741,
      "taglogicid": "FW_DPU7010_SH0471_PBO03_IN",
      "tagid": "BHG_FW_DPU7010_SH0471_PBO03_IN",
      "tagdesc": "干灰分选旋风分离器出口温度高",
      "tagdescsec": null,
      "classificationId": 4
    },
    {
      "id": 63939,
      "taglogicid": "ECMS_UNIT3_YX01169",
      "tagid": "BHG_ECMS_UNIT3_YX01169",
      "tagdesc": "WCK3108_#3机UPS1机内过温度",
      "tagdescsec": null,
      "classificationId": 5
    },
    {
      "id": 63965,
      "taglogicid": "ECMS_UNIT3_YX01195",
      "tagid": "BHG_ECMS_UNIT3_YX01195",
      "tagdesc": "WCK3108_#3机UPS1整流器过温度保护",
      "tagdescsec": null,
      "classificationId": 5
    },
    {
      "id": 63972,
      "taglogicid": "ECMS_UNIT3_YX01202",
      "tagid": "BHG_ECMS_UNIT3_YX01202",
      "tagdesc": "WCK3108_#3机UPS1逆变器过温度保护",
      "tagdescsec": null,
      "classificationId": 5
    },
    {
      "id": 63992,
      "taglogicid": "ECMS_UNIT3_YX01222",
      "tagid": "BHG_ECMS_UNIT3_YX01222",
      "tagdesc": "WCK3108_#3机UPS1机内过温度",
      "tagdescsec": null,
      "classificationId": 5
    },
    {
      "id": 64005,
      "taglogicid": "ECMS_UNIT3_YX01235",
      "tagid": "BHG_ECMS_UNIT3_YX01235",
      "tagdesc": "WCK3108_#3机UPS2机内过温度",
      "tagdescsec": null,
      "classificationId": 5
    },
    {
      "id": 64031,
      "taglogicid": "ECMS_UNIT3_YX01261",
      "tagid": "BHG_ECMS_UNIT3_YX01261",
      "tagdesc": "WCK3108_#3机UPS2整流器过温度保护",
      "tagdescsec": null,
      "classificationId": 5
    },
    {
      "id": 64038,
      "taglogicid": "ECMS_UNIT3_YX01268",
      "tagid": "BHG_ECMS_UNIT3_YX01268",
      "tagdesc": "WCK3108_#3机UPS2逆变器过温度保护",
      "tagdescsec": null,
      "classificationId": 5
    },
    {
      "id": 64058,
      "taglogicid": "ECMS_UNIT3_YX01288",
      "tagid": "BHG_ECMS_UNIT3_YX01288",
      "tagdesc": "WCK3108_#3机UPS2机内过温度",
      "tagdescsec": null,
      "classificationId": 5
    },
    {
      "id": 64777,
      "taglogicid": "ECMS_UNIT3_YX02007",
      "tagid": "BHG_ECMS_UNIT3_YX02007",
      "tagdesc": "WCK3120_#3炉脱硫UPS机内过温度",
      "tagdescsec": null,
      "classificationId": 5
    },
    {
      "id": 64803,
      "taglogicid": "ECMS_UNIT3_YX02033",
      "tagid": "BHG_ECMS_UNIT3_YX02033",
      "tagdesc": "WCK3120_#3炉脱硫UPS整流器过温度保护",
      "tagdescsec": null,
      "classificationId": 5
    },
    {
      "id": 64810,
      "taglogicid": "ECMS_UNIT3_YX02040",
      "tagid": "BHG_ECMS_UNIT3_YX02040",
      "tagdesc": "WCK3120_#3炉脱硫UPS逆变器过温度保护",
      "tagdescsec": null,
      "classificationId": 5
    },
    {
      "id": 64830,
      "taglogicid": "ECMS_UNIT3_YX02060",
      "tagid": "BHG_ECMS_UNIT3_YX02060",
      "tagdesc": "WCK3120_#3炉脱硫UPS机内过温度",
      "tagdescsec": null,
      "classificationId": 5
    },
    {
      "id": 66379,
      "taglogicid": "ECMS_UNIT3_YC00956",
      "tagid": "BHG_ECMS_UNIT3_YC00956",
      "tagdesc": "WCK3120_#3炉脱硫直流屏系统内部温度",
      "tagdescsec": null,
      "classificationId": 5
    },
    {
      "id": 68396,
      "taglogicid": "ECMS_UNIT4_YX01672",
      "tagid": "BHG_ECMS_UNIT4_YX01672",
      "tagdesc": "WCK4120_#4炉脱硫UPS机内过温度",
      "tagdescsec": null,
      "classificationId": 6
    },
    {
      "id": 68420,
      "taglogicid": "ECMS_UNIT4_YX01696",
      "tagid": "BHG_ECMS_UNIT4_YX01696",
      "tagdesc": "WCK4120_#4炉脱硫UPS整流器过温度保护",
      "tagdescsec": null,
      "classificationId": 6
    },
    {
      "id": 68427,
      "taglogicid": "ECMS_UNIT4_YX01703",
      "tagid": "BHG_ECMS_UNIT4_YX01703",
      "tagdesc": "WCK4120_#4炉脱硫UPS逆变器过温度保护",
      "tagdescsec": null,
      "classificationId": 6
    },
    {
      "id": 68446,
      "taglogicid": "ECMS_UNIT4_YX01722",
      "tagid": "BHG_ECMS_UNIT4_YX01722",
      "tagdesc": "WCK4120_#4炉脱硫UPS机内过温度",
      "tagdescsec": null,
      "classificationId": 6
    },
    {
      "id": 69294,
      "taglogicid": "ECMS_UNIT4_YC00818",
      "tagid": "BHG_ECMS_UNIT4_YC00818",
      "tagdesc": "WCK4120_#4炉脱硫直流屏系统内部温度",
      "tagdescsec": null,
      "classificationId": 6
    },
    {
      "id": 69424,
      "taglogicid": "NCS_2QBB5041_YC0050",
      "tagid": "BHG_NCS_2QBB5041_YC0050",
      "tagdesc": "2号启备变5041测控CSI-200F-G-1V2.03-装置温度",
      "tagdescsec": null,
      "classificationId": 7
    },
    {
      "id": 69475,
      "taglogicid": "NCS_2QBB3ZB5042_YC0101",
      "tagid": "BHG_NCS_2QBB3ZB5042_YC0101",
      "tagdesc": "2号启备变3号主变5042测控CSI-200F-G-1V2.03-装置温度",
      "tagdescsec": null,
      "classificationId": 7
    },
    {
      "id": 69526,
      "taglogicid": "NCS_3ZB5043_YC0152",
      "tagid": "BHG_NCS_3ZB5043_YC0152",
      "tagdesc": "3号主变5043测控CSI-200F-G-1V2.03-装置温度",
      "tagdescsec": null,
      "classificationId": 7
    },
    {
      "id": 69577,
      "taglogicid": "NCS_4ZB5051_YC0203",
      "tagid": "BHG_NCS_4ZB5051_YC0203",
      "tagdesc": "4号主变5051测控CSI-200F-G-1V2.03-装置温度",
      "tagdescsec": null,
      "classificationId": 7
    },
    {
      "id": 69628,
      "taglogicid": "NCS_4ZB5052_YC0254",
      "tagid": "BHG_NCS_4ZB5052_YC0254",
      "tagdesc": "4号主变5052测控CSI-200F-G-1V2.03-装置温度",
      "tagdescsec": null,
      "classificationId": 7
    },
    {
      "id": 69670,
      "taglogicid": "NCS_GY_YC0296",
      "tagid": "BHG_NCS_GY_YC0296",
      "tagdesc": "公用测控一CSI-200F-G-3V2.03-装置温度",
      "tagdescsec": null,
      "classificationId": 7
    },
    {
      "id": 69679,
      "taglogicid": "NCS_2GY_YC0305",
      "tagid": "BHG_NCS_2GY_YC0305",
      "tagdesc": "2号公用测控CSI-200F-G-3-CP5002_装置温度",
      "tagdescsec": null,
      "classificationId": 7
    },
    {
      "id": 69748,
      "taglogicid": "NCS_3JZ_YC0374",
      "tagid": "BHG_NCS_3JZ_YC0374",
      "tagdesc": "3号机组测控CSI-200F-G-1-CG0003_装置温度",
      "tagdescsec": null,
      "classificationId": 7
    },
    {
      "id": 69864,
      "taglogicid": "NCS_3JZ2_YC0490",
      "tagid": "BHG_NCS_3JZ2_YC0490",
      "tagdesc": "3号机组测控二CSI-200F-G-1-EGU-CG0003B_装置温度",
      "tagdescsec": null,
      "classificationId": 7
    },
    {
      "id": 70001,
      "taglogicid": "NCS_4JZ_YC0627",
      "tagid": "BHG_NCS_4JZ_YC0627",
      "tagdesc": "4号机组测控CSI-200F-G-1-CG0004_装置温度",
      "tagdescsec": null,
      "classificationId": 7
    },
    {
      "id": 70117,
      "taglogicid": "NCS_4JZ2_YC0743",
      "tagid": "BHG_NCS_4JZ2_YC0743",
      "tagdesc": "4号机组测控二CSI-200F-G-1-EGU-CG0004B_装置温度",
      "tagdescsec": null,
      "classificationId": 7
    }
  ]
}
