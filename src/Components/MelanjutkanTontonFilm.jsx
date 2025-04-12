const AllOfUsAreDeadLanjut = "/assets/assetgambar/assetgambarberanda/allofusaredeadlanjut.png";
const AMancalledOttoLanjut = "/assets/assetgambar/assetgambarberanda/amancalledottolanjut.png";
const BlueLockLanjut = "/assets/assetgambar/assetgambarberanda/bluelocklanjut.png";
const DontLookUpLanjut = "/assets/assetgambar/assetgambarberanda/dontlookuplanjut.png";
const Star = "/assets/assetgambar/assetgambarberanda/star.png";
const TombolKiri = "/assets/assetgambar/assetgambarberanda/arrow-left.png";
const TombolKanan = "/assets/assetgambar/assetgambarberanda/arrow-right.png";



import "./cssComponents/melanjutkanTontonFilm.css"



function MelanjutkanTontonFilm () {
  const films = [DontLookUpLanjut, AllOfUsAreDeadLanjut, BlueLockLanjut, AMancalledOttoLanjut]

    return(
      <>

      <div className="lanjutfilm">
        <div className="tombolkiri"><img src={TombolKiri}/></div>
        {films.map((film, index) => (
          <div key={index} className={`lanjutfilm${index}`} style={{ backgroundImage:`linear-gradient(180deg, rgba(18,18,18,0), rgba(18,18,18,1)), url(${film})`}}>

            {index === 0 && (
            <div className="namafilm">Don&apos;t Look Up <div className="rating"><img src={Star} width="30"/>4.5/5</div></div>
          )}

            {index === 1 && (
            <div className="namafilm">The Batman <div className="rating"><img src={Star} width="30"/>4.2/5</div></div>
          )}

            {index === 2 && (
              <div className="bluelock">
                <div className="episodebaru"> Episode Baru</div>
                <div className="namafilmbluelock">Blue Lock <div className="rating"><img src={Star} width="30"/>4.6/5</div></div>
              </div>
          )}

            {index === 3 && (
            <div className="namafilm">A Man Called Otto <div className="rating"><img src={Star} width="30"/>4.4/5</div></div>
          )}
          </div> 
        ))}
        <div className="tombolkanan"><img src={TombolKanan}/></div>
      </div>

      </>

    )
}

export default MelanjutkanTontonFilm