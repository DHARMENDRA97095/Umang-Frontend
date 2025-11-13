"use Client"
import Link from "next/link"
function Footer() 
{
  return (
    <div>
      <div className="footer-link flex">
        <ul className="flex ">
            <li>
                <Link href="#">Home</Link>
            </li>
            <li>
                <Link href="#">About Us</Link>
            </li>
            <li>
                <Link href="#">Products</Link>
            </li>
            <li>
                <Link href="#">Contact Us</Link>
            </li>
        </ul>
      </div>
      <div className="copy-footer">
        &cpy; All rights reserved by Hrn tech solutions
      </div>
    </div>
  )
}

export default Footer
