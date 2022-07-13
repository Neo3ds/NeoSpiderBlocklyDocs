'use strict';

goog.require('Blockly.JavaScript');

let notes = {
    '1': [33, 65, 131, 262, 523, 1046, 2093, 4186],
    '2': [35, 69, 139, 277, 554, 1109, 2217, 4435],
    '3': [37, 73, 147, 294, 587, 1175, 2349, 4699],
    '4': [39, 78, 156, 310, 622, 1245, 2849, 4978],
    '5': [41, 82, 165, 330, 659, 1319, 2637, 5274],
    '6': [44, 87, 175, 349, 698, 1397, 2794, 5588],
    '7': [46, 92, 185, 370, 740, 1480, 2960, 5920],
    '8': [49, 98, 196, 392, 784, 1568, 3136, 6272],
    '9': [52, 104, 208, 415, 831, 1661, 3322, 6645],
    '10': [55, 110, 220, 440, 880, 1760, 3520, 7040],
    '11': [58, 117, 233, 466, 932, 1865, 3729, 7459],
    '12': [62, 123, 247, 494, 988, 1976, 3951, 7902],
};

/**
 * Move Menu
 */
Blockly.JavaScript['motor_move'] = function (block) {
    return 'motor_move(\''+ block.getFieldValue('MOTOR_MOVE') +'\');\n';
};

Blockly.JavaScript['motor_move_secs'] = function (block) {
    let msec = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
    return 'motor_move_secs(\''+ block.getFieldValue('MOTOR_MOVE') +'\',' + msec +');\n';
};

Blockly.JavaScript['motor_move_stop'] = function (block) {
    return 'motor_move_stop();\n';
};

Blockly.JavaScript['servo_move'] = function (block) {
    return 'servo_move(\''+ block.getFieldValue('SERVO_MOVE') +'\');\n';
};

Blockly.JavaScript['servo_angle_move'] = function (block) {
    let angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_ATOMIC);
    angle = Math.min(angle, 130);
    angle = Math.max(angle, 50);
    return 'servo_angle_move(' + angle + ');\n';
};

Blockly.JavaScript['outer_motor_digital'] = function (block) {
    let pin = block.getFieldValue('OUTER_PIN');
    let state = block.getFieldValue('DIGITAL_STATE');
    let power = state === 'HIGH' ? 255 : 0;
    return `outer_motor_digital(${pin}, ${power});\n`;
};

Blockly.JavaScript['outer_motor_analog'] = function (block) {
    let pin = block.getFieldValue('OUTER_PIN');
    let power = Blockly.JavaScript.valueToCode(block, 'POWER', Blockly.JavaScript.ORDER_ATOMIC);
    return `outer_motor_analog(${pin}, ${power});\n`;
};

/**
 * Output Menu
 */
Blockly.JavaScript['delay_time'] = function(block) {
    var msec = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
    return 'sleep_ms(' + msec + ');\n';
};

Blockly.JavaScript['play_tone'] = function (block) {
    let octave = block.getFieldValue('OCTAVE');
    let note = block.getFieldValue('NOTE');
    note = notes[note][octave];
    let msec = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
    return `play_tone(${note}, ${msec});\n`;
}

Blockly.JavaScript['module_num_color_led'] = function (block) {
    let num = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ATOMIC);
    let color = Blockly.JavaScript.valueToCode(block, 'COLOR', Blockly.JavaScript.ORDER_NONE) || '\'\'';
    return `set_num_color_led(${num}, ${color});\n`;
}

Blockly.JavaScript['module_all_color_led'] = function (block) {
    let color = Blockly.JavaScript.valueToCode(block, 'COLOR', Blockly.JavaScript.ORDER_NONE) || '\'\'';
    return `set_all_color_led(${color});\n`;
}

Blockly.JavaScript['module_num_rgb_led'] = function (block) {
    let num = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ATOMIC);
    let red = Blockly.JavaScript.valueToCode(block, 'RED', Blockly.JavaScript.ORDER_ATOMIC);
    let green = Blockly.JavaScript.valueToCode(block, 'GREEN', Blockly.JavaScript.ORDER_ATOMIC);
    let blue = Blockly.JavaScript.valueToCode(block, 'BLUE', Blockly.JavaScript.ORDER_ATOMIC);
    return `set_num_rgb_led(${num}, ${red}, ${green}, ${blue});\n`
}

Blockly.JavaScript['module_all_rgb_led'] = function (block) {
    let red = Blockly.JavaScript.valueToCode(block, 'RED', Blockly.JavaScript.ORDER_ATOMIC);
    let green = Blockly.JavaScript.valueToCode(block, 'GREEN', Blockly.JavaScript.ORDER_ATOMIC);
    let blue = Blockly.JavaScript.valueToCode(block, 'BLUE', Blockly.JavaScript.ORDER_ATOMIC);
    return `set_all_rgb_led(${red}, ${green}, ${blue});\n`
}

Blockly.JavaScript['module_all_led_off'] = function (block) {
    return `all_led_off();\n`;
}

/**
 * Read Menu
 */
Blockly.JavaScript['get_analog_data'] = function (block) {
    let sensorIdx = block.getFieldValue('SENSOR');
    return [`get_analog_data('${sensorIdx}')`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
}

Blockly.JavaScript['get_mapping_analog_data'] = function (block) {
    let sensorIdx = block.getFieldValue('SENSOR');
    let transMin = Blockly.JavaScript.valueToCode(block, 'TRANS_MIN', Blockly.JavaScript.ORDER_ATOMIC);
    let transMax = Blockly.JavaScript.valueToCode(block, 'TRANS_MAX', Blockly.JavaScript.ORDER_ATOMIC);
    return [`get_mapping_analog_data('${sensorIdx}', ${transMin}, ${transMax})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
}

Blockly.JavaScript['get_ultrasonic_distance'] = function (block) {
    return [`get_ultrasonic_distance()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
}

Blockly.JavaScript['is_motion'] = function (block) {
    return [`is_motion()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
}

Blockly.JavaScript['is_infared_left'] = function (block) {
    return [`is_infared_left()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
}

Blockly.JavaScript['is_infared_right'] = function (block) {
    return [`is_infared_right()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
}
