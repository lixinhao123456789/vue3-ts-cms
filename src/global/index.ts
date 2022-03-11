import { App } from "vue"
import registerElement from "./register-element"
import registerIcons from "./register-Icons"

export function globalRegister(app: App):void{
  app.use(registerElement)
  app.use(registerIcons)
}
