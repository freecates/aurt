import Link from 'next/link'
import NavStyles from './styles/NavStyles'

class MenuLang extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      langMenu: '',
      ruta: ''
    }
  }

  render() {
    // console.log('Hola')
    const langMenu = this.props.langMenu
    const ruta = this.props.ruta
    return (
      <React.Fragment>
        {ruta.includes('/ca') && (
          <NavStyles className="lang-menu">
            <ul>
              <li>
                <h4>
                  <img
                    src="/static/ca_ES.svg"
                    alt="logo locale CA"
                    style={{ verticalAlign: 'middle' }}
                    width="40"
                    height="40"
                  />
                </h4>
                <ul className="dropdown">
                  {Object.keys(langMenu).map(langcode => (
                    <React.Fragment key={langcode}>
                      {langMenu[langcode].selected == true ? (
                        ''
                      ) : (
                        <li>
                          <h4>
                            <Link href={langMenu[langcode].path} prefetch>
                              <a className="item" title={langcode}>
                                {langcode == 'en' && (
                                  <img
                                    src="/static/en_UK.svg"
                                    alt="logo locale EN"
                                    style={{ verticalAlign: 'middle' }}
                                    width="40"
                                    height="40"
                                  />
                                )}
                                {langcode == 'es' && (
                                  <img
                                    src="/static/es_ES.svg"
                                    alt="logo locale ES"
                                    style={{ verticalAlign: 'middle' }}
                                    width="40"
                                    height="40"
                                  />
                                )}
                              </a>
                            </Link>
                          </h4>
                        </li>
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </li>
            </ul>
          </NavStyles>
        )}
        {ruta.includes('/en') && (
          <NavStyles className="lang-menu">
            <ul>
              <li>
                <h4>
                  <img
                    src="/static/en_UK.svg"
                    alt="logo locale EN"
                    style={{ verticalAlign: 'middle' }}
                    width="40"
                    height="40"
                  />
                </h4>
                <ul className="dropdown">
                  {Object.keys(langMenu).map(langcode => (
                    <React.Fragment key={langcode}>
                      {langMenu[langcode].selected == true ? (
                        ''
                      ) : (
                        <li>
                          <h4>
                            <Link href={langMenu[langcode].path} prefetch>
                              <a className="item" title={langcode}>
                                {langcode == 'ca' && (
                                  <img
                                    src="/static/ca_ES.svg"
                                    alt="logo locale CA"
                                    style={{ verticalAlign: 'middle' }}
                                    width="40"
                                    height="40"
                                  />
                                )}
                                {langcode == 'es' && (
                                  <img
                                    src="/static/es_ES.svg"
                                    alt="logo locale ES"
                                    style={{ verticalAlign: 'middle' }}
                                    width="40"
                                    height="40"
                                  />
                                )}
                              </a>
                            </Link>
                          </h4>
                        </li>
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </li>
            </ul>
          </NavStyles>
        )}
        {ruta.indexOf('/ca') == -1 &&
          (ruta.indexOf('/en') == -1 && (
            <NavStyles className="lang-menu">
              <ul>
                <li>
                  <h4>
                    <img
                      src="/static/es_ES.svg"
                      alt="logo locale ES"
                      style={{ verticalAlign: 'middle' }}
                      width="40"
                      height="40"
                    />
                  </h4>
                  <ul className="dropdown">
                    {Object.keys(langMenu).map(langcode => (
                      <React.Fragment key={langcode}>
                        {langMenu[langcode].selected == true ? (
                          ''
                        ) : (
                          <li>
                            <h4>
                              <Link href={langMenu[langcode].path} prefetch>
                                <a className="item" title={langcode}>
                                  {langcode == 'ca' && (
                                    <img
                                      src="/static/ca_ES.svg"
                                      alt="logo locale CA"
                                      style={{ verticalAlign: 'middle' }}
                                      width="40"
                                      height="40"
                                    />
                                  )}
                                  {langcode == 'en' && (
                                    <img
                                      src="/static/en_UK.svg"
                                      alt="logo locale EN"
                                      style={{ verticalAlign: 'middle' }}
                                      width="40"
                                      height="40"
                                    />
                                  )}
                                </a>
                              </Link>
                            </h4>
                          </li>
                        )}
                      </React.Fragment>
                    ))}
                  </ul>
                </li>
              </ul>
            </NavStyles>
          ))}
      </React.Fragment>
    )
  }
}

export default MenuLang
