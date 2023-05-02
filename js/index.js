import { Router } from './router.js'
import { Backgrounds } from './events.js'
import { bgHome, bgUniverse, bgExplore } from './elements.js'

const backgrounds = Backgrounds({
    bgHome,
    bgUniverse,
    bgExplore
});

bgHome.addEventListener("click", () => backgrounds.backgroundHome())
bgUniverse.addEventListener("click", () => backgrounds.backgroundUniverse())
bgExplore.addEventListener("click", () => backgrounds.backgroundExplo())

const router = new Router()
router.add('/', "/pages/home.html")
router.add("/universo", "/pages/universo.html")
router.add("/exploracao", "/pages/exploracao.html")


router.handle()

window.onpopstate= () => router.handle()
window.route = () => router.handle()