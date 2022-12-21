<script>
    import facebook_icon from '$lib/images/sns_icon/logo_facebook32px.png';
    import instagram_icon from '$lib/images/sns_icon/logo_instagram32px.png';
    import line_icon from '$lib/images/sns_icon/logo_LINE32px.png';
    import twitter_icon from '$lib/images/sns_icon/logo_twitter32px.png';
</script>

<footer>
    <div class="wrap">
        <div class="left">
            <ul class="list_style">
                <li class="title">よってたかって大茅地区</li>
                <li class="catch_copy">源流集落の歴史をひも解く</li>
                <div class="sns_icon">
                    <li><a href="https://m.facebook.com/profile.php?id=100064525219339"><img src={ facebook_icon } alt=""></a></li>
                    <li><a href="#"><img src={ instagram_icon } alt=""></a></li>
                    <li><a href="#"><img src={ twitter_icon } alt=""></a></li>
                    <li><a href="#"><img src={ line_icon } alt=""></a></li>
                </div>
            </ul>
        </div>
        <div class="center">
            <ul class="list_style">
                <li class="address_erea">
                    <div class="address">Address.</div>
                    <div class="ogaya">
                        <div class="ogaya_left">
                            <div class="name">大茅地区</div>
                        </div>
                        <div class="ogaya_right">
                            <div class="address_num">〒707 - 0501</div>
                            <div class="full_address">岡山県英田郡西粟倉村大茅</div>
                            <div class="map"><a href="https://www.google.co.jp/maps/place/%E3%80%92707-0501+%E5%B2%A1%E5%B1%B1%E7%9C%8C%E8%8B%B1%E7%94%B0%E9%83%A1%E8%A5%BF%E7%B2%9F%E5%80%89%E6%9D%91%E5%A4%A7%E8%8C%85/@35.2232443,134.3514017,14z/data=!3m1!4b1!4m5!3m4!1s0x3555a0e7807f1b71:0xa88263c960b19a65!8m2!3d35.2200591!4d134.3662144?hl=ja">Google map</a></div>
                        </div>
                    </div>
                </li>
                <li class="contact_erea">
                    <div class="contact">Contact us.</div>
                    <div class="council">
                        <div class="ogaya_left">
                            <div class="name">井上</div>
                        </div>
                        <div class="ogaya_right">
                            <div class="address">大茅地区活性化協議会</div>
                            <div class="tel">Tel. 090 - 7371 - 9809</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="right">
            <ul class="list_style">
				<div class="sp_column">
					<div class="left_item">
						<li>Home</li>
						<li>News</li>
						<li>Document</li>
					</div>
					<div class="right_item">
						<li>History</li>
						<li>Contact</li>
						<li>Login</li>
					</div>
				</div>
            </ul>
        </div>
    </div>
    <div class="copyright">
        <p>Copyright © Oda-lab All Rights Reserved.</p>
    </div>
</footer>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	footer {
		display: block;
		color: #ffffff;
		background-color: #303030;
		font-family: 'Noto Serif JP', serif;
		font-weight: 300;
		clear:both;
	}

	.list_style {
		list-style: none;
	}

	footer .wrap {
		padding: 60px 0 0;
	}

	footer .wrap .left {
		letter-spacing: 2px;
		margin-left: 30px;
		margin-bottom: 20px;
	}

	footer .wrap .left li {
		line-height: 1.5;
	}

	footer .wrap .left li.title {
		font-size: 20px;
	}

	footer .wrap .left li.catch_copy {
		font-size: 14px;
	}
	
	footer .wrap .left .sns_icon {
		display: flex;
		margin-top: 10px;
	}

	footer .wrap .left .sns_icon li {
		margin-right: 20px;
	}

	footer .wrap .left .sns_icon img {
		width: 70%;
		height: auto;
	}

	footer .wrap .center {
		margin-left: 0;
		letter-spacing: 2px;
		font-size: 14px;
	}

	footer .wrap .center .address_erea,
	footer .wrap .center .contact_erea {
		margin-left: 30px;
		margin-bottom: 20px;
	}

	footer .wrap .center li {
		line-height: 2;
	}

	footer .wrap .center li.address_erea .ogaya .ogaya_right a {
		text-decoration: none;
		color: white;
	}

	footer .wrap .right {
		letter-spacing: 2px;
		font-size: 14px;
		margin-left: 30px;
		margin-bottom: 20px;
	}

	footer .wrap .right .sp_column {
		display: flex;
	}

	footer .wrap .right .sp_column .right_item {
		margin-left: 30px;
	}

	footer .wrap .right li {
		line-height: 2;
	}

	footer .copyright {
		font-size: 10px;
		text-align: right;
		padding: 5px 5px 5px 0;
		border-top: 1px white solid;
		letter-spacing: 1px;
	}

	@media screen and (min-width:480px) {
		footer .wrap .left {
			margin-left: 60px;
		}

		footer .wrap .center .address_erea,
		footer .wrap .center .contact_erea {
			margin-left: 60px;
		}

		footer .wrap .right {
			margin-left: 60px;
		}

		footer .wrap .right .sp_column .right_item {
			margin-left: 60px;
		}
	}

	@media screen and (min-width:768px) and ( max-width:1024px) {
		footer .wrap .center li.address_erea {
			display: flex;
		}

		footer .wrap .center li.address_erea .address,
		footer .wrap .center li.contact_erea .contact {
			width: 150px;
		}

		footer .wrap .center li.address_erea .ogaya .ogaya_left .name,
		footer .wrap .center li.contact_erea .council .ogaya_left .name {
			width: 100px;
		}

		footer .wrap .center li.address_erea .ogaya {
			display: flex;
		}

		footer .wrap .center li.contact_erea {
			display: flex;
			margin-top: 20px;
		}

		footer .wrap .center li.contact_erea .council {
			display: flex;
		}
	}

	@media screen and (min-width:1024px) {
		footer {
			display: block;
		}
		
		footer .wrap {
			padding: 40px 80px;
			display: flex;
			justify-content: space-around;
		}

		footer .wrap .left {
			margin-left: 0;
			margin-bottom: 0;
		}

		footer .wrap .left li.title {
			font-size: 24px;
		}

		footer .wrap .left li.catch_copy {
			font-size: 16px;
		}

		footer .wrap .left .sns_icon li {
			margin-right: 25px;
		}

		footer .wrap .left .sns_icon img {
			width: 100%;
			height: auto;
		}

		footer .wrap .center {
			font-size: 16px;
		}

		footer .wrap .center .address_erea,
		footer .wrap .center .contact_erea {
			margin-left: 0;
			margin-bottom: 0;
		}

		footer .wrap .center li.address_erea {
			display: flex;
		}

		footer .wrap .center li.address_erea .address,
		footer .wrap .center li.contact_erea .contact {
			width: 150px;
		}

		footer .wrap .center li.address_erea .ogaya .ogaya_left .name,
		footer .wrap .center li.contact_erea .council .ogaya_left .name {
			width: 100px;
		}

		footer .wrap .center li.address_erea .ogaya {
			display: flex;
		}

		footer .wrap .center li.contact_erea {
			display: flex;
			margin-top: 20px;
		}

		footer .wrap .center li.contact_erea .council {
			display: flex;
		}

		footer .wrap .right {
			letter-spacing: 2px;
			font-size: 16px;
			margin-left: 100px;
			margin-bottom: 0;
		}

		footer .wrap .right .sp_column {
			display: block;
		}

		footer .wrap .right .sp_column .right_item {
			margin-left: 0;
		}

		footer .copyright {
			font-size: 13px;
			text-align: right;
			padding: 20px 60px;
		}
	}
</style>