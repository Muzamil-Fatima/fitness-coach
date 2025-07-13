export default function Footer() {
  return (
    <>
      <footer class="font2">
        <div>
          <img src="images/Logo.svg" alt="Logo" />
        </div>
        <div class="columns">
          <div class=" col-1 flex">
            <div class="footer-icon">
              <ul class="social-icon flex">
                <li>
                  <a
                    href="https://www.facebook.com/people/Coach-Lenka/100087953091862/?_rdr"
                    target="_blank"
                  >
                    <img src="images/facebook.svg" alt="facebook icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/lenka_coach_dubai/"
                    target="_blank"
                  >
                    <img src="images/instagram.svg" alt="instagram icon" />
                  </a>
                </li>
                <li>
                  <img src="images/tiktok.svg" alt="tiktok" />
                </li>
              </ul>
            </div>
            <p class="w6 text-lg">Subscribe to our newsletter!</p>
            <div class="email-block">
              <div class="email-label flex">
                <label for="email" class="w4 text-base footer-email">
                  Enter Email
                </label>
                <img src="images/arrow-up.svg" alt="arrow-icon" class="w4" />
              </div>
              <input type="email" required />
            </div>
          </div>
          <div class="col-2">
            <h3 class="w7 text-base">Quick links</h3>
            <ul class="w4 text-base opacity-75">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="detailed.html">About Me</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div class=" col-3">
            <h3 class="w7 text-base ">News</h3>
            <h4 class="w4 text-base opacity-75">Fitness Blog</h4>
            <div class="w4 text-base opacity-75">FAQ</div>
          </div>
          <div class=" col-4">
            <h2 class="w7 text-base">Fitness Services</h2>
            <div class="w4 text-base opacity-75">Book a Free Consultation</div>
            <div class="w4 text-base opacity-75">
              Refer a Friend & Earn Rewards
            </div>
            <div class="w4 text-base opacity-75">Membership & Pricing</div>
          </div>
        </div>
        <div class="col-5 flex">
          <p class="w5 text-base">©2025 Muzamil-Fatima. All right reserved</p>
          <ul class="flex">
            <li class="text-base">Privacy Policy</li>
            <li class="text-base">Legel Notice</li>
            <li class="text-base">Cookies Policy</li>
            <li class="text-base">Terms & Condition</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
