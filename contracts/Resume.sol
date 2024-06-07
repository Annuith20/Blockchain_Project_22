pragma solidity ^0.8.0;

contract Resume {
 struct ResumeData {
  string name;
  string email;
  string experience;
  string education;
  bytes32 hashValue; // Added field to store the hash
 }

 mapping(address => ResumeData) public resumes;

 event ResumeUploaded(
  address indexed user,
  string name,
  string email,
  string experience,
  string education,
  bytes32 hashValue // Added to event
 );

 function addResume(
  string memory _name,
  string memory _email,
  string memory _experience,
  string memory _education,
  string memory _hashValue // Added argument
 ) public {
  bytes memory resumeData = abi.encodePacked(_name, ",", _email, ",", _experience, ",", _education);
  bytes32 calculatedHash = keccak256(resumeData); // Calculate hash
  resumes[msg.sender] = ResumeData(_name, _email, _experience, _education, calculatedHash);
  emit ResumeUploaded(msg.sender, _name, _email, _experience, _education, calculatedHash); // Updated event
 }

 // Optional function to retrieve resume data (including hash)
 function getResume(address _user) public view returns (ResumeData memory) {
  return resumes[_user];
 }
}
