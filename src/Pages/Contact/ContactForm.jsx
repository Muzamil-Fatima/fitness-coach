export default function Question(){
    return(
        <>
         <div className="con-left2">
                <h3 className="w7 text-4xl font2">Contact <span className="c1">Form</span></h3>
                <p className="w5 opacity-50 text-lg">Fill out the form below & one of our friendly team members will get
                    back to you shortly. 👍</p>
                <p className="w5 c5 text-lg">Follow Us on Social Media</p>
                <div className="con-icon flex">
                    <ul className="flex">
                        <li><a href="https://www.facebook.com/people/Coach-Lenka/100087953091862/?_rdr"
                                target="_blank"><img src="images/facebook.svg" alt="facebook" className="con-imgicon"/></a>
                        </li>
                        <li><a href="https://www.instagram.com/lenka_coach_dubai/" target="_blank"><img
                                    src="images/instagram.svg" alt="instagram" className="con-imgicon" /></a></li>
                        <li><img src="images/tiktok.svg" alt="tiktok" className="con-imgicon"/></li>
                    </ul>
                </div>
                <div className="c3-bg main-data flex">
                    <div className="flex labinp">
                        <label for="email" className="w5 text-lg opacity-50">You can Email us here </label>
                        <input id="email" type="text" readonly value="lenka@coachlenkadubai.com" className="w5 c5 inp-dec" />
                    </div>
                    <div><img src="images/arrow-right.png" alt="=>" /></div>
                </div>
                <div className="c3-bg  main-data flex">
                    <div className="flex labinp">
                        <label for="mobile no" className="w5 text-lg opacity-50">Give as a call on</label>
                        <input id="mobile no" type="text" readonly value="+971 52 653 88 61" className="w5 c5 inp-dec" />
                    </div>
                    <div><img src="images/arrow-right.png" alt="=>" /></div>
                </div>
                <div className="c3-bg main-data flex">
                    <div className="flex labinp">
                        <label for="work-hours" className="w5 text-lg opacity-50">Work Hours</label>
                        <input id="work-hours" type="text" readonly value="6:00 am - 10:00 pm" className="w5 c5 inp-dec"/>
                    </div>
                    <div><img src="images/arrow-right.png" alt="=>"/></div>
                </div>
            </div>
        </>
    )
}