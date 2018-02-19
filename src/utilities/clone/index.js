export default (toBeCloned) => {
    if(typeof toBeCloned === 'function') {
        return toBeCloned.bind({})
    } else {
        return {...toBeCloned }
    }
}