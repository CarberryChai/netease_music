import { NOOP } from '@vue/shared'
import {
  createVNode,
  defineComponent,
  onMounted,
  PropType,
  ref,
  render,
  Transition,
  VNode,
} from 'vue'
import './toast.css'
const Toast = defineComponent({
  name: 'Toast',
  props: {
    content: {
      type: String,
      default: '',
    },
    duration: {
      type: Number,
      default: 2000,
    },
    close: {
      type: Function as PropType<(el: Element) => void>,
      default: NOOP,
    },
  },
  setup(props) {
    const show = ref(true)
    onMounted(() => {
      setTimeout(() => {
        show.value = false
      }, props.duration)
    })
    return () => (
      <Transition name="fade" appear onAfterLeave={props.close}>
        {show.value && <div class="wrapper">{props.content}</div>}
      </Transition>
    )
  },
})

export default function toast(
  content: string,
  duration: 2000
): Promise<undefined> {
  return new Promise((resolve) => {
    const div = document.createElement('div')
    const vnode: VNode = createVNode(
      Toast,
      {
        duration,
        content,
        close() {
          div.remove()
          resolve(undefined)
        },
      },
      null
    )
    render(vnode, div)
    document.body.appendChild(div)
  })
}
