import React from 'react'
import PageBanner from '../components/PageBanner'
import banner from '../static/images/ResourcesBanner.jpg'
export default function Resources() {
    // scroll to top
    window.scrollTo(0, 0);
    document.title = "Resources";
    return (
        <div className='md:mt-20 mt-[65px] flex flex-col'>
            <PageBanner
                image={banner}
                bannerText={'Resources'}
            />
            <div className='flex flex-row gap-2 items-center mb-5 mt-8 px-12'>
                <svg width="32" height="41" viewBox="0 0 32 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 28.5H24V32.5H8V28.5ZM8 20.5H24V24.5H8V20.5ZM20 0.5H4C1.8 0.5 0 2.3 0 4.5V36.5C0 38.7 1.78 40.5 3.98 40.5H28C30.2 40.5 32 38.7 32 36.5V12.5L20 0.5ZM28 36.5H4V4.5H18V14.5H28V36.5Z" fill="#072033" />
                </svg>
                <h1 className='text-3xl md:text-4xl font-semibold text-off-black'><span className='text-dark-teal'>Resume</span> Template</h1>
            </div>

            <div className='flex flex-row gap-4 px-12 my-2 items-center'>
                <svg width="310" height="380" viewBox="0 0 310 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="310" height="380" rx="12" fill="#C5EEF0" />
                    <svg width="310" height="380" viewBox="0 0 310 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M299.667 0H10.3325C4.64891 0 0 4.27425 0 9.49919V370.501C0 375.726 4.64919 380 10.3325 380H299.667C305.351 380 310 375.726 310 370.501V9.49919C310 4.274 305.351 0 299.667 0ZM289.335 361.002H20.6668V19.0001H289.335V361.002ZM62.0004 147.251V131.906C62.0004 122.072 68.7182 113.143 78.7414 109.677L79.0513 109.581C74.7626 103.978 72.3335 97.2318 72.3335 90.2476C72.3335 71.9117 88.5588 56.9983 108.499 56.9983C128.444 56.9983 144.665 71.9151 144.665 90.2476C144.665 97.2289 142.236 103.975 137.897 109.581L138.207 109.677C148.284 113.143 155.002 122.076 155.002 131.906V147.251C155.002 149.862 152.677 152.002 149.833 152.002C146.994 152.002 144.665 149.865 144.665 147.251V131.906C144.665 126.015 140.636 120.648 134.588 118.561L127.2 115.996C125.495 115.426 124.256 114.048 123.946 112.434C123.636 110.821 124.256 109.108 125.6 108.018C131.132 103.501 134.336 97.0407 134.336 90.2482C134.336 77.1373 122.764 66.4981 108.503 66.4981C94.2417 66.4981 82.6692 77.1373 82.6692 90.2482C82.6692 97.0406 85.8733 103.502 91.4017 108.014C92.746 109.108 93.3659 110.817 93.056 112.431C92.746 114.094 91.5062 115.423 89.8016 115.993L82.4134 118.557C76.3659 120.648 72.3328 126.016 72.3328 131.906V147.251C72.3328 149.862 70.0083 152.002 67.1646 152.002C64.3247 151.999 62.0004 149.862 62.0004 147.251ZM196.334 76.0003C196.334 73.3894 198.659 71.249 201.503 71.249H242.837C245.677 71.249 248.005 73.386 248.005 76.0003C248.005 78.6112 245.681 80.7517 242.837 80.7517H201.503C198.659 80.7484 196.334 78.6113 196.334 76.0003ZM175.666 76.0003C175.666 73.3894 177.99 71.249 180.834 71.249C183.674 71.249 186.002 73.386 186.002 76.0003C186.002 78.6112 183.678 80.7517 180.834 80.7517C177.994 80.7484 175.666 78.6113 175.666 76.0003ZM196.334 104.499C196.334 101.888 198.659 99.7474 201.503 99.7474H242.837C245.677 99.7474 248.005 101.884 248.005 104.499C248.005 107.11 245.681 109.25 242.837 109.25H201.503C198.659 109.25 196.334 107.113 196.334 104.499ZM175.666 104.499C175.666 101.888 177.99 99.7474 180.834 99.7474C183.674 99.7474 186.002 101.884 186.002 104.499C186.002 107.11 183.678 109.25 180.834 109.25C177.994 109.25 175.666 107.113 175.666 104.499ZM196.334 133.001C196.334 130.39 198.659 128.249 201.503 128.249H242.837C245.677 128.249 248.005 130.386 248.005 133.001C248.005 135.611 245.681 137.752 242.837 137.752H201.503C198.659 137.749 196.334 135.612 196.334 133.001ZM175.666 133.001C175.666 130.39 177.99 128.249 180.834 128.249C183.674 128.249 186.002 130.386 186.002 133.001C186.002 135.611 183.678 137.752 180.834 137.752C177.994 137.749 175.666 135.612 175.666 133.001ZM61.9985 318.251C61.9985 315.641 64.3231 313.5 67.1667 313.5H206.668C209.507 313.5 211.836 315.637 211.836 318.251C211.836 320.862 209.511 323.003 206.668 323.003H67.1667C64.3232 323.003 61.9985 320.866 61.9985 318.251ZM248 204.251C248 206.862 245.675 209.002 242.831 209.002L103.331 208.999C100.491 208.999 98.1625 206.862 98.1625 204.248C98.1625 201.637 100.487 199.496 103.331 199.496H242.831C245.675 199.5 248 201.637 248 204.251ZM61.9985 261.25C61.9985 258.639 64.3231 256.499 67.1667 256.499H242.834C245.674 256.499 248.003 258.636 248.003 261.25C248.003 263.861 245.678 266.002 242.834 266.002H67.1667C64.3232 266.002 61.9985 263.861 61.9985 261.25ZM61.9985 289.752C61.9985 287.141 64.3231 285.001 67.1667 285.001H165.334C168.174 285.001 170.502 287.138 170.502 289.752C170.502 292.363 168.178 294.504 165.334 294.504L67.1667 294.5C64.3232 294.5 61.9985 292.363 61.9985 289.752ZM248 289.752C248 292.363 245.675 294.504 242.831 294.504H206.665C203.826 294.504 201.497 292.366 201.497 289.752C201.497 287.141 203.822 285.001 206.665 285.001H242.831C245.675 285.001 248 287.138 248 289.752ZM186 285.001C188.84 285.001 191.168 287.138 191.168 289.752C191.168 292.363 188.844 294.504 186 294.504C183.16 294.504 180.832 292.366 180.832 289.752C180.832 287.138 183.157 285.001 186 285.001ZM248 232.749C248 235.36 245.675 237.5 242.831 237.5H144.664C141.824 237.5 139.496 235.363 139.496 232.749C139.496 230.138 141.821 227.997 144.664 227.997H242.831C245.675 228.001 248 230.138 248 232.749ZM61.9985 232.749C61.9985 230.138 64.3231 227.997 67.1667 227.997H103.333C106.173 227.997 108.501 230.135 108.501 232.749C108.501 235.36 106.176 237.5 103.333 237.5H67.1667C64.3232 237.5 61.9985 235.363 61.9985 232.749ZM123.998 228.001C126.838 228.001 129.166 230.138 129.166 232.752C129.166 235.363 126.842 237.504 123.998 237.504C121.158 237.504 118.83 235.366 118.83 232.752C118.833 230.138 121.158 228.001 123.998 228.001Z" fill="#0F6F7B" />
                    </svg>
                </svg>

                <div
                    onClick={() => {
                        window.open('https://drive.google.com/file/d/1y1t4Y8YnZ2Q2Zm1mZ9X8Zn0d0Q2Jg1jV/view?usp=sharing')
                    }}
                    className="cursor-pointer flex rounded-xl flex-row gap-2 w-[200px] h-[48px] bg-dark-teal items-center justify-center text-off-white font-semibold text-center">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 11V14H2.5V11H0.5V14C0.5 15.1 1.4 16 2.5 16H14.5C15.6 16 16.5 15.1 16.5 14V11H14.5ZM13.5 7L12.09 5.59L9.5 8.17V0H7.5V8.17L4.91 5.59L3.5 7L8.5 12L13.5 7Z" fill="white" />
                    </svg>
                    <h1>Download</h1>
                </div>
            </div>

            <h1 className='my-5 px-12 text-3xl md:text-4xl md:4xl font-semibold'>
                <span className='text-dark-teal'>Interview Preparation Kit</span>  (Quant, VA, LR, DI, Excel, Guesstimates, etc)
            </h1>
            <div className='flex flex-row gap-4 px-12 my-2 items-center mb-10'>
                <svg width="310" height="380" viewBox="0 0 310 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="310" height="380" rx="12" fill="#C5EEF0" />
                    <path d="M127.263 124.583C129.896 127.505 131.417 131.34 131.417 135.395V147.188C131.417 156.105 124.188 163.333 115.271 163.333H57.1458C48.2287 163.333 41 156.105 41 147.188V135.396C41 131.34 42.5205 127.505 45.1545 124.583H44.2292C42.4457 124.583 41 123.138 41 121.354C41 119.571 42.4457 118.125 44.2292 118.125H54.9603L68.149 110.764C63.3523 106.074 60.375 99.5304 60.375 92.2917C60.375 78.0243 71.941 66.4583 86.2083 66.4583C100.476 66.4583 112.042 78.0243 112.042 92.2917C112.042 92.8416 112.024 93.3875 111.991 93.9289L115.461 90.3696C113.305 87.2459 112.042 83.458 112.042 79.375C112.042 68.6745 120.716 60 131.417 60C142.117 60 150.792 68.6745 150.792 79.375C150.792 83.4529 149.532 87.2366 147.38 90.3581L147.405 90.3835L159.13 102.423C162.066 105.438 163.708 109.48 163.708 113.688V118.125H166.938C168.721 118.125 170.167 119.571 170.167 121.354C170.167 123.138 168.721 124.583 166.938 124.583H127.263ZM117.459 118.125H157.25V113.688C157.25 111.163 156.264 108.738 154.503 106.929L142.882 94.9954C139.671 97.3556 135.707 98.75 131.417 98.75C127.132 98.75 123.171 97.3589 119.963 95.0036L108.335 106.929C106.979 108.32 106.795 108.514 106.437 108.965C105.821 109.741 105.603 110.318 105.585 111.496L117.459 118.125ZM113.611 123.373L98.5741 114.979C94.9014 116.985 90.688 118.125 86.2083 118.125C81.73 118.125 77.5178 116.985 73.8459 114.98L52.4245 126.936C49.3584 128.648 47.4583 131.884 47.4583 135.396V147.188C47.4583 152.538 51.7956 156.875 57.1458 156.875H115.271C120.621 156.875 124.958 152.538 124.958 147.188V135.395C124.958 131.884 123.059 128.648 119.993 126.936L115.736 124.559C114.879 124.455 114.125 124.014 113.611 123.373ZM86.2083 111.667C96.9089 111.667 105.583 102.992 105.583 92.2917C105.583 81.5912 96.9089 72.9167 86.2083 72.9167C75.5078 72.9167 66.8333 81.5912 66.8333 92.2917C66.8333 102.992 75.5078 111.667 86.2083 111.667ZM131.417 92.2917C138.55 92.2917 144.333 86.5087 144.333 79.375C144.333 72.2413 138.55 66.4583 131.417 66.4583C124.283 66.4583 118.5 72.2413 118.5 79.375C118.5 86.5087 124.283 92.2917 131.417 92.2917Z" fill="#0F6F7B" />
                    <mask id="path-3-inside-1_1_43" fill="white">
                        <rect width="310" height="380" rx="12" />
                    </mask>
                    <rect width="310" height="380" rx="12" stroke="#0F6F7B" stroke-width="42" mask="url(#path-3-inside-1_1_43)" />
                    <ellipse cx="187.25" cy="75" rx="5.25" ry="5" fill="#0F6F7B" />
                    <rect x="203" y="70" width="52" height="10" rx="5" fill="#0F6F7B" />
                    <ellipse cx="187.25" cy="105" rx="5.25" ry="5" fill="#0F6F7B" />
                    <rect x="203" y="100" width="52" height="10" rx="5" fill="#0F6F7B" />
                    <ellipse cx="187.25" cy="134" rx="5.25" ry="5" fill="#0F6F7B" />
                    <rect x="203" y="129" width="52" height="10" rx="5" fill="#0F6F7B" />
                    <rect x="102" y="201" width="150" height="10" rx="5" fill="#0F6F7B" />
                    <ellipse cx="137.25" cy="232" rx="5.25" ry="5" fill="#0F6F7B" />
                    <rect x="72" y="227" width="53" height="10" rx="5" fill="#0F6F7B" />
                    <rect x="154" y="227" width="98" height="10" rx="5" fill="#0F6F7B" />
                    <ellipse cx="186.75" cy="291" rx="5.25" ry="5" transform="rotate(-180 186.75 291)" fill="#0F6F7B" />
                    <rect x="252" y="296" width="53" height="10" rx="5" transform="rotate(-180 252 296)" fill="#0F6F7B" />
                    <rect x="170" y="296" width="98" height="10" rx="5" transform="rotate(-180 170 296)" fill="#0F6F7B" />
                    <rect x="72" y="255" width="180" height="10" rx="5" fill="#0F6F7B" />
                    <rect x="72" y="313" width="135" height="10" rx="5" fill="#0F6F7B" />
                </svg>
                <div
                    onClick={() => {
                        window.open('https://drive.google.com/file/d/1y1t4Y8YnZ2Q2Zm1mZ9X8Zn0d0Q2Jg1jV/view?usp=sharing')
                    }}
                    className="cursor-pointer flex rounded-xl flex-row gap-2 w-[200px] h-[48px] bg-dark-teal items-center justify-center text-off-white font-semibold text-center">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 11V14H2.5V11H0.5V14C0.5 15.1 1.4 16 2.5 16H14.5C15.6 16 16.5 15.1 16.5 14V11H14.5ZM13.5 7L12.09 5.59L9.5 8.17V0H7.5V8.17L4.91 5.59L3.5 7L8.5 12L13.5 7Z" fill="white" />
                    </svg>
                    <h1>Download</h1>
                </div>
            </div>

        </div>
    )
}