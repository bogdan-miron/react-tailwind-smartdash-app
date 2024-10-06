import { FacebookIMG, InstagramIMG, LinkedinIMG} from "../assets/assets"

const EmployeeCard = ({name, status, facebook, instagram, linkedin, img}) => (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <p className="font-poppins font-normal text-[26px] leading-[32px] text-white my-10">{name}</p>
        
        <div className="flex flex-row">
            <img src={img} alt={name} className="w-[200px] h-[200px] rounded-full"/>

            <div className="ml-10 flex flex-col cursor-pointer">
                <a href={facebook}>
                    <img src={FacebookIMG} className="w-[48px] h-[48px] mb-5"/>
                </a>
                
                <a href={instagram}>
                    <img src={InstagramIMG}  className="w-[48px] h-[48px] mb-5"/>
                </a>
                    
                <a href={linkedin}>
                    <img src={LinkedinIMG}  className="w-[48px] h-[48px] mb-5"/>
                </a>
                    
            </div>

        </div>

    </div>
)


export default EmployeeCard