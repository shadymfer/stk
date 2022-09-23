import React from 'react'
import { FaDiscord, FaFacebook, FaFacebookF, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className="text-center bg-gray-900 text-white">
        <div className="text-sm p-4 flex flex-col">
            © 2022  All Rights Reserved {'\n'}
            <a className="text-whitehite" href="https://gabjornacion.dev/"><span></span>TheShadyClass</a>
        </div>
    </footer>
  )
}

export default Footer