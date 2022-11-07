import Link from "next/link";
import { useRouter } from "next/router";
import { Box } from "theme-ui";

type NavbarLinkProps = {
  href: string;
  text: string;
};

export default function NavbarLink({ href, text }: NavbarLinkProps) {
  const router = useRouter();

  return (
    <Box sx={{ alignSelf: "center", ["a"]: { textDecoration: "none" } }}>
      <Link href={href} passHref>
        <Box
          sx={{
            color: router.pathname === href ? "primary" : "currentColor",
            textDecoration: "none",

            [":hover"]: {
              textDecoration: "underline",
            },
          }}
        >
          {text}
        </Box>
      </Link>
    </Box>
  );
}
