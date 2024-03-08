import BannerButton from "./Btn/BannerButton";


const Banner = () => {
    const imgCollection = [
        {
            id: 1,
            url: 'https://s3-alpha-sig.figma.com/img/83f5/6b46/5363fa1ac1fbf4f4d45ea5ad7118bfb6?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QA3FfvHtXMenAacb3j7U7bQNoguZP0eRMpAmU6M~hKJJw5LB9DeXPd4A94qBA8ZuP5gpn3TkxKFdPe5uwSKNrGMXej1Sdri2J82XqunzY1zJT-MI-4eRw4Gnt4-8WTonJ3OdRK5mLMGLBWscjXd-ERP7kgkGshDok~SDgViNofIKBWMWbo5JktnS0IzL4DJKaDJ2C5UiZvyg52HW9LFhkdlVrzl~9sTMPu7hIIS2aegVkhyjCiG~-CdQ9cWSoVCoCZm04Ic~I3UYk0QjJpUK6mx-etrPPCp0SZyL9qUJvqli98FJKOADkDyhNMKpg~3nl2AafEP2-9yWXFD9d78Mww__'
        },
        {
            id: 2,
            url: 'https://s3-alpha-sig.figma.com/img/4462/54c7/d2d9d0d2705e62ec81b53225a9399131?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q5mBU5ecY2VIqIg~~nvzqqAdlaFWijeYCKm1-c5U8i92ny4-CC7E~w46~Jm09MJomUiJqFJRBopLewYFGZVHM9cZr1LI7bftDecL1SfrfDT1VRYE~94M0BTy6U0EwzFz8J6aB49eJxbSA5A3xh~it-4XbggJLTWdkGH8K6E2qiODQ~w6vFva18z2NhTr98m5Ah-AaLdMwYzTUERf6mHPi1cJdBUJyxXUo-msbZod~IksYOU6XktW8C2EfUMXwzarXioHumfUofXM8xQK7CQrsMpVXJdHyPOk9BREfWZr4HE~qnEe7~Alg6XvpHaSkuya83OpF96TZQHbL82TMc5rAg__'
        },
        {
            id: 3,
            url: 'https://s3-alpha-sig.figma.com/img/e6f5/52e3/0161d7e41939aadfabba45cf752f613a?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NtslRSBKrdlGAnBC39xff14enoyTllCLawpXjo362H3PPpo7FZ86P9ds~8qnoPQxiT3AL7ERHubclTw-iqdxXsAz8rxfirfwySWZLo~Vz1PmojGxv5I~UtU2jHPAQ5DbQXODO~b2B9Wn3dcabbqgZyr3o3xgyOVY5IgRp3p-jC8h02UMctDYTC6ooLKZYsb1h7z2boFw~5WOajBJHRNlVVkKasMrMuz58v7P36AvItSO5h31QoDwwYU6somSPCerHj4oV8kiCFF4rI3pSk7dezeX1eg6dlJE870BQzOffIYSkzNTNbv7IzJfNezbakeCYNqtiZ3OzSSHnaOwJ64l~Q__'
        },
    ]
    return (
        <div className="flex justify-center items-center mt-9">
            <div className="w-1/2 ">
                <p className="text-base lemonada font-bold">WELCOME TO OUR</p>
                <h1 className="text-[90px] font-normal font-primary">Unlocklive</h1>
                <h2 className="text-[40px] font-medium">Elevating Your Coffee Experience</h2>
                <p>Unlocklive  embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.</p>
                <div className="mt-6 flex items-center justify-between">
                    <BannerButton text={'EXPLORE OUR MENU'} />
                    <div className="flex items-center gap-6">
                        <div className="flex relative">
                            {
                                imgCollection.map(({ id, url }) => <img className={`h-[54px] w-[54px] rounded-full ${id === 2 ? 'border-2 border-white -ms-4' : id === 3 ? 'border-2 border-white -ms-4' : ''}  `} key={id} src={url} />)
                            }
                        </div>
                        <div>
                            <p className="text-2xl font-semibold">1200+</p>
                            <p className="text-sm font-normal">Tasty Variant Coffee</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-1 mt-11">
                    <p className="h-3 w-3 rounded-full bg-gray_color"></p>
                    <p className="h-3 w-3 rounded-full bg-gray_color"></p>
                    <p className="h-3 w-3 rounded-full bg-gray_color"></p>
                    <p className="h-3 w-3 rounded-full bg-primary_color"></p>
                    <p className="h-3 w-3 rounded-full bg-gray_color"></p>
                </div>
            </div>
            <div className="w-1/2">
                <img className="h-fit w-full" src="https://s3-alpha-sig.figma.com/img/57d9/f59a/12c5f1d0209ee224e405d2767447ac1c?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U5yAoHHnd~lfAHfEoUvDfluUKqKJPR-qK-mGhvpsMF7EzvLZKpM6alhqFGFHmfK6Scbdh4tza7aegs7t3sDLShiD0VEwNNqVI7kNTYhXxn0tPLdUpFQhhNME9GFBBY8MEypYV0az5x0sBUdAUPAKhcAqcsAKYR-auGFVxQY-CDIKqWr6bmox-7JqHLfUGqoqB~W7Wynu7VhKAi~1~5oLnXfgfG5lZ~kZiGGHB1B1~jc6hr9Q0aVjHbLwqmHgn5-aMlvaXYWeBrE~LgfufQHq2vKhjFWuhmfEsJdXxAYsS5PoHlvdd~DLob1FORxo5ELcjTi7WDpl8f0LdIHgNg2N4g__" alt="" />
            </div>
        </div>
    );
};

export default Banner;