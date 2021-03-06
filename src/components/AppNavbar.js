// Frameworks
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Actions
import * as AppActions from '../actions/AppActions'

import styled from 'styled-components'

const NavBar = styled.nav`
  color: #6E6E6E;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  line-height: 1;
  font-size: 30px;
`
const LogoLink = styled.a`
  color: black;
  text-decoration: none;
  font-weight: bold;
`
const DemoText = styled.span``

const RightArea = styled.div``

const UserName = styled.span`
  display: block;
  position: relative;
  top: 80px;
  font-size: 18px;
  color: white;
  text-align: center;
`
const UportAvatar = styled.img`
  display: inline-block;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 2px solid white;
  position: absolute;
  top: 70px;
  right: 50px;
`

class AppNavbar extends Component {
  render () {
    return (
      <NavBar>
        <LogoLink href='/'>uport</LogoLink>
        <RightArea>
          <DemoText>Demo</DemoText>
          {
            this.props.uport !== null &&
            this.props.uport !== undefined &&
            this.props.uport.avatar
              ? (
                <div>
                  <UportAvatar
                    alt='user-img'
                    src={this.props.uport.avatar.uri} />
                  <UserName>{this.props.uport.name}</UserName>
                </div>
              )
              : null
          }
        </RightArea>
      </NavBar>
    )
  }
}

// AppNavbar.propTypes = {
//   uport: React.PropTypes.object
// }

function mapStateToProps (state, props) {
  return { uport: state.App.uport }
}
function mapDispatchToProps (dispatch) {
  return { actions: bindActionCreators(AppActions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppNavbar)
