
import Image from 'next/image';

export const ErcComponent=()=>{

    return(
        <div className="mainErc">
        <div className="contentErc">
          <Image src='/next.svg' alt='Erc20 logo'
          width={60}
          height={30}
          className="imageErc"
          />
          <div className="otherContentErc">
          <div className="titleErc font-bolder font-20">Ficcnepfkfpd</div>
          <div className="descErc font-14">description of this</div>

          <div className="otherErc  font-light  font-14 opacity-80">$20000/ $50000</div>
          </div>
        </div>
        <div className="footerSec">

            <p className="font-light">fuck chirag</p>
            <p className="font-light">2 days to fuck</p>

        </div>

      </div>
    )
}