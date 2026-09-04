import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
  name: 'tap-to-reload-browser-page',
  stateMachine: ({ defineState }) => {
    defineState('ready')
      .initial()
      .onEvent(ecs.input.UI_CLICK, 'reloading')

    defineState('reloading')
      .onEnter(() => {
        window.location.reload()
      })
  },
})
