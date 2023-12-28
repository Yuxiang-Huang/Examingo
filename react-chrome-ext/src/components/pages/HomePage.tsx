import { useNavigate } from "react-router-dom";
// import ExamingoLogo from "./components/ExamingoLogo.png";
import LogoText from "../LogoText";
import NavButton from "../NavButton";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Rich",
      email: "hello@prisma.com",
      posts: {
        create: {
          title: "My first post",
          body: "Lots of really interesting stuff",
          slug: "my-first-post",
        },
      },
    },
  });

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  console.dir(allUsers, { depth: null });
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

const HomePage = () => {
  const navigate = useNavigate();

  const gotToQuestionTypePage = () => {
    navigate("/QuestionType");
  };

  const goToResolveQuestionPage = () => {
    navigate("/ResolveQuestion");
  };

  return (
    <div className="flex flex-col items-center justify-center text-center">
      {/* <img src={ExamingoLogo} className="Logo" alt="logo" /> */}
      <LogoText />
      <NavButton
        buttonText="Test Yourself"
        clickFunction={gotToQuestionTypePage}
      />
      <NavButton
        buttonText="Resolve Questions"
        clickFunction={goToResolveQuestionPage}
      />

      <NavButton buttonText="Personalize Learning" clickFunction={() => {}} />
    </div>
  );
};

export default HomePage;
