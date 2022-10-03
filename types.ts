export const Owner ={
    address :'',
    associatedTokenAccountAddress:''
  }

export interface third {
  address: string
  associatedTokenAccountAddress: string
}

  export const  thirdNft = {
    symbol:'',
    name:'',
    address:'',
    description:'',
    image:'',
    mintAddress:'',
    thirdowner: Owner,
    updateAuthority:'',
  } 

  export const Nft= {
    symbol:'',
    name:'',
    address:'',
    description:'',
    image:'',
    mintAddress:'',
    owner: Owner,
    updateAuthority:''
  }