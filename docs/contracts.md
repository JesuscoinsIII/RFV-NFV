# Smart Contract Documentation

## RFV Contract

### Overview
The RFV (Regenerative Finance) contract is designed to manage the allocation and distribution of funds for regenerative finance initiatives.

### Functions
- **allocateFunds(address recipient, uint256 amount)**: Allocates funds to a specific recipient.
- **distributeFunds()**: Distributes the accumulated funds to predefined recipients.

### Events
- **FundsAllocated(address indexed recipient, uint256 amount)**: Emitted when funds are allocated.
- **FundsDistributed(address indexed recipient, uint256 amount)**: Emitted when funds are distributed.

## NFV Contract

### Overview
The NFV (Non-Fungible Volunteer) contract incentivizes community engagement through tokenized volunteer contributions.

### Functions
- **mintVolunteerToken(address volunteer, uint256 amount)**: Mints new volunteer tokens for a specific address.
- **redeemVolunteerToken(address volunteer, uint256 amount)**: Redeems volunteer tokens for rewards.

### Events
- **TokenMinted(address indexed volunteer, uint256 amount)**: Emitted when tokens are minted.
- **TokenRedeemed(address indexed volunteer, uint256 amount)**: Emitted when tokens are redeemed.

## Hand Protocol Contract

### Overview
The Hand Protocol contract serves as an onboarding guide and outreach tool for public goods projects.

### Functions
- **registerProject(address project, string memory description)**: Registers a new public goods project.
- **allocateHandTokens(address recipient, uint256 amount)**: Allocates Hand Tokens to a specific recipient.

### Events
- **ProjectRegistered(address indexed project, string description)**: Emitted when a new project is registered.
- **HandTokensAllocated(address indexed recipient, uint256 amount)**: Emitted when Hand Tokens are allocated.

## Greenpill Network Contract

### Overview
The Greenpill Network contract manages global community outreach and networking.

### Functions
- **addMember(address member)**: Adds a new member to the network.
- **removeMember(address member)**: Removes a member from the network.

### Events
- **MemberAdded(address indexed member)**: Emitted when a new member is added.
- **MemberRemoved(address indexed member)**: Emitted when a member is removed.
