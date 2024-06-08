import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
    BsFacebook,
    BsInstagram,
    BsTwitter,
    BsGithub,
    BsLinkedin
} from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className="border ">
      <div className="w-full max-w-7xl mx-auto">
        <div className="
            grid w-full 
            justify-between
            md:grid-cols-1
            sm:flex
        ">
          <div className="mt-5">
            <Link
              to="/"
              className="
            self-center 
            whitespace-nowrap 
            text-lg 
            sm:text-xl
            font-semibold
            dark:text-white
        "
            >
              <span
                className="
         px-2 
         py-2
         bg-gradient-to-r
         from-indigo-500 
         via-purple-500 
         to-pink-500 rounded-lg text-white"
              >
                Joyanta's
              </span>
              Blog
            </Link>
          </div>
          <div
            className="
            grid grid-cols-2 
            gap-8
            mt-4
            sm:grid-cols-3
            sm:gap-6
          "
          >
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.100projects.com/"
                  target="_blank"
                  rel="noopener noferrer"
                >
                  100 JS Projects
                </Footer.Link>
              
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noferrer"
                >
                  Joyanta's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Fllow Us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Joyanta454"
                  target="_blank"
                  rel="noopener noferrer"
                >
                  GitHub
                </Footer.Link>
              
                <Footer.Link
                  href="#"
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="legal" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                >
                  Privacy Policy
                </Footer.Link>
              
                <Footer.Link
                  href="#"
                >
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider/>
        <div className="
          w-full sm:flex sm: items-center sm: justify-between
        ">
        <Footer.Copyright 
          href="#" 
          by="Joyanta's blog" 
          year={new Date().getFullYear()}
        />
        <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon 
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon 
              href="#"
              icon={BsLinkedin}
            />
            <Footer.Icon 
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon 
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon 
              href="#"
              icon={BsGithub}
            />
        </div>
        </div>
      </div>
    </Footer>
  );
}
