//I want to create a deploy script for the akatsuki-dao smart contract

//Useful libraries that I would be working with -->
const hre = require("hardhat");
//require("dotenv").config() //This imports the env 

//Declaring the various neccessary variables
//This handles the main contract deploy function
async function deploy_contract() {
  console.log("Akatsuki DAO \n")

  // We get the contract to deploy
  const akatsukiDAO = await hre.ethers.getContractFactory("akatsukiDAO");
  const akatsuki_dao = await akatsukiDAO.deploy();

  await akatsuki_dao.deployed();

  console.log("DAO deployed to:", akatsuki_dao.address);
}

//This handles the callback for the main function
deploy_contract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
