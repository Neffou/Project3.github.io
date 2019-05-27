import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt, faUserTie, faUserPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faMapMarkerAlt, faUserTie, faUserPlus )

const Tab = ({icon, tab}) => {

    return   (
      <div>
        <FontAwesomeIcon icon={icon} /> {tab}
      </div>
    )

}


export default Tab