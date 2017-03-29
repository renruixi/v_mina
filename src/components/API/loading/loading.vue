    <template>
        <transition name="smy-loading">
            <div class="smy_loading_wrapper" v-if="show">
                <div class="smy_loading_logo">
                    <img class="smy_loading_aimate" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA6CAMAAAA3Dq9LAAAABGdBTUEAALGPC/xhBQAAAXdQTFRF9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0AAAA5eXl8/Pz4eHh6Ojo6enp39/f8fHx2tra4uLi3Nzc29vb3t7e5+fn7e3t5ubm7Ozs8PDw8vLy2dnZ9PT0OA/4XQAAAGl0Uk5TPZRdH3ijmosRbNDxwFuymV6Kz3cQq97BfAeoYC4ePJOxWntM36lLt6Lc58kZ81g60iJp2wP3kuV0NlQqRIH8CsZyJx0V+9iQrhRPwyMSX7TK+CQGY6rw9MW6UkWgC/m4bS2FAhj+7QEACRn8YAAAAklJREFUSMel12dD2zAQBmC1dNBJ917QzYayKXtvShICBEjIclr2HrkfX9vxkGQdRJf75FjvPR/scyyznFvj3bmiq3vcO2TuQRpaO1LFtac6WiEdACYBYGq6mP7pKTM6GQCS5lmINhtXtRvNUSuZDADLYNfy0OX9Q25OBozFwgLcC1/W/9aNLRoSMAhezdVi7bVzfmpQAq77S5CtV/fXZ7nQIwn4CHxFJoLtExEhck0CakCzakQgtK4LrL8WgE7Qrk4BuKMPJATghz5wUwBG9YFRHniW0Qcy5RwQA0LFOKCKArzigE8U4CEHVFOAah94D6Qq84AuGtDlAY9pwG0PuE8DXrpASx0NqGtxgA0g1jsHCFOBsANUUIFbDvCECtwtAH0jVGCkzwY+ALmYDQzQgQEbeEMHvtrACzrwxQKGoYQaNoFvpQCfTaCnFKDHBL7jyxdO4Ym4CWSxxfOjvFNH51gma7AFbO3sMO/V4RmWWmCVyMpxXqhjJPaAjSEruzt8/84uEhtj/egFOvX7T9FQP5vHL/HJQaH94ATPzDPjdxx9s15sWv2b6G3MxGOG/Z+4+geLbO3tbaGbnNUN79WWTmLTsL+PTUAyLezS1hK/1Ffyr/L0z8SavFfOpVaWFMntbcXJpZVU8HvBqoZIb+BOBGaw93kD38PE7WhTW1R6IKTHINrWJHYweUc787Rd6PjH/2i/MSPnWXBTHJptVF/4xtlQMM2UXyWK4bKGRpVlyKeBNFyFodEBhOFyh0YP8IbLHxpdwB4ufmhU9R9JtYLkJOj0AgAAAABJRU5ErkJggg==" />
                    <p class="smy_loading_message" v-show="message">{{message}}</p>
                </div>
            </div>
        </transition>
    </template>
    <script>
        export default  {
            name:"smyLoading",
            props:{
                show:{
                    type:Boolean,
                    default:false
                },
                message:{
                    type:[Number,String]
                }
            }
        }
    </script>
    <style>
    .smy-loading-enter-active{
        opacity: 0
    }
.smy-loading-leave-active{
        opacity: 0
    }

.smy_loading_wrapper {
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    background: transparent;
    transition:opacity 0.2s;
}


.smy_loading_logo {
    width: 75px;
    height: 75px;
    top: 50%;
    left: 50%;
    position: fixed;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    border-radius: 5px;
    background: rgba(0,0,0,.7);
    color: #fff;
    box-sizing: border-box;
    text-align: center;
    padding: 23px 0;
}

.smy_loading_logo img {
    display: inline-block;
    width: 32px;
    height: auto;
}

.smy_loading_message{
    font-size: 13px;
}
.smy_loading_aimate {
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation: smyPageLoading 1s 0s infinite linear normal none;
    animation: smyPageLoading 1s 0s infinite linear normal none;
}

@keyframes smyPageLoading {
    0% {
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg);
    }
    100% {
        -webkit-transform: rotateY(360deg);
        transform: rotateY(360deg);
    }
}

@-webkit-keyframes smyPageLoading {
    0% {
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg);
    }
    100% {
        -webkit-transform: rotateY(360deg);
        transform: rotateY(360deg);
    }
}
    </style>
