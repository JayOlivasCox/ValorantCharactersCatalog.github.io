function Character(name, role, pic, qDescription, qLink, eDescription, eLink, cDescription, cLink, xDescription, xLink) {
    this.name = name;
    this.role = role;
    this.pic = pic;
    this.qDescription = qDescription;
    this.qLink = qLink;
    this.eDescription = eDescription;
    this.eLink = eLink;
    this.cDescription = cDescription;
    this.cLink = cLink;
    this.xDescription = xDescription;
    this.xLink = xLink;

}

let characters = [
    new Character ("Cypher", "Sentinel", "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt158572ec37653cf3/5eb7cdc19df5cf37047009d1/V_AGENTS_587x900_Cypher.png", "INSTANTLY toss the cyber cage in front of Cypher. Activate to create a zone that blocks vision and slows enemies who pass through it.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt019fa05d6b7fddef/5ecad7e597b46c1911ad186c/Cypher_Q_v001_web.mp4", "EQUIP a spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera's view. While in control of the camera, FIRE to shoot a marking dart. This dart will Reveal the location of any player struck by the dart. This ability can be picked up to be REDEPLOYED.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt47c03800823ce304/5ecad7e64a28e119db562296/Cypher_E_v001_web.mp4", "EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9b7d004dc573791c/5ecad7e85e73766852c8ed8c/Cypher_C_v001_web.mp4", "INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29f3571576a3937f/5ecad7e5e2a559592eb0c1b0/Cypher_X_v001_web.mp4"),
    new Character ("Reyna", "Duelist", "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6577b1f58530e6b2/5eb7cdc121a5027d77420208/V_AGENTS_587x900_Reyna.png", "Enemies killed by Reyna leave behind Soul Orbs that last 3 seconds. INSTANTLY consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time. If EMPRESS is active, this skill will automatically cast and not consume the orb.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb216220f42c804e2/5ecad85d4a28e119db5622a8/Reyna_Q_v001_web.mp4", "INSTANTLY consume a nearby soul orb, becoming intangible for a short duration. If EMPRESS is active, also become invisible.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt77e99ec99ef3a839/5ecad85e2f5c725928765503/Reyna_E_v002_web.mp4", "EQUIP an ethereal destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf6109b8be97e8d96/5ecad85db42d3333c95dd1b2/Reyna_C_v002_web.mp4", "INSTANTLY enter a frenzy, increasing firing speed, equip and reload speed dramatically. Scoring a kill renews the duration.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltadf53a38e449cb4d/5ecad85cbab1845d392dfd0f/Reyna_X_v001_web.mp4"),
    new Character ("Killjoy", "Sentinel", "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt53405c26141beff8/5f21fda671ec397ef9bf0894/V_AGENTS_587x900_KillJoy_.png", "EQUIP a covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes, applying Vulernable. HOLD EQUIP to recall a deployed bot.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9a8fa11ac887550e/5f2203522f812a7c016f5651/AlarmBot_LowQuality.mp4", "EQUIP a Turret. FIRE to deploy a turret that fires at enemies in a 180 degree cone. HOLD EQUIP to recall the deployed turret.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0fe3462ae9a025a4/5f220396074360086ccdd908/Turret_LowQuality.mp4", "EQUIP a Nanoswarm grenade. FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobots.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4aed833e1b0df155/5f2204694be7297d7e6c8449/Grenade_LowQuality.mp4", "EQUIP the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf74d72b162a14692/5f2204ab8ff50d070ad2d192/Ultimate_LowQualityV02.mp4"),
    new Character ("Breach", "Initiator", "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt100d13bfa8286a3d/5eb7cdc11ea0c32e33b95fa2/V_AGENTS_587x900_Breach.png","EQUIP a blinding charge. FIRE the charge to set fast-acting burst through the wall. The charge detonates to blind all players looking at it.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc2d5631f1babcaf0/5ec840e1bab1845d392dfc39/Breach_Q_v001_web.mp4", "EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd09eb47222cc1152/5ec840e287617619e2be955e/Breach_E_v001_web.mp4", "EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltfff097ebc7da90e9/5ec840e1e2a559592eb0c0e2/Breach_C_v001_web.mp4", "EQUIP a seismic charge. FIRE to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0a47675f8b973fda/5ec840e252c5395e0f2dd038/Breach_X_v001_web.mp4"),
    new Character ("Omen", "Controller", "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4e5af408cc7a87b5/5eb7cdc17bedc8627eff8deb/V_AGENTS_587x900_Omen.png", "INSTANTLY fire a shadow projectile forward, briefly reducing the vision range of all players it touches. This projectile can pass straight through walls.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5babc7e7c6c24fa0/5ecad8154a28e119db56229e/Omen_Q_v001_web.mp4", "EQUIP a shadow orb, entering a phased world to place and target the orbs. PRESS the ability key to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. HOLD FIRE while targeting to move the marker further away. HOLD ALT FIRE while targeting to move the marker closer. PRESS RELOAD to toggle normal targeting view.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt70e2c9db1c0793df/5ecad815c846021917ecbb85/Omen_E_v001_web.mp4", "EQUIP a shadow walk ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63486e54ea52945a/5ecad815bab1845d392dfd07/Omen_C_v001_web.mp4", "EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt65aa85bf6ba5c0e8/5ecad814a4fe135d37f021a3/Omen_X_v001_web.mp4"),
    new Character ("Jett", "Duelist", "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png", "INSTANTLY propel Jett high into the air.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4", "ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward. Tailwind charge resets every two kills.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt063b1d451ace55f4/639367e93b5f412f83e8db36/Jett_E_rework_web.mp4", "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4", "EQUIP a set of highly accurate throwing knives. FIRE to throw a single knife and recharge knives on a kill. ALT FIRE to throw all remaining daggers but does not recharge on a kill.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4"),
    new Character ("Raze", "Duelist","https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6fef56a8182d0a81/5ebf2c2798f79d6925dbd6b4/V_AGENTS_587x900_ALL_Raze_2.png", "INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit. Raze isn't damaged by this ability, but will still take fall damage if launched up far enough.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf3581aedf43e1ce8/5ecad83cc846021917ecbb8d/Raze_Q_v001_web.mp4", "EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range. ALT FIRE to lob. Paint Shells charge resets every two kills.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltfe61b821c26125b7/5ecad83be2a559592eb0c1ba/Raze_E_v001_web.mp4", "EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3f7d7ee195ecedca/5ecad83c52c5395e0f2dd0e4/Raze_C_v001_web.mp4", "EQUIP a rocket launcher. FIRE to shoot a rocket that does massive area damage on contact with anything.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15aa9cb086aed1a/5ecad83c4a28e119db5622a2/Raze_X_v001_web.mp4") ,
    new Character ("Skye","Initiator", "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt302fcb2b9628c376/5f7fa6ff8db9ea0f149ece0a/V_AGENTS_587x900_ALL_Skye.png", "EQUIP a Tasmanian tiger trinket. FIRE to send out and take control of the predator. While in control, FIRE to leap forward, exploding in a concussive blast and damaging directly hit enemies.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt90a6f2733b96ce16/5f7faa7dd4fbb50ef307791e/Val_Skye_Q_Ability_Web.mp4", "EQUIP a hawk trinket. FIRE to send it forward. HOLD FIRE to guide the hawk in the direction of your crosshair. RE-USE while the hawk is in flight to transform it into a flash that plays a hit confirm if an enemy was within range and line of sight.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8ecea4a77a26c25b/5f7fab7adf178b0ea98495a5/Val_Skye_E_Ability_Web.mp4", "EQUIP a healing trinket. HOLD FIRE to channel, healing allies in range and line of sight. Can be reused until her healing pool is depleted. Skye cannot heal herself.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0f5403509070a0a2/5f7fabc5879de80eb41b1f33/Val_Skye_C_Ability_Web.mp4", "EQUIP a Seeker trinket. FIRE to send out three Seekers to track down the three closest enemies. If a Seeker reaches its target, it Nearsights them. Enemies can destroy the Seekers.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt966535853a54c58c/5f7fac19df178b0ea98495ad/Val_Skye_X_Ability_Web.mp4"),
    new Character ("Yoru", "Duelist", "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd4080f8efb365751/5ff5660bb47cdf7fc7d6c3dc/V_AGENTS_587x900_yoru.png", "EQUIP to rip an unstable dimensional fragment from reality. FIRE to throw the fragment, activating a flash that winds up once it collides with a hard surface in world.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9af4e1e3b962f7b4/5ff77b6fa703d10ab87ebb27/Yoru_Abilities_Blinding_1_1.mp4", "EQUIP a rift tether FIRE to send the tether forward. ALT FIRE to place a stationary tether. ACTIVATE to teleport to the tether's location. USE to trigger a fake teleport.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0945f456a2bcac77/62215a1f47e4d72e3e67ff1a/Website_Yoru_Rework_Gatecrash_v2.mp4", "EQUIP an echo that transforms into a mirror image of Yoru when activated FIRE to instantly activate the mirror image and send it forward ALT FIRE to place an inactive echo USE to transform an inactive echo into a mirror image and send it forward. Mirror images explode in a blinding flash when destroyed by enemies.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt47c96a79f14605fc/62215aaed83ad851e8a9e09d/Website_Yoru_Rework_Fakeout_v2.mp4", "EQUIP a mask that can see between dimensions. FIRE to drift into Yoru's dimension, unable to be affected or seen by enemies from the outside. REACTIVATE to exit Yoru's dimension early.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt95a89496da772b65/62215bbd6f0333490a0e7bec/Website_Yoru_Rework_Dimensional_Drift_v2.mp4"),
    new Character ("Astra", "Controller", "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5599d0d810824279/6036ca30ce4a0d12c3ec1dfa/V_AGENTS_587x900_Astra.png","Place Stars in Astral Form (X) ACTIVATE a Star to detonate a Nova Pulse. The Nova Pulse charges briefly then strikes, concussing all players in its area.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt78e556d97ea93fc9/6036c92572c04c12c9563dff/RIFT21_Astra_Ability_Q.mp4", "Place Stars in Astral Form (Ultimate Key). ACTIVATE a Star to transform it into a Nebula (smoke). USE a Star to Dissipate it, returning the Star to be placed in a new location after a delay. Dissipate briefly forms a fake Nebula at the Star's location before returning.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3be9010588cba144/6036c924427f5d75042c3ae5/RIFT21_Astra_Ability_E_F.mp4", "Place Stars in Astral Form (X) ACTIVATE a Star to form a Gravity Well. Players in the area are pulled toward the center before it explodes, making all players still trapped inside fragile.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltaba20d81cc601af4/6036c92599494e6c4f166b19/RIFT21_Astra_Ability_C.mp4", "ACTIVATE to enter Astral Form where you can place Stars with FIRE. Stars can be reactivated later, transforming them into a Nova Pulse, Nebula, or Gravity Well. When Cosmic Divide is charged, use ALT FIRE in Astral Form to begin aiming it, then FIRE to select two locations. An infinite Cosmic Divide connects the two points you select. Cosmic Divide blocks bullets and heavily dampens audio.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltca94f8d6f8e4c91d/6036c92499494e6c4f166b15/RIFT21_Astra_Ability_ULT.mp4"),
    new Character ("Kay/o", "Initiator", "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte5aefeb26bee12c8/60ca5aa30ece0255888d7faa/KAYO_KeyArt_587x900.png", "EQUIP a flash grenade. FIRE to overhand throw. ALT FIRE to lob a weaker version that explodes quickly. The flash grenade explodes after a short fuse, Blinding anyone in line of sight.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltab2fead35a9b412d/60cce5d49b520349ac9d080d/KAYO_C_v002_web.mp4", "EQUIP a suppression blade. FIRE to throw. The blade sticks to the first surface it hits, winds up, and Suppresses anyone in the radius of the explosion. Enemies can destroy this blade.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt11ab79d777cba68e/60cce41a07060a4ae3f12ff1/KAYO_E_v002_web.mp4", "EQUIP an explosive fragment. FIRE to throw. The fragment sticks to the floor and explodes multiple times, dealing near lethal damage at the center with each explosion.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6372c1b58baf8ca2/60cce401ae0d50495b4f7e31/KAYO_Q_v001_web.mp4", "INSTANTLY overload with polarized radianite energy that pulses from KAY/O in a massive radius. Enemies hit with pulses are Suppressed for a short duration. While overloaded, KAY/O gains Combat Stim and can be re-stabilized if downed.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6cd3a6f6e99152f8/60cce43683f9fe49a6fee835/KAYO_X_v003_web.mp4"),
    new Character ("Chamber", "Sentinel", "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6f1392b30784e029/618d9da0d380f814d61f001c/WebUpdate_Chamber_KeyArt.png", "ACTIVATE to equip a heavy pistol. ALT FIRE with the pistol equipped to aim down sights.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc97eeaeb138d2155/618d9fb7867d1817d95f3b2b/VAL_broll_EP03-3_Chamber_Q.mp4", "EQUIP a teleport anchor. FIRE to place it on the ground. While on the ground and in range of the anchor, REACTIVATE to quickly teleport to the anchor. The anchor can be picked up to be REDEPLOYED.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt060399adf0531693/63937bd46675d51080de0e5d/Chamber_E_rework_web.mp4", "EQUIP a trap that scans for enemies. FIRE to place it on the ground. When a visible enemy comes in range, the trap counts down and then destabilizes the terrain around them, creating a lingering field that Slows players caught inside of it. The trap can be picked up to be REDEPLOYED.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt10d79f98d5c3a553/63937a1c956fc631a94dbe53/Chamber_C_rework_web.mp4", "ACTIVATE to summon a powerful, custom sniper rifle that will kill an enemy with any direct hit to the upper body. ALT FIRE to aim down sights. Killing an enemy creates a lingering field that Slows players caught inside of it.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta33b5e15a758d337/63937c9ddd9cc310b3158737/Chamber_X_rework_web.mp4"),
    new Character ("Neon", "Duelist", "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8093ba7b5e84ed05/61d8a63ddea73a236fc56d12/Neon_KeyArt-Web.png", "INSTANTLY throw an energy bolt that bounces once. Upon hitting each surface, the bolt electrifies the ground below with a concussive blast.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf634e203f29987a5/61d8a91abf9cb8387cc1d9c8/VAL_Neon_Ability-Q_Preview_Stun_noHUD_Web_h264.mp4", "INSTANTLY channel Neon’s power for increased speed. When charged, ALT FIRE to trigger an electric slide. Slide charge resets every two kills.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt99e20f893b806cc8/61d8a9608aabbf6426b7523a/VAL_Neon_Ability-E_Preview_Sprint_noHUD_Web_h264.mp4", "FIRE two energy lines forward on the ground that extend a short distance or until they hit a surface. The lines rise into walls of static electricity that block vision and damage enemies passing through them.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt023814e24e6cad2f/61d8a98914ef402247ceab3a/VAL_Neon_Ability-C_Preview_Walls_noHUD_Web_h264.mp4", "Unleash Neon’s full power and speed for a short duration. FIRE to channel the power into a deadly lightning beam with high movement accuracy. The duration resets on each kill.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltcbe0e9c4b801f025/61d8a9dfef206c6c5e4941ba/VAL_Neon_Ability-X_Preview_Ult_noHUD_Web_h264.mp4"),
    new Character ("Fade", "Initiator", "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt516d37c6c84fcda0/625db737c9aa404b76ddd594/Fade_Key_Art_587x900_for_Website.png", "Equip an orb of nightmare ink. FIRE to throw the orb which will plummet to the ground after a set amount of time. Upon hitting the ground, the ink will explode and create a zone in which enemies who are caught in it cannot escape the zone by normal means. RE-USE the ability to drop the projectile early in-flight.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltbec73caca7bf1045/62701777bae21939d5444b9e/Q-seize_video_NEW.mp4", "Equip a nightmarish entity. FIRE to throw the orb which will plummet to the ground after a set amount of time. Upon hitting the ground, the orb will turn into a nightmarish entity that will reveal the location of enemies caught in its line of sight. Enemies can destroy this entity. RE-USE the ability to drop the projectile early in-flight.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt82a21218065dc472/625f2c47fd9afd4b1fe300ea/E-Haunt_video.mp4", "EQUIP a Prowler. FIRE will send the Prowler out, causing it to travel in a straight line. The Prowler will lock onto any enemies or trails in their frontal vision cone and chase them, nearsighting them if it reaches them. HOLD the FIRE button to steer the Prowler in the direction of your crosshair.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf4e7a6525fe6ec42/625f2c7cfd9afd4b1fe300ee/C-Prowler_video.mp4", "EQUIP the power of Fear. FIRE to send out a wave of nightmare energy that can traverse through walls. The energy creates a trail to the opponent as well as deafens and decays them.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt75dfbdc2fbf6bfe1/625f2ba62777714c51b313be/X-Nightfall_Video.mp4"),
    new Character ("Harbor", "Controller", "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt81e8a3e8c7beeaf3/634894a15e281916980f655b/Harbor_KeyArt-web.png", "EQUIP a sphere of shielding water. FIRE to throw. ALT FIRE to underhand throw. Upon impacting the ground, spawn a destructible water shield that blocks bullets.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt1a7cd79cbb632c3c/6349d6906a938c238802a820/Harbor_Q_v001_web.mp4", "EQUIP a wall of water. FIRE to send the water forward along the ground. HOLD FIRE to guide the water in the direction of your crosshair, passing through the world, spawning a wall along the water’s path. ALT FIRE while bending to stop the water early. Players hit are SLOWED.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte6e80f8936913459/6349d682b0662c1e9a67222a/Harbor_E_v001_web.mp4", "EQUIP a wave of water. FIRE to send the wave rolling forward and through walls. RE- USE to stop the wave. Players hit are SLOWED.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8fb30bd82f7dcd97/6349d669b2dba3104a11dde4/Harbor_C_v001_web.mp4", "EQUIP the full power of your Artifact. FIRE to summon a geyser pool on the ground. Enemy players in the area are targeted by successive geyser strikes. Players caught within a strike are CONCUSSED.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0536369c7a3b7986/6349d677c96b72418f47a8c4/Harbor_X_v001_web.mp4"),
    new Character ("Gekko", "Initiator", "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc942933be01094ae/6402724fe9f75310481c3851/V_AGENTS_587x900_Gekko2.png", "EQUIP Wingman FIRE to send Wingman forward seeking enemies. Wingman unleashes a concussive blast toward the first enemy he sees ALT FIRE when targeting a Spike site or planted Spike to have Wingman defuse or plant the Spike. To plant, Gekko must have the Spike in his inventory. When Wingman expires he reverts into a dormant globule INTERACT to reclaim the globule and gain another Wingman charge after a short cooldown.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt79a9f8119f366ad1/64029afe10329144ff021282/Website_Gekko_Wingman_Stun_FNL.mp4", "EQUIP Dizzy FIRE to send Dizzy soaring forward through the air. Dizzy charges then unleashes plasma blasts at enemies in line of sight. Enemies hit by her plasma are blinded. When Dizzy expires she reverts into a dormant globule INTERACT to reclaim the globule and gain another Dizzy charge after a short cooldown.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7a75dbdd9b6c4220/64029b4743153734d1472d59/Website_Gekko_Dizzy_FNL.mp4", "EQUIP Mosh FIRE to throw Mosh like a grenade ALT FIRE to throw underhand. Upon landing Mosh duplicates across a large area then after a short delay explodes.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf9f635d9cb6cf999/64029aa343153734d1472d55/Website_Gekko_MoshPit_FNL.mp4", "EQUIP Thrash FIRE to link with Thrash’s mind and steer her through enemy territory ACTIVATE to lunge forward and explode, detaining any enemies in a small radius. When Thrash expires she reverts into a dormant globule INTERACT to reclaim the globule and gain another Thrash charge after a short cooldown. Thrash can be reclaimed once.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt1a1188dafa478506/64029a1a205f2b7a60b74497/Website_Gekko_Thrash_FNL.mp4"),
    new Character ("Deadlock", "Sentinel", "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt59125f966df76a27/649492a5a02402d20ee6900e/Deadlock-KeyArt.png", "EQUIP a Sonic Sensor. FIRE to deploy. The sensor monitors an area for enemies making sound. It concusses that area if footsteps, weapons fire, or significant noise are detected.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta1fbdf10898ac8a4/649497b0f57ecc047c3abf59/AgentPage_Deadlock_Ability_Q.mp4", "EQUIP a Barrier Mesh disc. FIRE to throw forward. Upon landing, the disc generates barriers from the origin point that block character movement.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt91ea123447dc4820/649497a91de9c33b380f43aa/AgentPage_Deadlock_Ability_E.mp4", "EQUIP a GravNet grenade. FIRE to throw. ALT FIRE to lob the grenade underhand. The GravNet detonates upon landing, forcing any enemies caught within to crouch and move slowly.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5ba97cb2d6cab44e/6494969bf57ecc7db03abf4b/AgentPage_Deadlock_Ability_C.mp4", "EQUIP a Nanowire Accelerator. FIRE to unleash a pulse of nanowires that captures the first enemy contacted. The cocooned enemy is pulled along a nanowire path and will die if they reach the end, unless they are freed. The nanowire cocoon is destructible.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd02395a7fa554cd1/6494c187edfc646bc3351296/AgentPage_Deadlock_Ability_X_2.mp4"),
    new Character ("Iso", "Duelist", "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt34e30d5669e7309c/653add3080274d040a37d656/ISO_KeyArt_Final.png", "EQUIP a molecular bolt. Fire to throw it forward, applying a brief FRAGILE to all players it touches. The bolt can pass through solid objects, including walls.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd2362e88dba0b09b/653adf8b302cbf040708cb73/Iso_Ability_Q.mp4", "START a focus timer. Once completed, enter a flow state during which downed enemies you kill or damage generate an energy orb. Shooting this orb grants you a shield which absorbs one instance of damage from any source.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5dca0279286519c9/653adfc595d6db040a03bc71/Iso_Ability_E.mp4", "EQUIP to assemble prismatic energy. FIRE to push an indestructible wall of energy forward that blocks bullets.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt04ba6f97bfd2768f/653adfeddc41eb04079b62c7/Iso_Ability_C.mp4", "EQUIP an interdimensional arena. FIRE to hurl a column of energy through the battlefield, pulling you and the first enemy hit into the arena. You and your opponent duel to the death.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9b8f8e24e51409a8/653ae016b78a75040aa24f7c/Iso_Ability_X-Larger.mp4"),
    new Character ("Clove", "Controller", "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8e3123f0fc29db2a/65fddcd7fc58c8422b142571/E8A2_Web_Clove_key_Art.png", "EQUIP a fragment of immortality essence. FIRE to throw the fragment, which erupts after a short delay and temporarily decays all targets caught inside.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7cff89157771078a/65fde0d63caa5740dccfb918/2024-03-05_Clove_Q_ClovePOV.mp4", "EQUIP to view the battlefield. FIRE to set the locations where Clove’s clouds will settle. ALT FIRE to confirm, launching clouds that block vision in the chosen areas. Clove can use this ability after death.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc0399e2ec5c335b5/65fde12e6f3127257b94e883/2024-03-05_Clove_E_Dead_ClovePOV.mp4", "INSTANTLY absorb the life force of a fallen enemy that Clove damaged or killed, gaining haste and temporary health.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3df1c519f4a86de5/65fde16ad05755d4790002f4/2024-03-04_Clove_C_ClovePOV.mp4", "After dying, ACTIVATE to resurrect. Once resurrected, Clove must earn a kill or a damaging assist within a set time or they will die.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltfe8f4bb04ccb3129/65fde06d18db086a940048be/2024-03-04_Clove_X_1.mp4"),
    new Character ("Brimstone", "Controller", "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt26fcf1b5752514ee/5eb7cdbfc1dc88298d5d3799/V_AGENTS_587x900_Brimstone.png", "EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte2b9eb1923ef64fa/5ecad7d0f5bd13348a6cac75/Brimstone_Q_v001_web.mp4", "EQUIP a tactical map. FIRE to set locations where Brimstone's smoke clouds will land. ALT FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltcf4359fed083686b/5ecad7d198f79d6925dbee07/Brimstone_E_v001_web.mp4", "EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc34c3d692ea83f41/5ecad7d0177c51692beb1fe4/Brimstone_C_v001_web.mp4", "EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3d19d83ba51eb18f/5ecad7d297b46c1911ad1868/Brimstone_X_v001_web.mp4") ,
    new Character ("Phoenix", "Duelist", "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0200e1821b5b39f/5eb7cdc144bf8261a04d87f9/V_AGENTS_587x900_Phx.png", "EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltad7b0ea9be090042/5ecad82c2f5c7259287654ff/Phoenix_Q_v001_web.mp4", "EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt318f7ee7d6435fac/5ecad82cf5bd13348a6cac7d/Phoenix_E_v001_web.mp4", "EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0ee7c9d84985ecf/5ecad82d957e405e09905751/Phoenix_C_v001_web.mp4", "INSTANTLY place a marker at Phoenix’s location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt50beaed6524c3219/5ecad82bc846021917ecbb89/Phoenix_X_v001_web.mp4"),
    new Character ("Sage", "Sentinel", "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8a627ec10b57f4f2/5eb7cdc16509f3370a5a93b7/V_AGENTS_587x900_sage.png", "EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4f4fdcc86da69972/5ecad872722d20585b2f4a44/Sage_Q_v001_web.mp4", "EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time." ,"https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf1d16edc36ba3386/5ecad87152c5395e0f2dd0ea/Sage_E_v001_web.mp4", "EQUIP a barrier orb. FIRE places a solid wall. ALT FIRE rotates the targeter.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5a0edb670c30fbdc/5ecad8732f5c725928765507/Sage_C_v001_web.mp4", "EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltef1820f276fbaa0c/5ecad871957e405e09905755/Sage_X_v001_web.mp4"),
    new Character ("Sova", "Initiator", "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf11234f4775729b7/5ebf2c275e73766852c8d5d4/V_AGENTS_587x900_ALL_Sova_2.png", "EQUIP a bow with a shock bolt. FIRE to send the explosive bolt forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALT FIRE to add up to two bounces to this arrow.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7af29765c99f807d/5ecad882722d20585b2f4a48/Sova_Q_v001_web.mp4", "EQUIP a bow with recon bolt. FIRE to send the recon bolt forward, activating upon collision and Revealing the location of nearby enemies caught in the line of sight of the bolt. Enemies can destroy this bolt. HOLD FIRE to extend the range of the projectile. ALT FIRE to add up to two bounces to this arrow.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt44b27c0d688217db/5ecad88398f79d6925dbee21/Sova_E_v001_web.mp4", "EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will Reveal the location of any player struck by the dart. Enemies can destroy the Owl Drone.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt07d2025ac5dcd792/5ecad883f5bd13348a6cac89/Sova_C_v001_web.mp4", "EQUIP a bow with three long-range wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf9fc34106a23479c/5ecad88397b46c1911ad1872/Sova_X_v001_web.mp4") ,
    new Character ("Viper", "Controller", "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc825c6589eda7717/5eb7cdc6ee88132a6f6cfc25/V_AGENTS_587x900_Viper.png", "EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be RE-USED more than once and can be picked up to be REDEPLOYED.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte5200bab40679f96/5ecad8935e73766852c8ed94/Viper_Q_v001_web.mp4", "EQUIP a gas emitter launcher. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt66a45c1fe76ca647/5ecad893957e405e0990575d/Viper_E_v001_web.mp4", "EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and slows enemies", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5e70987e8ac2f2d6/5ecad893722d20585b2f4a4c/Viper_C_v001_web.mp4", "EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it.", "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt41c75111b2eac6b5/5ecad8923a450a58554b7078/Viper_X_v001_web.mp4"),
];
let filteredCharacters = characters;

let indexOfCurrChar = parseInt(localStorage.getItem('indexOfCurrChar')) || 0;
let indexOfPrevChar = indexOfCurrChar - 1 < 0 ? characters.length - 1 : indexOfCurrChar - 1;
let indexOfNextChar = indexOfCurrChar + 1 >= characters.length ? 0 : indexOfCurrChar + 1;

// Function to display cards
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const currCard = document.querySelector(".buttonChar");
    const prevCard = document.querySelector(".prevChar");
    const nextCard = document.querySelector(".nextChar");

    let character = filteredCharacters[indexOfCurrChar];
    let characterPrev = filteredCharacters[indexOfPrevChar];
    let characterNext = filteredCharacters[indexOfNextChar];

    const currCharCard = currCard.cloneNode(true); // Copy the template card
    const prevCharCard = prevCard.cloneNode(true); // Copy the template card
    const nextCharCard = nextCard.cloneNode(true); // Copy the template card

    editCardContent(currCharCard, prevCharCard, nextCharCard, character, characterNext, characterPrev); // Edit title and image
    cardContainer.appendChild(prevCharCard);
    cardContainer.appendChild(currCharCard);
    cardContainer.appendChild(nextCharCard); // Add new card to the container
}

function editCardContent(card, card2, card3, character, characterNext, characterPrev) {
    card.style.display = "block";
    card2.style.display = "block";
    card3.style.display = "block";

    const cardHeader = card.querySelector("h2");
    const cardHeaderPrev = card2.querySelector("h2");
    const cardHeaderNext = card3.querySelector("h2");

    cardHeaderPrev.textContent = characterPrev.name;
    cardHeaderNext.textContent = characterNext.name;
    cardHeader.textContent = character.name;

    const cardImage = card.querySelector("img");
    const cardImage2 = card2.querySelector("img");
    const cardImage3 = card3.querySelector("img");

    cardImage.src = character.pic;
    cardImage2.src = characterPrev.pic;
    cardImage3.src = characterNext.pic;

    cardImage.alt = character.name + " Photo";
    cardImage2.alt = characterPrev.name + " Photo";
    cardImage3.alt = characterNext.name + " Photo";

    // Store current character index in local storage
    localStorage.setItem('indexOfCurrChar', indexOfCurrChar);
}

function showPreviousCharacter() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.style.opacity = 0; // Fade out container
    setTimeout(() => {
        indexOfPrevChar--;
        if(indexOfPrevChar < 0){
            indexOfPrevChar = filteredCharacters.length - 1;
        }
        indexOfNextChar--;
        if(indexOfNextChar < 0){
            indexOfNextChar = filteredCharacters.length - 1;
        }
        indexOfCurrChar--;
        if (indexOfCurrChar < 0) {
            indexOfCurrChar = filteredCharacters.length - 1;
        }
        showCards();
        cardContainer.style.opacity = 1; // Fade in container after cards are updated
    }, 150); // Wait for 150 milliseconds before updating cards
}

function showNextCharacter() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.style.opacity = 0; // Fade out container
    setTimeout(() => {
        indexOfCurrChar++;
        if (indexOfCurrChar >= filteredCharacters.length) {
            indexOfCurrChar = 0;
        }
        indexOfPrevChar ++;
        if(indexOfPrevChar >= filteredCharacters.length){
            indexOfPrevChar = 0;
        }
        indexOfNextChar ++;
        if(indexOfNextChar >= filteredCharacters.length){
            indexOfNextChar = 0;
        }
        showCards();
        cardContainer.style.opacity = 1; // Fade in container after cards are updated
    }, 150); // Wait for 150 milliseconds before updating cards
}

function filterCharacters() {
    var selectedOption = document.getElementById("filter").value;
    localStorage.setItem('selectedFilter', selectedOption); // Store selected filter option

    if (selectedOption === "all") {
        // Reset to original array when "All" is selected
        filteredCharacters = characters;
    } else {
        // Filter characters based on selected role
        filteredCharacters = characters.filter(function(character) {
            return character.role.toLowerCase() === selectedOption.toLowerCase();
        });
    }
    
    // Recalculate indices
    indexOfCurrChar = 0;
    indexOfPrevChar = filteredCharacters.length - 1;
    indexOfNextChar = 1;

    // Fade out card container
    const cardContainer = document.getElementById("card-container");
    cardContainer.style.transition = "opacity 0s";
    cardContainer.style.opacity = 0;

    // Update displayed cards after a short delay for the fade out effect
    setTimeout(() => {
        showCards();
        // Fade in card container after cards are updated
        cardContainer.style.opacity = 1;
    }, 100); // Wait for 100 milliseconds before updating cards
}

function handleCardClick() {
    // Get the character being displayed
    let character = filteredCharacters[indexOfCurrChar];
    // Redirect to a new page with information about the character
    if(character.name==="Kay/o"){
        window.location.href = "Kayo.html";
    }
    else{
        window.location.href = character.name + ".html" ;
    }
}

// Call the showAbility() function with 'Q' as the default ability when the page loads
document.addEventListener("DOMContentLoaded", function() {
    showAbility('Q');
});

function showAbility(abilityType) {
    let charName = document.getElementById("charName").textContent;

    var character;
    for(let i = 0; i<filteredCharacters.length; i++){
        if(charName===filteredCharacters[i].name){
            character = filteredCharacters[i];
        }
    }   

    // Get the video element
    var video = document.getElementById("abilityVideo");
    
    // Get the description div
    var descriptionDiv = document.getElementById("abilityDescription");
    
    // Update video source and description based on ability type
    switch (abilityType) {
        case 'Q':
            video.src = character.qLink;
            descriptionDiv.innerHTML = "<h3>" + character.name + "'s Q Ability</h3>" + "<p>" + character.qDescription + "</p>";
            break;
        case 'E':
            video.src = character.eLink;
            descriptionDiv.innerHTML = "<h3>" + character.name + "'s E Ability</h3>" + "<p>" + character.eDescription + "</p>";
            break;
        case 'C':
            video.src = character.cLink;
            descriptionDiv.innerHTML = "<h3>" + character.name + "'s C Ability</h3>" + "<p>" + character.cDescription + "</p>";
            break;
        case 'X':
            video.src = character.xLink;
            descriptionDiv.innerHTML = "<h3>" + character.name + "'s X Ability</h3>" + "<p>" + character.xDescription + "</p>";
            break;
        default:
            console.log("Invalid ability type");
    }
    
    // Call the play() function to start playing the video
    video.play();
}
function goHome(){
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function() {
    // Check for stored filter option
    const storedFilter = localStorage.getItem('selectedFilter');
    if (storedFilter) {
        // Apply stored filter option
        document.getElementById("filter").value = storedFilter;
        filterCharacters();
    }

    var buttons = document.querySelectorAll(".cooldown-button");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            handleButtonClick(button);
        });
    });
    showCards();
});
