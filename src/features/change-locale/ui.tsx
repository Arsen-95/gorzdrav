import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { getCookie } from "@shared/lib/cookie";

export const ChangeLocale = ({ ...props }) => {
  const [lang, setLang] = useState("ru");
  const router = useRouter();

  // useEffect(() => {
  //   document.cookie = `NEXT_LOCALE=${lang}`;
  //   router.push(router.pathname, "", { locale: lang });
  // }, [lang]);

  const onLanguageChange = (language: string) => {
    document.cookie = `NEXT_LOCALE=${language}`;
    router.push(router.pathname, "", { locale: language });
  };

  const locales: Record<string, string> = {
    ru: "Рус",
    uz: "Узб",
  };
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            {...props}
            isActive={isOpen}
            as={Button}
            fontWeight="400"
            p="0"
            fontSize={["", "", "", "", "18px"]}
            rightIcon={
              <ChevronDownIcon
                transform={isOpen ? "rotate(180deg)" : ""}
                transition="transform 0.2s ease"
              />
            }
            bg="none"
            _hover={{
              bg: "transparent",
            }}
            _active={{
              bg: "transparent",
            }}
          >
            {locales[router.locale ?? "ru"]}
          </MenuButton>
          <MenuList minWidth="100px">
            <MenuOptionGroup
              // defaultValue={router.locale}
              onChange={(value) =>
                !Array.isArray(value) ? onLanguageChange(value) : null
              }
              type="radio"
            >
              <MenuItemOption value="ru">Рус</MenuItemOption>
              <MenuItemOption value="uz">Узб</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
