import Mock from "mockjs";
export default {
  'GET  /college/v2/liveschool/list': Mock.mock({
    data: {
      list: [
        {
          super_id: 12,
          room_id: 10,
          live_status: 1,
          live_title: '如何扭转乾坤',
          author_name: '一碗仙缘',
          live_start_at: '2020-11-11',
          live_end_at: '2020-11-11',
          play_back_status: 0,
          play_back_name: '回放未生成',
        },
        {
          super_id: 13,
          room_id: 10,
          live_status: 2,
          live_title: '如何扭转乾坤',
          author_name: '一碗仙缘',
          live_start_at: '2020-11-11',
          live_end_at: '2020-11-11',
          play_back_status: 30,
          play_back_name: '回放生成失败',
        },
        {
          super_id: 14,
          room_id: 10,
          live_status: 3,
          live_title: '如何扭转乾坤',
          author_name: '一碗仙缘',
          live_start_at: '2020-11-11',
          live_end_at: '2020-11-11',
          play_back_status: 100,
          play_back_name: '回放生成成功',
        },
        {
          super_id: 15,
          room_id: 10,
          live_status: 3,
          live_title: '如何扭转乾坤',
          author_name: '一碗仙缘',
          live_start_at: '2020-11-11',
          live_end_at: '2020-11-11',
          play_back_status: 30,
          play_back_name: '回放生成失败',
        },
      ],
      pagination: {
        total: 4,
        pageSize: 10,
        current: 1,
      },
    },
  }),
}