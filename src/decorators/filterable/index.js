import clone from '../../utilities/clone'

export default (componentToDecorate) => {
    let decoratedComponent = componentToDecorate //clone(componentToDecorate)
    return decoratedComponent
}