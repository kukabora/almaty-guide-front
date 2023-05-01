import React, {Component} from 'react';

class AccountSettings extends Component {
    render() {
        return (
            <div>
                <div className="setting-boxes">
                    <a href="">
                    <div className="setting-box">
                        <div className="setting-box-img">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-rtl-flip="true"><path d="M22.5 17.25a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0zm1.5 0a6.75 6.75 0 1 0-13.5 0 6.75 6.75 0 0 0 13.5 0zm-7.5-3v6a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-1.5 0zM14.25 18h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5zM1.5 17.25a6.003 6.003 0 0 1 8.356-5.518.75.75 0 0 0 .588-1.38A7.504 7.504 0 0 0 0 17.25a.75.75 0 0 0 1.5 0zm9.375-12.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0zm1.5 0a4.875 4.875 0 1 0-9.75 0 4.875 4.875 0 0 0 9.75 0z"></path></svg>
                        </div>
                        <div className="setting-box-texts">
                            <div className="setting-box-texts-head">
                                <h2>Personal details</h2>
                            </div>
                            <div className="setting-box-texts-small">
                                <p>Update your info and find out how it's used.</p>
                            </div>
                            <div className="setting-box-texts-link">
                                <a href="">Manage personal details</a>
                            </div>
                        </div>
                    </div></a>
                    <a href="">
                        <div className="setting-box">
                            <div className="setting-box-img">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-rtl-flip="true"><path d="M.75 4.5h16.34a3.5 3.5 0 1 0 0-1.5H.75a.75.75 0 0 0 0 1.5zM20.5 1.75a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm2.75 17.75H9.46a3.5 3.5 0 0 0-6.83 0H.75a.75.75 0 0 0 0 1.5h1.88a3.5 3.5 0 0 0 6.83 0h13.79a.75.75 0 0 0 0-1.5zm-17.2 2.75a2 2 0 1 1 2-2 2 2 0 0 1-2 2zM23.25 11h-7.84a3.49 3.49 0 0 0-6.82 0H.75a.75.75 0 0 0 0 1.5h7.84a3.49 3.49 0 0 0 6.82 0h7.84a.75.75 0 0 0 0-1.5zM12 13.75a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"></path></svg>
                            </div>
                            <div className="setting-box-texts">
                                <div className="setting-box-texts-head">
                                    <h2>Preferences</h2>
                                </div>
                                <div className="setting-box-texts-small">
                                    <p>Change your language, currency, and accessibility requirements.</p>
                                </div>
                                <div className="setting-box-texts-link">
                                    <a href="">Manage preferences</a>
                                </div>
                            </div>
                        </div></a>
                    <a href="">
                        <div className="setting-box">
                            <div className="setting-box-img">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.5 16.5v5.25a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75v-10.5a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75v5.25zm1.5 0v-5.25A2.25 2.25 0 0 0 18.75 9H5.25A2.25 2.25 0 0 0 3 11.25v10.5A2.25 2.25 0 0 0 5.25 24h13.5A2.25 2.25 0 0 0 21 21.75V16.5zM7.5 9.75V6a4.5 4.5 0 0 1 9 0v3.75a.75.75 0 0 0 1.5 0V6A6 6 0 0 0 6 6v3.75a.75.75 0 0 0 1.5 0zM12 15a1.125 1.125 0 1 0 .004 0h-.006a.75.75 0 0 0 .004 1.5H12a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5z"></path></svg>
                            </div>
                            <div className="setting-box-texts">
                                <div className="setting-box-texts-head">
                                    <h2>Security</h2>
                                </div>
                                <div className="setting-box-texts-small">
                                    <p>Adjust your security settings and set up two-factor authentication.</p>
                                </div>
                                <div className="setting-box-texts-link">
                                    <a href="">Manage account security</a>
                                </div>
                            </div>
                        </div></a>
                    <a href="">
                        <div className="setting-box">
                            <div className="setting-box-img">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" data-rtl-flip="true"><path d="M116 0H28c-6.627 0-12 5.373-12 12v20a4 4 0 0 0 8 0h96v40a4 4 0 0 0 8 0V12c0-6.627-5.373-12-12-12zM24 24V12a4 4 0 0 1 4-4h88a4 4 0 0 1 4 4v12zm76 20H12C5.373 44 0 49.373 0 56v60c0 6.627 5.373 12 12 12h88c6.627 0 12-5.373 12-12V56c0-6.627-5.373-12-12-12zm-88 8h88a4 4 0 0 1 4 4v12H8V56a4 4 0 0 1 4-4zm88 68H12a4 4 0 0 1-4-4V76h96v40a4 4 0 0 1-4 4zM89.14 84.25h-23A5.88 5.88 0 0 0 60 89.859V102.12a5.88 5.88 0 0 0 6.09 5.63h23a5.89 5.89 0 0 0 6.1-5.63V89.88a5.89 5.89 0 0 0-6.05-5.63zm-1.9 15.5H68v-7.5h19.24zM36 96a4 4 0 0 1-4 4H20a4 4 0 0 1 0-8h12a4 4 0 0 1 4 4z"></path></svg>
                            </div>
                            <div className="setting-box-texts">
                                <div className="setting-box-texts-head">
                                    <h2>Payment details </h2>
                                </div>
                                <div className="setting-box-texts-small">
                                    <p>Securely add or remove payment methods to make it easier when you book.</p>
                                </div>
                                <div className="setting-box-texts-link">
                                    <a href="">Manage payment details </a>
                                </div>
                            </div>
                        </div></a>
                    <a href="">
                        <div className="setting-box">
                            <div className="setting-box-img">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.883 23.317l.1-1.122a3.75 3.75 0 0 0-2.921-4l-3.651-.81.587.732v-5.742a2.627 2.627 0 0 0-2.628-2.626c-.05 0-.05 0-.098.002-1.373-.008-2.517 1.125-2.524 2.53 0 .064 0 .064.003.13l-.001 9.165 1.2-.6-1.477-1.108a2.283 2.283 0 0 0-3.197 3.194l.476.634a.75.75 0 0 0 1.2-.9l-.475-.633a.782.782 0 0 1 1.097-1.094l1.476 1.107a.75.75 0 0 0 1.2-.6v-9.2l-.002-.088a1.043 1.043 0 0 1 1.048-1.038l.075-.001c.622 0 1.127.504 1.127 1.126v5.742a.75.75 0 0 0 .587.732l3.651.811a2.25 2.25 0 0 1 1.753 2.4l-.1 1.123a.75.75 0 1 0 1.494.134zM6.75 18.57h-4.5a.75.75 0 0 1-.75-.75V2.25a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75V7.5a.75.75 0 0 0 1.5 0V2.25A2.25 2.25 0 0 0 15.75 0H2.25A2.25 2.25 0 0 0 0 2.25v15.57a2.25 2.25 0 0 0 2.25 2.25h4.5a.75.75 0 0 0 0-1.5zm4.125-12.195a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zm-1.027 3.17A5.296 5.296 0 0 0 8.998 9a5.235 5.235 0 0 0-4.93 3.502 5.278 5.278 0 0 0-.306 1.744.75.75 0 0 0 1.5.008c.002-.427.077-.85.22-1.252a3.736 3.736 0 0 1 3.52-2.502 3.796 3.796 0 0 1 1.684.39.75.75 0 0 0 .662-1.345zM4.5 15h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5z"></path></svg>
                            </div>
                            <div className="setting-box-texts">
                                <div className="setting-box-texts-head">
                                    <h2>Privacy</h2>
                                </div>
                                <div className="setting-box-texts-small">
                                    <p>Exercise your privacy rights and control how your data is used.</p>
                                </div>
                                <div className="setting-box-texts-link">
                                    <a href="">Manage privacy</a>
                                </div>
                            </div>
                        </div></a>
                    <a href="">
                        <div className="setting-box">
                            <div className="setting-box-img">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.28 21.961a2.837 2.837 0 0 0 5.445 0 .75.75 0 1 0-1.44-.422 1.337 1.337 0 0 1-2.565 0 .75.75 0 1 0-1.44.422zM12.75 3V.75a.75.75 0 0 0-1.5 0V3a.75.75 0 0 0 1.5 0zm-.75.75a6.75 6.75 0 0 1 6.75 6.75c0 3.154.29 5.436.785 6.994.323 1.02.684 1.59.995 1.84L21 18H3l.59 1.212c.248-.315.572-.958.88-2 .49-1.66.78-3.872.78-6.712A6.75 6.75 0 0 1 12 3.75zm0-1.5a8.25 8.25 0 0 0-8.25 8.25c0 2.702-.272 4.772-.72 6.288-.254.864-.493 1.336-.62 1.5A.75.75 0 0 0 3 19.5h18c.708 0 1.022-.892.47-1.335.019.016-.008-.015-.07-.113-.14-.223-.29-.553-.435-1.012-.443-1.396-.715-3.529-.715-6.54A8.25 8.25 0 0 0 12 2.25z"></path></svg>
                            </div>
                            <div className="setting-box-texts">
                                <div className="setting-box-texts-head">
                                    <h2>Email notifications</h2>
                                </div>
                                <div className="setting-box-texts-small">
                                    <p>Decide what you want to be notified about and unsubscribe from what you don't.</p>
                                </div>
                                <div className="setting-box-texts-link">
                                    <a href="">Manage notifications</a>
                                </div>
                            </div>
                        </div></a>
                    <a href="">
                        <div className="setting-box">
                            <div className="setting-box-img">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-rtl-flip="true"><path d="M10.875 7.875a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0zm1.5 0a4.875 4.875 0 1 0-9.75 0 4.875 4.875 0 0 0 9.75 0zM1.5 20.25a6 6 0 0 1 12 0 .75.75 0 0 0 1.5 0 7.5 7.5 0 0 0-15 0 .75.75 0 0 0 1.5 0zm18.852-10.125a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0zm1.5 0a4.125 4.125 0 1 0-8.25 0 4.125 4.125 0 0 0 8.25 0zm-5.78 5.647A4.776 4.776 0 0 1 22.5 20.25a.75.75 0 0 0 1.5 0 6.276 6.276 0 0 0-8.446-5.886.75.75 0 1 0 .518 1.408z"></path></svg>
                            </div>
                            <div className="setting-box-texts">
                                <div className="setting-box-texts-head">
                                    <h2>Other travelers</h2>
                                </div>
                                <div className="setting-box-texts-small">
                                    <p>Add or edit info about the people you’re traveling with.</p>
                                </div>
                                <div className="setting-box-texts-link">
                                    <a href="">Manage travelers</a>
                                </div>
                            </div>
                        </div></a>
                </div>
            </div>
        );
    }
}

export default AccountSettings;