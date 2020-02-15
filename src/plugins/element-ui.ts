import Vue from 'vue';
import moment from 'moment';
import { Notification, Input, Card, Button, Divider, Timeline, TimelineItem, Collapse, CollapseItem, DatePicker, PageHeader, Tag } from 'element-ui';

Vue.component(Notification.name, Notification);
Vue.component(Input.name, Input);
Vue.component(Card.name, Card);
Vue.component(Button.name, Button);
Vue.component(Divider.name, Divider);
Vue.component(Timeline.name, Timeline);
Vue.component(TimelineItem.name, TimelineItem);
Vue.component(Collapse.name, Collapse);
Vue.component(CollapseItem.name, CollapseItem);
Vue.component(PageHeader.name, PageHeader);
Vue.component(Tag.name, Tag);

console.info('init plugins: element-ui.ts');

Vue.prototype.$notify = Notification;
// MessageBox.setDefaults()

export const DIALOG_DEFAULT_PROPS = {
  'custom-class': 're-dialog',
  'width': 'auto',
  'append-to-body': true,
  'close-on-click-modal': false,
}

export const TABLE_DEFAULT_PROPS = {
  'stripe': true,
  'border': true,
  'highlight-current-row': true,
  'row-key': 'id'
}

export const PAGINATION_DEFAULT_PROPS = {
  class: "margin-bt-15",
  layout: "sizes, prev, pager, next, total",
  background: true,
  'page-sizes': [10, 20, 30, 40, 50]
}

export const DATE_PICKER_SHORT_CUTS = [
  {
    text: '今天',
    onClick(picker: DatePicker) {
      const now = moment();
      const start = now.clone().startOf('day');
      const end = now.clone().endOf('day');
      picker.$emit('pick', [start, end]);
    }
  },
  {
    text: '本週',
    onClick(picker: DatePicker) {
      const now = moment();
      const start = now.clone().startOf('week');
      const end = now.clone().endOf('week');
      picker.$emit('pick', [start, end]);
    }
  },
  {
    text: '本月',
    onClick(picker: DatePicker) {
      const now = moment();
      const start = now.clone().startOf('month');
      const end = now.clone().endOf('month');
      picker.$emit('pick', [start, end]);
    }
  },
  {
    text: '今年',
    onClick(picker: DatePicker) {
      const now = moment();
      const start = now.clone().startOf('year');
      const end = now.clone().endOf('year');
      picker.$emit('pick', [start, end]);
    }
  },
  {
    text: '上週',
    onClick(picker: DatePicker) {
      const now = moment().add(-1, 'week');
      const start = now.clone().startOf('week');
      const end = now.clone().endOf('week');
      picker.$emit('pick', [start, end]);
    }
  },
  {
    text: '上個月',
    onClick(picker: DatePicker) {
      const now = moment().add(-1, 'month');
      const start = now.clone().startOf('month');
      const end = now.clone().endOf('month');
      picker.$emit('pick', [start, end]);
    }
  },
  {
    text: '去年',
    onClick(picker: DatePicker) {
      const now = moment().add(-1, 'year');
      const start = now.clone().startOf('year');
      const end = now.clone().endOf('year');
      picker.$emit('pick', [start, end]);
    }
  }
]
