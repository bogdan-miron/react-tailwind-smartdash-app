import styles from "../style"
import { dash360 } from "../assets/assets"

const Rendervideo = () => (
    <div className="mb-6">
        <video src={dash360} autoPlay loop muted class="rounded-[50px]"></video>
    </div>
)


export default Rendervideo