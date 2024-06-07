const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');

// Get the contract instance
const contractABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_email",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_experience",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_education",
                "type": "string"
            }
        ],
        "name": "addResume",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getResume",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]; // Replace with your contract ABI
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // Replace with your contract address

const contract = new web3.eth.Contract(contractABI, contractAddress);
document.getElementById('resumeForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;

    // Combine resume data (optional)
    try {
        await contract.methods.addResume(name, email, experience, education).send({ from: '0x334c22db309A9bD394884e98438113e640A55C8B' });
        alert('Resume uploaded successfully!');
      } catch (error) {
        console.error('Error uploading resume:', error);
        alert('Error uploading resume. Please check the console for details.');
      }
    });
