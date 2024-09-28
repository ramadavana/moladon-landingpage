/* eslint-disable react/prop-types */
import React from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function NavbarForDropdownWithMultipleLanguages(props) {
  const { navList, countries, navLogo } = props;
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openNav, setOpenNav] = React.useState(false);
  const [lang, setLang] = React.useState("English");

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  return (
    <Navbar className="w-full px-8 py-2 mx-auto border-none rounded-none shadow-none lg:px-16 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="w-40 lg:w-60">
          <img src={navLogo} alt="Navbar Logo" />
        </div>

        <div className="hidden mr-4 lg:block">{navList}</div>

        <div className="flex-wrap items-center hidden gap-4 lg:flex">
          <Button
            size="sm"
            className="text-white transition-all duration-300 bg-blue-600 border-2 border-blue-600 hover:bg-white hover:text-blue-600 hover:shadow-none">
            Join Now
          </Button>

          <Menu open={openMenu} handler={setOpenMenu}>
            <MenuHandler>
              <Button size="sm" variant="outlined" className="items-center hidden gap-2 lg:flex">
                <span className="text-base leading-none h-min">
                  {countries.find(({ name }) => name === lang)?.flag}
                </span>

                {countries.find(({ name }) => name === lang)?.name}
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""}`}
                />
              </Button>
            </MenuHandler>

            <MenuList className="hidden w-20 max-h-72 lg:block">
              {countries.map(({ name, flag }) => (
                <MenuItem
                  key={name}
                  className="flex items-center gap-2"
                  onClick={() => setLang(name)}>
                  {flag} {name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>

        <IconButton variant="text" className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <XMarkIcon className="w-6 h-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="w-6 h-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <div className="py-4">
          {navList}
          <div className="flex items-center w-full flex-nowrap gap-x-4 lg:hidden">
            <Button
              size="sm"
              className="text-white bg-blue-600 border border-blue-600 hover:bg-white hover:text-blue-600"
              fullWidth>
              Join Now
            </Button>
            <Menu open={openMenu} handler={setOpenMenu}>
              <MenuHandler>
                <Button
                  fullWidth
                  size="sm"
                  variant="outlined"
                  className="flex items-center justify-center gap-2 lg:hidden">
                  🇺🇸 English{" "}
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`w-3.h-3.5 h-3.5 transition-transform ${
                      openMenu ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </MenuHandler>
              <MenuList className="block w-20 max-h-72 lg:hidden">
                {countries.map(({ name, flag }) => (
                  <MenuItem key={name} className="flex items-center gap-2">
                    {flag} {name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
