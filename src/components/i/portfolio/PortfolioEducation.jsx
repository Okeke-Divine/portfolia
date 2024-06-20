
const PortfolioEducation = async({userId}) => {

    const educations = await prisma.userEducation.findMany({
        where: { userId },
    });

  return (
    <div>PortfolioEducation</div>
  )
}

export default PortfolioEducation