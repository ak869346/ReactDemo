import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo-section">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQIEBQYDBwj/xAA0EAABAwIEBAMGBgMBAAAAAAABAAIDBBEFEiExBkFRYRMigRRCUnGRoQcVMmKxwSOy0TP/xAAaAQEAAgMBAAAAAAAAAAAAAAAABAUBAgMG/8QALREBAAICAQMCBQQCAwEAAAAAAAECAxEEEiExBUETIjJRsSNhcaGBkVLR4RT/2gAMAwEAAhEDEQA/APt4AsNAgnKOgQMo6BAyjoEDKOgQMo6BAyjoEDKOgQMo6BAyjoEDKOgQMo6BAyjoEDKOgQMo6BAyjoEDKOgQMo6BBR4F9ggu3YIJQEBAQEBAQEBAQEBAQEBAQEFH7oLN2CCUBAQEBAQEBAQEBAQEBAQEBBR+6CzdgglAQEBAQEBAQEBB41NVBTML6iaOJnxSODR91mtbW+mGa1tbxDWt4mwR8vhx4pTSP+GN+Y/Zdp42aI3NZdp42asbmstpDK2Zgew3adiQR/K4TEw4zGvL0RgQEBBR+6CzdgglAQEBAQEBAQY9bW09DTSVFXK2GFgu57zYBbUpa9umsbltSlr26axuXzXiD8RKmeQ02BxmFrtBK5t5H/IbN9fsrjF6fjxV6+RK4w+nUpqc3efs0dLRS1k3tGLSvqnk3yyPc76m9/TZVvL9b6Pk4tYiPvpZRTpjVe38OywisqqaPJQwQxsHuw07QPWwVBk5/KvO5navzcbFv5p/t0tFidS6wqqR4/cxh/hbYufk3rJSf8K/LxqR9Fm1Y4PaHN2Ks62i0bhEmNLLZgQEFH7oLN2CCUBAQEBBAIOyCUGDi+J0uEUElbWyiOGMfMuPIAcyVvjx2yWitfLalJvOofEeLeK6vHazPISyEH/DTg6MHU9XL0WDDj4lP395W+HpwR0072lr6CYQaggyO/U4i/oqXm5p5Ftb7LrBx4x13bvMtxS1jT+uU/RVd+PMx2hvaIdHgVVIZ2igncJTs1rrZvQ7qFfDyKd6QgcmuPp/Ujs73Dq+aQCKtidFJycW2BXfBy7TPRljUqHNgpXvjncNmFPRkoCAgo/dBZuwQSgICCHbIOExfFn1tS/zHwGusxoOluqouRlvlvPfsv8AjcauOkT7yw4a6WBwdBK6Mj4SuVJvSd1nTvfDS8atDeUXF0UMTvzVwYxguZht6hWvF5Fst4xzG5lV8jgdEdVJ7PlnGnFcuP13jaspIrtpoDy/ce5+23z9hxuPXj0/eUet4w1/dzNNKx0hMkjS/oSonOveY6K+PdZ+mVpNviZJ7+zNY/LqLFVXhe9pZtNVD3mH0KyxNdumwzDKqupvaKKL2hjf1CNwLmHoW7j6LO0LLyMdLdGSdOz4bx+ZkjcPxUuvsySQWI7O/wCrW1YlVcvhRMfFw/6diDdaKhKAgIKP3QWbsEEoCAg12ORVtRSCnw9wY+V+V8h9xtjc/wBeq55K2tGod+PbHS/VeN6fPOK+HK3BaUVntRqKe4D3BuUsJ0GlzpfRR542vC64vPpmt0WjUuZbjEtPrI/Mwbh5/taxxviTqsd07JNMdeq86hqsZxt9e4NaSynbqATq49SvS+nen14kdVvql5rl8/406r9Ln5ZjNJfpsp8zuVdfJuWLIHwPzixaTz6rneulpxcvXTU+YbfDQamF8sbHZYyA+2zb7fWxUXJWs9pWGPLMTqJdbw1gcONPdSMqvZ64eaISC7JRbbTUEb87qDmxdPePCRb1C+Lvau4/ts4aPG+EsQZUvhdGW6Fw80cg+G4/vVR3eb8bn4+jf/cPp9JLQ49h0U5hZJG8ateLlp5hY8PNXrl42Sab1MM+CIQxNjaXENFhmNzZYcZnc7eiMCAgo/dBZuwQSgICAgxMUoIcTw+ooqkXhnjLHDsRus1t0zEsTG35pxylqsExSfDcRD/Hp3ZSbGzhycD0I1XoMOTHNeqsaQck5t6vMy1b5nTENaNL6ALa1+3dtWLTPTDMpqV2S7wQVtXUoGXLb6o8R+WWaBrp46eouI5HNu8bgE6lK3jJS0x7benx4bUrW33iJdNwFhsuB8dvwfEomvZP4lLMx7btkbbM09wcoI+arc9ovi6odsnzYuuPLqse4Wn4fq2YlhOZ1PG8PA3MJ7/t7rhTLF46bN8HIjNHw7+X0SmkixChilyh0U0YdlcLjXkok9p0rZiaW17w8cOwmDDZpXUd44ZdTCP0h3UdE26Zc980R8TvMe7YLDiICAgo/dBZuwQSgICAgIOZ4y4LwziynYKtroaqL/yqogM7R8J6t7fSy64s18X0sTWsz80PlGM/hvjmC53wUvtsA2lprudbu06/S6zkz3yfVK/9PycDH9Eat+/f+2kdI1tVTRkWcWZZGnQtcTsRy2+6l4uT+pSfbwq8/pG+HyOn/luv8QiKoFSXwyfqY4lhHMLPFzxTNbfidvRU42+LjrPmsR+H1bCaEY0/hniGMXqIXez1buZDA4Bx9f8AZRevpi1FNya//PkyYp/mP8voLmNcwtcAQRYgjdR1Z4eNDSx0VM2nhuI2E5QeQJJt6XWZnc7bWtNp3LIWGogICAgo/dBZuwQSgICAgICCCLoOY424dwHEMMqK3GI2wugjL/a4vLI23f3vkVmtZtMRHlIxczJxu8T2+3s/PbXGGcSNzZQ7y36d/Rd8uG2Ge70fp/qOLmU6qeY8w+5fhJKX4JVxX0ZU3Hq0LlfyrvXKxGes/eHdLRSiAgICAgIKP3QWbsEEoCAgICAg86ieKmhfNUSNjiY3M57jYALMRMzqGLWisbnw+ScZYxiHGHiw4VE9uDUd5JZ3+VriAfM4/wAN37dLbj4q8fU3+qfZU581s+4p9Me7gH0ZkieQ3TYG2l+ilcjHGTHNffyx6ZzbcXlUvHiZ1L7D+D0Tm8PVExGkkwA72Y3/AKqCz2PrVonNWPtDvVqphAQEBAQEFH7oLN2CCUBAQEBAQa+vwikxCVr65rp2M1bE9x8MHrlGh9breuS1I+Xs5Xw1vO7d/wAOdxugqeJCzC8PtS4PE4eNO1oAkI91g5gddr/JScN64P1Ld7e3/qJmpbkfp07V/P8ADV4pgVKav2emgtheD05c9o1M0x1y9yfLf6LrGeaYptM/Nb8MY+NGbl0x17Vrr/br+FMK/JcBpKE28RjLyW+M6u+5VfadyuuXn+Pntk9vb+PZt1hGEBAQEBAQUfugs3YIJQEBBF0C4QLhA0IsbFBBAy2aAPlyQeEVJBFEGNYMofnPd173Pe+qzMzPlrSsUjVWRoOiw2TdBFwgXCCUBAQEFH7oLN2CCUBAQaLBK6oqK/Ho53GRlJWiOFoaNGeEx1u+rig5xuJ4zHwzT8VvxfxPGdG84b4UfgZHvDfDabZ/EsbXLtXckGEziPE34q6GnxPEJq92Kvp4aB1APZ3xNls//LkGojubh+hG3JBl8PYljNbO+qqK3GnRtqaloaKSAUuVj5GtGa2e1mjXqEGrh4o4tdwhA5zAKsUkde/FTEPDfTuAIaBt4tyWkbADNzAQd5i9XNC6PJK9jXNjvkbd3mlY02FjrYlBTxKxzpG0r6qWAZCXPjayT3rhmYAH3dx116B7U1Q4VMMQmndd7g9tQwBw8twNALjug8aisrG4nI2JxfHFK7NEGi72COI2HO/nJHXZBkYZU1FRiFS6UlsLoo5IYi2xa0l4uedzlBty26oNqgICAgo/dBZuwQSgICDTycNYU/EH15pnipfIJHvbO9oc4WAJAdY7DlyQVZwtgrKsVTKBoe2UzNZnd4bZL3zhl8odfW9t9UGQ7A8OdB4BpW5BUGqbZxBbKXZi4G9wb326kIMWn4TwWmqTUwUZZKXueSJn2zOvmNs1tbnlzQZhwihOENwn2dvsDYhCIbmwYNAN78ggyJKSGVzXSMzFuW2p0s4OH3AQWqaaKpYGStNgbgtcWlp6gjUIPD8tpizKWvLs+fxDK7Pm2vmvfbTfbRB6Q0UEGQxx2czNZxcSTm3JJ3Og3QejYWNndKG+dzQ0m/IXI/koPVAQEBBR+6CzdgglAQEBAQEBAQEBAQEBAQEBAQUfugs3YIJQEBAQEBAQEBAQEBAQEBAQEFH7oIDzYbIJznsgZz2QM57IGc9kDOeyBnPZAznsgZz2QM57IGc9kDOeyBnPZAznsgZz2QM57IGc9kDOeyDze835IP/Z" alt="Logo" />
                    <p>
                        "Life's a climb. But the view is great." There are times when things
                        seemingly go to plan, and there are other moments when nothing works out.
                    </p>
                </div>
                <div className="footer-links-section">
                    <div className="footer-column">
                        <h3>Products</h3>
                        <ul>
                            <li><a href="#">API Documentation</a></li>
                            <li><a href="#">Mobile App</a></li>
                            <li><a href="#">Crypto Compare</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Learn</h3>
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Tutorials</a></li>
                            <li><a href="#">Guides</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Follow Us</h3>
                        <ul>
                        <li><a href="#"><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                        <li><a href="#"><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                        <li><a href="#"><i class="fa-brands fa-linkedin"></i> LinkedIn</a></li>
                        <li><a href="#"><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-legal-section">
                    <ul>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Disclaimer</a></li>
                    </ul>
                </div>
                <div className="footer-newsletter-section">
                    <p>&copy; 2024 HiringApp. All rights reserved</p>
                    <h3>Subscribe to our Newsletter</h3>
                    <form>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
