executeCommands([
  'MOV 5,V00',
  'MOV 10,V01',
  'DEC V00',
  'ADD V00,V01'
])

executeCommands([
  'MOV 255,V00',
  'INC V00',
  'DEC V01',
  'DEC V01'
])

executeCommands([
  'MOV 10,V00',
  'DEC V00',
  'INC V01',
  'JMP 1',
  'INC V06'
])

function executeCommands(commands) {
  commands = commands
    .map(e => e.split(' '))
    .map(e => [e[0], e[1].split(',')])

  const cpu = {
    V00: 0,
    V01: 0,
    V02: 0,
    V03: 0,
    V04: 0,
    V05: 0,
    V06: 0,
    V07: 0
  }

  const cmd = {
    MOV: ([val1, val2]) => {
      cpu[val2] = ~~cpu[val1] + ~~val1
    },
    ADD: ([val1, val2]) => {
      cpu[val1] = cpu[val2] + cpu[val1] & 255
    },
    DEC: ([val]) => {
      cpu[val] = (cpu[val] - 1) & 255
    },
    INC: ([val]) => {
      cpu[val] = (cpu[val] + 1) & 255
    },
    JMP: ([index], cmdIndex) => {
      cpu.V00 && commands
        .slice(index, cmdIndex + 1)
        .forEach(([command, values]) => {
          cmd[command](values, cmdIndex)
        })
    }
  }

  commands.forEach(([command, values], i) => {
    cmd[command](values, i)
  })

  return Object.values(cpu)

  //-------------------------------------------------------------------------------

  // commands = commands
  //   .map(e => e.split(' '))
  //   .map(e => [e[0], e[1].split(',')])

  // const cpu = {
  //   V00: 0,
  //   V01: 0,
  //   V02: 0,
  //   V03: 0,
  //   V04: 0,
  //   V05: 0,
  //   V06: 0,
  //   V07: 0
  // }

  // const cmd = {
  //   MOV: ([val1, val2]) => {
  //     cpu[val2] = ~~cpu[val1] + ~~val1
  //   },
  //   ADD: ([val1, val2]) => {
  //     cpu[val1] = cpu[val2] + cpu[val1] & 255
  //   },
  //   DEC: ([val]) => {
  //     cpu[val] = (cpu[val] - 1) & 255
  //   },
  //   INC: ([val]) => {
  //     cpu[val] = (cpu[val] + 1) & 255
  //   },
  //   JMP: ([index]) => {
  //     commands.push(...commands.slice(
  //       index,
  //       (commands.findIndex(([e]) => e === 'JMP') + 1) * !!cpu.V00
  //     ))
  //   }
  // }

  // for (let i = 0; i < commands.length; i++) {
  //   cmd[commands[i][0]](commands[i][1])
  // }

  // return Object.values(cpu)

  //-------------------------------------------------------------------------------

  // 10 pts - without binary stuff & better JMP
  // commands = commands
  //   .map(e => e.split(' '))
  //   .map(e => [e[0], e[1].split(',')])
  
  // const cpu = {
  //   V00: 0,
  //   V01: 0,
  //   V02: 0,
  //   V03: 0,
  //   V04: 0,
  //   V05: 0,
  //   V06: 0,
  //   V07: 0
  // }

  // const cmd = {
  //   MOV: ([val1, val2]) => {
  //     cpu[val2] = ~~cpu[val1] + ~~val1
  //   },
  //   ADD: ([val1, val2]) => {
  //     const add = cpu[val2] + cpu[val1]
  //     cpu[val1] = add > 255 ? add - 256 : add
  //   },
  //   DEC: ([val]) => {
  //     const dec = cpu[val] - 1
  //     cpu[val] = dec < 0 ? 256 + dec : dec
  //   },
  //   INC: ([val]) => {
  //     const inc = cpu[val] + 1
  //     cpu[val] = inc > 255 ? inc - 256 : inc
  //   },
  //   JMP: ([index], cmdIndex) => {
  //     cpu.V00 && commands
  //       .slice(index, cmdIndex + 1)
  //       .forEach(([command, values]) => {
  //         cmd[command](values, cmdIndex)
  //       })
  //   }
  // }

  // commands.forEach(([command, values], i) => {
  //   cmd[command](values, i)
  // })

  // return Object.values(cpu)
}
