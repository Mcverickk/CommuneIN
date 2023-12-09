
import Image from 'next/image';

export const ErcComponent=(props)=>{

    return(
        <div className="mainErc w-100">
        <div className="contentErc w-100">
          <Image src={props.pic} alt='Erc20 logo'
          width={60}
          height={30}
          className="imageErc"
          />
          <div className="otherContentErc">
          <div className="titleErc font-bolder font-20">{props.name}</div>
          <div className="descErc font-14">{props.info}</div>

          <div className="otherErc  font-light  font-14 opacity-80">{`${props.sold}/ ${props.totalSupply}`}</div>
          </div>
        </div>
        <div className="footerSec w-100">

            <p className="font-light">{props.timeLeft}</p>
            <button className="font-light">{`Basket Size: ${props.basketSize} ${props.name}`}</button>

        </div>
        <button disabled={props.disabled} className='btn-erc center' style={{
          marginTop:'30px'
        }}>Buy</button>


      </div>
    )
}