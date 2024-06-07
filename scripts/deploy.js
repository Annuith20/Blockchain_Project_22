async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    // Replace "Resume" with the actual name of your contract
    const Resume = await ethers.getContractFactory("Resume");
  
    const deployedResume = await Resume.deploy();
  
    console.log("Resume contract deployed to:", deployedResume.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });