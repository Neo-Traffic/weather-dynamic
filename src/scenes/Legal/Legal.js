import React, { Component } from 'react'
import { injectIntl } from 'react-intl'

import PMLFR from '../../assets/images/meteo-media-logo.png'

import legalEN from '../../assets/images/poweredBy.png'
import legalENQC from '../../assets/images/poweredByQC.png'
import legalFR from '../../assets/images/propulsePar.png'
import legalFRQC from '../../assets/images/propulseParQC.png'



class Legal extends Component {
  render () {
    let legal = null

    if(this.props.player.design.name === 'PML') {
      legal = PMLFR
    } else if(this.props.intl.locale === 'fr-CA' || this.props.intl.locale === 'fr-FR') {
      legal = this.props.localization[1] === 'QC' ? legalFRQC : legalFR
    } else {
      legal = this.props.localization[1] === 'QC' ? legalENQC : legalEN
    }

    return (
      <section id="legals" className={this.props.player.design.name}>
        <img className="logo" src={legal}  alt={ "" } />
      </section>
    )
  }
}

export default injectIntl(Legal)
